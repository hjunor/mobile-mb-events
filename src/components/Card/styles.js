import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  height: 120px;
  margin-top: 8px;
  margin-right: 18px;
  margin-left: 18px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const WrapperImage = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const WrapperText = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Image = styled.Image`
  height: 105px;
  width: 164px;
  border-radius: 8px;
`;

export const TextHours = styled.Text`
  color: #d04c2f;
  font-weight: bold;
`;
export const TextDescription = styled.Text`
  color: #000020;
  font-weight: bold;
`;
export const TextAdrress = styled.Text`
  color: #9296a3;
  font-weight: bold;
`;
