function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link = document.getElementById("link");
const link0 = document.getElementById("link0");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");
const link7 = document.getElementById("link7");
const link8 = document.getElementById("link8");
const link9 = document.getElementById("link9");
const link10 = document.getElementById("link10");
const link11 = document.getElementById("link11");
const link12 = document.getElementById("link12");
const link13 = document.getElementById("link13");
const link14 = document.getElementById("link14");
const link15 = document.getElementById("link15");
const link16 = document.getElementById("link16");
const link17 = document.getElementById("link17");


link.addEventListener('click', () => {
    scrollToElement('.conteudo');
});

link0.addEventListener('click', () => {
    scrollToElement('.conteudo', 1);
});

link1.addEventListener('click', () => {
    scrollToElement('.conteudo', 2);
});

link2.addEventListener('click', () => {
    scrollToElement('.conteudo',3);
});

link3.addEventListener('click', () => {
    scrollToElement('.conteudo',4);
});

link4.addEventListener('click', () => {
    scrollToElement('.conteudo',5);
});

link5.addEventListener('click', () => {
    scrollToElement('.conteudo',6);
});

link6.addEventListener('click', () => {
    scrollToElement('.conteudo',7);
});

link7.addEventListener('click', () => {
    scrollToElement('.conteudo',8);
});
link8.addEventListener('click', () => {
    scrollToElement('.conteudo',9);
});

link9.addEventListener('click', () => {
    scrollToElement('.conteudo',10);
});

link10.addEventListener('click', () => {
    scrollToElement('.conteudo',11);
});
link11.addEventListener('click', () => {
    scrollToElement('.conteudo',12);
});

link12.addEventListener('click', () => {
    scrollToElement('.conteudo',13);
});

link13.addEventListener('click', () => {
    scrollToElement('.conteudo',14);
});
link14.addEventListener('click', () => {
    scrollToElement('.conteudo',15);
});

link15.addEventListener('click', () => {
    scrollToElement('.conteudo',16);
});

link16.addEventListener('click', () => {
    scrollToElement('.conteudo',17);
});

link17.addEventListener('click', () => {
    scrollToElement('.conteudo',18);
});

//rolagem até o elemento