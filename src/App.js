import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";

// Container component for consistent layout
const Container = ({ children }) => (
  <div className="min-h-screen flex justify-center items-center bg-[#E0E0E0] p-6"> 
    <div className="w-full max-w-5xl bg-white shadow-lg p-10 rounded-xl border border-gray-400">  
      {children}
    </div>
  </div>
);

// Home Component with permanent expansion state
const Home = () => {
  // Check if we have a saved state in localStorage
  const [isExpanded, setIsExpanded] = useState(() => {
    const savedState = localStorage.getItem('contentExpanded');
    return savedState ? JSON.parse(savedState) : false;
  });

  // Update localStorage when the expansion state changes
  useEffect(() => {
    localStorage.setItem('contentExpanded', JSON.stringify(isExpanded));
  }, [isExpanded]);

  const expandContent = () => {
    setIsExpanded(true);
  };

  return (
    <Container>
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 font-[Gabriola]">Rekula Prudhvi Raj</h1>
        <h2 className="text-3xl text-gray-600 mt-2 font-[Gabriola]">Software Engineer | Cybersecurity & Data Enthusiast</h2>
        
        {/* Only show dropdown toggle button if content is not expanded yet */}
        {!isExpanded && (
          <button 
            onClick={expandContent} 
            className="mt-4 text-gray-600 flex items-center justify-center mx-auto hover:text-gray-900 transition-all"
          >
            <FaChevronDown size={24} />
          </button>
        )}
        
        {/* Content - shown if expanded */}
        {isExpanded && (
          <div className="transition-all duration-300">
            {/* About Me Section with Underline */}
            <div className="mt-8 text-gray-700 font-[Gabriola] text-lg">
              <h3 className="text-3xl font-bold font-[Gabriola] text-center underline">About Me</h3>
              <p className="mt-2">I’m a Python Full-Stack Developer and Computer Science graduate student at Pace University, seeking full-time roles in software developer, cybersecurity and data analyst.

With experience in Cybersecurity, Software Engineering, and Data Analysis, I specialize in building secure, scalable applications, analyzing data for insights, and fortifying systems against threats. Skilled in React.js, Javascript, Python, AWS, and SQL, I thrive on solving complex problems and creating impactful solutions.</p>
            </div>
            
            {/* Education Section with Underline */}
            <div className="mt-8 text-gray-700 font-[Gabriola] text-lg">
  <h3 className="text-3xl font-bold font-[Gabriola] text-center underline">Education</h3>

  <div className="mt-4 flex justify-between w-full">
    <div className="text-left">
      <h4 className="text-2xl font-bold">Masters of Science, Computer Science</h4>
      <p className="text-xl">Pace University, Seidenberg School of Computer Science and Information Systems, New York, NY</p>
    </div>
    <p className="text-lg text-right">Sep 2023 – May 2025</p>
  </div>

  <div className="mt-4 flex justify-between w-full">
    <div className="text-left">
      <h4 className="text-2xl font-bold">Bachelor of Technology, Computer Science</h4>
      <p className="text-xl">KL University Hyderabad, Aziznagar, Telangana, India</p>
    </div>
    <p className="text-lg text-right">Jul 2019 – Apr 2023</p>
  </div>
</div>





            {/* Navigation Links */}
            <div className="mt-6 flex justify-center gap-6 font-[Gabriola] text-xl">
              <Link to="/experience" className="font-bold hover:underline transition-all flex items-center">
                View My Experience <FaExternalLinkAlt className="ml-1" size={16} />
              </Link>
              <Link to="/projects" className="font-bold hover:underline transition-all flex items-center">
                View My Projects <FaExternalLinkAlt className="ml-1" size={16} />
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6 flex justify-center gap-6">
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/prudhvirajrekula/" target="_blank" rel="noreferrer noopener" className="hover:text-blue-600 transition"> <FaLinkedin size={30} />
</a>

              {/* GitHub Icon */}
              <a href="https://github.com/Prudhvirajrekula" target="_blank" className="hover:text-gray-900 transition">
                <FaGithub size={30} />
              </a>

              {/* Email Icon */}
              <a href="mailto:prekula2003@gmail.com" className="hover:text-gray-700 transition">
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

// Projects Component
const Projects = () => {
  return (
    <Container>
      <div className="flex justify-center items-center mb-6">
        <Link to="/" className="text-black text-2xl font-[Gabriola] mr-4">←</Link>
        <h2 className="text-4xl font-bold font-[Gabriola] text-center underline">Personal Projects</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          {
            title: "Knee Osteoarthritis Prediction (Machine Learning & MRI Processing)",
            link: "https://github.com/Prudhvirajrekula/Knee-Osteoarthritis-Prediction-Machine-Learning-MRI-Processing",
            points: [
              "Processed 31,000+ MRI slices to extract cartilage thickness measurements using MATLAB.",  
"Trained MLP and Random Forest models, achieving a 74% ROC area, improving early detection rates.",  
"Developed an automated preprocessing pipeline, reducing manual image processing time by 50%."
            ]
          },
          {
            title: "PawPraise",
            link: "https://github.com/Prudhvirajrekula/PawPraise",
            points: [
              "Designed and implemented an e-commerce platform using MERN stack (MongoDB, React.js, Node.js) with secure authentication (JWT).",  
"Developed an interactive user dashboard with personalized product recommendations based on user preferences.",
"Optimized model performance, reducing prediction time by 30% through efficient data preprocessing and model selection."
            ]
          },
          {
            title: "Flight Management System",
            link: "https://github.com/Prudhvirajrekula/Flight-Management-System",
            points: [
              "Led development of Flight Management System using Python and Tkinter, enhancing flight operations management efficiency by 40%.",

"Implemented CRUD operations and integrated search functionality, reducing data retrieval time by 50%.",

"Successfully managed a database of over 1000 flights and 2000 passenger records, ensuring seamless admin operations."
            ]
          },
          {
            title: "RFID Blocking Application (Python)",
            link: "https://github.com/Prudhvirajrekula/RFID-BlockingApplication",
            points: [
              "Created an RFID Blocking Application that detects and alerts users of unauthorized RFID/NFC scans in real-time, enhancing data protection by 85%.",

"Built the application using Python and the nfcpy library, achieving a 95% success rate in stopping potential skimming attacks.",

"Designed an easy-to-use interface that shows Tag ID information to track potential threats, boosting user awareness by 70%."
            ]
          },
          {
            title: "Credit Card Fraud Detection (Python, Pandas, Scikit-Learn, XGBoost)",
            link: "https://github.com/Prudhvirajrekula/Creditcard-Fraud-Detection",
            points: [
              "Built a fraud detection model using 284,807 transactions with 492 fraud cases from a Kaggle dataset (~0.17% fraud rate).",

"Trained and compared 5 models (Logistic Regression, Decision Tree, Random Forest, XGBoost, HistGradientBoosting) achieving 0.84 F1 and 0.97+ ROC-AUC.",

"Handled extreme class imbalance using SMOTE and improved fraud recall by over 75% while minimizing false positives."
            ]
          },
          {
            title: "Electric Vehicle Data Analysis",
            link: "https://github.com/Prudhvirajrekula/Electric-Vehicle-DataAnalysis",
            points: [
              "Analyzed Electric Vehicle Population Data using Python, achieving a 30% increase in insights on EV adoption trends and distribution.",

"Utilized KeplerGL to create interactive geospatial maps, visualizing EV distribution across Washington with 95% accuracy.",

"Implemented statistical modeling and data visualization techniques to identify key market insights, leading to a 40% improvement in data-driven decision-making."
            ]
          }
        ].map((project, index) => (
          <div key={project.title} className="p-6 border rounded-xl shadow-md bg-white transition hover:bg-gray-100 hover:opacity-80 font-[Gabriola] text-lg">
            <h3 className="text-2xl font-semibold">
              <a href={project.link} target="_blank" className="text-black hover:underline flex items-center">
                {project.title} <FaExternalLinkAlt className="ml-1" size={14} />
              </a>
            </h3>
            <p className="text-gray-600"></p>

            {/* Project Points */}
            <ul className="list-disc ml-6 text-gray-700 font-[Gabriola] text-lg mt-4">
              {project.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

// Experience Component
const Experience = () => (
  <Container>
    <div className="flex justify-center items-center mb-6">
      <Link to="/" className="text-black text-2xl font-[Gabriola] mr-4">←</Link>
      <h2 className="text-4xl font-bold font-[Gabriola] text-center underline">Experience</h2>
    </div>
    
    <div className="border-l-4 border-black pl-4 mb-4">
      <h3 className="text-2xl font-semibold font-[Gabriola]">
        <a href="https://www.skillvertex.com/" target="_blank" className="text-black hover:underline flex items-center">
          Web-Development Internship | Skill-Vertex <FaExternalLinkAlt className="ml-1" size={14} />
        </a>
      </h3>
      <p className="text-gray-600 italic font-[Gabriola]">September 2022 – November 2022</p>
      <ul className="list-disc ml-6 text-gray-700 font-[Gabriola] text-lg">
        <li>Spearheaded the integration of a real-time order tracking feature, resulting in a 15% increase in customer engagement and a 10% reduction in customer support queries.</li>
        <li>Led a team to design and deploy 3 responsive websites using React.js, Node.js, and MongoDB, successfully attracting over 5,000 unique visitors monthly.</li>
        <li>Collaborated with cross-functional teams to implement 5 web design principles, enhancing user experience and functionality, and achieving a 20% increase in user satisfaction.</li>
        <li>Facilitated effective communication between developers and clients, ensuring timely project delivery and maintaining a 100% client approval rate.</li>
        <li>Mentored junior developers, providing guidance and support, which contributed to a 30% improvement in their coding efficiency and overall performance.</li>
      </ul>
    </div>
    
    <div className="border-l-4 border-black pl-4 mb-4">
      <h3 className="text-2xl font-semibold font-[Gabriola]">
        <a href="https://www.paloaltonetworks.com/services/education/academy" target="_blank" className="text-black hover:underline flex items-center">
          Cybersecurity Virtual Internship | Palo Alto Networks <FaExternalLinkAlt className="ml-1" size={14} />
        </a>
      </h3>
      <p className="text-gray-600 italic font-[Gabriola]">October 2021 – December 2021 </p>
      <ul className="list-disc ml-6 text-gray-700 font-[Gabriola] text-lg">
        <li>Led the team to find and fix over 50 cyber threats in 5 virtual settings, reducing security issues by 30%.</li>
        <li>Checked and secured 3 networks by applying 4 key security ideas to protect more than 10 systems.</li>
        <li>Worked closely with a team of 5 to set up strong threat detection, improving the security system by 40%.</li>
        <li>Held regular team meetings to discuss and plan threat responses, ensuring everyone was on the same page.</li>
        <li>Trained and supported team members on cybersecurity practices, boosting team performance and threat response efficiency by 25%.</li>
      </ul>
    </div>

    <div className="border-l-4 border-black pl-4 mb-4">
      <h3 className="text-2xl font-semibold font-[Gabriola]">
        <a href="https://www.skilligence.in/" target="_blank" className="text-black hover:underline flex items-center">
          Ethical Hacking Internship | Skilligence Edtech Pvt Ltd <FaExternalLinkAlt className="ml-1" size={14} />
        </a>
      </h3>
      <p className="text-gray-600 italic font-[Gabriola]">May 2021 – June 2021 </p>
      <ul className="list-disc ml-6 text-gray-700 font-[Gabriola] text-lg">
        <li>Led penetration tests on 4 systems, identifying and fixing 8 vulnerabilities, which improved system security by 50%.</li>
        <li>Developed automated processes for penetration testing and vulnerability scanning, cutting testing time by 35%.</li>
        <li>Worked with the team to identify and resolve SQL injection and XSS vulnerabilities, reducing security risks by 20%.</li>
        <li>Organized and communicated findings in reports, ensuring all team members and stakeholders understood the vulnerabilities and solutions.</li>
        <li>Provided training and support on security best practices, enhancing the team's ability to handle future security challenges.</li>
      </ul>
    </div>
  </Container>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Router>
);

export default App;