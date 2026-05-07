
const filterEvenNumbers = (test : number[]) : number[] => {
     const filterdArray:number[] = []

     test.map((element) => {
        if(element % 2 === 0) {
            filterdArray.push(element)
        }
     })
     return filterdArray
}




const reverseString = (param : string) : string => {
    let temporaryReversed : string = ''
    
    for(let i = param.length - 1; i >= 0; i--) {
       temporaryReversed += (param[i])
    }

    return temporaryReversed
}



type StringOrNumber = string | number
const checkType = (param : StringOrNumber) : string => {

    if(typeof param === 'string'){
        return 'String'
    }
    else{
        return 'Number'
    }
}



const getProperty = <X, Y extends keyof X> (inObj : X, key : keyof X) => {
    return inObj[key]
}


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
