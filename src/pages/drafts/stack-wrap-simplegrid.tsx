import { Box, Stack } from "@chakra-ui/react"
import React from "react"

const MockBlock = () => <Box colorScheme="red.300" w={100} h={100}></Box>
const Page = () => {
  return <Stack>
    <MockBlock></MockBlock>
  </Stack>
}

export default Page