export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow confusable Unicode characters that look like ASCII equivalents',
      recommended: true
    },
    messages: {
      noConfusableUnicode:
        'Found confusable Unicode character "{{ char }}" ({{ name }}). Use "{{ replacement }}" instead.'
    },
    schema: []
  },
  create(context) {
    // Map of confusable Unicode characters to their ASCII replacements
    const confusables = new Map([
      // Em-dash and en-dash (often confused with hyphen)
      ['\u2014', { name: 'em-dash', replacement: ' - ' }],
      ['\u2013', { name: 'en-dash', replacement: '-' }],
      // Curly/smart quotes
      ['\u2018', { name: 'left single quote', replacement: "'" }],
      ['\u2019', { name: 'right single quote', replacement: "'" }],
      ['\u201C', { name: 'left double quote', replacement: '"' }],
      ['\u201D', { name: 'right double quote', replacement: '"' }],
      // Special spaces
      ['\u00A0', { name: 'non-breaking space', replacement: ' ' }],
      ['\u2003', { name: 'em space', replacement: ' ' }],
      ['\u2002', { name: 'en space', replacement: ' ' }],
      ['\u2009', { name: 'thin space', replacement: ' ' }],
      // Other lookalikes
      ['\u2026', { name: 'ellipsis', replacement: '...' }],
      ['\u00AD', { name: 'soft hyphen', replacement: '' }],
      ['\u2212', { name: 'minus sign', replacement: '-' }],
      ['\u2010', { name: 'hyphen character', replacement: '-' }],
      ['\u2011', { name: 'non-breaking hyphen', replacement: '-' }],
      // Common letter lookalikes
      ['\u0430', { name: 'Cyrillic a', replacement: 'a' }],
      ['\u0435', { name: 'Cyrillic e', replacement: 'e' }],
      ['\u043E', { name: 'Cyrillic o', replacement: 'o' }],
      ['\u0440', { name: 'Cyrillic p', replacement: 'p' }],
      ['\u0441', { name: 'Cyrillic c', replacement: 'c' }],
      ['\u0445', { name: 'Cyrillic x', replacement: 'x' }],
      ['\u0443', { name: 'Cyrillic y', replacement: 'y' }]
    ]);

    // Build regex pattern from all confusable characters
    const pattern = new RegExp(`[${[...confusables.keys()].join('')}]`, 'g');

    function checkForConfusables(node, value) {
      if (typeof value !== 'string') return;

      let match;
      while ((match = pattern.exec(value)) !== null) {
        const char = match[0];
        const info = confusables.get(char);
        if (info) {
          context.report({
            node,
            messageId: 'noConfusableUnicode',
            data: {
              char,
              name: info.name,
              replacement: info.replacement || '(remove)'
            }
          });
        }
      }
    }

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          checkForConfusables(node, node.value);
        }
      },
      TemplateElement(node) {
        checkForConfusables(node, node.value.raw);
      }
    };
  }
};
