const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2025",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2025",
  quizzesId: "da0ff334-487e-4ca1-9860-d768d09856e6",
  progressSections: [
    {
	  name: "Introduction",
	  quizId: "6de8f907-77b0-4584-b4c1-fcdfbb92beea",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":33}],
    },
	{
	  name: "Securing Software",
	  quizId: "a714f344-15d2-47ee-86b9-0cc39cc170fd",
      tmcCourse: "securing-software-25",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":2},{"group":"osa02","progress":0,"n_points":0,"max_points":1},{"group":"osa04","progress":0,"n_points":0,"max_points":8},{"group":"osa05","progress":0,"n_points":0,"max_points":5},{"group":"osa06","progress":0,"n_points":0,"max_points":15}],
	},
	{
	  name: "Project I",
	  quizId: "4842e13a-1557-43d3-8d5b-93c6512142ad",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":1}],
	},
	{
	  name: "Advanced Topics",
	  quizId: "fdb557f9-dce4-445a-aae0-7fc9f1789f16",
      tmcCourse: "cyber-advanced-topics-2025",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":6},{"group":"osa02","progress":0,"n_points":0,"max_points":7},{"group":"osa03","progress":0,"n_points":0,"max_points":11},{"group":"osa04","progress":0,"n_points":0,"max_points":10},{"group":"osa05","progress":0,"n_points":0,"max_points":5}],
	},
	{
	  name: "Project II",
	  quizId: "da0ff334-487e-4ca1-9860-d768d09856e6",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":1}],
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
