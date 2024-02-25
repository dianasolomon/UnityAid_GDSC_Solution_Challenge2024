let selectedCountry = document.getElementById("country");
let netherlandHiddenList = document.querySelector(".list-of-topics");
let germanyHiddenList = document.querySelector(".list-of-topics-germany");
selectedCountry.addEventListener('change', function(){
   let selectedCountryValue  = selectedCountry.value;
   if(selectedCountryValue == 'germany'){
    
   
    germanyHiddenList.style.display = "block";
    netherlandHiddenList.style.display = "none";
   }

   else if(selectedCountryValue == 'netherlands'){
      germanyHiddenList.style.display = "none";
      netherlandHiddenList.style.display = "block";
   }
   else{
      germanyHiddenList.style.display = "none";
      netherlandHiddenList.style.display = "none";
   }
   
})
console.log(selectedCountryValue);

