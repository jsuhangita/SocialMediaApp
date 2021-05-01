import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./views/Home/HomeScreen";

const Stack = createStackNavigator();

export function stackScreen() {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}
