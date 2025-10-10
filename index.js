const PDFDocument = require("pdfkit");
const fs = require("node:fs");

const lang = "es"; // 'es/en'

const sections = require(`./data/${lang}/sections`);
const jobs = require(`./data/${lang}/jobs`);
const professionalAreas = require(`./data/${lang}/professionalAreas`);
const education = require(`./data/${lang}/education`);
const courses = require(`./data/${lang}/courses`);

const initializeConstants = require("./utils/helperFunctions");
const {
  renderHeading,
  renderIntroductionText,
  renderSection,
  renderJob,
  renderArea,
  renderEssentialEducation,
  renderCourses,
  renderContactInformation,
} = require("./utils/renderFunctions");

require("dotenv").config();

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("output.pdf"));

const constants = initializeConstants(doc, lang);

renderHeading(doc, constants);

renderIntroductionText(doc, constants);

doc.moveDown(1.5);
renderSection(doc, constants, sections[0]);

doc.moveDown(0.4);
jobs.forEach((job) => renderJob(doc, constants, job));

doc.moveDown(0.8);
renderSection(doc, constants, sections[1]);

doc.moveDown(0.1);
professionalAreas.forEach((professionalArea) =>
  renderArea(doc, constants, professionalArea, lang)
);

doc.moveDown(1);
renderSection(doc, constants, sections[2]);

doc.moveDown(0.4);
renderEssentialEducation(doc, constants, education, lang);

doc.moveDown(1);
renderSection(doc, constants, sections[3]);

doc.moveDown(0.4);
renderCourses(doc, constants, courses, lang);

doc.moveDown(1);
renderSection(doc, constants, sections[4]);

doc.moveDown(0.6);
renderContactInformation(doc, constants);

doc.end();
