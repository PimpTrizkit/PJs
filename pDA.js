const pDA=(e,p)=>{if(document.selection)document.selection.empty();else if(window.getSelection)window.getSelection().removeAllRanges();if(p&&e)e.stopPropagation();}
