import CategoryLinks from './Components/CategoryLinks'
import HeaderFigure from './Components/HeaderFigure'
import BestAudio from './Components/BestAudio'

export default function Home() {
  return (
    <>
    <main className="w-full">
      <HeaderFigure />
      <CategoryLinks />
      <BestAudio />
    </main>
    </>
  )
}
