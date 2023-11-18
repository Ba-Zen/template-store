import HomePage from './components/home-page'
const templates = [
  {
    name: 'Onyx',
    price: '$99.00',
    category: 'Portfolio',
    img: '/images/onyx-macbook.png',
  },
  {
    name: 'Dynamic',
    price: '$99.00',
    category: 'Portfolio',
    img: '/images/dynamic-macbook.png',
  },
  {
    name: 'Artisan',
    price: '$99.00',
    category: 'Agency',
    img: '/images/artisan-macbook.png',
  },
  {
    name: 'Ghost',
    price: '$99.00',
    category: 'Portfolio',
    img: '/images/ghost-macbook.png',
  },
  {
    name: 'Justify',
    price: '$99.00',
    category: 'Portfolio',
    img: '/images/onyx-macbook.png',
  },
]
export default function Home() {
  return <HomePage templates={templates} />
}
