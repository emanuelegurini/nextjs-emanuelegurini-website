import Image from "next/image";
import { parseISO, format } from "date-fns";
import { PropsWithChildren, Suspense } from "react";

import Container from "../components/Container";
//import { Post } from 'lib/types';
//import { urlForImage } from 'lib/sanity';

export default function BlogLayout({ children, post }: any) {
  console.log("post data", post);
  return (
    <Container
      title={`${post.title} – Emanuele Gurini`}
      description={post.excerpt}
      image={post.coverImage}
      //date={new Date(post.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>

        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Emanuele Gurini"
              height={24}
              width={24}
              sizes="20vw"
              src="/avatar.jpg"
              className="rounded-full"
            />

            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {"Emanuele Gurini / "}
              {/*{format(parseISO(post.date), "MMMM dd, yyyy")}*/}
              {post.date}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            Reading Time: {post.time} Min
          </p>
        </div>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            <img
              className="rounded drop-shadow-2xl"
              src={post.coverImage}
              alt=""
            />

            {children}
          </div>
          <div className="mt-8"></div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/EmanueleGurini/nextjs-emanuelegurini-website/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Suggest Change"}
            </a>
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
