import {
  Box,
  Button,
  Divider,
  Heading,
  Highlight,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { get } from "../api";
import { Character } from "../Character";
import { QueryStatusDisplay } from "../QueryStatusDisplay";
import { useState } from "react";

export function QueryBasics() {
  const [characterCount, setCharacters] = useState(1);
  return (
    <Box maxW="1000px">
      <Heading>Queries</Heading>
      <Text mb="5">
        <Highlight
          query="unique"
          styles={{ px: "1", py: "1", bg: "orange.100" }}
        >
          Query Data is cached in the Query Client, identified by a unique query
          key. React Query uses the "Stale while revalidate Caching Strategy".
          By default, Queries are considered Stale after 0 Seconds.
        </Highlight>
      </Text>
      <Text mb="5">
        Stale queries are refetched automatically in the background when:
      </Text>
      <UnorderedList>
        <ListItem>New instances of the query mount</ListItem>
        <ListItem> The window is refocused</ListItem>
        <ListItem>The network is reconnected </ListItem>
        <ListItem>
          The query is optionally configured with a refetch interval
        </ListItem>
      </UnorderedList>
      <Text>
        You can control this behavior using the refetchXY (e.g.
        refetchOnWindowFocus) and staleTime options of useQuery. You can also
        adjust the default behavior by passing options to the Query Client.{" "}
      </Text>
      <Text mt="5">Tasks:</Text>
      <UnorderedList>
        <ListItem>
          See what happens if you make the Query Key of useCharacter non-unique
        </ListItem>
        <ListItem>
          Set the staleTime to something different from 0 and see how the
          refetch behavior changes
        </ListItem>
        <ListItem>Use the React Query Devtools to invalidate a query</ListItem>
        <ListItem>
          Use the React Query Devtools to invalidate the characters query while
          you are on the introduction page
        </ListItem>
      </UnorderedList>
      <Divider w="100vw" my="5" />
      <Button onClick={() => setCharacters((c) => c + 1)}>Add Character</Button>
      {[...Array(characterCount).keys()].map((id) => (
        <CharacterName id={id} key={id} />
      ))}
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

function useCharacter(id: number) {
  return useQuery({
    queryKey: ["characters", id],
    queryFn: () => get<Character>(`/characters/${id}`),
  });
}
