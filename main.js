/* 
 - Fixes. (11/5/22): getUnsafe wasn't working, so I added missing 'await' keyword to the getUnsafe Request.
 - await URLImage.get(url: String): Image, await URLImage.getUnsafe(url: String): Image
 - Also, this was made by Xemt on GitHub and blah blah blah
*/
const URLImage = new Proxy({
 image: null,
 url: null,
 save: function(){if(new.target){throw"Do not call this function using 'new'"}else{let i=this.image;(i&&i instanceof Image)?Photos.save(i):null}},
 toBase64: function(){if(new.target){throw"Do not call this function using 'new'"}else{let i=this.image;if(i&&i instanceof Image){let j=Data.fromJPEG(i);let p=Data.fromPNG(i);j?i=j.toBase64String():p?i=p.toBase64String():0;return i}else{logError("Something went wrong!")}}}, // toBase64
 toRawString: function(){if(new.target){throw"Do not call this function using 'new'"}else{let i=this.image;if(i&&i instanceof Image){let j=Data.fromJPEG(i);let p=Data.fromPNG(i);if(j)i=j.toRawString();else if(p)i=p.toRawString();return i}else{logError("Something went wrong!")}}}, // toRawString
 toBytes: function(){if(new.target){throw"Do not call this function using 'new'"}else{let i=this.image;if(i&&i instanceof Image){let j=Data.fromJPEG(i);let p=Data.fromPNG(i);j?i=j.getBytes():p?i=p.getBytes():0;return i}else{logError("Something went wrong!")}}}, // toBytes
 get: async function(url){if(new.target)throw"Do not call this function using 'new'";else{if(url&&typeof url==="string"&&url.match(/^https:\/\//g)){this.url=url;await new Request(url).loadImage().then(i=>{this.image=i},r=>{throw r});return this.image}else{throw"URL is invalid"}}}, // getSafe
 getUnsafe: async function(url){if(new.target)throw"Do not call this function using 'new'";else{if(url&&typeof url==="string"){this.url=url;let q=new Request(url);q.allowInsecureRequest=true;await q.loadImage().then(i=>{this.image=i},r=>{throw r});return this.image}}},// getUnsafe
}, {
 set: function(o,p,v){if(p==="image"&&v&&v instanceof Image||p==="url"&&v&&typeof v==="string")o[p]=v;else if(p==="image"&&(v instanceof Image)===false||p==="url"&&(v instanceof String)===false)logError(`Invalid value for URLImage.${p}`);else if(p!=="image"&&p!=="url")logError(`cannot change this value (${"URLImage." + p})`)}
})
