import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Tarefa 1', description: 'Descrição da Tarefa 1', status: 'pendente' },
    // ... outras tarefas
  ]);
  

  const addTask = () => {
    navigation.navigate('AddTask', { onSave: saveTask });
  };

  const saveTask = (title, description) => {
    setTasks(prevTasks => [...prevTasks, { id: Math.random().toString(), title, description, status: 'pendente' }]);
    navigation.goBack();
  };

  const removeTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const toggleStatus = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: task.status === 'pendente' ? 'concluído' : 'pendente' } : task
      )
    );
  };

  const navigateToTaskDetails = task => {
    navigation.navigate('TaskDetails', { task });
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <TouchableOpacity onPress={() => navigateToTaskDetails(item)}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Text>Status: {item.status}</Text>
        <Button title="Alterar Status" onPress={() => toggleStatus(item.id)} />
        <Button title="Excluir" onPress={() => removeTask(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
    </View>
  );
};

export default TaskListScreen;
