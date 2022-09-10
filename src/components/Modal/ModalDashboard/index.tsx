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
import { IanimelistItem } from "../../../contexts/AnimeList";
import Logo from "../../../assets/logo-mini.svg";
import { ModalDashboardForm } from "./ModalDashboardForm";

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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        size="2xl"
      >
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
        <ModalContent w="100vw" position="fixed" h="75vh" borderRadius={10}>
          <ModalHeader bg="red.600" borderTopRadius={10}>
            <Image src={Logo} h="5vh" />
            <ModalCloseButton size="lg" />
          </ModalHeader>
          <ModalBody w="100%" bg="grey.600">
            <Center flexDir="column">
              <Text size="xl" fontSize="3xl" mt="5%">
                {anime.anime.data.title}
              </Text>
              <ModalDashboardForm anime={anime} id={anime.id} />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
