<template>
  <HeroSection :bgImage="bgGif">
    <template v-if="userLanguage == 'en'" v-slot:heading>
    <span class="text-black">Berlin</span> NewGen <br> <span class="text-black">Chinese Film Festival</span>
    </template>
    <template v-else v-slot:heading>
    <span class="text-main">NewGen</span>  <br> <span class="text-black">柏林华语青年电影节</span>
    </template>
  </HeroSection>
  <HomeSection v-if="specialEventOnOffSwitch" :button="specialEventButtonText" :button_link="buttonLink" :image="specialEventImage" :bgImage="specialEventBackgroundImage" :background="background2">
    <template v-slot:heading>
      {{specialEventHeading}}
    </template>
    <template v-slot:subheading>
      {{specialEventSubheading}}
    </template>
    <template v-slot:description>
      {{ specialEventDescription }}
    </template>
  </HomeSection>
  <HomeSection :button="filmFestivalButtonText" :bgImage="filmFestivalBackgroundImage" :button_link="buttonLink2" :video="filmFestivalVideo" :background="background2">
    <template v-slot:heading>
      {{filmFestivalHeading}}
    </template>
    <template v-slot:description>
      {{ filmFestivalSubheading }}
    </template>
  </HomeSection>
  <HomeSection :button="archiveButtonText" :bgImage="archiveBackgroundImage" :button_link="buttonLink3" :image="archiveImage" :background="background3">
    <template v-slot:heading>
      {{archiveHeading}}
    </template>
    <template v-slot:description>
      {{ archiveSubheading }}
    </template>
  </HomeSection>
  <SponsorSlider :sponsors="images" class="hidden"></SponsorSlider>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HomeSection from '@/components/HomeSection.vue';
import SponsorSlider from '@/components/SponsorSlider.vue';
import HeroSection from '@/components/HeroSection.vue'
import { getLocalizedEntry } from '@/api/contentful'
import { getAllMovies } from '@/api/contentful'

export default {
  name: 'Home',
  components: {
    HomeSection,
    SponsorSlider,
    HeroSection,
  },
  created() {
    this.userLanguage = localStorage.getItem('userLanguage');

    getLocalizedEntry('5KU1fkx11HFjnq64UiqMdq', this.userLanguage).then((response) => {
      this.entry = response;
      this.specialEventHeading = this.entry.fields.heading;
      this.specialEventSubheading = this.entry.fields.subheading;
      this.specialEventDescription = this.entry.fields.description;
      this.specialEventButtonText = this.entry.fields.buttonText;
      this.specialEventBackgroundImage = this.entry.fields.backgroundImage.fields.file.url;
      if (this.entry.fields.image) {
        this.specialEventImage = this.entry.fields.image.fields.file.url
      }
      if (this.entry.fields.youtubeVideoEmbedUrl) {
        this.specialEventVideo = this.entry.fields.youtubeVideoEmbedUrl
      }
      this.specialEventOnOffSwitch = this.entry.fields.onOffSwitch;
      console.log("on off switch", this.specialEventOnOffSwitch)
    })

    getLocalizedEntry('7c787EsghBxb1ceUXF4JBD', this.userLanguage).then((response) => {
      this.entry = response;
      this.filmFestivalHeading = this.entry.fields.heading;
      this.filmFestivalSubheading = this.entry.fields.subheading;
      this.filmFestivalDescription = this.entry.fields.description;
      this.filmFestivalButtonText = this.entry.fields.buttonText;
      this.filmFestivalBackgroundImage = this.entry.fields.backgroundImage.fields.file.url;
      if (this.entry.fields.image) {
        this.filmFestivalImage = this.entry.fields.image.fields.file.url
      }
      if (this.entry.fields.youtubeVideoEmbedUrl) {
        this.filmFestivalVideo = this.entry.fields.youtubeVideoEmbedUrl
      }
      this.filmFestivalOnOffSwitch = this.entry.fields.onOffSwitch;
    })

    getLocalizedEntry('3IOsSqr65VQ21Y87JXtPIP', this.userLanguage).then((response) => {
      this.entry = response;
      this.archiveHeading = this.entry.fields.heading;
      this.archiveSubheading = this.entry.fields.subheading;
      this.archiveDescription = this.entry.fields.description;
      this.archiveButtonText = this.entry.fields.buttonText;
      this.archiveBackgroundImage = this.entry.fields.backgroundImage.fields.file.url;
      if (this.entry.fields.image) {
        this.archiveImage = this.entry.fields.image.fields.file.url
      }
      if (this.entry.fields.youtubeVideoEmbedUrl) {
        this.archiveVideo = this.entry.fields.youtubeVideoEmbedUrl
      }
      this.archiveOnOffSwitch = this.entry.fields.onOffSwitch;
    })

    getLocalizedEntry('15qnx6qHbz8xDGX72GI3eO', this.userLanguage)
    .then((response) => {
      this.entry = response;
      this.heroHeading = this.entry.fields.heading;
      this.bgGif = this.entry.fields.backgroundPicture.fields.file.url;  // assuming the attribute is named backgroundPicture
    })
    .catch(console.error);

    getAllMovies()
      .then((response) => {
        this.movies = response.items; // Store all fetched movie entries in the movies array
      })
      .catch(console.error)
  },
  data() {
    return {
      archiveHeading: '',
      archiveSubheading: '',
      archiveBackgroundImage: '',
      archiveButtonText: '',
      archiveDescription: '',
      archiveImage: '',
      archiveVideo: '',
      archiveOnOffSwitch: '',
      filmFestivalHeading: '',
      filmFestivalSubheading: '',
      filmFestivalBackgroundImage: '',
      filmFestivalButtonText: '',
      filmFestivalDescription: '',
      filmFestivalImage: '',
      filmFestivalVideo: '',
      filmFestivalOnOffSwitch: '',
      specialEventHeading: '',
      specialEventSubheading: '',
      specialEventBackgroundImage: '',
      specialEventButtonText: '',
      specialEventDescription: '',
      specialEventImage: '',
      specialEventVideo: '',
      specialEventOnOffSwitch: '',
      userLanguage: 'en',
      entry: {},
      heroHeading: '',
      festivalImage: require('@/assets/newgen_2023.png'),
      bgImagePath: require('@/assets/palm_trees.png'),
      bgImagePath2: require('@/assets/moviemento.png'),
      bgImagePath3: require('@/assets/projector.png'),
      bgGif: '',
      background: 'bg-white',
      background2: 'bg-gradient',
      background3: 'bg-white/80',
      buttonLink: '/special-event',
      buttonLink2: '/festival',
      buttonLink3: '/archive',
      video: 'https://www.youtube.com/embed/h42hPO34D-4?si=4qJpD0h0tCQqE2um',
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
    };
  }
}
</script>

<style scoped>

</style>
