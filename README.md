# Azure Cloud Resume Portfolio

![Azure](https://img.shields.io/badge/Azure-Cloud-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI/CD-green)
![Status](https://img.shields.io/badge/Deployment-Live-success)

A personal cloud portfolio website deployed on **Microsoft Azure** with automated deployment using **GitHub Actions**.

This project showcases my certifications, cloud projects, and technical skills as I transition into a **Cloud Engineering career**.

🌐 **Live Website**  
https://marcuscloudresume.z5.web.core.windows.net

---

# Project Overview

This portfolio demonstrates how a static website can be deployed and maintained using modern **cloud and DevOps practices**.

The website includes:

- Downloadable resume
- Certification directory
- Cloud architecture explanation
- Automated deployment pipeline
- Azure-hosted static website

---

# Architecture

This project uses a simple Azure cloud architecture.
User Browser
↓
Azure Storage Static Website
↓
GitHub Actions CI/CD
↓
Azure Storage ($web container)


Future architecture expansion:
User Browser
↓
Azure Static Website
↓
Azure Function API
↓
Azure Table Storage / CosmosDB


---

# Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Cloud Platform

- Microsoft Azure
- Azure Storage Static Website

### DevOps

- GitHub
- GitHub Actions CI/CD

---

# CI/CD Deployment Pipeline

The website is automatically deployed using **GitHub Actions**.

Whenever changes are pushed to the `main` branch:

1. GitHub Actions workflow runs
2. The workflow logs into Azure
3. The site files are uploaded to the Azure Storage `$web` container
4. The updated site becomes live

Deployment workflow:
Local Development
↓
Git Commit + Push
↓
GitHub Actions
↓
Azure Login
↓
Upload to Azure Storage ($web)
↓
Live Website Update

---

# Project Structure
.
├── index.html
├── style.css
├── script.js
│
├── assets
│ └── Marcus-White-CV.pdf
│
├── certs
│ ├── comptia-a-plus.pdf
│ ├── comptia-network-plus.pdf
│ ├── comptia-security-plus.pdf
│ └── linux-essentials.pdf
│
└── .github
└── workflows
└── deploy.yml

---

# Features

- Azure-hosted static website
- Certification viewer
- Resume download
- GitHub CI/CD deployment
- Cloud architecture documentation
- Responsive design

---

# Future Improvements

Planned upgrades for the portfolio:

- Azure Functions visitor counter
- Azure Table Storage analytics
- Custom domain
- Infrastructure diagram
- Project showcase cards
- Terraform infrastructure deployment

---

# Author

**Marcus White**  
Cloud & Network Engineering Student  
Western Governors University

GitHub  
https://github.com/Marcus-Wh

LinkedIn  
https://www.linkedin.com/in/marcus-white-8b2030335

---

# License

This project is open source and available for educational purposes.
