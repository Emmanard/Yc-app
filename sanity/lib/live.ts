// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: 'vX' 
  }),
  // Using your write token for server-side operations
  serverToken: process.env.SANITY_WRITE_TOKEN, // Your write token (server-side only)
  browserToken: false, // Disable browser-side live preview for security
});