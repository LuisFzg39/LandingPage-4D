import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ValorantTitle from '../../assets/Valorant-title.svg'
import { initHeroButtonHover, initHeroScrollTimeline } from '../../animations/heroAnimations'
import './Hero.css'

const Hero = () => {
  const titleRef = useRef<HTMLImageElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de fondo (fade in)
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: 'power1.out',
      })

      // Animación inicial del título con efecto de brillo
      const titleTl = gsap.timeline({ delay: 0.3 })
      titleTl
        .from(titleRef.current, {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotation: -5,
          duration: 1.2,
          ease: 'power3.out',
        })
        .to(titleRef.current, {
          filter: 'drop-shadow(0 0 20px rgba(255, 70, 85, 0.5))',
          duration: 0.5,
          ease: 'power2.out',
        })
        .to(titleRef.current, {
          filter: 'drop-shadow(0 0 10px rgba(255, 70, 85, 0.3))',
          duration: 0.5,
          ease: 'power2.out',
        })

      // Animación continua de pulsación sutil en el título
      gsap.to(titleRef.current, {
        scale: 1.02,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      })

      // Animación del botón con efecto de brillo
      const buttonTl = gsap.timeline({ delay: 0.8 })
      buttonTl
        .from(buttonRef.current, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 1,
          ease: 'back.out(1.7)',
        })
        .to(buttonRef.current, {
          boxShadow: '0 0 20px rgba(255, 70, 85, 0.4)',
          duration: 0.3,
        })
        .to(buttonRef.current, {
          boxShadow: '0 0 10px rgba(255, 70, 85, 0.2)',
          duration: 0.3,
        })

      // Animación continua de pulsación en el botón
      gsap.to(buttonRef.current, {
        y: -3,
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2,
      })

      // Efecto hover avanzado en el botón
      const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          y: -5,
          boxShadow: '0 5px 25px rgba(255, 70, 85, 0.6)',
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          y: 0,
          boxShadow: '0 0 10px rgba(255, 70, 85, 0.2)',
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      buttonRef.current?.addEventListener('mouseenter', handleMouseEnter)
      buttonRef.current?.addEventListener('mouseleave', handleMouseLeave)

      // Animación de entrada del contenedor interno
      gsap.from(innerRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="hero" aria-labelledby="hero-heading">
      <div ref={innerRef} className="hero__inner">
        <img
          ref={titleRef}
          src={ValorantTitle}
          alt="Valorant"
          id="hero-heading"
          className="hero__title"
          ref={titleRef}
        />
        <button ref={buttonRef} className="hero__cta" type="button">
          <span>Play now</span>
        </button>
      </div>
    </section>
  )
}

export default Hero
