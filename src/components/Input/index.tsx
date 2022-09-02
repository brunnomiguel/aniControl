import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
  border,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import { FaExclamation } from "react-icons/fa";

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
  //   name apenas, pois pode ser email, senha ou uma busca generica
  error?: FieldError | null;
  icon?: IconType;
}

export const Input = ({
  name,
  error = null,
  icon: Icon,
  label,
  ...rest
}: InputProps) => {
  // label deve ser opcional, pois o input tb será usado na barra de busca
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement mr="2" mt="1.5" >
            <Icon />
          </InputLeftElement>
        )}
        {/* ver erro com o rest do input */}
        <ChakraInput
          name={name}
          {...rest}
          bg="grey.0"
          variant="outline"
        //   _hover={{ border = "solid 3px blue.50" }} rever este hover depois
        placeholder="grey.700"
        fontSize='3x1'
        size='lg'
        h='50px'
        ></ChakraInput>
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};
