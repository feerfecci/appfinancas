import styled from "styled-components";

export const BackgroundFlat = styled.SafeAreaView`
flex:1;
width: 100%;
background-color:rgba(231, 231, 231, 0.37);
margin-top: 10px;
padding: 10px;
border-radius: 12px;
border: 1px solid rgba(143, 143, 143, 0.49);
`


export const Title = styled.Text`
font-size: 24px;
font-weight: bold;
margin-bottom: 10px;
`

export const ButtonMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;


export const AreaInput= styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
background-color: white;
width: 90%;
font-size:17px;
padding: 8px;
border-radius: 10px;
color: #121212;
margin: 10px;
`;
