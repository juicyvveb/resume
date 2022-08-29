import gsap from 'gsap';
export default() => {
    window.addEventListener('scroll', animation)
}

function animation(){
    let block = document.querySelector('.about-text--skills');
    if(block.getBoundingClientRect().bottom <= window.innerHeight){
        let spans = document.querySelectorAll('.skill-rate span');
        spans.forEach((el, i) => gsap.to(el, {
            width: el.getAttribute('width') + '%',
            duration: 1.7, 
            delay: i != 0 ? i / 10 * 2 : 0,
            ease: "back.out"

        }))
        window.removeEventListener('scroll', animation)
    }
}

