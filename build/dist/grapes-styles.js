define([], function() { return [{"name":"Text","open":false,"build":[{"property":"font-family","type":"select","list":[],"fullWidth":true,"displayName":"Font family"},{"property":"font-size","fixedValues":["medium","xx-small","x-small","small","large","x-large","xx-large","smaller","larger","length","initial","inherit"],"type":"integer","defaults":"medium","units":["px","em","rem","%","pt"],"min":0,"displayName":"Font size"},{"property":"color","type":"color","defaults":"black","displayName":"Colour"},{"property":"font-style","type":"select","defaults":"normal","list":[{"value":"italic"},{"value":"normal"},{"value":"inherit"}],"displayName":"Font style"},{"property":"font-weight","type":"select","defaults":"400","list":[{"value":"100","name":"Thin"},{"value":"200","name":"Extra-Light"},{"value":"300","name":"Light"},{"value":"400","name":"Normal"},{"value":"500","name":"Medium"},{"value":"600","name":"Semi-Bold"},{"value":"700","name":"Bold"},{"value":"800","name":"Extra-Bold"},{"value":"900","name":"Ultra-Bold"}],"displayName":"Font weight"},{"property":"letter-spacing","fixedValues":["normal","initial","inherit"],"type":"integer","defaults":"normal","units":["px","em","rem","%","pt"],"displayName":"Letter spacing"},{"property":"line-height","fixedValues":["normal","initial","inherit"],"type":"integer","defaults":"normal","units":["px","em","rem","%","pt"],"displayName":"Line height"},{"property":"text-align","type":"radio","defaults":"left","list":[{"value":"left"},{"value":"center"},{"value":"right"},{"value":"justify"}],"displayName":"Text align"},{"property":"text-decoration","type":"radio","defaults":"none","list":[{"value":"none"},{"value":"underline"},{"value":"line-through"}],"displayName":"Text decoration"},{"property":"vertical-align","type":"select","defaults":"baseline","list":[{"value":"top"},{"value":"middle"},{"value":"bottom"},{"value":"baseline"},{"value":"inherit"}],"displayName":"Vertical align"},{"property":"direction","type":"select","defaults":"ltr","list":[{"value":"ltr"},{"value":"rtl"},{"value":"inherit"}],"displayName":"Direction"},{"property":"text-transform","type":"select","defaults":"none","list":[{"value":"none"},{"value":"uppercase"},{"value":"lowercase"},{"value":"capitalize"},{"value":"inherit"}],"displayName":"Text transform"},{"property":"word-spacing","type":"integer","defaults":0,"units":["px","em","rem","%","pt"],"displayName":"Word spacing"}]},{"name":"Background","open":false,"build":[{"property":"opacity","type":"slider","defaults":1,"min":0,"max":1,"step":0.01,"fullWidth":true,"displayName":"Opacity"},{"property":"background-color","type":"color","defaults":"none","displayName":"Background colour"},{"property":"background-image","type":"file","defaults":"none","functionName":"url","displayName":"Background image"},{"property":"background-repeat","type":"select","defaults":"repeat","list":[{"value":"repeat"},{"value":"repeat-x"},{"value":"repeat-y"},{"value":"no-repeat"}],"displayName":"Background repeat"},{"property":"background-attachment","type":"select","defaults":"scroll","list":[{"value":"scroll"},{"value":"fixed"},{"value":"local"}],"displayName":"Background attachment"},{"property":"background-position","type":"select","defaults":"left top","list":[{"value":"left top"},{"value":"left center"},{"value":"left bottom"},{"value":"right top"},{"value":"right center"},{"value":"right bottom"},{"value":"center top"},{"value":"center center"},{"value":"center bottom"}],"displayName":"Background position"},{"property":"background-size","type":"select","defaults":"auto","list":[{"value":"auto"},{"value":"cover"},{"value":"contain"}],"displayName":"Background size"}]},{"name":"Dimensions","open":false,"build":[{"property":"width","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":"auto","units":["px","%","vw","vh"],"min":0,"displayName":"Width"},{"property":"height","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":"auto","units":["px","%","vw","vh"],"min":0,"displayName":"Height"},{"property":"max-width","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":"auto","units":["px","%","vw","vh"],"min":0,"displayName":"Max width"},{"property":"min-width","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":"auto","units":["px","%","vw","vh"],"min":0,"displayName":"Min width"},{"property":"max-height","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":"auto","units":["px","%","vw","vh"],"min":0,"displayName":"Max height"},{"property":"min-height","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":"auto","units":["px","%","vw","vh"],"min":0,"displayName":"Min height"},{"property":"box-shadow","type":"stack","preview":true,"properties":[{"property":"box-shadow-h","type":"integer","defaults":0,"units":["px","%"]},{"property":"box-shadow-v","type":"integer","defaults":0,"units":["px","%"]},{"property":"box-shadow-blur","type":"integer","defaults":"5px","units":["px"],"min":0},{"property":"box-shadow-spread","type":"integer","defaults":0,"units":["px"]},{"property":"box-shadow-color","type":"color","defaults":"black"},{"property":"box-shadow-type","type":"select","defaults":"","list":[{"value":"","name":"Outside"},{"value":"inset","name":"Inside"}]}],"fullWidth":true,"displayName":"Box shadow"},{"property":"margin","type":"composite","properties":[{"property":"margin-top","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":0,"units":["px","%","vw","vh"],"displayName":"Top"},{"property":"margin-right","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":0,"units":["px","%","vw","vh"],"displayName":"Right"},{"property":"margin-bottom","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":0,"units":["px","%","vw","vh"],"displayName":"Bottom"},{"property":"margin-left","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":0,"units":["px","%","vw","vh"],"displayName":"Left"}],"displayName":"Margin"},{"property":"padding","type":"composite","properties":[{"property":"padding-top","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":0,"units":["px","%","vw","vh"],"min":0,"displayName":"Top"},{"property":"padding-right","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":0,"units":["px","%","vw","vh"],"min":0,"displayName":"Right"},{"property":"padding-bottom","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":0,"units":["px","%","vw","vh"],"min":0,"displayName":"Bottom"},{"property":"padding-left","fixedValues":["initial","inherit","auto"],"type":"integer","defaults":0,"units":["px","%","vw","vh"],"min":0,"displayName":"Left"}],"displayName":"Padding"}]},{"name":"Border","open":false,"build":[{"property":"border-style","type":"composite","defaults":"solid","properties":[{"property":"border-top-style","type":"select","list":[{"value":"none"},{"value":"solid"},{"value":"dotted"},{"value":"dashed"},{"value":"double"},{"value":"groove"},{"value":"ridge"},{"value":"inset"},{"value":"outset"}],"displayName":"Top"},{"property":"border-right-style","type":"select","list":[{"value":"none"},{"value":"solid"},{"value":"dotted"},{"value":"dashed"},{"value":"double"},{"value":"groove"},{"value":"ridge"},{"value":"inset"},{"value":"outset"}],"displayName":"Right"},{"property":"border-bottom-style","type":"select","list":[{"value":"none"},{"value":"solid"},{"value":"dotted"},{"value":"dashed"},{"value":"double"},{"value":"groove"},{"value":"ridge"},{"value":"inset"},{"value":"outset"}],"displayName":"Bottom"},{"property":"border-left-style","type":"select","list":[{"value":"none"},{"value":"solid"},{"value":"dotted"},{"value":"dashed"},{"value":"double"},{"value":"groove"},{"value":"ridge"},{"value":"inset"},{"value":"outset"}],"displayName":"Left"}],"displayName":"Border style"},{"property":"border-color","type":"composite","defaults":"black","properties":[{"property":"border-top-color","type":"color","displayName":"Top"},{"property":"border-right-color","type":"color","displayName":"Right"},{"property":"border-bottom-color","type":"color","displayName":"Bottom"},{"property":"border-left-color","type":"color","displayName":"Left"}],"displayName":"Border colour"},{"property":"border-width","type":"composite","defaults":"medium","units":["px","em"],"min":0,"properties":[{"property":"border-top-width","type":"integer","units":["px","em"],"displayName":"Top"},{"property":"border-right-width","type":"integer","units":["px","em"],"displayName":"Right"},{"property":"border-bottom-width","type":"integer","units":["px","em"],"displayName":"Bottom"},{"property":"border-left-width","type":"integer","units":["px","em"],"displayName":"Left"}],"displayName":"Border width"},{"property":"border-radius","type":"composite","properties":[{"property":"border-top-left-radius","type":"integer","defaults":"0px","units":["px","%"],"min":0,"displayName":"Top left"},{"property":"border-top-right-radius","type":"integer","defaults":"0px","units":["px","%"],"min":0,"displayName":"Top right"},{"property":"border-bottom-left-radius","type":"integer","defaults":"0px","units":["px","%"],"min":0,"displayName":"Bottom left"},{"property":"border-bottom-right-radius","type":"integer","defaults":"0px","units":["px","%"],"min":0,"displayName":"Bottom right"}],"displayName":"Border radius"}]},{"name":"Layout","open":false,"build":[{"property":"position","type":"select","defaults":"static","list":[{"value":"static"},{"value":"relative"},{"value":"absolute"},{"value":"fixed"}],"fullWidth":true,"displayName":"Position"},{"property":"position-group","type":"composite","properties":[{"property":"top","type":"integer","defaults":0,"units":["px","%","vw","vh"],"displayName":"Top"},{"property":"right","type":"integer","defaults":0,"units":["px","%","vw","vh"],"displayName":"Right"},{"property":"bottom","type":"integer","defaults":0,"units":["px","%","vw","vh"],"displayName":"Bottom"},{"property":"left","type":"integer","defaults":0,"units":["px","%","vw","vh"],"displayName":"Left"}],"displayName":"Position"},{"property":"display","type":"select","defaults":"block","list":[{"value":"block"},{"value":"inline"},{"value":"inline-block"},{"value":"flex"},{"value":"none"}],"displayName":"Display"},{"property":"visibility","type":"select","defaults":"visible","list":[{"value":"visible"},{"value":"hidden"},{"value":"collapse"},{"value":"inherit"}],"displayName":"Visibility"},{"property":"z-index","displayName":"Z-index"},{"property":"overflow","type":"select","defaults":"visible","list":[{"value":"visible"},{"value":"hidden"},{"value":"scroll"},{"value":"auto"}],"displayName":"Overflow"},{"property":"overflow-x","type":"select","defaults":"visible","list":[{"value":"visible"},{"value":"hidden"},{"value":"scroll"},{"value":"auto"}],"displayName":"Overflow x"},{"property":"overflow-y","type":"select","defaults":"visible","list":[{"value":"visible"},{"value":"hidden"},{"value":"scroll"},{"value":"auto"}],"displayName":"Overflow y"},{"property":"float","type":"select","defaults":"none","list":[{"value":"none"},{"value":"left"},{"value":"right"}],"displayName":"Float"},{"property":"clear","type":"select","defaults":"none","list":[{"value":"none"},{"value":"left"},{"value":"right"},{"value":"both"},{"value":"inherit"}],"displayName":"Clear"},{"property":"white-space","type":"select","defaults":"normal","list":[{"value":"normal"},{"value":"nowrap"},{"value":"pre"},{"value":"pre-line"},{"value":"pre-wrap"},{"value":"inherit"}],"displayName":"White space"},{"property":"clip","displayName":"Clip"}]},{"name":"Other","open":false,"build":[{"property":"cursor","type":"select","defaults":"auto","list":[{"value":"auto"},{"value":"pointer"},{"value":"copy"},{"value":"crosshair"},{"value":"grab"},{"value":"grabbing"},{"value":"help"},{"value":"move"},{"value":"text"}],"displayName":"Cursor"},{"property":"list-style-type","type":"select","defaults":"disc","list":[{"value":"disc"},{"value":"circle"},{"value":"square"},{"value":"decimal"},{"value":"none"},{"value":"inherit"}],"displayName":"List style type"},{"property":"list-style-position","type":"select","defaults":"outside","list":[{"value":"inside"},{"value":"outside"},{"value":"inherit"}],"displayName":"List style position"},{"property":"list-style-image","displayName":"List style image"},{"property":"transition","type":"stack","properties":[{"property":"transition-property","type":"select","defaults":"width","list":[{"value":"all"},{"value":"width"},{"value":"height"},{"value":"background-color"},{"value":"transform"},{"value":"box-shadow"},{"value":"opacity"}]},{"property":"transition-duration","type":"integer","defaults":"2","units":["s"],"min":0},{"property":"transition-timing-function","type":"select","defaults":"ease","list":[{"value":"linear"},{"value":"ease"},{"value":"ease-in"},{"value":"ease-out"},{"value":"ease-in-out"}]}],"displayName":"Transition"},{"property":"transform","properties":[{"property":"transform-rotate-x","type":"integer","defaults":0,"units":["deg"],"functionName":"rotateX"},{"property":"transform-rotate-y","type":"integer","defaults":0,"units":["deg"],"functionName":"rotateY"},{"property":"transform-rotate-z","type":"integer","defaults":0,"units":["deg"],"functionName":"rotateZ"},{"property":"transform-scale-x","type":"integer","defaults":1,"functionName":"scaleX"},{"property":"transform-scale-y","type":"integer","defaults":1,"functionName":"scaleY"},{"property":"transform-scale-z","type":"integer","defaults":1,"functionName":"scaleZ"}],"fullWidth":true,"displayName":"Transform"},{"property":"perspective","type":"integer","defaults":0,"units":["px"],"min":0,"displayName":"Perspective"}]}] });