'use strict';

import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';

class ChatBtn extends Component {
    render() {
        return (
            <TouchableHighlight style={[{justifyContent: 'center', alignItems: 'center'}, this.props.style]}>
                <Image source={require('../../images/icons/chat.png')} style={{height: this.props.size, width: this.props.size}} />
            </TouchableHighlight>
        );
    }
}

ChatBtn.propTypes = { size: React.PropTypes.number };
ChatBtn.defaultProps = { size: 42 };


export default ChatBtn;
