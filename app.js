let clicked = false;

const BOARD_SIZE = 8;
const WHITE_TYPE = "white";
const DARK_TYPE = "dark";

function addImage(cell, type, name) {
  const image = document.createElement("img");
  image.src = "images/" + type + "/" + name + ".svg";
  cell.appendChild(image);
}

function addImageByIndex(cell, type, index) {
  if (index === 0 || index === 7) {
    addImage(cell, type, "rook");
  } else if (index === 1 || index === 6) {
    addImage(cell, type, "knight");
  } else if (index === 2 || index === 5) {
    addImage(cell, type, "bishop");
  } else if (index === 3) {
    addImage(cell, type, "king");
  } else if (index === 4) {
    addImage(cell, type, "queen");
  }
}

let selectedCell = undefined;

// function search(selectedcell){
//     let player=[]
//     let td=document.getElementsByTagName("td")
//     for(let i=0;i<8;i++){
//     for(let j=0;j<8;j++){
//         if(selectedcell===td[j]&&td.id==search1(selectedCell)){
//          let id=td.col;
//          let number=parseInt(id,10);
//          let img=td.img;
//           player.push(new Piece(i,j,"knight",WHITE_TYPE))
//           return player;
//           //return player;

//         }

//         }
//     }
// }

// function search1(selectedcell){
//     let player=[]
//     let td=document.getElementsByTagName("td")

//     for(let j=0;j<8;j++){
//         if(selectedcell===td[j]){
//           return td.id;
//         }

//         }

// }
function onCellClick(e) {
  let td = document.getElementsByTagName("td");
  //console.log(td[selectedCell])
  if (selectedCell !== undefined) {
    selectedCell.classList.remove("onIt");
  }
  selectedCell = e.currentTarget;
  //console.log(selectedCell);
  selectedCell.classList.add("onIt");
  //let x=search(e.currentTarget);
  // let player=search(selectedCell);
  //console.log(player[0].getRow()+" "+player[0].getCol())
  //  ((player[0].getCol())).classList.add('onIt')
}

// function rules(e){
//     =e.currentTarget;
//     if(Piece.type==="pawn")
//     {
//         table.rows[Piece.row+1].cells[Piece.col].classList.add('onIt');
//     }

// }
let pieces = [];

// const obj1={
//     1:"rook",2:"knight",3:"bishop",4:"queen",5:"king",6:"bishop",7:"knight",8:"rook"

// }

class Piece {
  constructor(row, col, type, player) {
    this.row = row;
    this.col = col;
    this.type = type;
    this.player = player;
  }

  getPlayer() {
    return this.player;
  }

  getRow() {
    return this.row;
  }
  getCol() {
    return this.col;
  }
  getPossibleMoves() {
    let result = [];
    if (this.type === "pawn") {
      //   const posibbleMoves = this.getPawnMoves();
      const posibbleMoves = [1,0];
      //console.log("hello" + possibleMoves);
      for (let i = 0; i < posibbleMoves.length; i++) {
          this.getRow()+=1;
       // posibbleMoves[i][0] += this.row;
        //posibbleMoves[i][1] += this.row;
      }   
    }
    if(this.type==="rook"){
        const possibleMoves=getRookMoves();
    }
    
    return result;
  }

  getRookMoves(){
      return [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[2,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]];
  }
  getPawnMoves() {
    return [3];
  }
}
function getInitialBoard() {
  let result = [];
  result.push(new Piece(0, 0, "rook", WHITE_TYPE));
  result.push(new Piece(0, 1, "knight", WHITE_TYPE));
  result.push(new Piece(0, 2, "bishop", WHITE_TYPE));
  result.push(new Piece(0, 3, "king", WHITE_TYPE));
  result.push(new Piece(0, 4, "queen", WHITE_TYPE));
  result.push(new Piece(0, 5, "bishop", WHITE_TYPE));
  result.push(new Piece(0, 6, "knight", WHITE_TYPE));
  result.push(new Piece(0, 7, "rook", WHITE_TYPE));
  for (let i = 0; i < 8; i++) {
    result.push(new Piece(1, i, "pawn", WHITE_TYPE));
  }

  result.push(new Piece(7, 0, "rook", DARK_TYPE));
  result.push(new Piece(7, 1, "knight", DARK_TYPE));
  result.push(new Piece(7, 2, "bishop", DARK_TYPE));
  result.push(new Piece(7, 3, "king", DARK_TYPE));
  result.push(new Piece(7, 4, "queen", DARK_TYPE));
  result.push(new Piece(7, 5, "bishop", DARK_TYPE));
  result.push(new Piece(7, 6, "knight", DARK_TYPE));
  result.push(new Piece(7, 7, "rook", DARK_TYPE));
  for (let i = 0; i < 8; i++) {
    result.push(new Piece(6, i, "pawn", DARK_TYPE));
  }
  return result;
}

window.addEventListener("load", () => {
  let body = document.getElementsByTagName("body")[0];

  let h1 = document.createElement("h1");
  let text2 = document.createTextNode("Chess Board Of Noam Benzimra");
  h1.appendChild(text2);
  body.appendChild(h1);

  let table = document.createElement("table");

  let tblBody = document.createElement("tbody");
  let thead = document.createElement("thead");

  for (let i = 0; i < 8; i++) {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let text = document.createTextNode(String.fromCharCode(97 + i));
    th.appendChild(text);

    // tr.appendChild(img.src);
    for (let j = 0; j < 8; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      tr.appendChild(th);
      //let x=i,y=j
      td.setAttribute("id", j);
      if ((i + j) % 2 == 0) {
        td.className = "black";
      } else {
        td.className = "white";
      }

      //console.log(table.rows[Piece.row].cells[Piece.cell]);
      //console.log("hello")

      // if (i === 0) {
      //     addImageByIndex(td, WHITE_TYPE, j);
      //   } else if (i === 1) {
      //     addImage(td, WHITE_TYPE, 'pawn');
      //   } else if (i === 6) {
      //     addImage(td, DARK_TYPE, 'pawn');
      //   } else if (i === 7) {
      //     addImageByIndex(td, DARK_TYPE, j);
      //   }

      td.addEventListener("click", onCellClick);
      // td.addEventListener('click', rules)

      // --------------------------------------------------------
      //  td.addEventListener("click",() =>{
      //  table=document.getElementsByTagName("table")[0];
      //  let v;
      //  table.addEventListener("click",(e)=>{
      //  const target=e.target;
      //  if(!target.closest("td"))
      //  return
      //   if(v)
      //  {
      //  v.classList.remove('onIt');
      // v=undefined;
      // }
      //  target.classList.add('onIt');
      //  v=target;
      // })})
      // /-------------------------------------------------------
      // mikoum(tr,td,i,j);
    }
    tblBody.appendChild(tr);
    thead.appendChild(th);
  }
  table.appendChild(thead);
  table.appendChild(tblBody);
  body.appendChild(table);
  table.setAttribute("border", "4");

  let pieces = getInitialBoard();
  console.log(pieces[1].getPossibleMoves());
  for (let piece of pieces) {
    addImage(
      tblBody.rows[piece.row].cells[piece.col],
      piece.player,
      piece.type
    );
  }

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
