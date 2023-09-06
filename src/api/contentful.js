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

export const getLocalizedEntry = (entryId, locale) => {
  return client.getEntry(entryId, {
    locale: locale
  });
}

export const getAllPressReleases = () => {
  return client.getEntries({
    content_type: 'pressRelease'
  });
}

export function getLocalizedMoviesByCategory(category, locale) {
  const client = createClient({
    space: '2ak89u21jz0r',
    accessToken: 'UCH3iicmuukSOBZvdF7uXkBtweVgha1JHgLrhe6bESY',
  });

  return client.getEntries({
    content_type: 'movies',  // assuming 'movie' is the content type ID for movies
    'fields.category': category,
    locale: locale
  });
}

export const getAllLocalizedStaffMembers = (locale) => {
  return client.getEntries({
    content_type: 'staffMember',
    locale: locale
  });
}

export const getAllLocalizedSpecialEventMovies = (locale) => {
  return client.getEntries({
    content_type: 'movies',
    'fields.category': 'Special Event',
    locale: locale
  })
}

export const getAllLocalizedJuryMembers = (locale) => {
  return client.getEntries({
    content_type: 'juryMember',
    locale: locale
  });
}

export const getAllLocalizedScreenings = (locale) => {
  return client.getEntries({
    content_type: 'screening',
    locale: locale
  });
}

export const getAllLocalizedWinners = (locale) => {
  return client.getEntries({
    content_type: 'movies',
    'fields.winner': 'yes',
    locale: locale
  });
}

export const getAllLocalizedNominees = (locale) => {
  return client.getEntries({
    content_type: 'movies',
    'fields.nominee': 'yes',
    locale: locale
  });
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

export const getAllJuryMembers = () => {
  return client.getEntries({
    content_type: 'juryMember',
  })
}

export const getAllSpecialEventMovies = () => {
  return client.getEntries({
    content_type: 'movies',
    'fields.category': 'Special Event'
  })
}

export const getAllFestivalMovies = () => {
  return client.getEntries({
    content_type: 'movies',
    'fields.category': 'Festival'
  })
}

export const getAllFestivalSponsors = () => {
  return client.getEntries({
    content_type: 'sponsor',
    'fields.category': 'Festival'
  })
}

export const getAllSpecialEventSponsors = () => {
  return client.getEntries({
    content_type: 'sponsor',
    'fields.category': 'Special Event'
  })
}

export const getAllPartners = () => {
  return client.getEntries({
    content_type: 'sponsor',
    'fields.category': 'Partner'
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
