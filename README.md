# CinemaCalc Dashboard

This is a React-based frontend application for managing and viewing expenses in the CinemaCalc system. 
It interacts with the backend API to create, read, update, and delete expense records.

## Features

- Add new expenses using a form.
- View a list of all expenses with details such as name, price, and markup.
- Update or delete existing expenses.
- Interact with the backend API for data persistence.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **CSS**: Styling the components.
- **.env**: For managing environment variables.

## Setup and Installation

To set up and run this project locally, follow these steps:

### 1. Clone the repository:

```
git clone https://github.com/your-username/cinema-calc-dashboard.git
cd cinema-calc-dashboard
```
### Install dependencies:
```
npm install
```
### Start the development server:
```
npm start
```
### Environment Variables
This project uses environment variables to configure the backend API URL. 
Create a `.env` file in the root directory with the following contents:
```
REACT_APP_BACKEND_IP=https://localhost
REACT_APP_BACKEND_PORT=7236
```

