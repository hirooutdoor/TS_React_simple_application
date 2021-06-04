import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem _hover={{ cursor: "pointer", opacity: 0.8 }}>
          <UserCard
            imageUrl="https://source.unsplash.com/random"
            userName="Armin"
            fullName="Armin Hertlert"
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
