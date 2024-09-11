import client from "@/lib/client";
import { groq } from "next-sanity";
export default async function CppNotes({ params }) {
  const { slug } = params;
  const doc= await client.fetch(
    `*[_type == "web" && slug.current == $slug]{
      title,
      _id,
      slug,
      description,
      body
    }`,
    { slug }
  );

  return <div>{JSON.stringify(doc)}</div>;
}
