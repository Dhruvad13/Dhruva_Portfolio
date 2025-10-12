import { compileMDX } from 'next-mdx-remote/rsc'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'content/posts')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  featured: boolean
  readTime: number
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = join(postsDirectory, fileName)
        const fileContents = readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          tags: data.tags || [],
          featured: data.featured || false,
          readTime: data.readTime || 5,
        }
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.warn('No blog posts found')
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const fullPath = join(postsDirectory, `${slug}.mdx`)
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: true,
      },
    })

    return {
      slug,
      frontmatter: data,
      content: mdxContent,
    }
  } catch (error) {
    return null
  }
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
