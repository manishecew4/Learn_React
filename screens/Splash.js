import React, { useEffect } from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'
import Auth from '@react-native-firebase/auth';
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            Auth().onAuthStateChanged(user => {
                const routeName = user !== null? 'UseState' : 'Signin';
                navigation.dispatch(StackActions.replace(routeName));
            })

        },2000)

        return () => { }
    }, [])

    return (
        <View style={style.container}>
            <Image
                style={style.splashImg}
                source={require('../assets/img/home.gif')}
            />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    splashImg: {
        maxWidth: '100%',
    }
})