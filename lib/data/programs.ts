export type Program = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  duration: string;
  location: string;
  category: "Health" | "Education" | "Climate" | "Innovation";
  focusAreas: string[];
};

export const programs: Program[] = [
  {
    slug: "girls-leadership-accelerator",
    title: "Girls Leadership Accelerator (GLA)",
    summary:
      "Quarterly Shevolution Boot Camps and safe spaces that build SRHR, mental health, and leadership skills.",
    description:
      "GLA equips vulnerable youth, especially girls in rural communities, with accurate SRHR information, menstrual health support, and leadership development. Quarterly Shevolution Boot Camps provide intensive training, while five community safe spaces host mentorship, dialogue, and peer advocacy. Over 2,000 youth (ages 13-25) have been reached with measurable gains in confidence, leadership participation, and wellbeing.",
    duration: "Quarterly boot camps + ongoing safe spaces",
    location: "Rural schools and community sites",
    category: "Health",
    focusAreas: ["SRHR", "Mental Health", "Leadership", "Menstrual Health"],
  },
  {
    slug: "rise-scholars-sponsorship",
    title: "Rise Scholars Sponsorship",
    summary:
      "Scholarships and mentorship that help high-achieving, low-income youth complete secondary or vocational school.",
    description:
      "The Rise Scholars Sponsorship Program supports vulnerable but high-achieving students, especially girls, to transition and complete secondary or vocational education. The team works with local leaders and schools to identify eligible students and track progress. Sponsors provide monthly, quarterly, or annual support that covers tuition, school requirements, and mentorship.",
    duration: "Academic year sponsorship",
    location: "Partner schools in Kumi District",
    category: "Education",
    focusAreas: ["Scholarships", "Mentorship", "Girls' Education"],
  },
  {
    slug: "life-skills-education",
    title: "Life Skills Education (LSE)",
    summary:
      "Art-based, participatory learning that builds leadership, communication, and problem-solving skills.",
    description:
      "Implemented across five partner schools, LSE closes the soft-skills gap through clubs, teacher training, and hands-on resources. Over 1,000 learners, particularly girls, have gained confidence, leadership initiative, and civic responsibility through creative, participatory learning.",
    duration: "School-term implementation",
    location: "Partner rural schools",
    category: "Education",
    focusAreas: ["Leadership", "Soft Skills", "Arts-Based Learning"],
  },
  {
    slug: "green-futures-initiative",
    title: "Green Futures Initiative",
    summary:
      "Youth-led climate action through tree planting, recycling, and environmental advocacy.",
    description:
      "Green Futures builds climate literacy and practical sustainability skills. Youth are trained to grow indigenous trees, manage recycling projects, and lead environmental campaigns as Green Champions. The initiative has planted 1,000+ trees across five partner schools.",
    duration: "Year-round activation",
    location: "Schools and community sites",
    category: "Climate",
    focusAreas: ["Climate Action", "Tree Planting", "Sustainability"],
  },
  {
    slug: "youth-entrepreneurship",
    title: "Youth Entrepreneurship Program (YEP)",
    summary:
      "Financial literacy, digital skills, and entrepreneurship training for rural youth.",
    description:
      "YEP equips young people with budgeting, savings, ICT, and business planning skills. Participants create viable business ideas, engage in innovation challenges, and receive mentorship to launch small ventures. Over 120 youth have graduated and started local enterprises.",
    duration: "Multi-week training cycle",
    location: "Rural communities",
    category: "Innovation",
    focusAreas: ["Entrepreneurship", "Financial Literacy", "Digital Skills"],
  },
];
