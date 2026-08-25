export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow template literals for class attribute in Astro/JSX; use string literal or object/class:list instead'
    },
    messages: {
      noClassTemplate:
        'Do not use template literals for the class attribute. Use a string literal or object, or class:list for conditionals.'
    },
    schema: []
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (
          node.name &&
          node.name.name === 'class' &&
          node.value &&
          node.value.type === 'JSXExpressionContainer' &&
          node.value.expression.type === 'TemplateLiteral'
        ) {
          context.report({
            node: node.value,
            messageId: 'noClassTemplate'
          });
        }
      }
    };
  }
};
