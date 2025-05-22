const testimonials = [
  {
    id: 1,
    testimony:
      "I wanted to start a business but lacked essential skills like accounting and web design. This app taught me everything I needed to succeed.",
    name: "David Kayode",
    location: "Ogun, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: [],
  },
  {
    id: 2,
    testimony:
      "After being laid off, I used this app to learn digital marketing. Within three months, I secured a remote job. It truly changed my life.",
    name: "Chibuzor Ike",
    location: "Enugu, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: [],
  },
  {
    id: 3,
    testimony:
      "I learned graphic design from scratch using this app. The step-by-step tutorials and hands-on projects helped me land my first freelance gig!",
    name: "Maria S.",
    location: "London, UK",
    avatar: "/assets/avater.jpg",
    tags: [],
  },
  {
    id: 4,
    testimony:
      "I upskilled in project management and earned a promotion at work thanks to the professional courses on this platform.",
    name: "Chidinma E.",
    location: "Lagos, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["product management"],
  },
  {
    id: 5,
    testimony: "The courses were practical and focused on real world skills.",
    name: "Samantha Ella",
    location: "Vienna, Austria",
    avatar: "/assets/avater.jpg",
    tags: [],
  },
  {
    id: 6,
    testimony:
      "The quizzes and interactive assignments keep me motivated. It’s not just learning; it’s a whole experience that is fun and rewarding.",
    name: "Afonso A.",
    location: "Lagos, Portugal",
    avatar: "/assets/avater.jpg",
    tags: [],
  },
  {
    id: 7,
    testimony:
      "I was skeptical about online learning, but this experience exceeded all my expectations. I’ve gained new skills, more confidence and a clear path for my future.",
    name: "Mukhtar Abdullahi",
    location: "Kano, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: [],
  },
  {
    id: 8,
    testimony:
      "I upskilled in project management and earned a promotion at work thanks to the professional courses on this platform.",
    name: "Chidinma E.",
    location: "Lagos, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["product management"],
  },

  // Content Writing
  {
    id: 9,
    testimony:
      "The content writing modules helped me land consistent freelance gigs. Now, I write for three blogs!",
    name: "Ngozi Umeh",
    location: "Abuja, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["content writing"],
  },
  {
    id: 10,
    testimony:
      "I never thought I could monetize my writing. This app showed me how to pitch, write and get paid.",
    name: "Tunde Ajayi",
    location: "Ibadan, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["content writing"],
  },
  {
    id: 11,
    testimony:
      "From idea generation to SEO, the content writing course was comprehensive and practical.",
    name: "Zainab Yusuf",
    location: "Ilorin, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["content writing"],
  },
  {
    id: 12,
    testimony:
      "With what I learned here, I now manage a content team for a Lagos-based startup.",
    name: "Emeka Okafor",
    location: "Lagos, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["content writing"],
  },
  {
    id: 13,
    testimony:
      "I always loved writing, but this app taught me how to structure and sell my work professionally.",
    name: "Amarachi N.",
    location: "Awka, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["content writing"],
  },

  // Product Management
  {
    id: 14,
    testimony:
      "The product management course taught me how to build and scale products users actually want.",
    name: "Olumide B.",
    location: "Lagos, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["product management"],
  },
  {
    id: 15,
    testimony:
      "I got my first job as a junior product manager after completing the course on this platform.",
    name: "Fatima Gambo",
    location: "Kaduna, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["product management"],
  },
  {
    id: 16,
    testimony:
      "From roadmapping to stakeholder communication, this course covered everything I needed.",
    name: "Nnamdi Okorie",
    location: "Owerri, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["product management"],
  },
  {
    id: 17,
    testimony:
      "I transitioned from customer support to product management with the help of this app.",
    name: "Yetunde F.",
    location: "Osogbo, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["product management"],
  },
  {
    id: 18,
    testimony:
      "Great insights, real-world examples, and hands-on tasks made this the best PM course I've taken.",
    name: "Ifeanyi Madu",
    location: "Benin City, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["product management"],
  },

  // Cyber Security
  {
    id: 19,
    testimony:
      "I started learning cybersecurity basics here and now I'm pursuing a certification.",
    name: "Ibrahim Lawal",
    location: "Zaria, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["cyber security"],
  },
  {
    id: 20,
    testimony:
      "From password safety to ethical hacking, I learned practical skills that keep me and my team secure.",
    name: "Chinyere Obi",
    location: "Uyo, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["cyber security"],
  },
  {
    id: 21,
    testimony:
      "This app introduced me to a new career path I never considered — cybersecurity!",
    name: "Babatunde Aina",
    location: "Ibadan, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["cyber security"],
  },
  {
    id: 22,
    testimony:
      "Now I understand how to protect my digital assets and teach others the same.",
    name: "Kemi Alade",
    location: "Akure, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["cyber security"],
  },
  {
    id: 23,
    testimony:
      "The cybersecurity course helped me get an internship at a tech company.",
    name: "Obinna Nwosu",
    location: "Aba, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["cyber security"],
  },

  // Public Speaking
  {
    id: 24,
    testimony:
      "Thanks to this app, I now speak confidently at company meetings and events.",
    name: "Grace Olowu",
    location: "Lagos, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["public speaking"],
  },
  {
    id: 25,
    testimony:
      "The public speaking course transformed my fear into excitement whenever I face a crowd.",
    name: "Yusuf Hassan",
    location: "Maiduguri, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["public speaking"],
  },
  {
    id: 26,
    testimony:
      "Now I host workshops and presentations like a pro, all thanks to the techniques I learned here.",
    name: "Ogechi Ndukwe",
    location: "Asaba, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["public speaking"],
  },
  {
    id: 27,
    testimony:
      "The speech structuring and delivery modules were so powerful, I won my first debate!",
    name: "Kelvin Eze",
    location: "Nsukka, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["public speaking"],
  },
  {
    id: 28,
    testimony:
      "Learning to speak publicly with confidence has opened new opportunities for me professionally.",
    name: "Aisha Bello",
    location: "Katsina, Nigeria",
    avatar: "/assets/avater.jpg",
    tags: ["public speaking"],
  },
];

export default testimonials;
