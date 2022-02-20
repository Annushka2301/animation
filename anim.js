var tline = gsap.timeline();
tline.from(".hero__title", {duration: 1, opacity: 0, y:50})
  .from(".hero__btn", {duration: .8, opacity: 0, y:50}, ">-1")
  .from(".hero__descr", {duration: .3, opacity: 0})
  .from(".photos-wrap img", {stagger:.3, duration: .3, scale: 0})

var tl = gsap.timeline({
  paused:true,
  reversed: true
});
//sequenced one-after-the-other
tl.from(".menu .menu__top", {duration: .5, opacity: 0, y:-10, ease: "{Power1}"})
.from(".menu__container", {duration: .8, y: 10, opacity: 0, ease: "{Power1}"}, ">-0.2")
.from(".nav__list", {duration: .5, y: 10, opacity: 0, ease: "{Power1}"}, ">-0.5")
.from(".anim", {duration: .5, y: 20, opacity: 0, ease: "{Power1}"}, ">-0.1")

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    tl.play()
    document.querySelector('#menu').classList.toggle('menu--open')

  })

  document.querySelector('#close').addEventListener('click', function() {
    setTimeout(() => {document.querySelector('#menu').classList.toggle('menu--open')}, 2000 )
    tl.reverse()

  })
  })






