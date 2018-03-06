const pGNS=(n)=>{let x=n.nextSibling;while(x&&x.nodeType!=1)x=x.nextSibling;if(x&&x.nodeType==1)return x;else return false;}
