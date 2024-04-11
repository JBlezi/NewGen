<template>
  <HeroSection :bgImage="heroBackground">
    <template v-slot:heading>
      {{heroHeading}}
    </template>
    <template v-slot:subheading>
      {{ $t('submissions.submissions1') }}
    </template>
    <template v-slot:middle-button>
      <button class="bg-main rounded-lg"><a :href="heroButtonLink" target="_blank"><img src="@/assets/filmfreeway-logo-hires-black.png" alt="FilmFreeWay Button"></a></button>
    </template>
  </HeroSection>
  <section class="mt-8 mb-8 md:my-16">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold  italic font-medium mb-2">{{ $t('submissions.submissions2') }}</h3>
      <p class="font-medium text-lg md:text-xl lg:text-2xl dark:text-white">{{ this.date }}</p>
      <p class="font-medium text-lg md:text-xl lg:text-2xl dark:text-white">{{ this.date2 }}</p>
    </div>
  </section>
  <section class="mt-8 mb-8 md:my-16">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold  italic font-medium mb-2">{{ $t('submissions.submissions5') }}</h3>
      <RichTextRenderer :richText="terms" class="font-medium text-lg md:text-xl lg:text-2xl list-decimal dark:text-white"/>
<!--       <ol class="font-medium text-lg md:text-xl lg:text-2xl list-decimal px-6 dark:text-white">
        <li>
          <div>{{ $t('submissions.submissions6') }}</div>
          <ol class="list-decimal pl-6 mt-2">
            <li>{{ $t('submissions.submissions7') }}</li>
            <li>{{ $t('submissions.submissions8') }}</li>
          </ol>
        </li>
        <li>{{ $t('submissions.submissions9') }}</li>
        <li>{{ $t('submissions.submissions10') }}01.01.{{currentYear - 1}}</li>
        <li>{{ $t('submissions.submissions11') }}</li>
        <li>{{ $t('submissions.submissions12') }}</li>
        <li>{{ $t('submissions.submissions13') }}</li>
        <li>{{ $t('submissions.submissions14') }}</li>
        <li>{{ $t('submissions.submissions15') }}</li>
      </ol> -->
    </div>
  </section>
  <section class="mt-8 mb-8 md:my-16">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-2">{{ $t('submissions.submissions16') }}</h3>
      <p class="font-medium text-lg md:text-xl lg:text-2xl dark:text-white">{{ $t('submissions.submissions17') }} <a href="https://filmfreeway.com/" target="_blank">FilmFreeway</a>.<br><br></p>
      <p class="font-medium text-lg md:text-xl lg:text-2xl dark:text-white">  {{ $t('submissions.submissions18', { email: 'info@bngcff.com' }) }}</p>
    </div>
  </section>
  <div class="px-8 md:px-16 lg:px-24 mb-16 lg:mb-32">
    <p class="mb-2 font-medium text-lg md:text-xl md:font-bold dark:text-white">{{ $t('submissions.submissions1') }}</p>
    <button class="bg-main rounded-lg"><a :href="heroButtonLink" target="_blank"><img src="@/assets/filmfreeway-logo-hires-black.png" alt=""></a></button>
  </div>
  <SponsorSlider :sponsors="images" class="hidden"></SponsorSlider>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import SponsorSlider from '@/components/SponsorSlider.vue';
import { getAllMovies } from '@/api/contentful'
import { getLocalizedEntry } from '@/api/contentful';
import RichTextRenderer from '@/components/RichTextRenderer.vue';



export default {
  name: 'Submissions',
  components: {
    HeroSection,
    SponsorSlider,
    RichTextRenderer,
  },
    created() {
      this.userLanguage = localStorage.getItem('userLanguage');

    getLocalizedEntry('Deu8smLPRQ9ANt7wVGg45', this.userLanguage)
    .then((response) => {
      this.entry = response;
      this.heroHeading = this.entry.fields.heading;
      this.heroButtonLink = this.entry.fields.middleButtonLink;
      this.heroBackground = this.entry.fields.backgroundPicture.fields.file.url;
      console.log("Received entry:", response);
    })
    .catch(console.error);

    getLocalizedEntry('5gpMsuuwF8GKQg9UutoC3q', this.userLanguage)
    .then((response) => {
      this.entry = response;
      this.date = this.entry.fields.content;
      this.date2 = this.entry.fields.content2;
      this.terms = this.entry.fields.content3;
    })
    .catch(console.error);

    getAllMovies()
      .then((response) => {
        this.movies = response.items; // Store all fetched movie entries in the movies array
        console.log("Received movies:", response.items);
      })
      .catch(console.error)
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      userLanguage: '',
      entry: {},
      heroHeading: '',
      date: '',
      date2: '',
      terms: '',
      heroBackground: '',
      heroButtonLink: '',
      bgImagePath0: require('@/assets/Film-bg.png'),
      bgImagePath: require('@/assets/palm_trees.png'),
      bgImagePath2: require('@/assets/moviemento.png'),
      bgImagePath3: require('@/assets/projector.png'),
      images: [
        require('@/assets/acce-transparent.png'),
        require('@/assets/btd.png'),
        require('@/assets/bunterpanda.png'),
        require('@/assets/cathayplay.png'),
        require('@/assets/gotiger-red.png'),
        require('@/assets/qizhihua.png'),
        require('@/assets/tingsong.png'),
        require('@/assets/touchthelimit.png'),
        // ... add more images as required
      ],
    desiredColor: "#FFF8EE"
    }
  }
};

</script>

<style scoped>
  ol {
    list-style-type: decimal !important;
  }
</style>
