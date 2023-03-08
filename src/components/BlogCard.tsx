import Link from "next/link";
import DocumentIcon from "@assets/images/icons/document.svg";

const BlogCard = ({ header, text, url, urlText }: any) => {
  return (
    <div className="bg-[#F4F5F6] rounded-lg p-10">
      <DocumentIcon width="30" height="30" fill="#C3C3C3" />
      <h3 className="text-2xl font-bold my-5">{header}</h3>
      <div className="text-[#7A8192] mb-5">{text}</div>
      <Link href={`/blog/${url}`} className="text-[#3288FC]">
        {urlText}
      </Link>
    </div>
  );
};

export default BlogCard;
