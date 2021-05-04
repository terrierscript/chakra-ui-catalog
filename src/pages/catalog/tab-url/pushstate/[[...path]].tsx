import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import React, { FC } from "react"
import { useRouter } from "next/router"
import { GetServerSideProps } from "next"
const tabMap = [
  "dog", "cat"
]
const Page: FC<{ path: string }> = ({ path }) => {
  const initialTab = Math.max(tabMap.indexOf(path), 0)
  const router = useRouter()

  return <Box>
    <Tabs
      onChange={(idx) => {
        router.push({
          pathname: router.pathname,
          query: {
            path: [tabMap[idx]]
          }
        }, undefined, { shallow: true })
      }}
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

export const getServerSideProps: GetServerSideProps = async (req) => {
  const path = req.query.path?.[0] ?? null
  return {
    props: { path }
  }
}

export default Page