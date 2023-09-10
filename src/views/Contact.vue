<template>
  <section class="px-8 md:px-16 my-24">
    <h1 class="text-main font-bold text-3xl md:text-4xl lg:text-5xl">{{ $t('contact') }}</h1>

    <iframe
    ref="jotformIframe"
    id="JotFormIFrame-232522949602053"
    title="NewGen Website Contact Form"
    onload="window.parent.scrollTo(0,0)"
    allowtransparency="true"
    allowfullscreen="true"
    allow="geolocation; microphone; camera"
    src="https://form.jotform.com/232522949602053"
    frameborder="0"
    style="min-width:100%;max-width:100%;height:1039px;border:none;"
    scrolling="no"
  >
  </iframe>
  <div class="my-16">
    <h2 class="text-3xl font-medium">Sign up for our Newsletter</h2>
    <iframe src="https://bcb49699.sibforms.com/serve/MUIFAHHcdAXCv7wWxySav2VZLCsFefHQeKlTA_Qsl0oOFq9I5B00zI05F13la16YnfokoGa7U_2LdCDhhVy7iS76bmvBQtEfyL6GgL0kS48bGZNhU10jYUq1SY950CjHhpJ_gBIYe48bnxx-8fVcsAIPz1kcbj10y2FZQdnYyrMpETq7rLvTf4rpF9Yy5yXe025PlDhbB6LTo-Gp"  frameborder="0" scrolling="auto" allowfullscreen style="display: block;min-width:100%;max-width:100%;height:639px;"></iframe>
  </div>






<!-- <div data-tf-widget="C3l7YLt2" data-tf-opacity="100" data-tf-iframe-props="title=NewGen Contact Form EN" data-tf-transitive-search-params data-tf-medium="snippet" style="width:100%;height:500px;"></div>
 -->  </section>
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
    emailFeedback: '',
    script3: '',
    src: '',
  }
},
  methods: {
/*     validateEmail() {
      // Simple regex for email validation
      const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (this.email.match(pattern)) {
        this.emailValid = true;
        this.emailFeedback = '';
      } else {
        this.emailValid = false;
        this.emailFeedback = 'Please enter a valid email address.';
      }
    }, */
/*     loadTypeformScript() {
        const script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        document.body.appendChild(script);
    }, */
/*     loadJotformScript() {
        const script2 = document.createElement('script');
        script2.src = "https://form.jotform.com/jsform/232522949602053";
        document.body.appendChild(script2);
    } */
  },
  mounted() {
/*     this.loadTypeformScript(); */
/*     this.configureJotform(); */
    // Add event listener for Jotform iframe communication
/*     if (window.addEventListener) {
      window.addEventListener("message", this.handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", this.handleIFrameMessage);
    } */
  },
  beforeUnmount() {
    // Clean up event listeners when the component is destroyed
    if (window.removeEventListener) {
      window.removeEventListener("message", this.handleIFrameMessage, false);
    } else if (window.detachEvent) {
      window.detachEvent("onmessage", this.handleIFrameMessage);
    }
  },
  configureJotform() {
    const ifr = this.$refs.jotformIframe; // Using Vue's ref system
    if (ifr) {
      let src = ifr.src;
      let iframeParams = [];
      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
      }
      if (src && src.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
        src = src.substr(0, src.indexOf("?"));
      }
      iframeParams.push("isIframeEmbed=1");
      ifr.src = src + "?" + iframeParams.join('&');
    }
  },
  handleIFrameMessage(e) {
  if (typeof e.data === 'object') return;

  const args = e.data.split(":");
  let iframe;

  if (args.length > 2) {
    iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]);
  } else {
    iframe = document.getElementById("JotFormIFrame");
  }
  if (!iframe) return;

  switch (args[0]) {
    case "scrollIntoView":
      iframe.scrollIntoView();
      break;
    case "setHeight":
      iframe.style.height = args[1] + "px";
      if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
        iframe.style.minHeight = args[1] + "px";
      }
      break;
    case "collapseErrorPage":
      if (iframe.clientHeight > window.innerHeight) {
        iframe.style.height = window.innerHeight + "px";
      }
      break;
    case "reloadPage":
      window.location.reload();
      break;
    case "loadScript":
      if(!this.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) break;
      this.src = args[1];
      if (args.length > 3) {
        this.src = args[1] + ':' + args[2];
      }
      this.script3 = document.createElement('script');
      this.script3.src = this.src;
      this.script3.type = 'text/javascript';
      document.body.appendChild(this.script3);
      break;
    case "exitFullscreen":
      if (window.document.exitFullscreen) window.document.exitFullscreen();
      else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
      else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
      else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
      break;
  }

  const isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
  if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
    const urls = {
      "docurl": encodeURIComponent(document.URL),
      "referrer": encodeURIComponent(document.referrer)
    };
    iframe.contentWindow.postMessage(JSON.stringify({ "type": "urls", "value": urls }), "*");
  }
}

};
</script>

<style scoped>

</style>
