import Hero from '../components/Hero'
import Subnav from '../components/Subnav'
import { Heading, Text, Stack } from '@chakra-ui/core'
import DefaultGrid from '../components/DefaultGrid'
import Link from 'next/link'

interface MediaProps {
  releases: {
    id: string
    slug: string
    title: string
    excerpt: string
    published_date: string
  }[]
  mentions: {
    id: string
    slug: string
    title: string
    excerpt: string
    source_url: string
    image_path: string
    added_date: string
  }[]
}

const Media = ({ releases, mentions }: MediaProps) => {
  const d = {
    heading: 'Media and News',
    blurb:
      'GetUp works with the media to build a greater awareness of the issues we care about and hold decision makers accountable in the public arena.',
  }
  return (
    <>
      <Hero heading={d.heading} blurb={d.blurb} />

      <DefaultGrid py={8}>
        <Heading as="h2" gridColumn="3/span 8">
          Media Releases
        </Heading>
        {releases.map((d) => (
          <Stack
            mb={4}
            key={d.id}
            gridColumn="3/span 8"
            background="gray.100"
            p={4}
          >
            <Link href={`/media/releases/${d.slug}`}>
              <a>
                <Text fontSize="body-3">
                  {new Date(d.published_date).toDateString()}
                </Text>
                <Heading as="h2" fontSize="body-2">
                  {d.title}
                </Heading>

                <Text fontSize="body-3">{d.excerpt}</Text>
              </a>
            </Link>
          </Stack>
        ))}
        <Heading as="h2" gridColumn="3/span 8">
          Media Mentions
        </Heading>
        {mentions.map((d) => (
          <Stack
            mb={4}
            key={d.id}
            gridColumn="3/span 8"
            background="gray.100"
            p={4}
          >
            <a href={d.source_url} target="_blank">
              <Text fontSize="body-3">
                {new Date(d.added_date).toDateString()}
              </Text>
              <Heading as="h2" fontSize="body-2">
                {d.title}
              </Heading>

              <Text fontSize="body-3">{d.excerpt}</Text>
            </a>
          </Stack>
        ))}
      </DefaultGrid>
    </>
  )
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const fs = require('fs')
  const matter = require('gray-matter')
  const { v4: uuid } = require('uuid')

  const releasesFiles = fs.readdirSync(
    `${process.cwd()}/media/releases`,
    'utf-8'
  )

  const releases = releasesFiles
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => {
      const path = `${process.cwd()}/media/releases/${fn}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      const { data } = matter(rawContent)

      return {
        ...data,
        id: uuid(),
        slug: fn.replace('.md', ''),
        published_date: data.published_date.toString(),
      }
    })

  const mentionsFiles = fs.readdirSync(
    `${process.cwd()}/media/mentions`,
    'utf-8'
  )

  const mentions = mentionsFiles
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => {
      const path = `${process.cwd()}/media/mentions/${fn}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      const { data } = matter(rawContent)

      return {
        ...data,
        id: uuid(),
        slug: fn.replace('.md', ''),
        added_date: data.added_date.toString(),
      }
    })

  return {
    props: { releases, mentions },
  }
}

export default Media
