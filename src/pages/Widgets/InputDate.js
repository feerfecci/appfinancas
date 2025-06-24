import {useState} from 'react';
import { TextInput } from 'react-native';
import { Input } from '../Login/styles';

export default function InputDate({texto, onChange,placeholder, style}) {
  return (
    <Input
    style={style}
    value={texto}
    inputMode="numeric"
    onChange={onChange}
    placeholder={placeholder}
    />
  );
}
