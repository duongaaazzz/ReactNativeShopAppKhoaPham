import React, { Component } from 'react';
import {
        StyleSheet,
        Text,
        View,
        StatusBar,
} from 'react-native';

StatusBar.setHidden(true);

export default class ChangeInfo extends Component {

        static navigationOptions = {
                title: 'ChangeInfo'
        };
        render() {
                return (
                        <View>
                                <Text>
                                        ChangeInfo
                               </Text>
                        </View>
                );
        }
}

