
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight, ListView } from 'react-native';

import { replaceRoute } from '../../actions/route';
import { updateActivities } from '../../actions/collections';
import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';
import ElementsList from '../../components/elementsList';


class Activities extends Component {

    componentDidMount() {
        this.activities = this.props.app.service('activities')
                                            .find({providers: { $elemMatch: this.props.userId }}, this.props.updateActivities);
                                            //.debounce(6000)
                                            //.subscribe(this.props.updateActivities);
    }

    componentWillUnmount() {
        this.activities.unsubscribe();
    }

    render() {
        return (
            <Page title="Activities" rightActions={{icon: require('../../../images/icons/glyphs/add.png'), redirectTo: 'editActivity'}}>
                <ElementsList
                    elements={this.props.activities}
                    type="activity"
                />
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    activities: state.collections.activities,
    userId: state.auth.profile._id
});

const mapDispatchToProps = {
    replaceRoute,
    updateActivities
};

export default connect(null, mapDispatchToProps)(Activities);
