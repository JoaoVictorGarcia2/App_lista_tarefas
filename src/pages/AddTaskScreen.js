import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTaskScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSave = () => {
    if (title.trim() === '') {
      alert('Por favor, insira um título para a tarefa.');
      return;
    }
    route.params.onSave(title, description);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título da Tarefa"
        value={title}
        onChangeText={setTitle}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="Descrição da Tarefa"
        value={description}
        onChangeText={setDescription}
        multiline
        style={styles.inputDescription}
      />
      <Button title="Salvar Tarefa" onPress={onSave} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  },
  inputTitle: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 18,
    color: '#333'
  },
  inputDescription: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#333'
  }
});

export default AddTaskScreen;
