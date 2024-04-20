import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Main from './pages/main';
import TaskListScreen from './pages/TaskListScreen';
import AddTaskScreen from './pages/AddTaskScreen';
import TaskDetailsScreen from './pages/TaskDetailScreen'; // Importe a tela TaskDetailsScreen

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
          name="TaskDetails" // Certifique-se de que o nome da tela seja 'TaskDetails'
          component={TaskDetailsScreen} // Componente que representa a tela TaskDetailsScreen
          options={{ title: 'Detalhes da Tarefa' }} // Opções de navegação para a tela TaskDetailsScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
