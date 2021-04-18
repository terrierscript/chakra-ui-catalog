
import { Box, Button, Skeleton, Stack, Text } from "@chakra-ui/react"
import React, { FC, useEffect, useRef, useState } from "react"
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

  console.log(intersecting)
  return <div ref={ref}>
    {intersecting ? children : <LoadingSkeleton />}
  </div>
}

const lorem = new LoremIpsum()
const lazyLoremIpsum = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(lorem.generateParagraphs(7))
    }, 1000)
  })
}
const LoreimIpsum = () => {
  const [sampleText, setSampleText] = useState<string>(() => lorem.generateParagraphs(7))
  return <Box>
    <Text>
      {sampleText}
    </Text>
  </Box>
}

const Page = () => {
  const [startLoad, setStartLoad] = useState(false)
  const [loading, setLoading] = useState(false)
  const [texts, setTexts] = useState(() => {
    return [...Array(30)].map(() => lorem.generateParagraphs(7))
  })
  return <Stack>
    {/* <Button></Button> */}
    {texts.map((text, i) => {
      return <LazyElement key={i}>
        <Box p={10}>
          <Text>{text}</Text>
          <LoreimIpsum />
        </Box>
      </LazyElement>
    })}
  </Stack>
}

export default Page