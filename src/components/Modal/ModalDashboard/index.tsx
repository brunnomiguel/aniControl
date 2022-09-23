import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  ModalHeader,
  Image,
  Center,
} from "@chakra-ui/react";

import Logo from "../../../assets/imgs/logo-mini.svg";

import { ModalDashboardForm } from "./ModalDashboardForm";
import { IanimelistItem } from "../../../contexts/AnimeList";

interface IModalDashboardProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  anime: IanimelistItem;
}

export const ModalDashboard = ({
  isOpen,
  onOpen,
  onClose,
  anime,
}: IModalDashboardProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={true}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
        <ModalContent w="100%" borderRadius="10">
          <ModalHeader bg="red.600">
            <Image src={Logo} h="5vh" />
            <ModalCloseButton size="lg" />
          </ModalHeader>
          <ModalBody w="100%" bg="grey.600">
            <Center flexDir="column">
              <Text size="xl" fontSize="3xl" mt="5%">
                {anime.anime.data.title}
              </Text>
              <ModalDashboardForm
                anime={anime}
                id={anime.id}
                onClose={onClose}
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
