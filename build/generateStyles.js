const utils = require('./utils');

let PropertyFactory = require('../src/style_manager/model/PropertyFactory')();

let sectors = [{
  name: 'Text',
  open: false,
  //buildProps: ['font-family', 'font-size', 'font-weight', 'font-style', 'font-size-adjust', 'color', 'text-transform', 'text-decoration', 'letter-spacing', 'word-spacing', 'line-height', 'text-align', 'vertical-align', 'direction', 'text-shadow-h', 'text-shadow-v', 'text-shadow-blur', 'text-shadow-color']
  buildProps: ['font-family', 'font-size', 'color', 'font-style', 'font-weight', 'letter-spacing', 'line-height', 'text-align', 'text-decoration', 'vertical-align', 'direction', 'font-size-adjust', 'text-transform', 'word-spacing']
},{
  name: 'Background',
  open: false,
  buildProps: ['opacity', 'background-color', 'background-image', 'background-repeat', 'background-attachment', 'background-position', 'background-size']
},{
  name: 'Dimensions',
  open: false,
  buildProps: ['width', 'height', 'max-width', 'min-width', 'max-height', 'min-height', 'box-shadow', 'margin', 'padding']
},{
  name: 'Border',
  open: false,
  buildProps: ['border-style', 'border-color', 'border-width', 'border-radius']
},{
  name: 'Layout',
  open: false,
  buildProps: ['position', 'position-group', 'display', 'visibility', 'z-index', 'overflow', 'overflow-x', 'overflow-y', 'float', 'clear', 'white-space', 'clip']
},{
  name: 'Other',
  open: false,
  buildProps: ['cursor', 'list-style-type', 'list-style-position', 'list-style-image', 'transition', 'transform', 'perspective']
}];

sectors.forEach(sector => {
  sector.build = PropertyFactory.build(sector.buildProps);
  delete sector.buildProps;
});

//add the display property fullWidth: true for styles to be shown in full width
utils.addKeyToStyleProperty(sectors, 'font-family', 'fullWidth', true);
utils.addKeyToStyleProperty(sectors, 'opacity', 'fullWidth', true);
utils.addKeyToStyleProperty(sectors, 'box-shadow', 'fullWidth', true);
utils.addKeyToStyleProperty(sectors, 'list-item-image', 'fullWidth', true);
utils.addKeyToStyleProperty(sectors, 'position', 'fullWidth', true);
utils.addKeyToStyleProperty(sectors, 'transform', 'fullWidth', true);

const displayNames = {
  'font-family': 'Font family',
  'font-size': 'Font size',
  'color': 'Colour', 
  'font-style': 'Font style', 
  'font-weight': 'Font weight', 
  'letter-spacing': 'Letter spacing', 
  'line-height': 'Line height', 
  'text-align': 'Text align', 
  'text-decoration': 'Text decoration', 
  'vertical-align': 'Vertical align', 
  'direction': 'Direction', 
  'font-size-adjust': 'Font size adjust', 
  'text-transform': 'Text transform', 
  'word-spacing': 'Word spacing',
  'opacity': 'Opacity',
  'background-color': 'Background colour',
  'background-image': 'Background image',
  'background-repeat': 'Background repeat',
  'background-attachment': 'Background attachment',
  'background-position': 'Background position',
  'background-size': 'Background size',
  'width': 'Width',
  'height': 'Height',
  'max-width': 'Max width',
  'min-width': 'Min width',
  'max-height': 'Max height',
  'min-height': 'Min height',
  'box-shadow': 'Box shadow',
  'top': 'Top',
  'right': 'Right',
  'bottom': 'Bottom',
  'left': 'Left',
  'margin': 'Margin',
  'margin-top': 'Top',
  'margin-right': 'Right',
  'margin-bottom': 'Bottom',
  'margin-left': 'Left',
  'padding': 'Padding',
  'padding-top': 'Top',
  'padding-right': 'Right',
  'padding-bottom': 'Bottom',
  'padding-left': 'Left',
  'border-style': 'Border style',
  'border-top-style': 'Border style top',
  'border-right-style': 'Border style right',
  'border-bottom-style': 'Border style bottom',
  'border-left-style': 'Border style left',
  'border-color': 'Border colour',
  'border-top-color': 'Border colour top',
  'border-right-color': 'Border colour right',
  'border-bottom-color': 'Border colour bottom',
  'border-left-color': 'Border colour left',
  'border-width': 'Border width',
  'border-top-width': 'Top',
  'border-right-width': 'Right',
  'border-bottom-width': 'Bottom',
  'border-left-width': 'Left',
  'border-radius': 'Border radius',
  'border-top-left-radius': 'Top left',
  'border-top-right-radius': 'Top right',
  'border-bottom-left-radius': 'Bottom left',
  'border-bottom-right-radius': 'Bottom right',
  'position': 'Position',
  'display': 'Display',
  'visibility': 'Visibility',
  'z-index': 'Z-index',
  'overflow': 'Overflow',
  'overflow-x': 'Overflow x',
  'overflow-y': 'Overflow y',
  'float': 'Float',
  'clear': 'Clear',
  'white-space': 'White space',
  'clip': 'Clip',
  'cursor': 'Cursor',
  'list-style-type': 'List style type',
  'list-style-position': 'List style position',
  'list-style-image': 'List style image',
  'transition': 'Transition',
  'perspective': 'Perspective',
  'transform': 'Transform',
  'position-group': 'Position'
};

for (let i in displayNames) {
  utils.addKeyToStyleProperty(sectors, i, 'displayName', displayNames[i]);
}

//Remove values from font-family property as we would be getting these from the user's page
utils.removeKeyFromProperty(sectors, 'font-family', 'list');
utils.removeKeyFromProperty(sectors, 'font-family', 'defaults');

utils.exportJsonToFile('build/dist/grapes-styles.js', sectors);
console.log('Styles exported successfully.');
