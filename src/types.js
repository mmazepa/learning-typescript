var convertPersonToString;
convertPersonToString = function (person) {
    return "NAME: " + person.name + ", GENDER: " + person.gender + ", AGE: " + person.age;
};
var people = [
    {
        name: "Harold",
        gender: "male",
        age: 45
    },
    {
        name: "Hanna",
        gender: "female",
        age: 32
    },
    {
        name: "Henry",
        gender: "male",
        age: 27
    }
];
people.forEach(function (item) {
    console.log(item);
});
console.log();
people.forEach(function (item) {
    console.log(convertPersonToString(item));
});
console.log();
console.table(people);
