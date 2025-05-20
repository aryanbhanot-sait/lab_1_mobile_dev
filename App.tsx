import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';

export default function App() {
  let sampleList = [
    { id: 1, name: "Aryan", github: "aryanbhanot-sait", group: "1" },
    { id: 2, name: "Nishita", github: "nishita2094", group: "1" },
    { id: 3, name: "Vorain", github: "voraingautam", group: "1" }]
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {sampleList.map((item) => (
        <Text key={item.id} style={{ fontSize: 20 }}>
          <Text style={styles.heading}>Group Members: </Text>
          {item.name}
        </Text>
      ))}
      <Pressable onPress={() => Alert.alert("I am done with the Lab!")}>
        <Text style={styles.button}>Submit Lab</Text>
      </Pressable>

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