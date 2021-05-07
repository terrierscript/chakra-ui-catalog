import { Avatar, Badge, Box, Center, Code, Heading, HStack, Kbd, Skeleton, SkeletonCircle, SkeletonText, Stack, Text,Tag, Tooltip, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import React from "react"


const LoremIpsum = () => {
  const items = ["Aspect Ratio", "Box", "Center", "Container", "Flex", "Grid", "SimpleGrid", "Stack", "Wrap", "Button", "Checkbox", "Editable", "Form Control", "Icon Button", "Input", "Number Input", "Pin Input", "Radio", "Select", "Slider", "Switch", "Textarea", "Badge", "Close Button", "Code", "Divider", "Kbd", "List", "Stat", "Table", "Tag", "Alert", "Circular Progress", "Progress", "Skeleton", "Spinner", "Toast", "Text", "Heading", "Alert Dialog", "Drawer", "Menu", "Modal", "Popover", "Tooltip", "Accordion", "Tabs", "Visually Hidden", "Breadcrumb", "Link", "LinkOverlay", "Avatar", "Icon", "Image", "Portal", "Transitions", "useBoolean", "useBreakpointValue", "useClipboard", "useControllable", "useDisclosure", "useMediaQuery", "useMergeRefs", "useOutsideClick", "usePrefersReducedMotion", "useTheme", "useToken"].sort( () => Math.random() - 0.5)

  const colors = [
    `red` , `orange` , `yellow` , `green` , `teal` , `blue` , `cyan` , `purple` , `pink`
  ]
  return <Box>
    <Text opacity={0.2} fontSize={"sm"} px={4} w={1000} >
      
      {items.map(item => {
        const r =   Math.random() > 0.7
        const r2 =   Math.random() > 0.7
        const color = r ? colors[Math.floor(Math.random() * colors.length)] : "teal"
   
        return <Text fontWeight={r2 ? "bold" : "normal"} display="inline-block" px={2} color={`${color}.500`}
            >{item}</Text>
      })}
    </Text >
  </Box>
}

const Page = () => {
  return <Center >
      <Stack h={700} w={500}  bg="gray.50" position="relative" overflow="hidden">
      <Box zIndex={1}>

      <HStack p={16}>
        {/* <VStack fontWeight="bold" fontSize="3xl" bg="teal.500" color="white" px={4} py={2} rounded={"full"} variant="solid" w="8rem" h="8rem" lineHeight="100%" justifyContent="center" zIndex={100} boxShadow="xl">
          <Text>本編</Text>
          <Text>無料</Text>
        </VStack> */}
      </HStack>
      <Stack justifyContent="center" h={"100%"}  
      >
        <Stack px={8} gridGap={4} w={"100%"} justify="center" >
            <Stack >
              <Heading fontSize="8xl" fontWeight="bold" >Chakra</Heading> 
              <Heading fontSize="8xl"  fontWeight="bold">
            <Tooltip rounded="2xl" label="Tips" defaultIsOpen={true} fontSize="5xl" isOpen={true} placement="right" hasArrow p={4} m={4}>
            
                  <Text w={"fit-content"} pr={4}>
                    UI
                  </Text>
          </Tooltip>
              </Heading>
            </Stack>
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
