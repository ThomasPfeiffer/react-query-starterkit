import {
  Box,
  Button,
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "../api";
import { Character } from "../Character";
import { QueryStatusDisplay } from "../QueryStatusDisplay";

export function Invalidation() {
  const queryClient = useQueryClient();

  return (
    <Box maxW="1000px">
      <Heading>Invalidation</Heading>
      <Text mb="5">
        Cached data is identified by it's query key. From the docs: Query keys
        have to be an Array at the top level, and can be as simple as an Array
        with a single string, or as complex as an array of many strings and
        nested objects. As long as the query key is serializable, and unique to
        the query's data, you can use it!
      </Text>
      <Text mb="5">
        Queries are cached by their exact Query key. When you invalidate Queries
        using the QueryClient, you can match multiple Queries by using
        hierachical Query Keys.
      </Text>
      <Text mt="5">Tasks:</Text>
      <UnorderedList>
        <ListItem>Invalidate both queries below</ListItem>
        <ListItem>Invalidate only the Character Name</ListItem>
        <ListItem>Invalidate only the Character Count</ListItem>
        <ListItem>
          Add a mutation to the page and invalidate a query in it's onSuccess
          callback
        </ListItem>
      </UnorderedList>
      <Divider w="100vw" my="5" />
      <Button
        onClick={() => queryClient.invalidateQueries({ queryKey: ["??"] })}
      >
        Invalidate
      </Button>
      <CharacterCount />
      <CharacterName id={15} />
    </Box>
  );
}

function CharacterCount() {
  const query = useCharacters();
  return (
    <Box m="10">
      <Heading>Character Count</Heading>
      <QueryStatusDisplay query={query} />
      <Text>{query.data?.length}</Text>
    </Box>
  );
}

function CharacterName(props: { id: number }) {
  const query = useCharacter(props.id);
  return (
    <Box m="10">
      <Heading>Character {props.id}</Heading>
      <QueryStatusDisplay query={query} />
      <Text>{query.data?.fullName}</Text>
    </Box>
  );
}

function useCharacters() {
  return useQuery({
    queryKey: ["characters"],
    queryFn: () => get<Character[]>(`/characters`),
  });
}

function useCharacter(id: number) {
  return useQuery({
    queryKey: ["characters", id],
    queryFn: () => get<Character>(`/characters/${id}`),
  });
}
