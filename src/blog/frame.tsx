import { useEffect, useState } from "react";

import { POSTS } from "../Blog";
import Image from "../components/image";
import Link from "../components/link";

export type BlogCard = (typeof POSTS)[number];

export function ArticleTitle({
  title,
  category,
  date,
}: {
  title: string;
  category: string;
  date: string;
}) {
  return (
    <header className="text-left">
      <h1 className="text-3xl font-medium text-khushii-brown md:text-4xl">{title}</h1>
      <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
      <p className="mt-4 text-sm text-khushii-gray">
        {category}
        <span className="mx-2">·</span>
        Team Di
        <span className="mx-2">·</span>
        {date}
      </p>
    </header>
  );
}

export function Callout({
  title,
  children,
}: {
  title?: string;
  children?: string;
}) {
  return (
    <div className="border-l-4 border-khushii-gold bg-[#fbf7f0] px-5 py-5 text-left text-khushii-brown">
      {title ? <p className="font-medium">{title}</p> : null}
      {children ? (
        <p className={title ? "mt-3 leading-8" : "leading-8"}>{children}</p>
      ) : null}
    </div>
  );
}

export function ShareLinks({ title }: { title: string }) {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  if (!pageUrl) return null;

  const url = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);
  const links = [
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${url}`],
    ["Twitter", `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${url}`],
    ["WhatsApp", `https://wa.me/?text=${encodedTitle}%20${url}`],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${url}`],
  ] as const;

  return (
    <div className="text-left">
      <h2 className="text-lg font-medium text-khushii-brown">Share this Blog</h2>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {links.map(([name, href]) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-khushii-gold-dark"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PostNav({
  older,
  newer,
}: {
  older?: { href: string; title: string } | null;
  newer?: { href: string; title: string } | null;
}) {
  if (!older && !newer) return null;

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {older ? (
        <p>
          <Link href={older.href} className="text-sm text-khushii-gold-dark">
            « {older.title}
          </Link>
        </p>
      ) : (
        <span />
      )}
      {newer ? (
        <p className="sm:text-right">
          <Link href={newer.href} className="text-sm text-khushii-gold-dark">
            {newer.title} »
          </Link>
        </p>
      ) : null}
    </div>
  );
}

export function RelatedPosts({ posts }: { posts: readonly BlogCard[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-white px-5 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-medium text-khushii-brown">Related Posts</h2>
        <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <li key={post.href} className="border border-[#f0e2c4] bg-[#fbf7f0]">
              <Link href={post.href} className="block">
                <Image
                  src={post.image}
                  alt=""
                  width={post.width}
                  height={post.height}
                  className="h-[12rem] w-full object-cover object-center"
                />
                <div className="px-4 py-4">
                  <p className="font-medium leading-6 text-khushii-brown">{post.title}</p>
                  <p className="mt-2 text-sm text-khushii-gray">{post.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ArticleEnd({
  title,
  older,
  newer,
  related,
}: {
  title: string;
  older?: { href: string; title: string } | null;
  newer?: { href: string; title: string } | null;
  related?: readonly (BlogCard | undefined)[];
}) {
  const posts = (related ?? []).filter((post): post is BlogCard => post !== undefined);

  return (
    <>
      <section className="bg-white px-5 pb-14">
        <div className="mx-auto max-w-4xl">
          <ShareLinks title={title} />
          <PostNav older={older} newer={newer} />
        </div>
      </section>
      {related ? <RelatedPosts posts={posts} /> : null}
    </>
  );
}
