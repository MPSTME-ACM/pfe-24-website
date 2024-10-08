// import client from "@/lib/client";
// import { groq } from "next-sanity";
// import { PortableText } from "@portabletext/react";
// import { urlFor } from "@/lib/imageUrl"; // Import the urlFor helper function
// import CodeBlock from "@/app/components/codeHig";

// export async function generateStaticParams() {
//   // Fetch all slugs for the pages
//   const docs = await client.fetch(groq`*[_type == "cpp"]{ slug }`);

//   // Return the slugs as params
//   return docs.map((doc) => ({ slug: doc.slug.current }));
// }

// export default async function CppNotes({ params }) {
//   const { slug } = params; // Extract the slug from params

//   // Fetch the specific document by its slug
//   const doc = await client.fetch(
//     groq`*[_type == "cpp" && slug.current == $slug][0]{
//       title,
//       _id,
//       slug,
//       description,
//       body
//     }`,
//     { slug }
//   );

//   // Handle case where no document is found
//   if (!doc) {
//     return <div>Content not found</div>;
//   }

//   return (
//     <div className="max-w-2xl prose prose-invert my-auto   md:prose-lg prose-pink   prose-headings:text-text  prose-img:rounded-xl prose-img:shadow-2xl  prose-img:min-h-full md:prose-img:w-[60%] prose-img:mx-auto  prose-figure:mx-auto prose-pre:text-left prose-headings:flex prose-headings:items-center prose-headings:mt-5 prose-sm mx-auto px-4 md:px-0 py-10">
//       <h1>{doc.title}</h1>
//       <p>{doc.description}</p>
//       <PortableText
//         value={doc.body}
//         components={{
//           types: {
//             code: ({ value }) => (
//               <CodeBlock code={value.code} language={value.language} />
//             ),
//             image: ({ value }) => (
//               <figure className="mb-6">
//                 <img
//                   src={urlFor(value.asset).width(800).url()}
//                   alt={value.caption || "Image"}
//                   style={{ maxWidth: "100%", height: "auto" }}
//                   className="mx-auto rounded-lg"
//                 />
//                 {value.caption && (
//                   <figcaption className="text-center text-sm text-gray-400 mt-2">
//                     Diag: {value.caption}
//                   </figcaption>
//                 )}
//               </figure>
//             ),
//           },
//         }}
//       />
//     </div>
//   );
// }

import client from "@/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/imageUrl";
import CodeBlock from "@/app/components/codeHig";
import ClientOnlyComponent from "@/app/components/ClientOnlyComponent";

export async function generateStaticParams() {
  const docs = await client.fetch(groq`*[_type == "cpp"]{ slug }`);
  return docs.map((doc) => ({ slug: doc.slug.current }));
}

export default async function CppNotes({ params }) {
  const { slug } = params;

  const doc = await client.fetch(
    groq`*[_type == "cpp" && slug.current == $slug][0]{
      title,
      _id,
      slug,
      description,
      body
    }`,
    { slug },
  );

  if (!doc) {
    return <div>Content not found</div>;
  }

  return (
    <div className="max-w-2xl prose prose-invert my-auto md:prose-lg prose-pink prose-headings:text-text prose-img:rounded-xl prose-img:shadow-2xl prose-img:min-h-full md:prose-img:w-[60%] prose-img:mx-auto prose-figure:mx-auto prose-pre:text-left prose-headings:flex prose-headings:items-center prose-headings:mt-5 prose-sm mx-auto px-4 md:px-0 py-10">
      <h1>{doc.title}</h1>
      <p>{doc.description}</p>
      <PortableText
        value={doc.body}
        components={{
          types: {
            code: ({ value }) => (
              <CodeBlock code={value.code} language={value.language} />
            ),
            image: ({ value }) => (
              <figure className="mb-6">
                <img
                  src={urlFor(value.asset).width(800).url()}
                  alt={value.caption || "Image"}
                  style={{ maxWidth: "100%", height: "auto" }}
                  className="mx-auto rounded-lg select-none"
                  draggable="false"
                />
                {value.caption && (
                  <figcaption className="text-center text-sm text-gray-400 mt-2">
                    Diag: {value.caption}
                  </figcaption>
                )}
              </figure>
            ),
          },
        }}
      />
      {/* Render the ClientOnlyComponent */}
      <ClientOnlyComponent />
    </div>
  );
}
