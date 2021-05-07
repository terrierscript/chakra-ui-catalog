import { Box, Heading, Progress, ProgressProps, Stack } from "@chakra-ui/react"
import React, { FC, useEffect, useMemo, useState } from "react"

const HitPoint : FC<{value: number} & ProgressProps>= ({value,...props}) => {
  const color = useMemo(() => {
    if(value > 50) return "green"
    if(value > 25) return "yellow"
    return "red"
  },[value])
  return <Progress 
    colorScheme={color} 
    size="lg" rounded="full"
    value={value}
    {...props}
  />
}

const Page = () => {
  const [hp, setHp] = useState(Math.random() * 100)
  useEffect(() => {
    const clear = setInterval(() => {
      setHp(Math.random() * 100)
    },1000)
    return () => clearInterval(clear)
  },[])
  return <Stack>
    <Heading>Flat</Heading>
    <HitPoint value={100} />
    <HitPoint value={50} />
    <HitPoint value={25} />
    <Heading>Animation</Heading>
    <HitPoint value={hp} />
    <Heading>Borderd</Heading>
    <HitPoint value={100} border="solid 2px"  borderColor="gray.600"  />
    <HitPoint value={50}   border="solid 2px"  borderColor="gray.600" />
    <HitPoint value={20}   border="solid 2px"  borderColor="gray.600" />
  </Stack>
}
export default Page