import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import api from '../../../config/config.json';
import {AuthContext} from '../../contexts/auth';
import RowLabel from '../Widgets/RowLabel';
import Header from '../../components/Header';
import {AreaInput, Input} from '../Login/styles';
import {BackgroundFlat, Title} from '../../assets/styles';
import {Background} from '../Home/styles';

export default function AllEntradas() {
  const {user} = useContext(AuthContext);
  const [entradas, setEntradas] = useState([]);

  const [descricao, setDescricao] = useState(null);
  const [valor, setValor] = useState(null);
  const [dataEntrada, setDataEntrada] = useState(null);

  const [totalEntradas, setTotalEntradas] = useState();
  const [loading, setLoading] = useState(true);

  async function addEntrada() {
    // console.log([descricao, valor, dataEntrada]);
    const response = await fetch(api.baseUrl + 'entradas/add-entrada', {
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
    })
      .then(resp => resp.json())
      .then(json => {
        alert(json.mensagem);
        // console.log(json);
      });
  }

  useEffect(() => {
    async function allentradas() {
      try {
        await fetch(api.baseUrl + 'entradas/all-entradas/' + user.id, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'aplication/json',
          },
        })
          .then(resp => resp.json())
          .then(json => {
            setLoading(false);
            if (json.data != null) {
              setTotalEntradas(json.total);
              console.log('Erro total', totalEntradas);
              setEntradas(json.data);
              console.log('Erro data', entradas);
            } else {
              alert('Erro ao buscar entradas:', json.mensagem);
            }
          })
          .catch(error => {
            alert('Erro ao buscar entradas:', error);
            setLoading(false);
          });
      } catch (error) {
        console.log('Erro ao buscar gastos');
        setLoading(false);
        alert('Erro ao buscar gastos:', error);
      }
    }

    allentradas();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F4FF',
        }}>
        <Header title="Minhas Entradas" />
        <ActivityIndicator size="large" color="#131313" />
      </View>
    );
  }
  return (
    <Background>
      <Header title="Minhas Entradas" />

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
      <BackgroundFlat>
        <Title>Total Entradas: {totalEntradas}</Title>
        <FlatList
          data={entradas}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{padding: 10, borderBottomWidth: 1}}>
              <Title>{item.descricao}</Title>

              <RowLabel label="Valor" text={'R$' + item.valor} />
              <RowLabel label="Data da Entrada" text={item.data_entrada} />
            </View>
          )}
        />
      </BackgroundFlat>
    </Background>
  );

  return (
    <Background>
      <Header title="Minhas Entradas" />

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

      <BackgroundFlat>
        <Title>Total Entradas: {totalEntradas}</Title>
        <FlatList
          data={entradas}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{padding: 10, borderBottomWidth: 1}}>
              <Title>{item.descricao}</Title>

              <RowLabel label="Valor" text={'R$' + item.valor} />
              <RowLabel label="Data da Entrada" text={item.data_entrada} />
            </View>
          )}
        />
      </BackgroundFlat>
    </Background>
  );
}
