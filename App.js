import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task.js';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.taskContainer}>
        <Text style={styles.header}>Todo</Text>
        <Task />
        <Task>Finish app styling</Task>
        <Task>Another task</Task>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  taskContainer: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
