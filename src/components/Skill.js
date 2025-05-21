import { useState } from "react";

export default function Skill() {
  const [skill, setSkill] = useState("technical");
  const skills = {
    technical: [
      { name: "Java", prof: 90 },
      { name: "Nodejs", prof: 50 },
      { name: "CSS", prof: 75 },
      { name: "HTML", prof: 90 },
      { name: "C Languague", prof: 95 },
      { name: "Python", prof: 90 },
      { name: "AI", prof: 65 },
      { name: "ML(Machine learning)", prof: 35 },
    ],
    soft: [
      { name: "Communication", prof: 90 },
      { name: "Leadership", prof: 75 },
      { name: "Team Player", prof: 65 },
      { name: "Time management", prof: 50 },
      { name: "Adaptable", prof: 85 },
      { name: "Creativity", prof: 89 },
    ],
  };

  const getproflabel = (prof) => {
    if (prof >= 90) return "Expert";
    if (prof > 75) return "Advanced";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div
      id="skills"
      className="min-h-screen w-full bg-gradient-to-b from-[#ffe4e7] to-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#c40040] via-[#ff0055] to-[#c40040] bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="mt-4 text-xl text-[#c40040] font-medium">
            A comprehensive overview of my technical expertise and professional
            capabilities
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkill("technical")}
            className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
              skill === "technical"
                ? "bg-gradient-to-r from-[#c40040] to-[#ff0055] text-white shadow-md"
                : "text-[#c40040] border border-[#c40040] hover:bg-[#ffe4e7]"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
              skill === "soft"
                ? "bg-gradient-to-r from-[#c40040] to-[#ff0055] text-white shadow-md"
                : "text-[#c40040] border border-[#c40040] hover:bg-[#ffe4e7]"
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[skill].map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#ffe4e7] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#000000]">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-[#c40040]">
                  {getproflabel(skill.prof)}
                </span>
              </div>
              <div className="h-2 bg-[#ffe4e7] rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-[#c40040] to-[#ff0055] rounded-full"
                  style={{ width: `${skill.prof}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-[#000000] font-semibold">
                {skill.prof}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
