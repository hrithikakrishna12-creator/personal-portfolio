# Personal Portfolio Website

## About the Website

This is my personal portfolio website developed as part of the Web Programming Phase 1 and Phase 2 assignments.

The website presents my personal profile, education, technical skills, projects, activities and contact information.

## Website Structure

The website contains the following sections:

- Home
- Profile
- Curriculum Vitae
- Education & Technical Expertise
- Projects
- Activities / Gallery
- My Articles
- Live Weather
- Contact

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- jQuery
- Fetch API
- DEV Community API
- OpenWeatherMap API
- GitHub Pages

## Phase 1 Features

The Phase 1 website includes:

- Semantic HTML5 structure
- Header and navigation
- Personal profile information
- Education and technical skills
- Projects
- Activities / Gallery
- Contact form
- HTML tables
- Responsive CSS design
- Flexbox and CSS Grid
- Mobile responsive layout

## Phase 2 Features

### 1. Dynamic Greeting

JavaScript detects the current time and dynamically displays:

- Good Morning
- Good Afternoon
- Good Evening

The greeting is updated using DOM manipulation with
`getElementById()` and `.textContent`.

### 2. Contact Form Validation

The Contact form is validated using JavaScript.

The following fields are validated:

- Name
- Email
- Message

The form uses `addEventListener()` with the `submit` event.
The page does not reload during validation.

### 3. DOM Manipulation

The website demonstrates DOM access and manipulation using:

- `getElementById()`
- `querySelector()`
- `.textContent`
- `.innerHTML`
- `.style`
- `.value`

### 4. JavaScript Features

The JavaScript implementation demonstrates:

- `let`
- `const`
- Variables
- Conditions
- Arrays
- Objects
- Loops
- Functions
- Arrow functions
- Template literals
- Event handling

Student-written JavaScript is stored in the external:

`js/script.js`

### 5. Interactive jQuery Gallery

An interactive Projects/Activities Gallery was implemented using jQuery.

When a thumbnail is clicked, the main display is dynamically updated with:

- Selected image
- Project/activity title
- Project/activity description

jQuery is used to select elements, handle click events and update the DOM.

### 6. My Articles – DEV Community API

The My Articles section uses JavaScript `fetch()` to retrieve recent articles from the public DEV Community API.

At least five article titles are displayed dynamically as clickable links.

The application also handles errors if the external API request fails.

### 7. Live Weather

A Live Weather section was implemented using the OpenWeatherMap Current Weather API.

The user can enter a city name and click the Get Weather button.

The weather section displays:

- City name
- Temperature in °C
- Weather description
- Weather icon

The results are updated dynamically without reloading the webpage.

### 8. Error Handling

The website handles:

- Invalid city names
- API errors
- Network/request errors

Appropriate error messages are displayed to the user instead of allowing the page to fail.

### 9. API Key Security

The OpenWeatherMap API is used for this educational client-side demonstration.

API keys used in a public client-side project should not be considered secure production secrets.

For a production application, sensitive API credentials should be protected using a server-side backend.

## Responsive Design

The website is responsive and was tested on both desktop and mobile screen sizes.

CSS media queries, Flexbox and CSS Grid are used to adapt the layout to different screen sizes.

## Project Structure

```text
personal-portfolio/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│
└── README.md
