import { Grid, Box, Flex, Heading, SimpleGrid, Stack, HStack, VStack, Avatar } from "@chakra-ui/react"
import React, { FC, useMemo } from "react"
import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum()

const TweetLike = () => {
  return <HStack>
    <Avatar></Avatar>
    <Stack>
      <Heading size="sm">Some member</Heading>
      <Box>あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波</Box>
    </Stack>
  </HStack>
}

const TweetLikeBox = () => {
  return <Box display="flex" flexDirection="row">
    <Avatar></Avatar>
    <Box>
      <Heading size="sm">Some member</Heading>
      <Box>あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波</Box>
    </Box>
  </Box>
}

const Page = () => {

  return <Stack>
    <Heading size="lg">Box</Heading>
    <TweetLikeBox />

    <Heading size="lg">Stack</Heading>
    <TweetLike />
  </Stack>
}
export default Page