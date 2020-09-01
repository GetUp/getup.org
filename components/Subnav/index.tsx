import s from './index.module.scss'

const Subnav = () => (
  <ul className={s.subNav}>
    <li className={s.active}>
      <a href="#">Media releases</a>
    </li>
    <li>
      <a href="#">Spokepeople</a>
    </li>
    <li>
      <a href="#">Recent coverage</a>
    </li>
  </ul>
)

export default Subnav
