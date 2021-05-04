import { Box, Stack, useBreakpointValue } from "@chakra-ui/react"
import React from "react"

const Page = () => {
  const breakpointValue = useBreakpointValue(["base", "sm", "md", "lg"])
  return <Stack>
    <Box>Current Size:{breakpointValue}</Box>
    <Box p={2} bg={["red.200", "yellow.200", "green.200", "blue.200"]} >
      {`["red.200", "yellow.200", "green.200", "blue.200"]`}
    </Box>
    <Box p={2} bg={{ base: "red.200", sm: "yellow.200", md: "green.200", lg: "blue.200" }} >
      {`{base: "red.200", sm: "yellow.200", md: "green.200", lg: "blue.200" }`}
    </Box>
    <Box p={2} bg={{ sm: "yellow.200", md: "green.200", lg: "blue.200" }} >
      {`{ sm: "yellow.200", md: "green.200", lg: "blue.200" }`}
    </Box>
    <Box p={2} bg={{ base: "red.200", md: "green.200", lg: "blue.200" }} >
      {`{ base: "red.200", md: "green.200", lg: "blue.200" }`}
    </Box>
  </Stack>
}

export default Page