
$('.next-btn').on('click', function(){
    document.querySelector('.box').style.transform = 'rotateY(90deg)';
    // counter += 90;
    // imgId += 1;
    // if(imgId > 10){
    //     imgId = 1;
    // } 
    // animation(counter, imgId);
});

$('.prev-btn').on('click', function(){
    document.querySelector('.box').style.transform = 'rotateX(-90deg)';
    // document.getElementById('front').style.transform = 'rotateX(-90deg)';
    // document.getElementById('back').style.transform = 'rotateX(-270deg)';
    // document.getElementById('bottom').style.transform = 'rotateX(-180deg)';
    // document.getElementById('top').style.transform = 'rotateX(0deg)';
    // counter -= 90;
    // imgId -= 1;
    // if(imgId < 1){
    //     imgId = 10;
    // }
    // animation(counter, imgId);
});


function animation(counter, imgId){
    gsap.to('.box', { rotationX: counter});
    let current = document.getElementById(`${imgId}`);
    gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'});
}