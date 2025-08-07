import React from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

const HeroSection = () => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  const isMobile = useMediaQuery({ maxWidth: 767 })

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, word' })

    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      .to('.right-leaf', { y: 200 }, 0)
      .to('.left-leaf', { y: -200 }, 0)

    /**
     * 'top 50%' - first property - the element we are animated - so the top of the video reaches 50% down to screen the animations starts
     * '120& top' - means that when the top of the video goes 120% past the top os the screen , meaning far off the screen, we end the animation
     */
    const startValue = isMobile ? 'top 50%' : 'center 60%'
    const endValue = isMobile ? '120& top' : 'bottom top'

    const timLineVideo = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true, // stack of the screen
      },
    })

    videoRef.current.onloadedmetadata = () => {
      timLineVideo.to(videoRef.current, {
        currentTime: videoRef.current?.duration,
      })
    }
  }, [])

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">Sip the Spirit of Summer</p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and
                timeless recipes — designed to delight your senses.{' '}
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video src="/videos/output.mp4" muted playsInline preload="auto" ref={videoRef} />
      </div>
    </>
  )
}

export default HeroSection
