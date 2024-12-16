function CgpaCalFunction(value) {
    let totalGpa = 0;
    value.forEach((value, index) => {
        totalGpa += parseFloat(value);
    })
    return ((totalGpa/(value.length*10))*10).toFixed(3);
}
export default CgpaCalFunction;