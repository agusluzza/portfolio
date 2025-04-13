import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import SkillsSection from "@/components/skills-section";
import ExperienceTimeline from "@/components/experience-timeline";
import ContactInfo from "@/components/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Hi, I'm Agustina Luzza</span>
            <span className="text-purple-300">Front-End Developer</span>
            <p className="text-2xl font-medium">
              I'm a frontend developer with experience building web interfaces
              using React, Next.js, TypeScript, JavaScript, Tailwind CSS,
              Firebase, and tools like Git and Figma. I also have knowledge in
              UX/UI design, which allows me to develop functional interfaces
              focused on user experience. I'm open to new job opportunities in
              the frontend field, where I can continue growing professionally
              and contribute value to teams and projects.
            </p>
          </h1>

          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all"
          >
            View My Work <ArrowRight size={18} />
          </Link>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <Link href="#projects" className="animate-bounce inline-block">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section
        id="projects"
        className="py-20 bg-gray-900 text-white border-t border-gray-800"
      >
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-purple-500 pb-2">
              My Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="LevelApp Agency"
              description="A comprehensive dashboard for e-commerce store owners with analytics, inventory management, and order processing."
              technologies={["React", "Next.js", "Tailwind CSS"]}
              imageUrl="/assets/level-app.png"
              demoUrl="https://example.com/demo"
              codeUrl="https://github.com/agusluzza/level-app"
            />
            <ProjectCard
              title="Weather App"
              description="Real-time weather application with location detection, 5-day forecast, and customizable alerts."
              technologies={[
                "JavaScript",
                "React",
                "CSS Modules",
                "Weather API",
              ]}
              imageUrl="/assets/weather-app.png"
              demoUrl="https://example.com/demo"
              codeUrl="https://github.com/agusluzza/weather-app"
            />
            <ProjectCard
              title="Cuidate"
              description="Im Fine :) is an Argentine clothing brand that combines comfort and self-expression through minimalist, bold, and emotionally honest designs."
              technologies={["Figma", "Behance", "Material UI"]}
              imageUrl="/assets/cuidateApp.png"
              demoUrl="https://www.behance.net/gallery/136531401/CuidateApp"
            />
            <ProjectCard
              title="Green House"
              description="Im Fine :) is an Argentine clothing brand that combines comfort and self-expression through minimalist, bold, and emotionally honest designs."
              technologies={["Figma", "Behance", "Material UI"]}
              imageUrl="/assets/green-house.png"
              demoUrl="https://www.behance.net/gallery/139154833/Greenhouse-UI-project"
            />
            <ProjectCard
              title="Master Coin"
              description="Im Fine :) is an Argentine clothing brand that combines comfort and self-expression through minimalist, bold, and emotionally honest designs."
              technologies={["Figma", "Behance", "Material UI"]}
              imageUrl="/assets/master-coin.png"
              demoUrl="https://www.behance.net/gallery/143449223/MasterCoin-CryptoWallet"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-purple-500 pb-2">My Skills</span>
          </h2>
          <SkillsSection />
        </div>
      </section>

      <section
        id="experience"
        className="py-20 bg-gray-900 text-white border-t border-gray-800"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-purple-500 pb-2">
              My Experience
            </span>
          </h2>
          <ExperienceTimeline />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-purple-500 pb-2">
              Get In Touch
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-900 text-white text-center border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p>
            © {new Date().getFullYear()} Agustina Luzza. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
