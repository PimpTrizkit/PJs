const pGS=(n,p)=>{let x=p?n.previousSibling:n.nextSibling;while(x&&x.nodeType!=1)x=p?x.previousSibling:x.nextSibling;if(x&&x.nodeType==1)return x;else return false;}
