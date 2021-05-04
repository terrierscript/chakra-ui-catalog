import { Box, Stack, useBreakpointValue } from "@chakra-ui/react"
import React from "react"


const SwitchMobile = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  if (isMobile) {
    return <Box bg="red.100" p={4}>Hello Mobile</Box>
  }
  return <Box bg="blue.100" >Hello Desktop</Box>
}

const Page = () => {
  const breakpointValue = useBreakpointValue(["base", "sm", "md", "lg"])

  return <Stack>
    <Box>Current Size:{breakpointValue}</Box>
    <Box >
      <SwitchMobile />
    </Box>
  </Stack>
}
export default Page