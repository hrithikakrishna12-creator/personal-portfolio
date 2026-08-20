const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

greetingElement.textContent = greeting;
// =========================================
// CONTACT FORM VALIDATION
// =========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been submitted.";

    contactForm.reset();
});
// =========================================
// JQUERY INTERACTIVE GALLERY
// =========================================

$(document).ready(function () {

    $(".gallery-thumb").on("click", function () {

        const image = $(this).attr("src");
        const title = $(this).data("title");
        const description = $(this).data("description");

        $("#mainGalleryImage").attr("src", image);
        $("#galleryTitle").text(title);
        $("#galleryDescription").text(description);

    });

});
// =========================================
// ARTICLES API - FETCH
// =========================================

async function loadArticles() {

    const articlesContainer =
        document.getElementById("articlesContainer");

    try {

        const response = await fetch(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch articles.");
        }

        const storyIds = await response.json();

        // Get first 5 article IDs
        const firstFiveStories = storyIds.slice(0, 5);

        articlesContainer.innerHTML = "";

        for (const id of firstFiveStories) {

            const storyResponse = await fetch(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );

            if (!storyResponse.ok) {
                continue;
            }

            const story = await storyResponse.json();

            const article = document.createElement("article");

            article.innerHTML = `
                <h3>${story.title}</h3>

                <p>
                    Author: ${story.by || "Unknown"}
                </p>

                <a
                    href="${story.url || "#"}"
                    target="_blank"
                >
                    Read Article
                </a>
            `;

            articlesContainer.appendChild(article);
        }

    } catch (error) {

        articlesContainer.innerHTML = `
            <p>
                Unable to load articles. Please try again later.
            </p>
        `;

        console.error("Article API Error:", error);
    }
}


// Load articles when website opens
loadArticles();


// =========================================
// WEATHER API
// =========================================

document
    .getElementById("weatherButton")
    .addEventListener("click", getWeather);


async function getWeather() {

    const city =
        document.getElementById("cityInput").value.trim();

    const weatherResult =
        document.getElementById("weatherResult");


    if (city === "") {

        weatherResult.innerHTML =
            "<p>Please enter a city name.</p>";

        return;
    }


    weatherResult.innerHTML =
        "<p>Loading weather...</p>";


    try {

        // Find the city's latitude and longitude
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );


        if (!locationResponse.ok) {
            throw new Error("Location search failed.");
        }


        const locationData =
            await locationResponse.json();


        if (
            !locationData.results ||
            locationData.results.length === 0
        ) {

            weatherResult.innerHTML =
                "<p>City not found.</p>";

            return;
        }


        const location =
            locationData.results[0];


        // Get current weather
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
        );


        if (!weatherResponse.ok) {
            throw new Error("Weather request failed.");
        }


        const weatherData =
            await weatherResponse.json();


        const current =
            weatherData.current;


        weatherResult.innerHTML = `

            <h3>
                Weather in ${location.name}
            </h3>

            <p>
                Temperature:
                ${current.temperature_2m} °C
            </p>

            <p>
                Humidity:
                ${current.relative_humidity_2m}%
            </p>

            <p>
                Wind Speed:
                ${current.wind_speed_10m} km/h
            </p>

        `;

    } catch (error) {

        weatherResult.innerHTML = `
            <p>
                Unable to retrieve weather.
                Please try again later.
            </p>
        `;

        console.error("Weather API Error:", error);
    }
}