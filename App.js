import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task.js';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.taskContainer}>
        <Text style={styles.header}>Todo</Text>
        <View style={styles.taskList}>
          <Task />
          <Task>Finish app styling</Task>
          <Task>Another task</Task>
        </View>
      </SafeAreaView>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.taskWriter}>
					<TextInput style={styles.textinput} placeholder='Add task' />
          <TouchableOpacity>
            <View style={styles.addButton}>
              <Text style={styles.plus}>+</Text>
            </View>
          </TouchableOpacity>
			</KeyboardAvoidingView>
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
  },
  taskList: {
    marginTop: 20,
  },  
  taskWriter: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  textinput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  plus: {
    fontSize: 30,
  }
});
