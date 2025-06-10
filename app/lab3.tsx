import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Increment from '../components/increment';
import Decrement from '../components/decrement';
import { Link } from 'expo-router';

export default function Lab3() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <Increment count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} />

      <Link href="/" asChild>
        <Pressable>
          <Text style={{ marginTop: 10, padding: 10, backgroundColor: 'blue', color: 'white', fontWeight: "bold" }}>Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});