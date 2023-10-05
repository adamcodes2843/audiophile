import CategoryLinks from './Components/CategoryLinks'
import HeaderFigure from './Components/HeaderFigure'
import BestAudio from './Components/BestAudio'
import HomeProductCards from './Components/HomeProductCards'

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] lg:mx-auto bg-audiocolor-w1">
      <HeaderFigure />
      <CategoryLinks /> 
      <HomeProductCards />
      <BestAudio />
    </main>
  )
}
