/* eslint-disable react-hooks/exhaustive-deps */

import {
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => getUsers(), []);

  const onClickUser = () => onOpen();

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <p>Well, you know the drill, right? Time for coding!</p>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
});