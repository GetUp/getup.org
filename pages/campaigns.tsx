import Hero from '../components/Hero'
import Subnav from '../components/Subnav'
import s from '../styles/Campaigns.module.scss'
import { Card, CardGroup } from '../components/Card'
import DefaultGrid from '../components/DefaultGrid'

const Campaigns = () => {
  const data = {
    heading: 'All campaigns',
    blurb:
      'GetUp members set our movement’s agenda on issues they care about, in the fields of Environmental Justice, Human Rights, Economic Fairness and Democratic Integrity.',
  }

  const campaigns = [
    {
      imgSrc: 'https://picsum.photos/200',
      tag: 'Fair Media',
      header: 'Press Freedom is Under Attac',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, molestias laudantium. Deserunt nesciunt qui, quas dolorum iste.',
      href: '#',
    },
    {
      imgSrc: 'https://picsum.photos/200',
      tag: 'Fair Media',
      header: 'Press Freedom is Under Attack',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, molestias laudantium. Deserunt nesciunt qui, quas dolorum iste asperiores dignissimos explicabo ullam consequatur veniam exercitationem vitae eius. Quasi odit molestiae quia.',
      href: '#',
    },
    {
      imgSrc: 'https://picsum.photos/200',
      tag: 'Fair Media',
      header: 'Press is Under Attack',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, molestias laudantium. Deserunt nesciunt qui, quas dolorum iste asperiores dignissimos explicabo ullam consequatur veniam exercitationem vitae eius. Quasi odit molestiae quia.',
      href: '#',
    },
    {
      imgSrc: 'https://picsum.photos/200',
      tag: 'Fair Media',
      header: 'Press Freedom Under Attack',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, molestias laudantium. Deserunt nesciunt qui, quas dolorum iste asperiores dignissimos explicabo ullam consequatur veniam exercitationem vitae eius. Quasi odit molestiae quia.',
      href: '#',
    },
  ]
  return (
    <>
      <Hero heading={data.heading} blurb={data.blurb} />
      <DefaultGrid>
        <CardGroup>
          {campaigns &&
            campaigns.map((value) => <Card {...value} key={value.header} />)}
        </CardGroup>
        <CardGroup>
          {campaigns &&
            campaigns.map((value) => <Card {...value} key={value.header} />)}
        </CardGroup>
      </DefaultGrid>
      <div style={{ height: '4000px' }} />
    </>
  )
}

export default Campaigns
