import * as tf from '@tensorflow/tfjs';
import DataSet from "./DataSet";
import AnalyseChart from "./AnalyseChart";
function normalizeData(data) {
    return data.map(value => value / 10);
}

// Denormalize function to scale data back to [0, 10]
function denormalizeData(data) {
    return data.map(value => (value * 10).toFixed(3));
}

// Build a simple neural network model with dynamic input size
function createModel(inputShape, outputShape) {
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [inputShape], units: 10, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
    model.add(tf.layers.dense({ units: outputShape, activation: 'sigmoid' }));  // Sigmoid for output

    model.compile({
        optimizer: tf.train.adam(),
        loss: 'meanSquaredError'
    });

    return model;
}

async function trainModel(model, inputTensor, outputTensor) {
    return await model.fit(inputTensor, outputTensor, {
        epochs: 100,
        shuffle: true,
        validationSplit: 0.2,

    });
}
async function PredictScript(value) {
    //ml model
    let inputGPA = [];
    value.forEach(element => {
        inputGPA.push(element);
    });
    let gpaData;

    // Choose the correct dataset based on the input length
    switch (inputGPA.length) {
        case 1:
            gpaData = DataSet.data_set_sem_1;
            break;
        case 2:
            gpaData = DataSet.data_set_sem_2;
            break;
        case 3:
            gpaData = DataSet.data_set_sem_3;
            break;
        case 4:
            gpaData = DataSet.data_set_sem_4;
            break;
        case 5:
            gpaData = DataSet.data_set_sem_5;
            break;
        case 6:
            gpaData = DataSet.data_set_sem_6;
            break;
        case 7:
            gpaData = DataSet.data_set_sem_7;
            break;
        default:
            alert("Invalid number of semesters.");
            return;
    }

    //Normalize the input and output data
    const normalizedInputs = gpaData.map(d => normalizeData(d.input));
    const normalizedOutputs = gpaData.map(d => normalizeData(d.output));

    // Convert data to TensorFlow tensors
    const inputTensor = tf.tensor2d(normalizedInputs);
    const outputTensor = tf.tensor2d(normalizedOutputs);

    // Output shape is the number of semesters you're predicting (8 - n)
    const outputShape = 8 - inputGPA.length;

    // Build and train the model
    const model = createModel(inputGPA.length, outputShape);

    await trainModel(model, inputTensor, outputTensor);


    // Use the model to predict the GPA for remaining semesters based on the input
    const normalizedInputGPA = normalizeData(inputGPA);  // Normalize the input
    const testGPA = tf.tensor2d([normalizedInputGPA]);  // Convert to tensor

    const prediction = model.predict(testGPA).mul(10);  // Multiply the prediction by 10 to denormalize

    let predictedGPA;
    // Get the prediction as a regular array
    predictedGPA = await prediction.array();
    predictedGPA = predictedGPA[0]// Extract the first element of the array
    let outputGPA = [];
    for(let i = 0 ; i < inputGPA.length ; i++){
        outputGPA.push(parseFloat(parseFloat(inputGPA[i]).toFixed(3)));
    }
    for(let i = 0 ; i < predictedGPA.length ; i++){
        outputGPA.push(parseFloat(predictedGPA[i].toFixed(3)));
    }
    return (AnalyseChart(outputGPA));
}
export default PredictScript;