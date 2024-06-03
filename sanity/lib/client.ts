import 'server-only'
import { createClient, QueryParams } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn:true,
  perspective: 'published',
})


export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: 30, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  })
}