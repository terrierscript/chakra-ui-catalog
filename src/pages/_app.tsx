import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, ChakraProvider, Container, Divider, HStack } from "@chakra-ui/react"
import React, { useMemo } from "react"

const Footer = () => {
  const url = useMemo(() => {
    const pathname = window.location.pathname
    const initialPath = encodeURIComponent(pathname)
    const module = encodeURIComponent(`/src/pages/${pathname}.tsx`)
    return `https://codesandbox.io/embed/github/terrierscript/chakra-ui-sandbox/tree/main/?fontsize=14&initialpath=${initialPath}&module=${module}&theme=dark&runonclick=1&view=split`
  }, [])

  return <Box p={4} fontSize={"xs"} color={"gray.400"}>
    <Divider />
    <HStack p={4}>
      <Box userSelect="all">
        @[codesandbox]({url})
      </Box>
      <a href={url} target="_blank">
        <ExternalLinkIcon />
      </a>
    </HStack>
  </Box >
}
function MyApp({ Component, pageProps }: any) {
  return <ChakraProvider>
    <Container p={4} marginVertical={4} boxShadow="base">
      <Component {...pageProps} />
    </Container>
    <Footer />
  </ChakraProvider>
}

export default MyApp
