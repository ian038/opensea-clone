import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.NEXT_PUBLIC_SANITY_API_KEY,
  useCdn: false
})