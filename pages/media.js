import Hero from '../components/Hero'
import Subnav from '../components/Subnav'

const Campaigns = () => {
  const data = {
    heading: 'Media and News',
    blurb:
      'GetUp works with the media to build a greater awareness of the issues we care about and hold decision makers accountable in the public arena.'
  }
  return (
    <>
      <Hero heading={data.heading} blurb={data.blurb} />
      {/* <Subnav /> */}
      <div style={{ height: '4000px' }} />
    </>
  )
}

export default Campaigns
