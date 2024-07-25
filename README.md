# CitizenConnect360

**CitizenConnect360** is a full-stack platform designed to bridge the gap between citizens and government officials by providing a comprehensive solution for educating citizens about crucial government documents, reporting incidents, facilitating public participation through polls, and integrating AI for summarizing citizen feedback and identifying critical issues during emergencies.

## Problem Statement

Citizens often lack understanding of important government documents like the Finance Bill, which can lead to uninformed participation and advocacy. There is a need for a platform that enables citizens to express their views, engage in decision-making processes, and efficiently report incidents during emergencies.

## Solution Overview

**CitizenConnect360** aims to:

- Educate citizens about important government documents.
- Enable citizens to report issues and provide feedback.
- Utilize AI to summarize citizen feedback and identify critical areas during emergencies.
- Facilitate public polls for inclusive decision-making.

## Objectives

1. **Citizen Education:** Provide accessible information on government documents.
2. **Incident Reporting:** Allow citizens to report incidents with multimedia support.
3. **Government Interaction:** Enable officials to view incidents, summarize citizen feedback with AI, and identify priority areas.
4. **AI Integration:** Implement AI for automated issue summarization and situational awareness.
5. **Public Participation:** Conduct polls to gauge public opinion and facilitate decision-making.

## Roles

- **Citizen:** Participates in polls, reports incidents, and engages with AI-driven services.
- **Government Official:** Monitors incidents, views citizen feedback, and uses AI for analysis.
- **Admin:** Manages user roles and permissions, ensures platform integrity.

## Frontend Features

- **Authentication:** User registration, login, and password management (including reset links sent via email).
- **User Interface:**
  - Dashboards displaying active polls and incident reports.
  - Incident reporting with multimedia uploads.
  - AI-driven chat for citizen education.
  - View all citizen-submitted views and opinions, and submit new ones.

## Backend Development

- **Endpoints:** Implement CRUD operations for incidents, polls, and user management.
- **Security:** Secure APIs with JWT authentication and role-based access control.
- **Data Management:** Use PostgreSQL or MSSQL for robust data storage and retrieval.

## Background Services

- **Notifications:** Automated emails for password resets, welcome messages, and other alerts.

## Testing and Deployment

- **Testing:** Conduct unit, integration, and end-to-end testing to ensure functionality and reliability.
- **Deployment:** Deploy on AWS or Azure for scalability and accessibility.

## State Management

- **NgRX:** Utilize NgRX for efficient state management in Angular.

## Responsiveness

- **Both Mobile and Desktop:** Ensure the platform is responsive and accessible on various devices.

## Project Management

- **Tools:** Employ Azure DevOps for project management, tracking milestones, and collaboration.

## Documentation

- **Diagrams:** Create and document at least 6 ERD diagrams for database structure and relationships.

## Milestones and Schedule

- **Figma & ERD Diagrams:** Complete by 8th July 2024.
- **Frontend Development:** 8th July - 12th July 2024.
- **Backend & AI Development:** 12th July - 22nd July 2024.
- **Integration:** 22nd July - 25th July 2024.
- **Final Project Presentation:** 25th July 2024.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CitizenConnect360.git
