type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

// Empty: blog section is hidden. Add posts here if you show the blog again.
export const BLOG_POSTS: BlogPost[] = []

// Replace with games you've shipped
export const PROJECTS: Project[] = [
  {
    name: "[Your Game Title]",
    description:
      "Took this from concept to launch—worked with design and engineering to lock scope, keep the team unblocked, and get it out the door.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
    id: "project1",
  },
  {
    name: "[Another Game or Partner Project]",
    description:
      "Brought an external partner's game onto our platform. Kept everyone in sync and made sure we hit our standards before go-live.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
    id: "project2",
  },
]

// Add your real roles and links
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "[Your Current or Most Recent Studio]",
    title: "Game Producer",
    start: "20XX",
    end: "Present",
    link: "#",
    id: "work1",
  },
  {
    company: "[Previous Company]",
    title: "Senior Producer",
    start: "20XX",
    end: "20XX",
    link: "#",
    id: "work2",
  },
  {
    company: "[Earlier Role]",
    title: "Associate Producer",
    start: "20XX",
    end: "20XX",
    link: "#",
    id: "work3",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/yourprofile",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/yourhandle",
  },
  {
    label: "GitHub",
    link: "https://github.com/yourhandle",
  },
]

export const EMAIL = "your@email.com"
