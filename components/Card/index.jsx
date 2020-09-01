import s from './index.module.scss'

export default ({ imgSrc, tag, header, paragraph }) => {
  const multipleSizes = require('../../public/images/temp.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000')
  return (
    <div className={s.container}>
      <a href='#'>
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
