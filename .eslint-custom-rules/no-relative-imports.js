export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow all relative or tilde imports; enforce path aliases',
      recommended: true
    },
    messages: {
      noRelativeLinks: 'Use a path alias instead of relative import "{{ importPath }}".'
    },
    schema: []
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;
        if (
          typeof importPath === 'string' &&
          (importPath.startsWith('./') ||
            importPath.startsWith('../') ||
            importPath.startsWith('~/'))
        ) {
          context.report({
            node: node.source,
            messageId: 'noRelativeLinks',
            data: { importPath }
          });
        }
      }
    };
  }
};
