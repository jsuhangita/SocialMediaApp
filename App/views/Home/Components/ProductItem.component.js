import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import productImage from '../../../assets/ProductImage.png';
import {theme} from "../../../styles/core.style";
import {Avatar} from "react-native-elements";
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import pp from "../../../assets/Bitmap.png";
import {FONT_SIZE_MEDIUM, FONT_SIZE_NORMAL, FONT_SIZE_SMALL, FONT_WEIGHT_BOLD} from "../../../styles/common.style";
import BedImage from '../../../assets/Facilities/Bed.svg';
import BathImage from '../../../assets/Facilities/Bath.svg';
import SizeImage from '../../../assets/Facilities/size.svg';

export default class ProductItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.productContainer}>
                <View style={styles.avatarContainer}>
                    <View style={styles.userContainer}>
                        <View style={styles.userInfo}>
                            <Avatar
                                rounded
                                source={pp}
                                size="medium"
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.username}>
                                    Henry Scott
                                </Text>
                                <Text style={styles.location}>
                                    Century 21 BSD City
                                </Text>
                            </View>
                        </View>
                        <Icon
                            name="ellipsis-v"
                            size={20}
                        />
                    </View>
                </View>
                <View style={{width:'100%'}}>
                    <Image
                        source={productImage}
                        style={styles.image}
                    />
                </View>
                <View style={styles.productInfo}>
                    <Text style={styles.productLocation}>
                        Nava Park BSD City
                    </Text>
                    <Text style={styles.productPrice}>
                        Rp.6.500.000
                    </Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.type}>
                            Rumah
                        </Text>
                        <View style={styles.status}>
                            <Text style={styles.statusText}>
                                Dijual
                            </Text>
                        </View>
                    </View>
                    <View style={styles.mapsContainer}>
                        <Icon name={'map-marker-alt'} color={theme.GREY}/>
                        <Text style={styles.mapText}>
                            Jl. Edutown Kav III.1, BSD, Tangerang Selatan
                        </Text>
                    </View>
                </View>
                <View style={styles.facilityContainer}>
                    <View style={styles.facItem}>
                        <View style={styles.facImageContainer}>
                            <BedImage/>
                            <Text style={styles.facValue}>
                                3 + 1
                            </Text>
                        </View>
                        <Text style={styles.facName}>
                            K. tidur
                        </Text>
                    </View>
                    <View style={{height:'65%',width:1,backgroundColor:theme.FADE_GREY,marginTop:theme.PADDING}}/>
                    <View style={styles.facItem}>
                        <View style={styles.facImageContainer}>
                            <BathImage/>
                            <Text style={styles.facValue}>
                                3 + 1
                            </Text>
                        </View>
                        <Text style={styles.facName}>
                            K. Mandi
                        </Text>
                    </View>
                    <View style={{height:'65%',width:1,backgroundColor:theme.FADE_GREY,marginTop:theme.PADDING}}/>
                    <View style={styles.facItem}>
                        <View style={styles.facImageContainer}>
                            <SizeImage/>
                            <Text style={styles.facValue}>
                                300m
                            </Text>
                        </View>
                        <Text style={styles.facName}>
                            L. Tanah
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    productContainer:{
        borderRadius:20,
        backgroundColor:theme.WHITE,
        margin:theme.PADDING,
    },
    avatarContainer:{
        padding:theme.PADDING,
    },
    image:{
        width:'100%',
        height:131,
    },
    userContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    textContainer:{
        paddingHorizontal:theme.PADDING,
    },
    username:{
        ...FONT_SIZE_NORMAL,
        ...FONT_WEIGHT_BOLD,
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center',
    },
    location:{
        ...FONT_SIZE_SMALL,
    },
    productInfo:{
        padding:theme.PADDING,
    },
    productLocation:{
        ...FONT_SIZE_NORMAL,
        marginRight:theme.PADDING,
    },
    productPrice:{
        ...FONT_SIZE_MEDIUM,
        ...FONT_WEIGHT_BOLD,
        marginRight:theme.PADDING,
    },
    statusContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    type:{
        ...FONT_SIZE_NORMAL,
        ...FONT_WEIGHT_BOLD,
        marginRight:theme.PADDING,
    },
    status:{
        backgroundColor: theme.BLUE,
        borderRadius: 5,
        paddingVertical:theme.PADDING_EXTRA_SMALL,
        paddingHorizontal: theme.PADDING,
    },
    statusText:{
        ...FONT_SIZE_NORMAL,
        ...FONT_WEIGHT_BOLD,
        color:theme.WHITE,
    },
    mapsContainer:{
        marginTop:theme.PADDING_EXTRA_SMALL,
        flexDirection:'row',
        alignItems:'center'
    },
    mapText:{
        ...FONT_SIZE_NORMAL,
        color:theme.GREY,
        marginLeft:theme.PADDING_SMALL,
    },
    facilityContainer:{
        flexDirection:'row',
    },
    facImage:{
        height:20,
        width:20,
    },
    facItem:{
        flex:1,
        padding:theme.PADDING,
        // paddingHorizontal:theme.PADDING_SMALL,
    },
    facImageContainer:{
        flexDirection:'row',
    },
    facValue:{
        ...FONT_SIZE_NORMAL,
        ...FONT_WEIGHT_BOLD,
        marginLeft: theme.PADDING,
    },
    facName:{
        ...FONT_SIZE_NORMAL,
        color:theme.GREY,
        marginTop: theme.PADDING_SMALL,
    }
})

ProductItemComponent.propTypes = {};

ProductItemComponent.defaultProps = {};