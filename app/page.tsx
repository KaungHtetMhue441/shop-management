import Image from 'next/image'
import {Card} from '@componets'
export default function Home() {
  const product = {
    name:"Kaung Htet",
    description:"helo",
    image:"https://cdn.shopify.com/s/files/1/0031/3901/0649/products/RF1077_NAVY_QUARTER_800x.jpg?v=1628263669",
    price:100000,
    promotion:2000,
    promotionPercents:20,
  }

  return (
    <main className="p-24">
      <Card product={product} />
    </main>
  )
}
