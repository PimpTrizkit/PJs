const pLD = [true,"appName",true];
const pLog=(m,o)=>{if(pLD[0]){console.log(pLD[1]+" "+(pLD[2]?"("+(new Date()).toLocaleString()+")":"")+" > "+m);if(o)console.log(o);}}
