import Link from 'next/link'
import React from 'react'
import { groq, PortableText } from "next-sanity";
import PostCard from './PostCard';
import {client, sanityFetch} from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Bento from './Bento';

export const revalidate = 30
const getPosts = async () => {
  try {
    const query = `
      *[_type == "post"] {
        title,
        slug,
        body,
        publishedAt
      }
    `;
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async () => {
  try {
    const query = `
    *[_type == "project"] {
      title,
      slug,
      body,
        mainImage,
      publishedAt
    }
    `;
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.log(error);
  }
};
async function Content() {
    
  const blogs = await getPosts();
  const projects = await getProjects();
  return (
    <div className='flex flex-col  flex-grow-1 flex-shrink-1 w-full  h-[669px] gap-16'>


      {/* <section>
        <h2 className="text-2xl font-bold">💾 Latest Projects</h2>
        <div className="py-2 flex gap-3">
          {projects.map((project:any, index:any) => (
            <Link href={`/projects/${project?.slug.current}`} key={index}>
              <div className="py-2 flex justify-between align-middle gap-2">
                <div>
                  <h3 className="text-lg font-bold">{project?.title}</h3>
                  <div className="text-gray-600">
                    <PortableText value={project?.body} />
                  </div>
                  <div className="my-auto text-gray-400">
                    <p>{new Date(project?.publishedAt).toDateString()}</p>
                  </div>
                  <Image
                    src={urlForImage(project?.mainImage)}
                    width={200}
                    height={200}
                    alt=""
                  ></Image>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
      <Bento></Bento>

      
      <section className="w-full">
        <h2 className="text-2xl font-bold text-white mb-4"> Latest Posts</h2>
        <div className="py-2 gap-4 flex flex-col">
          {blogs.map((blog:any, index:any) => (
            <PostCard blog={blog} key={index}></PostCard>

            // <Link href={`/posts/${blog.slug.current}`} key={index}>
            //   <div className="py-2 flex justify-between align-middle gap-2">
            //     <div>
            //       <h3 className="text-lg font-bold">{blog.title}</h3>
            //       <div className="text-gray-600">
            //         <PortableText value={blog.body} />
            //       </div>
            //       <div className="my-auto text-gray-400">
            //         <p>{new Date(blog.publishedAt).toDateString()}</p>
            //       </div>
            //     </div>
            //   </div>
            // </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Content