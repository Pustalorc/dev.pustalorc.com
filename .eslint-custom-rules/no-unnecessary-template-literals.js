export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow template literals without interpolation',
      recommended: false
    },
    messages: {
      unnecessaryTemplate: 'Unnecessary template literal; use a string literal instead.'
    },
    schema: []
  },
  create(context) {
    return {
      TemplateLiteral(node) {
        // Only flag if there are no expressions (no ${...})
        if (node.expressions.length === 0) {
          context.report({
            node,
            messageId: 'unnecessaryTemplate'
          });
        }
      }
    };
  }
};
