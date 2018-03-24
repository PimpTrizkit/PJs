const pCMO =(cO,cPF)=> {
    let cmo = {
        PFS:Symbol(),
	CO:typeof(cO)=="function" ? cO : ()=>({}),
	CPF:typeof(cPF)=="function" ?  cPF : false,
	P: ()=> {
            let x = cmo.CO();
	    if (cmo.CPF) x[cmo.PFS] = cmo.CPF;
	    return new Proxy(x,cmo.H);
	},
        H: {
	    get: (o,p)=> { if (typeof(p) == 'symbol') { if (p == Symbol.toPrimitive && typeof(o[cmo.PFS]) == "function" ) return o[cmo.PFS]; } else if ( !(p in o) ) o[p] = cmo.P(); return o[p]; },
	    set: (o,p,n)=> { delete o[cmo.PFS]; o[p]=n; return true; }
	}
    };
    return cmo.P();
};
