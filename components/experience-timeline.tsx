import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export default function ExperienceTimeline() {
  const experiences: Experience[] = [
    {
      title: "Front-End Developer",
      company: "Freelance",
      location: "Argentina",
      period: "Mar 2025 - Present",
      description: [
        "Developed responsive interfaces for e-commerce platforms using React and TypeScript, with a strong focus on UX",
        "Integrated REST APIs to manage products, inventory, and transactions.",
        "Handled global state using Context API and Redux for smooth navigation and performance.",
        "Applied SEO best practices and optimized page load speed.",
        "Created interactive features like search filters, form validations, and dynamic UI components.",
        "Integrated third-party services (payment gateways, shipping APIs, authentication, etc.).",
        "Collaborated in agile environments using Git for version control.",
      ],
    },
    // {
    //   title: "Front-End Developer",
    //   company: "WebSolutions LLC",
    //   location: "Austin, TX",
    //   period: "Mar 2018 - Dec 2020",
    //   description: [
    //     "Developed and maintained multiple client websites using modern JavaScript frameworks",
    //     "Collaborated with designers to implement pixel-perfect UI components",
    //     "Integrated RESTful APIs and implemented state management solutions",
    //   ],
    // },
    // {
    //   title: "Junior Web Developer",
    //   company: "Digital Creations",
    //   location: "Seattle, WA",
    //   period: "Jun 2016 - Feb 2018",
    //   description: [
    //     "Built responsive websites using HTML, CSS, and JavaScript",
    //     "Assisted in the development of WordPress themes and plugins",
    //     "Participated in daily stand-ups and sprint planning meetings",
    //   ],
    // },
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-700"></div>

      {/* Experience items */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 z-10"></div>

            {/* Content */}
            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 text-white">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <div className="flex items-center mt-2 text-purple-400 font-medium">
                  <Briefcase size={16} className="mr-2" />
                  {exp.company}
                </div>
                <div className="flex items-center mt-1 text-gray-300">
                  <MapPin size={16} className="mr-2" />
                  {exp.location}
                </div>
                <div className="flex items-center mt-1 text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
