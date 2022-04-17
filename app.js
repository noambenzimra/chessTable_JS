
let clicked=false;
function mikoum(tr,td,i,j){
    
    //img.src="images/Noir/2N.svg";
    let img=document.createElement("img");

    if(i===0){
            switch(j){
               

                case 0:{
                    console.log(i)
                    
                    img.src="images/Noir/firstN.svg";
                    break;
                    }
                
                 case 1:{
         
                    img.src="images/Noir/2N.svg";
                    break;
                    }
                    case 2: {
                        
                    img.src="images/Noir/3N.svg";
                    break;
                    }
                    
                    case 3:{
                        
                    img.src="images/Noir/4N.svg";
                    break;
                    }
            
                    case 4:{
                        
                        img.src="images/Noir/5N.svg";
                        break;
                    }
            
                    case 5:{
                        
                         img.src="images/Noir/6N.svg";
                         break;
                        }
                    case 6:{
                         
                         img.src="images/Noir/7N.svg";
                         break;
                        }
            
                        case 7:{
                         
                            img.src="images/Noir/8N.svg";
                            break;
                           }

                   }//switch j closing


                }//case 0 closing


                if(i===1){
                
                switch(j){

                    case 0:{
                             
                        img.src="images/Noir/9N.svg";
                        break;}
         
                        case 1:{
                      
                         img.src="images/Noir/10N.svg";
                         break;
                        }   
                        case 2:{
                      
                         img.src="images/Noir/11N.svg";
                         break;
                        }   
                        case 3:{
                      
                         img.src="images/Noir/12N.svg";
                         break;
                        }   
                        case 4:{
                      
                         img.src="images/Noir/13N.svg";
                         break;
                        }   
                        case 5:{
                      
                         img.src="images/Noir/14N.svg";
                         break;
                        }   
                        case 6:{
                      
                         img.src="images/Noir/15N.svg";
                         break;
                        }   
                        case 7:{
                      
                         img.src="images/Noir/16N.svg";
                         break;
                        }
    
    
                }//switch j2 closing


             }

             if(i===6){

                switch(j){

                    case 0:{
                             
                        img.src="images/Blanc/9B.svg";
                        break;}
         
                        case 1:{
                      
                            img.src="images/Blanc/10B.svg";
                         break;
                        }   
                        case 2:{
                      
                            img.src="images/Blanc/11B.svg";
                         break;
                        }   
                        case 3:{
                      
                            img.src="images/Blanc/12B.svg";
                         break;
                        }   
                        case 4:{
                      
                         img.src="images/Blanc/13B.svg";
                         break;
                        }   
                        case 5:{
                      
                         img.src="images/Blanc/14B.svg";
                         break;
                        }   
                        case 6:{
                      
                         img.src="images/Blanc/15B.svg";
                         break;
                        }   
                        case 7:{
                      
                         img.src="images/Blanc/16B.svg";
                         break;
                        }

             }
            }

            
            if(i===7){

                switch(j){

                    case 0:{
                             
                        img.src="images/Blanc/1B.svg";
                        break;}
         
                        case 1:{
                      
                            img.src="images/Blanc/2B.svg";
                         break;
                        }   
                        case 2:{
                      
                            img.src="images/Blanc/3B.svg";
                         break;
                        }   
                        case 3:{
                      
                            img.src="images/Blanc/4B.svg";
                         break;
                        }   
                        case 4:{
                      
                         img.src="images/Blanc/5B.svg";
                         break;
                        }   
                        case 5:{
                      
                         img.src="images/Blanc/6B.svg";
                         break;
                        }   
                        case 6:{
                      
                         img.src="images/Blanc/7B.svg";
                         break;
                        }   
                        case 7:{
                      
                         img.src="images/Blanc/8B.svg";
                         break;
                        }

             }
            }

        //case 1 closing

        //   default:{
        //         img.src="";
        //         break;

        //          }

        
        

td.appendChild(img);
}//func closing



 window.addEventListener('load', () => {


    let body=document.getElementsByTagName("body")[0];
    
    let h1=document.createElement("h1");
    let text2=document.createTextNode("Chess Board Of Noam Benzimra");
    h1.appendChild(text2);
    body.appendChild(h1)
    


    let table = document.createElement("table");

    let tblBody = document.createElement("tbody");
    let thead=document.createElement("thead");

    
    for(let i=0;i<8;i++){
    let tr=document.createElement("tr");
    let th=document.createElement("th");
    let text=document.createTextNode(String.fromCharCode(97 + i));
    th.appendChild(text);
   
   // tr.appendChild(img.src);
    for(let j=0;j<8;j++){

     
    let td=document.createElement("td");
    tr.appendChild(td);
    tr.appendChild(th);
    if((i+j)%2==0){
            
        td.className ="black";
         }
       else{
        
        td.className= "white";
        } 

    // td.click=addEventListener("click",() => {changeColor(td)});
     td.addEventListener("click",() =>{
     table=document.getElementsByTagName("table")[0];
     let v;
     table.addEventListener("click",(e)=>{
     const target=e.target;
     if(!target.closest("td"))
     return
     if(v)
     {
   v.classList.remove('onIt');
    v=undefined;
    }
     target.classList.add('onIt');
     v=target;
    })}) 

   

   
    //td.classList.add("onIt")
    mikoum(tr,td,i,j);
    

    }
    tblBody.appendChild(tr);
    thead.appendChild(th);
    }
    table.appendChild(thead);
     table.appendChild(tblBody);
     body.appendChild(table);
     table.setAttribute("border", "4");

    //  td.addEventListener('click', () => {

        

//   const x=[...document.getElementsByTagName("td")].forEach(td => td.addEventListener("click", e => e.target.classList.add ('onIt')));
// [...document.getElementsByTagName("td")].forEach(td => td.removeEventListener("click", e => e.target.classList.add ('onIt')));

// table.rows[i].cells[j].addEventListener("click",e => e.target.style.background= "#b88474");

    //  })
});



//     tr=document.getElementsByTagName("tr");
//     td = document.getElementsByTagName("td"); 
    

//      if(!clicked){   
//     table.rows[i].cells[j].classList.add('onIt');
//     clicked=true;
//     console.log(x)
//     }
//     else{
//         table.rows[x].cells[y].classList.remove('onIt');
//         table.rows[i].cells[j].classList.add('onIt');
//     }

     
// }

// function removeColor(i,j){
//     table.rows[i].cells[j].classList.remove('onIt');
// }
    
    
//     let i=
//     if(!clicked){
//         return [...document.getElementsByTagName("td")].forEach(element => element.addEventListener("click", e => e.target.classList.add ('onIt')));
//         clicked=true;

//     }
//     else if()

 






   