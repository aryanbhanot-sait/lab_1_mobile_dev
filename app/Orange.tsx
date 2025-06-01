import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function ApplePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Orange</Text>
            <Image
                source={require('../assets/orange.jpg')}
                style={styles.image}
            />
            <Link href="/" asChild>
                <Pressable>
                    <Text style={{ marginTop: 10, padding: 10, backgroundColor: 'blue', color: 'white', fontWeight: "bold" }}>Back to Home</Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 30, marginBottom: 20 },
    image: { width: 200, height: 200, borderRadius: 10 },
});