const headerTemplate = `
            <img src="images/smiley.gif" alt="logo" class="logo" />
            <h1>Welcome to my webpage!</h1>
            <img src="images/smiley.gif" alt="logo" class="logo" />
        `;

// Initialize header
const headerBanner = document.getElementById("header-banner");
headerBanner.innerHTML = headerTemplate;

// Music section template
const musicTemplate = `
            <div class="music-section">
                <h2>Check Out My <a href="{{link}}" target="_blank">Music</a> on SoundCloud here!</h2>
                <img class="logo2" src="images/internet.gif" alt="music" class="music" />
            </div>
        `;

// Render music section
const musicDiv = document.getElementById("output");
const musicData = { link: "https://soundcloud.com/dreaddybear" };
const renderedMusic = Mustache.render(musicTemplate, musicData);
musicDiv.innerHTML = renderedMusic;

// Courses template
const courseTemplate = `
            <h2 class="course-title">My Courses</h2>
            <ul>
                {{#data}}
                <li>Course: {{class}}, Professor: {{professor}}</li>
                {{/data}}
            </ul>
        `;

// Fetch and render course data
const courseDiv = document.getElementById("output-courses");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const rendered = Mustache.render(courseTemplate, { data: data });
    courseDiv.innerHTML = rendered;
  })
  .catch((error) => {
    console.error("Error:", error);
    courseDiv.innerHTML = "<p>Error loading courses</p>";
  });
