import {React, useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
} from 'react-native';
import api from '../../../config/config.json';
import {useUser} from '../UserContext';
import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';
import {BackgroundFlat, Title} from '../../assets/styles';
import RowLabel from '../Widgets/RowLabel';
import {Row} from '../Widgets/Row';
import {AreaInput, Input} from '../Login/styles';
import {Background} from '../Home/styles';
import {AreaTouchable, TouchableOpacity} from '../Widgets/TouchableButton';
import InputDate from '../Widgets/InputDate';
import SelectCategoria from '../Widgets/selectCategoria';

export default function AllGastos() {
  const {user} = useContext(AuthContext);
  const [gastos, setGastos] = useState([]);
  const [totalGastos, setTotalGastos] = useState([]);

  const [descricao, setDescricao] = useState(null);
  const [valor, setValor] = useState(null);
  const [dataGasto, setDataGasto] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [categoria, setCategoria] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGastos() {
      try {
        await fetch(api.baseUrl + 'gastos/all-gastos/' + user.id, {
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
              setGastos(json.data);
              setTotalGastos(json.total);
            } else {
              alert('Erro ao buscar os gastos: ', json.mensagem);
            }
          });
      } catch (error) {
        setLoading(false);
        alert('Erro ao buscar gastos:', error);
      }
    }

    loadGastos();
  }, []);

  async function addGasto() {
    await fetch(api.baseUrl + 'gastos/add-gasto/' + user.id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id,
        descricao: descricao,
        data_gasto: dataGasto,
        tipo: tipo,
        categoria: categoria,
        valor: valor,
      }),
    })
      .then(response => response.json())
      .then(json => {
        alert(json.mensagem);
      });
  }

  //   if (loading) {
  //     return (
  //       <View
  //         style={{
  //           flex: 1,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           backgroundColor: '#F0F4FF',
  //         }}>
  //         <ActivityIndicator size="large" color="#131313" />
  //       </View>
  //     );
  //   }

  return (
    <Background>
      <Header title="Meus Gastos" />
      <AreaInput>
        <Input
          placeholder={'Descricao'}
          value={descricao}
          onChangeText={text => {
            setDescricao(text);
          }}
        />
      </AreaInput>
      <Row>
        <View style={{width: '45%'}}>
          <Input
          style={{marginBottom: 20}}
            inputMode="numeric"
            placeholder={'Valor'}
            value={valor}
            onChangeText={text => {
              setValor(text);
            }}
          />
          <InputDate
            // style={{width: '45%'}}
            texto={dataGasto}
            onChange={text => setDataGasto(text)}
            placeholder={'Data'}
          />
        </View>

        <View style={{width: '45%'}}>
          <Input
          style={{marginBottom: 20}}
            placeholder={'Tipo de Pagamento'}
            value={tipo}
            onChangeText={text => {
              setTipo(text);
            }}
          />
          <SelectCategoria />
        </View>
      </Row>
      <AreaTouchable>
        <TouchableOpacity onPress={() => addGasto()}>
          <Text>Cadastar</Text>
        </TouchableOpacity>
      </AreaTouchable>
      <BackgroundFlat>
        <Title>Total Gastos R${totalGastos}</Title>
        <FlatList
          data={gastos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                marginVertical: 15,
                borderBottomWidth: 1,
                borderColor: 'red',
              }}>
              <Title>{item.descricao}</Title>
              <RowLabel label={'R$ ' + item.valor} />
              <Row>
                <RowLabel label="Tipo" text={item.tipo} />
                <RowLabel label="Categoria" text={item.categoria} />
              </Row>
              <RowLabel label="Data Gasto" text={item.data_gasto} />
            </View>
          )}
        />
      </BackgroundFlat>
    </Background>
  );
}
