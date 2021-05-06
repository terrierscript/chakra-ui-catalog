import {Box, Heading, Stack, HStack, Avatar } from "@chakra-ui/react"
import React, {  } from "react"
import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum()

const CommentWithStack = () => {
  return <HStack>
    <Avatar></Avatar>
    <Stack>
      <Heading size="sm">Some member</Heading>
      <Box>あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波</Box>
    </Stack>
  </HStack>
}

const CommentWithBox = () => {
  return <Box display="flex" flexDirection="row">
    <Avatar></Avatar>
    <Box>
      <Heading size="sm">lorem ipsum</Heading>
      <Box>あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波</Box>
    </Box>
  </Box>
}

const Page = () => {

  return <Stack>
    <Heading size="lg">Box</Heading>
    <CommentWithBox />

    <Heading size="lg">Stack</Heading>
    <CommentWithStack />
  </Stack>
}
export default Page