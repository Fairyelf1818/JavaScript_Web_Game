var toptext = document.getElementById('startxt');
const char = document.getElementById('char');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

rock.style.animation='none';

function jump() {
    char.classList.add('jump-animation');
    setTimeout(() => {
        char.classList.remove('jump-animation');
    }, 500)
}
function gamestart(){ // Everthing when game starts
    toptext.innerText="Do your best!";
    rock.style.animation='rock 1.33s infinite';

    document.addEventListener('keypress', () => {
        if (!char.classList.contains('jump-animation')) {
            jump();
        }
    });

    setInterval(() => {
        score.innerText++;
        const charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
        const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    
        if(rockLeft<0){
            rock.style.display = 'none';
        }
        else{
            rock.style.display = '';
        }
    
        if(rockLeft <50 && rockLeft>0 && charTop> 130){
            alert("You got a score of: "+ score.innerText +" \n\nPlay again?");
            document.location.reload();
        }
    }, 50);
}


document.addEventListener('click',()=>{
    gamestart();
})

