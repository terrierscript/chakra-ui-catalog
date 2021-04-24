import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useTabsContext } from "@chakra-ui/react"
import React from "react"

const TabsInner = () => {
  const { selectedIndex, focusedIndex } = useTabsContext()
  return <Box>
    <Box>{selectedIndex}</Box>
    <Box>{focusedIndex}</Box>
    <TabList>
      <Tab>1</Tab>
      <Tab>2</Tab>
      <Tab>3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>1 panel</TabPanel>
      <TabPanel>2 panel</TabPanel>
      <TabPanel>3 panel</TabPanel>
    </TabPanels>
  </Box>
}
const TabsOuter = () => {
  // Tabs ≒ TabsProvider
  return <Tabs>
    <TabsInner />
  </Tabs>
}

const TabsSample = () => {
  return <Tabs>
    <TabList>
      <Tab>1</Tab>
      <Tab>2</Tab>
      <Tab>3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>1 panel</TabPanel>
      <TabPanel>2 panel</TabPanel>
      <TabPanel>3 panel</TabPanel>
    </TabPanels>
  </Tabs>
}

const Page = () => {
  return <Box>
    <TabsSample />
    <TabsOuter />
  </Box>
}
export default Page