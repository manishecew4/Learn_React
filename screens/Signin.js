import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import {
    View,
    StyleSheet,
    Pressable,
    ActivityIndicator
} from 'react-native'
import {
    TextInput,
    Text,
    Card,
    Title,
    Paragraph,
    Button,
    ImageBackground
} from 'react-native-paper';

export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setmsg] = useState("")
    const [isShown, setIsShown] = useState(false);

    const navigation = useNavigation();

    const handlePress = async () => {
        console.log("User", email + password);
        try {
            setIsShown(true);
            const isUserLogin = await auth().signInWithEmailAndPassword(email, password);
            console.log("isUserLogin", isUserLogin);
            setmsg("");
            navigation.navigate('UseState')
            setIsShown(false);
        } catch (error) {
            console.log("Error", error)
            setmsg(error.message);
        }
    }

    return (
        <View style={style.container}>
            <ActivityIndicator animating={isShown} style={style.loader} size="large" color="#3b63b3" />
            <Text>{msg}</Text>
            <View style={style.card}>
                <View style={style.titleWrap}>
                    <Title style={style.title}>Signin</Title>
                </View>
                <TextInput
                    style={style.input}
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
                <TextInput
                    style={style.input}
                    label="Password"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={true}
                />
                <View style={style.actions}>
                    <Button style={style.button} onPress={handlePress}>
                        <Text>Submit</Text>
                    </Button>
                    <View style={style.gotoSigninWrapper}>
                        <Text>Not a member?</Text>
                        <Pressable onPress={() => navigation.navigate('Signup')}>
                            <Text style={style.gotoSignin}>Signup Here</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: "90%",
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    input: {
        marginBottom: 16,
        borderBottomWidth: 0
    },
    titleWrap: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginBottom: 16,
    },
    actions: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "#e7e7e7e7",
        width: "100%",
    },
    gotoSigninWrapper: {
        flexDirection: 'row',
        marginTop: 16,
    },
    gotoSignin: {
        marginLeft: 10,
        color: "#89CFFD",
        fontWeight: "bold",
    },
    loader:{
        // backgroundColor: "#0000006b",
        // width: "100%",
        // height: "100%",
        // position: "absolute",
        // zIndex: 99
    }
})