const pDeselectAll=(e)=>{if(document.selection)document.selection.empty();else if(window.getSelection)window.getSelection().removeAllRanges();if (e) e.stopPropagation();}
