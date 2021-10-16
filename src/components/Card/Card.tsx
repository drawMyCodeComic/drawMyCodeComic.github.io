import React from "react"
import { Box, Button, Image, Text } from "@chakra-ui/react"

interface CardProps {
  image: string;
  title: string;
  actionLabel: string;
  handleClick?(): void;
}
export const Card = ( props: CardProps ) => {
  return (
    <Box boxShadow="-5px 10px 27px -6px rgba(0,0,0,0.4)" p="30px" borderRadius="4px" bgColor="white" minW="460px">
      <Text fontSize="40px" mb="32px" textAlign="center">
        {props.title}
      </Text>
      <Image
        w="400px"
        h="400px"
        src={props.image}
        mb="20px"
      />
      <Button onClick={props.handleClick} ml="auto" d="block">
        {props.actionLabel}
      </Button>
    </Box>
  )
}
