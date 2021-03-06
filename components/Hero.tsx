import s from './index.module.scss'
import { Grid, Text, Heading } from '@chakra-ui/core'

interface HeroProps {
  heading: string
  blurb: string
  backgroundColor?: string
  borderBottom?: string
  [x: string]: any
}

const Hero = ({
  heading,
  blurb,
  backgroundColor = 'primary.400',
  borderBottom = 'primary.400',
  ...props
}: HeroProps) => (
  <Grid
    gridTemplateColumns="repeat(12, 1fr)"
    px={2}
    py="10rem"
    gridRowGap="3rem"
    backgroundColor={backgroundColor}
    color="white"
    borderBottomWidth={8}
    borderBottomStyle="solid"
    borderBottomColor={borderBottom}
    {...props}
  >
    <Heading
      as="h1"
      gridColumn={['span 12', '2/span 10']}
      textAlign={{ md: 'center' }}
      fontSize="display-2"
      lineHeight="1.05"
    >
      {heading}
    </Heading>
    <Text
      gridColumn={['span 12', '2/span 10', '2/span 10', '4/span 6']}
      fontSize="body-2"
      mx="auto"
    >
      {blurb}
    </Text>
  </Grid>
)

export default Hero
