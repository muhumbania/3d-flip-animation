let degree = 0;

$('.next-btn').on('click', function(){
    degree += 90;
    document.querySelector('.box').style.transform = `rotateY(${degree}deg)`;
});

$('.prev-btn').on('click', function(){
    degree -= 90;
    document.querySelector('.box').style.transform = `rotateY(${degree}deg)`;
});


function animation(counter, imgId){
    gsap.to('.box', { rotationX: counter});
    let current = document.getElementById(`${imgId}`);
    gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'});
}