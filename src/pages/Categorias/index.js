import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {Background} from '../Home/styles';
import {AreaInput, Input} from '../Login/styles';
import { BackgroundFlat, Title, } from '../../assets/styles';
import api from '../../../config/config.json';
import {AuthContext} from '../../contexts/auth';
import { TouchableOpacity } from '../Widgets/TouchableButton';

export default function AllCategorias() {
  const {user} = useContext(AuthContext);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function allCategorias() {
      await fetch(api.baseUrl + 'categorias/all-categorias/' + user.id, {
        method: 'get',
        headers: {
          Accept: 'aplication/json',
          'Content-Type': 'aplication/json',
        },
      })
        .then(resp => resp.json())
        .then(json => {
          setLoading(false);
          if (json.data != null) {
            setCategorias(json.data);
          } else {
            alert('Erro ao buscar Categorias: ', json.mensagem);
          }
        })
        .catch(error => {
          setLoading(false);
          alert('Erro ao buscar categorias:', error);
        });
    }
    allCategorias();
  }, []);

  if (loading) {
    return (
      <Background>
        <Header title={'Categorias'} />
        <ActivityIndicator size="large" color="#131313" />
      </Background>
    );
  }
  return (
    <Background>
      <Header title={'Categorias'} />
      <AreaInput>
        <Input placeholder={'Nome Categoria'} />
      </AreaInput>
      <AreaInput>
        <Input placeholder={'Cor'} />
      </AreaInput>
      <AreaInput>
        <Input placeholder={'Prioridade'} />
      </AreaInput>

      <TouchableOpacity onPress={() => {}}>
        <Text>Adicionar Entrada</Text>
      </TouchableOpacity>
      <BackgroundFlat>
        <FlatList
          data={categorias}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{padding: 10, borderBottomWidth: 1, }}>
              
              <Title style={{backgroundColor:item.cor, padding:10, borderRadius:16, }}>{item.nome}</Title>
              
              
              <Title>Descrição</Title>
              <Text>{item.descricao}</Text>
            </View>
          )}
        />
      </BackgroundFlat>
    </Background>
  );
}
