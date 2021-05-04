import { Box, Stack } from "@chakra-ui/react"
import React from "react"

const Page = () => {
  return <Stack>
    <Box bg={"red.100"} p={1} w={"base"}>base</Box>
    <Box bg={"red.100"} p={1} w={"xl"}>xl</Box>
    <Box bg={"red.100"} p={1} w={"lg"}>lg</Box>
    <Box bg={"red.100"} p={1} w={"sm"}>sm</Box>
    <Box bg={"red.100"} p={1} w={"xs"}>xs</Box>
  </Stack>
}
export default Page