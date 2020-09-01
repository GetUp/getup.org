import s from './index.module.scss'

export default ({ className, children }) => (
  <div className={`${s.container} ${className}`}>
    <div className={s.containerInner}>{children}</div>
  </div>
)
