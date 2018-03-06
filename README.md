# PJs
Pimped Javascript - Just a library of my javascript functions. They are generally very tight and fast and versatile and copy/paste - able. Readability might be sacrificed.

Create Element  (dcE.js)
------------------------
"dcE" stands for "document.createElement".

Usage:
`dcE("elementType", [[key,value],[key,value],...], [[key,value],[key,value],...], [[HTMLElement],[HTMLElement],...], [["eventType", callback], ["eventType", callback],...]);`
* use `false` instead of an array to skip that parameter.

Params - dcE(t,a,b,c,d):

t  = <element type>
       * A string, such as: `"div"`, `"a"`, `"ul"`, `"span"`, etc..  
       * This uses `document.createElement()`. Therefore, this string must be compatible.
       * This is the only required parameter.

---NOTE: All parameters below will process the array backwards (Last item in the array will be applied first).

a = <2D array of attributes ([key,value]) to set> or <false equivalent>
       * The 2D array example is: `[["checked", false], ["id", "foo"]]`. Note: the first item must be a quoted ("") string. The second item is object-safe. And as an example, the constant `false` was used as a second item here.
       * This uses the `element.setAttribute("attribute", value)`  method of setting attributes..
       * The <false equivalent> is suggested to use `false` and it will skip this parameter, same as not including this parameter.
       * You must include this parameter in order to use the below parameters. (use `false` if not needed)

b = <2D array of attributes ([key,value]) to set by dot notation> or <false equivalent>
       * A 2D array, such as: `[["innerHTML", hVar], ["disabled", "true"]]`. Note: the first element must be a quoted ("") string. The second is object-safe. And as an example, a variable `hVar` was used as a second item here.
       * This uses the `element["attribute"]` alternate method of dot notation access to set an attribute. Note: There are differences between this and the method above. `.setAttribute()` is often suggested instead of dot notation. However, there are otherwise no differences in the code here in `dcE`.
       * A <false equivalent> is suggested to use `false` and it will skip this parameter, same as not including this parameter.
       * You must include this parameter in order to use the below parameters. (use `false` if not needed)

c = <1D array of children to append> or <false equivalent>
       * A 1D array, such as: [cDiv, tDiv, dcE("span")]. Note: These items are expected, but not verified, to be html elements that can be append into other html elements. Also as in example, `dcE` itself was used as an item in the array.
       * This uses the `element.appendChild(child)` method of adding html elements to another html element.
       * A <false equivalent> should be `false` and it will skip this parameter, same as not including this parameter.
       * You must include this parameter in order to use the below parameters. (use `false` if not needed)

d = <2D array of event types and callback functions to add as Event Listeners> or <false equivalent>
       * A 2D array, such as: `[["click", myClickFunc], ["mouseover", (e)=>{e.target.style.color="red";}]]`. Note: the first element must be a quoted ("") string. The second should be a function reference, as in, no `()`.  And as an example, a in-line anonymous arrow function was used as a second item here.
       * This uses the `element.addEventListener("type", callback)` method of setting an Event Listener.
       * A <false equivalent> is suggested to use `false` and it will skip this parameter, same as not including this parameter.
