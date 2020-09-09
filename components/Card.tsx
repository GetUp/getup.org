import { Flex, Link, Box, Badge, Stack, Heading, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'

interface CardProps {
  imgSrc: string
  tag: string
  header: string
  paragraph: string
  href: string
}

const Card = ({ imgSrc, tag, header, paragraph, href }: CardProps) => {
  const multipleSizes = require('../public/images/temp.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000')

  const StyledLink = styled(Link)`
    &:hover {
      text-decoration: none !important;
      h3 {
        text-decoration: underline;
      }
    }
  `

  return (
    <>
      <Flex alignItems="center" flexWrap="wrap">
        <StyledLink href={href} isExternal>
          <Stack>
            <img srcSet={multipleSizes.srcSet} src={multipleSizes.src} />
            <Badge width="fit-content" colorScheme="secondary">
              {tag}
            </Badge>
            <Heading as="h3" lineHeight="1.1">
              {header}
            </Heading>
            <Text fontSize="body-3">{paragraph}</Text>
          </Stack>
        </StyledLink>
      </Flex>
    </>
  )
}

export default Card
