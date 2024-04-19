import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #101010;
  
`;
export const Gif = styled.Image`

  animation: spin 1s infinite linear;


@keyframes spin {
  from {
    transform: scale(1) rotate(0deg);
  }

  to {
    transform: scale(1) rotate(360deg);
  }
}
  
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #000;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  flex: 1;
  height: 40px;
  background: #d9d9d9;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #e9e9e9;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #00FF00;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const User = styled.View`
  border-radius: 25px;
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #000;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #000;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  background:	#00FF00;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #d9d9d9;
  text-transform: uppercase;
`;

export const Header = styled.View`
  border-radius: 25px;
  background-color: #d9d9d9;
  margin-top: 65px;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  justify-content: center;
  border: 1px;
`;

export const Avatarperfil = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #000;
`;

export const Nameperfil = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bioperfil = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #000;
  margin-top: 5px;
  text-align: center;
`;
