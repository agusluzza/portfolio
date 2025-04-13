import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  codeUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg bg-gray-900 border-gray-700 text-white flex flex-col justify-between">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-800 text-purple-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end items-center gap-4">
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Button variant="secondary" size="sm">
              <Github size={16} /> Code
            </Button>
          </a>
        )}
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <ExternalLink size={16} /> Live Demo
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
