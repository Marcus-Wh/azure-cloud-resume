# Azure Cloud Resume Project

This project is a personal cloud portfolio website deployed using Microsoft Azure.  
It demonstrates serverless architecture and cloud hosting concepts.

## Live Website
Hosted using Azure Storage Static Website.

## Architecture

```mermaid
flowchart TD
    A[User Browser] --> B[Azure Static Website]
    B --> C[JavaScript API Call]
    C --> D[Azure Function API]
    D --> E[Visitor Count Response]
    E --> B

## Technologies Used

- Microsoft Azure
- Azure Storage Static Website
- Azure Functions
- HTML
- CSS
- JavaScript

## Features

- Static cloud-hosted portfolio website
- Serverless API using Azure Functions
- Visitor counter displayed on the homepage
- CORS configuration for secure API access

## Project Structure
cloud-resume
│
├── index.html
├── style.css
├── script.js
└── README.md


## How It Works

1. The static website is hosted using Azure Storage Static Website hosting.
2. The site loads HTML, CSS, and JavaScript files from the Azure storage container.
3. JavaScript sends a request to an Azure Function API endpoint.
4. The API returns a visitor count which is displayed on the webpage.

## Future Improvements

- Persistent visitor counter using Azure Table Storage
- CI/CD deployment using GitHub Actions
- Custom domain for the portfolio
- Additional cloud infrastructure projects

## Author

Marcus White  

Cloud & Network Engineering Student  

