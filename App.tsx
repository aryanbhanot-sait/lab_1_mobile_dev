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
// import { StatusBar } from 'expo-status-bar';
// import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

// type GroupMember = {
//   name: string;
//   github_repo: string;
//   group_no: string;
// };

// const groupMembers: GroupMember[] = [
//   { name: 'Ashnoor Kaur', github_repo: 'ashnoorkaur', group_no: '6' },
//   { name: 'Ravneet Kaur', github_repo: 'ravneet280', group_no: '6' },
//   { name: 'Deepinder Singh', github_repo: 'mahirk', group_no: '6' },
// ];


// export default function App() {
//   return (
//      <View style={styles.container}>
//       <Text style={styles.heading}>Group Members:</Text>
//       {groupMembers.map((member, index) => (
//         <Text key={index} style={styles.member}>
//           {member.name}
//         </Text>
//       ))}

//       <Pressable onPress={() => Alert.alert('Lab 1 done')}>
//         <Text style={styles.buttonText}>Submit Lab</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//    container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   member: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   buttonText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });