import { Avatar, Badge, Box, Center, Code, Heading, HStack, Kbd, Skeleton, SkeletonCircle, SkeletonText, Stack, Text,Tag, Tooltip, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import React from "react"


const Page = () => {
  return <Center >
      <Stack h={700} w={500}  bg="teal.500" position="relative" overflow="hidden">
      <Box zIndex={1}>

      <HStack p={16}>
        {/* <VStack fontWeight="bold" fontSize="3xl" bg="white" color="" px={4} py={2} rounded={"full"} variant="solid" w="8rem" h="8rem" lineHeight="100%" justifyContent="center" zIndex={100} boxShadow="xl">
          <Text>本編</Text>
          <Text>無料</Text>
        </VStack> */}
      </HStack>
      <Stack justifyContent="center" h={"100%"}  
      >
        <Stack px={8} gridGap={4} w={"100%"} justify="center" >
            <VStack >
              <Heading color="white" fontSize="8xl" fontWeight="bold" >Chakra</Heading> 
              <Heading color="white" fontSize="8xl"  fontWeight="bold">
            <Tooltip rounded="2xl" label="Tips" defaultIsOpen={true} fontSize="5xl" isOpen={true} placement="bottom" hasArrow p={4} px={16} m={4}>
                <Text w={"fit-content"} pr={4}>
                  UI
                </Text>
              </Tooltip>
              </Heading>
            </VStack>
        </Stack>
        {/* <HStack px={4}> */}
          {/* <SkeletonText w={"100%"} noOfLines={4} speed={0}/> */}
          {/* <LoremIpsum /> */}
        {/* </HStack> */}
      </Stack>
        </Box>
    </Stack>
  </Center>
}

Page.containerSize ="fill"
export default Page
