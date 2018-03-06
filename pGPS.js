const pGPS=(n)=>{let x=n.previousSibling;while(x&&x.nodeType!=1)x=x.previousSibling;if(x&&x.nodeType==1)return x;else return false;}
