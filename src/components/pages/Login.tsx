import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Login: VFC = memo(() => {
  return (
    <Flex>
      <Box>
        <Heading as="h1">User admin app</Heading>
        <Input placeholder="user ID" />
        <Button>Login</Button>
      </Box>
    </Flex>
  );
});
