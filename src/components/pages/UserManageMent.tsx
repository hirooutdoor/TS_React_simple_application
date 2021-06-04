import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem _hover={{ cursor: "pointer", opacity: 0.8 }}>
          <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
          >
            <Stack textAlign="center">
              <Image
                boxSize="160px"
                borderRadius="full"
                src="https://source.unsplash.com/random"
                m="auto"
                alt="profile image."
              />
              <Text fontSize="lg" fontWeight="bold">
                Armin
              </Text>
              <Text fontSize="sm" color="gray">
                Armin Hetlert
              </Text>
            </Stack>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
});
