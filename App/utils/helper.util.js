import { Dimensions } from 'react-native';
import React from 'react';
import Bath from '../assets/Facilities/Bath.svg';
import Bed from '../assets/Facilities/Bed.svg';
import Car from '../assets/Facilities/car.svg';
import CarOnly from '../assets/Facilities/carOnly.svg';
import Flash from '../assets/Facilities/flash.svg';
import Size from '../assets/Facilities/size.svg';
import Stair from '../assets/Facilities/stair.svg';
import Phone from '../assets/Facilities/phone.svg';

export function RFValue(fontSize, standardScreenHeight = 678) {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const heightPercent = (fontSize * viewportHeight) / standardScreenHeight;
    return Math.round(heightPercent);
}

    export function getFacImage(name) {
        switch (name) {
            case 'bath': return <Bath/>;
            case 'bed': return <Bed/>;
            case 'car': return <Car/>;
            case 'carOnly': return <CarOnly/>;
            case 'flash': return <Flash/>;
            case 'size': return <Size/>;
            case 'stair': return <Stair/>;
            case 'call': return <Phone/>;
            default: return defaultImage;
        }
    }