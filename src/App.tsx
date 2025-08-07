import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

import NavBar from './layout'
import HeroSection from './widget/HeroSection'

/** ready to use in globally*/
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
