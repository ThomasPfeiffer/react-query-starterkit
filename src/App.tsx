import { ReactQueryProvider } from "./ReactQueryProvider";
import { Router } from "./Router";
import { ChakraProvider } from "@chakra-ui/react";

export function App() {
  return (
    <ChakraProvider>
      <ReactQueryProvider>
        <Router />
      </ReactQueryProvider>
    </ChakraProvider>
  );
}
