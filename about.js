const urlLoc = window.location.search
const aboutPage = document.querySelector(".country-1")
const urlSearch = new URLSearchParams(urlLoc)
const getName = urlSearch.get("country")
console.log(getName);
const newApi = `https://restcountries.com/v3.1/${getName}`
async function request(res){
    const req = await fetch(res)
    const data = await req.json()
   generatAbout(data)
}
request(newApi)
function generatAbout(smth){
    aboutPage.innerHTML = ''
    smth.forEach(info => {
        aboutPage.innerHTML += `
        <img
        class="country-info__img"
        src="${info.flags.svg}"
        alt="germany-flag"
        width="560"
        height="400"
      />
      <div class="country-info__content">
        <h2>${info.name.common}</h2>
        <ul class="country__list">
          <li class="country__item">
            <p class="name">
              Native Name
              <span>${Object.values(info.name.nativeName)[0].official}</span>
            </p>
            <p class="population">
              Population:
              <span>${info.population}</span>
            </p>
            <p class="region">
              Region:
              <span>${info.region}</span>
            </p>
            <p class="sub-region">
              Sub Region:
              <span>Western Europe</span>
            </p>
            <p class="capital">
              Capital:
              <span>${info.capital ? info.capital : 'no capital'}</span>
            </p>
          </li>
          <li class="country__item">
            <p class="name">
              Top Level Domain:
              <span>.de</span>
            </p>
            <p class="population">
              Currencies:
              <span>${Object.values(info.currencies)[0].name},</span>
            </p>
            <p class="region">
              Languages:
              <span>${Object.values(info.languages)}</span>
            </p>
          </li>
        </ul>

        <div class="country__borders">
          <h3>Border Countries:</h3>
         ${info.borders ? info.borders.map((border) => {
             return `
             <a href="./about.html?country=/alpha/${border}">${border}</a>
             `
         }) : "no border"}
         
        </div>
      </div>
        `
    });

}