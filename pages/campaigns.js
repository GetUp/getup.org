import Hero from '../components/Hero'
import Subnav from '../components/Subnav'
import s from '../styles/Campaigns.module.scss'

const Campaigns = () => {
  const data = {
    heading: 'All campaigns',
    blurb:
      'GetUp members set our movement’s agenda on issues they care about, in the fields of Environmental Justice, Human Rights, Economic Fairness and Democratic Integrity.'
  }
  return (
    <>
      <Hero heading={data.heading} blurb={data.blurb} />
      <div className={s.swiperContainer}>
        <ul className={s.swiper}>
          <li className={`${s.active} display-3`}>
            <a href='#'>All campaigns</a>
          </li>
          <li className='display-3'>
            <a href='#'>Economic Fairness</a>
          </li>
          <li className='display-3'>
            <a href='#'>Environmental Justice</a>
          </li>
        </ul>
      </div>
      {/* <Subnav /> */}
      <div style={{ height: '4000px' }} />
    </>
  )
}

export default Campaigns
