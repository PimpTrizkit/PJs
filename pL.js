const pLS=[true,"appNameVersion",true];
const pL=(m,o)=>{if(pLS[0]){console.log(pLS[1]+" "+(pLS[2]?"("+(new Date()).toLocaleString()+")":"")+" > "+m);if(o)console.log(o);}}
