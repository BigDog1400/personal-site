import React from "react";
import { FaGithub, FaTelegramPlane, FaTwitter } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex flex-row space-x-10 justify-center">
      <a
        href="https://github.com/BigDog1400 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-3xl text-gray-300 hover:text-white" />
      </a>
      <a
        href="https://twitter.com/log1400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="text-3xl text-gray-300 hover:text-white" />
      </a>
      <a
        href="https://t.me/BigDog1400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane className="text-3xl text-gray-300 hover:text-white" />
      </a>
    </div>
  );
}

export { SocialLinks };
