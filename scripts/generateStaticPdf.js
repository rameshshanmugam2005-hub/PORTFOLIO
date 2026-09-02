import { jsPDF } from "jspdf";
import fs from "fs";

function generate() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 44;
  const contentWidth = pageWidth - margin * 2;

  let y = 48;

  // =========================================================
  // HEADER
  // =========================================================

  doc.setFont("times", "bold");
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);

  doc.text("RAMESH S", pageWidth / 2, y, {
    align: "center"
  });

  y += 20;

  // Contact
  doc.setFont("times", "normal");
  doc.setFontSize(10);

  doc.text(
    "Email: rameshshanmugam2005@gmail.com | Phone: +91 91509 63465",
    pageWidth / 2,
    y,
    { align: "center" }
  );

  y += 15;

  // Links
  doc.setTextColor(26, 13, 171);
  doc.setFontSize(9.5);

  doc.text(
    "LINKEDIN | GITHUB | LEETCODE | TRANSIT AI | PORTFOLIO",
    pageWidth / 2,
    y,
    { align: "center" }
  );

  y += 22;

  // =========================================================
  // SECTION HEADER FUNCTION
  // =========================================================

  const renderSectionHeader = (title) => {
    doc.setFont("times", "bold");
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);

    doc.text(title, margin, y);

    y += 4;

    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.85);

    doc.line(
      margin,
      y,
      pageWidth - margin,
      y
    );

    y += 14;
  };

  // =========================================================
  // CAREER OBJECTIVE
  // =========================================================

  renderSectionHeader("CAREER OBJECTIVE");

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);

  const objectiveText =
    "Computer Science and Engineering student with hands-on experience in frontend development, JavaScript, Java, and AI-powered web applications. Passionate about building responsive, user-centric software solutions. Seeking a Software Development Engineer (SDE) or Frontend Developer role to contribute while continuously enhancing technically Expertised And Recently Explored AIML";

  const objectiveLines = doc.splitTextToSize(
    objectiveText,
    contentWidth
  );

  doc.text(
    objectiveLines,
    margin,
    y
  );

  y += objectiveLines.length * 12.5 + 10;

  // =========================================================
  // TECHNICAL SKILLS
  // =========================================================

  renderSectionHeader("TECHNICAL SKILL");

  doc.setFontSize(9.5);

  const renderSkillRow = (label, value) => {

    doc.setFont("times", "bold");

    doc.text(
      label,
      margin,
      y
    );

    doc.setFont("times", "normal");

    doc.text(
      value,
      margin + 70,
      y
    );

    y += 13.5;
  };

  renderSkillRow(
    "Languages:",
    "Java, SQL"
  );

  renderSkillRow(
    "Web:",
    "HTML5, CSS3, JavaScript"
  );

  renderSkillRow(
    "Tools:",
    "Git, GitHub, VS Code"
  );

  renderSkillRow(
    "Core:",
    "Computer Network and Web Technologies"
  );

  y += 4;

  // =========================================================
  // INTERNSHIP
  // =========================================================

  renderSectionHeader("INTERNSHIP");

  doc.setFont("times", "bold");
  doc.setFontSize(10);

  doc.text(
    "Full Stack Development Intern – Viruzver Solution (Dec 2025 – Jan 2026)",
    margin,
    y
  );

  y += 14;

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);

  const internBullet1 =
    "• Developed responsive cross-browser web pages using HTML, CSS and JavaScript.";

  const internLines1 = doc.splitTextToSize(
    internBullet1,
    contentWidth - 10
  );

  doc.text(
    internLines1,
    margin + 8,
    y
  );

  y += internLines1.length * 12.5 + 2;

  const internBullet2 =
    "• Collaborated on frontend features, debugging, UI improvements and Git-based workflows.";

  const internLines2 = doc.splitTextToSize(
    internBullet2,
    contentWidth - 10
  );

  doc.text(
    internLines2,
    margin + 8,
    y
  );

  y += internLines2.length * 12.5 + 10;

  // =========================================================
  // PROJECT
  // =========================================================

  renderSectionHeader("PROJECT");

  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.setTextColor(26, 13, 171);

  doc.text(
    "TRANSIT AI | RealTime Public Transit & AI Assistant",
    margin,
    y
  );

  y += 14;

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);

  // Project Bullet 1

  const project1 =
    "• Developed a full-stack public transit web application using JavaScript, HTML5, CSS3, Node.js, and Express.js with responsive and interactive interfaces for real-time transit information.";

  const projectLines1 = doc.splitTextToSize(
    project1,
    contentWidth - 10
  );

  doc.text(
    projectLines1,
    margin + 8,
    y
  );

  y += projectLines1.length * 12.5 + 2;

  // Project Bullet 2

  const project2 =
    "• Built and integrated backend APIs for bus telemetry, routes, schedules, passenger occupancy, and congestion data, enabling dynamic frontend-backend communication and real-time data updates.";

  const projectLines2 = doc.splitTextToSize(
    project2,
    contentWidth - 10
  );

  doc.text(
    projectLines2,
    margin + 8,
    y
  );

  y += projectLines2.length * 12.5 + 2;

  // Project Bullet 3

  const project3 =
    "• Implemented AI-powered transit assistance, QR ticket validation, congestion visualization, occupancy monitoring, and bandwidth-efficient polling for practical real-world transit use cases.";

  const projectLines3 = doc.splitTextToSize(
    project3,
    contentWidth - 10
  );

  doc.text(
    projectLines3,
    margin + 8,
    y
  );

  y += projectLines3.length * 12.5 + 4;

  // Key Learning

  doc.setFont("times", "bold");

  doc.text(
    "Key Learning:",
    margin + 8,
    y
  );

  doc.setFont("times", "normal");

  const learning =
    "Strengthened JavaScript and frontend development skills while gaining hands-on experience in Node.js, Express.js, API integration, backend development, real-time data handling, responsive UI design, and full-stack application deployment.";

  const learningLines = doc.splitTextToSize(
    learning,
    contentWidth - 85
  );

  doc.text(
    learningLines,
    margin + 80,
    y
  );

  y += learningLines.length * 12.5 + 10;

  // =========================================================
  // CERTIFICATIONS
  // =========================================================

  renderSectionHeader("CERTIFICATIONS");

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);

  const certifications =
    "Big Data Analytics - NPTEL (2025) || SQL (Basic, Intermediate) || Java (Basics)- HACKER RANK(2026)";

  const certificationLines = doc.splitTextToSize(
    certifications,
    contentWidth
  );

  doc.text(
    certificationLines,
    margin,
    y
  );

  y += certificationLines.length * 12.5 + 8;

  // =========================================================
  // EDUCATION
  // =========================================================

  renderSectionHeader("EDUCATION");

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);

  const education = [
    "B.E. (CSE) | VSB College of Engineering and Technical Campus | CBE | 2023–2027 | CGPA: 8.02",

    "H.S.C. | Siwalik Matric Higher Secondary School | Pollachi | 2022–2023 | 69%",

    "S.S.C. | Siwalik Matric Higher Secondary School | Pollachi | 2020–2021 | 100%"
  ];

  education.forEach((item) => {

    const educationLines = doc.splitTextToSize(
      item,
      contentWidth
    );

    doc.text(
      educationLines,
      margin,
      y
    );

    y += educationLines.length * 12.5 + 2;
  });

  y += 8;

  // =========================================================
  // LEADERSHIP & ACHIEVEMENTS
  // =========================================================

  renderSectionHeader(
    "LEADERSHIP & ACHIEVEMENTS"
  );

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);

  // Achievement 1

  const achievement1 =
    "Built and deployed Transit AI, actively solved problems on LeetCode, and maintained software projects on GitHub.";

  const achievementLines1 = doc.splitTextToSize(
    achievement1,
    contentWidth
  );

  doc.text(
    achievementLines1,
    margin,
    y
  );

  y += achievementLines1.length * 12.5 + 4;

  // Achievement 2

  const achievement2 =
    "Led the college hockey team to a Zonal Championship and Divisional Runner-Up finish, demonstrating strong leadership and strategic planning.";

  const achievementLines2 = doc.splitTextToSize(
    achievement2,
    contentWidth
  );

  doc.text(
    achievementLines2,
    margin,
    y
  );

  y += achievementLines2.length * 12.5 + 4;

  // Achievement 3

  const achievement3 =
    "Also served as College House Team Captain, coordinating and motivating 100+ students through effective team management.";

  const achievementLines3 = doc.splitTextToSize(
    achievement3,
    contentWidth
  );

  doc.text(
    achievementLines3,
    margin,
    y
  );

  // =========================================================
  // GENERATE PDF
  // =========================================================

  const arrayBuffer = doc.output("arraybuffer");

  const buffer = Buffer.from(arrayBuffer);

  // Make sure the public folder exists
  if (!fs.existsSync("public")) {
    fs.mkdirSync("public", {
      recursive: true
    });
  }

  fs.writeFileSync(
    "public/resume.pdf",
    buffer
  );

  fs.writeFileSync(
    "public/Ramesh_S_Resume.pdf",
    buffer
  );

  console.log(
    "Successfully generated public/resume.pdf and public/Ramesh_S_Resume.pdf!"
  );
}

generate();
