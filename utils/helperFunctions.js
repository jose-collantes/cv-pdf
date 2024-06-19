module.exports = function (doc) {
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
  const profession = "Software Developer";
  const introductionText =
    "I'm an aerospace engineer who found a new passion in programming, leveraging seven years of experience crafting solutions \
  using languages like VBA, SQL, Python, and JavaScript. With a keen eye for detail and a commitment to delivering top-notch work, \
  I thrive on solving complex problems with precision. I'm driven by a love for learning and continuously expanding my skill set to tackle challenges head-on.";

  const email = process.env.CV_EMAIL || "random@random.com";
  const phone = process.env.CV_PHONE || "999999999";
  const githubPage = process.env.CV_GITHUB_PAGE || "/random";

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
    githubPage,
  };
};
