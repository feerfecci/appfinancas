import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`
;
export const Logo = styled.Image`
margin-bottom:25px;`;

export const AreaInput= styled.View`
flex-direction: row;
margin: 10px;
`;
export const Input = styled.TextInput`
background-color: white;
width: 100%;
font-size:17px;
padding: 8px;
border-radius: 10px;
color: #121212;
/* margin: 10px; */
`;

export const SubmitButton = styled.TouchableOpacity`
width: 90%;
height: 45px;
border-radius: 10px;
background-color: #3d3dbf;
margin-top: 10px;
align-items: center;
justify-content: center;
padding: 10px 40px;
`;

export const SubmitText = styled.Text`
font-size: 20px;
color: white
`;