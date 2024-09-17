import client from "@/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/imageUrl"; // Import the urlFor helper function

export async function generateStaticParams() {
  // Fetch all slugs for the pages
  const docs = await client.fetch(groq`*[_type == "web"]{ slug }`);
  
  // Return the slugs as params
  return docs.map((doc) => ({ slug: doc.slug.current }));
}

export default async function WebNotes({ params }) {
  const { slug } = params; // Extract the slug from params
  
  // Fetch the specific document by its slug
  const doc = await client.fetch(
    groq`*[_type == "web" && slug.current == $slug][0]{
      title,
      _id,
      slug,
      description,
      body
    }`,
    { slug }
  );

  // Handle case where no document is found
  if (!doc) {
    return <div>Content not found</div>;
  }

  return (
    <div className="max-w-[1204px] mx-auto px-4 md:px-0 py-10">
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl animate-fade-up animate-duration-700 delay-700">{doc.title}</h1>
      <p className="mb-8 text-lg text-gray-200 scroll-m-20 text-4xl tracking-tight animate-fade-right animate-duration-700">{doc.description}</p>
      <PortableText value={doc.body} components={{
        types: {
          code: ({ value }) => (
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
              <code>{value.code}</code>
            </pre>
          ),
          image: ({ value }) => (
            <figure className="mb-6"> 
              <img
                src={urlFor(value.asset).width(800).url()} 
                alt={value.caption || 'Image'}
                style={{ maxWidth: '100%', height: 'auto' }}
                className="mx-auto rounded-lg"
              />
              {value.caption && <figcaption className="text-center text-sm text-gray-400 mt-2">Diag: {value.caption}</figcaption>}
            </figure>
          )
        },
        block: {
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-10 mb-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-medium mt-8 mb-4">{children}</h3>
          ),
          normal: ({ children }) => (
            <p className="text-lg leading-relaxed mb-6">{children}</p>
          )
        },
        marks: {
          strong: ({ children }) => <strong className="font-bold">{children}</strong>
        }
      }} />
    </div>
  );
}
