function helper(grade){
    switch(grade){
        case "O":
            return 10;
        case 'A +':
            return 9;
        case 'A':
            return 8;
        case 'B +':
            return 7;
        case 'B':
            return 6;
        case 'C':
            return 5;
        case 'U':
            return 0;
    }

}
function GpaCalFunction(values) {
        let userTotalCredit = 0;
        let totalCredit = 0;
        values.forEach(value => {
            userTotalCredit += (value.credit * helper(value.grade));
            totalCredit += (value.credit * 10);
        })
        return (((userTotalCredit/totalCredit)*10).toFixed(3));

}
export default GpaCalFunction;