import { Dimensions } from 'react-native';

export function RFValue(fontSize, standardScreenHeight = 678) {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const heightPercent = (fontSize * viewportHeight) / standardScreenHeight;
    return Math.round(heightPercent);
}