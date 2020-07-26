import React from 'react';
import image from '../../assets/back.png';

import {
  Textlogo,
  Text,
  Container,
  ButtonLogin,
  ButtonRegister,
  TextButton,
  ViewText,
  ImageBackground,
  View,
  ViewLogo,
} from './styles';

const Home = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground source={image}></ImageBackground>
      <View>
        <ViewLogo>
          <Textlogo style={{ fontSize: 68 }}>MB</Textlogo>
          <Textlogo> Events</Textlogo>
        </ViewLogo>

        <ViewText>
          <Text>Uma plataforma de eventos </Text>
          <Text>Criada para que</Text>
          <Text>Você encontre eventos que</Text>
          <Text>Possa traser o melhor!</Text>
        </ViewText>

        <ButtonLogin
          type="button"
          title="Login"
          onPress={() => navigation.navigate('Login')}
        >
          <TextButton>Login</TextButton>
        </ButtonLogin>

        <ButtonRegister
          title="Cadastro"
          type="button"
          onPress={() => navigation.navigate('Register')}
        >
          <TextButton>Cadastre-se</TextButton>
        </ButtonRegister>
      </View>
    </Container>
  );
};

export default Home;
