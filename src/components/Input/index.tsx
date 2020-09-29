import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Container, IconInput, TextInput, ViewPassword } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
  isPassword?: boolean;
  secureTextEntry?: boolean;
  handleShowPassword?(): void;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, IInputProps> = (
  { name, icon, isPassword, handleShowPassword, secureTextEntry, ...rest },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <IconInput isFocused={isFocused} isErrored={!!error}>
        <MaterialIcon name={icon} color="#7A7A80" size={20} />
      </IconInput>

      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#AEAEB3"
        defaultValue={defaultValue}
        secureTextEntry={secureTextEntry}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />

      {isPassword && (
        <ViewPassword onPress={handleShowPassword}>
          <FontAwesome
            name={secureTextEntry ? 'eye' : 'eye-slash'}
            color="#7A7A80"
            size={20}
          />
        </ViewPassword>
      )}
    </Container>
  );
};

export default forwardRef(Input);
