import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import { StyleSheet, Picker } from 'react-native';
import {
  Input,
  Container,
  Button,
  TextButton,
  WapperInput,
  InputPrice,
  InputTickets,
  InputNumber,
} from './styles';

const EventRegister = ({ navigation }) => {
  return (
    <Container>
      <Input
        style={styles.boxShadow}
        placeholder="Nome"
        placeholderTextColor="#999CA6"
      />
      <WapperInput>
        <InputTickets
          style={styles.boxShadow}
          placeholder="N° Ingressos"
          placeholderTextColor="#999CA6"
          keyboardType="email-address"
        />
        <InputPrice
          style={styles.boxShadow}
          placeholder="Preço"
          placeholderTextColor="#999CA6"
        />
      </WapperInput>
      <Picker
        selectedValue={{}}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {}}
      >
        <Picker.Item label="Online" value="Online" />
        <Picker.Item label="Presencial" value="Presencial" />
      </Picker>
      <Input
        style={styles.boxShadow}
        placeholder="Cidade"
        placeholderTextColor="#999CA6"
      />
      <Input
        style={styles.boxShadow}
        placeholder="Bairro"
        placeholderTextColor="#999CA6"
      />
      <Input
        style={styles.boxShadow}
        placeholder="Rua"
        placeholderTextColor="#999CA6"
        keyboardType="email-address"
      />
      <WapperInput>
        <InputNumber
          style={styles.boxShadow}
          placeholder="Numéro"
          placeholderTextColor="#999CA6"
          keyboardType="email-address"
        />
        <Picker
          selectedValue={{}}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => {}}
        >
          <Picker.Item label="Online" value="Online" />
          <Picker.Item label="Presencial" value="Presencial" />
        </Picker>
      </WapperInput>
      <WapperInput>
        <Entypo name="calendar" color="#2F55D0" size={40} />
      </WapperInput>

      <Input
        style={styles.boxShadow}
        placeholder="Descrição"
        placeholderTextColor="#999CA6"
      />
      <Button
        style={styles.boxShadow}
        title="Cadastro"
        type="button"
        onPress={() => navigation.navigate('Tab', { screen: 'Main' })}
      >
        <TextButton>Entrar</TextButton>
      </Button>
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
export default EventRegister;
