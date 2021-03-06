import React from 'react'
import NextLink from "next/link"
// @ts-ignore
import recursiveReaddir from "recursive-readdir"
import { Box, Stack } from '@chakra-ui/react'

export const getServerSideProps = async () => {
  const files = await recursiveReaddir("./src/pages")
  const pathnames = files
    .map((file: string) => {
      const pathname = file
        .replace("src/pages/", "") // remove basedir
        .replace(/.[jt]sx?$/, "") // remove exteension
        .replace("index", "")
      if(pathname === ""){
        return "/"
      }
      return pathname
    })
    .filter((file: string) => !/^_.+/.test(file)) // remove _xxx
    .sort()
  return {
    props: { pathnames }
  }
}

export default function Home({ pathnames }: { pathnames: string[] }) {
  return (
    <Box p={10}>
      <Stack>
        {pathnames.map(p => {
          return <NextLink key={p} href={p}>{p}</NextLink>
        })}
      </Stack>
    </Box>
  )
}

