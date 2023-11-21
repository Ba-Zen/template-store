import HomePage from '../components/home-page'

import { client } from '@/lib/client'
import { groq } from 'next-sanity'

const templateQuery = groq`*[_type == 'product' && productType == "template"]{
  _id,title, mainImage, "slug": slug.current,  "category": category->title,
  }`

export default async function Home() {
  const templates = await client.fetch(templateQuery)
  // console.log(templates)
  return <HomePage templates={templates} />
}
