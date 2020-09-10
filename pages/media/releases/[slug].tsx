import { Heading } from '@chakra-ui/core'

const ReleasesPost = (props) => {
  return (
    <>
      <Heading as="h1">{props.blog.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: props.blog.content }} />
    </>
  )
}

export async function getStaticProps(context) {
  const fs = require('fs')
  const html = require('remark-html')
  const unified = require('unified')
  const markdown = require('remark-parse')
  const matter = require('gray-matter')

  const slug = context.params.slug // get slug from params
  const path = `${process.cwd()}/media/releases/${slug}.md`

  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: 'utf-8',
  })

  const { data, content } = matter(rawContent) // pass rawContent to gray-matter to get data and content

  const result = await unified().use(markdown).use(html).process(content) // pass content to process

  return {
    props: {
      blog: {
        ...data,
        published_date: data.published_date.toString(),
        content: result.toString(),
      },
    },
  }
}

export async function getStaticPaths(context) {
  const fs = require('fs')

  const path = `${process.cwd()}/media/releases`
  const files = fs.readdirSync(path, 'utf-8')

  const markdownFileNames = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => fn.replace('.md', ''))

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      }
    }),
    fallback: false,
  }
}

export default ReleasesPost
