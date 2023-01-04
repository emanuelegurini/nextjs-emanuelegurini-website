import Link from "next/link";
interface IBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  time: string;
}
export default function BlogPost(data: any) {
  const {
    data: {
      slug,
      frontmatter: { title, excerpt, time },
    },
  } = data;
  return (
    <Link href={`/blog/${slug}`} className="w-full">
      <div className="w-full mb-8">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {title}
          </h4>
          <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
            {`${time ? time : ""} Time`}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
      </div>
    </Link>
  );
}
