// import client from "@/lib/client";
// import { PortableText } from '@portabletext/react';
// import { groq } from "next-sanity";
// import urlBuilder from '@sanity/image-url'
// import {getImageDimensions} from '@sanity/asset-utils'

// // Barebones lazy-loaded image component
// const SampleImageComponent = ({value, isInline}) => {
//   const {width, height} = getImageDimensions(value)
//   return (
//     <img
//       src={urlBuilder()
//         .image(value)
//         .width(isInline ? 100 : 800)
//         .fit('max')
//         .auto('format')
//         .url()}
//       alt={value.alt || ' '}
//       loading="lazy"
//       style={{
//         // Display alongside text if image appears inside a block text span
//         display: isInline ? 'inline-block' : 'block',

//         // Avoid jumping around with aspect-ratio CSS property
//         aspectRatio: width / height,
//       }}
//     />
//   )
// }

// const components = {
//   types: {
//     image: SampleImageComponent,
//     // Any other custom types you have in your content
//     // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
//   },
// }

// // Function to fetch data for a specific slug
// export default async function CppNotes() {
//   const slug = "trial"; // Hardcoded slug

//   // Fetch the document with the corresponding slug from Sanity
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
//     return <div> <br></br>Content not found</div>;
//   }

//   return (
//     <div>
//       <h1>{doc.title}</h1>
//       <p>{doc.description}</p>
//       {/* Render the body using PortableText */}
//       <PortableText value={doc.body} components={components} />
//     </div>
//   );
// }

import client from "@/lib/client";
import { PortableText } from '@portabletext/react';
import { groq } from "next-sanity";
import { urlFor } from "@/lib/imageUrl"; // Import the urlFor helper function

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value.asset || !value.asset._ref) return null; // Ensure asset and _ref exist
      return (
        <figure>
          <img
            src={urlFor(value.asset).width(800).url()} // Generate image URL using asset reference
            alt={value.caption || 'Image'} // Display the caption if available
            style={{ maxWidth: '100%', height: 'auto', aspectRatio: '1.77' }} // Optional styling
          />
          <p>Diag: </p>
          {value.caption && <figcaption>{value.caption}</figcaption>} {/* Optional caption */}
        </figure>
      );
    },
    // Other components...
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

export default async function CppNotes() {
  const slug = "trial"; // Hardcoded slug

  // Fetch the document with the corresponding slug from Sanity
  const doc = await client.fetch(
    groq`*[_type == "cpp" && slug.current == $slug][0]{
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
    return <div> <br></br>Content not found</div>;
  }

  return (
    <div>
      <h1>{doc.title}</h1>
      <p>{doc.description}</p>
      {/* Render the body using PortableText */}
      <PortableText value={doc.body} components={myPortableTextComponents} />
    </div>
  );
}
