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

    <Stack>
      <Heading size="md">Tab: Default</Heading>
      <ThemedTab />
      <Heading size="md">Tab: colorScheme="red"</Heading>
      <ThemedTab colorScheme="red" />
    </Stack>
  </Stack>
}

export default Page