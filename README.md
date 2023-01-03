<body>
 <h1> ScriptableURLImage </h1>
 <h2> Table Of Contents: </h2>
 <ul>
  <li><a href="#-Usage-">Usage</a></li>
  <li><a href="#-Installation-">Installation</a></li>
  <li><a href="#-Methods-">Methods</a></li>
  <li><a href="#-Fixes-">Fixes</a></li>
 </ul>
 <h2> Usage: </h2>
  <p> Use it to get images from a request (Using Scriptable's Request API). </p>
 <h2> Installation: </h2>
  <p> You can just copy and paste it into a project in the Scriptable App, or you can download the code. </p>
 <h2> Methods: </h2>
 <code language="typescript" class="typescript">
  URLImage.get(url: String): Promise<TResult>
  URLImage.getUnsafe(url: String): Promise<TResult> 
  URLImage.toBase64(): String
  URLImage.toRawString(): String
  URLImage.toBytes(): Array<number>
  URLImage.save(): undefined
 </code>
 <h2> Fixes: </h2>
  <h3> (prerelease): </h3>
   <ul>
    <li> (11/5/22). 'getUnsafe' wasn't working because I forgot to add the missing 'await' keyword in 'getUnsafe'. </li>
   </ul>
  <h3> (postrelease): </h3>
   <ul>
    <li> </li>
   </ul>
</body>
