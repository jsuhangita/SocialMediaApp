import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from "react-native";
import productImage from '../../assets/ProductImage.png';
import {theme} from "../../styles/core.style";
import {
    FONT_SIZE_LARGE,
    FONT_SIZE_MEDIUM,
    FONT_SIZE_NORMAL,
    FONT_SIZE_SMALL,
    FONT_WEIGHT_BOLD
} from "../../styles/common.style";
import Icon from "react-native-vector-icons/FontAwesome5";
import LocationImage from '../../assets/Facilities/LocationImage.png'
import ProductDescriptionTabView from "./Components/ProductDescriptionTabView";

export default class ProductDetailPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView>
                    <Image source={productImage} style={{width:'100%'}}/>
                    <View style={styles.productInfo}>
                        <Text style={styles.itemName}>
                            Nava Park BSD City
                        </Text>
                        <Text style={styles.itemPrice}>
                            Rp 6.500.000.000
                        </Text>
                        <View style={styles.divider}/>
                        <View style={styles.locationContainer}>
                            <View style={{flex:2,paddingRight:theme.PADDING}}>
                                <Text style={styles.locationInfo}>
                                    Rumah Untuk Dijual
                                </Text>
                                <View style={styles.mapsContainer}>
                                    <Icon name={'map-marker-alt'} color={theme.GREY}/>
                                    <Text style={styles.mapText}>
                                        Jl. Edutown Kav III.1, BSD, Tangerang Selatan
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Image source={LocationImage}/>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <ProductDescriptionTabView/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    productInfo:{
        backgroundColor:theme.WHITE,
        padding:theme.PADDING,
    },
    itemName:{
        ...FONT_SIZE_MEDIUM,
    },
    itemPrice:{
        ...FONT_SIZE_LARGE,
        ...FONT_WEIGHT_BOLD,
    },
    divider:{
        height:2,
        width:'90%',
        backgroundColor: theme.FADE_GREY,
        alignSelf:'center',
        marginVertical:theme.PADDING,
    },
    mapsContainer:{
        marginTop:theme.PADDING_EXTRA_SMALL,
        flexDirection:'row',
        alignItems:'center'
    },
    mapText:{
        ...FONT_SIZE_SMALL,
        color:theme.GREY,
        marginLeft:theme.PADDING_SMALL,
    },
    locationInfo:{
        ...FONT_SIZE_NORMAL,
    },
    locationContainer:{
        flexDirection: 'row',
        alignItems:'center',
    }
})

ProductDetailPage.propTypes = {};

ProductDetailPage.defaultProps = {};