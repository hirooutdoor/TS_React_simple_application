import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset={"slideInBottom"}
    >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>User Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value="aaa" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value="Armin Hertlet" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input value="1234@example.com" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value="0000-000-000" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
