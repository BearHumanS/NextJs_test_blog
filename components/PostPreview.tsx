import Link from "next/link";
import { PostMetaData } from "./PostMetadata";
import styles from "./PostPreview.module.scss";

const postPreview = (props: PostMetaData) => {
  return (
    <div className={styles.postsList}>
      <Link href={`/posts/${props.slug}`}>
        <h2 className={styles.postList_title}>{props.title}</h2>
      </Link>
      <p className={styles.postList_date}>{props.date}</p>
      <p className={styles.postList_subtitle}>{props.subtitle}</p>
    </div>
  );
};

export default postPreview;
