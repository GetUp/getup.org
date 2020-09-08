import Container from '../components/Container'
import s from '../styles/Home.module.scss'
import Card from '../components/Card'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm } from 'react-tinacms-github'
import {
  InlineForm,
  InlineTextField,
  InlineTextarea,
} from 'react-tinacms-inline'
import { Grid, Heading, Text, Input, FormControl, Stack } from '@chakra-ui/core'
import Button from '../components/Button'

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
            <Button type="submit">Get involved!</Button>
          </Stack>
        </FormControl>
      </Grid>
    </>
  )
}

const TakeActionNow = ({ campaigns }) => {
  return (
    <Container className="">
      <section className={s.takeActionWrapper}>
        <h2 className="heading-1">Take action now</h2>
        <a href="#" style={{ display: 'flex', fontWeight: 'bold' }}>
          More campaigns
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: '0.125em' }}
          >
            <path
              fillRule="evenodd"
              stroke="black"
              strokeWidth="1"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </a>

        <ul className={`grid`}>
          {campaigns &&
            campaigns.map((value) => (
              <li key={value.header}>
                <Card {...value} />
              </li>
            ))}
          <li className="body-3">
            <a href="#">More campaigns</a>

            {/* Add an arrow */}
          </li>
        </ul>
      </section>
    </Container>
  )
}

const Values = () => (
  <Container className="">
    <section className={`grid ${s.values}`}>
      <p className="display-4">
        <strong>
          GetUp! is working towards a thriving democracy in Australia led by the
          values and hopes of everyday people.
        </strong>
      </p>
      <h2 className="heading-2">Fair</h2>
      <h2 className="heading-2">Flourishing</h2>
      <h2 className="heading-2">Just</h2>
    </section>
  </Container>
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
