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
     ...,
      _id,
      title,
      "category": category->title,
      "mainImage": mainImage.asset->url,
      price,
      buyUrl,
      linkUrl,
      body,
      "slug": slug.current,
    }
  `

  const product: SanityDocument = await client.fetch(query, { slug })
  // console.log(product, 'product')

  return (
    <div>
      <div className='py-12 lg:py-[6rem]'>
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
              className='rounded-xl aspect-[4/3] h-auto w-auto object-cover'
              priority
            />
            <div className='py-4'>${product.price}</div>
          </div>

          <form className=''>
            <div className='mt-4 flex flex-row space-x-4'>
              {product.linkUrl ? (
                <Link
                  href={product.linkUrl}
                  target='_blank'
                  rel='noopener'
                  className='relative text-center  w-full border border-black inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-500 ease-out rounded-full group hover:ring-2 hover:ring-offset-2 hover:ring-slate-40'
                >
                  <span className='absolute inset-0 flex items-center justify-center w-full h-full text-black duration-500 -translate-x-full  group-hover:-translate-x-40 ease'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      ></path>
                    </svg>
                  </span>
                  <span className='absolute flex items-center justify-center w-full h-full text-black transition-all duration-500 transform  ease'>
                    See Demo
                  </span>
                  <span className='relative invisible'>See Demo</span>
                </Link>
              ) : (
                <div className='relative text-center w-1/2 border border-black inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-500 ease-out rounded-full group hover:ring-2 hover:ring-offset-2 hover:ring-slate-40'>
                  Coming Soon
                </div>
              )}
              {product.buyUrl ? (
                <Link
                  href={product.buyUrl}
                  className='relative text-center whitespace-nowrap w-full flex items-center overflow-hidden rounded-full px-5 py-2.5 group bg-black hover:bg-gradient-to-r hover:from-black via-white hover:to-slate-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300'
                >
                  <span className='absolute right-0 w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-gradient-to-br from-white to-gray-300 opacity-10 rotate-12 group-hover:-translate-x-[400px] ease'></span>
                  <span className='relative'>Get it today</span>
                </Link>
              ) : (
                <div className='relative text-center w-max overflow-hidden rounded-full px-5 py-2.5 group bg-black hover:bg-gradient-to-r hover:from-black via-white hover:to-slate-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300'>
                  Coming Soon
                </div>
              )}
            </div>
          </form>
          <div className='flex flex-col px-2 gap-y-4 max-w-xl'>
            {product?.body ? <PortableText value={product.body} /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export const revalidate = 30
