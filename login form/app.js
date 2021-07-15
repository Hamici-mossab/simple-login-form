//defining vars
const upBtn = document.getElementById('up');
const inBtn = document.getElementById('in');
const upField = document.getElementById('signUp');
const inField = document.getElementById('signIn');
//
upBtn.addEventListener('click', function(){
    upField.style.display = "flex"
    inField.style.display = "none"
    upBtn.classList.add('shadow')
    inBtn.classList.remove('shadow')
});

inBtn.addEventListener('click',function(){
    upField.style.display = "none"
    inField.style.display = "flex"
    upBtn.classList.remove('shadow')
    inBtn.classList.add('shadow')
});
