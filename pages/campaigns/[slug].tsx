import DefaultGrid from '../../components/DefaultGrid'
import { Card, CardGroup } from '../../components/Card'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useState, useEffect } from 'react'

import {
  Text,
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
  InterpolationWithTheme,
  useTheme,
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { FiArrowDown } from 'react-icons/fi'
import _ from 'lodash'

interface CampaignProps {
  data: {
    campaigns: {
      imgSrc: string
      slug: string
      tag: string
      header: string
      paragraph: string
      href: string
      size: string
    }[]
    pillars: {
      title: string
      blurb: string
      slug: string
    }[]
    slug: string
  }
}

const Campaign = ({ data }: CampaignProps) => {
  const { campaigns, pillars, slug } = data
  const [activePillar, setActivePillar] = useState(
    pillars && _.find(pillars, { slug: `/campaigns/${slug}` })
  )

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(activePillar.title))
  }, [activePillar])

  const [backgroundColor, setBackgroundColor] = useState('primary.400')

  const getBackgroundColor = (pillar) => {
    switch (pillar) {
      case 'All campaigns':
        return 'primary.400'
      case 'Environmental Justice':
        return 'green.500'
      case 'Economic Fairness':
        return 'teal.500'
      case 'First Nations Justice':
        return 'red.600'
      case 'Fair Media':
        return 'purple.600'
      case 'Human Rights':
        return 'orange.600'
      default:
        return 'primary.400'
    }
  }

  const findPillar = (pos: number) => {
    return pillars[_.findIndex(pillars, activePillar) + pos]
  }

  return (
    <>
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
        overflow="hidden"
      >
        <ChooseACampaign pillars={pillars} gridColumn="span 12" />

        <Box
          gridColumn={['span 12', '2/span 10']}
          width="fit-content"
          m="0 auto"
          position="relative"
        >
          <StyledHeadingWrapper left={true}>
            <StyledHeading pillar={findPillar(-2)} />
            <StyledHeading pillar={findPillar(-1)} />
          </StyledHeadingWrapper>

          <StyledHeading1>{activePillar && activePillar.title}</StyledHeading1>

          <StyledHeadingWrapper>
            <StyledHeading pillar={findPillar(1)} />
            <StyledHeading pillar={findPillar(2)} />
          </StyledHeadingWrapper>
        </Box>

        <Box gridColumn={['span 12', '2/span 10', '2/span 10', '4/span 6']}>
          <Text fontSize="body-2" mx="auto">
            {activePillar.blurb}
          </Text>
        </Box>
      </Grid>

      <DefaultGrid mt={8}>
        <CardGroup>
          {campaigns &&
            campaigns.map((value) => (
              <Card {...value} key={value.header} size={value.size} />
            ))}
        </CardGroup>
      </DefaultGrid>
    </>
  )
}

const ChooseACampaign = ({ pillars, ...props }) => (
  <Menu>
    <MenuButton
      as={Button}
      variant="inline"
      colorScheme="white"
      mt={4}
      mx="auto"
      display="flex"
      {...props}
    >
      Choose a campaign
      <Icon as={FiArrowDown} size="20px" ml={1} />
    </MenuButton>
    <MenuList>
      {pillars.map((p) => (
        <NextLink href="/campaigns/[slug]" as={p.slug} key={p.slug}>
          <MenuItem as="a" color="black">
            {p.title}
          </MenuItem>
        </NextLink>
      ))}
    </MenuList>
  </Menu>
)

const StyledHeadingWrapper = ({ children, left = false }) => (
  <Box
    position="absolute"
    top="0"
    width="1000vw"
    right={left && '100%'}
    left={!left && '100%'}
    textAlign={left ? 'right' : 'left'}
  >
    {children}
  </Box>
)

const StyledHeading1 = ({ children }) => (
  <Heading
    as="h1"
    mx={4}
    textAlign={{ md: 'center' }}
    lineHeight="1.05"
    fontSize="display-2"
  >
    {children}
  </Heading>
)

const StyledHeading = ({ pillar }) => (
  <Heading
    as="h3"
    color="transparent"
    display="inline-block"
    lineHeight="1.05"
    fontSize="display-2"
  >
    {pillar && <StyledLink href={pillar.slug}>{pillar.title}</StyledLink>}
  </Heading>
)

const StyledLink = ({ href, children }) => (
  <NextLink href="/campaigns/[slug]" as={href}>
    <Link
      as="a"
      mx={4}
      fontSize="inherit"
      css={{
        WebkitTextStroke: '1px white',
      }}
      _hover={{
        color: 'white',
      }}
    >
      {children}
    </Link>
  </NextLink>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fs = require('fs')
  const matter = require('gray-matter')
  const { v4: uuid } = require('uuid')

  const campaigns = (await import('../../campaigns/campaigns.json')).default
  const pillars = (await import('../../campaigns/pillars.json')).default

  return {
    props: {
      key: uuid(),
      data: {
        campaigns:
          params.slug === 'all'
            ? campaigns
            : campaigns.filter((d) => d.slug === params.slug),
        pillars: pillars,
        slug: params.slug,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pillars = (await import('../../campaigns/pillars.json')).default

  const paths = pillars.map((c) => ({
    params: { slug: c.slug.replace('/campaigns/', '') },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Campaign
