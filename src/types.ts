type gender = "male" | "female"
type personToString = (person: Person) => string

interface Person {
  name: string,
  gender: gender,
  age: number
}

let convertPersonToString: personToString
convertPersonToString = (person: Person) => {
  return "NAME: " + person.name + ", GENDER: " + person.gender + ", AGE: " + person.age
}

let person1: Person = {
  name: "Harold",
  gender: "male",
  age: 45
}

let person2: Person = {
  name: "Hanna",
  gender: "female",
  age: 32
}

let person3: Person = {
  name: "Henry",
  gender: "male",
  age: 27
}

const people: Person[] = [person1, person2, person3]

people.forEach((item) => {
  console.log(item)
});

console.log()

people.forEach((item) => {
  console.log(convertPersonToString(item))
});

console.log()

console.table(people)
