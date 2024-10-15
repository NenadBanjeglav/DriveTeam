import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Store,
  Mail,
  HandCoins,
  ShieldQuestion,
  LucideProps,
  Route,
  Book,
  CheckCircle,
  Heart,
  Car,
  ClipboardCheck,
  Ambulance,
  Star,
} from "lucide-react";

interface NavigationProps {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const navbarLinks: NavigationProps[] = [
  {
    name: "Zašto DriveTeam?",
    href: "#about",
    icon: Store,
  },
  {
    name: "Rekli su o nama",
    href: "#testimonials",
    icon: Star,
  },
  {
    name: "Kako do vozačke?",
    href: "#steps",
    icon: Route,
  },
  {
    name: "Paketi",
    href: "#pricing",
    icon: HandCoins,
  },
  {
    name: "Česta Pitanja",
    href: "#faq",
    icon: ShieldQuestion,
  },
  {
    name: "Kontakt",
    href: "#contact",
    icon: Mail,
  },
];

interface StepsProps {
  name: string;
  description: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const processSteps: StepsProps[] = [
  {
    name: "Casovi Teorije",
    description: "Naučite sve što vam treba za uspesnu vožnju.",
    href: "#theory-classes",
    icon: Book,
  },
  {
    name: "Teorijski ispit",
    description: "Pokažite svoje znanje!",
    href: "#theory-exam",
    icon: ClipboardCheck,
  },
  {
    name: "Medicinski pregled",
    description: "Proverite svoje zdravstveno stanje.",
    href: "#medical-pass",
    icon: Heart,
  },
  {
    name: "Časovi vožnje",
    description: "Učenje vožnje sa instruktorom.",
    href: "#driving-classes",
    icon: Car,
  },
  {
    name: "Prva pomoć",
    description: "Naučite kako da pomognete u hitnim situacijama.",
    href: "#first-aid",
    icon: Ambulance,
  },
  {
    name: "Vozacki ispit",
    description: "Pokažite svoje veštine na putu!",
    href: "#driving-test",
    icon: CheckCircle,
  },
];

interface TestimonialsProps {
  name: string;
  review: string;
  rating: number;
}

export const testimonials: TestimonialsProps[] = [
  {
    name: "Nikolai Razguliaev",
    review:
      "Great school, my reccomendations. Especially instructor Vladan who helped me to remember how to use manual transmission after more then 10 years. After just one class I regained all my skills and learned some new things about how to use manual gearbox more efficiently. And also Vladan speaks good English, which is great for those who not very proficient in Serbian. Thanks a lot!",
    rating: 5,
  },
  {
    name: "Stevan Grbic",
    review:
      "Auto school with friendly teachers and instructors. Friendly, informative, patient, and very good. The team has come forward for me to adapt to my difficult schedule for which I am very grateful. DriveTeam comes highly recommended, and you should give them a call to learn how to drive or even to just get reminded if you had a long break.",
    rating: 5,
  },
  {
    name: "Jovan Pekic",
    review:
      "Professionalism, responsibility, excellent relationship with candidates. Kudos to the lecturer. Recommended to everyone!",
    rating: 5,
  },
  {
    name: "Matrix Novi Sad",
    review:
      "Driving school that exceeds all expectations! A professional lecturer provides a thorough understanding of traffic rules, making the theory simple and interesting. Instructor Boris who defines excellence! Professional, patient and with an exceptional motivational approach. His rich experience makes every ride an educational and exciting adventure. I highly recommend this instructor to anyone who wants to not only learn to drive, but also enjoy the process with an expert who provides support and confidence on the road to driving proficiency. This is a place where you not only learn, but also develop a love for driving.I am delighted with the speed of learning, attention and support of lecturers and instructors. This is definitely the right place for every future driver!",
    rating: 5,
  },
  {
    name: "Zorica Bojovic",
    review:
      "I passed a long time ago, and I haven't driven for a long time! After a few extra lessons, I'm a driver again! All the best!!!",
    rating: 5,
  },
  {
    name: "Dario",
    review:
      "Definitely the best driving school in the city, and I believe the sires too, I haven't met such positive and professional people in a very long time. From the lecturers who try to explain everything as much as possible and do it successfully, to the instructors who have so much patience and knowledge to teach everyone. From the first lesson with the instructor, the atmosphere was relaxed and that helped a lot with relaxing behind the wheel in such a crowded city where everyone is rushing and where it is always crowded. Every deadline was met, every class was driven from start to finish without a minute of delay or shortening. Really sincere recommendation for anyone who wants a very nice experience with very good people and who wants to learn to drive in the best way and in the shortest time. Thank you once again for another beautiful period ❤️",
    rating: 5,
  },
  {
    name: "Una Egelja",
    review:
      "People who will just put a smile on your face. Training passes, and you didn't even feel it considering the energy this team exudes. The enormous commitment, understanding, patience and desire to work of these wonderful people are exactly what will help you step into the traffic full of confidence without any effort or fear.Milijana Perišić, the theory lecturer, is a girl full of positive energy, with whom the theory classes go by like a joke. Communication with her and making arrangements are very easy and she selflessly shares her knowledge outside of class time.Boris Gadžić, driving instructor, always relaxed and smiling. It regularly fulfills its main goal, to lead candidates on the right path and show them responsibility and traffic awareness. Willing to meet and coordinate, he agrees on the dates of the classes and devotes himself to each candidate individually. He gives his time and effort completely to the future driver, not forgetting a single detail. Wonderful experience with Drive Team!☺️",
    rating: 5,
  },
  {
    name: "Marijana Marković",
    review:
      "All recommendations for Drive Team. 🍀 Wonderful people, experts, always ready to meet. I have only words of praise. From Milijana, who is a wonderful lecturer and who tries to pass on knowledge, to explain everything and help, to the instructor Boris, who is full of understanding and patience, dedicated and professional. All the best. I recommend it to those who are afraid of driving and traffic, as I was, but also to those who want this whole experience to pass quickly and without a lot of stress. 🌻",
    rating: 5,
  },
  {
    name: "Nikola Zinic",
    review:
      "A young but extremely dedicated team of responsible people who should be supported in every way! And if I have been an active driver for a long time, I am familiar with their activities, dedication and diligence, so that their driving school grows day by day. Go ahead and kudos to the boys!",
    rating: 5,
  },
  {
    name: "Dajana Kult",
    review:
      "All recommendations for the Drive Team driving school, the first impression upon enrollment was positive. I was welcomed by Milijana, very kind with all the necessary information. I want to thank her for her knowledge and lessons that were very interesting. I also want to especially thank the instructor Boris, whom I would always be happy to recommend, I am delighted with the driving lessons and he also taught me to drive safely and without fear!",
    rating: 5,
  },
  {
    name: "Stefan Vila",
    review:
      "The best driving school with the best professional staff. Quickly and easily get a license in an interesting and creative way with theory with Milijan and driving lessons with instructor Boris. Dedicated to their work, they are always there to answer all questions and help to master the training as easily as possible. Congratulations to the entire Drive Team driving school team.",
    rating: 5,
  },
];
