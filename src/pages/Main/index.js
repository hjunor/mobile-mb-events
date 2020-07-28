import React from 'react';
import Card from '../../components/Card/index';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { StyleSheet, ScrollView, View, Text } from 'react-native';
import {
  TextLogo,
  WrapperTextLogo,
  WrapperButton,
  TextButton,
  Button,
  Container,
  WrapperHead,
  SearchInput,
  CreateButton,
} from './styles';

const user = true;

const Main = ({ navigation }) => {
  return (
    <Container>
      <WrapperHead>
        <SearchInput
          placeholder="  Search"
          style={styles.boxShadow}
        ></SearchInput>

        {user === true ? (
          <CreateButton
            onPress={() => navigation.navigate('EventRegister')}
            style={styles.boxShadow}
          >
            <AntDesign name="pluscircleo" color="#fff" size={52} />
          </CreateButton>
        ) : (
          <View></View>
        )}
      </WrapperHead>
      <WrapperTextLogo>
        <TextLogo>MB</TextLogo>
        <TextLogo>Events</TextLogo>
      </WrapperTextLogo>
      <WrapperButton>
        <Button>
          <TextButton>Todos Eventos</TextButton>
        </Button>
        <Button>
          <TextButton>Meus Eventos</TextButton>
        </Button>
      </WrapperButton>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card navigation={navigation} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
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
export default Main;
