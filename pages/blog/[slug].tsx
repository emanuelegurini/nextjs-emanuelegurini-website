import fs from "fs";
import path from "path";
import BlogLayout from "../../layouts/blog";
import matter from "gray-matter";
import { marked } from "marked";

export default function PostPage({
  frontmatter: {
    title,
    category,
    cover_image: coverImage,
    excerpt,
    time,
    author,
    date,
  },
  content,
  slug,
}: any) {
  return (
    <BlogLayout post={{ title, coverImage, excerpt, time, author, date }}>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

// @ts-ignore
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { frontmatter, content, slug },
  };
}
