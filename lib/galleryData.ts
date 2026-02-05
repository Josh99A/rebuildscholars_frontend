export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  program?: string;
  videoType?: "youtube" | "vimeo" | "mp4";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "gla-group",
    type: "image",
    src: "/images/hero-group.jpg",
    title: "Shevolution Boot Camp",
    description: "Students celebrating together after a leadership session.",
    program: "Girls Leadership Accelerator",
  },
  {
    id: "classroom-session",
    type: "image",
    src: "/images/gallery-classroom.jpg",
    title: "Learning Lab",
    description: "Facilitator-led classroom session focused on confidence.",
    program: "Life Skills Education",
  },
  {
    id: "tree-planting",
    type: "image",
    src: "/images/gallery-tree-planting.jpg",
    title: "Tree Growing Day",
    description: "Students holding seedlings for the Green Futures Initiative.",
    program: "Green Futures Initiative",
  },
  {
    id: "outreach-circle",
    type: "image",
    src: "/images/gallery-outreach.jpg",
    title: "Community Outreach",
    description: "Outdoor learning circle with youth advocates.",
    program: "GLA + Community Partners",
  },
  {
    id: "team-photo",
    type: "image",
    src: "/images/gallery-team.jpg",
    title: "Youth Leadership Team",
    description: "Mentors and scholars together after program delivery.",
    program: "Rise Scholars",
  },
  {
    id: "video-session",
    type: "video",
    src: "/videos/gallery-session.mp4",
    thumbnail: "/images/gallery-classroom.jpg",
    title: "Classroom Highlights",
    description: "Short clip from a learning lab session.",
    program: "Life Skills Education",
    videoType: "mp4",
  },
  {
    id: "video-campus",
    type: "video",
    src: "/videos/gallery-campus.mp4",
    thumbnail: "/images/hero-poster.jpg",
    title: "Community Gathering",
    description: "A snapshot of students celebrating together.",
    program: "Girls Leadership Accelerator",
    videoType: "mp4",
  },
];
