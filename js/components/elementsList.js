
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, StyleSheet, Image, View, Text, TextInput, TouchableHighlight, ListView } from 'react-native';

import { replaceRoute } from '../actions/route';
import theme from '../themes/base-theme';

import _times from 'lodash/times';
import ModalPicker from 'react-native-modal-picker';

import Carousel from './carousel';
import Event from './event';
import Week from './week';
import Checkpoint from './checkpoint';

const deviceWidth = Dimensions.get('window').width;

const fieldOptions = [
    { key: 'all', label: 'All' },
    { key: 'title', label: 'Title' },
    { key: 'description', label: 'Description' },
    { key: 'tags', label: 'Tags' }
];


class Search extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(this.props.elements || [])
        };
    }

    _renderProvidersSlides(providers) {
        const nbSlides = providers.length / 4;
        const nbDisplayed = (nbSlides < 3) ? Math.ceil(nbSlides) :  3;

        const components = _times(nbDisplayed, (i) => {
            return (
                <View style={styles.providersSlide} key={'providersSlide' + i}>
                    {
                        providers.slice(i * 4, (i + 1) * 4).map((provider, j) => {
                            if ((i + 1) * (j + 1) === 12 && providers.length > 12) { //The 12th and at least 13 providers
                                return this._renderLeftProviders(providers.length - 11); //so only 11 providers diplayed
                            } else {
                                return this._renderProvider(provider);
                            }
                        }).reverse()
                    }
                </View>
            );
        }).reverse();


        return {
            nbDisplayed: nbDisplayed,
            components: components
        };
    }

    _renderProvider(provider) {
        return (
            <View style={styles.provider} key={provider._id}>
                <Image source={provider.avatar} style={styles.avatar} />
                <Text style={styles.username}>{provider.username}</Text>
            </View>
        );
    }

    _renderLeftProviders(leftProviders) {
        return (
            <View style={styles.provider} key="leftProviders">
                <View style={[styles.avatar, {backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={{color: '#f9f9f9', fontSize: 18}}>+{leftProviders}</Text>
                </View>
                <Text style={styles.username}>Providers</Text>
            </View>
        );
    }

    _renderRightSlides(rowData) {
        if (this.props.type === 'activity') {
            return rowData.events.slice(0, 5).map((event) => {
                return <Event event={event} key={event._id} style={{height: 130, paddingLeft: 10}} />;
            });
        } else if (this.props.type === 'rent') {
            return _times(5, (i) => {
                return <Week rules={rowData.rules} add={i * 7} key={'week' + i} style={{marginTop: 0, marginHorizontal: 0}} />;
            });
        } else if (this.props.type === 'event') {
            const nbCheckpoints = rowData.itinerary.length;

            return _times(Math.ceil(nbCheckpoints / 2), (i) => {
                return (
                    <View style={styles.checkpointsSlide} key={'checkpointsSlide' + i}>
                        {
                            rowData.itinerary.slice(i * 2, (i + 1) * 2).map((checkpoint, j) => {
                                return <Checkpoint
                                            checkpoint={checkpoint}
                                            isFirst={i * 2 + j === 0}
                                            isLast={i * 2 + j === nbCheckpoints - 1}
                                            key={'checkpoint' + (i + 1) * (j + 1)}
                                            dateTextStyle={{color: '#4f4d4d'}}
                                            lineStyle={{backgroundColor: 'transparent'}}
                                        />;
                            })
                        }
                    </View>
                );
            });
        } else {
            return [];
        }
    }

    _renderMainSlide(rowData) {
        return (
            <View style={styles.mainSlide} key="mainSlide">
                {
                    (typeof rowData.images !== 'undefined')
                    ?
                        <Carousel style={styles.images} autoplay={false} orientation="vertical">
                            {rowData.images.map((image, i) => {
                                return <Image source={{uri: image}} key={'image' + i} style={styles.image} />;
                            })}
                        </Carousel>
                    : null
                }
                <View style={styles.content}>
                    <Text style={styles.title}>{rowData.title}</Text>
                    <Text style={styles.description}>{rowData.description}</Text>
                    <View style={styles.tags}>
                        {rowData.tags.map((tag) => {
                            return <View style={styles.tagWrap}><Text style={styles.tag}>{tag}</Text></View>;
                        })}
                    </View>
                </View>
            </View>
        );
    }

    _renderRow(rowData: object, sectionID: string, rowID: string) {
        const providersSlides = this._renderProvidersSlides(rowData.providers);
        const mainSlide = this._renderMainSlide(rowData);
        const rightSlides = this._renderRightSlides(rowData);

        return (
            <Carousel key={rowData._id} autoplay={false} chosen={providersSlides.nbDisplayed + 1} style={styles.element}>

                { [ ...providersSlides.components, mainSlide, ...rightSlides ] }

            </Carousel>
        );
    }

    render() {
        return (
            <View>
                <View style={styles.search}>
                    <TextInput style={styles.searchInput} placeholder="Search ..." placeholderTextColor="#a1a1a1" underlineColorAndroid={'transparent'} />
                    <ModalPicker data={fieldOptions} selectStyle={styles.field} selectTextStyle={styles.fieldText} initValue="All" />
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={styles.list}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({

    search: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 35,
        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 2
    },
        searchInput: {
            flex: 1,
            height: 35,
            paddingVertical: 0,
            paddingHorizontal: 7.5,
            color: '#f9f9f9',
            borderWidth: 0
        },
        field: {
            borderRadius: 0,
            borderWidth: 0,
            height: 35,
            paddingVertical: 0,
            paddingHorizontal: 10,
            justifyContent: 'center',
            backgroundColor: 'transparent'
        },
            fieldText: {
                color: '#f9f9f9',
                fontSize: 14
            },

    list: {
        marginVertical: 10,
        flex: 1
    },
        element: {
            width: deviceWidth - 20,
            height: 130,
            backgroundColor: '#f9f9f9',
            marginTop: 10,
            marginHorizontal: 10
        },

            mainSlide: {
                flexDirection: 'row'
            },
                images: {
                    width: 130,
                    height: 130
                },
                    image: {
                        resizeMode: 'cover',
                        height: 130,
                        flex: 1
                    },
                content: {
                    flex: 1,
                    justifyContent: 'space-between',
                    height: 130,
                    padding: 10
                },
                    title: {
                        fontSize: 16,
                        color: '#444',
                        fontWeight: 'bold'
                    },
                    description: {
                        fontSize: 13,
                        marginVertical: 5
                    },
                    tags: {
                        marginTop: 6.66,
                        flexDirection: 'row',
                        paddingVertical: -1,
                        paddingHorizontal: -3.33
                    },
                        tagWrap: {
                            backgroundColor: '#30a5ba',
                            paddingVertical: 1,
                            paddingHorizontal: 3.33,
                            margin: 2
                        },
                            tag: {
                                color: '#f9f9f9',
                                fontSize: 10
                            },

            providersSlide: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
            },
                provider: {
                    height: 130,
                    width: (deviceWidth - 20) / 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                    avatar: {
                        width: 56,
                        height: 56,
                        borderRadius: 56
                    },
                    username: {
                        fontSize: 14,
                        textAlign: 'center',
                        marginTop: 5,
                        width: 70,
                        height: 36.66
                    },

            checkpointsSlide: {
                paddingHorizontal: 20,
                justifyContent: 'center'
            }

});


const mapDispatchToProps = {
    replaceRoute
};

export default connect(null, mapDispatchToProps)(Search);
