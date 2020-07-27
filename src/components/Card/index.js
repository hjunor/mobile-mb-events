import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import image from '../../assets/app.jpeg';
import {
  Container,
  WrapperImage,
  WrapperText,
  Image,
  TextAdrress,
  TextDescription,
  TextHours,
} from './styles';

const Card = ({ navigation }) => {
  return (
    <Container
      onClick={() => navigation.navigate('Event')}
      style={styles.boxShadow}
    >
      <WrapperImage>
        <Image source={image} />
      </WrapperImage>

      <WrapperText>
        <TextHours>14 out - 19:00</TextHours>
        <TextDescription>
          Work Shoop á arte de saber - Desvendando Paradigmas!
        </TextDescription>
        <TextAdrress>Vila Olimpia - Vidigal - RJ</TextAdrress>
      </WrapperText>
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
export default Card;
