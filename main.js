const toggleBtn = document.querySelector('.togl-btn');
const toggleBtnIcon = document.querySelector('.togl-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function() {
    
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    
    

    if (isOpen) {
        toggleBtnIcon.classList.remove('fa-bars');
        toggleBtnIcon.classList.add('fa-xmark');
        

    } else {
        toggleBtnIcon.classList.remove('fa-xmark');
        toggleBtnIcon.classList.add('fa-bars');
    }



};


var sound = new Audio("sound/crash.mp3")
// sound.play()

$(".contct").click(function(){
    sound.play()
})


// *******To scroll up***********************************************************

