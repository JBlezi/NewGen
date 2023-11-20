<template>
    <HeroSection>
    <template v-slot:heading>
      {{ $t('joinUs.joinUs1') }}
    </template>
    <template v-slot:subheading>
      <p>{{ $t('joinUs.joinUs2') }}</p>
      <p>{{ $t('joinUs.joinUs3') }}</p>
      <p>{{ $t('joinUs.joinUs4') }}</p>
    </template>
    </HeroSection>
    <section class="bg-white dark:bg-black py-12">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">{{ $t('joinUs.joinUs2') }}</h3>
        <div v-if="!showModal">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl dark:text-white">
            <li>{{ $t('joinUs.joinUs6') }}</li>
            <li>{{ $t('joinUs.joinUs7') }}</li>
            <li>{{ $t('joinUs.joinUs8') }}</li>
            <li><br></li>
          </ol>
          <span class="text-main text-lg md:text-2xl lg:text-3xl underline text-lg font-medium cursor-pointer" @click="toggleModal">{{ $t('joinUs.joinUs9') }}</span>
        </div>
        <div v-else>
          <h4 class="underline text-lg md:text-2xl lg:text-3xl font-medium dark:text-white">{{ $t('joinUs.joinUs10') }}</h4>
          <h5 class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-2">{{ $t('joinUs.joinUs11') }}</h5>
          <ol class="font-medium text-lg md:text-2xl list-disc px-8 mb-2 dark:text-white">
            <li>{{ $t('joinUs.joinUs12') }}</li>
            <li>{{ $t('joinUs.joinUs13') }}</li>
            <li>{{ $t('joinUs.joinUs14') }}</li>
            <li>{{ $t('joinUs.joinUs15') }}</li>
            <li>{{ $t('joinUs.joinUs16') }}</li>
            <li>{{ $t('joinUs.joinUs17') }}</li>
            <li>{{ $t('joinUs.joinUs18') }}</li>
            <li>{{ $t('joinUs.joinUs19') }}</li>
            <li>{{ $t('joinUs.joinUs20') }}</li>
          </ol>
          <p class="text-main text-lg md:text-2xl underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal">{{ $t('joinUs.joinUs21') }}</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">{{ $t('joinUs.joinUs22') }}</p>
          <Button :link="button_link">{{ $t('joinUs.joinUs23') }}</Button>
        </div>
      </div>
    </section>
    <section class="py-12 bg-main-light dark:bg-main-dark">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">{{ $t('joinUs.joinUs24') }}</h3>
        <div v-if="!showModal2">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl dark:text-white">
            <li>{{ $t('joinUs.joinUs25') }}</li>
            <li>{{ $t('joinUs.joinUs26') }}</li>
            <li>{{ $t('joinUs.joinUs27') }}</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal2">{{ $t('joinUs.joinUs9') }}</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2 dark:text-white">
            <li>{{ $t('joinUs.joinUs25') }}</li>
            <li>{{ $t('joinUs.joinUs26') }}</li>
            <li>{{ $t('joinUs.joinUs27') }}</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal2">{{ $t('joinUs.joinUs21') }}</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">{{ $t('joinUs.joinUs22') }}</p>
          <Button :link="button_link">{{ $t('joinUs.joinUs23') }}</Button>
        </div>
      </div>
    </section>
    <section class="py-12">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">{{ $t('joinUs.joinUs35') }}</h3>
        <div v-if="!showModal3">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl dark:text-white">
            <li>{{ $t('joinUs.joinUs36') }}</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal3">{{ $t('joinUs.joinUs9') }}</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2 dark:text-white">
            <li class="mb-2"><span class="font-bold">{{ $t('joinUs.joinUs38') }} 100€:</span><br>{{ $t('joinUs.joinUs39') }}</li>
            <li class="mb-2"><span class="font-bold">{{ $t('joinUs.joinUs38') }} 250€:</span><br>{{ $t('joinUs.joinUs40') }}</li>
            <li class="mb-2"><span class="font-bold">{{ $t('joinUs.joinUs38') }} 1000€:</span><br>{{ $t('joinUs.joinUs41') }}</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-8" @click="toggleModal3">{{ $t('joinUs.joinUs21') }}</p>
          <p class="text-xl font-medium lg:text-2xl dark:text-main">{{ $t('joinUs.joinUs42') }}</p>
          <a :href="paypalLink" target="_blank">
            <img src="@/assets/paypal.png" alt="" class="md:max-w-[24rem]">
          </a>
        </div>
      </div>
    </section>
    <section class="py-12 bg-main-light dark:bg-main-dark">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">{{ $t('joinUs.joinUs43') }}</h3>
        <div v-if="!showModal2">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl dark:text-white">
            <li>{{ $t('joinUs.joinUs44') }}</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal2">{{ $t('joinUs.joinUs9') }}</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2 dark:text-white">
            <li>{{ $t('joinUs.joinUs44') }}</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal2">{{ $t('joinUs.joinUs21') }}</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">{{ $t('joinUs.joinUs22') }}</p>
          <Button :link="button_link">{{ $t('joinUs.joinUs23') }}</Button>
        </div>
      </div>
    </section>
    <SponsorSlider :sponsors="images" class="hidden"></SponsorSlider>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import SponsorSlider from '@/components/SponsorSlider.vue';
import HeroSection from '@/components/HeroSection.vue'
import Button from '@/components/Button.vue'
import { getEntry } from '@/api/contentful';

export default {
  name: 'joinUs.JoinUs',
  components: {
    SponsorSlider,
    HeroSection,
    Button
  },
  created() {
    this.userLanguage = localStorage.getItem('userLanguage');

    getEntry('2BLfZ4hV6vUdypz8xV3qTT')
    .then((response) => {
      this.entry = response;
      this.paypalLink = this.entry.fields.middleButtonLink;
      console.log("Received entry:", response);
    })
    .catch(console.error);
  },
  data() {
    return {
      userLanguage: '',
      paypalLink: '',
      festivalImage: require('@/assets/newgen_2023.png'),
      bgImagePath: require('@/assets/palm_trees.png'),
      bgImagePath2: require('@/assets/moviemento.png'),
      bgImagePath3: require('@/assets/projector.png'),
      showModal: false,
      showModal2: false,
      showModal3: false,
      button_link: 'contact',
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
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
    toggleModal3() {
      this.showModal3 = !this.showModal3;
    }
  },
}
</script>

<style scoped>

</style>
