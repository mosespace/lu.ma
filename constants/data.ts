export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Uncle Moses",
    company: "Desishub",
    role: "Admin",
    verified: true,
    status: "😎Over-Roll",
  },
  {
    id: 2,
    name: "Muke John Baptist",
    company: "Desishub",
    role: "Organizer",
    verified: true,
    status: "🔥Running (30)",
  },
  {
    id: 3,
    name: "Kooza Collinz",
    company: "Desishub",
    role: "Attendee",
    verified: true,
    status: "🎉Attending (12)",
  },
  // {
  //   id: 4,
  //   name: "David Smith",
  //   company: "Innovate Inc.",
  //   role: "Fullstack Developer",
  //   verified: false,
  //   status: "Inactive",
  // },
  // {
  //   id: 5,
  //   name: "Emma Wilson",
  //   company: "TechGuru",
  //   role: "Product Manager",
  //   verified: true,
  //   status: "Active",
  // },
  // {
  //   id: 6,
  //   name: "James Brown",
  //   company: "CodeGenius",
  //   role: "QA Engineer",
  //   verified: false,
  //   status: "Active",
  // },
  // {
  //   id: 7,
  //   name: "Laura White",
  //   company: "SoftWorks",
  //   role: "UX Designer",
  //   verified: true,
  //   status: "Active",
  // },
  // {
  //   id: 8,
  //   name: "Michael Lee",
  //   company: "DevCraft",
  //   role: "DevOps Engineer",
  //   verified: false,
  //   status: "Active",
  // },
  // {
  //   id: 9,
  //   name: "Olivia Green",
  //   company: "WebSolutions",
  //   role: "Frontend Developer",
  //   verified: true,
  //   status: "Active",
  // },
  // {
  //   id: 10,
  //   name: "Robert Taylor",
  //   company: "DataTech",
  //   role: "Data Analyst",
  //   verified: false,
  //   status: "Active",
  // },
];

// export type Employee = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   gender: string;
//   date_of_birth: string; // Consider using a proper date type if possible
//   street: string;
//   city: string;
//   state: string;
//   country: string;
//   zipcode: string;
//   longitude?: number; // Optional field
//   latitude?: number; // Optional field
//   job: string;
//   profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
// };
