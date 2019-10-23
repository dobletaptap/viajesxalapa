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