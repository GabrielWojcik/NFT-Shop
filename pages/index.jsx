import Buttons from '../src/components/Buttons/Buttons'
import Carousel from '../src/components/Carousel/Carousel'
import Title from '../src/components/Title/Title'

export default function Home({ data }) {
  // console.log('Data', data)
  return (
    <div>
      <Title />
      <Buttons />
      <Carousel data={data} />
    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`http://localhost:3000/api/apinft`)
  const res = await fetch(`https://nft-shop-three.vercel.app/api/apinft`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
