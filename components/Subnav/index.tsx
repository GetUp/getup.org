import s from './index.module.scss'

const Subnav = () => (
  <ul className={s.subNav}>
    <li className={s.active}>
      <a className="body-3" href="#">
        Media releases
      </a>
    </li>
    <li>
      <a className="body-3" href="#">
        Spokepeople
      </a>
    </li>
    <li>
      <a className="body-3" href="#">
        Recent coverage
      </a>
    </li>
  </ul>
)

export default Subnav
