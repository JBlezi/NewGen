<template>
  <HeroSection :bgImage="bgImagePath">
    <template v-slot:heading>
     {{heroHeading}}
    </template>
    <template v-slot:description>
      {{ heroDescription }}
    </template>
  </HeroSection>
  <section class="mt-12 mb-12 md:mb-24">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl italic font-medium font-semibold mb-4 md:mb-8">Inspiration and History</h3>
      <p class="font-medium text-lg md:text-2xl">New Generation International Film Festival (NewGen) is a Berlin-based nonprofit organisation celebrating high-quality Chinese films with new and distinguished filmmakers, film enthusiasts, film industry professionals, related-field scholars and audiences around the world.</p>
    </div>
  </section>
  <section class="mt-12 mb-12 md:mb-24">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl italic font-medium font-semibold mb-4 md:mb-8">Our Mission</h3>
      <p class="font-medium text-lg md:text-2xl">Acting as a springboard for creation, NewGen is dedicated to discovering new talented filmmakers who are making the future of Chinese cinema. Focusing on interconnections between cinema and contemporary society, NewGen encourages independent, proactive and innovative filmic expressions that showcase the diversity of Chinese culture and society. Believing in the power of film, New Gen aims to build a borderless exchange platform for cinematic culture through film screenings, audience discussions and expert panels. <br><br></p>
      <p class="font-medium text-lg md:text-2xl">NewGen hopes to draw attention to new talented Chinese filmmakers and raise the profile of their underrepresented films, with the aspiration of contributing to the future of Chinese cinema, boosting the development of the local and global film industry and providing a sustainable platform for future dialogues between China and Europe.</p>
    </div>
  </section>
  <section class="mt-12 mb-12 md:mb-24">
    <div class="px-8 md:px-16 lg:px-24">
      <h3 class="text-main text-3xl md:text-4xl lg:text-5xl italic font-medium font-semibold mb-4 md:mb-16">Meet The Team</h3>
    </div>
    <div class="flex flex-wrap mx-8 md:mx-16 lg:mx-24 justify-around">
      <div v-for="(member) in staffMembers" :key="member.sys.id" class="text-center mb-8">
        <img :src="member.fields.picture.fields.file.url" :alt="member.fields.name" class="w-32 h-48 md:w-64 md:h-96 mx-auto object-cover">
        <p class="mt-2 font-medium md:text-2xl">{{ member.fields.name }}</p>
        <p class="italic md:text-2xl">{{ member.fields.title }}</p>
      </div>
    </div>

  </section>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HeroSection from '@/components/HeroSection.vue';
import { getEntry } from '@/api/contentful'
import { getAllMovies } from '@/api/contentful'
import { getAllLocalizedStaffMembers } from '@/api/contentful';

export default {
  name: 'About',
  components: {
    HeroSection
  },
  created() {
    this.userLanguage = localStorage.getItem('userLanguage');

    getEntry('9iD7ADjNwwwDA87ZWjSdl')
    .then((response) => {
      this.entry = response;
      this.heroDescription = this.entry.fields.description;
      this.heroHeading = this.entry.fields.heading;
      this.bgImagePath = this.entry.fields.backgroundPicture.fields.file.url;  // assuming the attribute is named backgroundPicture
      console.log("Received entry:", response);
    })
    .catch(console.error);

    getAllMovies()
      .then((response) => {
        this.movies = response.items; // Store all fetched movie entries in the movies array
        console.log("Received movies:", response.items);
      })
      .catch(console.error)

    getAllLocalizedStaffMembers(this.userLanguage).then((response) => {
      this.staffMembers = response.items;
    })
  },
  data() {
    return {
      entry: {},
      heroDescription: '',
      heroHeading: '',
      bgImagePath: '',
      userLanguage: 'en',
      staffMembers: '',
      staff: [
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/ZhaoHuangdan-edited.png'), id:1 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/WuZhilin.png'), id:2 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/Zijiao.png'), id:3 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/YuZehui.png'), id:4 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/ZhangYunxi.png'), id:5 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/YanXiaoyi.png'), id:6 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/WuYueqi.png'), id:7 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/XuXinyi.png'), id:8},
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/JuliusBlezinger.png'), id:9 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/HuangBo.png'), id:10 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/Hanson.png'), id:11 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/GuanShuqin.png'), id:12 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/ChenXi.png'), id:13 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/ChengYumo.png'), id:14 },
          ],
    }
  }
}
</script>
