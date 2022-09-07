import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
  //   name apenas, pois pode ser email, senha ou uma busca generica
  error?: FieldError | null;
  icon?: IconType;
}

export const InputAni: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, error = null, icon: Icon, label, ...rest }, ref) => {
  // label deve ser opcional, pois o input tb será usado na barra de busca
  return (
    <FormControl w="100%">
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection="column" w="100%">
        {Icon && (
          <InputLeftElement mr="2" mt="1.5" color="red.600">
            <Icon />
          </InputLeftElement>
        )}
        {/* ver erro com o rest do input */}
        <ChakraInput
          name={name}
          {...rest}
          ref={ref}
          bg="grey.0"
          borderRadius="10"
          variant="outline"
          color="grey.900"
          w="100%"
          size="lg"
          h="50px"
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputAni);
