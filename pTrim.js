const pTrim=(s)=>{if(!s||typeof(s)!="string")return "";var s=s.replace(/^\s\s*/,''),w=/\s/,i=s.length;while(w.test(s.charAt(--i)));return s.slice(0,i+1);}
