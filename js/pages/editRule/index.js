
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import { pushNewRoute } from '../../actions/route';

import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';

import ModalPicker from 'react-native-modal-picker';
import DatePicker from 'react-native-datepicker';

import SubmitBtn from '../../components/submitBtn';


class DayPicker extends Component {
    render() {
        return (
            <DatePicker
                date={this.props.value}
                style={{alignItems: 'flex-start'}}
                mode="date"
                format="L"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconSource={require('../../../images/icons/calendar.png')}
                customStyles={{
                    dateIcon: {
                        width: 24,
                        height: 24,
                        marginBottom: 4,
                        alignSelf: 'flex-end'
                    },
                    dateInput: {
                      marginLeft: 0,
                      width: 76.66,
                      height: 30,
                      paddingBottom: -6.66,
                      borderWidth: 0,
                      borderBottomWidth: 1
                    }
                }}
            />
        );
    }
}

class TimePicker extends Component {
    render() {
        return (
            <DatePicker
                date={this.props.value}
                style={{alignItems: 'center'}}
                mode="time"
                format="LT"confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconSource={require('../../../images/icons/calendar.png')}
                customStyles={{
                    dateIcon: {
                        width: 24,
                        height: 24,
                        marginBottom: 4,
                        alignSelf: 'flex-end'
                    },
                    dateInput: {
                      marginLeft: 0,
                      width: 60,
                      height: 30,
                      paddingBottom: -6.66,
                      borderWidth: 0,
                      borderBottomWidth: 1
                    }
                }}
            />
        );
    }
}


const recurrenceOptions = [
    { key: 'one-time', label: 'One Time' },
    { key: 'every-day', label: 'Every Day' },
    { key: 'every-working-day', label: 'Every Working Day (Mon - Fri)' },
    { key: 'every-weekend', label: 'Every Weekend' },
    { key: 'every-monday', label: 'Every Monday' },
    { key: 'every-tuesday', label: 'Every Tuesday' },
    { key: 'every-wednesday', label: 'Every Wednesday' },
    { key: 'every-thursday', label: 'Every Thursday' },
    { key: 'every-friday', label: 'Every Friday' },
    { key: 'every-saturday', label: 'Every Saturday' },
    { key: 'every-sunday', label: 'Every Sunday' }
];

class EditRule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newPeriod: { from: '20h00', to: '22h00' },
            rule: {
                recurrence: 'one-time',
                date: {
                    day: '12/07/16'
                },
                periods: [
                    { from: '08h00', to: '12h00' },
                    { from: '14h00', to: '18h00' },
                ]
            }
        }
    }

    render() {
        return (
            <Page title="Edit Rule" rightActions={{icon: require('../../../images/icons/glyphs/close.png'), redirectTo: 'back'}}>>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Recurrence</Text>
                        <ModalPicker data={recurrenceOptions} selectStyle={styles.recurrence} initValue="One Time" />
                    </View>
                    {
                        (this.state.rule.recurrence === 'one-time')
                        ?   <View style={styles.inputGroup}>
                                <Text style={styles.label}>Date</Text>
                                <DayPicker value={this.state.rule.date.day} />
                            </View>
                        :   <View style={styles.inputGroup}>
                                <Text style={styles.label}>From</Text>
                                <DayPicker value={this.state.rule.date.from} />
                                <Text style={styles.label}>To</Text>
                                <DayPicker value={this.state.rule.date.to} />
                            </View>
                    }
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Periods</Text>
                        {
                            this.state.rule.periods.map((period) => {
                                return <View style={styles.period}>
                                    <TimePicker value={period.from} />
                                    <Text style={styles.dateLabel}>-</Text>
                                    <TimePicker value={period.to} />
                                    <TouchableHighlight style={styles.action}>
                                        <Image source={require('../../../images/icons/trash.png')} style={{height: 32, width: 32}} />
                                    </TouchableHighlight>
                                </View>
                            })
                        }
                        <View style={styles.period}>
                            <TimePicker value={this.state.newPeriod.from} />
                            <Text style={styles.dateLabel}>-</Text>
                            <TimePicker value={this.state.newPeriod.to} />
                            <TouchableHighlight style={styles.action}>
                                <Image source={require('../../../images/icons/add-rule.png')} style={{height: 32, width: 32}} />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <SubmitBtn />
                </View>

            </Page>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute
};

export default connect(null, mapDispatchToProps)(EditRule);
