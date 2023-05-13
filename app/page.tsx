import CategoryLinks from './Components/CategoryLinks'
import HeaderFigure from './Components/HeaderFigure'
import BestAudio from './Components/BestAudio'
import HomeProductCards from './Components/HomeProductCards'

export default function Home() {
  return (
    <>
    <main className="w-full">
      <HeaderFigure />
      <CategoryLinks />
      <HomeProductCards />
      <BestAudio />
    </main>
    </>
  )
}
