import {
  Box,
  Button,
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { post } from "../api";
import { Character } from "../Character";

export function Mutations() {
  const mutation = useCreateCharacter();

  return (
    <Box maxW="1000px">
      <Heading>Mutations</Heading>
      <Text mb="5">
        Mutations are used to perform actions that change the server state.
        (Typically POST/PUT etc. requests). The useMutation Hook gives you:
      </Text>
      <UnorderedList>
        <ListItem>
          Convenient information about the Mutation - whether it is loading, has
          an error...
        </ListItem>
        <ListItem>
          Callbacks to react to the success or error of the mutation, e.g. make
          queries refetch afterwards
        </ListItem>
      </UnorderedList>
      <Text mt="5">Tasks:</Text>
      <UnorderedList>
        <ListItem>
          Display a loading indicator when the mutation is running
        </ListItem>
        <ListItem>
          Display an indicator when the mutation throws an error
        </ListItem>
      </UnorderedList>
      <Divider w="100vw" my="5" />
      <Button onClick={() => mutation.mutate()}>Run Mutation</Button>
    </Box>
  );
}

function useCreateCharacter() {
  const newCharacter: Omit<Character, "id"> = {
    firstName: "abc",
    lastName: "abc",
    fullName: "abc",
    title: "abc",
    family: "abc",
    image: "abc",
    imageUrl: "abc",
  };
  return useMutation({
    mutationFn: async () => {
      await post(`/characters`, { body: newCharacter });
    },
  });
}
