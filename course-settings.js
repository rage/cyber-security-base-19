const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2019-2020",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2019",
  tmcCourse: "mooc-securing-software-19",
  quizzesId: "4908eebe-584e-49e0-a580-c0d399c21ec3",
  tmcOrganization: "mooc",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "About the series",
      path: "/",
    },
    {
      title: "Course descriptions and timetable",
      path: "/descriptions",
    },
    {
      title: "Installing Java and NetBeans",
      path: "/netbeans-installation-guide",
    },
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Introduction to Cyber Security" },
	{
      title: "Part I",
      path: "/module-1",
	},
    { separator: true, title: "Securing Software" },
	{ title: "Part I", path: "/module-2.1", },
	{ title: "Part II", path: "/module-2.2", },
	{ title: "Part III", path: "/module-2.3"},
	{ title: "Part IV", path: "/module-2.4"},
	{ title: "Part V", path: "/module-2.5", tba: "25.11.2019"},
	{ title: "Part VI", path: "/module-2.6", tba: "25.11.2019"},
  ],
  sidebarFuturePages: [],
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
