import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Main from './pages/main';
import TaskListScreen from './pages/TaskListScreen';
import AddTaskScreen from './pages/AddTaskScreen';
import TaskDetailsScreen from './pages/TaskDetailScreen'; 

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{ title: 'Lista de Tarefas' }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ title: 'Adicionar Tarefa' }}
        />
        <Stack.Screen
          name="TaskDetails" 
          component={TaskDetailsScreen} 
          options={{ title: 'Detalhes da Tarefa' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
