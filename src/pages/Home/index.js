import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Background} from './styles';
import Header from '../../components/Header';
import {AreaInput, Input} from '../Login/styles';
import api from '../../../config/config.json';
import {AuthContext} from '../../contexts/auth';
import AllEntradas from '../AllEntradas';
import AllGastos from '../AllGastos';

export default function Home() {
  const [balance, setBalance] = useState([]);

  return (
    <Background>
      {/* <Header title="Minhas Movimentações" /> */}
      {/* <AllEntradas /> */}
      <AllGastos />
    </Background>
  );
}
