import { Box, Divider, Heading, Text } from "@chakra-ui/react";

export function Introduction() {
  return (
    <Box maxW="1000px">
      <Heading>Introduction</Heading>
      <Text mb="5">
        A query is a declarative dependency on an asynchronous source of data
        that is tied to a unique key. A query can be used with any Promise based
        method (including GET and POST methods) to fetch data from a server. If
        your method modifies data on the server, we recommend using Mutations
        instead.
      </Text>
      <Text>
        Write a Query that uses getHello as Query function. Display "Loading..."
        until the function call is finished.
      </Text>
      <Divider w="100vw" my="5" />
    </Box>
  );
}

function getHello() {
  return new Promise<string>((resolve) =>
    setTimeout(() => {
      resolve(`hello world! is is ${new Date().toLocaleTimeString()}`);
    }, 3000)
  );
}
