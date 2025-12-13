# 🧑‍💼 StaffSphere – Full Stack Employee Management System

**StaffSphere** is a comprehensive full-stack Employee Management System designed to simplify the management of organizational workforce data.  
Built with **Spring Boot** (backend) and **React** (frontend), the application offers a seamless interface for performing CRUD operations on both employees and departments.  
It uses REST APIs for backend communication and Axios for frontend data fetching, providing a smooth, modern full-stack development experience.

---

## 🌟 Overview

Managing employees and departments is a core function of any organization.  
StaffSphere provides a clean, intuitive solution featuring:

- Structured employee and department information  
- Easy-to-use CRUD interfaces  
- Fast and reliable endpoint responses  
- Clear separation between backend business logic and frontend UI  
- Modular design for scalability and future expansions  

The application is engineered following best practices such as layered architecture, DTO usage, and component-based frontend design.

---

## 🚀 Core Features

### 👨‍💼 Employee Management
- Create new employees with essential details  
- Retrieve a list of all employees  
- View individual employee records  
- Update employee information  
- Delete employee records  

### 🏢 Department Management
- Add new departments  
- View all departments in the system  
- Retrieve department details by ID  
- Edit existing department data  
- Remove a department from the system  

### 🔗 Full-Stack Workflow
- **Backend** exposes RESTful endpoints using Spring Boot  
- **Frontend** consumes these endpoints via Axios  
- CORS enabled for smooth interaction between both layers  
- MySQL database ensures persistent storage of all data  

---

## 🛠️ Technologies Used

### **Backend (Spring Boot)**
- Spring Boot Framework  
- Spring Web  
- Spring Data JPA  
- MySQL Database  
- Lombok (for boilerplate reduction)  
- Data Transfer Objects (DTOs)  
- Service + Repository architecture  

### **Frontend (React)**
- React (Hooks-based components)  
- Axios for API requests  
- React Router for navigation  
- CSS / Bootstrap styling  
- Component-driven UI architecture  

---

## 📡 REST API Endpoints

### 🏢 Department APIs  
Base: `/api/departments`

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/departments` | Create a new department |
| **GET** | `/api/departments` | Retrieve all departments |
| **GET** | `/api/departments/{id}` | Get department by ID |
| **PUT** | `/api/departments/{id}` | Update existing department |
| **DELETE** | `/api/departments/{id}` | Delete a department |

---

### 👨‍💼 Employee APIs  
Base: `/api/employees`

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/employees` | Create a new employee |
| **GET** | `/api/employees` | Retrieve all employees |
| **GET** | `/api/employees/{id}` | Fetch employee by ID |
| **PUT** | `/api/employees/{id}` | Update employee details |
| **DELETE** | `/api/employees/{id}` | Delete an employee |

---

## 🧱 Architecture

StaffSphere follows a clear and maintainable architecture:

### **Backend Architecture**
- **Controller Layer** – Handles incoming requests and API mapping  
- **Service Layer** – Implements business logic  
- **Repository Layer** – Interacts with the database  
- **DTO Layer** – Ensures data transfer consistency  
- **Entity Layer** – Represents the database tables  

### **Frontend Architecture**
- **Pages & Components** for modular UI  
- **Axios Service** for API communication  
- **Routing** for navigation between pages  
- **State Management** using React hooks  

This structure ensures:  
✔ High scalability  
✔ Cleaner code organization  
✔ Easy debugging and future improvements  

---

## 🎨 User Interface

The frontend UI is designed for clarity and usability:

- Simple navigation between employee and department sections  
- Table-based displays for readable data presentation  
- Forms for creating and updating records  
- Instant feedback on CRUD operations  
- Organized layout inspired by modern admin dashboards  


