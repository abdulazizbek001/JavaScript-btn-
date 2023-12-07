const elBody = document.querySelector('body');
const elWrap = document.querySelector('#wrap');
const elBox = document.querySelector('#box');
const elBox1 = document.querySelector('#box-1');
const elBox2 = document.querySelector('#box-2');
const elBtn = document.querySelector('#btn');
const elBtn2 = document.querySelector('#btn-2');

// ============================= BODY START ============================= //

elBody.style.display = 'flex';
elBody.style.alignItems = 'center';
elBody.style.justifyContent = 'center';
elBody.style.height = '100vh';

// ============================= BODY END ============================= //

// ============================= WRAP START ============================= //

elWrap.style.width = '562px';
elWrap.style.display = 'flex';
elWrap.style.flexWrap = 'wrap';

// ============================= WRAP END ============================= //

// ============================= BOX START ============================= //

elBox.style.width = '566px';
elBox.style.height = '80px';
elBox.style.margin = '0 auto';
elBox.style.display = 'block';
elBox.style.display = 'flex';
elBox.style.alignItems = 'center';
elBox.style.justifyContent = 'center';
elBox.style.gap = '5px';
elBox.style.borderRadius = '10px';
elBox.style.backgroundColor = 'grey';
elBox.style.marginBottom = '30px';
elBox.style.transition = 'all 1s ease';

// ============================= BOX END ============================= //

// ============================= BOX-1 START ============================= //

elBox1.style.width = '270px';
elBox1.style.height = '70px';
elBox1.style.borderRadius = '10px';
elBox1.style.transition = 'all 1s ease';
elBox1.style.backgroundColor = 'red';

// ============================= BOX-1 END ============================= //

// ============================= BOX-2 START ============================= //

elBox2.style.width = '270px';
elBox2.style.height = '70px';
elBox2.style.borderRadius = '10px';
elBox2.style.transition = 'all 1s ease';
elBox2.style.backgroundColor = 'blue';

// ============================= BOX-2 END ============================= //

// ============================= BTN START ============================= //

elBtn.addEventListener('click', function () {
    elBox1.style.transform = 'rotateY(170deg)';
    elBox2.style.transform = 'rotateY(170deg)';
    elBox1.style.backgroundColor = 'blue';
    elBox2.style.backgroundColor = 'red';
})

elBtn.style.color = 'white';
elBtn.style.padding = '15px 100px';
elBtn.style.display = 'block';
elBtn.style.border = '1px solid black';
elBtn.style.borderRadius = '10px';
elBtn.style.margin = '0 auto';
elBtn.style.cursor = 'pointer';
elBtn.style.background = 'linear-gradient(250deg, red,blue)';

// ============================= BTN END ============================= //

// ============================= BTN-2 START ============================= //

elBtn2.addEventListener('click', function () {
    elBox1.style.transform = 'rotateY(170deg)';
    elBox2.style.transform = 'rotateY(170deg)';
    elBox1.style.backgroundColor = 'red';
    elBox2.style.backgroundColor = 'blue';
})

elBtn2.style.color = 'white';
elBtn2.style.padding = '15px 100px';
elBtn2.style.display = 'block';
elBtn2.style.border = '1px solid black';
elBtn2.style.borderRadius = '10px';
elBtn2.style.margin = '0 auto';
elBtn2.style.cursor = 'pointer';
elBtn2.style.background = 'linear-gradient(250deg, pink,blue)';

// ============================= BTN-2 END ============================= //