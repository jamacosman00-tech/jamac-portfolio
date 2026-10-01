import highSchoolCertificate from "../assets/certificates/high-school-certificate.pdf";
import iftiinHubCertificate from "../assets/certificates/iftiin-hub-certificate.pdf";
import englishCertificate from "../assets/certificates/english-test-certificate.pdf";

const certificates = [
  {
    id: "cert-1",
    title: "General Secondary Education Certificate",
    organization: "Amiir Nuur Secondary School",
    date: "June 2024",
    category: "Education",
    description:
      "Official certificate of completion for secondary education, reflecting academic achievement across sciences and mathematics.",
    file: highSchoolCertificate,
  },
  {
    id: "cert-2",
    title: "Full Stack Web Development",
    organization: "Iftiin Hub",
    date: "2026",
    category: "Web Development",
    description:
      "Comprehensive practical training certificate covering full-stack web development with modern JavaScript, React, Node.js, and databases.",
    file: iftiinHubCertificate,
  },
  {
    id: "cert-3",
    title: "English Proficiency Assessment",
    organization: "Language Institute",
    date: "2025",
    category: "Language",
    description:
      "Assessment demonstrating English proficiency in technical reading, writing, and professional communication.",
    file: englishCertificate,
  },
  {
    id: "cert-4",
    title: "National Training Week Participation",
    organization: "Hormuud University",
    date: "2026",
    category: "Technology & AI",
    description:
      "Certificate of participation in university sessions covering artificial intelligence, media verification, cybersecurity, and emerging tech.",
    file: null,
  },
  {
    id: "cert-5",
    title: "Digital Forensics & Incident Response",
    organization: "Hormuud University",
    date: "2026",
    category: "Cybersecurity",
    description:
      "Technical training credentials focusing on digital forensic investigations, log analysis, threat detection, and incident response.",
    file: null,
  },
  {
    id: "cert-6",
    title: "Environmental Club Recognition",
    organization: "Amiir Nuur Secondary School",
    date: "2024",
    category: "Leadership",
    description:
      "Certificate recognizing active participation and student leadership in environmental awareness and campus sustainability projects.",
    file: null,
  },
  {
    id: "cert-7",
    title: "Quran Memorization Certificate",
    organization: "Islamic Studies & Memorization Center",
    date: "2026",
    category: "Personal Achievement",
    description:
      "Certificate recognizing completion of Quran memorization and dedication to disciplined learning.",
    file: null,
  },
];

export default certificates;