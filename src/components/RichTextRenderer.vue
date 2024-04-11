<template>
  <div v-html="renderedHtml"></div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default {
  props: ['richText'],
  computed: {
    renderedHtml() {
      const options = {
        renderNode: {
          [BLOCKS.OL_LIST]: (node, next) => `<ol>${next(node.content)}</ol>`,
          [BLOCKS.UL_LIST]: (node, next) => `<ul>${next(node.content)}</ul>`,
          [BLOCKS.LIST_ITEM]: (node, next) => `<li>${next(node.content)}</li>`,
          [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
        },
        renderText: text => {
          // Replace newline characters with <br> to respect line breaks
          return text.split('\n').join('<br>');
        },
      };
      return documentToHtmlString(this.richText, options);
    },
  },
};
</script>
