<template>
  <div v-if="this.userLanguage == 'en'">
    <HeroSection>
    <template v-slot:heading>
      Join Us
    </template>
    <template v-slot:subheading>
      <p>Become a Sponsor.</p>
      <p>Become a Partner.</p>
      <p>Donate to our Mission.</p>
    </template>
    </HeroSection>
    <section class="bg-white py-12">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">Become a Sponsor</h3>
        <div v-if="!showModal">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl">
            <li>Logo placement on website</li>
            <li>Merchandise & social media</li>
            <li>Press Release of Sponsorship</li>
            <li><br></li>
          </ol>
          <span class="text-main text-lg md:text-2xl lg:text-3xl underline text-lg font-medium cursor-pointer" @click="toggleModal">Read more</span>
        </div>
        <div v-else>
          <h4 class="underline text-lg md:text-2xl lg:text-3xl font-medium">Headline Sponsor</h4>
          <h5 class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-2">Minimum Amount: 1.500€</h5>
          <ol class="font-medium text-lg md:text-2xl list-disc px-8 mb-2">
            <li>Recognition as “Headline Sponsor” in the event-related press release</li>
            <li>The sponsor will be invited to present awards at the closing ceremony</li>
            <li>Prominent logo placement on the website and all marketing materials included but not limited to posters, flyers, booklets, roll-up, etc.</li>
            <li>Sponsorship highlighted with the link of the sponsor homepage on social media and website</li>
            <li>Dedicated section in the event slide shows</li>
            <li>The main feature of the event program</li>
            <li>Option to provide promotional items for attendees</li>
            <li>Name announcement at the event</li>
            <li>Other reasonable requests from the sponsor</li>
          </ol>
          <p class="text-main text-lg md:text-2xl underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal">Close</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">For more information please reach out to us.</p>
          <Button :link="button_link">GET IN TOUCH</Button>
        </div>
      </div>
    </section>
    <section class="py-12 bg-main-light">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">Become Advertiser</h3>
        <div v-if="!showModal2">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl">
            <li>Be part of our Pre-Screening Slideshow</li>
            <li>Digital Program Guide</li>
            <li>Advertise on our Website</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal2">Read more</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2">
            <li>Be part of our Pre-Screening Slideshow</li>
            <li>Digital Program Guide</li>
            <li>Advertise on our Website</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal2">Close</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">For more information please reach out to us.</p>
          <Button :link="button_link">GET IN TOUCH</Button>
        </div>
      </div>
    </section>
    <section class="py-12">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">Donate To Us</h3>
        <div v-if="!showModal3">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl">
            <li>Official mention of Donation on our Website with name and amount</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal3">Read more</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2">
            <li class="mb-2"><span class="font-bold">Above 100€:</span><br>Official Mention of your Donation on our social media</li>
            <li class="mb-2"><span class="font-bold">Above 250€:</span><br>Official mention of your Donation on our social media and on our Website</li>
            <li class="mb-2"><span class="font-bold">Above 1000€:</span><br>Official mention of your Donation on our social media, on our website and honourable mention at the Main Screening event.</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-8" @click="toggleModal3">Close</p>
          <p class="text-xl font-medium lg:text-2xl">Donate with PayPal:</p>
          <a :href="paypalLink" target="_blank">
            <img src="@/assets/paypal.png" alt="" class="md:max-w-[24rem]">
          </a>
        </div>
      </div>
    </section>
    <section class="py-12 bg-main-light">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">Join The Team</h3>
        <div v-if="!showModal2">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl">
            <li>Become part of our Team and help make Berlin NewGen Film Festival a continuous success!</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal2">Read more</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2">
            <li>Become part of our Team and help make Berlin NewGen Film Festival a continuous success!</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal2">Close</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">For more information please reach out to us.</p>
          <Button :link="button_link">GET IN TOUCH</Button>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <HeroSection>
      <template v-slot:heading>
        Join Us Chinese
      </template>
      <template v-slot:subheading>
        <p>Become a Sponsor.</p>
        <p>Become a Partner.</p>
        <p>Donate to our Mission.</p>
      </template>
    </HeroSection>
    <section class="bg-white py-12">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">Become a Sponsor</h3>
        <div v-if="!showModal">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl">
            <li>Logo placement on website</li>
            <li>Merchandise & social media</li>
            <li>Press Release of Sponsorship</li>
            <li><br></li>
          </ol>
          <span class="text-main text-lg md:text-2xl lg:text-3xl underline text-lg font-medium cursor-pointer" @click="toggleModal">Read more</span>
        </div>
        <div v-else>
          <h4 class="underline text-lg md:text-2xl lg:text-3xl font-medium">Headline Sponsor</h4>
          <h5 class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-2">Minimum Amount: 1.500€</h5>
          <ol class="font-medium text-lg md:text-2xl list-disc px-8 mb-2">
            <li>Recognition as “Headline Sponsor” in the event-related press release</li>
            <li>The sponsor will be invited to present awards at the closing ceremony</li>
            <li>Prominent logo placement on the website and all marketing materials included but not limited to posters, flyers, booklets, roll-up, etc.</li>
            <li>Sponsorship highlighted with the link of the sponsor homepage on social media and website</li>
            <li>Dedicated section in the event slide shows</li>
            <li>The main feature of the event program</li>
            <li>Option to provide promotional items for attendees</li>
            <li>Name announcement at the event</li>
            <li>Other reasonable requests from the sponsor</li>
          </ol>
          <p class="text-main text-lg md:text-2xl underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal">Close</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">For more information please reach out to us.</p>
          <Button :link="button_link">GET IN TOUCH</Button>
        </div>
      </div>
    </section>
    <section class="py-12 bg-main-light">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">Become Advertiser</h3>
        <div v-if="!showModal2">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl">
            <li>Be part of our Pre-Screening Slideshow</li>
            <li>Digital Program Guide</li>
            <li>Advertise on our Website</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal2">Read more</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2">
            <li>Be part of our Pre-Screening Slideshow</li>
            <li>Digital Program Guide</li>
            <li>Advertise on our Website</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal2">Close</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">For more information please reach out to us.</p>
          <Button :link="button_link">GET IN TOUCH</Button>
        </div>
      </div>
    </section>
    <section class="py-12">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">Donate To Us</h3>
        <div v-if="!showModal3">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl">
            <li>Official mention of Donation on our Website with name and amount</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal3">Read more</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2">
            <li class="mb-2"><span class="font-bold">Above 100€:</span><br>Official Mention of your Donation on our social media</li>
            <li class="mb-2"><span class="font-bold">Above 250€:</span><br>Official mention of your Donation on our social media and on our Website</li>
            <li class="mb-2"><span class="font-bold">Above 1000€:</span><br>Official mention of your Donation on our social media, on our website and honourable mention at the Main Screening event.</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-8" @click="toggleModal3">Close</p>
          <p class="text-xl font-medium lg:text-2xl">Donate with PayPal:</p>
          <a :href="paypalLink" target="_blank">
            <img src="@/assets/paypal.png" alt="" class="md:max-w-[24rem]">
          </a>
        </div>
      </div>
    </section>
    <section class="py-12 bg-main-light">
      <div class="px-8 md:px-16 lg:px-24">
        <h3 class="text-main text-3xl md:text-4xl lg:text-5xl md:font-semibold italic font-medium mb-4">Join The Team</h3>
        <div v-if="!showModal2">
          <ol class="font-medium text-lg md:text-2xl lg:text-3xl">
            <li>Become part of our Team and help make Berlin NewGen Film Festival a continuous success!</li>
            <li><br></li>
          </ol>
          <span class="text-main underline text-lg md:text-2xl lg:text-3xl font-medium cursor-pointer" @click="toggleModal2">Read more</span>
        </div>
        <div v-else>
          <ol class="font-medium text-lg md:text-2xl mb-2">
            <li>Become part of our Team and help make Berlin NewGen Film Festival a continuous success!</li>
          </ol>
          <p class="text-main underline text-lg md:text-2xl font-medium cursor-pointer mb-4" @click="toggleModal2">Close</p>
          <p class="text-main text-lg md:text-2xl lg:text-3xl font-medium mb-8">For more information please reach out to us.</p>
          <Button :link="button_link">GET IN TOUCH</Button>
        </div>
      </div>
    </section>
    <SponsorSlider :sponsors="images" class="hidden"></SponsorSlider>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import SponsorSlider from '@/components/SponsorSlider.vue';
import HeroSection from '@/components/HeroSection.vue'
import Button from '@/components/Button.vue'
import { getEntry } from '@/api/contentful';

export default {
  name: 'JoinUs',
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
