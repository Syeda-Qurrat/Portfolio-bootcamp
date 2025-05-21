import React from "react";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-[#ffe4e7] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-black via-[#c40040] to-[#ff0055] bg-clip-text text-transparent">
            Hi, I'm Syeda Qurrat Ul Ain Hashmi
          </h1>
          <p className="text-xl text-[#6e6e6e] max-w-3xl mx-auto leading-relaxed">
            I am currently pursuing my Bachelor's of Engineering in Computer
            Science and Engineering at Stanley College of Engineering and
            Technology. With a passion for programming and technology, I am
            eager to apply my skills to real-world challenges and contribute to
            innovative solutions. I specialize in Python, Java, and C
            programming, alongside web development technologies, and am
            currently enhancing my skills in Artificial Intelligence and Machine
            Learning.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#c40040] to-[#ff0055] rounded-full blur-xl opacity-30"></div>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-xl relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-[#fff0f2] p-8 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">
            Professional Journey
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto text-[#444]">
            <p className="text-lg">
              I am currently pursuing a Bachelor's in Computer Science and
              Engineering at Stanley College of Engineering and Technology,
              where I’ve developed a strong foundation in programming and web
              development. Throughout my academic journey, I have specialized in
              Python, Java, and C programming, while also exploring web
              technologies like HTML and CSS. My passion for coding is
              complemented by my involvement in various extracurricular
              activities, such as leading a team for the Smart India Hackathon
              and coordinating the Literary Club.
            </p>
            <p className="text-lg">
              As I continue to enhance my technical skills, I’m currently
              interning as a Power Apps Developer at SKM Airconditioning LLC,
              where I am gaining hands-on experience on working with Microsoft
              Power Platform. In addition, I have earned several certifications
              in Artificial Intelligence, Python, and web development, further
              strengthening my expertise. I’m passionate about turning complex
              problems into simple, efficient solutions and constantly seek new
              challenges to grow professionally
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white border border-[#ffccd6] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl text-[#c40040] font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-700">
              Creating beautiful and responsive user interfaces with React, and
              modern CSS frameworks
            </p>
          </div>
          <div className="p-6 bg-white border border-[#ffccd6] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl text-[#ff0055] font-semibold mb-4">
              Java Development
            </h3>
            <p className="text-lg text-gray-700">
              Experienced in building applications using Java, with a solid
              understanding of object-oriented programming.
            </p>
          </div>
          <div className="p-6 bg-white border border-[#ffccd6] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl text-black font-semibold mb-4">
              Artificial Intelligence
            </h3>
            <p className="text-lg text-gray-700">
              Exploring AI concepts including Machine Learning and Generative
              AI, backed by certifications from Microsoft, IBM, and LinkedIn.
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-[#fff0f2] p-8 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-black mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto text-[#444]">
            <div className="space-y-3">
              <h3 className="text-2xl text-[#c40040] font-semibold">
                Tech Community
              </h3>
              <p className="text-lg">
                I actively attend various tech meetups and events, where I
                engage with like-minded professionals and stay updated on the
                latest trends in web development. While I am not a speaker yet,
                I value the opportunity to learn from others, share knowledge,
                and expand my network within the tech community.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-black font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg">
                Always exploring new technologies and methodologies to stay at
                the forefront. I regularly enroll in online courses and
                certifications to deepen my knowledge and keep up with the
                ever-evolving tech landscape.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-[#ff0055] font-semibold">Hobbies</h3>
              <p className="text-lg">
                Outside of coding, I enjoy indulging in a variety of creative
                hobbies. I am passionate about reading, as it allows me to
                explore different perspectives and ideas. Drawing and painting
                are also activities I love, as they provide a therapeutic outlet
                for my creativity. Additionally, I find solace in listening to
                music, which helps me relax and stay inspired.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-black via-[#c40040] to-[#ff0055] p-12 rounded-xl text-white text-center shadow-xl">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#ffe4e7] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
