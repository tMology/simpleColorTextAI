const net = new brain.NeuralNetwork();
    

//Initial Data here is weak
const data = [
    {
        input: { r: 0, g: 0, b: 0},
        output: [1] 
    },
    {
        input: { r: 1, g: 1, b: 1},
        output: [0]
    }
]

net.train(data);

const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');

let color
setRandomColor()

whiteButton.addEventListener('click', () => {
    chooseColor(1)
})

blackButton.addEventListener('click', () => {
    chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value){
    data.push({
        input: color,
        output:[value]
    })
    setRandomColor()
}

function print() {
    console.log(JSON.stringify(data))
}


function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }

    const guess = net.run(color)[0]
    
    guessEl.style.color = guess > .5 ? '#FFF' : '#000'


    colorEl.style.backgroundColor=
    `rgb(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}
