export type Program = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  duration: string;
  location: string;
  focusAreas: string[];
};

export const programs: Program[] = [
  {
    slug: "learning-labs",
    title: "Learning Labs",
    summary:
      "After-school academic pods pairing tutoring with project-based learning.",
    description:
      "Learning Labs combine small-group tutoring, hands-on projects, and social-emotional coaching. Students work with dedicated mentors to build confidence, literacy, and STEM curiosity.",
    duration: "12 weeks",
    location: "Brooklyn + virtual",
    focusAreas: ["Literacy", "STEM", "Mentorship"],
  },
  {
    slug: "bridge-summer",
    title: "Bridge Summer",
    summary:
      "Six-week summer intensives focused on recovery and enrichment.",
    description:
      "Bridge Summer keeps momentum by blending core academics with leadership workshops and field experiences. Families receive weekly progress updates and resources.",
    duration: "6 weeks",
    location: "NYC borough sites",
    focusAreas: ["Math", "Science", "Leadership"],
  },
  {
    slug: "family-partnerships",
    title: "Family Partnerships",
    summary:
      "Coaching for caregivers to support learning at home.",
    description:
      "Family Partnerships equips caregivers with learning toolkits, goal-setting sessions, and direct connections to local services. Our team meets families where they are.",
    duration: "Ongoing",
    location: "Community hubs",
    focusAreas: ["Family Support", "Coaching", "Access"],
  },
];

