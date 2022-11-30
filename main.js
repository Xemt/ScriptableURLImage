/* 
 - Fixes. (11/5/22): getUnsafe wasn't working, so I added missing 'await' keyword to the getUnsafe Request.
 - await URLImage.get(url: String): Image, await URLImage.getUnsafe(url: String): Image
 - Also, this was made by Xemt on GitHub and blah blah blah
*/
var iE="The image wasn't retrieved YET (most likely), or the image type is invalid (less likely?)"
const URLImage = new Proxy({
 image: null,
 url: null,
 save: function(){if(new.target){throw"Do not call this function using 'new'"}else{let a=this.image;if(a&&a instanceof Image)Photos.save(a);else logError(mE)}}, // save
 toBase64: function(){if(new.target){throw"Do not call this function using 'new'"}else{let a=this.image;if(a&&a instanceof Image){let b=Data.fromJPEG(a);let c=Data.fromPNG(a);b?a=b.toBase64String():c?a=c.toBase64String():0;return a}else logError(iE)}}, // toBase64
 toRawString: function(){if(new.target){throw"Do not call this function using 'new'"}else{let a=this.image;if(a&&a instanceof Image){let b=Data.fromJPEG(a);let c=Data.fromPNG(a);a=(b?b.toRawString():c?c.toRawString():0);return a}else logError(iE)}}, // toRawString
 toBytes: function(){if(new.target){throw"Do not call this function using 'new'"}else{let a=this.image;if(a&&a instanceof Image){let b=Data.fromJPEG(a);let c=Data.fromPNG(a);a=(b?b.getBytes():c?c.getBytes():0);return a}else logError(iE)}}, // toBytes
 get: async function(a){if(new.target)throw"Do not call this function using 'new'";else{if(a&&typeof a==="string"&&a.match(/^https:\/\//g)){this.url=a;await new Request(a).loadImage().then(b=>{this.image=b},c=>{throw c});return this.image}else{throw"URL is invalid"}}}, // getSafe
 getUnsafe: async function(a){if(new.target)throw"Do not call this function using 'new'";else{if(a&&typeof a==="string"){this.url=a;let b=new Request(a);b.allowInsecureRequest=!!0;await b.loadImage().then(c=>{this.image=c},d=>{throw d});return this.image}else{throw"URL is invalid"}}}, // getUnsafe
}, {
 set: function(a,b,c){if(b==="image"&&c&&c instanceof Image||b==="url"&&c&&typeof c==="string")a[b]=c;else if(b==="image"&&(c instanceof Image)===!1||b==="url"&&(c instanceof String)===!1)logError(`Invalid value for URLImage.${b}`);else if(b!=="image"&&b!=="url")logError(`cannot change this value (${"URLImage."+b})`)}
})
