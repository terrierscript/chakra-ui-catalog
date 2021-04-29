import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import React from "react"

const tabMap = [
  "foo", "baz"
]
const Page = () => {
  const initialTab = Math.max(tabMap.indexOf(location.hash.replace("#", "")), 0)
  return <Box>
    <Tabs
      onChange={(idx) => { location.hash = `#${tabMap[idx]}` }}
      defaultIndex={initialTab}
    >
      <TabList>
        <Tab>
          {tabMap[0]}
        </Tab>
        <Tab>
          {tabMap[1]}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          1
        </TabPanel>
        <TabPanel>
          2
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
}
export default Page