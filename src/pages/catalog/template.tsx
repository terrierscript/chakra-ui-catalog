import { Box, Button, HStack } from "@chakra-ui/react"
import React from "react"

const Page = () => {
  return <Box>
    <HStack>
    <Button variant="solid">Solid</Button>
    <Button variant="outline">Outline</Button>
    </HStack>
  </Box>
}
export default Page