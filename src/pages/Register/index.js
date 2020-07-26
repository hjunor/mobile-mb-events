import React from 'react';
import image from '../../assets/back.png';
import { StyleSheet } from 'react-native';
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
        <Input
          style={styles.boxShadow}
          placeholder="Nome"
          placeholderTextColor="#999CA6"
        />
        <Input
          style={styles.boxShadow}
          placeholder="Email"
          placeholderTextColor="#999CA6"
          keyboardType="email-address"
        />

        <Input
          style={styles.boxShadow}
          placeholder="Senha"
          placeholderTextColor="#999CA6"
        />
        <Button
          style={styles.boxShadow}
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

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Register;
