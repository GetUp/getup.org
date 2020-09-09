import Container from '../components/Container'
import s from '../styles/Home.module.scss'
import { Card, CardGroup } from '../components/Card'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm } from 'react-tinacms-github'
import {
  InlineForm,
  InlineTextField,
  InlineTextarea,
} from 'react-tinacms-inline'
import {
  Grid,
  Heading,
  Text,
  Input,
  FormControl,
  Stack,
  Link,
  List,
  ListItem,
  Button,
  Box,
  styled,
  InterpolationWithTheme,
  Flex,
} from '@chakra-ui/core'
import { FiArrowRight } from 'react-icons/fi'
import NextLink from 'next/link'

export default function Home({ file }) {
  const formOptions = {
    label: 'Home Page',
    fields: [
      {
        name: 'hero',
        component: 'group',
        label: 'hero',
        fields: [
          { name: 'heading', component: 'text', label: 'Heading' },
          { name: 'paragraph', component: 'text', label: 'Blurb' },
          { name: 'inputLabel', component: 'text', label: 'Input Label' },
          { name: 'btn', component: 'text', label: 'Button' },
        ],
      },
      {
        name: 'takeActionNow',
        component: 'group-list',
        label: 'Take Action Now',
        description: 'Limit to 4 please',
        itemProps: (item) => ({
          key: item.header,
          label: item.header,
        }),
        defaultItem: () => ({
          imgSrc: '',
          tag: '',
          header: '',
          paragraph: '',
        }),
        fields: [
          { name: 'imgSrc', component: 'text', label: 'Image' },
          { name: 'tag', component: 'text', label: 'Tag' },
          { name: 'header', component: 'text', label: 'Header' },
          { name: 'paragraph', component: 'text', label: 'Paragraph' },
        ],
      },
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  return (
    <>
      <InlineForm form={form}>
        <main className={s.main}>
          <Hero data={data.hero} />
          <TakeActionNow campaigns={data.takeActionNow} />
          <Values />
        </main>
      </InlineForm>
    </>
  )
}

const Hero = ({ data }) => {
  const { heading, paragraph, inputLabel, btn } = data

  return (
    <>
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        gridGap={['0.75rem', '1rem', '1.5rem']}
        gridRowGap={['2rem', '2.5rem', '3rem']}
        background="primary.400"
        px={2}
        py={16}
      >
        <Heading
          as="h1"
          letterSpacing="tight"
          gridColumn={['span 12', 'span 12', '2/span 10']}
          textAlign={['left', 'center']}
          fontSize="display-1"
          lineHeight="0.95"
          color="white"
        >
          <InlineTextarea name="hero.heading" />
        </Heading>
        <Text
          gridColumn={['span 12', 'span 12', '4/span 6']}
          color="white"
          fontSize="body-1"
          align={['left', 'center']}
        >
          <InlineTextarea name="hero.paragraph" />
        </Text>
        <FormControl gridColumn={['span 12', 'span 12', '5/span 4']}>
          <Stack direction={['column', 'row']} justifyContent="center">
            <Input
              width="100%"
              placeholder={inputLabel}
              size="lg"
              backgroundColor="primary.500"
              color="primary.200"
              maxWidth="18rem"
              _placeholder={{
                color: 'white',
              }}
            />
            <Button type="submit" colorScheme="secondary" size="lg">
              Get involved!
            </Button>
          </Stack>
        </FormControl>
      </Grid>
    </>
  )
}

const TakeActionNow = ({ campaigns }) => {
  const styles = {
    container: {
      alignItems: 'center',
      gridTemplateColumns: '1fr max-content',
      gridTemplateRows: 'repeat(3, max-content)',
      p: 'var(--content-padding)',
      px: 'calc(env(safe-area-inset-left) + var(--page-padding))',
      maxWidth: '100rem',
      m: '0 auto',
    },
  }

  return (
    <>
      <Grid {...styles.container}>
        <Heading as="h2" gridColumn="span 1">
          Take action now
        </Heading>
        <NextLink href="/campaigns">
          <Button
            as="a"
            variant="link"
            colorScheme="secondary"
            gridColumn="span 1"
            order={[4, 2]}
            justifyContent={['flex-start']}
          >
            More campaigns
            <Box as={FiArrowRight} size="20px" color="secondary.400" />
          </Button>
        </NextLink>

        <CardGroup>
          {campaigns &&
            campaigns.map((value) => <Card {...value} key={value.header} />)}
        </CardGroup>
      </Grid>
    </>
  )
}

const Values = () => (
  <Grid
    maxWidth="100rem"
    mx="auto"
    p="calc(env(safe-area-inset-left) + var(--page-padding))"
    background="secondary.400"
  >
    <Text fontSize="display-4" color="white" lineHeight="1.1">
      <strong>
        GetUp! is working towards a thriving democracy in Australia led by the
        values and hopes of everyday people.
      </strong>
    </Text>
    {/* <Heading as="h2" color="white">
      Fair
    </Heading> */}
  </Grid>
)

export const getStaticProps = async function ({ preview, previewData }) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../content/home.json')).default,
      },
    },
  }
}
