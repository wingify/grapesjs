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
  buildProps: ['width', 'height', 'max-width', 'min-width', 'max-height', 'min-height', 'box-shadow', 'box-shadow-h', 'box-shadow-v', 'box-shadow-blur', 'box-shadow-spread', 'box-shadow-color', 'box-shadow-type', 'top', 'right', 'bottom', 'left', 'margin', 'padding']
},{
  name: 'Border',
  open: false,
  buildProps: ['border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius']
},{
  name: 'Layout',
  open: false,
  buildProps: ['position', 'display', 'visibility', 'z-index', 'overflow', 'overflow-x', 'overflow-y', 'float', 'clear', 'white-space', 'clip']
},{
  name: 'Other',
  open: false,
  buildProps: ['cursor', 'list-style-type', 'list-style-position', 'list-style-image', 'marker-offset', 'transition-property', 'transition-duration', 'transition-timing-function', 'perspective', 'transform-rotate-x', 'transform-rotate-y', 'transform-rotate-z', 'transform-scale-x', 'transform-scale-y', 'transform-scale-z']
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

const displayNames = {
  'font-family': 'Font family',
  'font-size': 'Font size',
  'color': 'Colour', 
  'font-style': 'Font style', 
  'font-weight': 'Font Weight', 
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
  'box-shadow-h': 'Box shadow horizontal',
  'box-shadow-v': 'Box shadow vertical',
  'box-shadow-blur': 'Box shadow blur',
  'box-shadow-spread': 'Box shadow spread',
  'box-shadow-color': 'Box shadow colour',
  'box-shadow-type': 'Box shadow type',
  'top': 'Top',
  'right': 'Right',
  'bottom': 'Bottom',
  'left': 'Left',
  'margin-top': 'Margin top',
  'margin-right': 'Margin right',
  'margin-bottom': 'Margin bottom',
  'margin-left': 'Margin left',
  'padding-top': 'Padding top',
  'padding-right': 'Padding right',
  'padding-bottom': 'Padding bottom',
  'padding-left': 'Padding left',
  'border-top-style': 'Border style top',
  'border-right-style': 'Border style right',
  'border-bottom-style': 'Border style bottom',
  'border-left-style': 'Border style left',
  'border-top-color': 'Border colour top',
  'border-right-color': 'Border colour right',
  'border-bottom-color': 'Border colour bottom',
  'border-left-color': 'Border colour left',
  'border-top-width': 'Border width top',
  'border-right-width': 'Border width right',
  'border-bottom-width': 'Border width bottom',
  'border-left-width': 'Border width left',
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
  'marker-offset': 'Marker offset',
  'transition-property': 'Transition property',
  'transition-duration': 'Transition duration',
  'transition-timing-function': 'Transition timing function',
  'perspective': 'Perspective',
  'transform-rotate-x': 'Transform rotate x',
  'transform-rotate-y': 'Transform rotate y',
  'transform-rotate-z': 'Transform rotate z',
  'transform-scale-x': 'Transform scale x',
  'transform-scale-y': 'Transform scale y',
  'transform-scale-z': 'Transform scale z'
};

for (let i in displayNames) {
  utils.addKeyToStyleProperty(sectors, i, 'displayName', displayNames[i]);
}

//Remove values from font-family property as we would be getting these from the user's page
utils.removeKeyFromProperty(sectors, 'font-family', 'list');
utils.removeKeyFromProperty(sectors, 'font-family', 'defaults');

utils.exportJsonToFile('build/dist/grapes-styles.js', sectors);
console.log('Styles exported successfully.');
