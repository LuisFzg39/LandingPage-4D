import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const DEBUG_SCROLLTRIGGER = false

gsap.registerPlugin(ScrollTrigger)

type TextTargets = (HTMLElement | null)[]

export function initFirstSectionAnimations(
  sectionEl: HTMLElement,
  headingEl: HTMLElement,
  textTargets: TextTargets,
  ctaEl: HTMLElement,
  artEl: HTMLElement,
) {
  const filteredText = textTargets.filter(Boolean) as HTMLElement[]

  const revealTl = gsap.timeline({
    paused: true,
  })

  revealTl
    .from(sectionEl, {
      opacity: 0,
      y: 40,
      duration: 1.8,
      ease: 'power2.out',
      immediateRender: false,
    })
    .from(
      headingEl,
      {
        x: -80,
        opacity: 0,
        duration: 1.6,
        ease: 'power3.out',
        immediateRender: false,
      },
      '<+0.2',
    )
    .from(
      filteredText,
      {
        opacity: 0,
        y: 20,
        duration: 1.4,
        stagger: 0.15,
        ease: 'power2.out',
        immediateRender: false,
      },
      '<+0.1',
    )
    .from(
      ctaEl,
      {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.7)',
        immediateRender: false,
      },
      '>-0.1',
    )
    .from(
      artEl,
      {
        x: 120,
        opacity: 0,
        duration: 1.4,
        ease: 'power2.out',
        immediateRender: false,
      },
      '<+0.15',
    )

  const trigger = ScrollTrigger.create({
    trigger: sectionEl,
    start: 'top 80%',
    once: true,
    markers: DEBUG_SCROLLTRIGGER,
    onEnter: () => revealTl.play(),
  })

  return () => {
    trigger.kill()
    revealTl.kill()
  }
}

