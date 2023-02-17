const net = new brain.NeuralNetwork();
    


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

const diagram = document.getElementById('diagram');
diagram.innerHTML = brain.utilities.toSVG(net);
