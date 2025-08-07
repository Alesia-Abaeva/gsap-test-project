import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

import NavBar from './layout'

/** ready to use in globally*/
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <NavBar />
    </main>
  )
}

export default App
