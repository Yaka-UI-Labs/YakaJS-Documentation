import remarkGfm from 'remark-gfm'

const mdxConfig = {
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
}

export default mdxConfig
