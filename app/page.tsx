import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import Image from "next/image";
import { postsData } from "@/data";

export default function Home() {
  return (
    <>
      <CategoriesList />
      {postsData && postsData.length > 0 ? (
        postsData.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            date={post.datepublished}
            thumbnail={post.thumbnail}
            category={post.category}
            title={post.title}
            content={post.content}
            links={post.links || []}
            authorEmail={post.authorEmail}
          />
        ))
      ) : (
        <div className="py-6">No posts to display</div>
      )}
    </>
  );
}
