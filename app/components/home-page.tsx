import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

interface Template {
  name: string
  price: string
  category: string
  img: string
}

interface Props {
  templates: Template[]
}
export default function HomePage({ templates }: Props) {
  return (
    <div className='max-w-7xl mx-auto pb-48'>
      <div className='py-24 px-4'>
        <h1 className='text-3xl md:text-[5vw] md:leading-[1.1] font-semibold tracking-tight pb-6'>
          <Balancer>
            Premium website templates to get you up and running{' '}
            <span className='bg-[#FF98A2] px-1'>faster.</span>
          </Balancer>
        </h1>
        <p className='text-lg'>
          Explore the latest templates built with React and Next.js.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
        {templates.map((t, i) => (
          <Link
            href='#'
            key={i}
          >
            <div className='flex flex-col px-2'>
              <div className='w-full h-full overflow-hidden'>
                <Image
                  src={t.img}
                  alt={`${t.name} template on a laptop`}
                  width={1000}
                  height={1000}
                  priority
                  className='object-cover'
                />
              </div>
              <p className='bg-black text-white uppercase rounded-full text-xs px-3 py-2 w-fit mb-4'>
                {t.category}
              </p>
              <div className='flex justify-between'>
                <h3 className='text-2xl font-semibold tracking-tight pb-2'>
                  {t.name}
                </h3>
                <p className='tracking-tight'>{t.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
