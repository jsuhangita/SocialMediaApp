import React, { Component } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Proptypes from 'prop-types';
import { TabView, TabBar } from 'react-native-tab-view';
import ProductItemComponent from "./ProductItem.component";
import {FONT_SIZE_NORMAL, FONT_WEIGHT_BOLD} from "../../../styles/common.style";
import {theme} from "../../../styles/core.style";
import ProductDescription from "./ProductDescription";


export default class ProductDescriptionTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0, // eslint-disable-line
            routes: [ // eslint-disable-line
                { key: 'listing', title: 'Listing Info' },
                { key: 'favorite', title: 'Deskripsi' },
            ]
        };
        this._onIndexChange = this._onIndexChange.bind(this);
        this._renderScene = this._renderScene.bind(this);
    }

    _onIndexChange(index) {
        this.setState({ index });
    }

    _renderTabBar(props) {
        return (
            <TabBar
                {...props}
                getLabelText={({ route }) => route.title}
                activeColor={theme.PRIMARY}
                inactiveColor={theme.BLACK}
                labelStyle={{ ...FONT_SIZE_NORMAL, ...FONT_WEIGHT_BOLD }}
                indicatorStyle={{ backgroundColor: theme.PRIMARY }}
                style={{ backgroundColor: theme.WHITE }}
            />
        );
    }

    _renderScene({ route }) {
        switch (route.key) {
            case 'listing':
                return (<ProductDescription/>)

            case 'favorite':
                return (<ProductDescription/>)

            default:
                return null;
        }
    }


    render() {
        const { index, routes } = this.state;
        return (
            <View style={{height:400 }}>
                <TabView
                    lazy
                    renderTabBar={this._renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={this._renderScene}
                    onIndexChange={this._onIndexChange}
                />
            </View>
        );
    }
}


ProductDescriptionTabView.propTypes = {

};

ProductDescriptionTabView.defaultProps = {

};
