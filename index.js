// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    delete newEmployee.key;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    delete employee.key;
    return employee;
}

