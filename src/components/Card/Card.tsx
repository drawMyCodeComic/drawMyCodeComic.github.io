import React from "react"
import {
  Box,
  BoxProps,
  Button,
  Image,
  ImageProps,
  Text,
  TextProps,
} from "@chakra-ui/react"

interface CardProps {
  image: string
  title: string
  actionLabel: string
  isThin?: boolean
  handleClick?(): void
}
const thinTitleStyles: TextProps = {
  fontSize: "18px",
  textAlign: "left",
}
const titleStyles: TextProps = {
  fontSize: "26px",
  mb: "32px",
  textAlign: "center",
}
const containerStyles: BoxProps = {
  boxShadow: "-5px 10px 27px -6px rgba(0,0,0,0.4)",
  p: "20px",
  borderRadius: "8px",
  bgColor: "white",
  minW: { lg: "350px", md: "250px" },
}
const thinContainerStyles: BoxProps = {
  boxShadow: "-5px 10px 27px -6px rgba(0,0,0,0.4)",
  overflow: "hidden",
  borderRadius: "8px",
  p: "20px",
  h: { lg: "150px", md: "100px" },
  w: { lg: "500px", md: "500px" },
}
const imageStyles: ImageProps = {
  w: { lg: "300px", md: "250px" },
  h: { lg: "300px", md: "250px" },
  m: "auto",
  d: "block",
  mb: "20px",
}
const thinImageStyles: ImageProps = {
  w: "100%",
  border: "1px solid black",
  borderRadius: "8px",
  maxH: "70%",
  m: "auto",
  d: "block",
  mb: "10px",
}
export const Card = (props: CardProps) => {
  const titleProps = props.isThin ? thinTitleStyles : titleStyles
  const containerProps = props.isThin ? thinContainerStyles : containerStyles
  const imageProps = props.isThin ? thinImageStyles : imageStyles
  return (
    <Box {...containerProps}>
      <Text {...titleProps}>{props.title}</Text>
      <Image {...imageProps} src={props.image} />
      <Button
        onClick={props.handleClick}
        variant="primary"
        size="xs"
        ml="auto"
        d="block"
      >
        {props.actionLabel}
      </Button>
    </Box>
  )
}
