// DEVELOPED BY https://github.com/lytk4dev

window.onload = function() {
    checkAdBlock();
};
 

function checkAdBlock() {
    try {
        if (ads === true) {} 
            showInfoAdBlock(false);
    }
    catch (err) { 
        showInfoAdBlock(true);
    }
};
 

function showInfoAdBlock(IsExistAdBlock) {
    if (IsExistAdBlock) { 
        alert("Блокировщик рекламы работает"); // Here add what happens if AdBlock is enabled 
    }
    else if (!response.ok){ 
        alert("Блокировщик рекламы работает"); // And here
    } 
    else if (!IsExistAdBlock) {  
        alert("Блокировщик не работает"); // Finally here
    }
};
