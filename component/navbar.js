function navbar(location1, location2, name1, name2){

   
    return `
    <div class="containernavbar">
        <div class="linkcontainer">
        <a href=${location1}>${name1}</a>
        </div>
        
        <div class="linkcontainer">
        <a href=${location2}>${name2}</a>
        </div>
        
    <div>
    `
}

export default navbar;