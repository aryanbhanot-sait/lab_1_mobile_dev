import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';
import FruitList from '../components/fruitlist';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome everyone to Aryan's App!</Text>
            <Pressable onPress={() => Alert.alert("I am done with the Lab!")}>
                <Text style={styles.button}>Submit Lab</Text>
            </Pressable>
            <Text style={styles.heading}>Welcome to the Fruit App! </Text>
            <FruitList />

            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    heading: {
        fontSize: 20,
        marginBottom: 10,
    }
});