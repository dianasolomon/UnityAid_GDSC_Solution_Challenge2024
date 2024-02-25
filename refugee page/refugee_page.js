let selectedCountry = document.getElementById("country");
let netherlandHiddenList = document.querySelector(".netherlands-chosen")
let selectedCountryValue  = selectedCountry.value;
selectedCountry.addEventListener('change', function(){
   
   if(selectedCountryValue == 'germany'){
    
    window.location.href = 'https://www.expatica.com/de/working/employment-law/german-labour-law-and-work-contracts-104474/';
   }
})
console.log(selectedCountryValue);

selectedCountry.addEventListener('change', function(){
   if(selectedCountryValue == 'netherlands'){
      netherlandHiddenList.style.display = "block";
   }
   else{
      netherlandHiddenList.style.display = "none";
   }
   

})