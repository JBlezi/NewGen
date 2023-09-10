import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    aboutUs1: 'Inspiration and History',
    aboutUs2: 'New Generation International Film Festival (NewGen) is a Berlin-based nonprofit organisation celebrating high-quality Chinese films with new and distinguished filmmakers, film enthusiasts, film industry professionals, related-field scholars and audiences around the world.',
    aboutUs3: 'Our Mission',
    aboutUs4: 'Acting as a springboard for creation, NewGen is dedicated to discovering new talented filmmakers who are making the future of Chinese cinema. Focusing on interconnections between cinema and contemporary society, NewGen encourages independent, proactive and innovative filmic expressions that showcase the diversity of Chinese culture and society. Believing in the power of film, New Gen aims to build a borderless exchange platform for cinematic culture through film screenings, audience discussions and expert panels.',
    aboutUs5: 'NewGen hopes to draw attention to new talented Chinese filmmakers and raise the profile of their underrepresented films, with the aspiration of contributing to the future of Chinese cinema, boosting the development of the local and global film industry and providing a sustainable platform for future dialogues between China and Europe.',
    aboutUs6: 'Meet The Team',
    archive1: 'Winners',
    archive2: 'Nominees',
    archive3: 'NewGen Jury',
    contact: 'Contact',
    festival1: 'Festival Days:',
    festival2: 'Cinema:',
    home1: 'Berlin',
    home2: 'NewGen',
    home3: 'Chinese Film Festival',
    joinUs: {
      joinUs1: 'Join Us',
      joinUs2: 'Become a Sponsor.',
      joinUs3: 'Become a Partner.',
      joinUs4: 'Donate to our Mission.',
      joinUs6: 'Logo placement on website',
      joinUs7: 'Merchandise & social media',
      joinUs8: 'Press Release of Sponsorship',
      joinUs9: 'Read more',
      joinUs10: 'Headline Sponsor',
      joinUs11: 'Minimum Amount: 1.500€',
      joinUs12: 'Recognition as “Headline Sponsor” in the event-related press release',
      joinUs13: 'The sponsor will be invited to present awards at the closing ceremony',
      joinUs14: 'Prominent logo placement on the website and all marketing materials included but not limited to posters, flyers, booklets, roll-up, etc.',
      joinUs15: 'Sponsorship highlighted with the link of the sponsor homepage on social media and website',
      joinUs16: 'Dedicated section in the event slide shows',
      joinUs17: 'The main feature of the event program',
      joinUs18: 'Option to provide promotional items for attendees',
      joinUs19: 'Name announcement at the event',
      joinUs20: 'Other reasonable requests from the sponsor',
      joinUs21: 'Close',
      joinUs22: 'For more information please reach out to us.',
      joinUs23: 'GET IN TOUCH',
      joinUs24: 'Become Advertiser',
      joinUs25: 'Be part of our Pre-Screening Slideshow',
      joinUs26: 'Digital Program Guide',
      joinUs27: 'Advertise on our Website',
      joinUs35: 'Donate To Us',
      joinUs36: 'Official mention of Donation on our Website with name and amount',
      joinUs38: 'Above',
      joinUs39: 'Official Mention of your Donation on our social media',
      joinUs40: 'Official mention of your Donation on our social media and on our Website',
      joinUs41: 'Official mention of your Donation on our social media, on our website and honourable mention at the Main Screening event.',
      joinUs42: 'Donate with PayPal:',
      joinUs43: 'Join The Team',
      joinUs44: 'Become part of our Team and help make Berlin NewGen Film Festival a continuous success!'

    },
    movieDetails: {
      movieDetails1: 'Moviemento Kino, Kottbusser Damm 22, 10967 Berlin',
      movieDetails2: 'GET TICKETS'
    },
    partners: 'Partners',
    pressReleases: 'Press Releases',
    specialEvent: {
      specialEvent1: 'What is it?',
      specialEvent2: 'Time and Date',
      specialEvent3: 'will take place on',
      specialEvent5: 'Films'
    },
    sponsors: 'Sponsors',
    submissions: {
      submissions1: 'Submit your movie now on:',
      submissions2: 'Submission Deadlines & Fees',
      submissions3: 'May',
      submissions4: 'June',
      submissions5: 'Terms & Conditions',
      submissions6: 'The submitted film must',
      submissions7: 'be made in one or more than one of the Chinese languages (Mandarin, Cantonese, or other dialects)',
      submissions8: 'be produced, directed, written, cinematographed, or performed by at least one ethnic Chinese filmmaker.',
      submissions9: 'The submitted film must provide English subtitles/captions if the dialogues are not in English.',
      submissions10: 'The submitted film should be made after January 1, 2021.',
      submissions11: 'The submitted film should run no longer than 40 minutes.',
      submissions12: 'We welcome all genres and themes.',
      submissions13: 'Applicants may submit more than one title, but an entry fee is required for each title.',
      submissions14: 'We do not request premiere from applicants.',
      submissions15: 'Once selected, the copyright holder of the submission must authorize the selected title to be screened at least once at the festival in Berlin, and allow us to use related promotional materials.',
      submissions16: 'How To Submit',
      submissions17: 'To apply, please fill out the application form and submit your film on',
      submissions18: 'In principle, we do not accept new versions after your successful submission. In case of major changes, please contact info@bngcff.com before the regular submission deadline.',

    },
    nav: {
      footer1: 'FESTIVAL',
      footer2: 'ABOUT US',
      footer3: 'JOIN US',
      footer4: 'CONTACT',
      footer5: 'SPONSORS',
      footer6: 'PRESS RELEASES',
      footer7: 'PARTNERS',
      navbar1: 'HOME',
      navbar2: 'SUBMISSIONS',
      navbar3: 'ARCHIVE'
    },
    movieSection: {
      movieSection1: 'Duration:',
      movieSection2: 'Year:',
      movieSection3: 'Director:',
      movieSection4: 'Read Bio',
      movieSection5: 'Close'
    },
    movieSectionClassic: {
      movieSectionClassic1: 'Language:',
      movieSectionClassic2: 'Subtitles:'
    },
    privacy: 'Privacy Notice'
    // ... English translations
  },
  zh: {
    aboutUs1: 'Chinese',
    aboutUs2: 'Chinese',
    aboutUs3: 'cn',
    aboutUs4: 'Acting as a springboard for creation, NewGen is dedicated to discovering new talented filmmakers who are making the future of Chinese cinema. Focusing on interconnections between cinema and contemporary society, NewGen encourages independent, proactive and innovative filmic expressions that showcase the diversity of Chinese culture and society. Believing in the power of film, New Gen aims to build a borderless exchange platform for cinematic culture through film screenings, audience discussions and expert panels.',
    aboutUs5: 'NewGen hopes to draw attention to new talented Chinese filmmakers and raise the profile of their underrepresented films, with the aspiration of contributing to the future of Chinese cinema, boosting the development of the local and global film industry and providing a sustainable platform for future dialogues between China and Europe.',
    aboutUs6: 'Meet The Team',
    archive1: 'cn',
    archive2: 'Nominees',
    archive3: 'NewGen Jury',
    contact: 'Contact',
    festival1: 'Festival Days:',
    festival2: 'Cinema:',
    home1: 'Berlin',
    home2: 'NewGen',
    home3: 'Chinese Film Festival',
    joinUs: {
      joinUs1: 'Join Us',
      joinUs2: 'Become a Sponsor.',
      joinUs3: 'Become a Partner.',
      joinUs4: 'Donate to our Mission.',
      joinUs6: 'Logo placement on website',
      joinUs7: 'Merchandise & social media',
      joinUs8: 'Press Release of Sponsorship',
      joinUs9: 'Read more',
      joinUs10: 'Headline Sponsor',
      joinUs11: 'Minimum Amount: 1.500€',
      joinUs12: 'Recognition as “Headline Sponsor” in the event-related press release',
      joinUs13: 'The sponsor will be invited to present awards at the closing ceremony',
      joinUs14: 'Prominent logo placement on the website and all marketing materials included but not limited to posters, flyers, booklets, roll-up, etc.',
      joinUs15: 'Sponsorship highlighted with the link of the sponsor homepage on social media and website',
      joinUs16: 'Dedicated section in the event slide shows',
      joinUs17: 'The main feature of the event program',
      joinUs18: 'Option to provide promotional items for attendees',
      joinUs19: 'Name announcement at the event',
      joinUs20: 'Other reasonable requests from the sponsor',
      joinUs21: 'Close',
      joinUs22: 'For more information please reach out to us.',
      joinUs23: 'GET IN TOUCH',
      joinUs24: 'Become Advertiser',
      joinUs25: 'Be part of our Pre-Screening Slideshow',
      joinUs26: 'Digital Program Guide',
      joinUs27: 'Advertise on our Website',
      joinUs35: 'Donate To Us',
      joinUs36: 'Official mention of Donation on our Website with name and amount',
      joinUs38: 'Above',
      joinUs39: 'Official Mention of your Donation on our social media',
      joinUs40: 'Official mention of your Donation on our social media and on our Website',
      joinUs41: 'Official mention of your Donation on our social media, on our website and honourable mention at the Main Screening event.',
      joinUs42: 'Donate with PayPal:',
      joinUs43: 'Join The Team',
      joinUs44: 'Become part of our Team and help make Berlin NewGen Film Festival a continuous success!'

    },
    movieDetails: {
      movieDetails1: 'Moviemento Kino, Kottbusser Damm 22, 10967 Berlin',
      movieDetails2: 'GET TICKETS'
    },
    partners: 'Partners',
    pressReleases: 'Press Releases',
    specialEvent: {
      specialEvent1: 'What is it?',
      specialEvent2: 'Time and Date',
      specialEvent3: 'will take place on',
      specialEvent5: 'Films'
    },
    sponsors: 'Sponsors',
    submissions: {
      submissions1: 'Submit your movie now on:',
      submissions2: 'Submission Deadlines & Fees',
      submissions3: 'May',
      submissions4: 'June',
      submissions5: 'Terms & Conditions',
      submissions6: 'The submitted film must',
      submissions7: 'be made in one or more than one of the Chinese languages (Mandarin, Cantonese, or other dialects)',
      submissions8: 'be produced, directed, written, cinematographed, or performed by at least one ethnic Chinese filmmaker.',
      submissions9: 'The submitted film must provide English subtitles/captions if the dialogues are not in English.',
      submissions10: 'The submitted film should be made after January 1, 2021.',
      submissions11: 'The submitted film should run no longer than 40 minutes.',
      submissions12: 'We welcome all genres and themes.',
      submissions13: 'Applicants may submit more than one title, but an entry fee is required for each title.',
      submissions14: 'We do not request premiere from applicants.',
      submissions15: 'Once selected, the copyright holder of the submission must authorize the selected title to be screened at least once at the festival in Berlin, and allow us to use related promotional materials.',
      submissions16: 'How To Submit',
      submissions17: 'To apply, please fill out the application form and submit your film on',
      submissions18: 'In principle, we do not accept new versions after your successful submission. In case of major changes, please contact info@bngcff.com before the regular submission deadline.',

    },
    nav: {
      footer1: 'FESTIVAL',
      footer2: 'ABOUT US',
      footer3: 'JOIN US',
      footer4: 'CONTACT',
      footer5: 'SPONSORS',
      footer6: 'PRESS RELEASES',
      footer7: 'PARTNERS',
      navbar1: 'HOME',
      navbar2: 'SUBMISSIONS',
      navbar3: 'ARCHIVE'
    },
    movieSection: {
      movieSection1: 'Duration:',
      movieSection2: 'Year:',
      movieSection3: 'Director:',
      movieSection4: 'Read Bio',
      movieSection5: 'Close'
    },
    movieSectionClassic: {
      movieSectionClassic1: 'Language:',
      movieSectionClassic2: 'Subtitles:'
    },
    privacy: 'Privacy Notice'
  }
  // ... other languages
};

const locale = localStorage.getItem('userLanguage');  // Default to 'en' if not found


const i18n = createI18n({
  locale: locale,
  messages,
});

export default i18n;
