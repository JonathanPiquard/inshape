'use strict';

const TimerMixin = require('react-timer-mixin');

import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';


const PAGE_CHANGE_DELAY = 4000;

/**
 * Animates pages in cycle
 * (loop possible if children count > 1)
*/
var Carousel = React.createClass({
  propTypes:{
    children: React.PropTypes.node.isRequired,
    delay: React.PropTypes.number,
    style: View.propTypes.style,
    pageStyle: View.propTypes.style,
    contentContainerStyle: View.propTypes.style,
    autoplay: React.PropTypes.bool,
    pageInfo: React.PropTypes.bool,
    pageInfoBackgroundColor: React.PropTypes.string,
    pageInfoTextStyle: Text.propTypes.style,
    pageInfoTextSeparator: React.PropTypes.string,
    onAnimateNextPage: React.PropTypes.func,
    chosen: React.PropTypes.number,
    orientation: React.PropTypes.string
  },
  mixins: [TimerMixin],
  getDefaultProps() {
    return {
      delay: PAGE_CHANGE_DELAY,
      autoplay: true,
      pageInfo: false,
      pageInfoBackgroundColor: 'rgba(0, 0, 0, 0.25)',
      pageInfoTextSeparator: ' / ',
      orientation: 'horizontal'
    };
  },
  getInitialState() {
    if (!!this.props.children) {
      var childrenCount = this.props.children.length;
      return {
        contentOffset: {x: 0, y: 0},
        currentPage: childrenCount > 1 ? 1 : 0,
        chosen: this.props.chosen == undefined ? 0 : this.props.chosen,
        hasChildren: true,
        isHorizontal: this.props.orientation === 'horizontal',
        size: { width: 0, height: 0 }
      };
    } else {
      return {
        hasChildren: false,
        isHorizontal: this.props.orientation === 'horizontal',
        size: { width: 0, height: 0 }
      }
    }
  },
  componentDidMount(){
    if (this.state.hasChildren) {
      this._setUpTimer();
    }
  },
  _onScrollBegin(event) {
    this.clearTimeout(this.timer);
  },
  _onScrollEnd(event) {
    this._setUpTimer();

    var offset = Object.assign({}, event.nativeEvent.contentOffset);
    var childrenCount = this.props.children.length;

    if (this.state.isHorizontal) {
      if (offset.x === 0) {
        offset.x = childrenCount * this.state.size.width;
      } else if (offset.x == (childrenCount+1)*this.state.size.width) {
        offset.x = this.state.size.width;
      }

      this._calculateCurrentPage(offset.x);
    }
    else {
      if (offset.y === 0) {
        offset.y = childrenCount * this.state.size.height;
      } else if (offset.y == (childrenCount+1)*this.state.size.height) {
        offset.y = this.state.size.height;
      }

      this._calculateCurrentPage(offset.y);
    }

    this.setState({contentOffset: offset});
  },
  _onLayout() {
    let self = this;
    this.refs.container.measure(function(x, y, w, h, px, py) {
      self.setState({
        contentOffset: { x: w, y: h },
        size: { width: w, height: h }
      });
    });

    this.refs.scrollView.scrollTo((this.state.isHorizontal) ? { y: 0, x: this.props.chosen*this.state.size.width } : { y: this.props.chosen*this.state.size.height, x: 0 });
  },
  _setUpTimer() {
    //only for cycling
    if (this.props.autoplay && this.props.children.length > 1) {
      this.clearTimeout(this.timer);
      this.timer = this.setTimeout(this._animateNextPage, this.props.delay);
    }
  },
  _animateNextPage() {
    var k = this.state.currentPage;
    k++;

    this.setState({currentPage: k});
    this.refs.scrollView.scrollTo((this.state.isHorizontal) ? { y: 0, x: k*this.state.size.width } : { y: k*this.state.size.height, x: 0 });
    this._setUpTimer();
  },
  _calculateCurrentPage(offset) {
    var length = (this.state.isHorizontal) ? this.state.size.width : this.state.size.height;
    var page = Math.floor((offset - length/2) / length) + 1;
    this.setState({currentPage: page}, () => {
      if (this.props.onAnimateNextPage) {
        this.props.onAnimateNextPage(this.state.currentPage)
      }
    });
  },
  _renderPageInfo(pageLength) {
    return (
      <View style={styles.pageInfoBottomContainer} pointerEvents="none">
        <View style={styles.pageInfoContainer}>
          <View style={[styles.pageInfoPill, { backgroundColor: this.props.pageInfoBackgroundColor }]}>
            <Text style={[styles.pageInfoText, this.props.pageInfoTextStyle]}>{`${this.state.currentPage}${this.props.pageInfoTextSeparator}${pageLength}`}</Text>
          </View>
        </View>
      </View>
    );
  },
  //TODO: add optional `dots` for displaying current page (like pageControl)
  render() {
    var pages = [],
      contents,
      containerProps;

    var size = this.state.size;

    containerProps = {
      ref: 'container',
      onLayout: this._onLayout,
      style: [this.props.style]
    };

    if (!this.state.hasChildren) {
      contents = (
        <Text style={{backgroundColor: 'white'}}>
          You are supposed to add children inside Carousel
        </Text>
      );
    }

    var children = this.props.children;

    //to make infinite pages structure like this is needed: 3-1-2-3-1
    //add last one at the 1st place
    if (children.length >= 1) {
      pages.push(children[children.length-1]);
    }

    //add all pages
    for (var i=0; i<children.length; i++) {
      pages.push(children[i]);
    }

    //add first one at the last place
    if (children.length >= 1) {
      pages.push(children[0]);
    }

    pages = pages.map((page, i) =>
        <View style={[{width: size.width, height: size.height}, this.props.pageStyle]} key={"page"+i}>
          {page}
        </View>
    );

    contents = (
      <ScrollView
        ref='scrollView'
        onScrollBeginDrag={this._onScrollBegin}
        onMomentumScrollEnd={this._onScrollEnd}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={this.state.isHorizontal}
        pagingEnabled={true}
        bounces={false}
        contentOffset={this.state.contentOffset}
        contentContainerStyle={[
          styles.horizontalScroll,
          this.props.contentContainerStyle,
          (this.state.isHorizontal) ? {
            width: size.width*(this.props.children.length+(this.props.children.length>1?2:0)),
            height: size.height
          } :
          {
            width: size.width,
            height: size.height*(this.props.children.length+(this.props.children.length>1?2:0))
          }
        ]}
      >
        {pages}
      </ScrollView>);
      return (
        <View {...containerProps}>
          {contents}
          {this.props.pageInfo && this._renderPageInfo(children.length)}
        </View>
      );
  },
});

var styles = StyleSheet.create({
  horizontalScroll: {
    position:'absolute',
  },
  pageInfoBottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  pageInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  pageInfoPill: {
    width: 80,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageInfoText: {
    textAlign: 'center',
  }
});

module.exports = Carousel;
