import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import TaskListScreen from './screens/TaskListScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'Rick-Morty View',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#00FF00',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
          }}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
