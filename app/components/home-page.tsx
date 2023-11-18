import Balancer from 'react-wrap-balancer'
export default function HomePage() {
  return (
    <div className='pt-24 px-4'>
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
  )
}
