import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Spinner } from "@chakra-ui/react"
import React, { FC, ReactNode, useEffect, useState } from "react"

export const LazyLoadingAccordion: FC<{ title: ReactNode }> = ({ title, children }) => {
  const [loaded, setLoaded] = useState(false)
  return <Accordion allowToggle reduceMotion >
    <AccordionItem>{({ isExpanded }) => {
      setLoaded(isExpanded || loaded)
      return <>
        <AccordionButton fontSize="sm" >
          <HStack>
            <AccordionIcon />
            <Box>
              {title}
            </Box>
          </HStack>
        </AccordionButton>
        <AccordionPanel p={0} >
          <Box p={4}>
            {loaded ? children : <Spinner />}
          </Box>
        </AccordionPanel>
      </>
    }}
    </AccordionItem>
  </Accordion>
}

const LoadingItem = () => {
  const [text, setText] = useState<string>()
  useEffect(() => {
    setTimeout(() => {
      setText("Loaded!")
    }, 3000)
  }, [])
  if (!text) {
    return <Box><Spinner />Loading ...</Box>
  }
  return <Box>{text}</Box>
}

const Page = () => {
  return <Box>
    <LazyLoadingAccordion title="lazy loading sample">
      <LoadingItem />
    </LazyLoadingAccordion>
  </Box>
}
export default Page