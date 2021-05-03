import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, ChakraProvider, Container, Divider, HStack } from "@chakra-ui/react"
import Head from "next/head"
import React, { useMemo } from "react"

const Footer = () => {
  const url = useMemo(() => {
    const pathname = window.location.pathname
    const initialPath = encodeURIComponent(pathname)
    const module = encodeURIComponent(`/src/pages/${pathname}.tsx`)
    return `https://codesandbox.io/embed/github/terrierscript/chakra-ui-sandbox/tree/main/?fontsize=14&initialpath=${initialPath}&module=${module}&theme=dark&view=split`
  }, [window.location.pathname])

  if (window.location.host.includes("codesandbox.io")) {
    return null
  }
  return <Box p={4} fontSize={"xs"} color={"gray.400"} >
    <Divider />
    <HStack p={4}>
      <Box userSelect="all" overflowWrap="anywhere">
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
    <Box w={"fit-content"} h={"fit-content"} bg={"gray.50"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container p={4} mt={4} boxShadow="base" maxW="container.sm" >
        <Component {...pageProps} />
      </Container>
      <Footer />
    </Box>
  </ChakraProvider>
}

export default MyApp
