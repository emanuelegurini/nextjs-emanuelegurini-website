import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

export default function Container(props: any) {
  const { children, title, description, type, image, date } = props;
  const router = useRouter();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://emanuelegurini.blog${router.asPath}`}
        />
        <link rel="shortcut icon" href="/avatar.jpg" />
        <link
          rel="canonical"
          href={`https://emanuelegurini.blog${router.asPath}`}
        />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Emanuele Gurini" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EmanueleGurini" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {date && <meta property="article:published_time" content={date} />}
      </Head>
      <Header />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
      <div className="w-full text-center bg-violet-200 p-4 m-0">
        <p>
          I want to thank{" "}
          <a className="font-bold" href="https://leerob.io/">
            Lee Robinson
          </a>{" "}
          for his amazing theme that I stole
        </p>
      </div>
    </div>
  );
}

Container.defaultProps = {
  title: "Emanuele Gurini – Developer, writer, creator.",
  description: `Front-end and software developer, Creator`,
  image:
    "https://www.emanuelegurini.blog/static/images/cover-emanuele-gurini-min.jpg",
  type: "website",
};
