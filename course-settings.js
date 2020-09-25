const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2020",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2020",
  tmcCourse: "securing-software-20",
  quizzesId: "d76439f1-f112-402e-9f9c-9c9949db573f",
  progressSections: [
    {
	  name: "Introduction",
	  quizId: "d76439f1-f112-402e-9f9c-9c9949db573f",
    },
	{
	  name: "Securing Software",
	  quizId: "0acfa107-3106-41d9-83a1-afcc10644032",
      tmcCourse: "securing-software-20",
	},
	{
	  name: "Project I",
	  quizId: "dfaed180-236e-4b9a-8e1e-b33160abab9b",
	}
  ],
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
    {
      title: "Installing Python and TMC",
      path: "/installation-guide",
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
	{ title: "Part I", path: "/module-2.1"},
	{ title: "Part II", path: "/module-2.2"},
	{ title: "Part III", path: "/module-2.3"},
	{ title: "Part IV", path: "/module-2.4"},
	{ title: "Part V", path: "/module-2.5"},
	{ title: "Part VI", path: "/module-2.6"},
    { separator: true, title: "Project I" },
	{ title: "Part I", path: "/module-3.1"},

    { separator: true, title: "Advanced Topics", tba: "Feb., 2021" },
	{ title: "Part I", path: "/module-4.1/index", tba: "Feb., 2021"},
	{ title: "Part II", path: "/module-4.2/index", tba: "Feb., 2021"},
	{ title: "Part III", path: "/module-4.3/index", tba: "Feb., 2021"},
	{ title: "Part IV", path: "/module-4.4/index", tba: "Feb., 2021"},
	{ title: "Part V", path: "/module-4.5/index", tba: "Feb., 2021"},
    { separator: true, title: "Project II" },
	{ title: "Part I", path: "/module-5.1/index", tba: "Feb., 2021"},
    { separator: true, title: "CTF" },
	{ title: "Part I", path: "/module-6.1/index", tba: "Feb., 2021"},
  ],
  sidebarFuturePages: [],
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
