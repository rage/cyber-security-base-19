const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2020",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2019",
  tmcCourse: "securing-software-19",
  quizzesId: "d76439f1-f112-402e-9f9c-9c9949db573f",
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
      title: "How to start and pass a course",
      path: "/pass",
    },
    //{
      //title: "Installing Java and NetBeans",
      //path: "/netbeans-installation-guide",
    //},
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Introduction to Cyber Security" },
	{
      title: "Part I",
      path: "/module-1",
	  tba: "[TBD]"
	},
    { separator: true, title: "Securing Software" },
	{ title: "Part I", path: "/module-2.1", tba: "[TBD]"},
	{ title: "Part II", path: "/module-2.2", tba: "[TBD]"},
	{ title: "Part III", path: "/module-2.3", tba: "[TBD]"},
	{ title: "Part IV", path: "/module-2.4", tba: "[TBD]"},
	{ title: "Part V", path: "/module-2.5", tba: "[TBD]"},
	{ title: "Part VI", path: "/module-2.6", tba: "[TBD]"},
    { separator: true, title: "Project I" },
	{ title: "Part I", path: "/module-3.1", tba: "[TBD]"},

    { separator: true, title: "Advanced Topics", tba: "[TBD]" },
	{ title: "Part I", path: "/module-4.1/index", tba: "[TBD]"},
	{ title: "Part II", path: "/module-4.2/index", tba: "[TBD]"},
	{ title: "Part III", path: "/module-4.3/index", tba: "[TBD]"},
	{ title: "Part IV", path: "/module-4.4/index", tba: "[TBD]"},
	{ title: "Part V", path: "/module-4.5/index", tba: "[TBD]"},
    { separator: true, title: "Project II" },
	{ title: "Part I", path: "/module-5.1/index", tba: "[TBD]"},
    { separator: true, title: "CTF" },
	{ title: "Part I", path: "/module-6.1/index", tba: "[TBD]"},
  ],
  sidebarFuturePages: [],
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
