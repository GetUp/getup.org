import s from './index.module.scss'

interface HeroProps {
  heading: string
  blurb: string
}

const Hero = ({ heading, blurb }: HeroProps) => (
  <section className={`grid ${s.hero}`}>
    <h1 className="display-3">{heading}</h1>
    <p className="body-2">{blurb}</p>
  </section>
)

export default Hero
