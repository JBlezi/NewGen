<template>
  <section class="px-8 md:px-16 my-24">
    <h1 class="text-main font-bold text-3xl md:text-4xl lg:text-5xl">{{ $t('contact') }}</h1>

    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
    </div>

    <div id="mc_embed_signup">
      <form action="https://bngcff.us21.list-manage.com/subscribe/post?u=b4089b69f3cca3a6d1aa4a765&amp;id=83166b1177&amp;v_id=157&amp;f_id=00efe1e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
            <input type="email" v-model="email" @input="validateEmail" name="EMAIL" class="required email">
            <p v-if="emailFeedback" class="text-red-500">{{ emailFeedback }}</p>
          </div>
          <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
            <div class="content__gdpr">
              <label>Would you like to receive emails from us?</label>
              <p>Please select all the ways you would like to hear from NewGen Chinese Film Festival:</p>
              <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                <label class="checkbox subfield" for="gdpr1527">
                  <input type="checkbox" id="gdpr_1527" name="gdpr[1527]" class="gdpr" value="Y"><span>Email</span>
                </label>
              </fieldset>
              <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
            </div>
            <div class="content__gdprLegal">
              <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms">Learn more</a> about Mailchimp's privacy practices.</p>
            </div>
          </div>
          <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display: none;"></div>
          <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
        <div aria-hidden="true" style="position: absolute; left: -5000px;">
          /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
          <input type="text" name="b_b4089b69f3cca3a6d1aa4a765_83166b1177" tabindex="-1" value="">
        </div>
        <div class="optionalParent">
          <div class="clear foot">
            <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" :disabled="!emailValid">
            <p style="margin: 0px auto;"><a href="http://eepurl.com/ixhBz6" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
          </div>
        </div>
    </div>
  </form>
</div>

  </section>
</template>

<script>



export default {
  name: 'ContactForm',
  data() {
  return {
    entry: {},
    movies: [],
    email: '',
    emailValid: false,
    emailFeedback: ''
  }
},
  methods: {
  validateEmail() {
    // Simple regex for email validation
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (this.email.match(pattern)) {
      this.emailValid = true;
      this.emailFeedback = '';
    } else {
      this.emailValid = false;
      this.emailFeedback = 'Please enter a valid email address.';
    }
  }
}


};
</script>

<style scoped>
    #mc_embed_signup {
        background: #fff;
        clear: left;
        font: 14px Helvetica, Arial, sans-serif;
        max-width: 600px;
    }

    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    #mc-embedded-subscribe-form input[type=checkbox] {
        display: inline;
        width: auto;
        margin-right: 10px;
    }
    #mergeRow-gdpr {
        margin-top: 20px;
    }
    #mergeRow-gdpr fieldset label {
        font-weight: normal;
    }
    #mc-embedded-subscribe-form .mc_fieldset {
        border: none;
        min-height: 0px;
        padding-bottom: 0px;
    }
</style>
