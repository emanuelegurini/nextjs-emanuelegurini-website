import Image from "next/image";
import { Suspense } from "react";
import Container from "../components/Container";
//import { PropsWithChildren, Suspense } from "react";
//import { Post } from 'lib/types';
//import { urlForImage } from 'lib/sanity';

export default function BlogLayout({ children, post }: any) {
  return (
    <Container
      title={`${post.title} · Emanuele Gurini - Software Developer, Analyst, curious mind, and creator`}
      description={post.excerpt}
      image={post.coverImage}
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
              {post.date}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            Reading Time: {post.time} Min
          </p>
        </div>
        <Suspense fallback={null}>
          <div className="w-full top-0 left-0 mt-4 prose dark:prose-dark max-w-none">
            <div className="lg:w-full lg:h-[378px]">
              <img
                className="rounded drop-shadow-2xl w-full h-[auto]"
                src={post.coverImage}
                alt={post.slug}
              />
            </div>

            {children}
          </div>
          <div className="mt-8"></div>
          <div className="text-sm text-gray-400 dark:text-gray-300 bg">
            In this blog, you will find articles that have been written with the
            help of ChatGPT. If you notice any information that has been sourced
            from other sources, please let me know. I will verify the source and
            make sure to properly cite it in the article.
            <br />
            <br />
            <a
              href="https://github.com/EmanueleGurini/nextjs-emanuelegurini-website/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-700"
            >
              {"Suggest Change"}
            </a>
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
