import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25',
  // token:
  //   "skFYVQ1xgLuVoiim4quDXb090hdnlG8HO57ODKHZQgULxUpq4bPFNiVeUVMuXxLJVAhIHSN3KS8zAZIJUa7kBJLkMJeNEvl851Ab34TLWXGPRyUUqGP4KWvmzyOKGvbykEbOEG6IvxiO9r3xmpFdkVn1NebJHxjsVv5VqD3XKPlEC45LWhjw",
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
