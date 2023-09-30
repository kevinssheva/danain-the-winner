# TypeOmegans

TypeOmegans is a group of people consisting of the best civilians on earth. We are an undergraduate student from Bandung Institute of Technology. TypeOmegnas consists of 5 members :

- Abraham Megantoro Samudera
- Gibran Fasha Ghazanfar
- Lie, Kevin Sebastian Sheva Tjahyana
- Mochamad Syahrial Alzaidan
- Vania Salsabila

Together, we are eager to make impactful changes in the world.

---

# Danain

TypeOmegans presents "Danain," a web platform that facilitates connections between investors and startup companies. We firmly believe that innovation should receive the proper funding and support.

Through Danain, we aim to unlock doors for sustainable business growth and productive collaboration within the startup ecosystem. Let's come together to shape a brighter future for innovation!

---

# API Documentation

### Messaging
- `GET /v1/message`
  - **Description:** Retrieve messages.

### Company
- `GET /v1/company`
  - **Description:** Get a list of companies.
- `GET /v1/company/{id}`
  - **Description:** Get details of a specific company by ID.

### Dashboard
- `GET /v1/dashboard/company/profile`
  - **Description:** Get the company's dashboard profile.
- `GET /v1/dashboard/company/transaction`
  - **Description:** Get transaction details from the company's dashboard.
- `GET /v1/dashboard/company/investor/profile`
  - **Description:** Get investor profile from the company's dashboard.

### Question
- `GET /v1/question/{id}`
  - **Description:** Get a question by ID.

### Transaction
- `GET /v1/transaction`
  - **Description:** Get transaction details.
- `GET /v1/transaction/{companyid}`
  - **Description:** Get transactions for a specific company.
- `GET /v1/transaction/{companyid}/{userid}`
  - **Description:** Get transactions for a specific company and user.

### User
- `GET /v1/user`
  - **Description:** Get a list of users.
- `GET /v1/user/{userid}`
  - **Description:** Get details of a specific user by ID.

### Authentication
- `GET /auth`
  - **Description:** Authenticate and get authentication details.

## POST Endpoints

### Transaction
- `POST /v1/transaction`
  - **Description:** Create a new transaction.

### User
- `POST /v1/user/register/founder`
  - **Description:** Register a new user as a founder.
- `POST /v1/user/register/investor`
  - **Description:** Register a new user as an investor.

### Authentication
- `POST /auth`
  - **Description:** Authenticate and obtain an authentication token.

## PATCH Endpoints

### Dashboard
- `PATCH /v1/dashboard/company/founder/profile`
  - **Description:** Update founder profile in the company's dashboard.
- `PATCH /v1/dashboard/company/investor/profile`
  - **Description:** Update investor profile in the company's dashboard.

### User
- `PATCH /v1/user/{userid}`
  - **Description:** Update user details.
