import { Box, Stack, Text } from "@chakra-ui/react"
import React from "react"

const Page = () => {
  return <Stack>
    <Box>
      <Text _hover={{ color: "red" }}>Hover Me</Text>
    </Box>
    <Box>
      <Text color="blue.500" fontSize="sm" _hover={{ color: "red.500", fontSize: "xl" }}>Hover Me</Text>
    </Box>
  </Stack>
}
export default Page