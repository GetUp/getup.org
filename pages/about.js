import Hero from '../components/Hero'
import Subnav from '../components/Subnav'

const Campaigns = () => {
  const data = {
    heading: 'About us',
    blurb:
      'GetUp is an independent movement of more than a million people working to build a progressive Australia and bring participation back into our democracy.      '
  }

  const subNav = [
    {
      label: 'Who we are',
      id: 'who-we-are'
    },
    {
      label: 'What do we work on',
      id: 'what-do-we-work-on'
    },
    {
      label: 'How do we do it',
      id: 'how-do-we-do-it'
    }
  ]
  return (
    <>
      <Hero heading={data.heading} blurb={data.blurb} />
      <Subnav data={subNav} />
      <div style={{ height: '4000px' }} />
    </>
  )
}

export default Campaigns
