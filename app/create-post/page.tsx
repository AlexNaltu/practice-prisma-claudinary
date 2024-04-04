import CreatePostForm from "@/components/CreatePostForm";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

//import getServerSesion, authOptions and redirect

async function CreatePost() {
  //await getServerSession and pass authOptions
  const session = await getServerSession(authOptions);

  //if !session redirect to sign-in page
  if (!session) {
    redirect("/sign-in");
  }

  return <CreatePostForm />;
}

export default CreatePost;
