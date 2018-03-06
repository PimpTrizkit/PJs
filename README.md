<h1>PJs</h1>

Pimped Javascript - Just a library of my javascript functions. They are generally built for speed, size, versatility, and portability (copy and paste-able). Readability will be sacrificed. Because they are optimized for usage right out-of-the-box.

Note: None of these are meant to be linked in separately. They are to be copied and pasted into the `head` of your HTML on a "as desired" basis.

<hr>

<h2>Create Element  (dcE.js)</h2>

"dcE" stands for "document.createElement".


<h3>Code:</h3>

`const dcE=(t,a,b,c,d)=>{let l=a?a.length?a.length:0:0,k=b?b.length?b.length:0:0,y=c?c.length?c.length:0:0,p=d?d.length?d.length:0:0,e=document.createElement(t);while(l--)e.setAttribute(a[l][0],a[l][1]);while(k--)e[b[k][0]]=b[k][1];while(y--)e.appendChild(c[y]);while(p--)e.addEventListener(d[p][0],d[p][1]);return e;}`


<h3>Usage:</h3>

`dcE("elementType", [[key,value],[key,value],...], [[key,value],[key,value],...], [[HTMLElement],[HTMLElement],...], [["eventType", callback], ["eventType", callback],...]);`
* use `false` instead of an array to skip that parameter.


<h3>Return:</h3>

A HTML Element of the type specified and with any attributes, appended children, or event listeners added.


<h3>Params - dcE(t,a,b,c,d):</h3>

**t**  = < element type >
* A string, such as: `"div"`, `"a"`, `"ul"`, `"span"`, etc..
* This uses `document.createElement()`. Therefore, this string must be compatible.
* This is the only required parameter.

<h4>---NOTE: All parameters below will process the array backwards (Last item in the array will be applied first).</h4>

**a** = < 2D array of attributes ([key,value]) to set >  OR  < false equivalent >
* The 2D array example is: `[["checked", false], ["id", "foo"]]`. Note: the first item must be a quoted ("") string. The second item is object-safe. And as an example, the constant `false` was used as a second item here.
* This uses the `element.setAttribute("attribute", value)`  method of setting attributes.
* The < false equivalent > is suggested to use `false` and it will skip this parameter, same as not including this parameter.
* You must include this parameter in order to use the below parameters (use `false` if not needed).

**b** = < 2D array of attributes ([key,value]) to set by dot notation >  OR  < false equivalent >
* The 2D array example is: `[["innerHTML", hVar], ["disabled", "true"]]`. Note: the first element must be a quoted ("") string. The second is object-safe. And as an example, a variable `hVar` was used as a second item here.
* This uses the `element["attribute"]` alternate method of dot notation access to set an attribute. Note: There are differences between this and the method above. `.setAttribute()` is often suggested instead of dot notation. However, there are otherwise no differences in the code here in `dcE`.
* The < false equivalent > is suggested to use `false` and it will skip this parameter, same as not including this parameter.
* You must include this parameter in order to use the below parameters (use `false` if not needed).

**c** = < 1D array of children to append >  OR  < false equivalent >
* The 1D array example is: `[cDiv, myChildElement, dcE("span")]`. Note: These items are expected, but not verified, to be html elements that can be append into other html elements. Also as an example, `dcE` itself was used as an item in the array.
* This uses the `element.appendChild(child)` method of adding html elements to another html container.
* The < false equivalent > should be `false` and it will skip this parameter, same as not including this parameter.
* You must include this parameter in order to use the below parameters. (use `false` if not needed)

**d** = < 2D array of event types and callback functions to add as Event Listeners >  OR  < false equivalent >
* The 2D array example is: `[["click", myClickFunc], ["mouseover", (e)=>{e.target.style.color="red";}]]`. Note: the first element must be a quoted ("") string. The second should be a function reference, as in, no `()`.  And as an example, a in-line anonymous arrow function was used as a second item here.
* This uses the `element.addEventListener("type", callback)` method of setting an Event Listener.
* The < false equivalent > is suggested to use `false` and it will skip this parameter, same as not including this parameter.

<hr>

<h2>Get Elements by Class Name  (dgCN.js)</h2>

*This is just an alias function to shorten other JS code.*

"dgCN" stands for "document.getElementsByClassName".


<h3>Code:</h3>

`const dgCN=(c)=>document.getElementsByClassName(c);`


<h3>Usage:</h3>

`dgCN("className")`


<h3>Return:</h3>

A HTML Collection of HTML Elements that have `className` equal to the parameter specified from inside `document`.


<h3>Params - dgCN(c):</h3>

**c** = < classNameString >
* A string to search the DOM for elements of the same className.
* This function uses `document.getElementsByClassName()`, and is just an alias.

