export interface School {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  studentsCount: number;
  teachersCount: number;
  status: "active" | "inactive";
  createdAt: string;
}

export interface SchoolAdmin {
  id: string;
  name: string;
  email: string;
  phone: string;
  schoolId: string;
  schoolName: string;
  status: "active" | "inactive";
  lastLogin: string;
  createdAt: string;
}

export const mockSchools: School[] = [
  {
    id: "1",
    name: "Springfield Elementary",
    address: "123 Education Lane",
    city: "Springfield",
    phone: "+1 234-567-8901",
    email: "contact@springfield-elementary.edu",
    studentsCount: 450,
    teachersCount: 32,
    status: "active",
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Riverside High School",
    address: "456 Academic Drive",
    city: "Riverside",
    phone: "+1 234-567-8902",
    email: "info@riverside-high.edu",
    studentsCount: 1200,
    teachersCount: 85,
    status: "active",
    createdAt: "2022-08-20",
  },
  {
    id: "3",
    name: "Oak Valley Academy",
    address: "789 Learning Boulevard",
    city: "Oak Valley",
    phone: "+1 234-567-8903",
    email: "admin@oakvalley-academy.edu",
    studentsCount: 680,
    teachersCount: 48,
    status: "active",
    createdAt: "2023-03-10",
  },
  {
    id: "4",
    name: "Sunset Middle School",
    address: "321 Knowledge Street",
    city: "Sunset City",
    phone: "+1 234-567-8904",
    email: "office@sunset-middle.edu",
    studentsCount: 520,
    teachersCount: 38,
    status: "inactive",
    createdAt: "2022-11-05",
  },
  {
    id: "5",
    name: "Mountain View Primary",
    address: "654 Scholar Way",
    city: "Mountain View",
    phone: "+1 234-567-8905",
    email: "hello@mountainview-primary.edu",
    studentsCount: 280,
    teachersCount: 22,
    status: "active",
    createdAt: "2023-06-18",
  },
];

export const mockAdmins: SchoolAdmin[] = [
  {
    id: "1",
    name: "John Anderson",
    email: "j.anderson@springfield-elementary.edu",
    phone: "+1 234-567-1001",
    schoolId: "1",
    schoolName: "Springfield Elementary",
    status: "active",
    lastLogin: "2024-01-15 09:30 AM",
    createdAt: "2023-01-20",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    email: "s.mitchell@riverside-high.edu",
    phone: "+1 234-567-1002",
    schoolId: "2",
    schoolName: "Riverside High School",
    status: "active",
    lastLogin: "2024-01-14 02:15 PM",
    createdAt: "2022-09-01",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "m.chen@oakvalley-academy.edu",
    phone: "+1 234-567-1003",
    schoolId: "3",
    schoolName: "Oak Valley Academy",
    status: "active",
    lastLogin: "2024-01-15 11:45 AM",
    createdAt: "2023-03-15",
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "e.rodriguez@sunset-middle.edu",
    phone: "+1 234-567-1004",
    schoolId: "4",
    schoolName: "Sunset Middle School",
    status: "inactive",
    lastLogin: "2024-01-10 04:20 PM",
    createdAt: "2022-11-10",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@mountainview-primary.edu",
    phone: "+1 234-567-1005",
    schoolId: "5",
    schoolName: "Mountain View Primary",
    status: "active",
    lastLogin: "2024-01-15 08:00 AM",
    createdAt: "2023-06-25",
  },
  {
    id: "6",
    name: "Lisa Thompson",
    email: "l.thompson@riverside-high.edu",
    phone: "+1 234-567-1006",
    schoolId: "2",
    schoolName: "Riverside High School",
    status: "active",
    lastLogin: "2024-01-14 10:30 AM",
    createdAt: "2023-02-14",
  },
];
