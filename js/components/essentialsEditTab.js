'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TagInput from 'react-native-tag-input';


class EssentialsEditTab extends Component {

    render() {
        return (
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.inputText} placeholder="Road Trip : Cyclism between ..." placeholderTextColor="#a1a1a1"/>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={[styles.inputText, { lineHeight: -15 }]} numberOfLines={5} multiline={true} placeholder="Hey Everyone, I have been training myself the last 3 months and I looking for partners to take the road for about one week or two (if we want to keep going) ..." placeholderTextColor="#a1a1a1"/>
                </View>
                {
                    (this.props.location)
                    ?
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Location</Text>
                            <TextInput style={styles.inputText} placeholder="New York" placeholderTextColor="#a1a1a1"/>
                        </View>
                    : null
                }
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Tags</Text>
                    <TagInput
                        value={[]}
                        onChange={(tags) => null}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

  form: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 20
  },
      inputGroup: {
          marginBottom: 25,
      },
          inputText: {
              alignSelf: 'flex-start',
              paddingTop: 0,
              paddingBottom: 7.5,
              color: '#181818'
          }

});

export default EssentialsEditTab;
