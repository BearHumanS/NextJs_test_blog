import styles from "./page.module.scss";
import { getPostMetaData } from "@/lib/post";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetaData();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <main>
      <div className={styles.main_inner}>{postPreviews}</div>
    </main>
  );
}
