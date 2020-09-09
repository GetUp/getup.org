import {
  Flex,
  Link,
  Badge,
  Stack,
  Heading,
  Text,
  Grid,
  InterpolationWithTheme,
  ListItem,
} from '@chakra-ui/core'

interface CardProps {
  imgSrc: string
  tag: string
  header: string
  paragraph: string
  href: string
}

export const Card = ({ imgSrc, tag, header, paragraph, href }: CardProps) => {
  const multipleSizes = require('../public/images/temp.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000')

  return (
    <ListItem
      gridColumn={['span 2', 'span 2', 'span 3']}
      css={{ scrollSnapAlign: 'start', minWidth: '85%' }}
    >
      <Flex alignItems="center" flexWrap="wrap">
        <Link
          href={href}
          isExternal
          role="group"
          _hover={{ textDecoration: 'none' }}
        >
          <Stack>
            <img srcSet={multipleSizes.srcSet} src={multipleSizes.src} />
            <Badge width="fit-content" colorScheme="secondary">
              {tag}
            </Badge>
            <Heading
              as="h3"
              lineHeight="1.1"
              _groupHover={{
                textDecoration: 'underline',
                backgroundColor: 'pink',
              }}
            >
              {header}
            </Heading>
            <Text fontSize="body-3">{paragraph}</Text>
          </Stack>
        </Link>
      </Flex>
    </ListItem>
  )
}

export const CardGroup = ({ children }) => {
  const styles = {
    listWrapper: {
      props: {
        display: ['flex', 'grid'],
        gridTemplateColumns: [
          'repeat(4, 1fr)',
          'repeat(4, 1fr)',
          'repeat(12, 1fr)',
        ],
        gridGap: ['0.75rem', '1rem', '1.5rem'],
        gridColumn: 'span 2',
        marginTop: [4, 8],
        marginBottom: 4,
        order: 3,
      },
      css: {
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        overflowX: 'auto',
      } as InterpolationWithTheme<any>,
    },
  }
  return (
    <Grid as="ul" {...styles.listWrapper.props} css={styles.listWrapper.css}>
      {children}
    </Grid>
  )
}

export default Card
