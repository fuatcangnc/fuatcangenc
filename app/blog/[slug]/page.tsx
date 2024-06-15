import { groq } from "next-sanity";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Metadata, ResolvingMetadata } from "next";
import TextBlock from "@/components/ui/CodeBlock/TextandImageBlock";

export const revalidate = 30;

type Props = {
  params: { slug: string };
};






export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const project = await getPost(params.slug);
    return {
      title: project.title,
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return {
      title: "Error",
    };
  }
}

const getPost = async (slug: string) => {
  try {
    const query = groq`
      *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        publishedAt,
        body[]{
          ...,
          _type == "image" => {
            "imageUrl": asset->url,
            alt
          },
          _type == "code" => {
            language,
            code
          }
        }
      }
    `;
    const post = await client.fetch(query, { slug });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

export default async  function Page({ params }: Props) {
  const { slug } = params;

  const post=await getPost(slug)



  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert flex flex-col items-center max-w-[50rem]  mx-auto ">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="text-gray-600">
        <TextBlock value={post.body}/>
      </div>
      {post.publishedAt && (
        <p className="text-gray-400">
          {new Date(post.publishedAt).toDateString()}
        </p>
      )}
    </article>
  );
}
