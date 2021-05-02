
import { Box, Button, Skeleton, Stack, Text } from "@chakra-ui/react"
import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import { useIntersection } from "use-intersection"
import { LoremIpsum } from "lorem-ipsum"

const LoadingSkeleton = () => <Stack>
  <Skeleton height="20px" />
  <Skeleton height="20px" />
  <Skeleton height="20px" />
</Stack>

export const LazyElement: FC<{}> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const intersecting = useIntersection(ref, {
    rootMargin: '250px',
    once: true,
  })

  return <div ref={ref}> {/* <Box ref={ref}> でも可 */}
    {intersecting ? children : <LoadingSkeleton />}
  </div>
}

const lorem = new LoremIpsum()

const LoreimIpsum = () => {
  const [sampleText] = useState<string>(() => lorem.generateParagraphs(1))
  return <Box>
    <Text>
      {sampleText}
    </Text>
  </Box>
}

const LazyLoadSample = () => {
  const [texts, setState] = useState<string[]>([])
  const append = useCallback(() => {
    const num = Math.ceil(Math.random() * 8)
    const newDummyText = [...Array(10)].map(() => lorem.generateSentences(num))
    setState([...texts, ...newDummyText])
  }, [texts])
  return <Stack p={10} gap={10}>
    {texts.map((text, i) => {
      return <Box key={i} p={10} boxShadow="base">
        <LazyElement >
          <Text>{text}</Text>
          <LoreimIpsum />
        </LazyElement>
      </Box>
    })}
    <Button w="100%" onClick={() => {
      append()
    }}>Add Text</Button>
  </Stack>

}

const Page = () => {
  return <Box>
    <LazyLoadSample />
  </Box>
}

export default Page