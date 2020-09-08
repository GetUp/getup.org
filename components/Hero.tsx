import s from './index.module.scss'
import { Grid, Text, Heading } from '@chakra-ui/core'

interface HeroProps {
  heading: string
  blurb: string
}

const Hero = ({ heading, blurb }: HeroProps) => (
  <>
    {/* <section className={`grid ${s.hero}`}>
      <h1 className="display-3">{heading}</h1>
      <p className="body-2">{blurb}</p>
    </section> */}
    <Grid gridTemplateColumns="repeat(12, 1fr)" py="10rem" gridRowGap="4rem">
      <Heading as="h1" gridColumn="2/span 10" textAlign={{ md: 'center' }}>
        {heading}
      </Heading>
      <Text gridColumn="4/span 6">{blurb}</Text>
    </Grid>
  </>
)

export default Hero
