const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2022",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2021",
  quizzesId: "d76439f1-f112-402e-9f9c-9c9949db573f",
  progressSections: [
    {
	  name: "Introduction",
	  quizId: "aa1ff55b-ac49-4865-8539-2f85b7f8b539",
    },
	{
	  name: "Securing Software",
	  quizId: "5cc5416d-f818-4b78-97b5-c75df32eec86",
      tmcCourse: "securing-software-22",
	},
	{
	  name: "Project I",
	  quizId: "fbd4b277-4c15-4610-bd93-9a6f80ccbea8",
	},
	{
	  name: "Advanced Topics",
	  quizId: "4558716f-fd95-4ba8-8913-b489d243eb89",
      tmcCourse: "cyber-advanced-topics-2022",
	},
	{
	  name: "Project II",
	  quizId: "5f6c0e4d-621a-4907-a17c-896e918c8bad",
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
