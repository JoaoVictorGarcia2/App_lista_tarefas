import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskDetailsScreen = ({ navigation, route }) => {
  const { task } = route.params;

  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const onSaveChanges = () => {
    // Atualize os dados da tarefa com os valores editados antes de voltar à tela anterior
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
    };

    // Chame uma função para salvar as alterações (por exemplo, enviar para um servidor)
    // Aqui, estou apenas navegando de volta à tela anterior para fins de demonstração
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={editedTitle}
        onChangeText={setEditedTitle}
        style={styles.inputTitle}
        placeholder="Título da tarefa"
      />
      <TextInput
        value={editedDescription}
        onChangeText={setEditedDescription}
        multiline
        style={styles.inputDescription}
        placeholder="Descrição da tarefa"
      />
      <Button title="Salvar Alterações" onPress={onSaveChanges} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  inputTitle: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 18,
    color: '#333',
  },
  inputDescription: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#333',
  },
});

export default TaskDetailsScreen;
