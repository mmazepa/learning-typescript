var convertPersonToString;
convertPersonToString = function (person) {
    return "NAME: " + person.name + ", GENDER: " + person.gender + ", AGE: " + person.age;
};
var person1 = {
    name: "Harold",
    gender: "male",
    age: 45
};
var person2 = {
    name: "Hanna",
    gender: "female",
    age: 32
};
var person3 = {
    name: "Henry",
    gender: "male",
    age: 27
};
var people = [person1, person2, person3];
people.forEach(function (item) {
    console.log(item);
});
console.log();
people.forEach(function (item) {
    console.log(convertPersonToString(item));
});
console.log();
console.table(people);
