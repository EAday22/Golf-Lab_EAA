$(function() {
  

    const games = [
      {
        author: "Ashlyn Paruzynski",
        link: "https://ashmcflash.github.io/echo-lab/",
        title: "Echo Lab"
      },
      {
        author: "Cody Mcdonald",
        link: "https://nutenjoyer.github.io/miniature-winner",
        title: "Miniature Winner"
      },
      {
        author: "Ethan Criddle",
        link: "https://stalewhitebread.github.io/urban-invention/",
        title: "Urban Invention"
      },
      {
        author: "Ethan Rinke",
        link: "https://crimsonhog.github.io/probable-octo-carnival/",
        title: "Probable Octo Carnival"
      },
      {
        title: "Delta Lab",
        link: "https://hauhuynh90.github.io/Delta/",
        author: "Hau Huynh"
      },
      {
        title: "Charlie Lab",
        link: "https://hunter-mcgriff.github.io/dev-lab-charlie/",
        author: "Hunter McGriff"
      },
      {
        title: "Delta Lab",
        link: "https://kwilliams31.github.io/Echo-Cool-Games/",
        author: "Kristina Williams"
      }
    ];
    // iterate over the JSON array
    $.each(games, function (index, item) {
      console.log("Game Title: " + item.title);
      console.log("Game URL: " + item.link);
      console.log("Game Author: " + item.author);
    
      // create a brand new HTML element JUST with code
    
    var el = `<div class='card text-center mx-auto bg-dark blue' style="width: 200px"> \
      <button class='cardOpen2 btn btn-outline-info'> ${ item.title } </button> \
       <div class='cardHide'> \
           <br> \
           <a href="${ item.link }" target="_blank" class="link-info" >GAME LINK</a> \
           <p class="text-white">Create by: ${ item.author } </p> \
           <br> \
           <button class='btn btn-outline-info cardClose2'>Close</button> \
       </div>
     </div>`; 
    
     console.log(el); 
    
    
    $('#firstCard').append(el);
    
    $('.nav-dropdown').append($(`<li><a href="#!"> ${item.author} </a></li>`));
    
    });
    
    
    });