import Hero from '../components/Hero'
import Subnav from '../components/Subnav'
import DefaultGrid from '../components/DefaultGrid'
import { Heading, Text } from '@chakra-ui/core'

const Campaigns = () => {
  const data = {
    heading: 'About us',
    blurb:
      'GetUp is an independent movement of more than a million people working to build a progressive Australia and bring participation back into our democracy.      ',
  }

  const subNav = [
    {
      label: 'Who we are',
      id: 'who-we-are',
    },
    {
      label: 'What do we work on',
      id: 'what-do-we-work-on',
    },
    {
      label: 'How do we do it',
      id: 'how-do-we-do-it',
    },
  ]
  return (
    <>
      <Hero
        heading={data.heading}
        blurb={data.blurb}
        backgroundColor="green.500"
      />
      <Subnav data={subNav} />
      <DefaultGrid>
        <Heading as="h2">Who we are</Heading>
        <Text>
          The GetUp movement is powered by the values and hopes of everyday
          people. By combining the power of one million members, movement
          partners and a central team of expert strategists, we do whatever it
          takes to make extraordinary impact.
        </Text>
      </DefaultGrid>

      <DefaultGrid background="secondary.400" color="white">
        <Heading
          as="h2"
          fontSize="display-4"
          gridColumn={['span 12', 'span 10', 'span 10', 'span 7']}
          py={16}
          lineHeight="1.1"
        >
          Our movement does what it takes to win.
        </Heading>
        <Text
          gridColumn={['span 12', 'span 5', 'span 4']}
          fontSize="body-2"
          lineHeight="1.5"
        >
          When you support GetUp you're not just funding political noise. You're
          powering a million-strong, strategically savvy organisation that makes
          real change happen.
        </Text>
      </DefaultGrid>
      <div style={{ height: '4000px' }} />
    </>
  )
}

export default Campaigns
