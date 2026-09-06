const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2026",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "course series about cyber security",
  slug: "cyber-intro-2026",
  quizzesId: "2dc7f4e3-e6c1-44b1-80cf-a4125a52c47c",
  progressSections: [
    /*{
	  name: "Introduction",
	  quizId: "6de8f907-77b0-4584-b4c1-fcdfbb92beea",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":33}],
    },*/
	{
	  name: "Introduction to Cyber Security: MOOC",
	  quizId: "2dc7f4e3-e6c1-44b1-80cf-a4125a52c47c",
      tmcCourse: "securing-software-26",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":2},{"group":"osa02","progress":0,"n_points":0,"max_points":1},{"group":"osa04","progress":0,"n_points":0,"max_points":3},{"group":"osa05","progress":0,"n_points":0,"max_points":0},{"group":"osa06","progress":0,"n_points":0,"max_points":5}, {"group":"osa07","progress":0,"n_points":0,"max_points":100}],
	},
	/*{
	  name: "Project I",
	  quizId: "2dc7f4e3-e6c1-44b1-80cf-a4125a52c47c",
	  defaultResponse: [{"group":"osa07","progress":0,"n_points":0,"max_points":100}],
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
	},*/
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
      title: "Exam descriptions",
      path: "/exam",
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
      title: "Changes in courses from Autumn 2026",
      path: "/changes",
    },
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Introduction to Cyber Security: Exam" },
	{
      title: "Part I",
      path: "/module-1",
	},
    { separator: true, title: "Introduction to Cyber Security: MOOC" },
	{ title: "Part I", path: "/module-2.1"},
	{ title: "Part II", path: "/module-2.2"},
	{ title: "Part III", path: "/module-2.3"},
	{ title: "Part IV", path: "/module-2.4"},
	{ title: "Part V", path: "/module-2.5"},
	{ title: "Part VI", path: "/module-2.6"},
    //{ separator: true, title: "Project I" },
	{ title: "Part VII", path: "/module-3.1"},
    { separator: true, title: "Question archive of 2025-2026 edition" },
	{ title: "Archive", path: "/archive"},

    /*{ separator: true, title: "Advanced Topics"},
	{ title: "Part I", path: "/module-4.1"},
	{ title: "Part II", path: "/module-4.2"},
	{ title: "Part III", path: "/module-4.3"},
	{ title: "Part IV", path: "/module-4.4"},
	{ title: "Part V", path: "/module-4.5"},
    { separator: true, title: "Project II" },
	{ title: "Part I", path: "/module-5.1/index"},
    { separator: true, title: "CTF" },
	{ title: "Part I", path: "/module-6.1/index"},*/
  ],
  sidebarFuturePages: [],
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
