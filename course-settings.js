const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2022",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2020",
  quizzesId: "d76439f1-f112-402e-9f9c-9c9949db573f",
  progressSections: [
    {
	  name: "Introduction",
	  quizId: "4e779897-4d93-4d76-8d8a-6f52aa95b4e6",
    },
	{
	  name: "Securing Software",
	  quizId: "5fb39fe4-4e6a-469a-ac6d-9681bb938a24",
      tmcCourse: "securing-software-21",
	},
	{
	  name: "Project I",
	  quizId: "64ee692f-fcbd-45ac-a9f0-dfc4ca55d96c",
	},
	{
	  name: "Advanced Topics",
	  quizId: "3dc7aebf-09b4-46b4-bea9-17b34285b859",
      tmcCourse: "cyber-advanced-topics-2021",
	},
	{
	  name: "Project II",
	  quizId: "c4a57b93-10d2-4558-a9a9-08f989559ad1",
	},
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
      title: "How to write and review essays",
      path: "/rubric",
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

    { separator: true, title: "Advanced Topics"},
	{ title: "Part I", path: "/module-4.1"},
	{ title: "Part II", path: "/module-4.2"},
	{ title: "Part III", path: "/module-4.3"},
	{ title: "Part IV", path: "/module-4.4"},
	{ title: "Part V", path: "/module-4.5"},
    { separator: true, title: "Project II" },
	{ title: "Part I", path: "/module-5.1/index"},
    { separator: true, title: "CTF" },
	{ title: "Part I", path: "/module-6.1/index"},
  ],
  sidebarFuturePages: [],
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
