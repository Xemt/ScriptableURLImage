# ScriptableURLImage
## Made to get an image from a URL, with Scriptable’s APIs...
Fixes (pre-release) (11/5/22): getUnsafe wasn't working, so I added missing 'await' keyword to the getUnsafe Request.

await URLImage.get(url: String): Image, await URLImage.getUnsafe(url: String): Image, URLImage.toBase64(), URLImage.toRawString(): String, URLImage.toBytes(): Array, URLImage.save(): undefined. BTW, this was made by Xemt on GitHub and blah blah blah
