const pTrim=(s)=>{var	s=s.replace(/^\s\s*/,''),w=/\s/,i=s.length;while(w.test(s.charAt(--i)));return s.slice(0,i+1);}
