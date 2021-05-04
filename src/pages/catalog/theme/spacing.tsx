
import { Box, Heading, HStack, Stack } from "@chakra-ui/react"
import React from "react"

const Page = () => {
  return <Stack>
    <Stack>
      <Heading size="md">ThemeのSpace値を使った場合 (padding)</Heading>
      <HStack><Box h={4} w={6} bg={"pink.100"} /><Box>{"w={6}"}</Box></HStack>
      <HStack><Box h={4} w={7} bg={"pink.100"} /><Box>{"w={7}"}</Box></HStack>
      <HStack><Box h={4} w={8} bg={"pink.100"} /><Box>{"w={8}"}</Box></HStack>
      <HStack><Box h={4} w={9} bg={"pink.100"} /><Box>{"w={9}"}</Box></HStack>
      <HStack><Box h={4} w={10} bg={"pink.100"} /><Box>{"w={10}"}</Box></HStack>
      <HStack><Box h={4} w={11} bg={"pink.100"} /><Box>{"w={11}"}</Box></HStack>
      <HStack><Box h={4} w={12} bg={"pink.100"} /><Box>{"w={12}"}</Box></HStack>
      <HStack><Box h={4} w={13} bg={"pink.100"} /><Box>{"w={13}"}</Box></HStack>
      <HStack><Box h={4} w={14} bg={"pink.100"} /><Box>{"w={14}"}</Box></HStack>
      <HStack><Box h={4} w={15} bg={"pink.100"} /><Box>{"w={15}"}</Box></HStack>
      <HStack><Box h={4} w={16} bg={"pink.100"} /><Box>{"w={16}"}</Box></HStack>
    </Stack>
    <Stack>
      <Heading size="md">pxを明示した場合</Heading>
      <HStack><Box h={4} w={"6px"} bg={"pink.100"} /><Box>{'w={6px}'}</Box></HStack>
      <HStack><Box h={4} w={"7px"} bg={"pink.100"} /><Box>{'w={7px}'}</Box></HStack>
      <HStack><Box h={4} w={"8px"} bg={"pink.100"} /><Box>{'w={8px}'}</Box></HStack>
      <HStack><Box h={4} w={"9px"} bg={"pink.100"} /><Box>{'w={9px}'}</Box></HStack>
      <HStack><Box h={4} w={"10px"} bg={"pink.100"} /><Box>{'w={10px}'}</Box></HStack>
      <HStack><Box h={4} w={"11px"} bg={"pink.100"} /><Box>{'w={11px}'}</Box></HStack>
      <HStack><Box h={4} w={"12px"} bg={"pink.100"} /><Box>{'w={12px}'}</Box></HStack>
      <HStack><Box h={4} w={"13px"} bg={"pink.100"} /><Box>{'w={13px}'}</Box></HStack>
      <HStack><Box h={4} w={"14px"} bg={"pink.100"} /><Box>{'w={14px}'}</Box></HStack>
      <HStack><Box h={4} w={"15px"} bg={"pink.100"} /><Box>{'w={15px}'}</Box></HStack>
      <HStack><Box h={4} w={"16px"} bg={"pink.100"} /><Box>{'w={16px}'}</Box></HStack>

    </Stack>
  </Stack>
}
export default Page