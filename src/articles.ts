export const ARTICLES = {
  "manoshakti-early-school-intervention-initiative":
    "/manoshakti-early-school-intervention-initiative-2/",
  "sensitive-teacher-successful-student":
    "/sensitive-teacher-successful-student-a-look-at-khushiis-manobal/",
  "unveiling-the-menstrual-enigma-from-taboos-to-empowerment":
    "/unveiling-the-menstrual-enigma-from-taboos-to-empowerment/",
  "manoshakti-my-moment-of-joy":
    "/manoshakti-my-moment-of-joy-illuminating-young-lives-through-a-yearlong-program-for-underprivileged-children/",
  yuvashree: "/yuvashree/",
  "dignity-kits": "/dignity-kits-enhance-enrolment-and-keep-girls-in-school/",
  "education-in-covid-times": "/education-in-covid-times-a-multi-front-issue/",
  "sexual-health-and-reproduction-education":
    "/sexual-health-and-reproduction-education/",
  "a-lost-generation": "/a-lost-generation-what-we-must-do/",
  "khushiis-shre": "/khushiis-sexual-health-reproductive-education-shre/",
  savitri: "/khushii-brings-a-glimmer-of-hope-to-savitri-life/",
  "zero-tolerance-for-bullying":
    "/zero-tolerance-for-bullying-khushii-standing-against-bullying-in-schools/",
  "general-duty-attendant":
    "/skill-building-of-youth-through-generals-duty-attendant-course/",
} as const;

export type ArticleKey = keyof typeof ARTICLES;

export function articleKeyFromPath(pathname: string) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return (Object.keys(ARTICLES) as ArticleKey[]).find(
    (key) => ARTICLES[key] === path,
  );
}
