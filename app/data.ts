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
  description: string
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

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Roblox Corporation",
    title: "Concierge Developer Support",
    description:
      "Onboard developers into the Concierge program with exclusive support channels and company resources. Maintain SLA compliance while investigating and escalating developer issues. Build relationships with top 500 creators through quarterly consultations. Guide developers on platform features, best practices, and upcoming releases.",
    start: "Apr 2025",
    end: "Present",
    link: "https://www.roblox.com",
    id: "work1",
  },
  {
    company: "Black Hills Information Security",
    title: "WordPress Content Coordinator",
    description:
      "Managed updates across multiple WordPress properties with consistent version control. Performed QA reviews to ensure content accuracy and formatting standards. Developed educational content and interactive cybersecurity simulations. Collaborated with SMEs to translate complex security topics into accessible content.",
    start: "Jul 2023",
    end: "Mar 2025",
    link: "https://www.blackhillsinfosec.com",
    id: "work2",
  },
  {
    company: "180 Games LLC / Newscape Studios",
    title: "LUA Programmer",
    description:
      "Implemented in-game camera and control systems from storyboards. Provided technical analysis to inform gameplay and UX decisions. Collaborated with designers, artists, and producers on delivery timelines. Debugged collision, rendering, and physics issues across engine subsystems.",
    start: "Apr 2021",
    end: "Dec 2023",
    link: "#",
    id: "work3",
  },
  {
    company: "20+ Freelance Clients",
    title: "Unity Developer",
    description:
      "Released narrative games 'Led a Long Way Down' and 'Ceremony' on itch.io. Built cutscenes with Timeline, Cinemachine, ragdoll physics, and FABRIK IK. Designed level blockouts to establish gameplay flow and pacing. Created trailers and integrated 100+ voice lines into cinematic sequences.",
    start: "Apr 2017",
    end: "Mar 2022",
    link: "#",
    id: "work4",
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
