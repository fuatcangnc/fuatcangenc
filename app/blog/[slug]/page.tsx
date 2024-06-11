import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import {client} from "@/sanity/lib/client";
import { Metadata, ResolvingMetadata } from "next";
import ImageComponent from "@/components/ui/ImageComponent";
export const revalidate = 30
type Props = {
  params: { slug: string }
}
const components = {
  types: {
    image: ImageComponent,
  },
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  // fetch data
  const project = await getPost(params.slug)
 
  return {
    title: project.title,
  }
}

const getPost = async (slug: string) => {
  try {
    const query = groq`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        body,
        publishedAt,
        slug,
         mainImage {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `;
    const post = await client.fetch(query, { slug });
    return post;
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert flex flex-col items-center max-w-[50rem]  mx-auto ">
      <Link href="/">
      </Link>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="text-gray-600">
        <PortableText value={post.body} components={components} />
      </div>
      <p className="text-gray-400">
        {new Date(post.publishedAt).toDateString()}
      </p>
    </article>
  );
}
