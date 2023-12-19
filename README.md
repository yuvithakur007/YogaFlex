# Yoga Classes Admission Form

This project implements an admission form for Yoga Classes, enabling individuals within the age range of 18-65 to enroll for monthly classes and make payments on a month-to-month basis.

## Features

- **Age Limit:** Participants must be between 18-65 years old to enroll.
- **Monthly Fee:** Fixed at 500/- Rs INR, payable monthly.
- **Batch Selection:** Participants can choose from 4 batches per day (6-7AM, 7-8AM, 8-9AM, 5-6PM) and may switch batches monthly.

## ER Diagram

![ER Diagram](link_to_your_image)

The ER diagram showcases the database schema and relationships:

- **Form Table:** Contains participant details such as name, age, selected batch, month, and payment information.

## Approach and Assumptions

### Database Schema
- **Form Table Structure:** The database includes a 'Form' table modeled based on the provided schema with fields for `name`, `age`, `batch`, `month`, and `payment`.
- **Relationships:** No explicit relationships between tables are necessary for this form's functionality.

### Functionality
- **Validation:** Age validation ensures participants are within the specified age range.
- **Payment Handling:** Simulated payment response is provided upon successful form submission.
- **Error Handling:** Server-side and client-side error handling is implemented for various scenarios.

### Assumptions Made
- Participants can switch batches only at the start of a new month.
- Payment processing is simulated and assumes success for demonstration purposes.

## Installation and Usage

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.
4. Start the server: `npm start`.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **External Libraries:** Axios, Mongoose, Body-parser, Cors

## Usage

- Access the form by running the application and navigating to the provided URL.
- Fill in participant details, select batch and month, and submit the form.
- Handle payment simulation based on the provided response.
