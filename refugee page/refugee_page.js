let selectedCountry = document.getElementById("country");

selectedCountry.addEventListener('change', function(){
   let selectedCountryValue  = selectedCountry.value;
   if(selectedCountryValue == 'germany'){
    
    window.location.href = 'https://www.expatica.com/de/working/employment-law/german-labour-law-and-work-contracts-104474/';
   }
})
console.log(selectedCountryValue);
