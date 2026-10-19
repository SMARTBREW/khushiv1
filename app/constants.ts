export const SITE = {
  name: "KHUSHII",
  phone: "011-41410075/76",
  phoneHref: "tel:011-41410075",
  email: "contact@khushii.org",
  emailHref: "mailto:contact@khushii.org",
  tagline:
    "Kinship for Humanitarian Social and Holistic Intervention in India (KHUSHII) is an independent Not for Profit Organisation founded in 2003 by Cricket legend Mr. Kapil Dev and his philanthropic partners.",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/KhushiiNGO/",
    icon: "/images/social/facebook-logo.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/khushii.india/",
    icon: "/images/social/instagram-logo.png",
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/company/khushii-ngo",
    icon: "/images/social/linkedin-logo.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/KhushiiNGO",
    icon: "/images/social/twitter.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCopwhtiPmta6N2OO934_Fag",
    icon: "/images/social/social-media.png",
  },
] as const;

export type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "WHO WE ARE",
    href: "/who-we-are",
    children: [
      { label: "About", href: "/who-we-are" },
      { label: "Leadership", href: "/who-we-are/leadership" },
      { label: "Partners", href: "/who-we-are#all-sec-sec" },
      { label: "Awards & Accreditations", href: "/who-we-are#awards_here" },
    ],
  },
  {
    label: "WHAT WE DO",
    href: "/what-we-do/education",
    children: [
      { label: "Covid Response", href: "/what-we-do/covid-response" },
      {
        label: "Education",
        href: "/what-we-do/education",
        children: [
          {
            label: "Swatantra Shikshaantra",
            href: "/what-we-do/education/swatantra-shikshaantra",
          },
          {
            label: "Shikshaantra PLUS",
            href: "/what-we-do/education/shikshaantra-plus",
          },
        ],
      },
      { label: "Volunteer", href: "/kite-volunteer" },
      {
        label: "Wellbeing",
        href: "/what-we-do/wellbeing",
        children: [
          { label: "Manobal", href: "/what-we-do/wellbeing/manobal" },
        ],
      },
      {
        label: "Community-Empowerment",
        href: "/what-we-do/community-empowerment",
        children: [
          {
            label: "Shiksha aur Vikas",
            href: "/what-we-do/wellbeing/shiksha-aur-vikas",
          },
          { label: "Kala", href: "/what-we-do/community-empowerment/kala" },
        ],
      },
      { label: "Success Stories", href: "/what-we-do/success-stories" },
    ],
  },
  {
    label: "RESOURCES",
    href: "/resources/annual-reports",
    children: [
      { label: "Annual Reports", href: "/resources/annual-reports" },
      { label: "FCRA Reports", href: "/resources/annual-reports/fcra-reports" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "GALLERY", href: "/galleries" },
  { label: "CONTACT", href: "/contact" },
];

export const DONATE_OPTIONS = [
  {
    label: "Support our Remedial School",
    href: "/building-brighter-future",
  },
  { label: "Support A Child", href: "/donate-2" },
  { label: "Pads for Freedom", href: "/pads-for-freedom" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Leadership", href: "/who-we-are/leadership" },
  { label: "Covid Response", href: "/what-we-do/covid-response" },
  { label: "CAREER", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy-2" },
] as const;

export const FOOTER_SECONDARY_LINKS = [
  { label: "ARTS & EVENTS", href: "/arts-events" },
  { label: "SUCCESS STORIES", href: "/what-we-do/success-stories" },
  { label: "GALLERY", href: "/galleries" },
] as const;

export const GET_INVOLVED = [
  {
    label: "GET IN TOUCH",
    href: "/contact",
    icon: "/images/footer/touch.png",
    className: "bg-khushii-cream",
  },
  {
    label: "BECOME A VOLUNTEER",
    href: "/contact#contactform",
    icon: "/images/footer/volainter.png",
    className: "bg-khushii-cream-light",
  },
  {
    label: "DONATE NOW",
    href: "/donation",
    icon: "/images/footer/donate.png",
    className: "bg-khushii-cream",
  },
] as const;

export const HERO_SLIDES = [
  {
    src: "/images/hero/newbnd.jpg",
    href: "/donate-2",
    alt: "Support a child — help Rekha continue with her education",
    caption: "Support a child",
  },
  {
    src: "/images/hero/newb2b2.jpg",
    href: "/donate-2",
    alt: "Support a child with KHUSHII",
    caption: "Support a child",
  },
  {
    src: "/images/hero/newb111d.jpg",
    href: "/pads-for-freedom",
    alt: "Pads for Freedom campaign",
    caption: "Pads for Freedom",
  },
  {
    src: "/images/hero/newb222d.jpg",
    href: "/pads-for-freedom",
    alt: "Pads for Freedom — support menstrual hygiene",
    caption: "Pads for Freedom",
  },
] as const;

export const KAPIL_NOTE = [
  "Dearest Friends of Khushii,",
  "It was in the early 2000s when I, along with like-minded people, came together with the sole purpose of wanting to utilise our time to do a greater good – an activity which was truly “needed” for society.",
  "All of us, who came together to create Khushii, had a background of working as volunteers with a number of welfare organisations and NGOs – but none of us had ever done anything more than just volunteer. This was our chance to use our combined experience to make a greater difference.",
  "Once Khushii was established, we took our first year to really study and understand the needs of our society and the shortcomings, as we did not know which areas we should start off with. It is a harsh reality that in our nation there are a number of concerns and causes that need to be addressed and improved. It is a mammoth task to determine who, where, when and how to help, and an even more difficult task to not be able to help all those we see are in need. We had a huge thirst to do good work, but it was equally important to us to fine-tune the areas we would work in. So we came to the conclusion that lack of education is the core of all problems in our country and keeping that in mind, we channelled our main focus to be Education and holistic development of lesser privileged children.",
  "Our intent was and still is, to be as self-sustainable as possible, whether that would be through in-house Fundraising events or through the generous support of our Corporate Partners.",
  "Though our core is Education, Community Development is something that goes hand in hand, keeping in sync with the acronym of our name Kinship for Humanitarian Social and Holistic Intervention in India.",
  "Do take your time to go through our website, and learn about the work that we do at Khushii.",
  "I end this note by encouraging all of you to give Khushii and our Khushii beneficiaries all the love, support and blessings that many of you have been doing so generously from day one. Together we can build brighter futures.",
] as const;

export const SUCCESS_STORIES = [
  {
    image: "/images/stories/nisha_2.jpg",
    title: "KHUSHII HELPS NISHA PURSUE HER DREAMS",
    href: "/what-we-do/success-stories",
  },
  {
    image: "/images/stories/new_project_6.jpg",
    title: "NEETU’S LOST INTEREST IN STUDIES REKINDLED",
    href: "/stories/khushii-rekindles-neetus-lost-interest-in-studies",
  },
  {
    image: "/images/stories/new_project_58.jpg",
    title: "RASHID TURNS A WEAKNESS INTO A STRENGTH",
    href: "/stories/khushii-helps-rashid-to-rediscover-the-joy-of-classes-and-classmates",
  },
] as const;

export const AMBASSADOR_SLIDES = [
  {
    src: "/images/ambassadors/slidefirst.jpg",
    alt: "Heartspeak testimonials from Naina Lal Kidwai, Dr. Naresh Trehan, and Jayant Davar",
    name: "Dr. Naresh Trehan",
    role: "Leading Surgeon, Medanta",
    quote:
      "I can proudly say we have changed the lives of over 45,000+ students.",
  },
  {
    src: "/images/ambassadors/group_2.jpg",
    alt: "Message from Shah Rukh Khan for KHUSHII",
    name: "Shah Rukh Khan",
    role: "KHUSHII ambassador",
    quote:
      "Our soul is healed by children. Let us look after our healers.",
  },
  {
    src: "/images/ambassadors/slide_13.jpg",
    alt: "Heartspeak testimonials from Siddharath Bindra, Ananya Birla, and Priyadarshini Nigam",
    name: "Siddharath Bindra",
    role: "MD, Biba Apparels",
    quote:
      "We are proud to be associated with KHUSHII in this laudable work of building the future of our country.",
  },
] as const;

export const PARTNER_LOGOS = [
  { src: "/images/partners/oracle.png", alt: "Oracle" },
  { src: "/images/partners/Milton-Logo.png", alt: "Milton" },
  { src: "/images/partners/caff.png", alt: "CAFF" },
  { src: "/images/partners/accor.png", alt: "Accor" },
  { src: "/images/partners/amway-1.png", alt: "Amway" },
  { src: "/images/partners/aswatha.png", alt: "Aswatha" },
  { src: "/images/partners/bajaj.png", alt: "Bajaj" },
  { src: "/images/partners/biba-1.png", alt: "Biba" },
  { src: "/images/partners/deloitte-1.png", alt: "Deloitte" },
  { src: "/images/partners/everest.png", alt: "Everest" },
  { src: "/images/partners/ford.png", alt: "Ford" },
  { src: "/images/partners/golden.png", alt: "Golden" },
  { src: "/images/partners/igl.png", alt: "IGL" },
  { src: "/images/partners/jamanalal.png", alt: "Jamanalal" },
  { src: "/images/partners/mvs.png", alt: "MVS" },
  { src: "/images/partners/newgen.png", alt: "Newgen" },
  { src: "/images/partners/nutanix.png", alt: "Nutanix" },
  { src: "/images/partners/new-logo.png", alt: "Partner" },
  { src: "/images/partners/aecom-logo.png", alt: "AECOM" },
  { src: "/images/partners/KPMG-logo.png", alt: "KPMG" },
  { src: "/images/partners/microsoft1.png", alt: "Microsoft" },
  { src: "/images/partners/ams.png", alt: "AMS" },
  { src: "/images/partners/israel.png", alt: "Israel" },
  { src: "/images/partners/inflow1.png", alt: "Inflow" },
  { src: "/images/partners/honda.png", alt: "Honda" },
  { src: "/images/partners/exl.png", alt: "EXL" },
  { src: "/images/partners/riello.png", alt: "Riello" },
  { src: "/images/partners/sita.png", alt: "SITA" },
  { src: "/images/partners/pti1.png", alt: "PTI" },
] as const;
