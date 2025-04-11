import { Link } from "react-router-dom";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/P3.png";
import P4 from "../assets/P4.png";
import P5 from "../assets/P5.png";
import P6 from "../assets/P6.png";

interface Project {
  id: number;
  image: string;
  title: string;
  github: string;
  description: string;
  features: string[];
  preview: string;
}

const projects: Project[] = [
  // ... your projects array ...
  {
    id: 1,
    image: P4,
    title: "Caratlane Clone",
    description:
      "A clone of CaratLane, an Indian jewelry retailer, offering a range of jewelry products like rings and earrings.",
    features: [
      "Product listings with categories such as rings, bangles, and bracelets.",
      "User authentication for personalized experiences.",
      "Shopping cart and wishlist functionalities.",
      "Admin panel for product management.",
      "Admin panel for product management.",
      "Admin panel for product management.",
      "Admin panel for product management.",
    ],
    github: "#",
    preview: "https://ecom-client-jet.vercel.app/",
  },
  {
    id: 2,
    image: P5,
    title: "JK Photography",
    description:
      "A photography portfolio website showcasing various albums and services offered by JK Photography.",
    features: [
      "Home, About, Services, Albums, and Contact pages.",
      "Gallery displaying photography work.",
      "Contact form for inquiries.",
    ],
    github: "#",
    preview: "https://starlit-gnome-23abdd.netlify.app/",
  },
  {
    id: 3,
    image: P3,
    title: "Google DOC Clone",
    description:
      "A web-based document editor inspired by Google Docs, allowing users to create and edit documents online.",
    features: [
      "Rich text editing with formatting options.",
      "Real-time collaboration with multiple users.",
      "Document saving and retrieval.",
    ],
    github: "https://github.com/vayu02/GDOC-Server/",
    preview: "https://v-gdoc.netlify.app/",
  },
  {
    id: 4,
    image: P2,
    title: "After Movie Research App",
    description:
      "An application designed to assist users in researching movies, providing information and recommendations.",
    features: [
      "Search functionality for movies.",
      "Detailed movie information display.",
      "User reviews and ratings.",
    ],
    github: "https://github.com/vayu02/after-movie-research-app",
    preview: "https://vayu02.github.io/after-movie-research-app/#/",
  },
  {
    id: 5,
    image: P1,
    title: "TIC TAC TOE",
    description:
      "A digital version of the classic Tic Tac Toe game, playable online.",
    features: [
      "Two-player gameplay.",
      "Interactive user interface.",
      "Option to restart the game.",
    ],
    github: "https://github.com/vayu02/tictactoe/",
    preview: "https://v-tictactoe.netlify.app/",
  },
  {
    id: 6,
    image: P6,
    title: "Seat Booking Component",
    description:
      "A component designed for selecting and booking seats, suitable for integration into larger applications.",
    features: [
      "Visual representation of seat layouts.",
      "Selection and booking functionalities.",
      "Real-time availability updates.",
    ],
    github: "https://github.com/vayu02/tictactoe/",
    preview: "https://v-tictactoe.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="p-4 md:p-10">
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mb-6 text-center underline underline-offset-4 font-semibold tracking-wide">
        Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative p-4 md:p-6 lg:p-6 overflow-hidden border-2 border-blue-950 bg-gradient-to-br from-transparent via-blue-950 to-transparent rounded-lg flex flex-col h-[600px]" // Fixed height
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-contain mb-4"
            />
            <div className="flex flex-col flex-grow overflow-hidden">
              <p className="text-[#ccc] font-semibold text-center mb-2">
                {project.title}
              </p>
              <div className="overflow-y-auto pr-2 scrollbar-hide">
                <p className="text-[#ccc] text-sm mb-2">
                  {project.description}
                </p>
                <ul className="text-[#ccc] text-sm mb-2 list-disc list-inside ">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex justify-between">
                {project.id === 1 || project.id === 2 ? (
                  <span className="px-3 md:px-4 lg:px-6 py-2 bg-gray-500 text-[#ccc] rounded cursor-not-allowed opacity-60">
                    Private Repo
                  </span>
                ) : (
                  <Link
                    to={project.github}
                    rel="noreferrer"
                    target="_blank"
                    className="px-3 md:px-4 lg:px-6 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700"
                  >
                    Github
                  </Link>
                )}
                <Link
                  to={project.preview}
                  rel="noreferrer"
                  target="_blank"
                  className="px-3 md:px-4 lg:px-6 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700"
                >
                  Preview
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
