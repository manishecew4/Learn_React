import React, { useState } from 'react';
// import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {
    View,
    StyleSheet,
    Pressable
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

export default function Signup({navigation}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setmsg] = useState("")


    const handlePress = async () => {
        console.log("User", email + password);
        try {
            const isUserCreated = await auth().createUserWithEmailAndPassword(email, password);
            console.log("isUserCreated", isUserCreated)
            navigation.navigate('Signin');
        } catch (error) {
            console.log("Error", error)
            setmsg(error.message);
            alert(error.message)
        }
    }

    return (
        <View style={style.container}>


            <View style={style.card}>
                <View style={style.titleWrap}>
                    <Title style={style.title}>Signup</Title>
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
                        <Text>Already a member?</Text>
                        <Pressable onPress={() => navigation.navigate('Signin')}>
                            <Text style={style.gotoSignin}>Signin Here</Text>
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
})