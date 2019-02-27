module.exports = {
  stylePrefix: 'trt-',

  // Specify the element to use as a container, string (query) or HTMLElement
  // With the empty value, nothing will be rendered
  appendTo: '',

  labelContainer: 'Component settings',

  // Placeholder label for text input types
  labelPlhText: 'eg. Text here',

  // Placeholder label for href input
  labelPlhHref: 'eg. https://google.com',

  // Default options for the target input
  optionsTarget: [
    { value: '', name: 'Same tab' },
    { value: '_blank', name: 'New tab' }
  ],

  // Text to show in case no element selected
  textNoElement: 'Select an element before using Trait Manager'
};
