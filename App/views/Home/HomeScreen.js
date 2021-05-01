import React, {Component} from 'react';
import { StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};