import { Image, Box, Stack, Wrap, WrapItem } from "@chakra-ui/react"
import { LoremIpsum } from "lorem-ipsum"
import React, { FC } from "react"
import useSWR from "swr"

const lorem = new LoremIpsum()

const MockBlock: FC<{}> = (props) => <Box p={2}
  bg="red.300"
  {...props}
/>

const Page = () => {
  const { data, error } = useSWR("https://dog.ceo/api/breeds/image/random/10", {
    revalidateOnFocus: false,
    revalidateOnMount: false
  })
  // const items = [...Array(20)].map(() => {
  //   return lorem.generateWords().split(" ").map(word => `${word}${Math.random() > 0.5 ? "\n" : ""}`).join(" ")
  // })
  if (!data) {
    return null
  }
  const items = data.message
  return <Wrap shouldWrapChildren>
    {items.map(item =>
      <WrapItem key={item} >
        <Image
          borderRadius="md"
          h={48}
          // boxSize={20}
          objectFit={"scale-down"}
          src={item}
        />
      </WrapItem>
    )}
  </Wrap>
}

Page.containerSize = "container.lg"

// export const getServerSideProps = () => {
//   return {
//     props: {
//       layout: {
//         containerSize: "container.lg"
//       }
//     }
//   }
// }


export default Page

// Page.containerSize = "container.lg"