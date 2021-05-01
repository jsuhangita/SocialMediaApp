import React, {Component} from 'react';
import { StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import UserProfileComponent from "./Components/UserProfile.component";
import HomeTabviewComponent from "./Components/HomeTabview.component";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <UserProfileComponent/>
                <HomeTabviewComponent/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

HomePage.propTypes = {};

HomePage.defaultProps = {};