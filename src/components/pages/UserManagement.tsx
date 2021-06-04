/* eslint-disable react-hooks/exhaustive-deps */

import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem
              key={user.id}
              _hover={{ cursor: "pointer", opacity: 0.8 }}
              mx="auto"
            >
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
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
    </>
  );
});
