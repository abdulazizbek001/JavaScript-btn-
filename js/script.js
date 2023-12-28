const elBody = document.querySelector('body');
const elWrap = document.createElement('div');
const elBox = document.createElement('div');
const elRed = document.createElement('div');
const elBlue = document.createElement('div');
const elBtn = document.createElement('button');

elBody.append(elWrap);
elWrap.append(elBox, elBtn);
elBox.append(elRed, elBlue);

// ============================= BODY START ============================= //

elBody.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

// ============================= BODY END ============================= //

// ============================= BOX START ============================= //

elBox.style.cssText = `
    width: 350px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 10px;
    border-radius: 10px;
    background-color: grey;
    margin-bottom: 20px;
`

// ============================= BOX END ============================= //

// ============================= RED START ============================= //

elRed.style.cssText = `
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: red;
`

// ============================= RED END ============================= //

// ============================= BLUE START ============================= //

elBlue.style.cssText = `
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: blue;
`

// ============================= BLUE END ============================= //

// ============================= BTN START ============================= //

elBtn.textContent = 'Button';
elBtn.style.cssText = `
    width: 200px;
    margin-left: 85px;
    color: white;
    padding: 10px 30px;
    border: 1px solid red;
    border-radius: 10px;
    background-color: blue;
    cursor: pointer;
`

// elBtn.addEventListener('click', () => {
//     setInterval(() => {
//         elRed.style.backgroundColor = 'blue';
//         elBlue.style.backgroundColor = 'red';
//     }, 500);
// })

elBtn.addEventListener('click', () => {
    setInterval(() => {

        if (elRed.style.backgroundColor = 'red') {
            elRed.style.backgroundColor = 'blue';
        } else if (elRed.style.backgroundColor = 'blue') {
            elRed.style.backgroundColor = 'red';
        }

        if (elBlue.style.backgroundColor = 'blue') {
            elBlue.style.backgroundColor = 'red';
        } else if (elBlue.style.backgroundColor = 'red') {
            elBlue.style.backgroundColor = 'blue';
        }

    }, 10);
})

ism = 'Abdulaziz'

print(ism);


// ============================= BTN END ============================= //