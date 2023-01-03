# ScriptableURLImage
## Table Of Contents:
 [Usage](#Usage)
 [Installation](#Installation)
 [Methods](#Methods)
 [Fixes](#Fixes)
## Usage:
 Use it to get images from a request (Using Scriptable's Request API).
## Installation:
 You can just copy and paste it into a project in the Scriptable App, or you can download the code.
## Methods:
 ```
  URLImage.get(url: String) -> Promise<TResult>
  URLImage.getUnsafe(url: String) -> Promise<TResult> 
  URLImage.toBase64() -> String
  URLImage.toRawString() -> String
  URLImage.toBytes() -> Array<number>
  URLImage.save() -> undefined
 ```
## Fixes:
 #### (prerelease):
 - (11/5/22). 'getUnsafe' wasn't working because I forgot to add the missing 'await' keyword in 'getUnsafe'.
 #### (postrelease):
 -
 <style>
</style>
