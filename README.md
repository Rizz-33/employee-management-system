# Employee Management System

This is a full-stack web application for managing employees, built using Spring Boot and React Hooks. It covers basic CRUD operations (Create, Read, Update, Delete) and integrates MySQL as the database. The backend REST API is tested using Postman, and the frontend handles the API using Axios.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Feedback and Support](#feedback-and-support)

## Features

- Add new employees
- View a list of all employees
- View employee by id
- Update employee details
- Delete employees

## Technologies Used

### Backend

- Spring Boot
- MySQL
- JPA (Java Persistence API)
- RESTful Web Services

### Frontend

- React
- React Hooks
- Axios
- Bootstrap

## Prerequisites

- Java 8 or higher
- Node.js and npm
- MySQL
- Git

## Installation

### Backend Setup

1. Clone the backend repository:

   ```sh
   git clone https://github.com/Rizz-33/java-crud-api
   cd java-crud-api
   ```
   
2. Configure MySQL database:

Update src/main/resources/application.properties with your MySQL database credentials:

```sh
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3. Build and run the Spring Boot application:

```sh
./mvnw spring-boot:run
```

### Frontend Setup

1. Clone the backend repository:

   ```sh
   git clone https://github.com/Rizz-33/employee-management-system
   cd employee-management-system
   ```
   
2. Install the dependencies:

```sh
npm install
```

3. Start the React application:

```sh
npm start
```

## Usage

### Testing the Backend API with Postman

1. Open Postman.

2. Use the following endpoints to test the CRUD operations:

- Create an employee: POST ``http://localhost:8081/user``
- Get all employees: GET ``http://localhost:8081/users``
- Get an employee by ID: GET ``http://localhost:8081/user/{id}``
- Update an employee: PUT ``http://localhost:8081/user/{id}``
- Delete an employee: DELETE ``http://localhost:8081/user/{id}``

### Using the Frontend Application

1. Open your web browser and go to ``http://localhost:3000``.
2. Use the UI to perform CRUD operations on employees.

## Feedback and Support:
If you have any feedback, questions, or need support with EMS, please feel free to open an issue on this repository. Your feedback is invaluable and help me to improve the app for everyone.
