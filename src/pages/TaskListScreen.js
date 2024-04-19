import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    navigation.navigate('AddTask', { onSave: saveTask });
  };

  const saveTask = (title, description) => {
    setTasks(prevTasks => [...prevTasks, { id: Math.random().toString(), title, description }]);
    navigation.goBack();
  };

  const removeTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => removeTask(item.id)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
    </View>
  );
};

export default TaskListScreen;
