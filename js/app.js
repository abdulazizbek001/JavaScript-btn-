const elBox = document.querySelector('.box');
const elInputX = document.querySelector('.input-x');
const elInputY = document.querySelector('.input-y');
const elInputZ = document.querySelector('.input-z');
const elInputD = document.querySelector('.input-d');
const elRezult = document.querySelector('.rezult');
const elRezult1 = document.querySelector('.rezult1');
const elRezult2 = document.querySelector('.rezult2');
const elRezult3 = document.querySelector('.rezult3');
const elSpanBefore = document.querySelector('.span-before');

elRezult.textContent = '500px';
elRezult1.textContent = '500px';
elRezult2.textContent = '500px';
elRezult3.textContent = '500px';

elInputX.addEventListener('input', () => {
    elRezult2.textContent = elInputX.value + 'px';
    elRezult2.style.display = 'inline-block';
    elBox.style.borderBottomRightRadius = elInputX.value + 'px';
    elSpanBefore.style.borderBottomRightRadius = elInputX.value + 'px';
})


elInputY.addEventListener('input', () => {
    elRezult1.textContent = elInputY.value + 'px';
    elRezult1.style.display = 'inline-block';
    elBox.style.borderTopRightRadius = elInputY.value + 'px';
    elSpanBefore.style.borderTopRightRadius = elInputY.value + 'px';
})


elInputZ.addEventListener('input', () => {
    elRezult.textContent = elInputZ.value + 'px';
    elBox.style.borderTopLeftRadius = elInputZ.value + 'px';
    elSpanBefore.style.borderTopLeftRadius = elInputZ.value + 'px';
})


elInputD.addEventListener('input', () => {
    elRezult3.textContent = elInputD.value + 'px';
    elRezult3.style.display = 'inline-block';
    elBox.style.borderBottomLeftRadius = elInputD.value + 'px';
    elSpanBefore.style.borderBottomLeftRadius = elInputD.value + 'px';
})

function Before() {
    elSpanBefore.style.cssText = `
                transition: all 1s ease;
            `
    elSpanBefore.style.borderBottomRightRadius = elInputX.value + 'px';
    elSpanBefore.style.borderTopRightRadius = elInputY.value + 'px';
    elSpanBefore.style.borderTopLeftRadius = elInputZ.value + 'px';
    elSpanBefore.style.borderBottomLeftRadius = elInputD.value + 'px';
}

Before();