export interface JourneyPoint {
  id: number
  city: string
  state: string
  lat: number
  lng: number
  date: string
  title: string
  description: string
  type: 'education' | 'professional' | 'achievement'
}

export const journeyData: JourneyPoint[] = [
  {
    id: 1,
    city: "Delhi",
    state: "Delhi",
    lat: 28.6139,
    lng: 77.2090,
    date: "May 2021",
    title: "Senior Secondary Education",
    description: "Completed senior secondary education from The Adarsh School, CBSE Board.",
    type: "education"
  },
  {
    id: 2,
    city: "Greater Noida",
    state: "Uttar Pradesh",
    lat: 28.4744,
    lng: 77.5040,
    date: "Sept 2021 - Present",
    title: "BTech in AI & Data Science",
    description: "Pursuing Bachelor's of Technology in Specialization of Artificial Intelligence and Data Science at IIMT College of Engineering (AKTU).",
    type: "education"
  },
  {
    id: 3,
    city: "Delhi",
    state: "Delhi",
    lat: 28.6139,
    lng: 77.2090,
    date: "2021-2022",
    title: "Campus Ambassador",
    description: "Campus Ambassador for DTU Ecell and IIT Kanpur Antaragni fest, handling promotions, planning and conducting events.",
    type: "achievement"
  },
  {
    id: 4,
    city: "Hyderabad",
    state: "Telangana",
    lat: 17.3850,
    lng: 78.4867,
    date: "Feb 2023",
    title: "First Freelance Training",
    description: "Delivered Technical Training on MongoDB to 150+ students at KLH University, Hyderabad.",
    type: "professional"
  },
  {
    id: 5,
    city: "Bengaluru",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    date: "June 2023",
    title: "Azure Training",
    description: "Delivered session on Azure computing resources at Reva University, Bengaluru to 200+ students.",
    type: "professional"
  },
  {
    id: 6,
    city: "Bengaluru",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    date: "Oct 2023",
    title: "PowerBI Workshop",
    description: "Conducted data visualization workshop using PowerBI at Christ University, Bengaluru for 300+ students.",
    type: "professional"
  },
  {
    id: 7,
    city: "Chandigarh",
    state: "Chandigarh",
    lat: 30.7333,
    lng: 76.7794,
    date: "Dec 2023",
    title: "Data Analytics Workshop",
    description: "Delivered 2-day workshop on data analytics and development at Chandigarh University for 500+ students.",
    type: "professional"
  },
  {
    id: 8,
    city: "Coimbatore",
    state: "Tamil Nadu",
    lat: 11.0168,
    lng: 76.9558,
    date: "Feb 2024",
    title: "Django Training",
    description: "Conducted 15-day training on Django framework and web development using Python for 150+ students.",
    type: "professional"
  },
  {
    id: 9,
    city: "Sonepat",
    state: "Haryana",
    lat: 28.9936,
    lng: 77.0151,
    date: "March 2024",
    title: "Python & ML Workshop",
    description: "Delivered 5-day workshop on Python and Machine Learning under IIT Roorkee's student development program at DCRUST University.",
    type: "professional"
  },
  {
    id: 10,
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    lat: 28.6692,
    lng: 77.4538,
    date: "May-June 2024",
    title: "PowerBI & Azure Sessions",
    description: "Took sessions at Jaipuria, Ghaziabad for PowerBI and Azure resources for faculty and PGDM students.",
    type: "professional"
  },
  {
    id: 11,
    city: "Hyderabad",
    state: "Telangana",
    lat: 17.3850,
    lng: 78.4867,
    date: "Aug 2024",
    title: "Team Lead - Technical Training",
    description: "Led a team of 15+ trainers at GNI University, Hyderabad delivering training on Data Structures and OOPs to 250+ students.",
    type: "professional"
  },
  {
    id: 12,
    city: "Bengaluru",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    date: "Oct 2024",
    title: "Azure Computing Lectures",
    description: "Delivered lectures on Azure compute practices at RNSIT University, Bengaluru to 150+ students, leading a team of 10 trainers.",
    type: "professional"
  },
  {
    id: 13,
    city: "Mathura",
    state: "Uttar Pradesh",
    lat: 27.4924,
    lng: 77.6737,
    date: "Nov 2024",
    title: "Cyber Security Training",
    description: "Conducted 5-day training on Cyber Security Analyst domain at GLA University, Mathura.",
    type: "professional"
  },
  {
    id: 14,
    city: "Faridabad",
    state: "Haryana",
    lat: 28.4089,
    lng: 77.3178,
    date: "Jan 2025",
    title: "Azure Services Workshop",
    description: "Delivered 3-week training on Azure Services at Manav Rachna University, Faridabad.",
    type: "professional"
  },
  {
    id: 15,
    city: "Greater Noida",
    state: "Uttar Pradesh",
    lat: 28.4744,
    lng: 77.5040,
    date: "Feb 2025",
    title: "Azure Sessions",
    description: "Delivered Azure sessions to 100+ students at NIU, Greater Noida.",
    type: "professional"
  },
  {
    id: 16,
    city: "Mathura",
    state: "Uttar Pradesh",
    lat: 27.4924,
    lng: 77.6737,
    date: "March 2025",
    title: "DevOps Sessions",
    description: "Returned to GLA University, Mathura to deliver DevOps sessions for students.",
    type: "professional"
  },
  {
    id: 17,
    city: "Warangal",
    state: "Telangana",
    lat: 18.0000,
    lng: 79.5833,
    date: "June 2025",
    title: "BTech Completion",
    description: "Completed BTech degree with final semester exams.",
    type: "education"
  },
  {
    id: 18,
    city: "Vishakhapatnam",
    state: "Andhra Pradesh",
    lat: 17.6868,
    lng: 83.2185,
    date: "June 2025",
    title: "AI for School Students",
    description: "Delivered AI and Computing sessions to school students (9th-12th grade), nurturing curiosity in technology.",
    type: "professional"
  },
  {
    id: 19,
    city: "Kanpur",
    state: "Uttar Pradesh",
    lat: 26.4499,
    lng: 80.3319,
    date: "July-Nov 2025",
    title: "Data Analytics Program",
    description: "Conducted 4-month program on Python for Data Analytics and Tableau for 1000+ students.",
    type: "professional"
  },
  {
    id: 20,
    city: "Chandigarh",
    state: "Chandigarh",
    lat: 30.7333,
    lng: 76.7794,
    date: "Nov 2025",
    title: "Cybersecurity Workshop",
    description: "Delivered workshops on Cybersecurity, Azure, and Cloud Computing at Chandigarh and NIU.",
    type: "professional"
  },
  {
    id: 21,
    city: "Hyderabad",
    state: "Telangana",
    lat: 17.3850,
    lng: 78.4867,
    date: "Dec 2025",
    title: "Advanced Analytics",
    description: "Delivered sessions on Advanced Data Analytics using Databricks, Azure, Data Lake, and Snowflake.",
    type: "professional"
  },
  {
    id: 22,
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    lat: 28.6692,
    lng: 77.4538,
    date: "Feb 2026",
    title: "Data Analytics for Professionals",
    description: "Delivered data analytics sessions to professionals transitioning their careers at Data Mites, Vaishali.",
    type: "professional"
  },
  {
    id: 23,
    city: "Bengaluru",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    date: "March 2026",
    title: "First Full-time Job",
    description: "Joining Carelon Global Solutions LLP as Associate Software Developer.",
    type: "achievement"
  }
]