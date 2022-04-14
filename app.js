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
    for(let j=0;j<8;j++){
    let td=document.createElement("td");
    tr.appendChild(td);
    tr.appendChild(th);
    }
    tblBody.appendChild(tr);
    thead.appendChild(th);
    }
    table.appendChild(thead);
     table.appendChild(tblBody);
     body.appendChild(table);
     table.setAttribute("border", "4");
});






   