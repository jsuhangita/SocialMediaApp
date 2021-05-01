import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomePage from "./views/Home/Home.page";
import {FONT_SIZE_NORMAL, FONT_WEIGHT_BOLD} from "./styles/common.style";
import ProductDetailPage from "./views/Home/ProductDetail.page";
import {theme} from "./styles/core.style";
import Icon from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();

export function stackScreen() {
    return(
        <Stack.Navigator
        >
            <Stack.Screen
                name="Home"
                component={HomePage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailPage}
                options={{
                    title: 'Detail Listing #80889',
                    headerShown: true,
                    headerLeft:()=>(<Icon name={'arrow-left'} style={{padding:theme.PADDING}} size={20} />),
                    headerRight:()=>(<Icon name={'heart'} style={{padding:theme.PADDING}} size={20}/>),
                    headerStyle: {
                        backgroundColor: theme.WHITE,
                    },
                    headerTintColor: theme.BLACK,
                    headerTitleStyle: {
                        ...FONT_SIZE_NORMAL,
                        ...FONT_WEIGHT_BOLD
                    },
                }}
            />
        </Stack.Navigator>
    )
}
