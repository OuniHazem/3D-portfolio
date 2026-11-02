import { Attijari, Bgroupe, TPR } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    r,
    MySQL,
    powerbi,
    dotnet,
    microsoftexcel,
    dotenv,
    csharp,
    googleanalytics,
    talend,
    tableau,
    cisco , 
    microsoftsqlserver
} from "../assets/icons";

export const skills = [
    {
        imageUrl: powerbi,
        name: "Power BI",
        type: "Data Viz",
    },
    {
        imageUrl: dotnet,
        name: "Dot.Net",
        type: "Frontend",
    },
    {
        imageUrl: microsoftexcel,
        name: "Microsoft excel",
        type: "Spreadsheet",
    },
    {
        imageUrl: dotenv,
        name: ".ENV",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Frontend",
    },
    {
        imageUrl: googleanalytics,
        name: "Googlean Analytics",
        type: "web analytics service",
    },
    {
        imageUrl: talend,
        name: "Talend",
        type: "ETL",
    },
    {
        imageUrl: cisco,
        name: "Cisco Packet Tracer",
        type: "visual simulation tool",
    },
    {
        imageUrl: tableau,
        name: "Tableau",
        type: "Data Viz",
    },
    {
        imageUrl: microsoftsqlserver,
        name: "microsoftsqlserver",
        type: "Data Base",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
   
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Database",
    },
   
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Backend",
    },
   
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Data Analyst (Intern) ",
        company_name: "3B Soft Solutions",
        icon: Bgroupe,
        iconBg: "#accbe1",
        date: "March 2021 - August 2021",
        points: [
            "Developed an online data collection, sorting, and analysis system using Python for web data scraping.",
             "Cleaned and processed data using Python and Excel to ensure information quality.",
             "Used Microsoft SQL Server and Talend for Extraction, Transformation, and Loading (ETL) of data.",
             "Designed dynamic dashboards for data visualization using Power BI.",
             " R for in-depth data exploration, trend detection, and predictive analysis.",
        ],
    },
    
    {
        title: "Export Sales Manager",
        company_name: "Tunisia Aluminum Profiles",
        icon: TPR,
        iconBg: "#b7e4c7",
        date: "July 2022 - July 2023",
        points: [
            "Developed and managed commercial relationships with international clients.",
            "Coordinated the order launch process and closely monitored deliveries.",
            "Utilized the SAGE X3 management system for effective stock and order management.",
            "Adapted to international trade regulations and standards.",
            "Collaborated closely with production and logistics departments to ensure optimal coordination.",
            "Regularly reported commercial performance to the management and proposed strategic improvement",
           
        ],
    },
    {
        title: "Growth Hacker (Intern) ",
        company_name: "Attijari Bank",
        icon:  Attijari,
        iconBg: "#a2d2ff",
        date: "May 2023 - October 2023",
        points: [
            "Implemented a data transformation and analysis process to optimize the growth of an online account opening service for Tunisians living abroad.",
            "Utilized Python for data collection and cleaning, Talend for ETL processes, and MySQL for database creation.",
            "Employed Google Analytics to analyze the conversion funnel.",
            "Developed reports with Power BI to track key performance indicators (KPIs) related to growth and conversion.",
            "Implemented a data-driven growth strategy, adjusting services, marketing, and user experience based on insights generated by data analysis.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hazem-ouni/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Projet1',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: '',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'p2',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: '',
    },
  
];
export const diplomas = [
  {
    name: "Bachelor",
    description: "Bachelor's Degree in Management Information Systems",
  },
  {
    name: "Master",
    description: "Professional Master's Degree in Business Analytics",
  },
 
];
export const certificates = [
  {
    name: " 3B Soft Solutions",
    description: "Data Analyst",
  },

  {
    name: " Attijari Bank",
    description: "Growth Hacker",
  },
 
  {
    name: "TPR",
    description: "Export Sales Manager",
  },
  {
    name: "IHL",
    description: "Certificate",
  },
  {
    name: "Humain Rights",
    description: "Certificate",
  },
];

