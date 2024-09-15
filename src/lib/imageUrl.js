import imageUrlBuilder from '@sanity/image-url';
import client from './client'; // Import your Sanity client

const builder = imageUrlBuilder(client);

// This function will generate a URL for a given image asset
export function urlFor(source) {
  return builder.image(source);
}
