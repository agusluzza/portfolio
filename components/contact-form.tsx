"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-start space-x-4 hover:border-purple-500 transition-colors">
          <div className="bg-gray-900 p-3 rounded-full">
            <Mail className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
            <a
              href="mailto:agusluzza@hotmail.com"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              agusluzza@hotmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-start space-x-4 hover:border-purple-500 transition-colors">
          <div className="bg-gray-900 p-3 rounded-full">
            <Phone className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
            <a
              href="tel:+5491154161595"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              +54 9 11 5416-1595
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-start space-x-4 hover:border-purple-500 transition-colors">
          <div className="bg-gray-900 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
            <p className="text-gray-300">Argentina</p>
          </div>
        </div>

        {/* Availability */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-start space-x-4 hover:border-purple-500 transition-colors">
          <div className="bg-gray-900 p-3 rounded-full">
            <svg
              className="h-6 w-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Availability
            </h3>
            <p className="text-gray-300">Full Time</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          Connect With Me
        </h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/agustina-luzza/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/agusluzza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
