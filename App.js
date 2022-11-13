import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.taskContainer}>
        <Text style={styles.header}>Todo</Text>
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
