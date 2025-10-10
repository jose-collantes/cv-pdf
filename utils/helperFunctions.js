module.exports = function (doc, lang) {
  const { margins, width } = doc.page;
  const innerWidth = width - margins.left - margins.right;

  const darkGrey = [36, 36, 36];
  const lightGrey = [221, 221, 221];
  const lightBlue = [54, 95, 145];

  const columnWidths = [
    innerWidth / 4,
    (innerWidth * 3) / 10,
    (innerWidth * 9) / 20,
  ];

  const fullName = "José María Collantes Mateos";
  const profession =
    lang === "en" ? "Software Developer" : "Desarrollador de Software";
  const introductionText =
    lang === "en"
      ? "I'm an aerospace engineer who found a new passion in programming, leveraging ten years of experience crafting solutions \
  using languages like VBA, C#, SQL, JavaScript and Python. With a keen eye for detail and a commitment to delivering top-notch work, \
  I thrive on solving complex problems with precision. I'm driven by a love for learning and continuously expanding my skill set to tackle challenges head-on."
      : "Soy un ingeniero aeroespacial que ha encontrado una nueva pasión por la programación, con alrededor de diez años de experiencia creando soluciones \
  con lenguajes como VBA, C#, SQL, JavaScript o Python. Con un gran sentido del detalle y un firme compromiso con la calidad, me apasiona resolver problemas complejos con \
  precisión. Me impulsa la curiosidad y el deseo de seguir ampliando mis habilidades para afrontar nuevos retos con confianza.";

  const email = process.env.CV_EMAIL || "random@random.com";
  const phone = process.env.CV_PHONE || "999999999";
  const webPage = process.env.CV_WEB_PAGE || "https://random.com";
  const githubPage = process.env.CV_GITHUB_PAGE || "/random";
  const linkedinPage = process.env.CV_LINKEDIN_PAGE || "/random";

  return {
    margins,
    width,
    innerWidth,
    darkGrey,
    lightBlue,
    lightGrey,
    columnWidths,
    fullName,
    profession,
    introductionText,
    email,
    phone,
    webPage,
    githubPage,
    linkedinPage,
  };
};
