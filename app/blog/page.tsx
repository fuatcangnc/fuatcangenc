import PostCard from "@/components/ui/PostCard";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
export const revalidate = 60;
const query = `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt
      }
    `;

  const getPosts=async()=>{
    const data= await client.fetch(query)
    .then((data)=>{
        return data
    })
    return data
}
async function BlogPage() {
    const posts=await getPosts()
    console.log(posts)
  return (
    <div className="flex flex-col  max-w-[50rem]  mx-auto">
      <div>
        <h1 className="text-[28px] text-[#5a647b] font-semibold">
          <span className="text-gray-900 font-bold">
            Hi 👋🏻 I'm Fuat, and this is my blog
          </span>
          . Here, I share through my writing my experience as a frontend
          engineer and everything I'm learning about on React, Shaders, React
          Three Fiber, Framer Motion, and more.
        </h1>
        <div className="w-max">
          <Link
            href={""}
            target="_blank"
            className="flex group justify-center items-center flex-grow h-10 relative gap-1 px-2 py-4 rounded-xl bg-white  hover:bg-gray-800 ursor-pointer  border border-[#e8eef33b]"
          >
            <div className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
              <FaTwitter />
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
              Twitter (X)
            </p>
          </Link>
        </div>
      </div>
      <h2 className="text-[24px] text-left mt-20 mb-4">
        All Articles
      </h2>
      {
        posts?.map((blog,index)=>(
            <PostCard key={index} blog={blog}/>

        ))
      }
    </div>
  );
}

export default BlogPage;
