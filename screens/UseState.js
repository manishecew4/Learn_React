import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Pressable
} from 'react-native'

const UseState = () => {

    const [showData, setShowData] = useState(null);
    const [storeData, setStoreData] = useState(null);
    const [count, setcount] = useState(0);
    const [togwrd, setTogwrd] = useState("Default Words");


    const handlePress = () => {
        setShowData(storeData);
        // alert(storeData);
    }

    // Incremental Decremental Code
    const handleIncrease = () => {
        console.log('Incremental', count);
        setcount(count + 1)
    }
    const handleDecrease = () => {
        console.log('Decremental', count);
        setcount(count - 1)
    }
    const toggleWords = () =>{
        const val = togwrd;
        if (val === "Default Words"){
            setTogwrd("Toggaled Word")
        }else{
            setTogwrd("Default Words")
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>UseState</Text>
            <View style={styles.card}>
                <Text>{showData}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type Here..."
                    onChangeText={setStoreData}
                    value={storeData}
                />
                <Pressable style={styles.button} onPress={handlePress}>
                    <Text style={styles.h5}>Submit</Text>
                </Pressable>

            </View>
            <View style={styles.card}>
                <View style={styles.flex_row}>
                    <Pressable style={styles.btn_inc} onPress={handleDecrease}>
                        <Text style={styles.h5}>-</Text>
                    </Pressable>
                    <TextInput style={styles.showNumber}>{count}</TextInput>
                    <Pressable style={styles.btn_inc} onPress={handleIncrease}>
                        <Text style={styles.h5}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.flex_column}>
                    <Text style={styles.h5}>{togwrd}</Text>
                    <Pressable style={styles.btn_inc} onPress={toggleWords}>
                        <Text style={styles.h5}>Toggle</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
const btn_color = "#C6DCE4"
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    card: {
        width: "100%",
        alignItems: 'center',
        borderColor: '#e7e7e7e7',
        borderBottomWidth: 1,
        padding: 16,
        marginBottom: 16,
    },
    flex_row: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        width: '90%',
        marginBottom: 10,
        borderColor: '#e7e7e7e7',
    },
    button: {
        backgroundColor: btn_color,
        width: 200,
        padding: 5,
        alignItems: 'center',
    },
    showNumber: {
        borderWidth: 1,
        borderColor: '#e7e7e7e7',
        minWidth: 100,
        alignItems: 'center',
        paddingLeft: 16,
        marginHorizontal: 10,
    },
    btn_inc: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: btn_color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
    },
    headerText: {
        fontSize: 25,
        paddingVertical: 16
    },
    h5:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8
    },
})

export default UseState;