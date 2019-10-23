const courseSettings = {
  language: "en",
  name: "Cyber Security Base 2019-2020",
  siteUrl: "https://cybersecuritybase.mooc.fi",
  subtitle: "a free course series about cyber security",
  slug: "cyber-security-base-2019",
  tmcCourse: "cyber-security-base-2019",
  quizzesId: "38240a7b-7e64-4202-91e2-91f6d46f6198-xx",
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
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Introduction to Cyber Security" },
  ],
  sidebarFuturePages: [], // { title: "Osa 14", tba: "19.4.2019" },
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
