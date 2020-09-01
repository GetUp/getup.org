import Container from '../components/Container'
import s from '../styles/Home.module.scss'
import Card from '../components/Card'

export default function Home () {
  return (
    <>
      <main className={s.main}>
        <Hero />
        <TakeActionNow />
        <Values />
      </main>
    </>
  )
}

const Hero = () => {
  const d = {
    heading: 'People. Power. Impact.',
    paragraph:
      'Join over a million GetUp members fighting for a fair, flourishing and just Australia.',
    inputLabel: 'Add your email to join!',
    btn: 'Get involved!'
  }

  return (
    <Container className={s.root}>
      <div className={`grid ${s.header}`}>
        <h1 className='display-1'>{d.heading}</h1>
        <p className={`body-1 ${s.homeBody}`}>{d.paragraph}</p>
        <form className={s.emailWrapper}>
          <label for='email' className='a11y-hidden'>
            Email
          </label>
          <input
            id='email'
            type='email'
            className='body-2'
            placeholder={d.inputLabel}
          />
          <button type='submit' className='body-4'>
            {d.btn}
          </button>
        </form>
        <div className={s.modal} style={{ display: 'none' }}>
          <form>
            <h2 class='body-1'>Thanks for signing up!</h2>
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

const TakeActionNow = () => {
  const values = [
    {
      imgSrc: 'https://picsum.photos/200',
      tag: 'Fair Media',
      header: 'Press Freedom is Under Attack',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, molestias laudantium. Deserunt nesciunt qui, quas dolorum iste.'
    },
    {
      imgSrc: 'https://picsum.photos/200',
      tag: 'Fair Media',
      header: 'Press Freedom is Under Attack',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, molestias laudantium. Deserunt nesciunt qui, quas dolorum iste asperiores dignissimos explicabo ullam consequatur veniam exercitationem vitae eius. Quasi odit molestiae quia.'
    },
    {
      imgSrc: 'https://picsum.photos/200',
      tag: 'Fair Media',
      header: 'Press Freedom is Under Attack',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, molestias laudantium. Deserunt nesciunt qui, quas dolorum iste asperiores dignissimos explicabo ullam consequatur veniam exercitationem vitae eius. Quasi odit molestiae quia.'
    },
    {
      imgSrc: 'https://picsum.photos/200',
      tag: 'Fair Media',
      header: 'Press Freedom is Under Attack',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, molestias laudantium. Deserunt nesciunt qui, quas dolorum iste asperiores dignissimos explicabo ullam consequatur veniam exercitationem vitae eius. Quasi odit molestiae quia.'
    }
  ]

  return (
    <Container>
      <section className={s.takeActionWrapper}>
        <h2 className='heading-1'>Take action now</h2>
        <a href='#'>More campaigns</a>

        <ul className={`grid`}>
          {values.map(value => (
            <li>
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
    <section class={`grid ${s.values}`}>
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
