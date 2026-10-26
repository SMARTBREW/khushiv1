import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Image from "./components/image";
import Link from "./components/link";

const PAGE_TITLE =
  "Reports | Annual Reports, FCRA Reports and Newsletters | Khushii";

const ANNUAL_REPORTS = [
  {
    src: "/images/reports/annual-2024-25.png",
    width: 400,
    height: 566,
    alt: "KHUSHII annual report 2024-2025",
    href: "/wp-content/uploads/2024/11/AnnualReport2024-2025.pdf",
  },
  {
    src: "/images/reports/annual-2023-24.png",
    width: 400,
    height: 566,
    alt: "KHUSHII annual report 2023-24",
    href: "/wp-content/uploads/2024/11/Annual-Report-2023-24.pdf",
  },
  {
    src: "/images/reports/annual-2022-23.jpg",
    width: 400,
    height: 566,
    alt: "KHUSHII annual report 2022-23",
    href: "/wp-content/uploads/2023/12/Khushii-Annual-Report-2022-23.pdf",
  },
  {
    src: "/images/reports/annual-2021.png",
    width: 1228,
    height: 1734,
    alt: "KHUSHII annual report",
    href: "/wp-content/uploads/2022/03/KHUSHI%20Annual%20Report.pdf",
  },
  {
    src: "/images/reports/annual-2022.jpg",
    width: 398,
    height: 561,
    alt: "KHUSHII annual report",
    href: "/wp-content/uploads/2022/03/KhushiiAnnualReport2022_updated.pdf",
  },
  {
    src: "/images/reports/annual-2019-20.png",
    width: 724,
    height: 1024,
    alt: "KHUSHII annual report 2019-2020",
    href: "/wp-content/uploads/2021/03/Annual-Report-2019-2020.pdf",
  },
  {
    src: "/images/reports/annual-2019-20-web.jpg",
    width: 724,
    height: 1024,
    alt: "KHUSHII annual report 2019 to 2020",
    href: "/wp-content/themes/khushii/pdf/annual-report/Annual-Report-2019-to-2020-Final-For-Web.pdf",
  },
  {
    src: "/images/reports/annual-low.jpg",
    width: 724,
    height: 1024,
    alt: "KHUSHII annual report",
    href: "/wp-content/themes/khushii/pdf/annual-report/Khushii-Annual-Report-Low-Ver-Final.pdf",
  },
  {
    src: "/images/reports/annual-2016-17.jpg",
    width: 725,
    height: 1024,
    alt: "KHUSHII annual report 2016-2017",
    href: "/wp-content/themes/khushii/pdf/annual-report/Annual-Report-2016-2017.pdf",
  },
  {
    src: "/images/reports/annual-2015-16.jpg",
    width: 725,
    height: 1024,
    alt: "KHUSHII annual report 2015-2016",
    href: "/wp-content/themes/khushii/pdf/annual-report/Annual-Report-2015-2016.pdf",
  },
  {
    src: "/images/reports/annual-2014-15.jpg",
    width: 724,
    height: 1024,
    alt: "KHUSHII annual report 2014-2015",
    href: "/wp-content/themes/khushii/pdf/annual-report/Annual-Report-2014-2015.pdf",
  },
] as const;

const FCRA_CERTIFICATE =
  "/wp-content/themes/khushii/pdf/fcra-report/FCRA-Certificate-New-Khushii.pdf";

