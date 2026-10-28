const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outputPath = path.join(__dirname, '../public/Sibil_Sivadasan_Resume.pdf');

// Create document with 0.5 inch (36pt) margins
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 42, right: 42 }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const primaryColor = '#1e293b'; // Charcoal
const accentColor = '#4f46e5';  // Indigo
const subtleColor = '#475569';  // Muted grey
const dividerColor = '#cbd5e1';

// Header
doc.font('Helvetica-Bold').fontSize(22).fillColor(primaryColor).text('SIBIL SIVADASAN', { align: 'center', characterSpacing: 1.5 });
doc.font('Helvetica-Bold').fontSize(11).fillColor(accentColor).text('SOFTWARE TESTER & QA ENGINEER', { align: 'center', characterSpacing: 1 });
doc.moveDown(0.3);

// Contact Info
doc.font('Helvetica').fontSize(9).fillColor(subtleColor)
  .text('sibilsivadas4@gmail.com  |  +91 8848859629  |  Palakkad, Kerala  |  github.com/sibil-sibii', { align: 'center' });

doc.moveDown(0.5);

// Divider Line
function drawSectionHeader(title) {
  doc.moveDown(0.4);
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(primaryColor).text(title.toUpperCase(), { characterSpacing: 0.8 });
  doc.strokeColor(dividerColor).lineWidth(0.8)
    .moveTo(42, doc.y + 2)
    .lineTo(doc.page.width - 42, doc.y + 2)
    .stroke();
  doc.moveDown(0.4);
}

// PROFILE SUMMARY
drawSectionHeader('Profile Summary');
doc.font('Helvetica').fontSize(9).fillColor(subtleColor).lineGap(2)
  .text('Computer Science graduate with knowledge in Manual Testing, Automation Testing, Java, Selenium WebDriver, TestNG, Maven, SQL, JMeter, Postman, Git and GitHub. Skilled in writing and executing test cases. Familiar with SDLC, STLC, Agile methodology and defect tracking using JIRA. Seeking a Software Testing role to apply my skills and gain hands-on industry experience.', {
    align: 'justify'
  });

// TECHNICAL SKILLS
drawSectionHeader('Technical Skills');
const skills = [
  { category: 'Automation Testing', items: 'Playwright with TypeScript, Selenium WebDriver, Core Java (OOPS Concepts), TestNG, Page Object Model (POM), Maven' },
  { category: 'Manual Testing', items: 'Agile Methodology, Defect Life Cycle, STLC, SDLC, Test Case & Scenario Design, Bug Tracking Tool (JIRA), Excel' },
  { category: 'API & Performance', items: 'API Testing - Postman, Performance Testing – JMeter' },
  { category: 'AI Tools & QA', items: 'Antigravity, Claude AI, ChatGPT, Gemini' },
  { category: 'Database & Tools', items: 'SQL, Git and GitHub' }
];

skills.forEach(s => {
  doc.font('Helvetica-Bold').fontSize(8.8).fillColor(primaryColor).text(`•  ${s.category}: `, { continued: true })
     .font('Helvetica').fillColor(subtleColor).text(s.items);
  doc.moveDown(0.15);
});

// PROJECTS
drawSectionHeader('Projects');

// Project 1
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('OrangeHRM Test Automation Framework', { continued: true })
   .font('Helvetica-Bold').fontSize(8.5).fillColor(accentColor).text('  |  TypeScript, Playwright, Anti-Gravity, POM');
doc.font('Helvetica').fontSize(8.5).fillColor(subtleColor).lineGap(1.5)
   .text('• Engineered a comprehensive end-to-end test automation framework using Playwright and TypeScript, implementing the Page Object Model (POM) architecture for scalable UI testing.')
   .text('• Leveraged Anti-Gravity to accelerate test case generation, streamline framework setup, and automate end-to-end execution across key application workflows.')
   .text('• Applied core OOP concepts—including encapsulation and modular class design—to build reusable page components, type-safe models, and maintainable test utilities.')
   .text('• Ensured high test reliability and fast execution by utilizing Playwright\'s auto-waiting capabilities, custom assertions, and asynchronous execution patterns to handle dynamic web elements.');
doc.moveDown(0.3);

// Project 2
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('Automation Testing Practice', { continued: true })
   .font('Helvetica-Bold').fontSize(8.5).fillColor(accentColor).text('  |  Java, Selenium WebDriver, TestNG, Maven, POM');
doc.font('Helvetica').fontSize(8.5).fillColor(subtleColor).lineGap(1.5)
   .text('• Automated web application testing using Java, Selenium WebDriver, TestNG, and Maven with Page Object Model.')
   .text('• Automated and validated various web elements, dynamic alerts, frames, and user interactions with custom testng.xml suites.');
doc.moveDown(0.3);

// Project 3
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('Sauce Demo (Swag Labs) E-Commerce Website', { continued: true })
   .font('Helvetica-Bold').fontSize(8.5).fillColor(accentColor).text('  |  Manual Testing Project');
doc.font('Helvetica').fontSize(8.5).fillColor(subtleColor).lineGap(1.5)
   .text('• Analysed application requirements and designed and executed Test cases based on Functional, Performance, Usability and Compatibility Testing for Login, Product Listing, Cart and Checkout modules.')
   .text('• Identified, logged, and documented defects with severity/priority categorization.');
doc.moveDown(0.3);

// Project 4
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('OBS Automobiles Application', { continued: true })
   .font('Helvetica-Bold').fontSize(8.5).fillColor(accentColor).text('  |  Manual Testing Project');
doc.font('Helvetica').fontSize(8.5).fillColor(subtleColor).lineGap(1.5)
   .text('• Analysed SRS document and prepared test cases for Customer, Service Provider, and Admin Module.')
   .text('• Executed manual test cases for Login and Registration functionalities in the customer Module; performed Smoke, Functional, and UI Testing.');

// EDUCATION & CERTIFICATION
drawSectionHeader('Education & Certification');

// Education
doc.font('Helvetica-Bold').fontSize(9.2).fillColor(primaryColor).text('Bachelor of Computer Application (BCA)', { continued: true })
   .font('Helvetica').fontSize(8.5).fillColor(subtleColor).text('  |  2023 – 2026');
doc.font('Helvetica').fontSize(8.5).fillColor(subtleColor)
   .text('VLB Janakiammal College of Arts and Science — CGPA: 6.93/10');
doc.moveDown(0.25);

// Training
doc.font('Helvetica-Bold').fontSize(9.2).fillColor(primaryColor).text('5-Month Offline Software Testing Course', { continued: true })
   .font('Helvetica').fontSize(8.5).fillColor(subtleColor).text('  |  08/04/2026 – 08/09/2026');
doc.font('Helvetica').fontSize(8.5).fillColor(subtleColor)
   .text('Zoople Technologies, Kochi — Comprehensive hands-on training in Manual & Automation Testing, Selenium, Playwright, Java, JIRA, SQL, Postman, and JMeter.');

doc.end();

writeStream.on('finish', () => {
  console.log('✅ Resume PDF successfully generated at:', outputPath);
});
