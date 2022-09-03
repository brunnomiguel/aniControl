import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { FaCheck, FaCube, FaTimes, FaTrash } from "react-icons/fa";
import { useFullAnimes } from "../../contexts/FullAnimes";
import { theme } from "../../styles/theme";

interface ModalTaskDetailProps {
  isOpen: boolean;
  onClose: () => void;
  animeId: number;
}

export const ModalTaskDetail = ({
  isOpen,
  animeId,
  onClose,
}: ModalTaskDetailProps) => {
  const { animeById, getAnimeFullById } = useFullAnimes();

  console.log(animeById);

  useEffect(() => {
    getAnimeFullById(animeId);
  }, [animeId]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
      <ModalContent>
        <ModalHeader display="flex" justifyContent="space-between">
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="red.600"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>
        <ModalBody>
          <Heading>Este é o modal de exemplo</Heading>
        </ModalBody>
        <Box padding="6">
          <Text color="grey.300" mt="3">
            16 de agosto de 2022
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
};
