const pCMO =(cO,cPF)=> {
    pCMO.PFS = Symbol(),
    pCMO.CO = typeof(cO)=="function" ? cO : ()=>({}),
    pCMO.CPF = typeof(cPF)=="function" ?  cPF : false,
    pCMO.P =()=> {
        let x = pCMO.CO();
        if (pCMO.CPF) x[pCMO.PFS] = pCMO.CPF;
        return new Proxy(x,pCMO.H);
    },
    pCMO.H = {
        get: (o,p)=> { if (typeof(p) == 'symbol') { if (p == Symbol.toPrimitive && typeof(o[pCMO.PFS]) == "function" ) return o[pCMO.PFS]; } else if ( !(p in o) ) o[p] = pCMO.P(); return o[p]; },
        set: (o,p,n)=> { delete o[pCMO.PFS]; o[p]=n; return true; }
    };
    return pCMO.P();
};
