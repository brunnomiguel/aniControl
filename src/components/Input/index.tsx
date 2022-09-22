import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
  Text,
} from "@chakra-ui/react";

import { IconType } from "react-icons";
import { FieldError } from "react-hook-form";
import { ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
  error?: FieldError | null;
  icon?: IconType;
}

const InputAni: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, icon: Icon, label, ...rest },
  ref
) => {
  return (
    <FormControl w="100%">
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection="column" w="100%">
        {Icon && (
          <InputLeftElement mr="2" mt="1.5" color="red.600">
            <Icon />
          </InputLeftElement>
        )}
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
      </InputGroup>
      {!!error && <Text>{error.message}</Text>}
    </FormControl>
  );
};

export const Input = forwardRef(InputAni);
