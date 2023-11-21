import { SanityDocument, groq } from 'next-sanity'
import { client } from '@/lib/client'

import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
const productSlug = groq`
  *[_type == "product"]{
    slug
  }
`

export async function generateStaticParams() {
  const slugs = (await client.fetch(productSlug)) as { slug: string }[]
  return slugs.map((article) => ({
    params: {
      slug: article.slug,
    },
  }))
}

export default async function ProductSlug({ params: { slug } }: any) {
  const query = groq`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      "category": category->title,
      "mainImage": mainImage.asset->url,
      body,
      "slug": slug.current,
    }
  `

  const product: SanityDocument = await client.fetch(query, { slug })
  // console.log(product, 'product')

  return (
    <div>
      <div className='pt-12 lg:pt-[6rem]'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center w-full font-semibold pb-12 md:pb-16'>
            <div className='flex gap-2 pb-4 lg:pb-16 text-sm uppercase'>
              <Link href={`/`}>Templates</Link>/<div>{product.category}</div>
            </div>
            <h1 className='text-3xl md:text-[4vw] 2xl:text-[5rem] pb-4 lg:pb-16 font-semibold tracking-tight leading-[1]'>
              {product.title}
            </h1>

            <Image
              src={product.mainImage}
              width={700}
              height={700}
              alt='change me'
              className='rounded-xl aspect-[4/3] object-cover'
              priority
            />
          </div>
          <div className='flex flex-col px-2 gap-y-4 max-w-xl'>
            {product?.body ? <PortableText value={product.body} /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export const revalidate = 30
