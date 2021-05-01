import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";
import { Avatar } from 'react-native-elements';
import {theme} from "../../../styles/core.style";
import pp from '../../../assets/Bitmap.png'
import {FONT_SIZE_NORMAL, FONT_WEIGHT_BOLD} from "../../../styles/common.style";


export default class userProfileComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Avatar
                    rounded
                    source={pp}
                    size="large"
                />
                 <Text style={styles.username}>
                     Henry Scott
                </Text>
                <Text style={styles.location}>
                    Member Broker Century 21 BSD City
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:theme.PADDING,
        backgroundColor:theme.WHITE,
    },
    username:{
        ...FONT_SIZE_NORMAL,
        ...FONT_WEIGHT_BOLD,
    },
    location:{
        ...FONT_SIZE_NORMAL,
    }
})

userProfileComponent.propTypes = {};

userProfileComponent.defaultProps = {};