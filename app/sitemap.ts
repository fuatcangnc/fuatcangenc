import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    
    let articles=await getPosts()
    const posts=articles.map(({slug,publishedAt})=>(
        {
            url: `${process.env.SITE_URL}/${slug.current}`,
                lastModified: publishedAt,
                changeFrequency:'daily'
        }
        
    ))

    const routes=['','/blog'].map((route)=>(
        {
            url: `${process.env.SITE_URL}${route}`,
            lastModified: new Date().toISOString(),
            changeFrequency:'daily'
        }
    ))
    return [...routes,...posts]
  }