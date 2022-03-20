

const allBeads = document.querySelectorAll('.bead');
const allParts = document.querySelectorAll('.parts');

const controller = new ScrollMagic.Controller()

allParts.forEach(parts => {

    for(i = 0; i < allBeads.length; i++){

        if(allBeads[i].getAttribute('data-anim') === parts.getAttribute('data-anim')){

            let tween = gsap.from(parts, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allBeads[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})