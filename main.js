var lE=logError;
const URLImage = new Proxy({
 image: null,
 url: null,
 get: async function(a){if(new.target)throw"Do not call this function using 'new'";else{if(a&&typeof a=="string"&&a.toLowerCase().match(/^(https:\/\/(www\.)?|file:\/\/)/g)){this.url=a;await new Request(a).loadImage().then(b=>{this.image=b},c=>{throw c});return this.image}else{throw"URL is invalid"}}}, // getSafe
 getUnsafe: async function(a){if(new.target)throw"Do not call this function using 'new'";else{if(a&&typeof a=="string"&&a.toLowerCase().match(/^(http(s)?:\/\/|data:image\/(aces|apng|avif|bmp|gif|heic|heic-sequence|heif|heif-sequence|jpeg|png|svg\+xml|tiff|tiff-fx)|blob:(\/\/|\/\/\/)?|file:\/\/)/g)){this.url=a;let b=new Request(a);b.allowInsecureRequest=!0;await b.loadImage().then(c=>{this.image=c},d=>{throw d});return this.image}else{throw"URL is invalid"}}}, // getUnsafe
 toBase64: function(){if(new.target){throw"Do not call this function using 'new'"}else{let a=this.image;if(a&&a instanceof Image){a=(Data.fromJPEG(a)||Data.fromPNG(a)).toBase64String();return a}else lE("The image wasn't retrieved YET (most likely), or the image type is invalid (less likely)")}}, // toBase64
 toRawString: function(){if(new.target){throw"Do not call this function using 'new'"}else{let a=this.image;if(a&&a instanceof Image){a=(Data.fromJPEG(a)||Data.fromPNG(a)).toRawString();return a}else lE("The image wasn't retrieved YET (most likely), or the image type is invalid (less likely)")}}, // toRawString
 toBytes: function(){if(new.target){throw"Do not call this function using 'new'"}else{let a=this.image;if(a&&a instanceof Image){a=(Data.fromJPEG(a)||Data.fromPNG(a)).getBytes();return a}else lE("The image wasn't retrieved YET (most likely), or the image type is invalid (less likely)")}}, // toBytes
 save: function(){if(new.target){throw"Do not call this function using 'new'"}else{let a=this.image;(a&&a instanceof Image)?Photos.save(a):lE("The image wasn't retrieved YET (most likely), or the image type is invalid (less likely?)")}}, // save
 get size(){let a=this.image;return(a&&a instanceof Image)?a.size:null;},
}, {
 set: function(a,b,c){if(b==="image"&&c&&c instanceof Image||b==="url"&&c&&typeof c==="string")a[b]=c;else if(b==="image"&&(c instanceof Image)===!1||b==="url"&&(c instanceof String)===!1)lE(`Invalid value for URLImage.${b}`);else if(b!=="image"&&b!=="url")lE(`Cannot change this value (${"URLImage."+b})`)}
});
