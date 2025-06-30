'use client';
import DetailCard from '../components/detailCard';
import {FaCode, FaInfinity, FaWrench} from 'react-icons/fa';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col bg-white dark:bg-gray-800 dark:text-white m-5 mt-10 rounded-[18px] items-start p-5">
        <div className="flex flex-row m-4 mt-10 items-center">
          <h1 className="font-bold text-3xl font-robotoslab">About</h1>
          <div className="bg-gradient-to-r to-pink-500 from-rose-500 dark:to-pink-300 dark:from-rose-300 w-[10rem] h-[0.2rem] rounded-lg ml-6" />
        </div>
        <div className="flex  items-center 2xl:flex-row 2xl:items-center 2xl:justify-around m-4">
          {/* <Image src={HomeImage} alt="Home" className="w-96 lg:w-[30rem]" /> */}
          <p className="font-poppins text-gray-600 dark:text-gray-300 tracking-wider lg:tracking-normal lg:text-lg  text-justify">
          I am a PhD scholar specializing in Natural Language Processing (NLP), with a research focus on cutting-edge techniques and machine learning models for various NLP tasks. In parallel with my academic work, I have strong practical experience in full-stack web development, particularly using the MERN stack. For the front end, I am proficient in HTML, CSS, JavaScript, Bootstrap, and React.js, while on the back end, I work with Node.js and Express.js. I also have experience with databases including MongoDB, MySQL, and SQL Server. I have developed and deployed several projects such as a University Management System, an Online Electronic Repair Service website, and various other mini-projects, showcasing both my technical skills and problem-solving abilities.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="font-medium text-2xl font-poppins mt-5 ml-4 mb-6">
            What I Do!
          </h1>
          <div className="flex flex-col lg:flex-row sm:flex-col lg:justify-start lg:items-start">
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-rose-50 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={<FaCode className="text-red-500 dark:text-red-300" />}
                title="Front-End Development"
                description="I design and develop responsive, user-friendly web applications using modern technologies. On the frontend, I build clean and interactive user interfaces with HTML, CSS, JavaScript, Bootstrap, and React.js, focusing on seamless user experiences across devices. On the backend, I develop robust server-side logic using Node.js and Express.js to ensure high performance, secure APIs, and efficient integration with frontend components. For database management, I work with both relational and NoSQL databases, including MySQL, MongoDB, and SQL Server, handling data modeling, optimization, and secure data operations. Whether it's building complete web solutions, maintaining existing systems, or integrating complex services, I provide end-to-end development support tailored to project needs."
              />
            </div>
         
          </div>
          <div className="flex flex-col lg:flex-row sm:flex-col lg:justify-start lg:items-start">
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-sky-100 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={
                  <FaInfinity className="text-purple-500 dark:text-purple-300" />
                }
                title="Custom Web Solutions"
                description="I specialize in delivering custom web solutions tailored to meet unique business requirements. From initial concept to final deployment, I work closely with clients to understand their goals and translate them into scalable, functional, and visually appealing web applications. Whether it's building a university management system, an e-commerce platform, or a service-based website, I use modern technologies and best practices to ensure performance, security, and user satisfaction. Every solution is crafted to align with the client’s brand, workflow, and future scalability needs."
              />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row sm:flex-col lg:justify-start lg:items-start">
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-rose-50 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={<FaWrench className="text-red-500 dark:text-red-300" />}
                title="Web Maintenance & Support"
                description="Beyond development, I offer ongoing web maintenance and support services to keep websites running smoothly and securely. This includes regular updates, performance optimization, bug fixing, data backups, and compatibility checks to ensure the system remains reliable and up-to-date with evolving technologies. I also provide technical support to quickly address any issues, implement enhancements, and adapt features based on user feedback or changing business needs. My goal is to help clients maintain a strong and stable online presence without disruption."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
