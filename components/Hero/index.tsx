import s from './index.module.scss'

const Card = () => (
  <section className={`grid ${s.hero}`}>
    <h1 className="display-3">News and Media</h1>
    <p className="body-3">
      GetUp works with the media to build a greater awareness of the issues we
      care about and hold decision makers accountable in the public arena.
    </p>
  </section>
)

export default Card
