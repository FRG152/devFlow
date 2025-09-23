import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconClassName = (name: string) => {
  const normalizedName = name.toLowerCase().replace(/[ .]/g, "").toLowerCase();
  const techMap = {
    javascript: "devicon-javascript-plain",
    react: "devicon-react-original",
    nextjs: "devicon-nextjs-original",
    tailwind: "devicon-tailwindcss-plain",
    typescript: "devicon-typescript-plain",
    node: "devicon-nodejs-plain",
    express: "devicon-express-original",
    mongodb: "devicon-mongodb-plain",
    postgresql: "devicon-postgresql-plain",
    mysql: "devicon-mysql-plain",
    python: "devicon-python-plain",
    java: "devicon-java-plain",
    c: "devicon-c-plain",
    cpp: "devicon-cplusplus-plain",
    ruby: "devicon-ruby-plain",
    php: "devicon-php-plain",
    html: "devicon-html5-plain",
    css: "devicon-css3-plain",
    sql: "devicon-sql-plain",
  };
  return techMap[normalizedName as keyof typeof techMap]
    ? `${techMap[normalizedName as keyof typeof techMap]} colored`
    : "devicon-devicon-plain";
};
