import sanityClient from '@sanity/client'
export  default sanityClient({
  projectId: 'o21v7dzg',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})