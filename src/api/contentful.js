// src/api/contentful.js

// Importing the required function from the Contentful SDK
import { createClient } from 'contentful';

// Initializing the Contentful client with your space and access token
const client = createClient({
  space: '2ak89u21jz0r',
  accessToken: 'UCH3iicmuukSOBZvdF7uXkBtweVgha1JHgLrhe6bESY'
});

// Other functions, methods, or exports related to Contentful might follow here

export const getEntry = (entryId) => {
  return client.getEntry(entryId);
}

export const getAllMovies = () => {
  return client.getEntries({
    content_type: 'movies'
  });
}

// And so on...
