<h3>Welcome to my...</h3>
<hr>
<h1>PJs</h1>

&emsp;&emsp;&emsp;&emsp;*"This is what I write my JavaScript in." - PT*

Pimped Javascript - Just a library of my javascript functions, or shims. They are generally built for speed, size, versatility, and portability (copy and paste-able). Readability will be sacrificed, because they are optimized for usage right out-of-the-box. Therefore, this documentation will have to make up for that.

As you can see, a number of the functions are simple. For these, the real work will be to help the documentation and in formalizing a standard.

*Speaking of which, here is the needed help for all of them:*
* *Documentation*
* *Formalizing standards*
* *Some of these are old and might have already been incorporated into newer javascript standards (excluding aliases).*
* *Debuging/Testing/Refining*

NOTE: None of these functions (files) are meant to be linked in separately. They are to be copied and pasted into the `head` of your HTML on a "as desired" basis.

NOTE: I have used all of these functions in various situations and feel good about their performance. But, I have not fully added all practical features yet, nor tested in all relevant situations. Please feel free to chime in.

Also, this list is still incomplete.
<br><br>
<hr>

<h2>Table of Contents</h2>

* [Create Element - "dcE"](#create-element--dcejs)
* [Get Elements by Class Name - "dgCN"&emsp;*(Alias)*](#get-elements-by-class-name--dgcnjs)
* [Get First Element by Class Name - "dgCNz"&emsp;*(Alias)*](#get-first-element-by-class-name--dgcnzjs)
* [Get Element by ID - "dgI"&emsp;*(Alias)*](#get-element-by-id--dgijs)
* [Add/Remove Click Events - "pARCE"](#addremove-click-events--parcejs)
* [Add/Remove any Event - "pARE"](#addremove-any-event--parejs)
* [Deselect All - "pDA"](#deselect-all--pdajs)
* [Get Sibling - "pGS"](#get-sibling--pgsjs)
* [Log - "pL"](#log--pljs)
* [Trim - "pT" (The best Trim I have found)](#trim--ptjs---the-best-trim-i-have-found)
<br><br>
<hr>

<h2>Create Element  (dcE.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

"dcE" is short for "document.createElement".

This will create and return a HTML elemenent with specified attributes, children, and event listeners.

<h3>Code:</h3>

```JavaScript
const dcE=(t,a,b,c,d)=>{let l=a?a.length?a.length:0:0,k=b?b.length?b.length:0:0,y=c?c.length?c.length:0:0,p=d?d.length?d.length:0:0,e=document.createElement(t);while(l--)e.setAttribute(a[l][0],a[l][1]);while(k--)e[b[k][0]]=b[k][1];while(y--)e.appendChild(c[y]);while(p--)e.addEventListener(d[p][0],d[p][1]);return e;}
```

<h3>Usage:</h3>

```JavaScript
let e = dcE("elementType", [[key,value],[key,value],...], [[key,value],[key,value],...], [[HTMLElement],[HTMLElement],...], [["eventType", callback], ["eventType", callback],...]);
```
* use `false` instead of an array to skip that parameter.

<h3>Return:</h3>

A HTML Element of the type specified and with any attributes, appended children, or event listeners added.

<h3>Params - dcE(t,a,b,c,d):</h3>

**t**  = < element type >&emsp;* *REQUIRED*
* A string, such as: `"div"`, `"a"`, `"ul"`, `"span"`, etc..
* This uses `document.createElement()`. Therefore, this string must be compatible.
* This is the only required parameter. All the rest are pseudo-optional.

<h4>---NOTE: All parameters below will process the array backwards (Last item in the array will be applied first).</h4>

**a** = < 2D array of attributes ([key,value]) to set >&emsp;OR&emsp;< false equivalent >
* The 2D array example is: `[["checked", false], ["id", "foo"]]`. Note: the first item must be a quoted ("") string. The second item is object-safe. And as an example, the constant `false` was used as a second item here.
* This uses the `element.setAttribute("attribute", value)`  method of setting attributes.
* The < false equivalent > is suggested to use `false` and it will skip this parameter, same as not including this parameter, or making it optional.
* You must include this parameter in order to use the below parameters (use `false` if not needed).

**b** = < 2D array of attributes ([key,value]) to set by dot notation >&emsp;OR&emsp;< false equivalent >
* The 2D array example is: `[["innerHTML", hVar], ["disabled", "true"]]`. Note: the first element must be a quoted ("") string. The second is object-safe. And as an example, a variable `hVar` was used as a second item here.
* This uses the `element["attribute"]` alternate method of dot notation access to set an attribute. Note: There are differences between this and the method above. `.setAttribute()` is often suggested instead of dot notation. However, there are otherwise no differences in the code here in `dcE`.
* The < false equivalent > is suggested to use `false` and it will skip this parameter, same as not including this parameter, or making it optional.
* You must include this parameter in order to use the below parameters (use `false` if not needed).

**c** = < 1D array of children to append >&emsp;OR&emsp;< false equivalent >
* The 1D array example is: `[cDiv, myChildElement, dcE("span")]`. Note: These items are expected, but not verified, to be html elements that can be append into other html elements. Also as an example, `dcE` itself was used as an item in the array.
* This uses the `element.appendChild(child)` method of adding html elements to another html container.
* The < false equivalent > should be `false` and it will skip this parameter, same as not including this parameter, or making it optional.
* You must include this parameter in order to use the below parameters. (use `false` if not needed)

**d** = < 2D array of event types and callback functions to add as Event Listeners >&emsp;OR&emsp;< false equivalent >
* The 2D array example is: `[["click", myClickFunc], ["mouseover", (e)=>{e.target.style.color="red";}]]`. Note: the first element must be a quoted ("") string. The second should be a function reference, as in, no `()`.  And as an example, a in-line anonymous arrow function was used as a second item here.
* This uses the `element.addEventListener("type", callback)` method of setting an Event Listener.
* The < false equivalent > is suggested to use `false` and it will skip this parameter, same as not including this parameter, or making it optional.
<br><br>
<hr>

<h2>Get Elements by Class Name  (dgCN.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

*This is just an alias function to shorten other JS code.*

"dgCN" alias for "document.getElementsByClassName".

This will search inside `document` for elements that have a `className` equal to the string specified. And then return a HTML Collection of those elements.

<h3>Code:</h3>

```JavaScript
const dgCN=(c)=>document.getElementsByClassName(c);
```

<h3>Usage:</h3>

```JavaScript
let hc = dgCN("myClassName");
```

<h3>Return:</h3>

A HTML Collection of HTML Elements, from inside `document`,  that have `className` equal to the parameter specified. NOTE: If no such elements exists, the collection will be empty.

<h3>Params - dgCN(c):</h3>

**c** = < ClassName String >&emsp;* *REQUIRED*
* A string to search in `document` for elements of the same className.
* This function uses `document.getElementsByClassName()`, and is just an alias.
<br><br>
<hr>

<h2>Get First Element by Class Name  (dgCNz.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

*This is just an alias function to shorten other JS code.*

"dgCNz" alias for "document.getElementsByClassName (zero index)".

This will search inside `document` for the first element that has a `className` equal to the string specified. And then return that element or `undefined`.

<h3>Code:</h3>

```JavaScript
const dgCNz=(c)=>document.getElementsByClassName(c)[0];
```

<h3>Usage:</h3>

```JavaScript
let e = dgCNz("myClassName");
```

<h3>Return:</h3>

The first HTML Element, from inside `document`, that has `className` equal to the parameter specified. NOTE: If no such element exists, `undefined` will be returned.

<h3>Params - dgCN(c):</h3>

**c** = < ClassName String >&emsp;* *REQUIRED*
* A string to search in `document` for the first occurance of an element with the same `className`.
* This function uses `document.getElementsByClassName()`, and is just an alias.
<br><br>
<hr>

<h2>Get Element by ID  (dgI.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

*This is just an alias function to shorten other JS code. I just reinvented the exact same wheel here.*

"dgI" alias for "document.getElementByID".

Searches inside `document` for a HTML Element with `id` equal to the provided string, and returns it. NOTE: The `id` attribute is meant to be unique amongst all elements in the DOM that use it.

<h3>Code:</h3>

```JavaScript
const dgI=(i)=>document.getElementById(i);
```

<h3>Usage:</h3>

```JavaScript
let e = dgI("myID");
```

<h3>Return:</h3>

A HTML Element, from inside `document`, that has `id` equal to the parameter specified. NOTE: If no such element exists, `null` will be returned.

<h3>Params - dgI(i):</h3>

**i** = < ID String >&emsp;* *REQUIRED*
* A string to search in `document` for the first occurance of an element with the same `id`.
* This function uses `document.getElementByID()`, and is just an alias.
<br><br>
<hr>

<h2>Add/Remove Click Events  (pARCE.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

*Dependency: `pDA` (disableable)*

This will add or remove a `click` callback associated with an element. It also allows for use of the optional `once` attribute that will automatically remove the event listener from the element once it fires the first time, therefore, it only fires "once".

`pARCE` will also use `pDA` to cancel out any highlighting caused from accidental double clicking by adding it as a `dblclick` listener. Remove `e.addEventListener("dblclick",pDA);` to disable this feature.

<h3>Code:</h3>

```JavaScript
const pARCE=(a,e,c,o)=>{if(a){e.addEventListener("click",c,(o?{once:true}:false));e.addEventListener("dblclick",pDA);}else e.removeEventListener("click",c);}
```

<h3>Usage:</h3>

```JavaScript
pARCE(true,myElementA,myCallbackFuncA,true); // Add click event, single use (automatic removal).
pARCE(true,myElementB,myCallbackFuncB,false); // Add click event, multi use.
pARCE(true,myElementB,myCallbackFuncB); // Add click event, multi use, default setting.
pARCE(false,myElementB,myCallbackFuncB); // Manual remove click event
```

<h3>Return:</h3>

Nothing, get used to it. But your thing works now.

<h3>Params - pARCE(a,e,c,o):</h3>

**a** = < Add/Remove Boolean >&emsp;* *REQUIRED*
* A true or false equivalent boolean used to add or remove the click event, respectively. Suggested to use `true` or `false`.

**e** = < HTML Element >&emsp;* *REQUIRED*
* The element to which to add or remove the `click` event.
* If `a` above is set to `true` then `pDA` will also be added as an event listener for `dblclick` (double clicks) on this element.

**c** = < Callback Function >&emsp;* *REQUIRED*
* The callback function to which to attach to or remove from the `click` event on the specifed element (`e` above).

**o** = < Once/Multi Boolean >&emsp;*Optional*
* A true or false equivalent boolean used to set the `once` attribute. Suggested to use `true` or `false`.
* The `once` attribute will allow the event listener to run only once, then the browswer will remove it from the element automatically.
* If omitted, `pARCE` will default to a multi-use event listener.
* Skipped if `a` is `false`.
<br><br>
<hr>

<h2>Add/Remove any Event  (pARE.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

This will add or remove a callback associated with an event type and element. It also allows for use of the optional `once` attribute that will automatically remove the event listener from the element once it fires the first time, therefore, it only fires "once".

<h3>Code:</h3>

```JavaScript
const pARE=(a,e,t,c,o)=>{if(a)e.addEventListener(t,c,(o?{once:true}:false));else e.removeEventListener(t,c);}
```

<h3>Usage:</h3>

```JavaScript
pARE(true,myElementA,"mousedown",myCallbackFuncA,true); // Add event, single use (automatic removal).
pARE(true,myElementB,"mousemove",myCallbackFuncB,false); // Add event, multi use.
pARE(true,myElementB,"mousemove",myCallbackFuncB); // Add event, multi use, default setting.
pARE(false,myElementB,"mousemove",myCallbackFuncB); // Manual remove event
```
&emsp;...Therefore...
```JavaScript
pARE(true,myElement,"click",myCallbackFunc,true);  //  OR
pARE(true,myElement,"click",myCallbackFunc,false);  // AND
pARE(false,myElement,"click",myCallbackFunc,false);
```
...could be used to simulate `pARCE` usage but without clearing the highlight from an accidental double click.

<h3>Return:</h3>

Nothing, get used to it. But your thing works now.

<h3>Params - pARE(a,e,t,c,o):</h3>

**a** = < Add/Remove Boolean >&emsp;* *REQUIRED*
* A true or false equivalent boolean used to add or remove the event, respectively. Suggested to use `true` or `false`.

**e** = < HTML Element >&emsp;* *REQUIRED*
* The element to which to add or remove the event.

**t** = < EventType String >&emsp;* *REQUIRED*
* A String that represents the event type to which is registered the callback listener.

**c** = < Callback Function >&emsp;* *REQUIRED*
* The callback function to attach to or remove from the event on the specifed element (`e` above).

**o** = < Once/Multi Boolean >&emsp;*Optional*
* A true or false equivalent boolean used to set the `once` attribute. Suggested to use `true` or `false`.
* The `once` attribute will allow the event listener to run only once, then the browswer will remove it from the element automatically.
* If omitted, `pARE` will default to a multi-use event listener.
* Skipped if `a` is `false`.
<br><br>
<hr>

<h2>Deselect All  (pDA.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

This will de-select all highlighted text on the page.

<h3>Code:</h3>

```JavaScript
const pDA=(e,p)=>{if(document.selection)document.selection.empty();else if(window.getSelection)window.getSelection().removeAllRanges();if(p&&e)e.stopPropagation();}
```
* NOTE: The default is to NOT stop propagation of the event.

<h3>Usage:</h3>

```JavaScript
pDA()`&emsp;OR&emsp;`element.addEventListener("mouseup",pDA);`&emsp;OR&emsp;`document.addEventListener("mousemove", (e)=>{if(e.buttons > 0) pDA(e,true);});
```

<h3>Return:</h3>

Nothing, get over it.

<h3>Params - pDA(e,p):</h3>

**e** = < event >&emsp;*Optional*
* Only required to stop event propagation.
* Not required when used as a stand-alone function (non-event listener).

**p** = < StopPropagation Boolean >&emsp;*Optional*
* A true or false equivalent boolean used to stop event propagation, or not. Suggested to use `true` to stop propagation or `false` to continue propagation.
* When used as a direct event listener, `pDeselectAll` will default to contining propagation.
<br><br>
<hr>

<h2>Get Sibling  (pGS.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

This will get the next (or previous) sibling in the container while skipping text nodes. Or rather, it will skip all nodes that are not of `nodeType` == `1`.

<h3>Code:</h3>

```JavaScript
const pGS=(n,p)=>{let x=p?n.previousSibling:n.nextSibling;while(x&&x.nodeType!=1)x=p?x.previousSibling:x.nextSibling;if(x&&x.nodeType==1)return x;else return false;}
```

<h3>Usage:</h3>

```JavaScript
let a = pGS(myElement,true); // Previous Sibling
let b = pGS(yourElement,false); // Next Sibling
let c = pGS(hisElement); // Next Sibling
```

<h3>Return:</h3>

A HTML Element that is a sibling of the specified element. This returned element is not necessairly the direct sibling of the element specified. This function will skip nodes without type equal to `1`, and return the nearest relevant node. Or `false` if no relevant node was found.

<h3>Params - pGS(n,p):</h3>

**n** = < node/element >&emsp;* *REQUIRED*
* The Node or Element from which to start searching.
* `nodeType` not equal to `1` are skipped, until one is found, and that one is returned.

**p** = < NextPrevious Boolean >&emsp;*Optional*
* A true or false equivalent boolean used to determine which direction to search. Suggested to use `true` to search previous siblings and `false` to search next siblings.
* If omitted, `pGS` will default to searching next siblings.
<br><br>
<hr>

<h2>Log  (pL.js)</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

*Dependency `pLS`*

This will log to the console messages and objects. There is a global data array `pLS` (length `3`) that is added which stores your logging settings. Change your settings here. The first item of the array is a boolean to turn on or off the logging. The second item is the name of the app/script to display in the console, set to `""` if undesired. And the last item in the array is a boolean to determine if a timestamp should be placed before the message (but after the app/script name).

If the optional object is used, it will be on a separate line. Some browsers like this better. And older browsers might not support pushing an object to the console very well, or at all.

<h3>Code:</h3>

```JavaScript
const pLS=[true,"appNameVersion",true];
const pL=(m,o)=>{if(pLS[0]){console.log(pLS[1]+" "+(pLS[2]?"("+(new Date()).toLocaleString()+")":"")+" > "+m);if(o)console.log(o);}}
```

<h3>Usage:</h3>

```JavaScript
pL("Hello FooBar World",foobar);
```

<h3>Return:</h3>

Nothing, unless your looking at the console.

<h3>Params - pL(m,o):</h3>

*Keep in mind, the actual logging settings are set in `pLS` before runtime.*

**m** = < Message String >&emsp;* *REQUIRED*
* The string to display to the console.

**o** = < Object >&emsp;*Optional*
* An optional object to display in the console. This will be displayed on a separate line which sometimes displays better in various browsers, but otherwise about the same in the rest.
* Older browsers might not support pushing an object to the console very well; this helps clean them up. Older still... and they might not support it at all; they could crash in the console either way.
<br><br>
<hr>

<h2>Trim  (pT.js) - The Best Trim I Have Found</h2>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Back to Table of Contents](#table-of-contents)

&emsp;&emsp;&emsp;&emsp;*"Now thats some good trim." - PT*

This will trim the white space from around a string of text. It's fastest version I've ever tested. Credit to someone, somewhere, I didn't write it originally. And I can't find who did, kudos to you, John Doe. I just rewrote/refactored it. Just try to beat it's speed on a variety of string sizes, and amounts/types of white space. And I will replace this method if you succeed and give you all the credit.
<br><br><h3>Code:</h3>

```JavaScript
const pT=(s)=>{var s=s.replace(/^\s\s*/,''),w=/\s/,i=s.length;while(w.test(s.charAt(--i)));return s.slice(0,i+1);}
```

<h3>Usage:</h3>

```JavaScript
let s = pT("   Where does White Space *actually* come from? And then that begs a question, whats Black Space? Can space be Purple or Plaid? And whatever happened to My Space?     ");
```

<h3>Return:</h3>

A copy of the specified string but with white space removed from the beginning and end.

<h3>Params - pT(s):</h3>

**s** = < Trim String >&emsp;* *REQUIRED*
* The string from which a copy is made and white space is removed from the front and back, and then the modified copy is returned.
