import { Box, Stack, useBreakpointValue } from "@chakra-ui/react"
import React from "react"


const SwitchMobile = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  if (isMobile) {
    return <Box>Hello Mobile</Box>
  }
  return <Box>Hello Desktop</Box>
}

const Page = () => {
  const breakpointValue = useBreakpointValue(["base", "sm", "md", "lg"])

  return <Stack>
    <Box>Current Size:{breakpointValue}</Box>

    <SwitchMobile />

  </Stack>
}
export default Page