
---

# `blog-1.md`

```md

# Question : 
How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in? 


## Introduction

Generics is a powerful feature in TypeScript language. It allows the developers to build reusable functions, classes, and interfaces while maintaining strict type safety. Instead of writing duplicate same type of fucntion we can generalize the fucntion code for different data types. Generics enable scalable solutions.

---

## Problem Without Generics

Without generics, we often repeat the same function for different types.

### Problem Example 1: repetation

```ts
function identityNumber(value: number): number {
  return value;
}

function identityString(value: string): string {
  return value;
}
```
---

### Solution of problem 1 :

```ts
function identity<T>(value: T): T {
  return value;
}

// Usage examples
const num = identity<number>(42);
const str = identity<string>("hello");
const bool = identity<boolean>(true);

// Type inference
const inferredNum = identity(100);
const inferredStr = identity("world");
```


### Problem Example 2: strictly typed checking 

```ts
const userList : GenericArray<object> = [
    {
        name : 'a',
        age : 2 /// -->  number type
    },
    {
        name : 'b',
        age :'1'  /// -->  string type 
    },
    {
        id : 1  /// --> diffrent propperty
    }
    /// so we can use vareious property for various object
    /// which is a really big deal for big project 
]
```

### Solution of problem 2 :

```ts
type User2 = {name : string, age : number}
const user2List : GenericArray<User2> = [
    {
        name : 'a',
        age : 1
    }
]
```

---

### Conclusion

Generics help you build:
Reusable code
Strict type safety
Scalable architecture