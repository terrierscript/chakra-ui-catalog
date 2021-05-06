import NextLink from "next/link"
import { Link, Box, Button, Stack, Heading } from "@chakra-ui/react"
import React from "react"

const Page = () => {
  return <Stack>
    <Heading size="md">Link</Heading>
    <Link href="https://google.com">
      <Button>default button</Button>
    </Link>
    <Button as="a" href="https://google.com">as=a button</Button>

    <Heading size="md">NextLink</Heading>
    <NextLink href="https://google.com" passHref>
      <Button>default button</Button>
    </NextLink>
    <NextLink href="https://google.com" passHref>
      <Button as="a">as=a button</Button>
    </NextLink>
  </Stack>
}
export default Page