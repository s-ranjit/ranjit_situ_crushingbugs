// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page
// use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable -> querySelector("queryString")
// let theButton = document.querySelector("#buttonOne");

// create a 1 to many connection with a variable -> querySelectorAll("queryString")
let theButtons = document.querySelectorAll('#buttonHolder img'),
puzzleBoard = document.querySelector('.puzzle-board'),
puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
dropZones = document.querySelectorAll('.drop-zone'),
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
    draggedPiece;

// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?
function changeBGImage() {
	// bug fix #2 should go here. it's at most 3 lines of JS code.
	puzzlePieces.forEach(piece => {
		// it settles the position of puzzle pieces
          piece.style.left = '0';   
          piece.style.top = '0';
          document.querySelector('.puzzle-pieces').appendChild(piece);
      });
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
    console.log('started dragging this piece: ', this);
    // store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
    console.log('you dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropped something on me');
	// bug fix #1 should go here, and it's at most 3 lines of JS code
	
    if (this.children.length > 0) {               //This checks if there is already a puzzle piece or not
    alert ("puzzle piece overlapped")   //if there is a puzzle piece, it will give you alert and exit from the function
        return; // Drop rejected
      }
	// this line is going to move the dragged piece from the left side of the board
	// into whatever drop zone we choose. appendChild means "add element to the container"
    this.appendChild(draggedPiece);
}

// event listeners
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener('click', changeBGImage));

// add drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

// add the dragover AND the drop event handling to each drop zone
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));