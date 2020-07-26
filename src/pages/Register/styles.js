import styled from 'styled-components/native';

export const Input = styled.TextInput`
  border: none;
  width: 280px;
  height: 42px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
  background-color: #2f55d0;
  color: #fff;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 62px;
  border-radius: 8px;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Container = styled.KeyboardAvoidingView`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ViewLogo = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  flex-direction: row;
`;
export const Textlogo = styled.Text`
  color: #2f55d0;
  margin-top: 20px;
  font-weight: bold;
  font-size: 50px;
`;

export const ImageBackground = styled.Image`
  width: 400px;
  height: 100%;
  opacity: 0.1;
  margin-top: 178px;
`;
export const View = styled.View`
  bottom: 460px;
`;
