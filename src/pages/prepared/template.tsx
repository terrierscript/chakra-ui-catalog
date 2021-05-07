import { Box, Link, LinkProps, Stack } from "@chakra-ui/react"
import React, { FC } from "react"

const NumberingHoverLink : FC<{number: number} & LinkProps> = ({number, ...linkProps}) => <Link bg={number % 2 ? "gray.100" : "white"} _hover={{bg:"teal.200"}} p={2}  {...linkProps } />

const Page = () => {
  return <Stack>
    <NumberingHoverLink number={1}>foo</NumberingHoverLink>
    <NumberingHoverLink number={2}>baz</NumberingHoverLink>
  </Stack>
}
export default Page