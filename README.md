# Employee Management System (EMS)

## Description
The Employee Management System (EMS) is a full-stack web application designed to manage employee records efficiently. It provides a user-friendly interface for CRUD (Create, Read, Update, Delete) operations on employee data. The system consists of a backend built with Spring Boot and a frontend developed using React.js with Vite.

## Features
- Add new employees
- View a list of employees
- Update employee details
- Delete employees
- RESTful API endpoints for backend communication
- Frontend built with React.js and Bootstrap for a modern UI

## Technologies Used
### Backend:
- Java 17
- Spring Boot 3.2.0
- Spring Data JPA
- MariaDB
- Lombok
- Maven

### Frontend:
- React.js
- Vite
- Bootstrap
- Axios
- React Router DOM

## Project Structure
### Backend (Spring Boot - `ems-backend`)
- `controller/` - Handles HTTP requests
- `dto/` - Data Transfer Objects
- `entity/` - JPA entity classes
- `exception/` - Custom exception handling
- `mapper/` - Maps entity objects to DTOs and vice versa
- `repository/` - Data persistence layer using JPA
- `service/` - Business logic layer
- `resources/application.properties` - Database configuration
- `pom.xml` - Maven dependencies

### Frontend (React.js - `ems-frontend`)
- `components/` - React UI components (Employee List, Add Employee, Update Employee, Header, Footer)
- `services/` - Axios-based API services
- `App.jsx` - Main application file
- `vite.config.js` - Configuration for Vite
- `package.json` - Dependencies and scripts

## Installation & Setup
### Prerequisites
- Java 17+
- Node.js & npm
- MariaDB (or another compatible database)

### Backend Setup
1. Navigate to `ems-backend` directory.
2. Configure the database connection in `src/main/resources/application.properties`.
3. Build and run the backend:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to `ems-frontend` directory.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/employees` | Create a new employee |
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get an employee by ID |
| PUT | `/api/employees/{id}` | Update an employee |
| DELETE | `/api/employees/{id}` | Delete an employee |

## License
This project is open-source and available under the MIT License.

