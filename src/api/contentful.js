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

export const getAllScreenings = () => {
  return client.getEntries({
    content_type: 'screening'
  });
}

export const getAllWinners = () => {
  return client.getEntries({
    content_type: 'movies',
    'fields.winner': 'yes'
  })
}

export const getAllNominees = () => {
  return client.getEntries({
    content_type: 'movies',
    'fields.nominee': 'yes'
  })
}

export function getMoviesByCategory(category) {
  const client = createClient({
    space: '2ak89u21jz0r',
    accessToken: 'UCH3iicmuukSOBZvdF7uXkBtweVgha1JHgLrhe6bESY',
  });

  return client.getEntries({
    content_type: 'movies',  // assuming 'movie' is the content type ID for movies
    'fields.category': category
  });
}



// And so on...
