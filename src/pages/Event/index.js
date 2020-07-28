import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Container,
  WrapperEvent,
  Image,
  WrapperText,
  TextData,
  TextGrey,
  TextRed,
  Text,
  TextGreen,
  WrapperTextData,
  WrapperImage,
  WrapperData,
  Button,
  TextButton,
} from './styles';
import image from '../../assets/app.jpeg';
const space = '                       ';
const Event = ({ navigation }) => {
  return (
    <Container>
      <WrapperEvent style={styles.boxShadow}>
        <WrapperImage>
          <Image source={image} />
          <WrapperText style={styles.boxShadow}>
            <Text>Workshoop á arte de saber Desvendando Paradigmas!</Text>
          </WrapperText>
        </WrapperImage>
        <View>
          <WrapperTextData>
            <TextData>Data:</TextData>
            <TextRed> 18 out - 2020</TextRed>
            <TextData style={{ left: 33 }}>Tipo:</TextData>
            <TextGreen style={{ left: 38 }}>Online</TextGreen>
          </WrapperTextData>
          <WrapperData>
            <TextData>Description:</TextData>
            <TextGrey style={{ right: 75 }}>
              {`${space}`}workshoop desenvolvido para agregar suas diferenças
              pessoais e allkndllimentar novas sircustancias espirituais na
              tecnologia.
            </TextGrey>
          </WrapperData>
          <WrapperTextData>
            <TextData>Igressos:</TextData>
            <TextRed>70 / 100</TextRed>

            <TextData style={{ left: 33 }}>Categoria:</TextData>
            <TextGreen style={{ left: 38 }}>Social</TextGreen>
          </WrapperTextData>
        </View>
        <Button
          style={styles.boxShadow}
          title="Cadastro"
          type="button"
          onPress={() => navigation.navigate('Tab', { screen: 'Main' })}
        >
          <TextButton>Conprar</TextButton>
        </Button>
      </WrapperEvent>
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
export default Event;
