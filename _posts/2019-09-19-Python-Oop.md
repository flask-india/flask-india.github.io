---
lang: en
layout: post
title: "Python Object Oriented Programming"
date: 2019-09-19 22:07:39 -0700
category: Python_Programming
category_name: പൈത്തണ്‍ പ്രോഗ്രാമ്മിങ്
img: /static/img/python_snake.jpg
color: green
theme_color: "#4CAF50"
prism: true
tags:
- Python
- Tutorial
---

# Python Object Oriented Programming
As we all know Python is Object Oriented Programming language. But you won't believe we are using Python OOP from our first program itself. For example if you try following snippet you will get what I am saying.

<pre class="line-numbers">
<code class="language-python">
x = 2
print(type(x))
</code>
</pre>

It will give you following result: ```<class 'int'>```

**You can see this in any data item like list, tuple, dictionary sets ...etc**. That is each datatype is belongs to a class. For example **append** is a method within the class named list. We will discuss what is method in this post later.

{% include MyNote.html note_type="success" span_note="Important:" text="In Python, all data items are objects, and each object is an instance of a class. The importance of classes is: by defining your own class, you define a fundamental new data type." %}


## How do we create simple class?
Using class keyword we can create new class. The syntax of class is given below:
<pre class="line-numbers">
<code class="language-python">
class class_name:
	method_definitions
</code>
</pre>

Let us create our own class,
<pre class="line-numbers">
<code class="language-python">
class Employee:
	pass
</code>
</pre>

{% include MyNote.html note_type="info" span_note="Info: " text="The keyword pass is a kind of placeholder. It says, “There’s nothing more to do here for now; I’ll come back and add things later.” Or, you might just use it as a permanent no-op (no operation). Occasionally this is needed because Python has no statement terminator; therefore, it has no way to specify a blank statement other than <b>pass</b>." %}
 
Let us create a new objects of our class Employee:
<pre class="line-numbers">
<code class="language-python">
employee1 = Employee()
employee2 = Employee()
</code>
</pre>

Let us check whether we are created instances of class Employee successfully:
<pre class="line-numbers">
<code class="language-python">
print(type(employee1))
</code>
</pre>

This will give you something like ```<class '__main__.Employee'>```. Then it is perfect.

Now it is the time to create instance variables. Instance variables are used for attach data to individual objects. Using these instance variable we can attach data field directly to at runtime. Instances are written outside class.

<pre class="line-numbers">
<code class="language-python">
employee1.firstName = 'Arun'
employee1.lastName = 'Soman'
employee1.email = employee1.firstName + employee1.lastName+'@company.com'

employee2.firstName = 'Anuja'
employee2.lastName = 'Soman'
employee2.email = employee2.firstName + employee2.lastName+'@company.com'

print(employee1.email)
print(employee2.email)
</code>
</pre>

Our primary concern is to reduce number of lines in the program. So it is not a good way to write program. In next post we will discuss about ***self obsession***  and how to reduce number of lines in the program using Python **default constructor** called *__init__* . 

## Writing Methods Inside Class
Writing a method is how we give objects of a class the ability to respond to 
messages; another way of saying this is that methods give objects of a class 
behavior.

{% include MyNote.html note_type="info" span_note="Info: " text="In Python, as elsewhere, methods are functions defined inside class definitions-even though they may be called through an object (an “instance method”)." %}

Python supports following types of methods
1. Regular Methods
2. Class Methods and
3. Static Methods

We will discuss about all of the above methods in upcoming blog posts. Let us create a regular method by extending our previous program.

<pre class="line-numbers">
<code class="language-python">
class Employee:
	def fullName(firstName, lastName):
		return firstName + ' '+  lastName

	
# instances or objects
employee1 = Employee()
employee2 = Employee()

# instance variables of employee1
employee1.firstName = 'Arun'
employee1.lastName = 'Soman'

# instance variables of employee2
employee2.firstName = 'Anuja'
employee2.lastName = 'Soman'

# calling method in the class
print(Employee.fullName(employee1.firstName,employee1.lastName))

# calling method in the class
print(Employee.fullName(employee2.firstName,employee2.lastName))
</code>
</pre>

In the program given above, we created an Employee class. In the main program we can see instances of Employee class. Using those instances we created new instance variables called firstname and lastname. Next we wrote a method called fullname in the class in order to concatenate firstname and lastname. In the last two print statement the method fullname is called. As I mentioned earlier, we cooked up this program by writing instance variable over and over again which is not a good idea. How to eradicate this problem? See our next post for solution.

Reference: 
