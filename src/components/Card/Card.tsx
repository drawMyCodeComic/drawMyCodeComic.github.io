import React from "react"
import { Box, Button, Image, Text } from "@chakra-ui/react"

interface CardProps {
  image: string
  title: string
  actionLabel: string
  handleClick?(): void
}
export const Card = (props: CardProps) => {
  return (
    <Box
      boxShadow="-5px 10px 27px -6px rgba(0,0,0,0.4)"
      p="20px"
      borderRadius="8px"
      bgColor="white"
      minW={{ lg: "350px", md: "250px" }}
    >
      <Text fontSize="26px" mb="32px" textAlign="center">
        {props.title}
      </Text>
      <Image
        w={{ lg: "300px", md: "250px" }}
        h={{ lg: "300px", md: "250px" }}
        m="auto"
        d="block"
        src={props.image}
        mb="20px"
      />
      <Button onClick={props.handleClick} ml="auto" d="block">
        {props.actionLabel}
      </Button>
    </Box>
  )
}
