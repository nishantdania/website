---
layout: post
title: "Head First Design Patterns"
date: 2019-01-27
author: "Bert Bates, Kathy Sierra, Eric Freeman and Elisabeth Robson"
tags: [book, notes]
---

- So what does it take to learn something ? First, you have to get it, then make sure you dont forget it.

- Slow down. The more you understand, the less you have to memorize.

- **Design Principle**: Program to an interface, not an implementation.

- **Design Principle**: Identify the aspects of your application that vary and separate them from what stays the same.

- **Design Principle**: Favor composition over inheritance.

- **Pattern**: The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

- Patterns aren't invented, they are discovered.

- **Pattern**: The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

- When two objects are loosely coupled, they can interact, but have very little knowledge of each other. The Observer Pattern provides an object design where subjects and observers are loosely coupled.

- **Design Principle**: Strive for loosely coupled designs between objects that interact.

- **Design Principle**: Classes should be open for extension, but closed for modification.

- **Pattern**: The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

- **Pattern**: The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

- **Design Principle**: Depend upon abstractions. Do not depend upon concrete classes.

- **Pattern**: An Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

- **Pattern**: The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it.

- **Pattern**: The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.

- The NoCommand object is an example of a null object. A null object is useful when you don't have a meaningful object to return, and yet you want to remove the responsibility for handling null from the client.

- Macro Commands are a simple extension of Command that allow multiple commands to be invoked.

- **Pattern**: The Adapter Pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

- **Pattern**: The Facade Pattern provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

- **Design Principle**: Principle of Least Knowledge: Talk only to your immediate friends.

- **Pattern**: The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefines certain steps of an algorithm without changing the algorithm's structure.

- **Design Principle**: The Hollywood Principle: Don't call us, we'll call you.

- **Pattern**: The Iterator Pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

- **Design Principle**: A class should have only one reason to change.

- We say that a module or a class has high cohesion when it is designed around a set of related functions, and we say it has low cohesion when it is designed around a set of unrelated functions.

- **Pattern**: The Composite Pattern allows you to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

- **Pattern**: The State Pattern allows an object to alter its behaviour when its internal state changes. The object will appear to change its class.

- **Pattern**: The Proxy Pattern provides a surrogate or placeholder for another object to control access to it.

- **Pattern**: The Model-View-Controller (MVC) is a compound pattern consisting of Observer, Strategy and Composite patterns.

- A Pattern is a solution to a problem in a context.
