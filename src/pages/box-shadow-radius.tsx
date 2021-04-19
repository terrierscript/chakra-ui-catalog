import { Box, Button, Stack } from "@chakra-ui/react"
import React from "react"

const Page = () => {
  return <Stack p={10} spacing={4}>
    <Box p={4} bg={"gray.100"} >Plain</Box>
    <Box p={4} bg={"gray.100"} shadow="md" >shadow="md"</Box>
    <Box p={4} bg={"gray.100"} shadow="md" rounded="md">shadow="md" rounded="md"</Box>
    <Box p={4} bg={"gray.100"} shadow="md" rounded="full">shadow="md" rounded="full"</Box>
    <Box>
      <Button shadow="md">Button Shadow</Button>
    </Box>
  </Stack>
}
export default Page