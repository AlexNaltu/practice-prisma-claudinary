"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

//add a button with an onClick event if use signOut from next-auth and sign you out

const Navbar = () => {
  //status from useSession, checks if status is authenticated else show sign in button
  const { status, data: session } = useSession();
  const [isPopupVisible, setIsPopUpVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      //first checks is popupRef.current is a DOM element, second condition checks wether the user clicked outside of the container e: MouseEvent
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopUpVisible(false);
      }
    };

    //adds and event click to handleClickOutside
    document.addEventListener("click", handleClickOutside);

    //if not isPopupVisible remove Event
    if (!isPopupVisible) {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <div className="flex justify-between pb-4 border-b-2 mb-4 relative">
      <div>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold tracking-tighter text-dark">
            Milsugi News
          </h1>
        </Link>
        <p className="text-sm">
          Exploring Tommorrow's Innovations <br /> One Byte at a Time
        </p>
      </div>

      {status === "authenticated" ? (
        <>
          <div
            ref={popupRef}
            className={`absolute z-30 right-0 top-20 bg-white p-6 shadow-lg rounded-md flex-col gap-2 text-right min-w-[160px] ${
              isPopupVisible ? "flex" : "hidden"
            }`}
          >
            {/*if we have session display user name and email */}
            <div className="font-bold">{session?.user?.name}</div>
            <div>{session?.user?.email}</div>

            {/*onClick sets the pop up false*/}
            <Link
              className="hover:underline"
              href={"/dashboard"}
              onClick={() => setIsPopUpVisible(false)}
            >
              Dashboard
            </Link>
            <Link
              className="hover:underline"
              href={"/create-post"}
              onClick={() => setIsPopUpVisible(false)}
            >
              Create Post
            </Link>

            <button onClick={() => signOut()} className="btn">
              Sign Out
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              href={"/create-post"}
              className="hidden md:flex gap-2 items-center mr-6"
            >
              <span>
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
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>Create New</span>
            </Link>
            {/*display the image, can be also null*/}
            {/*on click that toggles the setIsPopUpVisible to true and false */}
            <Image
              src={session?.user?.image || ""}
              alt="/"
              width={36}
              height={36}
              className="rounded-full cursor-pointer"
              onClick={() => setIsPopUpVisible((prev) => !prev)}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center">
          <Link className="btn" href={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
