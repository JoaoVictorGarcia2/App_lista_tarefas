import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'test1', description: 'ffff', status: 'PEDNDENTE' },
  ]);
  
  const addTask = () => {
    navigation.navigate('AddTask', { onSave: saveTask });
  };

  const saveTask = (title, description) => {
    setTasks(prevTasks => [...prevTasks, { id: Math.random().toString(), title, description, status: 'PENDENTE' }]);
    navigation.goBack();
  };

  const removeTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const toggleStatus = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: task.status === 'PENDENTE' ? 'CONCLUIDO' : 'PENDENTE' } : task
      )
    );
  };

  const navigateToTaskDetails = task => {
    navigation.navigate('TaskDetails', { task });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigateToTaskDetails(item)} style={styles.itemTouch}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Text style={styles.status}>Status: {item.status}</Text>
        <Button title="Alterar Status" onPress={() => toggleStatus(item.id)} />
        <Button title="Excluir" onPress={() => removeTask(item.id)} color="red" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 5
  },
  itemTouch: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  description: {
    fontSize: 14,
    color: '#000'
  },
  buttonContainer: {
    alignItems: 'center'
  },
  status: {
    marginRight: 10
  },
  button: {
    borderRadius: 100
  }
});

export default TaskListScreen;
