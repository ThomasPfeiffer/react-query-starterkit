import { HStack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { UseQueryResult } from "@tanstack/react-query";
import { CheckIcon } from "@chakra-ui/icons";

export function QueryStatusDisplay({ query }: { query: UseQueryResult }) {
  return (
    <>
      <HStack>
        <Indicator query={query} field="isPending" />
        <Indicator query={query} field="isFetching" />
        <Indicator query={query} field="isRefetching" />
        <Indicator query={query} field="isSuccess" />
        <Indicator query={query} field="isStale" />
        <Indicator query={query} field="isError" />
      </HStack>
    </>
  );
}

type IndicatorType = {
  [K in keyof UseQueryResult]: UseQueryResult[K] extends boolean ? K : never;
}[keyof UseQueryResult];

function Indicator(props: { query: UseQueryResult; field: IndicatorType }) {
  return (
    <Tag
      colorScheme={props.query[props.field] ? "green" : "gray"}
      variant={props.query[props.field] ? "solid" : "outline"}
      fontSize="1rem"
    >
      {props.query[props.field] && (
        <TagLeftIcon boxSize="12px" as={CheckIcon} />
      )}
      <TagLabel>{props.field}</TagLabel>
    </Tag>
  );
}
