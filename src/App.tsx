import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

import NavBar, { Footer } from './layout'
import AboutSection from './widget/AboutSection'
import ArtSection from './widget/ArtSection'
import CocktailSection from './widget/CocktailSection'
import HeroSection from './widget/HeroSection'
import MenuSection from './widget/MenuSection'

/** ready to use in globally*/
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <CocktailSection />
      <AboutSection />
      <ArtSection />
      <MenuSection />
      <Footer />
    </main>
  )
}

export default App
