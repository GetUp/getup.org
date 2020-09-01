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
  InlineTextarea
} from 'react-tinacms-inline'

export default function Home ({ file }) {
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
          { name: 'btn', component: 'text', label: 'Button' }
        ]
      },
      {
        name: 'takeActionNow',
        component: 'group-list',
        label: 'Take Action Now',
        description: 'Limit to 4 please',
        itemProps: item => ({
          key: item.header,
          label: item.header
        }),
        defaultItem: () => ({
          imgSrc: '',
          tag: '',
          header: '',
          paragraph: ''
        }),
        fields: [
          { name: 'imgSrc', component: 'text', label: 'Image' },
          { name: 'tag', component: 'text', label: 'Tag' },
          { name: 'header', component: 'text', label: 'Header' },
          { name: 'paragraph', component: 'text', label: 'Paragraph' }
        ]
      }
    ]
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
    <Container className={s.root}>
      <div className={`grid ${s.header}`}>
        <h1 className='display-1'>
          <InlineTextarea name='hero.heading' />
        </h1>
        <p className={`body-1 ${s.homeBody}`}>
          <InlineTextarea name='hero.paragraph' />
        </p>
        <form className={s.emailWrapper}>
          <label htmlFor='email' className='a11y-hidden'>
            Email
          </label>
          <input
            id='email'
            type='email'
            className='body-2'
            placeholder={inputLabel}
          />
          <button type='submit' className='body-4'>
            <InlineTextField name='hero.btn' />
          </button>
        </form>
        <div className={s.modal} style={{ display: 'none' }}>
          <form>
            <h2 className='body-1'>Thanks for signing up!</h2>
            <br />
            <br />
            <br />
            <input type='text' className='body-3' placeholder='First name' />
            <input type='text' className='body-3' placeholder='Last name' />
            <input type='text' className='body-3' placeholder='Postcode' />
            <button type='submit' className='body-4'>
              Update
            </button>
          </form>
        </div>
      </div>
    </Container>
  )
}

const TakeActionNow = ({ campaigns }) => {
  return (
    <Container>
      <section className={s.takeActionWrapper}>
        <h2 className='heading-1'>Take action now</h2>
        <a href='#'>More campaigns</a>

        <ul className={`grid`}>
          {campaigns &&
            campaigns.map(value => (
              <li key={value.header}>
                <Card {...value} />
              </li>
            ))}
          <li className='body-3'>
            <a href='#'>More campaigns</a>
            {/* Add an arrow */}
          </li>
        </ul>
      </section>
    </Container>
  )
}

const Values = () => (
  <Container>
    <section className={`grid ${s.values}`}>
      <p className='display-4'>
        <strong>
          GetUp! is working towards a thriving democracy in Australia led by the
          values and hopes of everyday people.
        </strong>
      </p>
      <h2 className='heading-2'>Fair</h2>
      <h2 className='heading-2'>Flourishing</h2>
      <h2 className='heading-2'>Just</h2>
    </section>
  </Container>
)

export const getStaticProps = async function ({ preview, previewData }) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../content/home.json')).default
      }
    }
  }
}
