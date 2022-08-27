import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Pressable,
    useWindowDimensions,
    FlatList
} from 'react-native'

const UseEffect = () => {

    const [datafetched, setDatafetched] = useState([])

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://fakestoreapi.com/products", requestOptions)
            .then(response => response.text())
            .then(result => {
                // console.log(result);
                console.log("Title", result[0]);
                setDatafetched(result);
            })
            .catch(error => console.log('error', error));

    }, [])




    const { styles } = useStyle();

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>UseEffect</Text>
            <View style={styles.panel}>
                <View style={styles.categoryPanel}>
                    <Text>Hello</Text>
                    <FlatList
                        data={datafetched}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View key={item.id}>
                                    <Text style={{ padding: 20 }}>{item.id}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={styles.productPanel}>

                </View>
            </View>
        </View>
    )
}

const useStyle = () => {
    const device_width = useWindowDimensions().width;
    const device_height = useWindowDimensions().height;
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: "#C6DCE4",
            height: device_height
        },
        headerText: {
            fontSize: 25,
            paddingVertical: 16
        },
        panel: {
            flex: 1,
            width: device_width,
            backgroundColor: "#FFFF"
        },
        w_100: {
            width: device_width
        }
    })
    return { styles }
}
export default UseEffect