export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow hardcoded text content in Astro HTML elements'
    },
    schema: [],
    messages: {
      noHardcodedText: 'Hardcoded text in HTML is not allowed. Use props or expressions instead.'
    }
  },
  create(context) {
    return {
      JSXText(node) {
        // Only flag if it's not whitespace or empty
        if (node.value.trim().length > 0) {
          context.report({
            node,
            messageId: 'noHardcodedText'
          });
        }
      }
    };
  }
};
