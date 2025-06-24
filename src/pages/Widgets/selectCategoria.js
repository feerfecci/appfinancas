import styled from 'styled-components';
import {StyleSheet, Text, View} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import api from '../../../config/config.json';
import {AuthContext} from '../../contexts/auth';
import {Picker} from '@react-native-picker/picker';

// export const SelectCategoria = styled.Picker

export default function SelectCategoria() {
  const {user} = useContext(AuthContext);
  const [selected, setSelected] = useState([]);
  const [corSelected, setCorSelected] = useState([]);
  const [categorias, setCategorias] = useState([]);

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
          //   setLoading(false);
          if (json.data != null) {
            setCategorias(json.data);
          } else {
            alert('Erro ao buscar Categorias: ', json.mensagem);
          }
        })
        .catch(error => {
          //   setLoading(false);
          alert('Erro ao buscar categorias:', error);
        });
    }
    allCategorias();
  }, []);

  const categoriaItem = categorias.map((v, k) => {
    return (
      <Picker.Item
        key={k}
        value={v.id}
        label={v.nome}
        color={v.cor}
        // style={{backgroundColor: '#FFF'}} // Fundo do dropdown
      />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.pickerWrapper}>
        <Picker
           style={styles.picker}
          // borderColor=''
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => {
            setSelected(itemValue);
            setCorSelected(itemValue.cor);
            console.log(itemValue);
          }}>
          {categoriaItem}
        </Picker>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerWrapper: {
    width: '100%', // Ajuste para garantir espaçamento nas laterais
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
  },
  picker: {
    width: '100%', // Faz o Picker ocupar toda a largura da View pai
    height: 50,
  },
});

