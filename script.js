let  left = document.querySelector('.left');
let  right = document.querySelector('.right');
let  tt = document.querySelector('.tt');

let  door = document.querySelector('.door');
door.style.display ="none";

left.addEventListener('click', function() {

    tt.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    door.style.display ="block";

});

//double click                