function renderHeading(doc, constants) {
  const { margins, width, darkGrey, lightBlue, fullName, profession } =
    constants;

  doc.font("Helvetica-Bold").fontSize(18).fillColor(darkGrey);
  doc.text(fullName, doc.x, margins.top / 5, {
    align: "left",
  });

  doc.fontSize(14).fillColor(lightBlue);
  doc.text(profession, { align: "left" });

  doc.moveDown(0.3);
  doc.rect(0, doc.y, width, 0).stroke();
}

function renderIntroductionText(doc, constants) {
  const { margins, innerWidth, darkGrey, lightGrey, introductionText } =
    constants;

  doc.y = margins.top;

  doc.fontSize(10.5).font("Helvetica");
  const textHeight = doc.heightOfString(introductionText);
  const yTop = doc.y + textHeight;

  doc.rect(margins.left, doc.y, innerWidth, yTop - doc.y + 7).fill(lightGrey);
  doc.fillColor(darkGrey).text(introductionText, margins.left + 5, doc.y + 5, {
    width: innerWidth - 12,
    align: "justify",
  });
}

function renderSection(doc, constants, section) {
  const { margins, innerWidth, lightBlue } = constants;

  doc.font("Helvetica-Bold").fontSize(14).fillColor(lightBlue);
  doc.text(section, margins.left, doc.y);
  doc.rect(margins.left, doc.y, innerWidth, 0).stroke();
}

function renderJob(doc, constants, job) {
  renderExperience(doc, constants, job);
}

function renderArea(doc, constants, area) {
  const { lightBlue, darkGrey } = constants;

  doc.moveDown(0.4);
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(darkGrey);
  doc.text(area.title, { underline: true });

  if (!area.subareas) {
    renderSkillsOrProjects(doc, area);
  } else {
    doc.moveDown(0.1);

    area.subareas.forEach((subarea) => {
      doc.moveDown(0.3);
      doc.font("Helvetica");
      doc
        .fillColor(lightBlue)
        .text(subarea.title, {
          underline: false,
          continued: true,
        })
        .text(":", { underline: false });

      doc.fillColor(darkGrey);
      renderSkillsOrProjects(doc, subarea);
    });
  }
}

function renderEssentialEducation(doc, constants) {
  const education = {
    title: "MSc Aerospace Engineering",
    universities: [
      {
        name: "UNIVERSIDAD POLITÉCNICA DE MADRID",
        period: "(Sep 08 - Nov 15)",
      },
    ],
  };

  renderExperience(doc, constants, education);

  const { darkGrey } = constants;

  doc.moveUp(0.3);
  doc.font("Helvetica-Bold").fillColor(darkGrey).fontSize(10.5);
  doc
    .text("Specialty: ", { continued: true })
    .font("Helvetica")
    .text("A1 - Aircrafts");

  doc.moveDown(0.5);
  doc.font("Helvetica-Bold");
  doc
    .text("Final Project: ", { continued: true })
    .font("Helvetica")
    .text(
      "Unmmaned Aerial Vehicle – MTOW<150 kg. Manufacturing and certifiability assessment. Market research (First class)."
    );
}

function renderCourses(doc, constants, courses) {
  const { darkGrey } = constants;
  doc.font("Helvetica").fontSize(10.5).fillColor(darkGrey);
  renderList(doc, courses);
}

function renderContactInformation(doc, constants) {
  const { margins, email, phone, githubPage } = constants;

  doc.fontSize(10.5).font("Helvetica");
  renderImageAndText(doc, margins, email, "./assets/email-30.png", 0.5, 0, 3.3);
  renderImageAndText(doc, margins, phone, "./assets/phone-30.png", 0.45, 1, 3);
  renderImageAndText(
    doc,
    margins,
    githubPage,
    "./assets/github-30.png",
    0.5,
    0,
    3.3
  );
}

function renderFinalNote(doc, constants) {
  const { margins, darkGrey } = constants;

  doc.fillColor(darkGrey).font("Helvetica-Bold");
  doc
    .text("Note", margins.left, doc.y, {
      underline: true,
      continued: true,
    })
    .font("Helvetica")
    .text(
      ": This CV was created using the npm library @pdfkit. You can find the code on my GitHub page.",
      { underline: false }
    );
}

function renderExperience(doc, constants, experience) {
  let prop;
  if (experience.companies) {
    prop = "companies";
  } else {
    prop = "universities";
  }

  const { margins, lightBlue, darkGrey } = constants;

  doc.moveDown(0.1);
  doc.font("Helvetica-Bold").fontSize(12).fillColor(darkGrey);
  doc.text(experience.title);

  doc.moveDown(0.8);
  doc.fontSize(10).fillColor(lightBlue);

  let y;
  experience[prop].forEach((entity) => {
    if (experience[prop].indexOf(entity) !== 0) doc.moveDown(0.2);
    y = doc.y;
    doc.font("Helvetica-Bold");
    doc.text(entity.name, { baseline: "bottom" });
    doc.font("Helvetica-BoldOblique");
    doc.text(entity.period, margins.left, y, {
      align: "right",
      baseline: "bottom",
    });
  });
}

function renderSkillsOrProjects(doc, area) {
  doc.moveDown(0.3);
  doc.font("Helvetica");

  renderList(doc, [...area.skillsOrProjects]);
}

function renderList(doc, list) {
  doc.list(list, {
    paragraphGap: 5,
    bulletRadius: 2.0,
    align: "justify",
  });
}

function renderImageAndText(
  doc,
  margins,
  text,
  imageURL,
  scale,
  deltaX,
  deltaY
) {
  let y = doc.y;
  doc.text(text, margins.left + 16, doc.y);
  doc.image(imageURL, margins.left + deltaX, y - deltaY, {
    scale,
  });
  doc.moveDown(0.4);
}

module.exports = {
  renderHeading,
  renderIntroductionText,
  renderSection,
  renderJob,
  renderArea,
  renderEssentialEducation,
  renderCourses,
  renderContactInformation,
  renderFinalNote,
};
