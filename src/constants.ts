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
    href: "/who-we-are/",
    children: [
      { label: "About", href: "/who-we-are/" },
      { label: "Leadership", href: "/who-we-are/leadership/" },
      { label: "Partners", href: "/who-we-are/#all-sec-sec" },
      { label: "Awards & Accreditations", href: "/who-we-are/#awards_here" },
    ],
  },
  {
    label: "WHAT WE DO",
    href: "/what-we-do/education/",
    children: [
      {
        label: "Education",
        href: "/what-we-do/education/",
        children: [
          {
            label: "Swatantra Shikshaantra",
            href: "/what-we-do/education/swatantra-shikshaantra/",
          },
          {
            label: "Shikshaantra PLUS",
            href: "/what-we-do/education/shikshaantra-plus/",
          },
        ],
      },
      {
        label: "Wellbeing",
        href: "/what-we-do/wellbeing/",
        children: [
          { label: "Manobal", href: "/what-we-do/wellbeing/manobal/" },
        ],
      },
      {
        label: "Community-Empowerment",
        href: "/what-we-do/community-empowerment/",
        children: [
          {
            label: "Shiksha aur Vikas",
            href: "/what-we-do/wellbeing/shiksha-aur-vikas/",
          },
          { label: "Kala", href: "/what-we-do/community-empowerment/kala/" },
        ],
      },
      { label: "Success Stories", href: "/what-we-do/success-stories/" },
    ],
  },
  {
    label: "RESOURCES",
    href: "/resources/annual-reports/",
    children: [
      { label: "Annual Reports", href: "/resources/annual-reports/" },
      { label: "FCRA Reports", href: "/resources/annual-reports/fcra-reports/" },
      { label: "Newsletter", href: "/newsletter/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  { label: "GALLERY", href: "/galleries/" },
  { label: "CONTACT", href: "/contact/" },
];

export const DONATE_OPTIONS = [
  {
    label: "Support our Remedial School",
    href: "https://rzp.io/rzp/ssra01",
  },
  {
    label: "Support A Child",
    href: "https://rzp.io/rzp/EducateAnUnderprivilegedChild",
  },
  {
    label: "Pads for Freedom",
    href: "https://rzp.io/rzp/padsforfreedom",
  },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Leadership", href: "/who-we-are/leadership/" },
  { label: "CAREER", href: "/careers/" },
  { label: "Privacy Policy", href: "/privacy-policy-2/" },
] as const;

export const FOOTER_SECONDARY_LINKS = [
  { label: "SUCCESS STORIES", href: "/what-we-do/success-stories/" },
  { label: "GALLERY", href: "/galleries/" },
] as const;

export const GET_INVOLVED = [
  {
    label: "GET IN TOUCH",
    href: "/contact/",
    icon: "/images/footer/touch.png",
    className: "bg-khushii-cream",
  },
  {
    label: "DONATE NOW",
    href: "/donation/",
    icon: "/images/footer/donate.png",
    className: "bg-khushii-cream",
  },
] as const;

export const HERO_SLIDES = [
  {
    src: "/images/hero/newbnd.jpg",
    href: "https://rzp.io/rzp/EducateAnUnderprivilegedChild",
    alt: "Support a child - help Rekha continue with her education",
    caption: "Support a child",
  },
  {
    src: "/images/hero/newb2b2.jpg",
    href: "https://rzp.io/rzp/EducateAnUnderprivilegedChild",
    alt: "Support a child with KHUSHII",
    caption: "Support a child",
  },
  {
    src: "/images/hero/newb111d.jpg",
    href: "/pads-for-freedom/",
    alt: "Pads for Freedom campaign",
    caption: "Pads for Freedom",
  },
  {
    src: "/images/hero/newb222d.jpg",
    href: "/pads-for-freedom/",
    alt: "Pads for Freedom - support menstrual hygiene",
    caption: "Pads for Freedom",
  },
] as const;

export const KAPIL_NOTE = [
  "Dearest Friends of Khushii,",
  "It was in the early 2000s when I, along with like-minded people, came together with the sole purpose of wanting to utilise our time to do a greater good - an activity which was truly “needed” for society.",
  "All of us, who came together to create Khushii, had a background of working as volunteers with a number of welfare organisations and NGOs - but none of us had ever done anything more than just volunteer. This was our chance to use our combined experience to make a greater difference.",
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
    href: "/what-we-do/success-stories/",
  },
  {
    image: "/images/stories/new_project_6.jpg",
    title: "NEETU’S LOST INTEREST IN STUDIES REKINDLED",
    href: "/stories/khushii-rekindles-neetus-lost-interest-in-studies/",
  },
  {
    image: "/images/stories/new_project_58.jpg",
    title: "RASHID TURNS A WEAKNESS INTO A STRENGTH",
    href: "/stories/khushii-helps-rashid-to-rediscover-the-joy-of-classes-and-classmates/",
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

export const WHO_WE_ARE = {
  bannerTitle: "KHUSHII - Non-Governmental Organisation in Delhi",
  title: "WHO WE ARE",
  intro:
    "8.1 million children need help to stay in school. These are the children whom education has passed by. These are the children whom we dream will, one day, all have access to schooling. Are these numbers daunting? Yes, perhaps. Yet, to us, transforming these numbers is what drives us each morning. Established in 2003 by cricket icon Kapil Dev, KHUSHII works tirelessly to keep children in school, through holistic interventions that impact the community. In just 19 years, KHUSHII has transformed the lives of over 1.5 million women and children.",
  vision: {
    heading: "VISION",
    body: "Every child has access to realize their full potential through quality education and holistic learning to become young empowered leaders in the urban and the rural segments, to contribute towards a self-reliant India",
    image: "/images/about/vision-image-1.png",
  },
  mission: {
    heading: "MISSION",
    body: "To prepare less privileged children of India through holistic support to succeed in a rapidly changing environment.",
    image: "/images/about/mission.jpg",
  },
  values: {
    heading: "VALUES",
    items: [
      "Accountability",
      "Leadership",
      "Transparency",
      "Team Work",
      "Innovation",
    ],
    image: "/images/about/vision-img-2.png",
  },
  chairmanQuote:
    "From the day that we started KHUSHII, in 2003, I had a vision of a prosperous India in my mind and my heart, with education being the torch. It is education, that acts as the brightest star and a guiding light in all our lives, throughout especially for those, who are lesser privileged than us.",
  chairmanCredit: "KAPIL DEV, CHAIRMAN KHUSHII",
  leadershipEyebrow: "THE VISIONARIES",
  leadershipTitle: "OUR LEADERSHIP",
  leadershipBody:
    "Some of India’s luminaries and distinguished citizens have been inspired by our cause and joined us to help keep more children in school.",
} as const;

export const WHO_WE_ARE_STATS = [
  {
    icon: "/images/about/icn1.png",
    value: "500,000+",
    label: "LIVES IMPACTED",
  },
  {
    icon: "/images/about/icn2.png",
    value: "81,315",
    label: "GIRLS EDUCATED ON MENSTRUAL HYGIENE",
  },
  {
    icon: "/images/about/icn3.png",
    value: "51,625",
    label: "GOVERNMENT SCHOOL TEACHERS TRAINED ON MENTAL HEALTH AND WELLBEING",
  },
  {
    icon: "/images/about/icn4.png",
    value: "9,470",
    label: "CHILDREN REACHED THROUGH 21ST CENTURY LIFE SKILLS",
  },
  {
    icon: "/images/about/icn5.png",
    value: "10,236",
    label: "CHILDREN ATTENDED DIGITAL LEARNING SESSIONS",
  },
] as const;

export const ALLIANCE_LOGOS = [
  ...PARTNER_LOGOS,
  { src: "/images/partners/fedrel.png", alt: "Federal Mogul" },
  { src: "/images/partners/imcd.png", alt: "IMCD" },
  { src: "/images/partners/rbsc.png", alt: "RBS" },
  { src: "/images/partners/richaco.png", alt: "Richaco" },
];

export const AWARD_BADGES = [
  { src: "/images/awards/nationsaal.png", alt: "National award" },
  { src: "/images/awards/rashtriya.png", alt: "Rashtriya award" },
  { src: "/images/awards/iconic.png", alt: "Iconic award" },
  { src: "/images/awards/GSN9568.png", alt: "GuideStar India GSN 9568" },
  { src: "/images/awards/darpan.png", alt: "NGO Darpan" },
  { src: "/images/awards/tiss.png", alt: "TISS" },
  { src: "/images/awards/caf.png", alt: "CAF" },
  { src: "/images/awards/GPTW-Certificate.png", alt: "Great Place to Work" },
] as const;

export const LEADERSHIP = {
  eyebrow: "KHUSHII - Non-profit Organisation in Delhi",
  title: "LEADERSHIP",
  intro:
    "Two decades ago, a group of like-minded individuals came together to form KHUSHII - Kinship for Humanitarian Social and Holistic Intervention in India. Today, KHUSHII has expanded its vision manifold, working across India with hundreds of schools, thousands of teachers, hundreds of thousands of students, and a thriving community. We are grateful for the generosity of our patrons, philanthropic stalwarts, support and belief of our dynamic board and a passionate team for our growth and continued success.",
} as const;

export const LEADERSHIP_FOUNDER = {
  name: "KAPIL DEV",
  role: "Honorary Chairman Emeritus",
  image: "/images/leadership/kapildev.jpg",
} as const;

export const LEADERSHIP_BOARD = [
  {
    name: "ANIRUDH KHAITAN",
    role: "President",
    image: "/images/leadership/anirudh.jpg",
    noteLabel: "Note from the President",
    note: [
      "Dear Patrons,",
      "After serving as the KHUSHII Treasurer for 3 years, when I was nominated to take on the role of President, I felt as though it was the perfect continuation to my association with KHUSHII.",
      "KHUSHII believes in the transformation of children through education, and our focus has been on the holistic development of children. The impact was significant from day one, with our first ever project - ‘The Neemrana Project’- having a massive outreach: monitoring and evaluating 4,80,000 rural and urban beneficiaries.",
      "In tune with KHUSHII’s journey of realigning with the aftereffects of the pandemic, we envisioned an organizational adaptability and rebuilt our vision, mission and goal. With reassuring resilience KHUSHII built upon the VISION that ‘Every child has access to realize their full potential through quality education and holistic learning to become young empowered leaders in the urban and the rural segments, to contribute towards a self-reliant India.’ Our MISSION of ‘To prepare less privileged children of India through holistic support to succeed in a rapidly changing environment’ seems possible with the continued patronage of our growing corporate donors. And while strengthening partnerships, we now imbibe our VALUES of Accountability, Leadership, Transparency, Team Work and Innovation.",
      "KHUSHII today reaches out to approximately 50,306 beneficiaries in 48 Schools & 12 Learning Centres across 12 states pan-India through its Shikshaantra Plus programme. Our differentiating quotient in addressing the mental wellbeing of a child under the Manoshakti wing, and building life-skills through Shiksha Aur Vikas, both of which have been possible due to the support of 43+ Corporate Partners. This, we believe, speaks for itself when it comes to KHUSHII’s credibility and impact.",
      "I am fortunate enough to come from a background in the education sector, and I firmly believe that Education is the founding stone towards a developed nation. I am confident that my experience and expertise in this field will help KHUSHII make a deeper impact, and through this process of interacting with those children who are lesser-privileged, I too will keep learning.",
      "The need to reach out to every child possible is essential, and I pledge that under my leadership, KHUSHII will reach to 2,50,000 children, by the end of the year 2025. This will only be possible by the constant support of our longstanding patrons, corporate partners, my fellow office-bearers, and the passionate KHUSHII team. It is my responsibility to take forward the vision that Mr. Kapil Dev had when he set up KHUSHII in 2003, which was to ensure that no child is left behind.",
      "KHUSHII’s success was largely possible due to the constant endeavor of the team, and the belief of our donors. In the FY 21-22, we retained and onboarded 43+ corporate partners - a testament to KHUSHII’s credibility, which we believe is a result of complete transparency through regular updates and reports, Programme visits and interactions with the beneficiaries, our underlying intent to give our patrons and supporters a token of appreciation on behalf of our KHUSHII children.",
      "Alongside, KHUSHII’s Arts & Events Team remain successful over the years in curating conceptual fundraising concepts which has had the unremitting support of eminent personalities and art lovers, globally. Funds generated through these events are need-based and are also the main source for KHUSHII’s Corpus.",
      "KHUSHII is focussed towards building brighter futures for our nation’s children by offering a holistic approach to empower those who do not have an access to quality education and most importantly need to take care of their socio-emotional health. I appeal to all of you to stand with me so we can lead the path for the future generations, and ensure they know that there is someone there to guide them.",
    ],
  },
  {
    name: "SIDDHARTH MOHAN",
    role: "Secretary General",
    image: "/images/leadership/siddharth-mohan-1.png",
    noteLabel: "Note from the Secretary General",
    note: [
      "Dear Patrons,",
      "As I took the reins as KHUSHII’s General Secretary in October, 2019 I must say that I gained a perfect family of 50,000+ children, 500,000 fellow Indians, determined to break the chain of poverty, and a dedicated team working diligently to truly make a change.",
      "My predecessors and the founder members have set a solid foundation for KHUSHII based on equal opportunities, partnerships and joining forces to do the most that we can together. The impact we have had in the lives of 1.5 million over our 19 years has truly been a mammoth achievement - and one of our driving forces to keep doing more. Our Goal is to create a network of significant change - impacting 2,50,000 lives by 2025. Due to the contribution from our Corporate Partners and Donors, we are surely and steadily approaching our goal.",
      "Our Corporate partners play a pivotal role to ensure sustainability of KHUSHII’s Programme initiatives. Their contribution also strives towards building a constant financial reserve to safeguard our beneficiaries from any unforeseeable circumstances. Corporate Partnerships act as the backbone to KHUSHII’s programmatic needs - giving KHUSHII what is scarce - time and money. In addition to the financial support that Corporates bring, their contribution is also on a participatory level, with many offering skilled volunteers, who bring knowledge, proficiencies and new ideas to our organisation.",
      "Longstanding relationships with both our Corporate partners and individual donors are something that KHUSHII prides itself on - we believe this is a result of complete transparency through regular updates and reports, Programme visits and interactions with the beneficiaries, and our underlying intent to give our patrons and supporters a token of appreciation on behalf of our KHUSHII children. This is where our Art & Events Team comes into play who have been successful over the years due interactive and unique fundraising concepts and the continuous support of benevolent and eminent personalities across the globe.",
      "Our aim through our fundraisers is to give thanks to our patrons and supporters for their generosity. Each concept is an endevour to create an interactive and unique experience for the patrons and giving them a tangible memory of their contribution - a reminder of the smiles they have painted on the faces of many underprivileged. Funds generated through these events are often need-based or specific to a certain cause or project, and are also the main source for KHUSHII’s Corpus for future plans and sustenance of the organisation.",
      "I thank you for coming forward to support our organisation and sign off with a quote which shall surely resonate with each and every one of us.",
      "“No one has ever become poor by giving” - Anne Frank",
    ],
  },
  {
    name: "SUKRITI TALWAR",
    role: "Treasurer",
    image: "/images/leadership/sukriti-talwar-1.jpg",
  },
] as const;

export const EDUCATION = {
  eyebrow: "EDUCATION",
  title: "SPONSOR A CHILD FOR EDUCATION",
  unicef: "8.1 million children are out of school",
  unicefCredit: "UNICEF, India",
  dropouts:
    "95% of Indian children attend primary school but barely 55% of them end up reaching higher secondary school. The most recent ASER report also shows that learning levels in Government-run primary schools are alarmingly low. This implies that almost half the children drop out after 8 years of elementary education, without acquiring minimum acceptable foundational skills.",
  remedial:
    "KHUSHII’s core area of expertise lies in remedial education, where we deliver targeted academic support to weaker students to mainstream them and help rebuild their engagement in school. Furthermore, we take a holistic approach by impacting school climate, infrastructure, emotional wellbeing, extracurricular and sports.",
  accomplishments:
    "Our multidimensional and long term approach allows us to be a part of the child’s development journey from the early to later stages. We also engage with stakeholders such as teachers, government bodies, parents and communities, to bring about sustainable change, keeping in mind academic interests as well as the emotional and physical needs of the learners.",
} as const;

export const EDUCATION_STATS = [
  { value: "94,199", label: "Students outreached" },
  { value: "30%", label: "Improvement in parental participation" },
  { value: "5,361", label: "Teachers trained" },
] as const;

export const EDUCATION_PROGRAMMES = [
  {
    title: "Swatantra Shikshaantra",
    subtitle: "Remedial Education Program",
    body: "In 2006, the Swatantra Shikhaantra centre in Devli, Sangam Vihar was established with an aim to provide remedial education to children with learning difficulties in English, Mathematics and Science.",
    image: "/images/education/swatantra.png",
    alt: "A student in a lab coat examining a test tube",
    href: "/what-we-do/education/swatantra-shikshaantra/",
  },
  {
    title: "Shikshaantra Plus",
    subtitle: "Supporting Child Education",
    body: "Recent survey analyses have shown that learning levels in Government run primary schools have remained consistently low. More alarming is the fact that almost half the children drop out after 8 years of elementary education, without acquiring minimum acceptable foundational skills.",
    image: "/images/education/shikshaantra-plus.png",
    alt: "Students and a teacher gathered around a Newton’s cradle",
    href: "/what-we-do/education/shikshaantra-plus/",
  },
] as const;

export const EDUCATION_IMPROVEMENTS = [
  {
    icon: "/images/education/ro-system.png",
    value: "6 RO systems",
    detail: "installed in schools to provide safe drinking water",
  },
  {
    icon: "/images/education/stem-labs.png",
    value: "5 STEM labs",
    detail: "established in schools to support Science and Math learning",
  },
  {
    icon: "/images/education/classrooms.png",
    value: "94 classrooms",
    detail: "were painted",
  },
  {
    icon: "/images/education/toilets.png",
    value: "45 toilets",
    detail: "were constructed or repaired",
  },
] as const;

export const SWATANTRA = {
  eyebrow: "Swatantra Shikshaantra",
  title: "KHUSHII NGO - Remedial Education Program",
  origin:
    "In 2006, the Swatantra Shikhaantra centre was established in L1, Sangam Vihar, New Delhi as a response to the high rate of drop-outs in the urban community. KHUSHII traced this down to factors such as poor foundational skills, lack of access to quality teaching, safe infrastructure or even nutritious meals. An empty stomach never devoured much knowledge!",
  support:
    "We set up a safe space for providing quality academic engagement to academically weak students (grades 1-10) from BPL families providing them remedial education support along with nutritious mid-day meals, health camps and regular counselling sessions. Our successes in Sangam Vihar became a foundation for our nationwide programmes and the flagship school now serves as a laboratory for continued programme development.",
} as const;

export const SWATANTRA_STATS = [
  {
    icon: "/images/education/Sicon-5.png",
    value: "15000",
    label: "children benefitted",
  },
  {
    icon: "/images/education/Image-86-2.png",
    value: "60%",
    label: "girl students",
  },
  {
    icon: "/images/education/grade.png",
    value: "1-10",
    label: "Grade covered",
  },
  {
    icon: "/images/education/nutirious.png",
    value: "2,040,0000",
    label: "nutritious mid-day meals served",
  },
  {
    icon: "/images/education/swatantra-1.png",
    value: "4%",
    label: "reduction in dropout rates",
  },
  {
    icon: "/images/education/improvement.png",
    value: "75%",
    label: "improvement in parental engagement",
  },
] as const;

export const SWATANTRA_VIDEOS = [
  {
    id: "ING6gBhWM0o",
    title: "KHUSHII - Arts integrated Learning",
  },
  {
    id: "IQWLjCylHbM",
    title: "I Am KHUSHII",
  },
] as const;

export const SHIKSHAANTRA = {
  eyebrow: "Shikshaantra Plus",
  title: "KHUSHII NGO - Supporting Child Education",
  scores:
    "Over 70% Indian children in Class 3 do not have basic reading and arithmetic skills (ASER 2018). Shikshaantra Plus works on targeted outcome improvement through its remedial program and has achieved significant improvement in scores for its beneficiaries. The programme was conceived as a means to scale the success KHUSHII had seen at its flagship school in Sangam Vihar, New Delhi.",
  schools:
    "KHUSHII works closely with government schools to identify academically weaker students along with other related areas of improvement such as infrastructural quality, teacher capability and students’ emotional wellbeing. We address these through our remedial education programme, as well as other initiatives to upskill teachers and augment infrastructure. We place a dedicated mental health counselor to help students overcome learning and motivational difficulties.",
  partnershipsIntro: "KHUSHII has joined hands with various agencies and partners",
} as const;

export const SHIKSHAANTRA_STATS = [
  {
    icon: "/images/education/Sicon-1.png",
    value: "60,000",
    label: "students impacted",
  },
  {
    icon: "/images/education/Sicon-2.png",
    value: "36",
    label: "government schools",
  },
  {
    icon: "/images/education/Sicon-3.png",
    value: "12",
    label: "states pan-India",
  },
  {
    icon: "/images/education/Sicon-4.png",
    value: "2x",
    label: "improvement in scores on Languages, Math and Science",
  },
  {
    icon: "/images/education/Sicon-5.png",
    value: "20%",
    label: "improvement in school attendance",
  },
  {
    icon: "/images/education/Sicon-6.png",
    value: "75%",
    label: "improvement in parental engagement",
  },
] as const;

export const SHIKSHAANTRA_PARTNERS = [
  "SCERT Delhi (Ex Consultant)",
  "DIET Delhi (Ex Consultant)",
  "Director Education, Department of Education - SDMC & NDMC, Delhi",
  "Department of School Education, Haryana",
  "Education Officer, Department of Education, Mumbai, Maharashtra",
  "Delhi Commission for Protection of Child Rights (DCPCR)",
  "District Education Officer, Primary Education Department, Kanchipuram, Tamil Nadu",
  "District Primary Education Officer, Chandlodiya, Ahmedabad",
  "Dist. Education Officer, Primary Section, Alwar, Rajasthan",
  "Govt. of Karnataka, Primary & Secondary Education, Bangaluru, Karnataka",
  "Director Education Officer Hyderabad",
  "District Basic Education Officer, Gautam Budh Nagar, Uttar Pradesh",
  "Director General, School Education. SAS Nagar, Mohali, Punjab",
  "Education Officer (Primary), Pune District Parishad, Maharashtra",
  "Public Health Foundation of India (PHFI)",
] as const;

export const SHIKSHAANTRA_VIDEO = {
  id: "UAhJxrl7_dM",
  title: "Shikshaantra Plus - Complete School Transformation",
} as const;

export const WELLBEING = {
  unicef: "2.3 billion people lack basic sanitation, globally",
  unicefCredit: "UNICEF",
  title: "WELLBEING",
  programme: "MANOSHAKTI",
  subtitle:
    "Shikshaantra Plus Mental Health and Education Programme (SMHEAP)",
  distress:
    "WHO has pointed out that India has the highest number of teenage suicide rates. KHUSHII understands how wellbeing is an integral piece of a child’s holistic development, especially when they come with underlying issues of distress at home, lack of motivation and confidence, and anxiety, which do not allow them to perform to their potential.",
  champions:
    "The SMHEAP programme from KHUSHII works to promote the physical, psychological and social development of children by placing dedicated School Mental Health Champions who work democratically with students, by providing them personalised support and enabling them to make more of their time in class. They use group sessions, storytelling, art and play therapy, group assessments, IQ testing, Psychotherapy, Cognitive Behaviour Therapy (CBT) & behavioural modification therapy, mind mastering techniques and other such tools. The overall benefit reaches all important stakeholders - students, teachers and parents and helps reduce the risk of dropouts.",
  accomplishments:
    "SMHEAP has significantly helped in removing barriers to academic achievement for children; creating a supportive social and emotional environment in schools; and guiding both teachers and children towards career readiness for the children.",
} as const;

export const MANOBAL = {
  title: "Manobal",
  subtitle: "Empowering Educators for Mental Wellbeing",
  teachers:
    "Teachers are the cornerstone of every student’s development - academically, emotionally and socially. This immense responsibility comes with long working hours, large class sizes, and high expectations which can lead to stress, burnout, and compromised mental health. Struggling with their own mental wellbeing can hinder their ability to foster a positive learning environment. Therefore, it is critical to prioritize mental health of teachers. Teachers who understand the importance of mental health and are capable of understanding their own mental needs are better equipped to address their students’ needs, create supportive environments, and identify signs of mental health challenges early. Their well-being directly influences the resilience, engagement, and happiness of the children they teach.",
  schools:
    "In India, where mental health resources are scarce and over 70% of children rely on government schools, the role of teachers becomes even more critical. With only three psychiatrists per million people and even fewer psychologists, it is often teachers who serve as the first line of support for vulnerable students. That’s where Manobal steps in.",
  about:
    "Manobal, one of KHUSHII’s flagship mental health initiatives, is designed to bridge the gap in mental health services by empowering government school teachers to address the emotional and psychological well-being of their students. Through psycho-education and sensitization workshops, Manobal equips teachers with the knowledge, skills, and strategies to create safe, supportive, and inclusive classrooms.",
} as const;

export const MANOBAL_TESTIMONIALS = [
  {
    src: "/images/manobal/testimonial-1.png",
    alt: "A government school teacher says the training shifted their perspective on mental health and the impact they can have in the classroom.",
    width: 1461,
    height: 411,
  },
  {
    src: "/images/manobal/testimonial-2.png",
    alt: "A government school teacher says Manobal sessions reminded them to start the day with mindfulness and to practice it with their students.",
    width: 1458,
    height: 413,
  },
] as const;

export const WELLBEING_STATS = [
  {
    icon: "/images/wellbeing/schoolicon.png",
    value: "27",
    label: "schools covered",
  },
  {
    icon: "/images/wellbeing/sssionsdone.png",
    value: "1,030",
    label: "individual sessions done",
  },
  {
    icon: "/images/wellbeing/handshake-2.png",
    value: "United Nations Convention on the Rights of the Child",
    label: "Partnerships forged with",
  },
  {
    icon: "/images/wellbeing/councelling.png",
    value: "7,937",
    label: "group counselling sessions done",
  },
  {
    icon: "/images/wellbeing/carrercouncelling.png",
    value: "4,270",
    label: "students provided career counselling sessions",
  },
  {
    icon: "/images/wellbeing/hygiene.png",
    value: "7,138",
    label: "girls reached through menstrual hygiene awareness",
  },
] as const;

export const COMMUNITY = {
  stat: "1 out of 3 women in India are illiterate and unskilled",
  statCredit: "WORLD BANK",
  title: "COMMUNITY EMPOWERMENT",
  poverty:
    "Keeping children in school also involves a holistic addressing of the economic status of the community. One of KHUSHII’s important objectives includes addressing this and we work towards breaking the poverty cycle of low skills leading to reduced employment opportunities and hence low self-esteem.",
  skills:
    "We mitigate vulnerabilities through regular mobilization on the identified challenges in the community, which allows us to empower the community members through skill development and facilitating linkages.",
  accomplishments:
    "At KHUSHII we know that education is the first step towards empowerment, and hence we aim to create immediate impact in the short term in the form of improved learning outcomes. We achieve this through community-based initiatives and government school quality enhancement programmes. Further, the programmes seek to equip children, their families and community members with life skills and garner income generation opportunities to improve their overall living standards, by creating awareness and sensitizing parents towards the need of education.",
} as const;

export const COMMUNITY_PROGRAMMES = [
  {
    title: "Shiksha aur Vikas",
    subtitle: "KHUSHII NGO - Improving Lives And Livelihood",
    body: "Millions of Indians do not have access to adequate healthcare, food and nutrition, education and livelihood. In the education domain, support of student’s families and communities is crucial to the success…",
    image: "/images/community/shiksha-aur-vikas.jpg",
    alt: "Three women sitting on a rug and looking at a laptop together",
    href: "/what-we-do/wellbeing/shiksha-aur-vikas/",
  },
  {
    title: "Kala",
    subtitle: "Training Youth For Success - Skill Development Program by KHUSHII NGO",
    body: "The proportion of formally skilled workers in India is extremely low, at 4.69% of the total workforce. Youth unemployment is a major concern, because they enter the labour market without appropriate skills.",
    image: "/images/community/kala.jpg",
    alt: "Students in a beauty-skills class watching a facial demonstration",
    href: "/what-we-do/community-empowerment/kala/",
  },
] as const;

export const SHIKSHA_AUR_VIKAS = {
  eyebrow: "Shiksha aur Vikas",
  title: "KHUSHII NGO - Improving Lives And Livelihood",
  communities:
    "Millions of Indians do not have access to adequate healthcare, food and nutrition, education and livelihood. In the education domain, support of student’s families and communities is crucial to the success in increasing student enrollment and reduced drop-out rates. KHUSHII recognizes the need to scale up efforts and expand outreach to address these interlinked challenges. Through the Shiksha aur Vikas programme, we integrate communities within 3 - 5 kilometres of the school and extend support to the families and neighbours of our beneficiaries.",
  groups:
    "We have encouraged annual savings, and partnered with Canara Bank to impart training in income generating activities to 73 Self Help Groups! These groups were actively engaged in inter-loaning and income generation activities. KHUSHII has also organized health camps, monitored immunization camps, improved nutritional outcomes, provided adult education programme options so as to empower them economically, physically and mentally for a long-term Social Behaviour Change.",
  accomplishments:
    "Over the years, KHUSHII has transformed the lives of over 1.5 million people by addressing challenges related to education, health and nutrition, sanitation, skill development and micro finance. Furthermore, we have enabled families to become self-reliant through enhance livelihoods and an understanding of financial literacy.",
  partnershipsIntro: "KHUSHII has joined hands with various agencies and partners",
} as const;

export const SHIKSHA_AUR_VIKAS_STATS = [
  {
    icon: "/images/shiksha/community.png",
    value: "6",
    label: "communities impacted",
  },
  {
    icon: "/images/shiksha/immunization.png",
    value: "89%",
    label: "immunization achieved in the intervention area",
  },
  {
    icon: "/images/shiksha/educationR.png",
    value: "2500",
    label: "women reached through adult education",
  },
  {
    icon: "/images/shiksha/conducted.png",
    value: "3000",
    label: "community meetings conducted",
  },
] as const;

export const SHIKSHA_AUR_VIKAS_PARTNERS = [
  "VMMC Safdarjung hospital, Delhi",
  "Medanta hospital, Gurugram, Haryana",
  "Rajiv Gandhi Cancer Institute in Delhi",
  "HLFPPT",
  "Himalaya Eye Care, Delhi",
  "SSMI",
  "Max Hospital",
  "Delhi State Legal Services Authority",
  "Karnataka Education Lingayat Society",
  "Karnataka State Women Council",
  "Sanskar Seva Sansthan, Mumbai",
  "Shradha Eye Care, Bengaluru, Karnataka",
  "Lions Club, Bengaluru, Karnataka",
  "Rotary Club of India, Bengaluru, Karnataka",
  "Indian Cancer Society, Bengaluru, Karnataka",
  "Primary Health Centre- Hedgenagar, Thanisandra, Karnataka",
  "Primary Health Centre- Masani, Rewari, Haryana",
  "KB Bhabha Hospital, Mumbai, Maharashtra",
  "Department of ICDS- H ward Bandra Mumbai, Rewari, Bengaluru and Delhi",
] as const;

export const SHIKSHA_AUR_VIKAS_VIDEOS = [
  {
    id: "WY95VVgbHq8",
    title: "Coronavirus Advisory - KHUSHII NGO",
  },
  {
    id: "71PT7IFEXyA",
    title: "Webinar on Maternal Wellness",
  },
] as const;

export const KALA = {
  eyebrow: "Kala",
  title: "Training Youth For Success - Skill Development Program by KHUSHII NGO",
  workforce:
    "The proportion of formally skilled workers in India is extremely low, at 4.69% of the total workforce. Youth unemployment is a major concern, because they enter the labour market without appropriate skills. They are then faced with low incomes, and the unemployment multiplies their risk of experiencing financial challenges leading to trauma and frustration.",
  training:
    "KHUSHII realized that skills and knowledge are the driving forces of economic growth and social development for any country. Our approach to economic empowerment includes imparting skill training in the market-oriented job skills such as Spoken English, basic computer, personality development, financial literacy skills, retail management and relevant soft skills.",
  employability:
    "Kala has fostered a collaborative approach towards employability by partnering with multinationals such as Microsoft and VLCC who not only provide skill and technical training but also go on to induct promising candidates. All workers who have gone from KHUSHII are reported to be satisfied with their jobs, indicated improvement in the quality of life post the interventions, and also were able to successfully supplement family incomes.",
} as const;

export const KALA_STATS = [
  {
    icon: "/images/kala/locations.png",
    value: "6",
    label: "locations",
  },
  {
    icon: "/images/kala/setting.png",
    value: "4",
    label: "trades covered in skill training",
  },
] as const;

export const KALA_PARTNERS = [
  "Canara Bank of India, Bengaluru, Karnataka",
  "Jan Shiksha Sansthan, Bengaluru, Karnataka and Mumbai, Maharashtra",
  "Singer India Limited",
  "Council of Education and Development Programmes (CEDP), Mumbai, Maharashtra",
] as const;

export const KALA_SHG_STATS = [
  {
    icon: "/images/kala/icon-1.png",
    value: "10-12",
    label: "average size of an SHG",
  },
  {
    icon: "/images/kala/icon-2.png",
    value: "1,020",
    label: "women in SHGs",
  },
  {
    icon: "/images/kala/icon-3.png",
    value: "81",
    label: "entrepreneurial training received",
  },
] as const;

export const KALA_SHG_PARTNERS = [
  "Financial Literacy Society of Ramjas College, Delhi",
  "Brihanmumbai Municipal Corporation (BMC), H Ward Bandra, Mumbai, Maharashtra",
] as const;

export const STORY_CARDS = [
  {
    title: "Tailoring her own future",
    excerpt:
      "Meet Sarla, a home-maker from Harchandpur village, Bhiwadi, never thought life would give her another chance. She was living a normal life, with a meagre income of Rs 4,000-4,500, the chances to break free from the monotony seemed bleak.",
    image: "/images/stories/sarla.jpg",
    width: 700,
    height: 500,
    href: "/stories/tailoring-her-own-future/",
    article: {
      title: "Tailoring Her Own Future",
      paragraphs: [
        "Meet Sarla, a home-maker from Harchandpur village, Bhiwadi, never thought life would give her another chance. She was living a normal life, with a meagre income of Rs 4,000-4,500, the chances to break free from the monotony seemed bleak.",
        "Back in her school days when she was in class 8, she got a diploma on sewing. But never after that did she get any prospect to continue with her passion. After many years of waiting, finally an opportunity came her way and she got another chance of reviving her skill by joining Khushii’s skill development program. This was an opportune moment for her and she delivered her best. She became the topper of her batch and Khushii rewarded her efforts by gifting her with a sewing machine and a course completion certificate. This brought a new ray of hope in her life. Thereon, she started her own tailoring work shop.",
        "Her newly acquired skills & enthusiasm got her to increase her family income two-folds. Not only is her husband supportive and proud of her independence, she is also able to accomplish her dream to educate her two daughters, and see them succeed.",
        "It’s not just the skill, but the mind-set change that help Sarla achieve her goals and follow her passion.",
      ],
    },
  },
  {
    title: "Sow the seeds for success",
    excerpt:
      "Surviving in an urban-slum like Dakshinpuri is challenging enough, with problems like lack of access to clean drinking water, sanitation and water related disease limited access to affordable healthcare, high population density being just some of the factors",
    image: "/images/stories/sowseed.jpg",
    width: 700,
    height: 500,
    href: "/stories/sow-the-seeds-for-success/",
    article: {
      title: "Sow the seeds for success",
      paragraphs: [
        "Surviving in an urban-slum like Dakshinpuri is challenging enough, with problems like lack of access to clean drinking water, sanitation and water related disease limited access to affordable healthcare, high population density being just some of the factors",
      ],
    },
  },
  {
    title: "The art of turning a...",
    excerpt:
      "Rahul, a grinning 7 year old boy studies in class III in Sangam Vihar, Delhi. He lives with his mother and maternal grandparents in the nearby slum.",
    image: "/images/stories/rahul.jpg",
    width: 300,
    height: 251,
    href: "/stories/rashid-rediscovers-joy-of-classes/",
    article: {
      title: "The Art Of Turning A Weakness Into A Strength",
      paragraphs: [
        "Rahul, a grinning 7 year old boy studies in class III in Sangam Vihar, Delhi. He lives with his mother and maternal grandparents in the nearby slum. His parents are separated, and his sister lives with his father. Rahul is the only hope of good future for his mother, she is raising him with great difficulty. Anger and hypersensitive behaviour were dominant in Rahul at School. Though gifted with an active and sharp mind, he was not using his potential. His school teacher often had complaints about him. The mother was perplexed. She turned up to KHUSHII’s counsellor provided in the school under Shikshaantra Plus programme providing Remedial Education. The counsellor identified his hyper sensitivity towards tactile stimulation. The counsellor then prepared an Individual Educational Plan (IEP) tailored to Rahul’s needs. This planning helped his teachers and mother understand the kind of support required for the success of this journey. For the next 3 months, regular 45 minutes long sessions were taken to develop his behavioural capacities. Soon after these interactive sessions, his cognitive, social and emotional behaviour started to develop. With intensive efforts put in place and continuous counselling sessions, Rahul is now reintegrated with class mates again and his teacher appreciated the noticeable changes in Rahul. Today Rahul is more patient, sits in the class quietly, puts in his efforts in academics and has also been showing enhancement in overall behaviour. This pleasant change in his behaviour was also observed at home, he shows more affection towards his mother. He had a lot of potential; training was required so that his energy is being put in a productive way. This channelizing of energy and potential was facilitated by KHUSHII. Now Rahul’s mother is also gratified that the efforts have borne fruit. No longer is she sulking about her fate. She is a satisfied woman impressed by the progress made by her little son.",
      ],
    },
  },
  {
    title: "KHUSHII helps Abhishek overcome learning...",
    excerpt:
      "Young Abhishek comes from an underprivileged background and studies in Class VIII in a Government school. While he was very enthusiastic and active in extracurricular activities, he was struggling in academics, particularly English.",
    image: "/images/stories/abhishek.jpg",
    width: 700,
    height: 500,
    href: "/stories/khushii-helps-abhishek-overcome-learning-issues/",
    article: {
      title:
        "Khushii NGO Helps Abhishek Overcome Learning Issues And Regain Confidence",
      paragraphs: [
        "Young Abhishek comes from an underprivileged background and studies in Class VIII in a Government school. While he was very enthusiastic and active in extracurricular activities, he was struggling in academics, particularly English. An attention deficit problem further added to his lack of grasp and his teachers gave up on him as a dull student. Lack of self-confidence turned him into an introvert and he avoided interacting with his peers.",
        "Post KHUSHII’s intervention, our teachers spent a lot of time with him and built up his confidence. We encouraged him to interact more with his fellow classmates and make new friends. Leveraging his interest in extracurricular activities, our teachers increased his participation in painting and music. This helped in developing his learning abilities.",
        "Abhishek soon started responding to our intervention. He is now more vocal about his academic problems and also has made new friends. He now looks forward to studies and is more responsive in class. His parents, as well as teachers, are pleasantly surprised at the change and we all are confident that he will turn into a bright student in the coming months.",
      ],
    },
  },
  {
    title: "Khushii brings quality education to...",
    excerpt:
      "About a year back, the Government Primary School at Harchandpur village in Bhiwadi was on the verge of closing due to low student numbers. Substandard infrastructure, lack of teachers and poor access roads were some of the reasons people avoided sending their children….",
    image: "/images/stories/harchandpur.jpg",
    width: 700,
    height: 500,
    href: "/stories/khushii-brings-quality-education-to-harchandpur/",
    article: {
      title:
        "Khushii NGO Implemented the Shikshaantra Plus Program in Government Primary School",
      paragraphs: [
        "About a year back, the Government Primary School at Harchandpur village in Bhiwadi was on the verge of closing due to low student numbers. Substandard infrastructure, lack of teachers and poor access roads were some of the reasons people avoided sending their children to the school.",
        "In February 2017, Khushii implemented the Shikshantra Plus programme at the school. Our intervention made a slew of changes. These include renovation of classrooms, provision of floor mats & providing clean drinking water and washroom facilities. Khushii has also arranged for four additional teachers and a housekeeping steward. We also persuaded the local authorities to build a new approach road.",
        "Along with capacity building, our Project Coordinators also campaigned with community members to send their children to the school. All our efforts bore fruit, and today the number of students has gone up from 56 to 292. The children’s academic performance has also shot up remarkably. There is even a plan to upgrade the school to middle school.",
      ],
    },
  },
  {
    title: "KHUSHII provides a child-friendly playground...",
    excerpt:
      "KHUSHII has implemented the Shikshaantra Plus programme in the Thanisandra Government High School and the Government Model Primary School. The school is located at Rachenahalli Main Road, Thanisandra, Bengaluru.",
    image: "/images/stories/thanisandra.jpg",
    width: 700,
    height: 500,
    href: "/stories/thanisandra-school-gets-child-friendly-playground/",
    article: {
      title: "Thanisandra School Gets Child Friendly Playground",
      paragraphs: [
        "KHUSHII has implemented the Shikshaantra Plus programme in the Thanisandra Government High School and the Government Model Primary School. The school is located at Rachenahalli Main Road, Thanisandra, Bengaluru.",
        "We designed the Shikshaantra Plus model to combine educational development & physical development. This would enable a comprehensive and all-round growth of the children. Hence a good playground is as important as good classrooms for the success of the programme.",
        "At the Thanisandra school, the high school students and the students from the primary school, both shared a common playground. As the high school students occupied the ground during the day, the primary students could only have access after school hours. The children would stay on after school to play and only return home late in the evenings. This was a cause for concern for parents as in the absence of supervisors, the children were at considerable risk.",
        "We decided that an alternate playground must be installed to resolve the issue, which would be accessible to the primary school students during the school hours. The school staff would be present at all times to supervise the children. We swiftly obtained the required permissions from the local authorities. With our corporate partner KPMG supporting us, we initiated the work of re-creating the playground. We used recycled materials like old tires and painted them in bright colors. This gave the playground a very cheerful and positive ambience. The children and their parents were delighted to see the changes made to the playground.",
        "Thanks to generous donors like you, KHUSHII is helping provide a safe and healthy playground for the children of Thanisandra. There are many more children like them. They are denied access to basic facilities for their growth, because of the lack of adequate resources.",
      ],
    },
  },
  {
    title: "KHUSHII helps Gayatri gain financial...",
    excerpt:
      "Gayatri, a 26-year-old woman, lives with her husband and two children in Janta Vihar, Mukundpur. Due to financial constraints, her parents could not educate her beyond class 10. Post her marriage, her husband’s meagre income as a whitewash contractor….",
    image: "/images/stories/gayatri.jpg",
    width: 700,
    height: 500,
    href: "/stories/khushii-helps-gayatri-gain-financial-independence/",
    article: {
      title: "Khushii NGO Helps Gayatri Gain Financial Independence",
      paragraphs: [
        "Gayatri, a 26-year-old woman, lives with her husband and two children in Janta Vihar, Mukundpur. Due to financial constraints, her parents could not educate her beyond class 10. Post her marriage, her husband's meagre income as a whitewash contractor made it very difficult for them to make two ends meet, completely eliminating her chances of completing her education.",
        "However, Gayatri was determined to improve her and her family's situation. She attended various engagement drives conducted by KHUSHII. On one such drive, she came to know about the General Attendant Duty course offered by KHUSHII which provided good employment opportunities. With her hopes held high, she joined the course and worked hard to complete it. Post completion of her training, she promptly landed a job as a general duty attendant at Vinayak Hospital.",
        "Gayatri's salary more than doubled their family income, bringing about significant improvements in their lifestyle. Besides financial independence, the job has also given her a sense of empowerment and equality. Giving her the strength and confidence to share the family responsibilities with her husband. Further propelling her dream to create a better future for her children and family.",
      ],
    },
  },
  {
    title: "KHUSHII helps nisha pursue her...",
    excerpt:
      "Twenty-three year old Nisha lives with her parents and younger brother in the Devli village area, Delhi. Her father, who works as a plumber, places great emphasis on education. Worried by her initial lack of performance, he enrolled Nisha….",
    image: "/images/stories/nisha.jpg",
    width: 700,
    height: 500,
    href: "/stories/khushii-helps-nisha-pursue-her-dream-career/",
    article: {
      title: "Khushi NGO Helps Nisha Pursue Her Dream Career",
      paragraphs: [
        "Twenty-three year old Nisha lives with her parents and younger brother in the Devli village area, Delhi. Her father, who works as a plumber, places great emphasis on education. Worried by her initial lack of performance, he enrolled Nisha with Khushii’s Shikshantra program in 2009. Misha’s hard work, combined with the Shikshantra team’s innovative learning tools and regular extra classes bore sweet fruit. She cleared Class X with a whopping score of 86%, and her class XII with 68% marks. Nisha aspired to pursue a career in medical sciences, but the high cost of education was simply out of her father’s reach. Nisha got continuous support from team Khushii and from the Royal Bank of Scotland’s DISHA. She soon got admitted in the renowned Jamia Hamdard University. She completed her graduation in Emergency and Trauma, specialising as an Emergency Medical Technician, and intends to study further and has also applied for an MSc degree. KHUSHII gave me a ray of hope when I was in distress and perplexed about my career. The team not only revived my dream of pursueing medical sciences, but also guided me and heped me attain my dream career. I am very thankful to Khushii for helping me out. - Nisha.",
      ],
    },
  },
  {
    title: "KHUSHII recharges mohinis flagging spirits",
    excerpt:
      "A student of class 7, Mohini lives with her elder brother and step-brother in Faridabad. Disheartened by her step-father’s callous behavior, Mohini had lost all interest in life and dejection was her constant companion.",
    image: "/images/stories/mohini.jpg",
    width: 700,
    height: 500,
    href: "/stories/khushii-recharges-mohinis-flagging-spirits/",
    article: {
      title: "Khushii NGO Recharges Mohini’s Flagging Spirits",
      paragraphs: [
        "A student of class 7, Mohini lives with her elder brother and step-brother in Faridabad. Disheartened by her step-father’s callous behavior, Mohini had lost all interest in life and dejection was her constant companion. In her mind, every negative situation in her life rooted from the harsh relationship she shared with her step-father.",
        "Desperate, she turned to a counselor from Khushii and unburdened herself. She shared all of her concerns and hardships with the counselor. After a few rounds of counseling, our counselor proposed Cognitive Behavior Therapy and Art Therapy to counter her fixation and chanelize her energy towards more positive subjects.",
        "After ten sessions of therapy, Mohini is well on her way to lead a normal childhood. She is more capable than ever to channelize her thoughts. Mohini has now started keen taking interest in studies and has started to mix well with her peers.",
        "Khushii is delighted to see this positive shift in her painting!",
      ],
    },
  },
  {
    title: "KHUSHII helps Rashid to rediscover...",
    excerpt:
      "Young Rashid lives with his parents in Village Rajpura and is a student of Class V. Both his parents have to work to earn about 10,000 rupees a month.",
    image: "/images/stories/rashid.jpg",
    width: 854,
    height: 682,
    href: "/stories/khushii-helps-rashid-to-rediscover-the-joy-of-classes-and-classmates/",
    article: {
      title:
        "Khushii NGO Helps Rashid To Rediscover The Joy Of Classes And Classmates",
      paragraphs: [
        "Young Rashid lives with his parents in Village Rajpura and is a student of Class V. Both his parents have to work to earn about 10,000 rupees a month. Hence there was no supervision at home and Rashid used to skip school regularly. Observing his absenteeism, KHUSHII’s counsellors called his parents to school and came to know that they were unaware of his missing school. Our counsellors then highlighted the benefits of schooling to both Rashid and his parents. Team KHUSHII kept a close eye on Rashid and regularly counselled him to develop his interest in studies. Understanding that Rashid did not enjoy studies, they introduced Super Saturdays which included fun activities to make education enjoyable for children like Rashid. Along with studies, the team also worked on behavioural aspects like gender sensitisation, social skills and creating bonds with fellow students. Soon enough, Rashid started enjoying his classes and spending time with his classmates. Over the last few months, his attendance grew to 95% and to crown it all, he also stood 2nd in his Class V final exams. Thanks to generous donors like you, KHUSHII has helped Rashid to overcome his disinterest in school. However, there are many more Rashids from vulnerable families who need our help. Your support will ensure that they benefit from our endeavours and reap the rewards of education.",
      ],
    },
  },
  {
    title: "KHUSHII rekindles Neetu’s lost interest...",
    excerpt:
      "An appropriate physical environment, without any distraction, is critical to learning. Unfortunately for Neetu, a class IX student, she did not have such privilege at home.",
    image: "/images/stories/neetu.jpg",
    width: 400,
    height: 300,
    href: "/stories/khushii-rekindles-neetus-lost-interest-in-studies/",
    article: {
      title: "Khushii NGO Rekindles Neetu’s Lost Interest In Studies",
      paragraphs: [
        "An appropriate physical environment, without any distraction, is critical to learning. Unfortunately for Neetu, a class IX student, she did not have such privilege at home. Belonging to a marginalized family, her living conditions were poor and the added responsibility of doing her share of family chores only made her lose interest in studies. She could not focus on learning for more than half an hour. Luckily, she was enrolled in KHUSHII’s remedial classes. A counselor worked with her to improve her concentration and retention, for over two weeks. The effort has now paid off. Neetu can study with full concentration for hours at a stretch and her confidence is improving. Your support will ensure that these children receive the benefits of our endeavor to pursue their dreams.",
      ],
    },
  },
  {
    title: "KHUSHII Helps Uneducated Youth To...",
    excerpt:
      "Gaurav, an eighteen-year-old from a village in Khatawali of Rewari district in Haryana, is among the thirty youth who trained under KHUSHII initiated Skill Development Course in 2021 in partnership with AECOM….",
    image: "/images/stories/gaurav.jpg",
    width: 700,
    height: 500,
    href: "/stories/khushii-helps-uneducated-youth-to-earn-a-respectable-livelihood/",
    article: {
      title: "KHUSHII Helps Uneducated Youth To Earn A Respectable Livelihood",
      paragraphs: [
        "Gaurav, an eighteen-year-old from a village in Khatawali of Rewari district in Haryana, is among the thirty youth who trained under KHUSHII initiated Skill Development Course in 2021 in partnership with AECOM. Gaurav’s life was not the same before he enrolled in KHUSHII’s Skill Development Course supported by AECOM. Gaurav hails from a poor economic background; his parents could not afford proper education. He had little hope of finding a decent job to earn money to support himself and his father, a labourer and his mother, a housewife. “KHUSHII made my life better” - Gaurav Life took a pleasant turn after Gaurav enrolled in a motor winding course as part of our skill development initiative. Today after completing the course, Gaurav is skilled in providing repair and maintenance services for electrical appliances such as ceiling fans, coolers, butter churners, washing machines, single-phase motors, and electrical fittings. With almost no hope of earning a decent livelihood, Gaurav today is looked up to in his community as a responsible young person who makes between Rs 15,000 to Rs 18,000 from a respectable job and happily assists his family with finances. KHUSHII, with its on-ground presence and commitment to helping improve the lives of children and youth of our country, identifies areas and communities to implement its holistic solutions for bringing hope and happiness.",
      ],
    },
  },
] as const;
