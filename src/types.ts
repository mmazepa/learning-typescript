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

const people: Person[] = [
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
]

people.forEach((item) => {
  console.log(item)
});

console.log()

people.forEach((item) => {
  console.log(convertPersonToString(item))
});

console.log()

console.table(people)
