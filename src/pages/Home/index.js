import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Background} from './styles';
import Header from '../../components/Header';
import {AreaInput, Input} from '../Login/styles';
import api from '../../../config/config.json';
import {AuthContext} from '../../contexts/auth';

export default function Home() {
  const [balance, setBalance] = useState([]);
  const {user} = useContext(AuthContext);
  const [descricao, setDescricao] = useState(null);
  const [valor, setValor] = useState(null);
  const [dataEntrada, setDataEntrada] = useState(null);

  async function addEntrada() {
    console.log([descricao, valor, dataEntrada]);
    const response = await fetch(api.baseUrl + 'add-entrada',{
        
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          descricao: descricao,
          valor: valor,
          user_id: user.id,
          data_entrada: dataEntrada,
        }),
    }).then(resp => resp.json(resp)).then(json=> {
        alert(json.mensagem);
        console.log(json);
    });
  }

  return (
    <Background>
      <Header title="Minhas Movimentações" />
      <AreaInput>
        <Input
          placeholder={'Digite uma descricao'}
          value={descricao}
          onChangeText={text => setDescricao(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder={'Digite um valor'}
          value={valor}
          onChangeText={text => setValor(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder={'Digite uma Data'}
          value={dataEntrada}
          onChangeText={text => setDataEntrada(text)}
        />
      </AreaInput>

      <TouchableOpacity onPress={() => addEntrada()}>
        <Text>Adicionar Entrada</Text>
      </TouchableOpacity>
    </Background>
  );
}
