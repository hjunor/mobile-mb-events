import React from 'react';
import image from '../../assets/back.png';
// import { } from 'react-native';
import {
  View,
  Input,
  Container,
  Button,
  TextButton,
  ViewLogo,
  Textlogo,
  ImageBackground,
} from './styles';
const Login = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground source={image} />
      <View>
        <ViewLogo>
          <Textlogo style={{ fontSize: 68 }}>MB</Textlogo>
          <Textlogo> Events</Textlogo>
        </ViewLogo>

        <Input
          placeholder="Email"
          placeholderTextColor="#999CA6"
          keyboardType="email-address"
        />
        <Input placeholder="Senha" placeholderTextColor="#999CA6" />
        <Button
          title="Cadastro"
          type="button"
          onPress={() => navigation.navigate('Register')}
        >
          <TextButton>Entrar</TextButton>
        </Button>
      </View>
    </Container>
  );
};

export default Login;
