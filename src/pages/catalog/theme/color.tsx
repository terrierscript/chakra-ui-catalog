import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Stack, Button, Heading } from "@chakra-ui/react"
import React, { FC } from "react"

const ThemedTab: FC<{ colorScheme?: string }> = ({ colorScheme }) => {
  return <Box>
    <Tabs {...{ colorScheme }}>
      <TabList>
        <Tab>
          dog
        </Tab>
        <Tab>
          cat
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          🐶
        </TabPanel>
        <TabPanel>
          🐱
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
}

const Page = () => {
  return <Stack spacing={12}>
    <Stack p={4}>
      <Box
        background={"blue.100"} borderColor={"teal.300"} color={"green.800"}
        borderBottomWidth={4}
        p={2}
      >
        background={"blue.100"} borderColor={"teal.300"} color={"green.800"}
      </Box>
    </Stack>
    {/* <Stack p={4}>
      <Box
        background={"rebeccapurple"} borderColor={"#fcba03"} color={"rgb(161, 209, 175)"}
        borderBottomWidth={4}
        p={2}
      >
        background={"rebeccapurple"} borderColor={"#fcba03"} color={"rgb(161, 209, 175)"}
      </Box>
    </Stack> */}
    <Stack p={4}>
      <Heading size="md">colorScheme="yellow" Button</Heading>
      <Button colorScheme="yellow">Yellow Button</Button>
    </Stack>
  </Stack>
}

export default Page