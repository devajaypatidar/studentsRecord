# Student Filtering System

This project implements a backend API for managing student data and filtering functionality.

## Features

- **Load Student Details API**: Retrieves student details from a CSV file in a paginated manner.
- **Server-side Filtering API**: Implements server-side filtering based on various criteria.

## Technologies Used

- Node.js
- Express.js
- CSV Parser

## Getting Started

1. Clone the repository: `git clone https://github.com/devajaypatidar/studentsRecord.git`
2. Install dependencies: `npm install`
3. Start the server: `node index.js`

## API Endpoints

### Load Student Details

- **URL**: `/api/students`
- **Method**: GET
- **Parameters**: `page`, `pageSize`

### Server-side Filtering

- **URL**: `/api/students/filter`
- **Method**: GET
- **Parameters**: `criteria`

## Contributing

Contributions are welcome! Fork the repository, create a new branch, make your changes, and submit a pull request.