const FCRA_YEARS = [
  {
    title: "2016-2017 Annual Reports",
    links: [
      ["FCRA Q1 2016-17", "/wp-content/themes/khushii/pdf/fcra-report/FCRA-Certificate-Updated_KHUSHII.pdf"],
      ["FCRA Q2 2016-17", "/wp-content/themes/khushii/pdf/fcra-report/FY-2016-17-Q2.pdf"],
      ["FCRA Q3 2016-17", "/wp-content/themes/khushii/pdf/fcra-report/FY-2016-17-Q3-1.pdf"],
      ["FCRA Q4 2016-17", "/wp-content/themes/khushii/pdf/fcra-report/FY-2016-17-Q4-1.pdf"],
      ["FCRA RETURN 2016-17", "/wp-content/themes/khushii/pdf/fcra-report/FCRA-4-2016-17.pdf"],
    ],
  },
  {
    title: "2017-2018 Annual Reports",
    links: [
      ["FCRA Q1 2017-18", "/wp-content/themes/khushii/pdf/fcra-report/FY-2017-18-Q1-1.pdf"],
      ["FCRA Q2 2017-18", "/wp-content/themes/khushii/pdf/fcra-report/Q2.pdf"],
      ["FCRA Q3 2017-18", "/wp-content/themes/khushii/pdf/fcra-report/Q3.pdf"],
      ["FCRA Q4 2017-18", "/wp-content/themes/khushii/pdf/fcra-report/Q4.pdf"],
      ["FCRA RETURN 2017-18", "/wp-content/themes/khushii/pdf/fcra-report/FCRA-RETURN-2017-18.pdf"],
    ],
  },
  {
    title: "2018-2019 Annual Reports",
    links: [
      ["FCRA Q1 2018-19", "/wp-content/themes/khushii/pdf/fcra-report/FCRA-DONATION-DETAIL-18-19-Q1.pdf"],
      ["FCRA Q2 2018-19", "/wp-content/themes/khushii/pdf/fcra-report/FCRA-DONATION-DETAIL-18-19-Q1-Q2-Q2.pdf"],
      ["FCRA Q3 2018-19", "/wp-content/themes/khushii/pdf/fcra-report/Q3D.pdf"],
      ["FCRA Q4 2018-19", "/wp-content/themes/khushii/pdf/fcra-report/Q4D.pdf"],
      ["FCRA RETURN 2018-19", "/wp-content/uploads/2020/11/FC4_Khushii_FCRA.pdf"],
    ],
  },
  {
    title: "2019-2020 Annual Reports",
    links: [
      ["FCRA Q1 2019-20", "/wp-content/themes/khushii/pdf/fcra-report/Q1-1.pdf"],
      ["FCRA Q2 2019-20", "/wp-content/uploads/2021/02/q219-20.pdf"],
      ["FCRA Q3 2019-20", "/wp-content/uploads/2021/02/q319-20.pdf"],
      ["FCRA Q4 2019-20", "/wp-content/uploads/2021/02/q419-20.pdf"],
      ["FCRA RETURN 2019-20", "/wp-content/uploads/2021/10/FCRA-Return-19-20.pdf"],
    ],
  },
  {
    title: "2020-2021 Annual Reports",
    links: [
      ["FCRA Q1 2020-21", "/wp-content/uploads/2021/02/q1-converted.pdf"],
      ["FCRA Q2 2020-21", "/wp-content/uploads/2021/02/q2-converted.pdf"],
      ["FCRA Q3 2020-21", "/wp-content/uploads/2021/02/q3-converted.pdf"],
      ["FCRA Q4 2020-21", "/wp-content/themes/khushii/pdf/fcra-report/2021pdf.pdf"],
      ["FCRA Return 2020-21", "/wp-content/uploads/2022/06/FCRA-Return-2020-21.pdf"],
    ],
  },
  {
    title: "2021-2022 Annual Reports",
    links: [
      ["FCRA QTR 1", "/wp-content/themes/khushii/pdf/fcra-report/aprilandjune2022.pdf"],
      ["FCRA QTR 2", "/wp-content/uploads/2021/10/FCRA-QTR-2.pdf"],
      ["FCRA QTR 3", "/wp-content/uploads/2022/04/QTR3.pdf"],
      ["FCRA QTR 4", "/wp-content/uploads/2022/04/QTR-4.pdf"],
      ["FCRA Return 2021-22", "/wp-content/uploads/2024/09/FCRA-Return-FY2021-22.pdf"],
    ],
  },
  {
    title: "2022-2023 Annual Reports",
    links: [
      ["FCRA Q1 2022-23", "/wp-content/uploads/2022/11/FCRA-Q1-April-June.pdf"],
      ["FCRA Q2 2022-23", "/wp-content/uploads/2022/11/Q2-July-September.pdf"],
      ["FCRA Q3 2022-23", "/wp-content/uploads/2024/09/FCRA-Q3-Oct-Dec-2022.pdf"],
      ["FCRA Q4 2022-23", "/wp-content/uploads/2024/09/FCRA-Q4-Jan-Mar-2023.pdf"],
      ["FCRA Return 2022-23", "/wp-content/uploads/2024/09/FCRA-Return-FY-2022-23.pdf"],
    ],
  },
  {
    title: "2023-2024 FCRA Reports",
    links: [
      ["FCRA Q1 2023-24", "/wp-content/uploads/2024/09/FCRA-Q1-April-June.pdf"],
      ["FCRA Q2 2023-24", "/wp-content/uploads/2024/09/FCRA-Q2-July-Sept.pdf"],
      ["FCRA Q3 2023-24", "/wp-content/uploads/2024/09/FCRA-Q3-Oct-Dec.pdf"],
      ["FCRA Q4 2023-24", "/wp-content/uploads/2024/09/FCRA-Q4-Jan-Mar.pdf"],
      ["FCRA Return 2023-24", "/wp-content/uploads/2025/01/FCRA-FINAL-RETURN-fy-2023-24-FC4.pdf"],
    ],
  },
  {
    title: "2024-2025 FCRA Reports",
    links: [
      ["FCRA Q1 2024-25", "/wp-content/uploads/2024/09/FCRA-Q1-Apr-Jun-2024.pdf"],
      ["FCRA Q2 2024-25", "/wp-content/uploads/2025/01/FCRA-Q2-July-Sept-2024.pdf"],
      ["FCRA Q3 2024-25", "/wp-content/uploads/2025/01/FCRA-Q3-Oct-Dec-2024.pdf"],
      ["FCRA Q4 2024-25", "/wp-content/uploads/2025/05/FCRA-Q4-January-to-March-2025.pdf"],
      ["FCRA Return 2024-25", "/wp-content/uploads/2026/01/FCRA-Return-2024-25.pdf"],
    ],
  },
  {
    title: "2025-2026 FCRA Reports",
    links: [
      ["FCRA Q1 2025-26", "/wp-content/uploads/2025/12/FCRA-Q1-Apr-Jun-2025.pdf"],
      ["FCRA Q2 2025-26", "/wp-content/uploads/2025/12/FCRA-Q2-July-Sept-2025.pdf"],
    ],
  },
] as const;

