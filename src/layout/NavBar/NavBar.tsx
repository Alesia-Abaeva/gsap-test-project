import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { navLinks } from '@/const'

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        /**
         * control then the animation starts and ends
         * `nav` -  base elements position
         * ` start: 'bottom top',` - viewport position - then the bottom of th navbar reaches to the of the viewport thats then we actually starts applying a specific class
         */
        trigger: 'nav',
        start: 'bottom top',
      },
    })

    navTween.fromTo(
      'nav',
      {
        backgroundColor: 'transparent',
      },
      {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    )
  }, [])

  return (
    <nav>
      <div className="flex items-center gap-2">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvep Pour</p>
        </a>

        <ul>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={id}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
