import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const InputSearch: React.FC<IInputProps> = ({ name, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue, fieldName } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#A0A0B2"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default InputSearch;
