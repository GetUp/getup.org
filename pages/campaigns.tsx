import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Subnav from '../components/Subnav'
import s from '../styles/Campaigns.module.scss'
import { Card, CardGroup } from '../components/Card'
import DefaultGrid from '../components/DefaultGrid'
import {
  Text,
  Tag,
  Badge,
  Stack,
  Heading,
  Box,
  Grid,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { FiArrowDown } from 'react-icons/fi'

const Campaigns = ({ data }) => {
  // const data = {
  //   heading: 'All campaigns',
  //   blurb:
  //     'GetUp members set our movement’s agenda on issues they care about, in the fields of Environmental Justice, Human Rights, Economic Fairness and Democratic Integrity.',
  // }
  const { heading, blurb } = data

  const [activePillar, setActivePillar] = useState('All campaigns')
  const [campaigns, setCampaigns] = useState(data.campaigns)
  const [backgroundColor, setBackgroundColor] = useState('primary.400')

  const pillars = ['All campaigns', 'Environmental Justice', 'Fair Media', 'MX']

  const getBackgroundColor = (pillar) => {
    switch (pillar) {
      case 'All campaigns':
        return 'primary.400'
      case 'Environmental Justice':
        return 'green.500'
      case 'Fair Media':
        return 'purple.600'
    }
  }

  useEffect(() => {
    setCampaigns(
      data.campaigns.filter((c) =>
        activePillar === 'All campaigns' ? c : c.tag === activePillar
      )
    )
    setBackgroundColor(getBackgroundColor(activePillar))
  }, [activePillar])

  const StyledLink = ({ href, children }) => (
    <Link
      href={href}
      mx={4}
      css={{
        WebkitTextStroke: 'inherit',
      }}
      _hover={{
        color: 'white',
      }}
    >
      {children}
    </Link>
  )

  return (
    <>
      <Box background="purple.50">
        {/* <Hero
          heading={activePillar}
          blurb={blurb}
          backgroundColor={backgroundColor}
        /> */}

        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          px={2}
          py="10rem"
          gridRowGap="3rem"
          backgroundColor={backgroundColor}
          color="white"
          borderBottomWidth={8}
          borderBottomStyle="solid"
          borderBottomColor="primary.400"
        >
          <Box
            gridColumn={['span 12', '2/span 10']}
            css={{
              width: 'fit-content',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <Heading
              as="h3"
              css={{
                position: 'absolute',
                top: '0',
                right: '100%',
                color: 'transparent',
                WebkitTextStroke: '1px white',
                width: '100vw',
                textAlign: 'right',
              }}
              lineHeight="1.05"
              fontSize="display-2"
            >
              <StyledLink href="/">
                {pillars[pillars.indexOf(activePillar) - 2]}
              </StyledLink>
              <StyledLink href="/">
                {pillars[pillars.indexOf(activePillar) - 1]}
              </StyledLink>
            </Heading>
            <Heading
              as="h1"
              textAlign={{ md: 'center' }}
              fontSize="display-2"
              lineHeight="1.05"
              mx={4}
            >
              {activePillar}
            </Heading>
            <Heading
              as="h3"
              css={{
                position: 'absolute',
                top: '0',
                left: '100%',
                color: 'transparent',
                WebkitTextStroke: '1px white',
                width: '100vw',
              }}
              lineHeight="1.05"
              fontSize="display-2"
            >
              <StyledLink href="/">
                {pillars[pillars.indexOf(activePillar) + 1]}
              </StyledLink>
              <StyledLink href="/">
                {pillars[pillars.indexOf(activePillar) + 2]}
              </StyledLink>
            </Heading>
          </Box>

          <Box gridColumn={['span 12', '2/span 10', '2/span 10', '4/span 6']}>
            <Text fontSize="body-2" mx="auto">
              {blurb}
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                variant="outline"
                colorScheme="white"
                mt={4}
                mx="auto"
                display="flex"
              >
                Choose a campaign
                <Icon as={FiArrowDown} size="20px" ml={1} />
              </MenuButton>
              <MenuList>
                {pillars.map((p) => (
                  <NextLink href="#">
                    <MenuItem
                      as="a"
                      color="black"
                      onClick={() => setActivePillar(p)}
                    >
                      {p}
                    </MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Grid>

        <DefaultGrid mt={8}>
          <CardGroup>
            {campaigns &&
              campaigns.map((value) => <Card {...value} key={value.header} />)}
          </CardGroup>
        </DefaultGrid>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const fs = require('fs')
  const matter = require('gray-matter')
  const { v4: uuid } = require('uuid')

  const data = (await import('../campaigns/economic-fairness.json')).default

  return {
    props: { data },
  }
}

export default Campaigns
