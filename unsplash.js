console.log("running");
let acces = 'MZ0TzpV8HdMy21yfNiUWyXjGPhxdAAFqOhYtTXiE7qg';
url=`https://api.unsplash.com/photos/?client_id=${acces}`;
let displayphotes=document.getElementById("displayingphotes");
fetch(url).then(response =>{
    return response.json();}).then(data=>{
        data.forEach(ele=>{
            displayphotes.innerHTML += `<img class="allimage" src=${ele.urls.regular} >`;
        })
    })



// searchbox
let search = document.getElementById("search");
let btn = document.getElementById("button");
let divheader = document.getElementById("divheader");
btn.addEventListener("click",()=>{
    let query =search.value;
    displayphotes.innerHTML="";
    const uri = `https://api.unsplash.com/search/photos/?client_id=${acces}&query=${query}`;
    fetch(uri).then(response =>{
        return response.json();}).then(dat=>{
            if(dat.total>0){
            dat.results.forEach(el=>{
            divheader.innerText=query.toUpperCase();
                displayphotes.innerHTML += `<img class="allimage" src=${el.urls.regular} >`;
            })
        }else{
             divheader.innerText="";
            displayphotes.innerHTML += `<h1>Couldn't find any images for  ${query}. Please try again</h1>`;
        }
        })
      search.value="";
})

