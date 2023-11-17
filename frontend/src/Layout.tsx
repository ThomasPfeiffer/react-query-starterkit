import { Box, Divider, Flex, Link, Spinner } from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";

export function Layout() {
  return (
    <Flex
      flexDirection="row"
      h="100vh"
      w="100vw"
      bgGradient="linear(170deg, white 80%, blue.200 100%)"
    >
      <Flex
        as="nav"
        w="300px"
        p="4"
        justifyContent="stretch"
        flexDirection="column"
        position="relative"
      >
        <NavItem text="Introduction" to="introduction" />
        <NavItem text="Query Keys" to="query-keys" />
        <Box position="absolute" bottom="5" left="5">
          <GlobalLoadingIndicator />
        </Box>
      </Flex>
      <Divider orientation="vertical" />
      <Box h="100%" w="100%" p="6">
        <Outlet />
      </Box>
    </Flex>
  );
}

function NavItem(props: { text: string; to: string }) {
  return (
    <Link as={RouterLink} to={props.to} m="2">
      {props.text}
    </Link>
  );
}

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? <Spinner /> : null;
}
