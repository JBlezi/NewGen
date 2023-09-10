<template>
  <footer>
    <div class="text-main bg-footer flex p-8 md:p-16 h-80 flex-col justify-between">
      <div class="flex mb-12 lg:mb-16">
        <ul class="list-none text-left ">
          <li class="mb-2"><router-link to="/festival">{{ $t('nav.footer1') }}</router-link></li>
          <li class="mb-2"><router-link to="/about-us">{{ $t('nav.footer2') }}</router-link></li>
          <li class="mb-2"><router-link to="/join-us">{{ $t('nav.footer3') }}</router-link></li>
          <li class="mb-2"><router-link to="/contact">{{ $t('nav.footer4') }}</router-link></li>
        </ul>
        <ul class="list-none text-left px-8 md:px-16">
          <li class="mb-2"><router-link to="/sponsors">{{ $t('nav.footer5') }}</router-link></li>
          <li class="mb-2"><router-link to="/press-releases">{{ $t('nav.footer6') }}</router-link></li>
          <li class="mb-2"><router-link to="/privacy">PRIVACY NOTICE</router-link></li>
<!--           <li class="mb-2"><router-link to="/partners">{{ $t('nav.footer7') }}</router-link></li> -->
        </ul>
      </div>
      <div class="flex mb-4 justify-between align-text-bottom">
        <div class="text-xs text-left w-1/2">
          {{ this.footer }}
        </div>
        <div class="text-center space-x-4 md:space-x-8 mt-4 md:mt-0">
          <a href="https://www.facebook.com/NEW.GEN.BERLIN" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" class="h-6 w-6"/></a>
          <a href="https://www.instagram.com/new_gen_berlin/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="h-6 w-6"/></a>
          <a href="https://www.youtube.com/channel/UCIZrq3i32Tt56IAGWWWFZqA" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" class="h-6 w-6"/></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { getLocalizedEntry } from '@/api/contentful';

  export default {
    name: 'MainFooter',
    created() {
      getLocalizedEntry('5f8XDmLlfhVMn6Wfscjm01', this.userLanguage)
        .then((response) => {
          this.entry = response;
          this.footer = this.entry.fields.content;
        })
        .catch(console.error);
    },
    data() {
      return {
        footer: '',
      }
    }
  }
</script>

<style scoped>
/* CSS styles specific to navbar */
</style>
