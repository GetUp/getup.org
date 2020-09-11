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
  AspectRatio,
  Tag,
} from '@chakra-ui/core'

interface CardProps {
  imgSrc: string
  tag: string
  header: string
  paragraph: string
  href: string
  size?: string
}

export const Card = ({
  imgSrc,
  tag,
  header,
  paragraph,
  href,
  size = 'regular',
}: CardProps) => {
  const multipleSizes = require('../public/images/temp.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000')

  return (
    <ListItem
      gridColumn={
        size === 'large'
          ? ['span 2', 'span 4', 'span 6']
          : ['span 2', 'span 2', 'span 3']
      }
      css={{ scrollSnapAlign: 'start', minWidth: '85%' }}
    >
      <Flex alignItems="center" flexWrap="wrap">
        <Link
          href={href}
          isExternal
          role="group"
          width="100%"
          _hover={{ textDecoration: 'none' }}
        >
          <Stack spacing={3}>
            <AspectRatio ratio={16 / 10}>
              <img
                srcSet={multipleSizes.srcSet}
                src={multipleSizes.src}
                style={{ objectFit: 'cover', borderRadius: '4px' }}
              />
            </AspectRatio>
            <Tag width="fit-content" colorScheme="secondary">
              {tag}
            </Tag>
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
        gridColumnGap: ['0.75rem', '1.5rem', '2rem'],
        gridRowGap: ['4rem'],
        gridColumn: 'span 12',
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
