document.addEventListener('DOMContentLoaded', function () {
  gsap.set('.images-list-item', { y: 500 })
  gsap.set('.images-list', { x: 500 })
  gsap.set('.gnb-nav-list-item', { y: 25, opacity: 0 })
  gsap.set('h2, .selected-campaigns-list, .selected-campaigns-list-item', {
    y: 200,
  })

  const tl = gsap.timeline({ delay: 1 })

  tl.to('.images-list-item', {
    y: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: 'power3.inOut',
  })
    .to(
      '.images-list',
      {
        x: 0,
        duration: 3,
        ease: 'power3.inOut',
      },
      '-=2.5'
    )
    .to(
      '.images-list-item:not(#loader-logo)',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1,
        stagger: 0.1,
        ease: 'power3.inOut',
      },
      '-=1'
    )
    .to(
      '.loader',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1,
        ease: 'power3.inOut',
      },
      '-=0.5'
    )
    .to(
      '.gnb-nav-list-item, h2, .selected-campaigns-list, .selected-campaigns-list-item',
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.inOut',
      },
      '-=0.5'
    )
})
