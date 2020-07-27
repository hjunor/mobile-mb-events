import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  WrapperProfile,
  WrapperButton,
  Text,
  WrapperText,
  Button,
  TextButton,
  WrapperHead,
  TextHead,
} from './styles';

const Profile = () => {
  return (
    <Container>
      <WrapperHead>
        <TextHead>Perfil</TextHead>
      </WrapperHead>
      <WrapperProfile style={styles.boxShadow}>
        <WrapperText>
          <Text>Nome: Heberth Junor</Text>
        </WrapperText>
        <WrapperText>
          <Text>Email: hjunor@gmail.com</Text>
        </WrapperText>
        <WrapperButton>
          <Button>
            <TextButton>Sair</TextButton>
          </Button>
          <Button style={{ backgroundColor: '#d01c2f' }}>
            <TextButton>Deletar Conta</TextButton>
          </Button>
        </WrapperButton>
      </WrapperProfile>
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
export default Profile;
