const auth = firebase.auth();
const db = firebase.firestore();
db.collection("games").get().then(snapshot =>{
    var user = firebase.auth().currentUser
            if (user){
                $(document).ready(function(){
        gameOnPage()
        })

        }
})


  


     
    function gameOnPage(){
    //Div creation
    var gameBox =  document.createElement("div");
    gameBox.classList.add("gameBox")
        //Create Image and implement
        var gameImage = document.createElement("img");
   /*Change the doc data when inventory input is given from Zoe (on next line)*/  
        gameImage.src = doc.data().gameURL;
        gameImage.height = 200+"px"
        gameImage.style.width = 100+"px"
        gameBox.appendChild(gameImage)
        getElementbyId("container").appendChild(gameBox)
    var gameBox_id = user.uid.id
    gameBox.id = gameBox_id
    
  }






    


 

 
    
    
 
