import { Input, FormControl } from "native-base";
import React from "react";

interface InputProps {
    label?: string;
    placeholder: string;
    secuteTextEntry?: boolean;
    leftIcon?: React.ReactNode;
}

export function EntradaTexto ({ 
    label, 
    placeholder, 
    secuteTextEntry = false
  } : InputProps) : JSX.Element {
    return (
      <FormControl mt={3}>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          placeholder={placeholder}
          size="lg"
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          secureTextEntry={secuteTextEntry}
          shadow={3}
        />
      </FormControl>
    );
  };
