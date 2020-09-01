import Container from '../components/Container'
import s from '../styles/Home.module.scss'
import Card from '../components/Card'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'

export default function Home ({ file }) {
  const data = file.data

  return (
    <>
      <main className={s.main}>
        <Hero data={data.hero} />
        <TakeActionNow campaigns={data.takeActionNow} />
        <Values />
      </main>
    </>
  )
}

const Hero = ({ data }) => {
  const { heading, paragraph, inputLabel, btn } = data

  return (
    <Container className={s.root}>
      <div className={`grid ${s.header}`}>
        <h1 className='display-1'>{heading}</h1>
        <p className={`body-1 ${s.homeBody}`}>{paragraph}</p>
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
            {btn}
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
