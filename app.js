// const APIall=''

const loadCountriesApi=()=>{
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries=countries=>{
// console.log(countries);
const countriesHTML = countries.map(country => getCountry(country));
const container=document.getElementById('countries');
container.innerHTML = countriesHTML.join(' ');
}

const getCountry = (country) =>{
    // console.log(country);
    return `
    
    <div class="country-div">
     <a class="country-div1" href="./about.html?country=/name/${country.name.common}">
  
    <img class="img" src="${country.flags.png}">
    <h2 class="countryName">${country.name.common}</h2>
    <h4 class="infos"> Population: ${country.population}</h4>
    <h4 class="infos"> Region: ${country.region}</h4>
    <h4 class="infos"> Capital: ${country.capital}</h4>
    </a>
    </div>
    `
}
loadCountriesApi()

const inpEl = document.querySelector(".inp")

inpEl.addEventListener("input" , () => {
    const inpVal = inpEl.value.toLowerCase()
    const country = document.querySelectorAll(".country-div") 
    const countryName = document.querySelectorAll(".countryName") 
    countryName.forEach((eachName, i ) => {
        if(eachName.textContent.toLowerCase().includes(inpVal)){
            country[i].style.display = 'block'
        }else{
            country[i].style.display = 'none' 
        }
    })
})

