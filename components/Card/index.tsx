import s from './index.module.scss'

interface CardProps {
  imgSrc: String
  tag: String
  header: String
  paragraph: String
}

const Card = ({ imgSrc, tag, header, paragraph }: CardProps) => {
  const multipleSizes = require('../../public/images/temp.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000')
  return (
    <div className={s.container}>
      <a href="#">
        <img
          srcSet={multipleSizes.srcSet}
          src={multipleSizes.src}
          className={s.image}
        />

        <div className={s.tag}>
          <span>{tag}</span>
        </div>
        <h3 className={`body-1`}>{header}</h3>
        <p className={`body-3`}>{paragraph}</p>
      </a>
    </div>
  )
}

export default Card
