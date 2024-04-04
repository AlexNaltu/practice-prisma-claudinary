import React from "react";
import { postsData } from "@/data";
import Post from "@/components/Post";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Dashboard() {
  //await getServerSession and pass authOptions
  const session = await getServerSession(authOptions);
  //if !session redirect to sign-in page
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div>
      <h1>My Posts</h1>

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
        <div className="py-6">
          No posts created yet {""}
          <Link href={"/create-post"} className="underline">
            Create New
          </Link>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
