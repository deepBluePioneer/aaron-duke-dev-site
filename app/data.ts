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

type RobloxProject = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type Render = {
  name: string
  image: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

// Empty: blog section is hidden. Add posts here if you show the blog again.
export const BLOG_POSTS: BlogPost[] = []

export const PROJECTS: Project[] = [
  {
    name: "Led a Long Way Down",
    description:
      "Narrative Unity game released on itch.io. Built cutscenes with Timeline, Cinemachine, ragdoll physics, and FABRIK IK. Integrated 100+ voice lines into cinematic sequences.",
    link: "https://attemptingent.itch.io/led-a-long-way-down",
    video:
      "https://player.vimeo.com/video/465663705?badge=0&autopause=0&player_id=0&app_id=58479",
    id: "project1",
  },
  {
    name: "Ceremony",
    description:
      "Narrative-driven Unity game on itch.io. Designed level blockouts for gameplay flow and pacing. Created trailers and handled full cinematic pipeline from storyboard to ship.",
    link: "https://attemptingent.itch.io/ceremony",
    video:
      "https://player.vimeo.com/video/603183676?badge=0&autopause=0&player_id=0&app_id=58479",
    id: "project2",
  },
  {
    name: "Anyone Else But You — Unity Music Video",
    description:
      "Real-time cinematic music video built in Unity for Anthony De La Torre & Lana Condor.",
    link: "#",
    video:
      "https://player.vimeo.com/video/549730225?badge=0&autopause=0&player_id=0&app_id=58479",
    id: "project3",
  },
  {
    name: "Running in the Night — Unity Music Video",
    description:
      "Real-time cinematic music video built in Unity for FM84.",
    link: "#",
    video:
      "https://player.vimeo.com/video/1032041893?badge=0&autopause=0&player_id=0&app_id=58479",
    id: "project4",
  },
]

export const ROBLOX_PROJECTS: RobloxProject[] = [
  {
    name: "Clucky's",
    description:
      "Roblox game built with Lua. Implemented gameplay systems, camera controls, and interactive mechanics.",
    link: "#",
    video:
      "https://player.vimeo.com/video/1068293349?badge=0&autopause=0&player_id=0&app_id=58479",
    id: "roblox1",
  },
  {
    name: "NERF ISLAND",
    description:
      "Official NERF-branded Roblox experience. Collaborated on gameplay systems and interactive mechanics.",
    link: "https://www.roblox.com/games/7085107422/NERF-ISLAND",
    image: "/nerf.webp",
    id: "roblox2",
  },
  {
    name: "Yas Island Tycoon",
    description:
      "Roblox tycoon experience for Yas Island. Built gameplay loops and progression systems.",
    link: "https://www.roblox.com/games/12578829978/Yas-Island-Tycoon",
    image: "/yas.webp",
    id: "roblox3",
  },
  {
    name: "Five Nights at Freddy's: Survival Crew (Cancelled)",
    description:
      "Roblox FNAF experience. Worked on gameplay systems before the project was cancelled during development.",
    link: "#",
    image: "/fnaf.png",
    id: "roblox4",
  },
]

export const RENDERS: Render[] = [
  {
    name: "Rocket Launch — Realtime Render",
    image: "/Render_3.jpg",
    id: "render3",
  },
  {
    name: "Porsche 911 — Realtime Render",
    image: "/Render_1.jpg",
    id: "render1",
  },
  {
    name: "Bugatti Chiron — Realtime Render",
    image: "/Render_2.jpg",
    id: "render2",
  },
]

export const UNITY_PROTOTYPES: string[] = [
  "62azXg4MgRiBGmiJl9",
  "4QF19exMgox1EkwPhp",
  "B037Pvu06EoYc83HTg",
  "yxCWnxVUoUCEFKj7nt",
  "4NlZynnfyzqSFXD57F",
  "1isaXtstWhtg0FDsnM",
  "3GBKeLbKK9plz5EXme",
  "1Ahg8Zxb1DBNV9IxzU",
  "5Yr00YTbOlMohI2YJ1",
  "RN7F2QWlKT2e8AKqSZ",
  "1gdueD6T3Wi7YWm5Gg",
  "XZs8cvnB8pKZTiT1Mu",
  "WQgOUIlXK1PBdVtNt3",
  "kBwkLB7HvuhzQ2s9F5",
  "XfbI336GrEjPh5554Y",
  "XgNET44NAe3iJChfEP",
  "LlEbnTtMLenZXFgvEG",
  "Ynw84d7eV1q5phcM9o",
  "TF6i4bnTfkuHezLQ5Q",
  "RkK7oZhIEbRYjJqLqj",
  "dz7ftoaSso73keNTIC",
  "H4ETZGrsmPa2ZdwZXv",
  "YkydagSAVgNswiK0me",
  "YnTRCQL1DkdkxHbVFm",
  "JU5KEYfINk8BawXSm7",
  "jVTLzEWzGLhtOJfJt2",
  "m3XgQsl8Q4zZdlmwAw",
  "IVnhHXVLasjb2CO0Zz",
  "h2K58jrtwBGyGfOpwu",
  "OgSAI4Ekw0KMUP0FqR",
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Roblox Corporation",
    title: "Concierge Developer Support",
    description:
      "Onboard top developers into the Concierge program and guide them on platform features, best practices, and upcoming releases. Investigate and escalate technical issues while maintaining SLA compliance. Build relationships with the top 500 creators through quarterly consultations.",
    start: "Apr 2025",
    end: "Present",
    link: "https://www.roblox.com",
    id: "work1",
  },
  {
    company: "Black Hills Information Security",
    title: "Roblox Game Developer / WordPress Content Coordinator",
    description:
      "Worked on an unannounced Roblox project before moving to help with their website. Managed updates across multiple web properties with consistent version control. Developed interactive cybersecurity simulations and educational content. Performed QA reviews for accuracy and formatting.",
    start: "Jul 2023",
    end: "Mar 2025",
    link: "https://www.blackhillsinfosec.com",
    id: "work2",
  },
  {
    company: "180 Games LLC / Newscape Studios",
    title: "Roblox Game Programmer",
    description:
      "Implemented in-game camera and control systems from storyboards using Lua. Debugged collision, rendering, and physics issues across engine subsystems. Provided technical analysis to inform gameplay and UX decisions. Collaborated cross-functionally with designers, artists, and producers on delivery timelines.",
    start: "Apr 2021",
    end: "Dec 2023",
    link: "#",
    id: "work3",
  },
  {
    company: "20+ Freelance Clients",
    title: "Unity Developer",
    description:
      "Freelanced with many individual clients on game-related projects, managing milestones, stakeholder communication, and Unity development. Released Led a Long Way Down and Ceremony, developed a multiplayer experience to showcase work for thesis students, and many more.",
    start: "Apr 2017",
    end: "Mar 2022",
    link: "#",
    id: "work4",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/aaron-duke-producer/",
  },
]

export const EMAIL = "aduke.dev@gmail.com"
