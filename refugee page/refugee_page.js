let selectedCountry = document.getElementById("country");
let netherlandHiddenList = document.querySelector(".list-of-topics");
let germanyHiddenList = document.querySelector(".list-of-topics-germany");
selectedCountry.addEventListener('change', function(){
   let selectedCountryValue  = selectedCountry.value;
   if(selectedCountryValue == 'germany'){
    
    window.location.href = 'https://www.expatica.com/de/working/employment-law/german-labour-law-and-work-contracts-104474/';
    germanyHiddenList.style.display = "block";
    netherlandHiddenList.style.display = "none";
   }

   else if(selectedCountryValue == 'netherlands'){
      germanyHiddenList.style.display = "none";
      netherlandHiddenList.style.display = "block";
   }
   
})
console.log(selectedCountryValue);

