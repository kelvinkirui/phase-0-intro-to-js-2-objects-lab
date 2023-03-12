// Write your solution in this file!
let employee = {};
employee.name = "value1";
employee.streetAddress = "value2";
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObj = { ...employee };
    newObj[key] = value;

    return newObj;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    let newObj = { ...employee };
    delete newObj[key];

    return newObj;
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];

    return employee;
};