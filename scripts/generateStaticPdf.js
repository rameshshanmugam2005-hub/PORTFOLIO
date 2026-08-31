import { jsPDF } from "jspdf";
import fs from "fs";

function generate() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 44;
  const contentWidth = pageWidth - margin * 2;
  let y = 48;

  // Title: RAMESH S (Times Bold)
  doc.setFont("times", "bold");
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text("RAMESH S", pageWidth / 2, y, { align: "center" });
  y += 20;

  // Contact Line 1
  doc.setFont("times", "normal");
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("Email: rameshshanmugam2005@gmail.com | Phone: +91 91509 63465", pageWidth / 2, y, { align: "center" });
  y += 15;

  // Contact Line 2 - Links
  doc.setTextColor(26, 13, 171); // Blue link color
  doc.setFontSize(9.5);
  doc.text("LinkedIn: linkedin.com/in/ramesh045 | GitHub: github.com/rameshshanmugam2005 | LeetCode: leetcode.com/u/ramesh045", pageWidth / 2, y, { align: "center" });
  y += 22;

  // Helper for Section Headings
  const renderSectionHeader = (title) => {
    doc.setFont("times", "bold");
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(title, margin, y);
    y += 4;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.85);
    doc.line(margin, y, pageWidth - margin, y);
    y += 14;
  };

  // CAREER OBJECTIVE
  renderSectionHeader("CAREER OBJECTIVE");
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  const objectiveText = "Computer Science and Engineering student with hands-on experience in frontend development, JavaScript, Java, and AI-powered web applications. Passionate about building responsive, user-centric software solutions. Seeking a Software Development Engineer (SDE) or Frontend Developer role to contribute while continuously enhancing technically expertised And Recently Explored AIML";
  const splitObjective = doc.splitTextToSize(objectiveText, contentWidth);
  doc.text(splitObjective, margin, y);
  y += splitObjective.length * 12.5 + 10;

  // TECHNICAL SKILLS
  renderSectionHeader("TECHNICAL SKILL");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  
  const renderSkillRow = (label, value) => {
    doc.setFont("times", "bold");
    doc.text(label, margin, y);
    doc.setFont("times", "normal");
    doc.text(value, margin + 70, y);
    y += 13.5;
  };

  renderSkillRow("Languages:", "Java, SQL");
  renderSkillRow("Web:", "HTML5, CSS3, JavaScript");
  renderSkillRow("Tools:", "Git, GitHub, VS Code");
  renderSkillRow("Core:", "Computer Network and Web Technologies");
  y += 4;

  // INTERNSHIP
  renderSectionHeader("INTERNSHIP");
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("Full Stack Development Intern – Viruzver Solution (Dec 2025 – Jan 2026)", margin, y);
  y += 14;

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  const internBullet1 = doc.splitTextToSize("• Developed responsive cross-browser web pages using HTML, CSS and JavaScript.", contentWidth - 10);
  doc.text(internBullet1, margin + 8, y);
  y += internBullet1.length * 12.5 + 2;

  const internBullet2 = doc.splitTextToSize("• Collaborated on frontend features, debugging, UI improvements and Git-based workflows.", contentWidth - 10);
  doc.text(internBullet2, margin + 8, y);
  y += internBullet2.length * 12.5 + 10;

  // PROJECTS
  renderSectionHeader("PROJECT");
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.setTextColor(26, 13, 171);
  doc.text("TRANSIT AI -RealTime Public Transit & AI Assistant", margin, y);
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.text("| JavaScript, HTML5, CSS3, Node.js, Express.js & API", margin + 265, y);
  y += 14;

  doc.setFontSize(9.5);
  const projBullet1 = doc.splitTextToSize("• Developed a full-stack public transit web application using JavaScript, HTML5, CSS3, Node.js, and Express.js with responsive and interactive interfaces for real-time transit information.", contentWidth - 10);
  doc.text(projBullet1, margin + 8, y);
  y += projBullet1.length * 12.5 + 2;

  const projBullet2 = doc.splitTextToSize("• Built and integrated backend APIs for bus telemetry, routes, schedules, passenger occupancy, and congestion data, enabling dynamic frontend-backend communication and real-time data updates.", contentWidth - 10);
  doc.text(projBullet2, margin + 8, y);
  y += projBullet2.length * 12.5 + 2;

  const projBullet3 = doc.splitTextToSize("• Implemented AI-powered transit assistance, QR ticket validation, congestion visualization, occupancy monitoring, and bandwidth-efficient polling for practical real-world transit use cases.", contentWidth - 10);
  doc.text(projBullet3, margin + 8, y);
  y += projBullet3.length * 12.5 + 4;

  doc.setFont("times", "bold");
  doc.text("Key Learning: ", margin + 8, y);
  doc.setFont("times", "normal");
  const keyLearn = doc.splitTextToSize("Strengthened JavaScript and frontend development skills while gaining hands-on experience in Node.js, Express.js, API integration, backend development, real-time data handling, responsive UI design, and full-stack application deployment.", contentWidth - 85);
  doc.text(keyLearn, margin + 80, y);
  y += keyLearn.length * 12.5 + 10;

  // CERTIFICATIONS
  renderSectionHeader("CERTIFICATIONS");
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  doc.text("Big Data Analytics - NPTEL (2025) || SQL (Basic, Intermediate) || Java (Basics)- HACKER RANK(2026)", margin, y);
  y += 18;

  // EDUCATION
  renderSectionHeader("EDUCATION");
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  doc.text("B.E. (CSE) | VSB College of Engineering and Technical Campus | CBE| 2023–2027 | CGPA: 8.02", margin, y);
  y += 14;
  doc.text("H.S.C. | Siwalik Matric Higher Secondary School | Pollachi | 2022–2023 | 69%", margin, y);
  y += 14;
  doc.text("S.S.C. | Siwalik Matric Higher Secondary School | Pollachi | 2020–2021 | 100%", margin, y);
  y += 18;

  // LEADERSHIP & ACHIEVEMENTS
  renderSectionHeader("LEADERSHIP & ACHIEVEMENTS");
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  const lead1 = doc.splitTextToSize("Built and deployed Transit AI, completed a Full-Stack Development Internship, actively solved problems on LeetCode, and maintained software projects on GitHub.", contentWidth);
  doc.text(lead1, margin, y);
  y += lead1.length * 12.5 + 4;

  const lead2 = doc.splitTextToSize("Led the hockey team to a Zonal Championship and Divisional Runner-Up finish through effective training, tactics, and team coordination. demonstrating leadership, team management, and strategic planning across 100+ students.", contentWidth);
  doc.text(lead2, margin, y);

  const arrayBuffer = doc.output("arraybuffer");
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync("public/resume.pdf", buffer);
  fs.writeFileSync("public/Ramesh_S_Resume.pdf", buffer);
  console.log("Successfully generated public/resume.pdf and public/Ramesh_S_Resume.pdf!");
}

generate();
