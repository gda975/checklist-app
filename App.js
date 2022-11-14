import { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task.js';

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    Keyboard.dismiss()
    setTaskList([...taskList, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskList(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.taskContainer}>
        <Text style={styles.header}>Todo</Text>
        <View style={styles.taskList}>
          {taskList.map((e, index) => 
            {return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task>{e}</Task>
              </TouchableOpacity>
            )})}
        </View>
      </SafeAreaView>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.taskWriter}>
					<TextInput 
            style={styles.textinput} 
            placeholder='Add task' 
            value={task}
            onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => addTask()}>
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
