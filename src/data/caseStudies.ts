export const caseStudiesData = [
  {
    id: "modal-airgas",
    category: "Design Systems, VD & Design Ops",
    year: "2025-Present",
    client: "Air Liquide",
    role: "Design Lead",
    description: "Redesigned, managed and evolved complex UI libraries for a Fortune 500 client, ensuring 100% design-to-dev alignment.",
    title: "Elevating Design Excellence & Ops at Scale",
    images: ["/airgas-1.png", "/airgas-2.png", "/airgas-3.png"],
    relatedCases: [
      { id: "modal-epam", title: "Optimizing the Bench LATAM Design Operations Lifecycle", category: "UX & Design Ops" },
      { id: "modal-expedia", title: "Scaling Growth through Motion & Systems", category: "Travel & AI" },
      { id: "modal-coign", title: "Architecting an Unmissable Experience", category: "Fintech & Visual Design" },
    ],
  },
  {
    id: "modal-epam",
    category: "UX & Design Ops",
    year: "2025",
    client: "EPAM",
    role: "Lead UX Designer",
    description: "I led a strategic discovery initiative to map the end-to-end Epamer Journey, identifying structural bottlenecks and cross-functional dependencies to streamline operations for the LATAM region.",
    title: "Optimizing the Bench LATAM Design Operations Lifecycle",
    images: ["/epam-1.png", "/epam-2.png"],
    relatedCases: [
      { id: "modal-expedia", title: "Scaling Growth through Motion & Systems", category: "Travel & AI" },
      { id: "modal-airgas", title: "Elevating Design Excellence & Ops at Scale", category: "Design Systems, VD & Design Ops" },
      { id: "modal-ekos", title: "Revolutionizing Production Planning at Scale", category: "Production & Data Architecture" },
    ],
  },
  {
    id: "modal-expedia",
    category: "Travel & AI",
    year: "2024-2025",
    client: "Expedia Group",
    role: "Product Designer",
    description: "Leading cross-platform experiences for web and mobile. Contributed to $14.9M GP and 1.48M installs by surpassing annual targets by 148%.",
    title: "Scaling Growth through Motion & Systems",
    images: ["/expedia-1.png", "/expedia-2.png", "/expedia-3.png", "/expedia-4.png", "/expedia-5.png", "/expedia-6.png", "/expedia-7.png", "/expedia-8.png", "/expedia-9.png", "/expedia-10.png", "/expedia-11.png", "/expedia-12.png"],
    relatedCases: [
      { id: "modal-coign", title: "Architecting an Unmissable Experience", category: "Fintech & Visual Design" },
      { id: "modal-epam", title: "Optimizing the Bench LATAM Design Operations Lifecycle", category: "UX & Design Ops" },
      { id: "modal-airgas", title: "Elevating Design Excellence & Ops at Scale", category: "Design Systems, VD & Design Ops" },
    ],
  },
  {
    id: "modal-coign",
    category: "Fintech & Visual Design",
    year: "2023",
    client: "Coign",
    role: "Product Designer",
    description: "Spearheaded a robust Web App that unified applicant management, earning praise from The Wall Street Journal.",
    title: "Architecting an Unmissable Experience",
    images: ["/coign-1.png", "/coign-2.png", "/coign-3.png", "/coign-4.png", "/coign-5.png", "/coign-6.png", "/coign-7.png", "/coign-8.png"],
    relatedCases: [
      { id: "modal-ekos", title: "Revolutionizing Production Planning at Scale", category: "Production & Data Architecture" },
      { id: "modal-expedia", title: "Scaling Growth through Motion & Systems", category: "Travel & AI" },
      { id: "modal-boost", title: "UI Library for B2B payments webapp", category: "Payments & Visual Design" },
    ],
  },
  {
    id: "modal-ekos",
    category: "Production & Data Architecture",
    year: "2022",
    client: "Ekos",
    role: "Product Designer",
    description: "Reduced development time by 20% and increased customer satisfaction by 15% by...",
    title: "Revolutionizing Production Planning at Scale",
    images: ["/ekos-1.png", "/ekos-2.png", "/ekos-3.png", "/ekos-4.png", "/ekos-5.png", "/ekos-6.png", "/ekos-7.png", "/ekos-8.png", "/ekos-9.png"],
    relatedCases: [
      { id: "modal-boost", title: "UI Library for B2B payments webapp", category: "Payments & Visual Design" },
      { id: "modal-coign", title: "Architecting an Unmissable Experience", category: "Fintech & Visual Design" },
      { id: "modal-epam", title: "Optimizing the Bench LATAM Design Operations Lifecycle", category: "UX & Design Ops" },
    ],
  },
  {
    id: "modal-boost",
    category: "Payments & Visual Design",
    year: "2021",
    client: "Boost",
    role: "Visual Designer",
    description: "Conducting an extensive audit and establishing a UI Library proved instrumental for our design team, fostering the ability to suggest and craft consistently cohesive interfaces. This initiative significantly diminished the time and effort invested in each project. The positive impact extended to our development team, who noted appreciable time savings through the reuse of components and streamlining the creation of interfaces we were designing.",
    title: "UI Library for B2B payments webapp",
    images: ["/boost-1.png", "/boost-2.png", "/boost-3.png"],
    relatedCases: [
      { id: "modal-airgas", title: "Elevating Design Excellence & Ops at Scale", category: "Design Systems, VD & Design Ops" },
      { id: "modal-ekos", title: "Revolutionizing Production Planning at Scale", category: "Production & Data Architecture" },
      { id: "modal-expedia", title: "Scaling Growth through Motion & Systems", category: "Travel & AI" },
    ],
  },
];

