
/// 1 

const filterEvenNumbers = (test : number[]) : number[] => {
     const filterdArray:number[] = []

     test.map((element) => {
        if(element % 2 === 0) {
            filterdArray.push(element)
        }
     })
     return filterdArray
}
// const akm : number[] = [1,2,3]
// console.log(filterEvenNumbers(akm))


/// 2 

const reverseString = (param : string) : string => {
    let temporaryReversed : string = ''
    
    for(let i = param.length - 1; i >= 0; i--) {
       temporaryReversed += (param[i])
    }
     
    return temporaryReversed
}
// const akm : string = 'meowmenow'
// console.log(reverseString(akm))

// 3

type StringOrNumber = string | number
const checkType = (param : StringOrNumber) : string => {

    if(typeof param === 'string'){
        return 'String'
    }
    else{
        return 'Number'
    }
}
// console.log(checkType("Hello"))
// console.log(checkType(42))


/// 4

const getProperty = <X, Y extends keyof X> (inObj : X, key : keyof X) => {
    return inObj[key]
}
// const user = { id: 1, name: "John Doe", age: 21 } 
// console.log(getProperty(user, "name"))


/// 5

interface Book {
    title : string
    author : string
    publishedYear : number
}

const toggleReadStatus = (obj : Book) : object => {
    return{
        ...obj,
        isRead: true
    }
}

// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));



/// 6

class Person {
    name : string;
    age : number;

    constructor(name : string, age : number){
        this.name = name
        this.age = age
    }
}
class Student extends Person{
    grade : string;

    constructor(name : string, age : number,grade: string){
        super(name, age)
        this.grade = grade
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());


/// 7

const getIntersection = (arr1 : number[] , arr2 : number[]) : number[] => {
    
    let commonElement = new Set<number>()

    for(let i =0; i<arr1.length; i++){
        commonElement.add(arr1[i])
    }
    for(let i= 0; i<arr2.length; i++){
        commonElement.add(arr2[i])
    }
    return[...commonElement]
}
// const akm : number [] = [1,3,5,5,5,6,2]
// const groga : number [] = [1,3,6,5,5,2]
// console.log(getIntersection(akm, groga))