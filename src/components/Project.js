import React from "react";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Shoulder Press Counter",
      description:
        "A computer vision project that uses OpenCV and MediaPipe to count shoulder press reps in real-time.",
      link: "https://github.com/Syeda-Qurrat/AIML/blob/main/Shoulder_Press_Counter.ipynb",
      technologies: ["Python", "OpenCV", "MediaPipe"],
    },
    {
      id: 2,
      title: "Pet Adoption System",
      description:
        "A Python-based system that helps manage and streamline pet adoption using data structures",
      link: "https://github.com/Syeda-Qurrat/AIML/blob/main/PetAdoption.py",
      technologies: ["Python", "OOP"],
    },
    {
      id: 3,
      title: "Word Scramble Game",
      description:
        "A browser-based word scramble game that challenges users to unscramble letters to form correct words.",
      link: "https://syeda-qurrat.github.io/Web-Development/",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      id: 4,
      title: "Java GUI Calculator",
      description:
        "A desktop calculator built using Java Swing with light/dark theme switching and basic arithmetic functionality.",
      link: "http://github.com/Syeda-Qurrat/Java-GUI-Calculator",
      technologies: ["Java", "Swing", "OOP"],
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-white to-[#ffe4e7] py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#c40040] via-[#ff0055] to-[#000000] bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-[#c40040] font-semibold">
            A showcase of all projects that I have made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg border border-transparent hover:border-[#c40040] hover:shadow-2xl transition-all duration-300 p-5"
            >
              <h2 className="text-2xl font-semibold text-[#000000] mb-5">
                {project.title}
              </h2>
              <p className="text-[#333333] mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 bg-[#ffe4e7] text-[#c40040] rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#c40040] hover:text-[#ff0055] font-semibold transition-all duration-200"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
