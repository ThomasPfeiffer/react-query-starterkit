import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({});

export function ReactQueryProvider(props: PropsWithChildren<unknown>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} position="right" />
      {props.children}
    </QueryClientProvider>
  );
}
