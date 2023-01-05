import type { NextPage } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Container from "../components/Container";
import VideoCard from "../components/VideoCard";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPostCard from "../components/BlogPostCard";

const Home: NextPage = ({ posts }: any) => {
  return (
    <Suspense fallback={null}>
      <Container
        image={
          "https://www.emanuelegurini.blog/static/images/cover-emanuele-gurini-min.jpg"
        }
      >
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Emanuele Gurini
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software Developer at{" "}
                <span className="font-semibold">
                  Flowing, a Claranet Company
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Supporting developers with the tools and knowledge to build fast
                and reliable web applications through a collaborative and
                supportive learning experience. Featuring courses on web
                development, serverless design, and React/Next.js
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Emanuele Gurini"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Posts Section
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            {posts
              .filter((_: any, index: any) => {
                return index < 3;
              })
              .map((post: any, index: any) => {
                const { frontmatter, slug } = post;
                const gradient = [
                  "from-[#D8B4FE] to-[#818CF8]",
                  "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
                  "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
                ];
                return (
                  <BlogPostCard
                    key={"post-" + index}
                    data={{
                      ...frontmatter,
                      slug,
                      gradient: gradient[index],
                    }}
                  />
                );
              })}
          </div>
          <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {"Read all posts"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Video Section
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This section provides in-depth videos on front-end and low level
            programming. Dive into the technical details of front-end
            development, including HTML, CSS, and JavaScript, as well as modern
            frameworks and libraries
          </p>
          <VideoCard
            index="01"
            href="https://www.youtube.com/watch?v=Jj20Bxpdnls&t=101s"
            length="02:46"
            title="Tailwind CSS - Specifying which files to process"
          />
          {/*          <VideoCard
            index="02"
            href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
            length="54:22"
            title="The Dependency Hell in Node.js: How to Manage Dependency Conflicts"
          />*/}

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@EmanueleGurini"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Watch all videos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
export default Home;
