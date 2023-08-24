<template>
  <HeroSection :bgImage="festivalImage">
    <template v-slot:heading>
      NewGen Archive
    </template>
  </HeroSection>
  <WinnerSection :movies="categories[0].movies"></WinnerSection>
  <ScreeningSection v-for="category in filteredCategories" :key="category.id" :movieList="category" class="mb-8">
    <template v-slot:heading>
      Nominees {{ category.movies[0].ran }}
    </template>
  </ScreeningSection>
  <p class="flex justify-center mb-8 underline text-main" @click="toggleAdditionalEntries">{{ showAdditionalWinners ? 'Hide past editions nominees' : 'See past editions nominees' }}</p>
  <section class="my-16">
    <h2 class="px-8 text-main mb-4 text-3xl font-medium">NewGen Jury</h2>
    <div class="flex flex-wrap mx-8 relative">
      <div v-for="(member) in staff" :key="member.id" class="w-1/2 text-center mb-8" @click="toggleModal(member.id)">
        <img :src="member.poster" :alt="member.name" class="w-32 h-48 mx-auto object-cover">
        <p class="mt-2 font-medium ">{{ member.name }}</p>
        <p class="italic">{{ member.position }}</p>
        <div v-if="modalMember === member.id" class="w-full h-full text-left absolute opacity-90 bottom-0 left-0">
          <div class="bg-white p-4 border border-slate-500">
            <h3 class="font-medium mb-2">{{ member.name }}, {{ member.position }}</h3>
            <p>
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import WinnerSection from '@/components/WinnerSection.vue';
import ScreeningSection from '@/components/ScreeningSection.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Archive',
  components: {
    HeroSection,
    WinnerSection,
    ScreeningSection
  },
  data() {
    return {
      festivalImage: require('@/assets/newgen_2023.png'),
      showAdditionalWinners: false,
      showModal: false,
      modalMember: null,
      categories: [
        {
          movies: [
            { title: 'Will you look at me', director: 'SHULI HUANG', year: '2022', poster: require('@/assets/will_you_look_at_me.png'), id:1, ran: 2022 },
            { title: 'Will you look at me', director: 'SHULI HUANG', year: '2022', poster: require('@/assets/will_you_look_at_me.png'), id:2, ran: 2021 },
          ],
          heading: "Love is Love",
          subheading: "Nov. 3 2022, 7:30pm | OmeU OPENING FILM",
          id: 1
        },
        {
          movies: [
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2022', poster: require('@/assets/what_can_i_hold_you_with.png'), id:3, ran: 2021 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/what_can_i_hold_you_with.png'), id:4, ran: 2022 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/what_can_i_hold_you_with.png'), id:5, ran: 2021 },
            { title: 'What can I hold you with', director: 'DI SHEN', year: '2021', poster: require('@/assets/what_can_i_hold_you_with.png'), id:7, ran: 2021 },
          ],
          heading: "On Your Own",
          subheading: "Nov. 4 2022, 5:00pm | OmeU NEWGEN 2022",
          id: 2
        },
        // ... additional sections ...
      ],
      staff: [
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/ZhaoHuangdan-edited.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:1 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/WuZhilin.png'), description: 'After hiding in the mountains for a century, a Miao ethnic village choir is discovered by an outsider and becomes a national sensation. Two young Miaos and all the villagers must reconcile their faith, identity, and love with the real world of China.', id:2 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/Zijiao.png'), id:3 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/YuZehui.png'), id:4 },
            { name: 'Huangan Zhao', position: 'Founder',  poster: require('@/assets/ZhangYunxi.png'), id:5 },
            { name: 'Wu Zhilin', position: 'Marketing Director',  poster: require('@/assets/YanXiaoyi.png'), id:6 },
          ],
    }
  },
  methods: {
    toggleAdditionalEntries() {
      this.showAdditionalWinners = !this.showAdditionalWinners;
    },
    toggleModal(memberId) {
    if (this.modalMember === memberId) { // if the clicked member's modal is currently open
        this.modalMember = null; // close the modal
    } else {
        this.modalMember = memberId; // open the clicked member's modal
    }
}

  },
  computed: {
    filteredCategories() {
      if (this.showAdditionalWinners) {
        return this.categories;
      }
      return this.categories.slice(0, 1); // returns only the first movie
    }
  }
};
</script>