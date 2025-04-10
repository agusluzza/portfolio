import type React from "react";
import {
  FileJson2,
  DribbbleIcon as BrandReact,
  CodepenIcon as BrandNextjs,
  WindIcon as BrandTailwind,
  TypeIcon as BrandTypescript,
  GitBranchIcon as BrandGit,
  FigmaIcon as BrandFigma,
  SlashIcon as BrandSass,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "JavaScript",
      icon: <FileJson2 className="h-6 w-6 text-purple-600" />,
    },
    {
      name: "React",
      icon: <BrandReact className="h-6 w-6 text-purple-600" />,
    },
    {
      name: "Next.js",
      icon: <BrandNextjs className="h-6 w-6 text-purple-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <BrandTailwind className="h-6 w-6 text-purple-600" />,
    },
    {
      name: "TypeScript",
      icon: <BrandTypescript className="h-6 w-6 text-purple-600" />,
    },
    {
      name: "Git",
      icon: <BrandGit className="h-6 w-6 text-purple-600" />,
    },
    {
      name: "Figma",
      icon: <BrandFigma className="h-6 w-6 text-purple-600" />,
    },
    // {
    //   name: "AWS",
    //   icon: <BrandSass className="h-6 w-6 text-purple-600" />,
    // },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] text-center flex flex-col items-center justify-center border border-gray-700"
        >
          <div className="mb-3 p-3 bg-gray-800 rounded-full">{skill.icon}</div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        </div>
      ))}
    </div>
  );
}
