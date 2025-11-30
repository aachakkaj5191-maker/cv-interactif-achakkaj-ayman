document.getElementById('year').textContent = new Date().getFullYear();

const textElement = document.getElementById('typing-text');
const texts = ["Développeur Web.", "Passionné de Design.", "Étudiant Motivé."];
let count = 0;
let index = 0;

(function type() {
    const currentText = texts[count];
    textElement.textContent = currentText.slice(0, index++);

    if(index > currentText.length){
        count = (count + 1) % texts.length;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
})();

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('bg-dark', 'shadow');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-dark', 'shadow');
        navbar.classList.add('bg-transparent');
    }
});
