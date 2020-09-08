import s from './index.module.scss'

interface SubnavProps {
  data: {
    label: string
    id: string
    external?: boolean
  }[]
}

const Subnav = ({ data }: SubnavProps) => (
  <ul className={s.subNav}>
    {data &&
      data.map((d) => (
        <li className={s.active}>
          <a className="body-3" href={'#' + d.id}>
            {d.label}
          </a>
        </li>
      ))}
  </ul>
)

export default Subnav
