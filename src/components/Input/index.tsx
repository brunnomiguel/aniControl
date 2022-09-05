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

export const InputAni: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  error = null,
  icon: Icon,
  label,
  ...rest
}, ref) => {
  // label deve ser opcional, pois o input tb será usado na barra de busca
  return (
    <FormControl mt="5">
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement mr="2" mt="1.5" color="grey.900">
            <Icon />
          </InputLeftElement>
        )}
        {/* ver erro com o rest do input */}
        <ChakraInput
          name={name}
          {...rest}
          ref={ref}
          bg="grey.0"
          borderRadius="2"
          variant="outline"
          //   _hover={{ border = "solid 3px blue.50" }} rever este hover depois
          size="4x1"
          w={['150px','150px', '200px', '300px']}
          h="50px"
        ></ChakraInput>
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputAni);
