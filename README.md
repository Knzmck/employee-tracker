# Unit 12 MySQL Homework: Employee Tracker  

## Description  

This application is a program that creates an interface for non-developers to use easily to interact with information stored in an employee database. Often these interfaces are known as **C**ontent **M**anagement **S**ystems.  

## User Story  

```  
As a business owner or employee  
I want to be able to view and manage the departments, roles, and employees in my company  
So that I can organize and plan my business  
```  

## Instructions for use 

* **Dependencies**:

  * **mysql**  
  * **inquirer**
  * **express**
  * **console.table**
  * **asciiart-logo**     
  

Design the following database schema containing three tables on mysql:  

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  


## Developer  

   <div class="CircleBadge CircleBadge--medium bg-gray-dark">
   <img src="https://avatars.githubusercontent.com/Knzmck" height="90" width="90">   
   </div>  
   Kenzie Schutz   

  ## Questions  

   Please direct all questions the developer to github user Knzmck.   



   [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)  