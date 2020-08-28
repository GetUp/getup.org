import Head from 'next/head'
import s from '../styles/Home.module.scss'
// import img from '../public/images/screen.png'
// import img from './images/scc.jpg'

export default function Home () {
  return (
    <>
      <TopBar />

      <div className={s.root}>
        <main className={s.main}>
          <div className={s.container}>
            <div className={s.grid}>
              <h1 className={`${s.displayOne} ${s.homeHeading}`}>
                People. Power. Impact.
              </h1>
              <p className={`${s.bodyOne} ${s.bodyParagraph}`}>
                Join over a million GetUp members fighting for a fair,
                flourishing and just Australia.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

const TopBar = () => (
  <nav className={s.nav}>
    <ul>
      <li>Campaigns</li>
      <li>Volunteer</li>
      <li>Media</li>
      <li>About</li>
    </ul>
  </nav>
)
