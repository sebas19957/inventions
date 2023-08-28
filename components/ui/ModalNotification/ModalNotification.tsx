import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  isClose: () => void;
}

export const ModalNotification = ({ isOpen, isClose }: Props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal size="xs" isOpen={isOpen} onClose={isClose}>
        <ModalContent>
          <>
            <ModalBody>
              <p>Inventory created successfully</p>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
