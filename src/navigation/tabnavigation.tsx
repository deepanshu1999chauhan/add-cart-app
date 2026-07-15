import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screen/home';
import AddCart from '../screen/addcart';
import Profile from '../screen/Profile';
import { Image, Pressable } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarButton: (props) => {
                    const { ref, ...rest } = props;

                    return (
                        <Pressable
                            {...rest}
                            android_ripple={{ color: 'transparent' }}
                        />
                    );
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: () => (
                    <Image source={require('../images/home.png')} style={{ width: 23, height: 23, resizeMode: 'cover' }} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Cart" component={AddCart} options={{
                tabBarIcon: () => (
                    <Image source={require('../images/cart.png')} style={{ width: 23, height: 23, resizeMode: 'cover' }} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: () => (
                    <Image source={require('../images/profile.png')} style={{ width: 23, height: 23, resizeMode: 'cover' }} />
                ),
                headerShown: false
            }} />
        </Tab.Navigator>
    );
};

export default TabNavigation;