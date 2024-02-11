const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2024",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2024",
  quizzesId: "d76439f1-f112-402e-9f9c-9c9949db573f",
  progressSections: [
    {
	  name: "Introduction",
	  quizId: "d2266ed9-f2b5-4199-b2eb-a91ae7ada0e0",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":33}],
    },
	{
	  name: "Securing Software",
	  quizId: "2d7555dd-21b9-4647-9e11-2f350fee2108",
      tmcCourse: "securing-software-24",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":2},{"group":"osa02","progress":0,"n_points":0,"max_points":1},{"group":"osa04","progress":0,"n_points":0,"max_points":8},{"group":"osa05","progress":0,"n_points":0,"max_points":5},{"group":"osa06","progress":0,"n_points":0,"max_points":15}],
	},
	{
	  name: "Project I",
	  quizId: "f1b804aa-7bf9-409e-ab77-fc2a259b2661",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":1}],
	},
	{
	  name: "Advanced Topics",
	  quizId: "8e404ef5-0201-4f28-950c-c6b6586ec0c6",
      tmcCourse: "cyber-advanced-topics-2024",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":6},{"group":"osa02","progress":0,"n_points":0,"max_points":7},{"group":"osa03","progress":0,"n_points":0,"max_points":11},{"group":"osa04","progress":0,"n_points":0,"max_points":10},{"group":"osa05","progress":0,"n_points":0,"max_points":5}],
	},
	{
	  name: "Project II",
	  quizId: "2d43c849-cd3d-435b-bf5d-27e841b70a3d",
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
