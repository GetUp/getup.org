import Link from 'next/link'
import s from './index.module.scss'

const Nav = () => (
  <nav className={s.container}>
    <div className={s.left}>
      <div className={s.logo}>
        <Link href='/'>
          <a>
            <img src={require('../../public/images/getup_logo.png')} />
          </a>
        </Link>
      </div>
      <ul className={s.menu}>
        <li>
          <Link href='/campaigns'>
            <a>Campaigns</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Volunteer</a>
          </Link>
        </li>
        <li>
          <Link href='/media'>
            <a>Media</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
    <ul className={s.action}>
      <li>
        <Link href='#'>
          <a>Get involved!</a>
        </Link>
      </li>
      <li>
        <Link href='#'>
          <a className={s.btn}>Donate</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
