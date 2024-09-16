import client from "@/lib/client";
import { groq } from "next-sanity";
import Link from 'next/link';

export default async function WebNotes() {
  // Fetch all documents with title and slug
  const docs = await client.fetch(
    groq`*[_type == "web"]{
      title,
      slug
    }`
  );

  // Handle case where no documents are found
  if (!docs || docs.length === 0) {
    return <div>No documents found.</div>;
  }

  return (
    <div classname="prose lg:prose-xl">
      <h1>Document List</h1>
      <ul>
        {docs.map((doc) => (
          <li key={doc.slug.current}>
            {/* Link to the dynamic route with the slug */}
            <Link href={`/notes/web/${doc.slug.current}`}>
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}