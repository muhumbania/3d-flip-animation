let degree = 0;
let counter = 1;

animation(counter);

$('.next-btn').on('click', function(){
    counter -= 1;
    if(counter < 1) counter = 4;
    degree += 90;
    document.querySelector('.box').style.transform = `rotateY(${degree}deg)`;
    animation(counter);
});

$('.prev-btn').on('click', function(){
    counter += 1;
    if(counter > 4) counter = 1;
    degree -= 90;
    document.querySelector('.box').style.transform = `rotateY(${degree}deg)`;
    animation(counter);
});

function animation(counter){
    document.querySelectorAll('.color').forEach(function(color){
        color.style.opacity = '0.2';
    });
    document.getElementById(`${counter}`).style.opacity = '1.0';
}
