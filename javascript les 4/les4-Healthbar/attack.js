const healthbar = document.getElementById('healthbar');
const textElement = document.getElementById('text');

function attack() {
    oldHealth = healthbar.value;
    damage = Math.floor(Math.random() * Math.floor(6));

    if(oldHealth - damage <= 0) {
        healthbar.value = 0;
        textElement.innerHTML = 'You win!'
    } else {
        healthbar.value = oldHealth - damage
    }
}