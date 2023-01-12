---
title: 'Exception handling in JavaScript: how to handle errors effectively'
author: 'Emanuele Gurini'
cover_image: '/img/posts/tailwind-css-specifying-which-files-to-process-min.jpg'
category: 'javascript exception try-catch'
time: '1:53'
excerpt: 'Knowing exceptions, call stack and the use of the try-catch construct to handle errors in a self-sufficient and defined way'
date: Jenuary 12, 2023
---

## Introduction

In a program, when an unexpected error occurs, it is often not possible to solve it immediately to the point where it occurred.

Handling exceptions in JavaScript is a very important topic that helps us manage errors that may occur during the execution of the program. Firstly, it is important to understand what an exception is and why it is important to handle it. An exception is an event that occurs when something goes wrong, such as trying to divide a number by zero. Exception handling allows us to manage these errors and prevent the program from completely stopping.

Additionally, a very important topic to know when dealing with exceptions is the call stack, a key concept for understanding how exceptions propagate and how it affects error handling. When it comes to error handling, it's important to be aware of how exceptions are handled within the stack, because it can have a significant impact on how the program behaves in case of error. The call stack is like a stack of plates, every time you call a function or a method, you put a plate on top of the stack, when the function or method finishes its job, you take the plate off the top of the stack. When an exception occurs, the program searches for an exception handler within the stack, that is a catch block associated with the nearest try statement, if no exception handler is found in the current stack, the exception will propagate down the stack, that is toward the base of the stack, until it finds an exception handler or until it reaches the base of the stack.

## How exceptions work in JavaScript

Exceptions in JavaScript are handled using the try-catch construct. The try block contains code that may generate an exception, while the catch block handles the exception. When an exception is thrown, the code within the catch block is executed and the program execution resumes after the catch block.

It is very important to distinguish between "self-handling errors" and "defined error handling", two terms used to describe different ways of handling errors through exceptions in JavaScript.


![Exception handling in Javascript] (https://www.emanuelegurini.blog/img/posts/exception-handling-in-javaScript.png)

In the picture it is possible to see how exception handling allows to interrupt the execution of the code in progress, signaling the problem through the use of an exception. This is propagated along the chain of function calls, until it is handled by a try-catch block specified by the programmer. If not handled, the exception causes the interruption of the program.


## Self-handling errors

Self-handling errors uses the try-catch construct to describe what operation to perform in case of error. The code that might generate an error is placed within the try block, while the code to handle the error is placed within the catch block. For example, consider a division function that can generate an error if you try to divide by zero. We use the try-catch construct to handle this error in a self-sufficient way:

```javascript
try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log("Errore: non è possibile dividere per zero.");
}
```

In this example, the divide() function is called within the try block. Since you are trying to divide a number by zero, the system generates an error and the catch block catches the standard error message "division by zero" and prints it on the screen. In this way, developers can handle errors in an organized way and maintain control of the flow of the program.


## Defined error handling

Defined error handling uses an if statement within a try block to describe what operation to perform and throwing an exception using throw new Error with a custom message. For example, consider a function that checks if a number is greater than zero. We use an if statement within a try block to check the number and throw a custom exception if it is not greater than zero:

```javascript
try {
  checkNumber(0);
} catch (error) {
  console.log(error); // "Errore: il numero deve essere maggiore di zero."
}

function checkNumber(num) {
  if (num <= 0) {
    throw new Error("Errore: il numero deve essere maggiore di zero.");
  }
}
```

In this example, the checkNumber() function is called within the try block with a value of 0. The if statement within the function checks if the number is greater than zero and, if not, throws an exception with a custom message "Error: the number must be greater than zero." The catch block catches the exception and prints the error message to the screen.

## Using the finally block

The finally block is used to perform cleanup or closing operations, regardless of whether an exception occurs or not. For example, you can use the finally block to close a connection to a database after performing an operation within the try block or, especially for those working in the Front-end, you can use the finally block to interrupt the on-screen execution of a loader:

```javascript
try {
  // esegue operazione sul database
} catch (error) {
  console.log(error);
} finally {
  // chiude connessione al database
}
```

In this way, you can be sure that the database connection is closed or that the loader flag is set to false, regardless of whether an exception occurs or not.

Here is an example of a react hook implemented using the try/catch construct. In the example, you can see the construct used to handle potential errors during a generic fetch.


```javascript
import {useEffect, useState} from 'react';


export function useFetch(urlToFetch) {


   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);


   const fetchData = async () => {
       setData(null);
       setError(null);
       setLoading(true);


       try {
           const data = await fetch(urlToFetch).then(r => r.json());
           setData(data);
       } catch (error) {
           setError(error)
       } finally {
           setLoading(false)
       }
   }


   useEffect(() => {
       fetchData();
   }, []);


   return {
       data,
       error,
       loading,
       refetch: fetchData
   };
}
```
Source code by Luca Pagliaro from his own [Github](https://github.com/ilasw/edgemony-react-course/blob/main/23-01-11-custom-hooks/src/fetch/hooks/use-fetch.js)


## Conclusion

Error handling through exceptions in JavaScript allows developers to handle errors in an organized way and maintain control of the flow of the program. There are two main ways to handle errors through exceptions in JavaScript: self-handling using the try-catch construct without explicitly throwing exceptions, and defined handling using an if statement within a try block to describe what operation to perform and throwing an exception using throw new Error with a custom message. It is also possible to use the finally block to perform cleanup or closing operations, regardless of whether an exception occurs or not. Understanding and correctly using exceptions in JavaScript is essential for the development of robust and reliable applications.