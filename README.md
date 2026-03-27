# Random User Dashboard
## Overview

The Random User Dashboard is a frontend project that demonstrates how to work with real-world APIs using modern JavaScript. The application fetches a random user and enriches that data by integrating additional APIs to predict age and gender.

This project focuses on building a strong foundation in asynchronous programming, API integration, and DOM manipulation. It reflects a deliberate effort to understand how data flows through an application rather than relying on abstractions.

## Purpose

The goal of this project is to develop a deep understanding of core frontend concepts by:

Working directly with asynchronous JavaScript using async and await
Handling real API responses and edge cases
Structuring clean and readable code
Dynamically updating the user interface

This project is part of a broader learning journey toward becoming a well-rounded Frontend engineer.

## Features
Fetches a random user from an external API
Displays the user’s name and country
Predicts age using the Agify API
Predicts gender using the Genderize API
Updates the UI dynamically based on user interaction
Includes basic styling for a clean and readable layout

## Technologies Used
HTML
CSS
JavaScript
Fetch API
Async and Await

## APIs Used
Random User API
Agify API
Genderize API


## How It Works
The user clicks the "Load User" button
A request is sent to the Random User API
The user's first name and country are extracted from the response
The name is passed into the Agify API to estimate age
The same name is passed into the Genderize API to estimate gender
All collected data is rendered in the dashboard
Key Concepts Demonstrated
Asynchronous JavaScript with async and await
Sequential API requests and data flow management
Error handling using try and catch
Working with nested JSON data
DOM manipulation using JavaScript

## Project Structure
.
├── index.html
├── style.css
└── app.js

## Getting Started
Clone the repository
Open the project folder
Open index.html in your browser
Click the "Load User" button to generate and display a user

## Why Write JavaScript Manually in the Age of AI

AI tools can generate code quickly, but understanding how and why that code works is essential for becoming a competent engineer.

This project was intentionally written by hand to:

Build a strong understanding of JavaScript fundamentals
Develop problem-solving and debugging skills
Learn how asynchronous operations work under the hood
Gain confidence in working with real-world data

Relying solely on AI without understanding the fundamentals can limit long-term growth. Writing code manually ensures that the concepts are fully understood and can be applied in different contexts.

## Future Improvements
Improve UI design and responsiveness
Add loading indicators for better user experience
Handle null or missing API data more gracefully
Display additional user information
Refactor into reusable components as complexity grows

## Notes

This project is focused on learning and reinforcing core concepts. It is not intended for production use, but it reflects a structured and intentional approach to skill development.