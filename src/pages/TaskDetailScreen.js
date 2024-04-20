// TaskDetailsScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TaskDetailsScreen = ({ navigation, route }) => {
  const { task } = route.params; // Obtém os detalhes da tarefa da navegação

  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const onSaveChanges = () => {
    // Atualize os detalhes da tarefa na lista (pode ser uma função passada como parâmetro)
    // Exemplo: route.params.onUpdateTask(task.id, editedTitle, editedDescription);
    navigation.goBack(); // Volte para a tela anterior após salvar
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        value={editedTitle}
        onChangeText={setEditedTitle}
        style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <TextInput
        value={editedDescription}
        onChangeText={setEditedDescription}
        multiline
        style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <Button title="Salvar Alterações" onPress={onSaveChanges} />
    </View>
  );
};

export default TaskDetailsScreen;
