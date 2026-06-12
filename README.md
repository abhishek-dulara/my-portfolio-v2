# Portfolio Website - Dulara Abhishek

This is a modern, responsive personal portfolio website developed to showcase my skills, projects, and professional insights. It bridges the gap between hardware engineering and software development, highlighting my work as an IT undergraduate.

## Tech Stack
*   **Frontend:** React (Vite), Tailwind CSS
*   **Headless CMS:** Sanity.io (for dynamic content management)
*   **Deployment:** Vercel

## Key Features
*   **Dynamic Project Gallery:** Fetches project data directly from Sanity CMS, categorized into 'University Projects' and 'Additional Projects'.
*   **LinkedIn Insights:** Automatically displays recent professional updates and posts from LinkedIn via Sanity.
*   **Modern UI:** Built with a glassmorphism design approach using Tailwind CSS.
*   **Responsive Design:** Fully optimized for different screen sizes, from mobile to desktop.
*   **Easy Content Management:** Uses Sanity Studio to update projects, technical descriptions, and professional posts without touching the source code.

## Project Structure
*   `src/components/`: Contains modular React components (Hero, About, Projects, Skills, Insights, etc.).
*   `src/assets/`: Stores static assets like personal photos.
*   `sanity/`: Contains the Sanity Studio configuration and schema definitions (`project.js`, `post.js`, etc.).
*   `App.jsx`: The main entry point that assembles all page sections.

## Installation & Running Locally
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```


## Purpose
This portfolio serves as a digital professional identity for interviewers and potential collaborators to understand my technical breadth in IoT, Robotics, and Web Development.
