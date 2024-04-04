"use client";
import { categoriesData } from "@/data";
import Link from "next/link";
import React, { useState } from "react";

const CreatePostForm = () => {
  //store the links in this useState
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState("");

  //setLinkInput to the setLinks
  //preventDefault reload page, e is of type React.MouseEvent
  //onClick event button added to addLink
  const addLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    //checks if we have text in the linkInput
    if (linkInput.trim() !== "") {
      //adds new links to the existing links, prev extracts all elements and gets the new linkInput
      setLinks((prev) => [...prev, linkInput]);
      //sets the link in the links state when add button pressed
      setLinkInput("");
    }
  };

  //index is type number
  const deleteLink = (index: number) => {
    //get all previous links
    //if index is not the same as i , it will delete the link
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  //if links exists then map 33

  return (
    <div>
      <h2>Create Post</h2>
      <form action="" className="flex flex-col gap-2">
        <input type="text " placeholder="title" />
        <textarea placeholder="Content"></textarea>

        {links &&
          links.map((link, i) => (
            <div key={i} className="flex items-center gap-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                </svg>
              </span>
              <Link href={link} className="link flex">
                {link}
              </Link>
              <span className="cursor-pointer" onClick={() => deleteLink(i)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>
            </div>
          ))}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Paste the link"
            className="flex-1"
            //acces the data , what we add to the input field will be added to the setLinkInput state
            onChange={(e) => setLinkInput(e.target.value)}
            //value is linkInput
            value={linkInput}
          />
          <button onClick={addLink} className="btn flex gap-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </span>
            Add
          </button>
        </div>
        <select className="p-3 rounded-md border appearance-none">
          <option>Select a Category</option>
          {categoriesData &&
            categoriesData.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>
        <button type="submit" className="primary-btn">
          {" "}
          Create Post
        </button>
        <div className="p-2 text-red-500 font-bold">Error Message </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
