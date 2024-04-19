import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {Keyboard, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({users: JSON.parse(users)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {users} = this.state;

    if (prevState.users !== users) {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    try {
      const {users, newUser} = this.state;
      this.setState({loading: true});

      const response = await api.get(`?name=${newUser}`);


      const data = {
        name: response.data.results[0].name,
        status: response.data.results[0].status,
        location: response.data.results[0].location.name,
        fistEp: response.data.results[0].episode[0].replace('https://rickandmortyapi.com/api/episode/', ''),
        avatar: response.data.results[0].image,
        species: response.data.results[0].species,
        genero: response.data.results[0].gender,
        mundoOrigem: response.data.results[0].origin.name,
      };


      this.setState({
        users: [...users, data],
        newUser: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      alert('Personagem não encontrado!');
      this.setState({
        loading: false,
        newUser: '',
      });
      Keyboard.dismiss();
    }
  };

  render() {
    const {users, newUser, loading} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar personagem"
            value={newUser}
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#565656" />
            ) : (
              <Icon name="add" size={20} color="#565656" />
            )}
          </SubmitButton>
        </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User style = {{backgroundColor: '#e9e9e9'}}>
              <Avatar source={{uri: item.avatar}} />
              <Name>Nome: {item.name}</Name>
              <Name>Status: {item.status === 'Alive' ? 'Vivo' : 'Morto'}</Name>
              <Name>Ultima Localização: {item.location}</Name>
              <Name>Primeiro Aparição: Episodio-{item.fistEp}</Name>


              <ProfileButton
                onPress={() => {
                  this.props.navigation.navigate('user', {user: item});
                }}>
                <ProfileButtonText style={{color: '#565656'}}>Ver Informações do personagem</ProfileButtonText>
              </ProfileButton>
              <ProfileButton
                onPress={() => {
                  this.setState({
                    users: this.state.users.filter(
                      user => user.login !== item.login,
                    ),
                  });
                }}
                style={{backgroundColor: '#2f4538'}}>
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
