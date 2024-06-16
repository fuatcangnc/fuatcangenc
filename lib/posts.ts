import { client } from "@/sanity/lib/client";
export const revalidate = 60;

const query = `*[_type == "post"] {
    title,
    slug,
    body,
    publishedAt
  }
`;

export const getPosts=async()=>{
const data= await client.fetch(query)
.then((data)=>{
    return data
})
return data
}