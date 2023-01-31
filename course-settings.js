const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2023",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2023",
  quizzesId: "d76439f1-f112-402e-9f9c-9c9949db573f",
  progressSections: [
    {
	  name: "Introduction",
	  quizId: "09100bd9-764c-47ae-8481-543051688008",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":38}],
    },
	{
	  name: "Securing Software",
	  quizId: "50d86c28-2b7c-479d-bf01-2e43062c0875",
      tmcCourse: "securing-software-23",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":2},{"group":"osa02","progress":0,"n_points":0,"max_points":1},{"group":"osa04","progress":0,"n_points":0,"max_points":8},{"group":"osa05","progress":0,"n_points":0,"max_points":5},{"group":"osa06","progress":0,"n_points":0,"max_points":15}],
	},
	{
	  name: "Project I",
	  quizId: "c46d86d0-75c7-4f6f-be8e-7ecc675474fe",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":1}],
	},
	{
	  name: "Advanced Topics",
	  quizId: "b9e72479-04c1-46e2-8bd7-f778d7c8ca5d",
      tmcCourse: "cyber-advanced-topics-2023",
	  defaultResponse: [{"group":"osa01","progress":0,"n_points":0,"max_points":11},{"group":"osa02","progress":0,"n_points":0,"max_points":7},{"group":"osa03","progress":0,"n_points":0,"max_points":11},{"group":"osa04","progress":0,"n_points":0,"max_points":10},{"group":"osa05","progress":0,"n_points":0,"max_points":15}],
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
