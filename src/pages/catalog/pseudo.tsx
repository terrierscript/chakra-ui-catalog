import { Box, Heading, Input, Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"


const Quoted : FC<{}>= ({children}) => <Box _before={{content:`"「"`}} _after={{content:`"」"`}}>
  {children}
</Box>


const Page = () => {
  return <Stack>
    <Box>
      <Heading size="md">Hover</Heading>
      <Text _hover={{ color: "red" }}>Hover Me</Text>
    </Box>
    <Box>
      <Heading size="md">Hover with theme values</Heading>
      <Text color="blue.500" fontSize="sm" _hover={{ color: "red.500", fontSize: "xl" }}>Hover Me</Text>
    </Box>
    <Box>
      <Heading size="md">::placeholder</Heading>
      <Input placeholder="プレースホルダー" _placeholder={{color: "purple.500"}}/>
    </Box>
    <Box>
      <Heading size="md">::before and ::after</Heading>
      <Quoted>
        ここにセリフ
      </Quoted>
    </Box>
  </Stack>
}
export default Page