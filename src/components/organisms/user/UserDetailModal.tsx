import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  const onClickUpdate = () => {};

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset={"slideInBottom"}
    >
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>User Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={user?.username} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value={user?.name} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input value={user?.email} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={user?.phone} isReadOnly={!isAdmin} />
              </FormControl>
              {isAdmin && (
                <ModalFooter>
                  <PrimaryButton onClick={onClickUpdate}>Update</PrimaryButton>
                </ModalFooter>
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
