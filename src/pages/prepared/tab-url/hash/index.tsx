import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import React, { useMemo } from "react"

const tabMap = [
  "dog", "cat"
]

const Page = () => {
  const initialTab = useMemo(() => {
    if (typeof location === "undefined") {
      return 0
    }
    return Math.max(tabMap.indexOf(location.hash.replace("#", "")), 0)
  }, [])
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
          🐶
        </TabPanel>
        <TabPanel>
          🐱
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
}

export default Page