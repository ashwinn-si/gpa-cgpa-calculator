function AnalyseChart(values) {
    let count = 1;
    let analyse_sems = [];
    let analyse_cgpa = [];
    let analyse_gpa = [];

    values.forEach(element => {
        analyse_gpa.push(parseFloat(element));
        analyse_sems.push(`sem-${count}`);
        count++;
    });
    
    let total_gpa = 0;
    for (let i = 0; i < count - 1; i++) {
        total_gpa += analyse_gpa[i];
        analyse_cgpa.push(parseFloat(((total_gpa / ((i + 1) * 10)) * 10).toFixed(3)));
    }
    let analyse_min_cgpa = Math.min(...analyse_cgpa, ...analyse_gpa) - 0.5;
    let analyse_max_cgpa = Math.max(...analyse_cgpa, ...analyse_gpa) + 0.5;
    if(analyse_max_cgpa>10){
        analyse_max_cgpa=10;
    }
    return {
        analyse_sems : analyse_sems,
        analyse_gpa : analyse_gpa,
        analyse_cgpa : analyse_cgpa,
        analyse_min_cgpa : analyse_min_cgpa,
        analyse_max_cgpa : analyse_max_cgpa,
    }
}
export default AnalyseChart;