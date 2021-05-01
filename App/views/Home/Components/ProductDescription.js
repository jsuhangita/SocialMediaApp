import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from "react-native";
import FacilitiesComponent from "./Facilities.component";
import {map} from 'lodash';
import {theme} from "../../../styles/core.style";


const LIST_FACILITIES =[
    {
        type:'bed',
        title:'Kamar Tidur',
        value:'3 + 1'
    },
    {
        type:'bath',
        title:'Kamar Mandi',
        value:'3 + 1'
    },
    {
        type:'size',
        title:'Luas Bangunan',
        value:'250',
        unit:'M2'
    },
    {
        type:'size',
        title:'Luas Tanah',
        value:'300',
        unit:'M2'
    },
    {
        type:'size',
        title:'(P X L) Bangunan',
        value:'25 X 10',
        unit:'M'
    },
    {
        type:'size',
        title:'(P X L) Tanah',
        value:'3 X 10M',
        unit:'M'
    },
    {
        type:'stair',
        title:'Jumlah Lantai',
        value:'2',
    },
]
export default class ProductDescription extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem(item){
        return(
            <FacilitiesComponent
                {...item}
            />
        )
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    {
                        map(LIST_FACILITIES,this._renderItem)
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:Dimensions.get('window').width,
        backgroundColor:theme.WHITE,
    }
})

ProductDescription.propTypes = {};

ProductDescription.defaultProps = {};