import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { get } from "../api";
import { Character } from "../Character";

export function QueryKeys() {
  const query = useQuery({
    queryKey: ["characters"],
    queryFn: () => get<Character>("/characters/0"),
  });
  return <Box>{query.data?.family}</Box>;
}
