import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          m="auto"
          alt={userName}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
