import { getPostContent, getPostMetaData } from "@/lib/post";
import Markdown from "markdown-to-jsx";
import styles from "./page.module.scss";

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h1 className={styles.postItem_title}>{post.data.title}</h1>
      <article className="prose prose-slate">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
