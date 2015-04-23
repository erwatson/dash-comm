// declare all display variables
var ABCDEFGHI = "A B C D E F G H I"
var JKLMNOPQR = "J K L M N O P Q R"
var STUVWXYZ = "S T U V W X Y Z"
var ABC = "A B C"
var DEF = "D E F"
var GHI = "G H I"
var JKL = "J K L"
var MNO = "M N O"
var PQR = "P Q R"
var STU = "S T U"
var VWX = "V W X"
var YZ = "Y Z"
var topContent = "Keywords"
var leftContent = ABCDEFGHI
var rightContent = JKLMNOPQR
var bottomContent = STUVWXYZ
var errorUndefined = "Error: undefined"
var back = "Back"

// define functions for changing button content on press
function updateTopWhenTopSelected() {
    if (topContent == "Keywords") {
    	topContent = back;
    } else if (topContent == back) {
    	//do nothing
    } else {
    	topContent = errorUndefined
    }
}
function updateTopWhenLeftSelected() {
    if (topContent == "Keywords") {
    	topContent = back;
    } else if (topContent == back) {
    	// do nothing
    } else {
    	topContent = errorUndefined; 
    }
}
function updateTopWhenRightSelected() {
    if (topContent == "Keywords") {
    	topContent = back;
    } else if (topContent == back) {
    	// do nothing
    } else {
    	topContent = errorUndefined; 
    }
}
function updateTopWhenBottomSelected() {
    if (topContent == "Keywords") {
    	topContent = back;
    } else if (topContent == back) {
    	// do nothing
    } else {
    	topContent = errorUndefined; 
    }
}
function updateLeftWhenTopSelected() {
    // do nothing for now
}
function updateLeftWhenLeftSelected() {
    if (leftContent == ABCDEFGHI) {
    	leftContent = ABC;
    } else if (leftContent = ABC) {
    	leftContent = "A";
    } else if (leftContent = JKL) {
    	leftContent = "J";
    } else if (leftContent = STU) {
    	leftContent = "S";
    } else {
    	leftContent = errorUndefined
    }  
}
function updateLeftWhenRightSelected() {
    if (leftContent == ABCDEFGHI) {
    	leftContent = JKL;
    } else if (leftContent = ABC) {
    	leftContent = "D";
    } else if (leftContent = JKL) {
    	leftContent = "M";
    } else if (leftContent = STU) {
    	leftContent = "V";
    } else {
    	leftContent = errorUndefined
    }  
}
function updateLeftWhenBottomSelected() {
    if (leftContent == ABCDEFGHI) {
    	leftContent = STU;
    } else if (leftContent = ABC) {
    	leftContent = "G";
    } else if (leftContent = JKL) {
    	leftContent = "P";
    } else if (leftContent = STU) {
    	leftContent = "Y";
    } else {
    	leftContent = errorUndefined
    }  
}
function updateRightWhenTopSelected() {
    // do nothing for now
}
function updateRightWhenLeftSelected() {
    if (rightContent == JKLMNOPQR) {
    	rightContent = DEF;
    } else if (rightContent = DEF) {
    	rightContent = "B";
    } else if (rightContent = MNO) {
    	rightContent = "K";
    } else if (rightContent = VWX) {
    	rightContent = "T";
    } else {
    	rightContent = errorUndefined
    }  
}
function updateRightWhenRightSelected() {
    if (rightContent == JKLMNOPQR) {
    	rightContent = MNO;
    } else if (rightContent = DEF) {
    	rightContent = "E";
    } else if (rightContent = MNO) {
    	rightContent = "N";
    } else if (rightContent = VWX) {
    	rightContent = "W";
    } else {
    	rightContent = errorUndefined
    }  
}
function updateRightWhenBottomSelected() {
    if (rightContent == JKLMNOPQR) {
    	rightContent = VWX;
    } else if (rightContent = DEF) {
    	rightContent = "H";
    } else if (rightContent = MNO) {
    	rightContent = "Q";
    } else if (rightContent = VWX) {
    	rightContent = "Z";
    } else {
    	rightContent = errorUndefined
    }  
}
function updateBottomWhenTopSelected() {
    // do nothing for now
}
function updateBottomWhenLeftSelected() {
    if (bottomContent == STUVWXYZ) {
    	bottomContent = GHI;
    } else if (bottomContent = GHI) {
    	bottomContent = "C";
    } else if (bottomContent = PQR) {
    	bottomContent = "L";
    } else if (bottomContent = YZ) {
    	bottomContent = "U";
    } else {
    	bottomContent = errorUndefined
    }  
}
function updateBottomWhenRightSelected() {
    if (bottomContent == STUVWXYZ) {
    	bottomContent = PQR;
    } else if (bottomContent = GHI) {
    	bottomContent = "F";
    } else if (bottomContent = PQR) {
    	bottomContent = "O";
    } else if (bottomContent = YZ) {
    	bottomContent = "X";
    } else {
    	bottomContent = errorUndefined
    }  
}
function updateBottomWhenBottomSelected() {
    if (bottomContent == STUVWXYZ) {
    	bottomContent = YZ;
    } else if (bottomContent = GHI) {
    	bottomContent = "I";
    } else if (bottomContent = PQR) {
    	bottomContent = "R";
    } else if (bottomContent = YZ) {
    	bottomContent = ":)";
    } else {
    	bottomContent = errorUndefined
    }  
}


// Create function for changing content on button press for all 4 buttons
function changeContent() {
    var allBtnNodes = document.getElementsByClassName("btn");
    allBtnNodes[0].innerHTML = topContent;
    allBtnNodes[1].innerHTML = leftContent;
    allBtnNodes[2].innerHTML = rightContent;
    allBtnNodes[3].innerHTML = bottomContent;
    }
    





