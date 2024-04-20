import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTaskScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');




  const onSave = () => {
    if (title.trim() === '') {
      alert('Por favor, insira um título para a tarefa.');
      return;
    }
    route.params.onSave(title, description);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Título da Tarefa"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <TextInput
        placeholder="Descrição da Tarefa"
        value={description}
        onChangeText={setDescription}
        multiline
        style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <Button title="Salvar Tarefa" onPress={onSave} />
    </View>
  );
};

export default AddTaskScreen;
