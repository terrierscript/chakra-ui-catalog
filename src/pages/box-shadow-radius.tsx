import { Box, Stack } from "@chakra-ui/react"
import React from "react"

const Page = () => {
  return <Stack p={10} spacing={8}>
    <Box p={10} bg={"gray.100"} >Plain</Box>
    <Box p={10} bg={"gray.100"} shadow="md" >shadow="md"</Box>
    <Box p={10} bg={"gray.100"} shadow="md" rounded="md">shadow="md" rounded="md"</Box>
    <Box p={10} bg={"gray.100"} shadow="md" rounded="full">shadow="md" rounded="full"</Box>
  </Stack>
}
export default Page