const NEWSLETTERS = [
  ["dec.png", 587, 762, "KHUSHII Ki Chithi, December 2024", "/wp-content/uploads/2025/02/KHUSHII-KI-CHITHI-dec-2024.pdf"],
  ["nov.png", 585, 758, "KHUSHII Ki Chithi, November 2024", "/wp-content/uploads/2025/02/KHUSHII-KI-CHITHI-nov-2024.pdf"],
  ["oct.png", 585, 758, "KHUSHII Ki Chithi, October 2024", "/wp-content/uploads/2025/02/KHUSHII-KI-CHITHI-oct-2024.pdf"],
  ["chithi-july.jpg", 585, 760, "KHUSHII Ki Chithi, July 2024", "/wp-content/uploads/2024/08/KHUSHII-KI-CHITHI-July2024.pdf"],
  ["chithi-jun.jpg", 585, 760, "KHUSHII Ki Chithi, June 2024", "/wp-content/uploads/2024/08/KHUSHII-KI-CHITHI-June2024.pdf"],
  ["chithi-may.jpg", 585, 760, "KHUSHII Ki Chithi, May 2024", "/wp-content/uploads/2024/08/KHUSHII-KI-CHITHI-May2024.pdf"],
  ["chithi-apr.jpg", 585, 760, "KHUSHII Ki Chithi, April 2024", "/wp-content/uploads/2024/08/KHUSHII-KI-CHITHI-April2024.pdf"],
  ["k-news.jpg", 500, 685, "KHUSHII donor newsletter, January 2024", "/wp-content/uploads/2024/03/KHUSHII-Donor-Newsletter-Jan2024.pdf"],
  ["chithi-oct-1.jpg", 225, 300, "KHUSHII donor newsletter, October 2023", "/wp-content/uploads/2023/10/KHUSHII-Donor-Newsletter-Oct.pdf"],
  ["chitti-apr-225x300-1.jpg", 225, 300, "KHUSHII Ki Chitthi, April 2023", "/wp-content/uploads/2023/04/KHUSHII-Ki-Chitthi-Apr23.pdf"],
  ["chitti-feb.jpg", 595, 792, "KHUSHII donor newsletter", "/wp-content/uploads/2023/02/KHUSHII-Donor-Newsletter-04.pdf"],
  ["knl.jpg", 595, 792, "KHUSHII donor newsletter", "/wp-content/uploads/2022/11/KHUSHII-Donor-Newsletter-03.pdf"],
  ["chitt-sept.jpg", 700, 990, "KHUSHII donor newsletter, September 2022", "/wp-content/uploads/2022/09/KHUSHII-DonorNewsletter-Sep22.pdf"],
  ["chitti.jpg", 700, 990, "KHUSHII donor newsletter", "/wp-content/uploads/2022/07/KHUSHII-Donor-Newsletter.pdf"],
  ["bravehearts.jpg", 700, 990, "KHUSHII newsletter, August 2021", "/wp-content/uploads/2021/08/Khushii-Newsletter-August-2021-Final-1.pdf"],
  ["Khushi-Newsletter-oct-20-mar-21.jpg", 489, 688, "KHUSHII newsletter, October 2020 to March 2021", "/wp-content/uploads/2020/11/Khushii-Newsletter-F.pdf"],
  ["newletter-2.jpg", 489, 688, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-2.pdf"],
  ["newletter-1.jpg", 628, 773, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-1.pdf"],
  ["newletter-3.jpg", 834, 1024, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-3.pdf"],
  ["newletter-4.jpg", 856, 1024, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-4.pdf"],
  ["newletter-5.jpg", 558, 670, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-5.pdf"],
  ["newletter-6.jpg", 592, 836, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-6.pdf"],
  ["newletter-7.jpg", 596, 840, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-7.pdf"],
  ["newletter-8-scaled.jpg", 1580, 2560, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-8.pdf"],
  ["newletter-9-scaled.jpg", 1580, 2560, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-9.pdf"],
  ["newletter-10.jpg", 562, 793, "KHUSHII newsletter", "/wp-content/uploads/2020/11/newletter-10.jpg"],
  ["newletter-11.jpg", 653, 603, "KHUSHII newsletter", "/wp-content/uploads/2020/11/khushii-n-11.pdf"],
] as const;

export default function Reports() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, []);

  useEffect(() => {
    const section = pathname.includes("/fcra-reports")
      ? "fcra"
      : pathname.includes("/newsletter")
        ? "newsletter"
        : null;
    if (!section) return undefined;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <>
      <section className="bg-white px-5 pb-6 pt-12 md:px-10 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            Reports
          </h1>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>
      </section>

      <section id="annual" className="scroll-mt-24 bg-white px-5 pb-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-medium text-khushii-brown md:text-3xl">
            Annual Reports
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {ANNUAL_REPORTS.map((report) => (
              <li key={report.href} className="border border-[#f0e2c4] bg-[#fbf7f0]">
                <Link
                  href={report.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={report.src}
                    alt={report.alt}
                    width={report.width}
                    height={report.height}
                    className="h-auto w-full rounded-md shadow-sm"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="fcra"
        className="scroll-mt-24 bg-white px-5 py-14 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-medium text-khushii-brown md:text-3xl">
            FCRA Reports
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <Link
            href={FCRA_CERTIFICATE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-sm text-khushii-gold-dark"
          >
            <Image
              src="/images/reports/download-icon.png"
              alt=""
              width={300}
              height={300}
              className="h-5 w-5"
            />
            Download FCRA Certificate
          </Link>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FCRA_YEARS.map((year) => (
              <li
                key={year.title}
                className="border border-[#f0e2c4] border-l-4 border-l-khushii-gold bg-[#fbf7f0] p-5"
              >
                <h3 className="text-sm font-medium text-khushii-brown">
                  {year.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {year.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-khushii-gold-dark"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="newsletter"
        className="scroll-mt-24 bg-white px-5 py-14 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-medium text-khushii-brown md:text-3xl">
            Newsletter
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <ul className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {NEWSLETTERS.map(([file, width, height, alt, href]) => (
              <li key={file} className="border border-[#f0e2c4] bg-[#fbf7f0]">
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={`/images/reports/newsletters/${file}`}
                    alt={alt}
                    width={width}
                    height={height}
                    className="h-[21.875rem] w-full object-cover object-top"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
