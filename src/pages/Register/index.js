import React from 'react';
import image from '../../assets/back.png';
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
// import { Container } from './styles';

const Register = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground source={image} />
      <View>
        <ViewLogo>
          <Textlogo style={{ fontSize: 68 }}>MB</Textlogo>
          <Textlogo> Events</Textlogo>
        </ViewLogo>
        <Input placeholder="Nome" placeholderTextColor="#999CA6" />
        <Input
          placeholder="Email"
          placeholderTextColor="#999CA6"
          keyboardType="email-address"
        />

        <Input placeholder="Senha" placeholderTextColor="#999CA6" />
        <Button
          title="Cadastro"
          type="button"
          onPress={() => navigation.navigate('Login')}
        >
          <TextButton>Entrar</TextButton>
        </Button>
      </View>
    </Container>
  );
};

export default Register;