export const coverMap: Record<string, string[]> = {
  "modal-expedia": ["/expedia-cover-3.png", "/expedia-cover-2.png", "/expedia-cover-1.png"],
  "modal-epam": ["/epam-cover-2.png", "/epam-cover-1.png"],
  "modal-airgas": ["/airgas-cover-3.png", "/airgas-cover-2.png", "/airgas-cover-1.png"],
  "modal-coign": ["/coign-cover-3.png", "/coign-cover-2.png", "/coign-cover-1.png"],
  "modal-ekos": ["/ekos-cover-3.png", "/ekos-cover-2.png", "/ekos-cover-1.png"],
  "modal-boost": ["/boost-cover-2.png", "/boost-cover-1.png"],
};

export const coverClasses = [
  "absolute inset-0 w-full h-full object-contain z-[3] p-3.5 md:p-5 rounded-xl transition-transform duration-300 group-hover/float:-translate-y-3 md:group-hover/float:-translate-y-6 group-hover/float:-translate-x-2 md:group-hover/float:-translate-x-3 group-hover/float:scale-105 group-hover/float:-rotate-12",
  "absolute inset-0 w-full h-full object-contain z-[4] p-3.5 md:p-5 rounded-xl transition-transform duration-300 group-hover/float:-translate-y-1 md:group-hover/float:-translate-y-2 group-hover/float:translate-x-2 md:group-hover/float:translate-x-3 group-hover/float:scale-105 group-hover/float:rotate-12",
  "absolute inset-0 w-full h-full object-contain z-[5] p-3.5 md:p-5 rounded-xl transition-transform duration-300 group-hover/float:-translate-y-2 md:group-hover/float:-translate-y-4 group-hover/float:scale-110 group-hover/float:rotate-3",
];

export const floatingCards = [
  { id: "modal-expedia", title: "Scaling Growth through Motion & Systems", category: "Travel & AI" },
  { id: "modal-epam", title: "Optimizing the Bench LATAM Design Operations Lifecycle", category: "UX & Design Ops" },
  { id: "modal-airgas", title: "Elevating Design Excellence & Ops at Scale", category: "Design Systems & Gas" },
  { id: "modal-coign", title: 'Architecting an "Unmissable" Experience', category: "Fintech UX" },
  { id: "modal-ekos", title: "Revolutionizing Production Planning at Scale", category: "Production UX" },
  { id: "modal-boost", title: "UI Library for B2B payments webapp", category: "Payments UX" },
];