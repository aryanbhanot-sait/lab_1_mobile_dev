import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const fruits = ["Apple", "Orange", "Mango"];

export default function FruitList() {
  return (
    <View style={styles.container}>
      {fruits.map((fruit) => (
        <Link key={fruit} href={`/${fruit}`}>
          <Text style={styles.fruit}>{fruit}</Text>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  fruit: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
    backgroundColor: "lightgreen",
    padding: 20,
    borderRadius: 5,
    fontWeight: "bold"
  }
});