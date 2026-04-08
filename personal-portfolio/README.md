# Personal Portfolio

This is a modern responsive personal portfolio website built using HTML and Tailwind CSS. The portfolio showcases various sections including a hero section, about me, education, skills, projects, achievements, memberships, languages, hobbies, strengths & weaknesses, contact information, and a footer.

## Project Structure

```
personal-portfolio
├── index.html          # Main structure of the portfolio website
├── assets
│   ├── css
│   │   └── styles.css  # Custom CSS styles for enhancements
│   └── js
│       └── script.js   # JavaScript functionality (currently empty)
├── tailwind.config.js  # Tailwind CSS configuration file
└── README.md           # Documentation for the project
```

## Features

- Fully responsive design using Tailwind CSS
- Smooth scrolling for navigation
- Custom styles for enhanced design
- Sections for showcasing personal information and projects

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-portfolio
   ```

3. Install Tailwind CSS:
   ```
   npm install -D tailwindcss
   ```

4. Build the CSS:
   ```
   npx tailwindcss -i ./assets/css/styles.css -o ./dist/output.css --watch
   ```

5. Open `index.html` in your browser to view the portfolio.

## Usage

Feel free to customize the content in `index.html` to reflect your personal information, projects, and skills. You can also modify the `styles.css` file to add any additional styles you desire.

## License

This project is open-source and available under the MIT License.