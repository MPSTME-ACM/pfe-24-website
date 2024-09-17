import client from "@/lib/client";
import { groq } from "next-sanity";
import Link from 'next/link';

export default async function CppNotes() {
  // Fetch all documents with title and slug
  const docs = await client.fetch(
    groq`*[_type == "cpp"]{
      title,
      slug
    }`
  );

  // Handle case where no documents are found
  if (!docs || docs.length === 0) {
    return <div>No documents found.</div>;
  }

  return (
    <div className="prose lg:prose-xl">
      <h1>Document List</h1>
      <ul>
        {docs.map((doc) => (
          <li key={doc.slug.current}>
            {/* Link to the dynamic route with the slug */}
            <Link href={`/notes/cpp/${doc.slug.current}`}>
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}