const inputValue = document.querySelector("#input-value");
const inputForm = document.querySelector("#form");
const valueOfGST= document.querySelector(".result");
const buttonOne = document.querySelector("#btn-1");
const buttonTwo = document.querySelector("#btn-2");
const emptyInput = document.querySelector("#input-percentage-value");

loadEventListener();

buttonOne.addEventListener("click" , function(e){
    e.preventDefault();

    emptyInput.value = buttonOne.value;
    emptyInput.disabled = false;
    

});

buttonTwo.addEventListener("click" , function(e){
    e.preventDefault();

    emptyInput.value = buttonTwo.value;
    emptyInput.disabled = false;
    

});

function loadEventListener(){

    inputForm.addEventListener("submit" , function(e){
        e.preventDefault();

        if(emptyInput.value === "18"){

            const gstExcluded = inputValue.value / 1.18;
            const cgst = gstExcluded * 0.09;
            const sgst = gstExcluded * 0.09;
            const igst = gstExcluded * 0.18;
    
            const gstExcludedFormatted = gstExcluded.toFixed(2);
            const cgstFormatted = cgst.toFixed(2);
            const sgstFormatted = sgst.toFixed(2);
            const igstFormatted = igst.toFixed(2);
    
            valueOfGST.innerHTML = `
            
            <h2 class="mt-5">GST EXCLUDED: <span style="color: red;">${gstExcludedFormatted}</span></h2>
            <h2 class="mt-5">CGST 9%: <span style="color: red;">${cgstFormatted}</span></h2>
            <h2 class="mt-5">SGST 9%: <span style="color: red;">${sgstFormatted}</span></h2>
            <h2 class="mt-5">IGST 18%: <span style="color: red;">${igstFormatted}</span></h2>
    
            `;
            
        }
        else if(emptyInput.value === "24"){

            const gstExcluded = inputValue.value / 1.24;
            const cgst = gstExcluded * 0.12;
            const sgst = gstExcluded * 0.12;
            const igst = gstExcluded * 0.24;
    
            const gstExcludedFormatted = gstExcluded.toFixed(2);
            const cgstFormatted = cgst.toFixed(2);
            const sgstFormatted = sgst.toFixed(2);
            const igstFormatted = igst.toFixed(2);
    
            valueOfGST.innerHTML = `
            
            <h2 class="mt-5">GST EXCLUDED: <span style="color: red;">${gstExcludedFormatted}</span></h2>
            <h2 class="mt-5">CGST 12%: <span style="color: red;">${cgstFormatted}</span></h2>
            <h2 class="mt-5">SGST 12%: <span style="color: red;">${sgstFormatted}</span></h2>
            <h2 class="mt-5">IGST 24%: <span style="color: red;">${igstFormatted}</span></h2>
    
            `;
            
        }
        else{
            alert("CHOOSE THE PERCENTAGE");
        }


    });


};
