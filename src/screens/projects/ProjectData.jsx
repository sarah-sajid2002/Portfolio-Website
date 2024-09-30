// icons
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";

// images
import weatherApp from "./images/weather app .png";
import pass3 from "./images/password generator 3.png";
import calculator from "./images/calculator.png";
import toDoApp from "./images/to do app.png";
import blogging from "./images/blogging .png";
import typingGame from "./images/typing speed game.png";
import bubbleGame from "./images/bubble game.png";

const projectData = [
  {
    id: 0,
    img: weatherApp,
    title: "Weather App",
    description: (
      <ul>
        <li>
          ✔ A responsive and interactive web application for checking the
          current weather of any city worldwide.
        </li>
        <li>✔Fetches real-time weather data from the OpenWeatherMap API.</li>
        <li>
          ✔ Displays detailed weather information, including:
          <ul>
            <li>Temperature</li>
            <li>Weather conditions</li>
            <li>Wind speed</li>
            <li>Additional weather details</li>
          </ul>
        </li>
        <li>
          ✔ Dynamically changes the background based on the weather conditions
          of the queried location.
        </li>
        <li>✔Enhances user experience with visually engaging elements.</li>
      </ul>
    ),
    technologies: (
      <>
        <FaReact />
        <FaCss3Alt />
        <FaHtml5 />
      </>
    ),
    category: "Web Applications",
    date: "29-Aug-2024",
    hostedUrl: "https://weather-app-using-react-js-tau.vercel.app/",
    githubUrl: "https://github.com/sarah-sajid2002/Weather-App-using-React.js",
  },
  {
    id: 1,
    img: pass3,
    title: "Password Generator",
    description: (
      <span>
        This is a responsive password generator web application built with
        React. It allows users to generate random secure passwords with
        customizable options and offers a clean and interactive UI experience.
        <br />
        <b>Features</b>
        <ul>
          <li>
            ✔ <span className="underline">Responsive Design:</span> Optimized
            for all screen sizes including mobile, tablet, and desktop.
          </li>
          <li>
            ✔ <span className="underline">Password Visibility Toggle:</span>
            Easily switch between hiding and showing the generated password.
          </li>
          <li>
            ✔ <span className="underline"> Password Visibility Toggle: </span>
            Easily switch between hiding and showing the generated password.
          </li>
          <li>
            ✔ <span className="underline"> Random Password Generation:</span>
            Users can automatically generate secure passwords containing
            letters, numbers, and symbols.
          </li>

          <li>
            ✔ <span className="underline"> Interactive UI Elements:</span>
            Includes animated button clicks and eye icons for toggling password
            visibility.
          </li>
          <li>
            ✔ <span className="underline"> Styled with CSS Modules:</span>
            Modular and scoped styling using CSS Modules.
          </li>
        </ul>
      </span>
    ),
    technologies: (
      <>
        <FaReact />
        <FaCss3Alt />
        <FaHtml5 />
      </>
    ),
    category: "Web Applications",
    date: "27-Aug-2024",
    hostedUrl: "https://password-generator-using-react-js-p57p.vercel.app/",
    githubUrl:
      "https://github.com/sarah-sajid2002/password-generator-using-React.js",
  },

  {
    id: 2,
    img: calculator,
    title: "Calculator",
    description: (
      <span>
        This is a simple calculator web application built using React.js. It
        allows users to perform basic arithmetic operations and evaluate
        expressions.
        <br />
        <b>Features</b>
        <ul>
          <li>
            ✔ <span className="underline"> Arithmetic Operations:</span>{" "}
            Perform addition, subtraction, multiplication, and division.
          </li>
          <li>
            ✔ <span className="underline">Clear Functionality:</span>
            Clear the input screen or delete the last entered character.
          </li>
          <li>
            ✔ <span className="underline"> Error Handling: </span>
            Display error messages if an invalid expression is entered.
          </li>
          <li>
            ✔ <span className="underline"> Responsive Design:</span>
            The calculator is responsive and works well on different screen
            sizes.
          </li>
        </ul>
      </span>
    ),
    technologies: (
      <>
        <FaReact />
        <FaCss3Alt />
        <FaHtml5 />
      </>
    ),
    category: "Web Applications",
    date: "27-March-2024",
    hostedUrl: "https://calculator-using-react-js-gamma.vercel.app/",
    githubUrl: "https://github.com/sarah-sajid2002/calculator-using-reactJs",
  },

  {
    id: 3,
    img: toDoApp,
    title: "To DO App",
    description: (
      <ul>
        <li>
          ✔ A task management application allowing users to add, edit, and
          delete tasks.
        </li>
        <li>✔Provides the ability to mark tasks as complete or incomplete.</li>
        <li>✔Stores task data locally in the browser for persistence.</li>
        <li>✔User-friendly interface with clear task categorization.</li>
        <li>✔Responsive design optimized for all screen sizes.</li>
      </ul>
    ),
    technologies: (
      <>
        <FaReact />
        <FaCss3Alt />
        <FaHtml5 />
      </>
    ),
    category: "Web Applications",
    date: "30-Jan-2024",
    hostedUrl: "https://to-do-app-react-js-tau.vercel.app/",
    githubUrl: "https://github.com/sarah-sajid2002/to-do-app-react.js",
  },

  {
    id: 4,
    img: blogging,
    title: "Blogging Application",
    description: (
      <span>
        This blogging platform, built using HTML, CSS, and Firebase, provides a
        seamless user experience for managing personal blogs. The app includes a
        secure login/signup system, ensuring users with the same name cannot
        sign up. Authenticated users can create, edit, and delete posts, update
        their profile information, and change their passwords. Additionally, the
        platform allows visitors to view other users' blogs without the need to
        log in.
        <ul>
          <li>✔ Secure login/signup with unique username validation</li>
          <li>✔ bLOG creation, editing, and deletion</li>
          <li>✔ profile management, including password change</li>
          <li>✔ Public access to blogs without login</li>
        </ul>
      </span>
    ),
    technologies: (
      <>
        <IoLogoFirebase />
        <FaCss3Alt />
        <FaHtml5 />
      </>
    ),
    category: "Web Applications",
    date: "11-Sep-2023",
    hostedUrl: "https://chimerical-croissant-141b60.netlify.app/",
    githubUrl:
      "https://github.com/sarah-sajid2002/blog-application-html-css-js-fireabse",
  },

  {
    id: 5,
    img: typingGame,
    title: "Typing Speed Game",
    description: (
      <ul>
        <li>
          ✔ A typing speed game where the user has to type a given word within
          a limited time.
        </li>
        <li>
          ✔ Players earn +10 points for successfully typing the word before the
          timer runs out.
        </li>
        <li>✔If they fail to type the word in time, the game ends.</li>
        <li>✔Score tracking for each correct word typed.</li>
        <li>✔Tests player's typing speed and accuracy.</li>
      </ul>
    ),
    technologies: (
      <>
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
      </>
    ),
    category: "Games",
    date: "25-Jan-2024",
    hostedUrl: "https://typing-speed-game-using-js.vercel.app/",
    githubUrl: "https://github.com/sarah-sajid2002/Typing-Speed-Game-using-JS",
  },
  {
    id: 6,
    img: bubbleGame,
    title: "Bubble Game",
    description: (
      <ul>
        <li>✔A fun and interactive number matching game.</li>
        <li>
          ✔ Players must click on the bubble that matches the randomly
          generated target number.
        </li>
        <li>
          ✔ For each correct match:
          <ul>
            <li>✔Score increases by +10 points.</li>
          </ul>
        </li>
        <li>
          ✔ For incorrect clicks:
          <ul>
            <li>✔10 points are deducted (if score is above zero).</li>
          </ul>
        </li>
        <li>
          ✔ Bubbles and target numbers change dynamically every few seconds.
        </li>
        <li>✔The game runs for a total of 60 seconds.</li>
        <li>✔Displays the final score when the timer ends.</li>
        <li>
          ✔Tests player's speed, focus, and accuracy under time pressure.
        </li>
      </ul>
    ),
    technologies: (
      <>
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
      </>
    ),
    category: "Games",
    date: "26-Aug-2023",
    hostedUrl: "https://guileless-cobbler-7d7db6.netlify.app/",
    githubUrl:
      "https://github.com/sarah-sajid2002/bubble-game-using-html-css-and-js/tree/main/bubble%20game",
  },
];
export default projectData;
