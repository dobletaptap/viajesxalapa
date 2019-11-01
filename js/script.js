
// ? Intersection observer for hero video
const heroVideo = document.querySelector('#hero-video')
const observer = new IntersectionObserver((entries, observer) => {
    console.log('video observed!')
    if (entries[0].isIntersecting) {
        console.log('play')
        heroVideo.play()
    } else {
        console.log('pause')
        heroVideo.pause()
    }
}, {
    rootMargin: '300px 0px 0px 0px',
    threshold: .5,
})

observer.observe(heroVideo)

// ? Mobile menu functionaty
const burgerButton = document.querySelector('#burger-button')
const navbar = document.querySelector('#navbar')
const navbarItems = document.querySelectorAll('.c-navbar__item')
console.log(navbarItems)
burgerButton.addEventListener('click', () => {
    navbar.classList.toggle('c-navbar--active')
    navbarItems.forEach((navbarItem, index) => {
        if (navbarItem.style.animation) {
            navbarItem.style.animation = ''
        } else {
            navbarItem.style.animation = `fade .5s ease forwards ${index / 7 + .3}s`
        }
    })
})
console.log(burgerButton, navbar)