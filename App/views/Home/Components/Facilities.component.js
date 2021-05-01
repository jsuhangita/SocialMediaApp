import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";
import {getFacImage} from "../../../utils/helper.util";
import {theme} from "../../../styles/core.style";
import {FONT_SIZE_MEDIUM, FONT_SIZE_NORMAL, FONT_SIZE_SMALL, FONT_WEIGHT_BOLD} from "../../../styles/common.style";

export default class FacilitiesComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title,value,type } = this.props;
        return (
            <View>
                <View style={styles.facContainer}>
                    <View>
                        <View style={styles.imageContainer}>
                            {getFacImage(type)}
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text style={styles.value}>
                            {value}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    facContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:theme.PADDING,
    },
    imageContainer:{
        padding:theme.PADDING,
        borderRadius:20,
        borderWidth:2,
        borderColor:theme.FADE_GREY,
    },
    textContainer:{
        paddingHorizontal:theme.PADDING,
    },
    title:{
        ...FONT_SIZE_SMALL,
        color:theme.GREY,
    },
    value:{
        ...FONT_SIZE_MEDIUM,
        ...FONT_WEIGHT_BOLD,
    }
})

FacilitiesComponent.propTypes = {};

FacilitiesComponent.defaultProps = {};