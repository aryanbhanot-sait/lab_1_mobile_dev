import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Pressable, Button } from 'react-native';
import FruitList from '../components/fruitlist';
import { Link } from 'expo-router';

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

            <View style={styles.container}>
                <Link href="/lab3" asChild>
                    <Button title="Lab 3 - made by Aryan" />
                </Link>
            </View>

            <Link href="/lab4" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.heading}>Go to Lab 4</Text>
                </Pressable>
            </Link>

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