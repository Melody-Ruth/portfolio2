import '../../App.css';
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from "@material-ui/styles";
import ChangeLogEntry from '../../components/ChangeLogEntry.js';
import BasicFacts from '../../components/BasicFacts.js';
import Instructions from '../../components/Instructions.js';
import Typography from '@material-ui/core/Typography';
import startSketch from './PuzzleCanvas';
import p5 from "p5";
import topOutImg from '../graphics/top_out.png';
import topOut2 from '../graphics/top_out2.png';
import topOut3 from '../graphics/top_out3.png';
import rightOutImg from '../graphics/right_out.png';
import rightOut2 from '../graphics/right_out2.png';
import rightOut3 from '../graphics/right_out3.png';
import leftOutImg from '../graphics/left_out.png';
import leftOut2 from '../graphics/left_out2.png';
import leftOut3 from '../graphics/left_out3.png';
import bottomOutImg from '../graphics/bottom_out.png';
import bottomOut2 from '../graphics/bottom_out.png';
import bottomOut3 from '../graphics/bottom_out.png';
import {useEffect} from 'react';

import { createMuiTheme } from "@material-ui/core/styles";
import { remove } from '../../resources/renamed_p5_library';

const myTheme2 = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
            main: "#613659",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#f7ce5c",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: 8,
});

var myp5;
var madeAPuzzle = false;

const Puzzle = () => {
    var testingSource;
    var testNumber = 5;
    var windowWidth, windowHeight;
    var bgColor = '#0282c2';
    var savedPuzzle;
    var imageTooLarge;
    var settingUp = false;
    var r;
    var c;
    //const myp5;
    const testVar = "hello world";
    const startSketch = (loadingSaved) => {
        var Sketch = function(p) {
            var mouseIsHeld = false;
            var saveButton;
            var counter = 0;
            var mouseIsReleased = false;
            var notCropped;
            var puzzleImage;
            var puzzleImage2;
            var newOne = false;
            var numPieces = 6;//3x2
            var imageW;
            var imageH;
            var pieceW;
            var pieceH;
            var margin = 6;
            var beginningTime = 25;
            var showingGoal = false;
            var showX;
            var showY;
            var movingShowImage = false;
            
            var won = false;
            var wonTime = 0;
            
            var pieceImages = [];
            var topOut = [];
            var leftOut = [];
            var rightOut = [];
            var bottomOut = [];
            var pieces = [];
            var groups = [];
            var goesDown = [];
            var downX = [];
            var downType = [];
            var goesRight = [];
            var rightY = [];
            var rightType = [];
            var nextGroup = 0;
            var testImage;
            var currentlyMoving = -1;
            var currentlyMovingGroup = -2;
            var foundOne = false;
            var foundGroup = false;
            var canvasWidth;
            var canvasHeight;
            
            var pieceImageTallW;
            var pieceImageTallH;
            var pieceImageWideW;
            var pieceImageWideH;
            var knobW;
            var knobH;
            
            p.preload = function() {
                imageTooLarge = p.getItem("imageTooLarge");
                if (!loadingSaved || imageTooLarge) {
                    notCropped = p.loadImage(testingSource);
                }
                
                topOut[0] = p.loadImage(topOutImg);
                topOut[1] = p.loadImage(topOut2);
                topOut[2] = p.loadImage(topOut3);
                rightOut[0] = p.loadImage(rightOutImg);
                rightOut[1] = p.loadImage(rightOut2);
                rightOut[2] = p.loadImage(rightOut3);
                leftOut[0] = p.loadImage(leftOutImg);
                leftOut[1] = p.loadImage(leftOut2);
                leftOut[2] = p.loadImage(leftOut3);
                bottomOut[0] = p.loadImage(bottomOutImg);
                bottomOut[1] = p.loadImage(bottomOut2);
                bottomOut[2] = p.loadImage(bottomOut3);
            }
            
            var onAButton = false;
            
            var newButton = function(x, y, w, h, words,offset) {
                var button = {};
                button.x = x;
                button.y = y;
                button.w = w;
                button.h = h;
                button.words = words;
                button.hover = false;
                button.pressed = false;
                button.drawIt = function() {
                    p.stroke(255, 255, 255, 200);
                    p.strokeWeight(this.h/10);
                    if (this.hover) {
                        p.fill(255, 255, 255, 75);
                    } else {
                        p.noFill();
                    }
                    p.rect(this.x, this.y, this.w, this.h, 10);
                    p.noStroke();
                    p.fill(255, 255, 255, 200);
                    p.textSize(canvasWidth*canvasHeight/36420);
                    p.textAlign(p.CENTER,p.CENTER);
                    p.text(this.words, this.x, this.y,this.w,this.h);
                };
                button.update = function() {
                    this.pressed = false;
                    this.hover = false;
                    if (p.mouseX > this.x && p.mouseX < this.x + this.w && p.mouseY > this.y && p.mouseY < this.y + this.h) {
                        this.hover = true;
                        onAButton = true;
                        if (mouseIsReleased) {
                            this.pressed = true;
                        }
                    }
                };
                return button;
            };
            
            var showImage;
            
            var newPiece = function(x,y,index) {
                var piece = {};
                piece.x = canvasWidth/2;
                piece.y = canvasHeight/2;
                piece.index = index;
                piece.groupIndex = -1;
                piece.moving = false;
                piece.groupIndex = -1;
                piece.movedTimer = 0;
                piece.xSpeed = (x-canvasWidth/2)/beginningTime;
                //console.log(piece.x-canvasWidth/2);
                piece.ySpeed = (y-canvasHeight/2)/beginningTime;
                if (index % c != 0) {
                    piece.leftIndex = index-1;
                } else {
                    piece.leftIndex = -1;
                }
                if (index >= c) {
                    piece.topIndex = index-c;
                } else {
                    piece.topIndex = -1;
                }
                piece.leftDone = false;
                //piece.rightDone = false;
                piece.topDone = false;
                //piece.bottomDone = false;
                piece.drawIt = function() {
                    p.image(pieceImages[this.index],this.x-pieceImageTallW/2,this.y-pieceImageWideH/2);
                    //console.log(this.x,this.y);
                };
                piece.setPosition = function(newX, newY) {
                    this.x = newX;
                    this.y = newY;
                    this.xSpeed = 0;
                    this.ySpeed = 0;
                }
                piece.beginningMoveIt = function() {
                    this.x += this.xSpeed;
                    this.y += this.ySpeed;
                };
                piece.checkMoving = function() {
                    /*if ((currentlyMoving == -1 || currentlyMoving == this.index || currentlyMovingGroup == this.groupIndex) && p.mouseIsPressed && p.pmouseX > this.x && p.pmouseX < this.x+pieceW && p.pmouseY > this.y && p.pmouseY < this.y+pieceH) {
                        this.moving = true;
                        currentlyMoving = this.index;
                        foundOne = true;
                        if (this.groupIndex > -1) {
                            groups[this.groupIndex].setInMotion();
                        }
                        this.movedTimer = 0;
                    } else */if ((currentlyMoving == -1 || currentlyMoving == this.index || currentlyMovingGroup == this.groupIndex) && 
                    p.mouseIsPressed && p.pmouseX > this.x-pieceImageTallW/2 && p.pmouseX < this.x+pieceW+pieceImageTallW/2 && 
                    p.pmouseY > this.y-pieceImageWideH/2 && p.pmouseY < this.y+pieceH+pieceImageWideH/2 && pieceImages[this.index].get(p.pmouseX-this.x+Math.round(pieceImageTallW/2),p.pmouseY-this.y+Math.round(pieceImageWideH/2))[3] == 255
                    && p.mouseX > 0 && p.mouseX < canvasWidth && p.mouseY > 0 && p.mouseY < canvasHeight) {
                        this.moving = true;
                        currentlyMoving = this.index;
                        foundOne = true;
                        if (this.groupIndex > -1) {
                            groups[this.groupIndex].setInMotion();
                        }
                        this.movedTimer = 0;
                    }
                };
                piece.moveIt = function() {
                    if (this.moving) {
                        this.x += p.mouseX-p.pmouseX;
                        this.y += p.mouseY-p.pmouseY;
                    }
                };
                piece.checkNeighbors = function() {
                    if (!this.moving && this.movedTimer < 3) {
                        if (!this.leftDone && this.leftIndex != -1 && !pieces[this.leftIndex].moving && pieces[this.leftIndex].x+pieceW < this.x+margin && pieces[this.leftIndex].x+pieceW > this.x-margin && pieces[this.leftIndex].y < this.y+margin && pieces[this.leftIndex].y > this.y-margin) {
                            if (this.groupIndex != -1 && pieces[this.leftIndex].groupIndex == -1) {//We're part of a group. New piece isn't.
                                var xShift = pieces[this.leftIndex].x+pieceW-this.x;
                                var yShift = pieces[this.leftIndex].y-this.y;
                                for (var i = 0; i < groups[this.groupIndex].indices.length; i++) {
                                    pieces[groups[this.groupIndex].indices[i]].x += xShift;
                                    pieces[groups[this.groupIndex].indices[i]].y += yShift;
                                }
                                groups[this.groupIndex].indices[groups[this.groupIndex].indices.length] = this.leftIndex;
                                pieces[this.leftIndex].groupIndex = this.groupIndex;
                            } else if (this.groupIndex == -1 && pieces[this.leftIndex].groupIndex != -1) {//We're not part of a group. New piece is.
                                groups[pieces[this.leftIndex].groupIndex].indices[groups[pieces[this.leftIndex].groupIndex].indices.length] = this.index;
                                this.groupIndex = pieces[this.leftIndex].groupIndex;
                                this.x = pieces[this.leftIndex].x+pieceW;
                                this.y = pieces[this.leftIndex].y;
                            } else if (this.groupIndex != -1 && pieces[this.leftIndex].groupIndex != -1) {//We're both part of groups. Merge!
                                var xShift = pieces[this.leftIndex].x+pieceW-this.x;
                                var yShift = pieces[this.leftIndex].y-this.y;
                                for (var i = 0; i < groups[this.groupIndex].indices.length; i++) {
                                    pieces[groups[this.groupIndex].indices[i]].x += xShift;
                                    pieces[groups[this.groupIndex].indices[i]].y += yShift;
                                }
                                groups[this.groupIndex].merge(pieces[this.leftIndex].groupIndex);
                            } else if (this.groupIndex == -1 && pieces[this.leftIndex].groupIndex == -1) {//Neither of us are in a group.
                                groups[nextGroup] = newGroup(nextGroup, [this.index, this.leftIndex]);
                                this.groupIndex = nextGroup;
                                pieces[this.leftIndex].groupIndex = nextGroup;
                                //console.log(groups[nextGroup]);
                                nextGroup++;
                                this.x = pieces[this.leftIndex].x+pieceW;
                                this.y = pieces[this.leftIndex].y;
                            }
                            this.leftDone = true;
                            //testSound.play();
                        }
                        
                        if (!this.topDone && this.topIndex != -1 && !pieces[this.topIndex].moving && pieces[this.topIndex].x < this.x+margin && pieces[this.topIndex].x > this.x-margin && pieces[this.topIndex].y+pieceH < this.y+margin && pieces[this.topIndex].y+pieceH > this.y-margin) {
                            if (this.groupIndex != -1 && pieces[this.topIndex].groupIndex == -1) {//We're part of a group. New piece isn't.
                                var xShift = pieces[this.topIndex].x-this.x;
                                var yShift = pieces[this.topIndex].y+pieceH-this.y;
                                for (var i = 0; i < groups[this.groupIndex].indices.length; i++) {
                                    pieces[groups[this.groupIndex].indices[i]].x += xShift;
                                    pieces[groups[this.groupIndex].indices[i]].y += yShift;
                                }
                                groups[this.groupIndex].indices[groups[this.groupIndex].indices.length] = this.topIndex;
                                pieces[this.topIndex].groupIndex = this.groupIndex;
                            } else if (this.groupIndex == -1 && pieces[this.topIndex].groupIndex != -1) {//We're not part of a group. New piece is.
                                groups[pieces[this.topIndex].groupIndex].indices[groups[pieces[this.topIndex].groupIndex].indices.length] = this.index;
                                this.groupIndex = pieces[this.topIndex].groupIndex;
                                this.x = pieces[this.topIndex].x;
                                this.y = pieces[this.topIndex].y+pieceH;
                            } else if (this.groupIndex != -1 && pieces[this.topIndex].groupIndex != -1) {//We're both part of groups. Merge!
                                var xShift = pieces[this.topIndex].x-this.x;
                                var yShift = pieces[this.topIndex].y+pieceH-this.y;
                                for (var i = 0; i < groups[this.groupIndex].indices.length; i++) {
                                    pieces[groups[this.groupIndex].indices[i]].x += xShift;
                                    pieces[groups[this.groupIndex].indices[i]].y += yShift;
                                }
                                groups[this.groupIndex].merge(pieces[this.topIndex].groupIndex);
                            } else if (this.groupIndex == -1 && pieces[this.topIndex].groupIndex == -1) {//Neither of us are in a group.
                                groups[nextGroup] = newGroup(nextGroup, [this.index, this.topIndex]);
                                this.groupIndex = nextGroup;
                                pieces[this.topIndex].groupIndex = nextGroup;
                                //console.log(groups[nextGroup]);
                                nextGroup++;
                                this.x = pieces[this.topIndex].x;
                                this.y = pieces[this.topIndex].y+pieceH;
                            }
                            this.topDone = true;
                            //testSound.play();
                        }
                        
                        if (this.leftIndex > -1 && this.groupIndex != -1 && pieces[this.leftIndex].groupIndex == this.groupIndex) {
                            this.leftDone = true;
                        }
                        if (this.topIndex > -1 && this.groupIndex != -1 && pieces[this.topIndex].groupIndex == this.groupIndex) {
                            this.topDone = true;
                        }
                    }
                    if (!won && this.groupIndex != -1 && groups[this.groupIndex].indices.length == r*c) {
                        won = true;
                        wonTime = counter;
                    }
                    
                };
                return piece;
            };
            
            var newGroup = function(index, groupPieces) {
                var group = {};
                group.indices = groupPieces;
                group.index = index;
                group.setInMotion = function() {
                    for (var j = 0; j < this.indices.length; j++) {
                        pieces[this.indices[j]].moving = true;
                    }
                    foundGroup = true;
                    currentlyMovingGroup = this.index;
                }
                group.stopMotion = function() {
                    for (var j = 0; j < this.indices.length; j++) {
                        pieces[this.indices[j]].moving = false;
                    }
                }
                group.merge = function(toAbsorb) {
                    var tempLength = groups[toAbsorb].indices.length;
                    for (var j = 0; j < tempLength; j++) {
                        if (pieces[groups[toAbsorb].indices[j]].groupIndex != this.index) {
                            this.indices[this.indices.length] = groups[toAbsorb].indices[j];
                            pieces[groups[toAbsorb].indices[j]].groupIndex = this.index;
                        }
                    }
                }
                return group;
            };
            
            var eyeX = 0;
            var eyeY = -67;
            var eyeZ = 0;
            var zw = 240;
            
            var xyz2xy = function(x, y, z) {
                return [(zw-eyeZ)*(x-eyeX)/(z-eyeZ) + eyeX, (zw-eyeZ)*(y-eyeY)/(z-eyeZ) + eyeY];
            };
            
            var myRandom = function(low,high) {
                return Math.random()*(high-low)+low;
            };
            
            var newConfettiPiece = function(x1,y1,z1,h,r,colorR,colorG,colorB,rotateSpeed) {
                var confetti = {};
                confetti.p1 = [x1,y1,z1];
                confetti.p2 = [x1+r,y1-r*Math.sqrt(2),z1];
                confetti.p3 = [x1+r,y1-r*Math.sqrt(2)-h,z1];
                confetti.p4 = [x1,y1-h,z1];
                confetti.h = h;
                confetti.r = r;
                confetti.color = [colorR,colorG,colorB];
                confetti.fallSpeed = h*r/200;
                confetti.rotateSpeed = rotateSpeed;
                confetti.currentAngle = 0;
                /*if (Math.myRandom() > 0.5) {
                    confetti.direction = -1;
                } else {
                    confetti.direction = 1;
                }*/
                confetti.findPos = function() {
                    this.screenP1 = xyz2xy(this.p1[0],this.p1[1],this.p1[2]);
                    this.screenP2 = xyz2xy(this.p2[0],this.p2[1],this.p2[2]);
                    this.screenP3 = xyz2xy(this.p3[0],this.p3[1],this.p3[2]);
                    this.screenP4 = xyz2xy(this.p4[0],this.p4[1],this.p4[2]);
                }
                confetti.drawIt = function() {
                    p.fill(this.color[0],this.color[1],this.color[2]);
                    p.quad(this.screenP1[0],this.screenP1[1],this.screenP2[0],this.screenP2[1],this.screenP3[0],this.screenP3[1],this.screenP4[0],this.screenP4[1]);
                }
                confetti.moveIt = function() {
                    this.p1[1]+=this.fallSpeed;
                    this.p2[1]+=this.fallSpeed;
                    this.p3[1]+=this.fallSpeed;
                    this.p4[1]+=this.fallSpeed;
                }
                confetti.rotate = function() {
                    //var startAngle = Math.atan((this.p2[2]-this.p1[2])/(this.p2[0]-this.p1[0]));
                    //var newAngle = startAngle + this.rotateSpeed;
                    this.currentAngle += this.rotateSpeed;
                    this.p2[2] = this.p1[2]+r*Math.sin(this.currentAngle);
                    this.p3[2] = this.p2[2];
                    this.p2[0] = this.p1[0]+r*Math.cos(this.currentAngle);
                    this.p3[0] = this.p2[0];
                }
                return confetti;
            };
            
            var confettiArray = [];
            var savePuzzle;
            var showImage;
            //TODO: add cookie acceptance
            var okayedCookie;
            p.setup = function() {
                okayedCookie = "true";
                p.angleMode(p.DEGREES);
                canvasWidth = 800;
                canvasWidth = Math.round(windowWidth*.95);
                canvasHeight = Math.round(windowHeight*0.8);
                //canvasHeight = 600;
                var testCanvas = p.createCanvas(canvasWidth,canvasHeight);
                eyeX = canvasWidth/2;
                testCanvas.parent('canvas1');
                p.noFill();
                p.noStroke();
                p.background(2, 130, 194); //pick a color
                
                showImage = newButton(canvasWidth*0.8, canvasHeight*0.84, canvasWidth*0.19, canvasHeight*0.14, "Show Complete Image",0);
                savePuzzle = newButton(canvasWidth*0.85, canvasHeight*0.02, canvasWidth*0.14, canvasHeight*0.14, "Save Puzzle",0);
                
                if (!loadingSaved) {
                    var sizeScale = Math.min(1,canvasWidth*0.8/notCropped.width,canvasHeight*0.8/notCropped.height);
                    var wouldBePixels = notCropped.width * notCropped.height * 4 * sizeScale * sizeScale;
                    if (wouldBePixels > 630000) {
                        wouldBePixels = notCropped.width * notCropped.height * 4;
                        //sizeScale = Math.sqrt(630000 / wouldBePixels);
                    }
                    imageW = Math.round(notCropped.width*sizeScale);
                    imageH = Math.round(notCropped.height*sizeScale);
                    notCropped.resize(imageW,imageH);
                } else if (!imageTooLarge) {
                    imageW = p.getItem("imageW");
                    imageH = p.getItem("imageH");
                    r = p.getItem("rows");
                    c = p.getItem("columns");
                } else {//Loading a saved puzzle with a too-large image
                    r = p.getItem("rows");
                    c = p.getItem("columns");
                    var sizeScale = Math.min(1,canvasWidth*0.8/notCropped.width,canvasHeight*0.8/notCropped.height);
                    var wouldBePixels = notCropped.width * notCropped.height * 4 * sizeScale * sizeScale;
                    if (wouldBePixels > 630000) {
                        wouldBePixels = notCropped.width * notCropped.height * 4;
                        //sizeScale = Math.sqrt(630000 / wouldBePixels);
                    }
                    imageW = Math.round(notCropped.width*sizeScale);
                    imageH = Math.round(notCropped.height*sizeScale);
                    notCropped.resize(imageW,imageH);
                }
                var newW = Math.floor(imageW/(c*3))*c*3;
                var newH = Math.floor(imageH/(r*3))*r*3;
                
                puzzleImage = p.createImage(newW, newH);
                if (!loadingSaved || imageTooLarge) {
                    puzzleImage.copy(notCropped,0,0,newW,newH,0,0,newW,newH);
                } else {
                    var testArray = p.getItem("puzzleImagePixels");
                    puzzleImage.loadPixels();
                    for (var i = 0; i < testArray.length; i++) {
                        puzzleImage.pixels[i] = testArray[i];
                    }
                    puzzleImage.updatePixels();
                }
                
                pieceW = puzzleImage.width/c;
                pieceH = puzzleImage.height/r;
                
                pieceImageWideW = Math.round(pieceW*5/3);
                pieceImageWideH = Math.round(pieceH*2/3);
                pieceImageTallW = Math.round(pieceW*2/3);
                pieceImageTallH = Math.round(pieceH*5/3);
                
                knobW = Math.round(pieceW/3);
                knobH = Math.round(pieceH/3);
                for (var i = 0; i < topOut.length; i++) {
                    topOut[i].resize(knobW,knobH);
                }
                for (var i = 0; i < rightOut.length; i++) {
                    rightOut[i].resize(knobW,knobH);
                }
                for (var i = 0; i < leftOut.length; i++) {
                    leftOut[i].resize(knobW,knobH);
                }
                for (var i = 0; i < bottomOut.length; i++) {
                    bottomOut[i].resize(knobW,knobH);
                }
                
                puzzleImage2 = p.createImage(newW+knobW*2,newH+knobH*2);
                puzzleImage2.loadPixels();
                for (var i = 0; i < puzzleImage2.pixels.length; i+=4) {
                    puzzleImage2.pixels[i] = 255;
                    puzzleImage2.pixels[i+1] = 255;
                    puzzleImage2.pixels[i+2] = 255;
                    puzzleImage2.pixels[i+3] = 255;
                }
                puzzleImage2.updatePixels();
                puzzleImage2.copy(puzzleImage,0,0,imageW,imageH,knobW,knobH,imageW,imageH);
                
                //Make puzzle pieces
                if (!loadingSaved) {
                    for (var i = 0; i < r*c; i++) {
                        pieceImages[i] = p.createImage(pieceImageWideW,pieceImageTallH);
                        pieceImages[i].copy(puzzleImage2,(i%c)*pieceW,Math.floor(i/c)*pieceH,pieceImageWideW,pieceImageTallH,0,0,pieceImageWideW,pieceImageTallH);
                        //Start with border invisible:
                        var tempWidth = pieceImages[i].width;
                        var tempHeight = pieceImages[i].height;
                        var othercount = 0;
                        pieceImages[i].loadPixels();
                        for (var j = 0; j < pieceImageTallH; j++) {
                            for (var k = 0; k < knobW; k++) {
                                pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 0;
                            }
                        }
                        for (var j = 0; j < pieceImageTallH; j++) {
                            for (var k = tempWidth-knobW; k < tempWidth; k++) {
                                pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 0;
                            }
                        }
                        for (var j = 0; j < knobH; j++) {
                            for (var k = knobW; k < tempWidth-knobW; k++) {
                                pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 0;
                            }
                        }
                        for (var j = tempHeight-knobH; j < tempHeight; j++) {
                            for (var k = knobW; k < tempWidth-knobW; k++) {
                                pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 0;
                            }
                        }
                        //Top:
                        if (i < c) {
                            //It's a top piece. We're done here!
                        } else if (goesDown[i-c]) {
                            //The one above us goes out, so we need to go in
                            othercount = 0;
                            bottomOut[downType[i-c]].loadPixels();
                            for (var j = knobH; j < knobH*2; j++) {
                                for (var k = downX[i-c]; k < downX[i-c]+knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 255-bottomOut[downType[i-c]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            bottomOut[downType[i-c]].updatePixels();
                        } else {
                            //The one above us goes in, so we need to go out
                            othercount = 0;
                            topOut[downType[i-c]].loadPixels();
                            for (var j = 0; j < knobH; j++) {
                                for (var k = downX[i-c]; k < downX[i-c]+knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = topOut[downType[i-c]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            topOut[downType[i-c]].updatePixels();
                        }
                        //Bottom:
                        if (i >= (r-1)*c) {
                            goesDown[i] = false;
                            //It's a bottom piece. We're done here!
                        } else if (Math.random() < 0.5) {
                            //We're going to go in!
                            othercount = 0;
                            goesDown[i] = false;
                            var maxX = Math.round(knobW*5/2);
                            var minX = Math.round(knobW*3/2);
                            if (i % c != 0 && goesRight[i-1] && rightY[i-1] > 2*knobH) {
                                minX = knobW*2;
                            }
                            downX[i] = Math.round(p.random(minX,maxX));
                            downType[i] = Math.floor(p.random(topOut.length));
                            topOut[downType[i]].loadPixels();
                            for (var j = tempHeight-knobH*2; j < tempHeight-knobH; j++) {
                                for (var k = downX[i]; k < downX[i]+knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 255-topOut[downType[i]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            topOut[downType[i]].updatePixels();
                        } else {
                            //We're going to go out!
                            othercount = 0;
                            goesDown[i] = true;
                            downX[i] = Math.round(p.random(Math.round(knobW*3/2),Math.round(knobW*5/2)));
                            downType[i] = Math.floor(p.random(topOut.length));
                            bottomOut[downType[i]].loadPixels();
                            for (var j = tempHeight-knobH; j < tempHeight; j++) {
                                for (var k = downX[i]; k < downX[i]+knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = bottomOut[downType[i]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            bottomOut[downType[i]].updatePixels();
                        }
                        //Left:
                        if (i % c == 0) {
                            //It's a side piece. We're done here!
                        } else if (goesRight[i-1]) {
                            //The one to the left of us goes out, so we need to go in
                            othercount = 0;
                            rightOut[rightType[i-1]].loadPixels();
                            for (var j = rightY[i-1]; j < rightY[i-1]+knobH; j++) {
                                for (var k = knobW; k < knobW*2; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 255-rightOut[rightType[i-1]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            rightOut[rightType[i-1]].updatePixels();
                        } else {
                            //The one to the left of us goes in, so we need to go out
                            othercount = 0;
                            leftOut[rightType[i-1]].loadPixels();
                            for (var j = rightY[i-1]; j < rightY[i-1]+knobH; j++) {
                                for (var k = 0; k < knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = leftOut[rightType[i-1]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            leftOut[rightType[i-1]].updatePixels();
                        }
                        //Right:
                        if ((i+1) % c == 0) {
                            goesRight[i] = false;
                            //It's a side piece. We're done here!
                        } else if (Math.random() < 0.5) {
                            //We're going to go in!
                            othercount = 0;
                            goesRight[i] = false;
                            var maxY = Math.round(knobH*5/2);
                            var minY = Math.round(knobH*3/2);
                            if (i >= c && goesDown[i-c] && downX[i-c] > 2*knobW) {
                                minY = knobH*2;
                            }
                            if (i < (r-1)*c && !goesDown[i] && downX[i] > 2*knobW) {
                                maxY = knobH*2;
                            }
                            rightY[i] = Math.round(p.random(minY,maxY));
                            rightType[i] = Math.floor(p.random(rightOut.length));
                            leftOut[rightType[i]].loadPixels();
                            for (var j = rightY[i]; j < rightY[i]+knobH; j++) {
                                for (var k = tempWidth-knobW*2; k < tempWidth-knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 255-leftOut[rightType[i]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            leftOut[rightType[i]].updatePixels();
                        } else {
                            //We're going to go out!
                            othercount = 0;
                            goesRight[i] = true;
                            var maxY = Math.round(knobH*5/2);
                            var minY = Math.round(knobH*3/2);
                            if (i >= c && goesDown[i-c+1] && downX[i-c+1] < 2*knobW) {
                                minY = 2*knobH;
                            }
                            rightY[i] = Math.round(p.random(minY,maxY));
                            rightType[i] = Math.floor(p.random(rightOut.length));
                            rightOut[rightType[i]].loadPixels();
                            for (var j = rightY[i]; j < rightY[i]+knobH; j++) {
                                for (var k = tempWidth-knobW; k < tempWidth; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = rightOut[rightType[i]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            rightOut[rightType[i]].updatePixels();
                        }
                        pieceImages[i].updatePixels();
                    }
                } else {
                    goesDown = p.getItem("goesDown",goesDown);
                    downX = p.getItem("downX",downX);
                    downType = p.getItem("downType",downType);
                    goesRight = p.getItem("goesRight",goesRight);
                    rightY = p.getItem("rightY",rightY);
                    rightType = p.getItem("rightType",rightType);
                    
                    for (var i = 0; i < r*c; i++) {
                        pieceImages[i] = p.createImage(pieceImageWideW,pieceImageTallH);
                        pieceImages[i].copy(puzzleImage2,(i%c)*pieceW,Math.floor(i/c)*pieceH,pieceImageWideW,pieceImageTallH,0,0,pieceImageWideW,pieceImageTallH);
                        //Start with border invisible:
                        var tempWidth = pieceImages[i].width;
                        var tempHeight = pieceImages[i].height;
                        var othercount = 0;
                        pieceImages[i].loadPixels();
                        for (var j = 0; j < pieceImageTallH; j++) {
                            for (var k = 0; k < knobW; k++) {
                                pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 0;
                            }
                        }
                        for (var j = 0; j < pieceImageTallH; j++) {
                            for (var k = tempWidth-knobW; k < tempWidth; k++) {
                                pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 0;
                            }
                        }
                        for (var j = 0; j < knobH; j++) {
                            for (var k = knobW; k < tempWidth-knobW; k++) {
                                pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 0;
                            }
                        }
                        for (var j = tempHeight-knobH; j < tempHeight; j++) {
                            for (var k = knobW; k < tempWidth-knobW; k++) {
                                pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 0;
                            }
                        }
                        //Top:
                        if (i < c) {
                            //It's a top piece. We're done here!
                        } else if (goesDown[i-c]) {
                            //The one above us goes out, so we need to go in
                            othercount = 0;
                            bottomOut[downType[i-c]].loadPixels();
                            for (var j = knobH; j < knobH*2; j++) {
                                for (var k = downX[i-c]; k < downX[i-c]+knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 255-bottomOut[downType[i-c]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            bottomOut[downType[i-c]].updatePixels();
                        } else {
                            //The one above us goes in, so we need to go out
                            othercount = 0;
                            topOut[downType[i-c]].loadPixels();
                            for (var j = 0; j < knobH; j++) {
                                for (var k = downX[i-c]; k < downX[i-c]+knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = topOut[downType[i-c]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            topOut[downType[i-c]].updatePixels();
                        }
                        //Bottom:
                        if (i >= (r-1)*c) {
                            goesDown[i] = false;
                            //It's a bottom piece. We're done here!
                        } else if (!goesDown[i]) {
                            //We're going to go in!
                            othercount = 0;
                            topOut[downType[i]].loadPixels();
                            for (var j = tempHeight-knobH*2; j < tempHeight-knobH; j++) {
                                for (var k = downX[i]; k < downX[i]+knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 255-topOut[downType[i]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            topOut[downType[i]].updatePixels();
                        } else {
                            //We're going to go out!
                            othercount = 0;
                            goesDown[i] = true;
                            bottomOut[downType[i]].loadPixels();
                            for (var j = tempHeight-knobH; j < tempHeight; j++) {
                                for (var k = downX[i]; k < downX[i]+knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = bottomOut[downType[i]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            bottomOut[downType[i]].updatePixels();
                        }
                        //Left:
                        if (i % c == 0) {
                            //It's a side piece. We're done here!
                        } else if (goesRight[i-1]) {
                            //The one to the left of us goes out, so we need to go in
                            othercount = 0;
                            rightOut[rightType[i-1]].loadPixels();
                            for (var j = rightY[i-1]; j < rightY[i-1]+knobH; j++) {
                                for (var k = knobW; k < knobW*2; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 255-rightOut[rightType[i-1]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            rightOut[rightType[i-1]].updatePixels();
                        } else {
                            //The one to the left of us goes in, so we need to go out
                            othercount = 0;
                            leftOut[rightType[i-1]].loadPixels();
                            for (var j = rightY[i-1]; j < rightY[i-1]+knobH; j++) {
                                for (var k = 0; k < knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = leftOut[rightType[i-1]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            leftOut[rightType[i-1]].updatePixels();
                        }
                        //Right:
                        if ((i+1) % c == 0) {
                            goesRight[i] = false;
                            //It's a side piece. We're done here!
                        } else if (!goesRight[i]) {
                            //We're going to go in!
                            othercount = 0;
                            leftOut[rightType[i]].loadPixels();
                            for (var j = rightY[i]; j < rightY[i]+knobH; j++) {
                                for (var k = tempWidth-knobW*2; k < tempWidth-knobW; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = 255-leftOut[rightType[i]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            leftOut[rightType[i]].updatePixels();
                        } else {
                            //We're going to go out!
                            othercount = 0;
                            rightOut[rightType[i]].loadPixels();
                            for (var j = rightY[i]; j < rightY[i]+knobH; j++) {
                                for (var k = tempWidth-knobW; k < tempWidth; k++) {
                                    pieceImages[i].pixels[4*(j*tempWidth+k)+3] = rightOut[rightType[i]].pixels[othercount+3];
                                    othercount+=4;
                                }
                            }
                            rightOut[rightType[i]].updatePixels();
                        }
                        pieceImages[i].updatePixels();
                    }
                }
                
                
                for (var i = 0; i < r*c; i++) {
                    pieces[i] = newPiece(p.random(0,canvasWidth-pieceW),p.random(0,canvasHeight-pieceH),i);
                }
                
                if (loadingSaved) {
                    var pieceXs = p.getItem("pieceXs");
                    var pieceYs = p.getItem("pieceYs");
                    for (var i = 0; i < r*c; i++) {
                        pieces[i].setPosition(pieceXs[i],pieceYs[i]);
                    }
                    bgColor = p.getItem("bgColor");
                    setBGColor();
                }
                
                for (var i = 0; i < 400; i++) {
                    //console.log(canvasWidth);
                    confettiArray[i] = newConfettiPiece(myRandom(-canvasWidth/2,canvasWidth*3/2),
                    myRandom(-800,200),300+i*2,myRandom(20,40),myRandom(10,20),myRandom(0,255),myRandom(0,255),myRandom(0,255),myRandom(0.01,0.08));
                }
            };
            
            p.mouseReleased = function() {
                mouseIsReleased = true;
                mouseIsHeld = false;
                //console.log("done");
            }
            
            p.draw = function() {
                console.log("In the puzzle draw function");
                //p.background(2, 130, 194);
                p.background(bgColor);
                //p.fill(255);
                if (counter < beginningTime) {
                    for (var i = pieces.length-1; i >= 0; i--) {
                        pieces[i].drawIt();
                        pieces[i].beginningMoveIt();
                    }
                } else {
                    for (var i = pieces.length-1; i >= 0; i--) {
                        pieces[i].drawIt();
                    }
                    if (!showingGoal) {
                        foundOne = false;
                        foundGroup = false;
                        for (var i = 0; i < pieces.length; i++) {
                            pieces[i].checkMoving();
                        }
                        if (!foundOne) {
                            currentlyMoving = -1;
                            for (var i = 0; i < pieces.length; i++) {
                                pieces[i].moving = false;
                                pieces[i].movingTimer++;
                            }
                        }
                        if (!foundGroup) {
                            currentlyMovingGroup = -2;
                        }
                        //console.log(pieces[0].moving+" "+pieces[1].moving);
                        for (var i = 0; i < pieces.length; i++) {
                            pieces[i].moveIt();
                        }
                        for (var i = 0; i < pieces.length; i++) {
                            pieces[i].checkNeighbors();
                        }
                    }
                }
                if (won) {
                    //console.log("Yes!");
                    //p.text("Congratulations! You finished the puzzle!", canvasWidth/2,canvasHeight/2);
                    for (var i = 0; i < confettiArray.length; i++) {
                        confettiArray[i].moveIt();
                        confettiArray[i].rotate();
                        confettiArray[i].findPos();
                        confettiArray[i].drawIt();
                    }
                    if (counter < wonTime+1000) {
                        p.textSize(canvasWidth*0.05789);
                        //console.log(canvasWidth);
                        //console.log(p.mouseX,p.mouseY);
                        //Text will be 0.41606*canvasWidth wide
                        p.fill(255);
                        p.textAlign(p.CENTER,p.CENTER);
                        p.text("Congratulations!",0,0,canvasWidth,canvasHeight);
                    }
                }
                
                //console.log(mouseIsReleased);
                
                if (showingGoal) {
                    p.fill(200,200,200,120);
                    p.rect(0,0,canvasWidth,canvasHeight);
                    p.image(puzzleImage,showX,showY);
                    
                    if (movingShowImage && p.mouseX > 0 && p.mouseX < canvasWidth && p.mouseY > 0 && p.mouseY < canvasHeight) {
                        showX += p.mouseX-p.pmouseX;
                        showY += p.mouseY-p.pmouseY;
                    }
                    if (p.mouseIsPressed && p.mouseX > showX && p.mouseX < showX+puzzleImage.width && p.mouseY > showY && p.mouseY < showY+puzzleImage.height) {
                        movingShowImage = true;
                    }
                    
                    if (mouseIsReleased || p.pmouseX < showX || p.pmouseX > showX+puzzleImage.width || p.pmouseY < showY || p.pmouseY > showY+puzzleImage.height) {
                        movingShowImage = false;
                    }
                    
                    if (mouseIsReleased && (p.mouseX < showX || p.mouseX > showX+puzzleImage.width || p.mouseY < showY || p.mouseY > showY+puzzleImage.height)) {
                        showingGoal = false;
                        //console.log("hi");
                    }
                }
                
                showImage.update();
                showImage.drawIt();
                
                savePuzzle.update();
                savePuzzle.drawIt();
                
                if (showImage.pressed && currentlyMoving == -1) {
                    showingGoal = true;
                    showX = canvasWidth/2-puzzleImage.width/2;
                    showY = canvasHeight/2-puzzleImage.height/2;
                    //mouseIsReleased = false;
                }
                console.log(savePuzzle.pressed);
                if (savePuzzle.pressed && currentlyMoving == -1) {
                    if (typeof okayedCookie == 'undefined' || okayedCookie != "true") {
                        alert("Please accept the use of cookies to use this feature.");
                    } else {
                        p.storeItem("imageW",imageW);
                        p.storeItem("imageH",imageH);
                        p.storeItem("rows",r);
                        p.storeItem("columns",c);
                        try {
                            puzzleImage.loadPixels();
                            var testArray = [];
                            for (var i = 0; i < puzzleImage.pixels.length; i++) {
                                testArray.push(puzzleImage.pixels[i]);
                            }
                            p.storeItem("puzzleImagePixels",testArray);
                            imageTooLarge = false;
                            alert("Saved successfully! To load this puzzle, press load saved puzzle.")
                        }
                        catch (e) {
                            //console.log("nope. Not happening")
                            alert("Image too large to store. To load this puzzle, upload your image again, then press load saved puzzle.");
                            imageTooLarge = true;
                        }
                        p.storeItem("goesDown",goesDown);
                        p.storeItem("downX",downX);
                        p.storeItem("downType",downType);
                        p.storeItem("goesRight",goesRight);
                        p.storeItem("rightY",rightY);
                        p.storeItem("rightType",rightType);
                        p.storeItem("bgColor",bgColor);
                        var pieceXs = [];
                        var pieceYs = [];
                        for (var i = 0; i < pieces.length; i++) {
                            pieceXs.push(pieces[i].x);
                        }
                        for (var i = 0; i < pieces.length; i++) {
                            pieceYs.push(pieces[i].y);
                        }
                        p.storeItem("pieceXs",pieceXs);
                        p.storeItem("pieceYs",pieceYs);
                        setStored();
                        p.storeItem("imageTooLarge",imageTooLarge);
                        //mouseIsReleased = false;
                    }
                }
                
                if (onAButton) {
                    p.cursor(p.HAND);
                } else {
                    p.cursor(p.ARROW);
                }
                
                /*for (var i = 0; i < pieceImages.length; i++) {
                    p.image(pieceImages[i], 10+(i%c)*(pieceW+120),20+Math.floor(i/c)*(pieceH+120));
                }*/
                
                if (counter > 0 && settingUp && newOne) {//We are the newly made sketch, and we've already setup
                    settingUp = false;
                    newOne = false;
                } else if (counter > 0 && settingUp) {//We aren't new anymore, and we're in the middle of setting up, which means time to leave
                    settingUp = false;
                } else if (settingUp) {//We must be the new one, since the counter is 0. There might still be an old one out there, so we can't stop setting up yet
                    newOne = true;
                }
                
                if (counter > 0) {
                    newOne = false;
                }
                
                //console.log(showImage.pressed,showingGoal);
                
                counter++;
                //console.log(mouseIsHeld);
                onAButton = false;
                mouseIsReleased = false;
            };
        };
        myp5 = new p5(Sketch);
        madeAPuzzle = true;
    }
    const handleSizeInput = () => {
        var rowsInput = document.getElementById("inputRows");
        r = rowsInput.value;
        var columnsInput = document.getElementById("inputColumns");
        c = columnsInput.value;
    }
    const handleImageUpload = (e) => {
        var readImage = document.getElementById("toPuzzle").files[0];
	
        var reader = new FileReader();
        
        reader.onload = function(e) {
        //document.getElementById("display-image").src = e.target.result;
            //testImage = new Image();
            //testImage.src = e.target.result;
            document.getElementById("display-image").src = e.target.result;
            testingSource = document.getElementById("display-image").src;
            document.getElementById("display-image").style.display = 'none';
        }

        reader.readAsDataURL(readImage);
        document.getElementById("imgFileText").innerHTML = e.target.files[0].name;
    }
    const setUpPuzzle = () => {
        var rowsInput = document.getElementById("inputRows");
        r = rowsInput.value;
        var columnsInput = document.getElementById("inputColumns");
        c = columnsInput.value;
        
        var imageInput = document.getElementById("toPuzzle");
        if (imageInput && imageInput.value && r > 0 && r < 17 && c > 0 && c < 17) {
            settingUp = true;
            startSketch(false);
        }
        if (!imageInput.value) {
            alert("Please choose an image");
        } else if (r <= 0 || r >= 17) {
            alert("Please choose a valid number (between 1 and 16) for the number of rows");
        } else if (c <= 0 || c >= 17) {
            alert("Please choose a valid number (between 1 and 16) for the number of columns");
        }
    }
    const setStored = () => {
        savedPuzzle = "true";
        var d = new Date();
        d.setTime(d.getTime() + (90*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "savedPuzzle=true; expires="+expires/*Sat, 25 July 2020 09:55:00 PST*/+"; sameSite=Strict; path=/";
    }
    const loadPuzzle = () => {
        if (savedPuzzle == "true") {
            settingUp = true;
            //PuzzleCanvas.startSketch(true);
            startSketch(true);

        } else {
            alert("You don't have a saved puzzle to load");
        }
    }
    const setBGColor = () => {
        var colorInput = document.getElementById("bgColor");
	    colorInput.value = bgColor;
    }
    const handleResize = () => {
        windowWidth = window.innerWidth;
	    windowHeight = window.innerHeight;
    }
    const bgButton = () => {
        var colorInput = document.getElementById("bgColor");
	    bgColor = colorInput.value;
    }
    useEffect(() => {
        setUp()
        window.addEventListener('resize', handleResize);   
        return () => {
            if (madeAPuzzle) {
                myp5.remove();
            }
        }   
        }, [])
    const setUp = () => {
        var imageInput = document.getElementById("toPuzzle");
        if (imageInput && imageInput.value) {
            handleImageUpload();
        }
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        
        var rowsInput = document.getElementById("inputRows");
        rowsInput.defaultValue = 3;
        rowsInput.max = 16;
        rowsInput.min = 1;
        if (rowsInput && rowsInput.value) {
            r = rowsInput.value;
        }
        
        var columnsInput = document.getElementById("inputColumns");
        columnsInput.defaultValue = 4;
        columnsInput.max = 16;
        columnsInput.min = 1;
        if (columnsInput && columnsInput.value) {
            c = columnsInput.value;
        }
        
        var colorInput = document.getElementById("bgColor");
        colorInput.defaultValue = '#0282c2';
        bgColor = colorInput.value;
        
        var myCookie = document.cookie;
        var valueString = "";
        var importantPart = myCookie.indexOf("savedPuzzle");
        if (importantPart != -1) {
            importantPart += 12;//length of "savedPuzzle" + "="
            if (myCookie.indexOf(";",importantPart) != -1) {
                valueString = myCookie.substring(importantPart,myCookie.indexOf(";",importantPart));
            } else {
                valueString = myCookie.substring(importantPart,myCookie.length);
            }
            savedPuzzle = valueString;
        } else {
            savedPuzzle = "false";
        }
    }
    return (
        <div> 
            <div id="puzzleInputs">
                <div id="leftSide">
                    <p class="text puzzleInput">Rows of pieces: </p>
                    <TextField
                    class="puzzleInput"
                    type="number"
                    id="inputRows"
                    onChange={handleSizeInput}>
                    </TextField>
                    <p class="text puzzleInput">Columns of pieces: </p>
                    <TextField
                    class="puzzleInput"
                    type="number"
                    id="inputColumns"
                    onChange={handleSizeInput}>
                    </TextField>
                    <Button
                        variant="outlined"
                        component="label"
                        color="primary"
                        className="puzzleInput"
                        id="toPuzzleBtn"
                        >
                        Upload File
                        <input
                            type="file"
                            id="toPuzzle"
                            onChange={handleImageUpload}
                            hidden
                        />
                    </Button>
                    <p id="imgFileText" style={{display:'inline-block', paddingLeft:5, paddingRight:15}}>No file selected.</p>
                    <Button
                        variant="contained"
                        color="secondary"
                        className="puzzleInput"
                        onClick={setUpPuzzle}
                        >
                        Make a Puzzle!
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className="puzzleInput"
                        style={{marginLeft:10}}
                        onClick={loadPuzzle}
                        >
                        Load Saved Puzzle
                    </Button>
                </div>
                <div id="rightSide">
                    <p style={{display:'inline-block'}}>Change background color:</p>
                    <input type="color" class="puzzleInput" id="bgColor" onChange={bgButton} style={{display:'inline-block'}}/>
                </div>
            </div>
            <img id="display-image" src="" />
            <div id="canvas1" class="spacing"></div>
            <div className="myContainer">
                <div className="leftCol2">
                    <Instructions description="Enter the number of rows and columns (each must be between 1 and 16) you want your puzzle to have, then upload an image.
Press &quot;Make a Puzzle!&quot; to generate the puzzle. Click and drag to move the puzzle pieces.
If two puzzle pieces that go with each other are moved next to each other and aren't currently being dragged, they will snap into place.
Click &quot;Show Complete Image&quot; to see the photo you uploaded. You can drag it around. Click outside of the image to close it and resume working on the puzzle.
Click the &quot;Change Background Color&quot; button at any time to select a color for the &quot;puzzle mat.&quot;
While you're working on a puzzle, click &quot;Save Puzzle&quot; to save the image, piece shapes, piece positions, and background color to your cookies.
Then, you can click &quot;Load saved puzzle&quot; to restore the puzzle.
Some images are too large to store, in which case you will have to re-upload your image before clicking &quot;Load saved puzzle&quot;. You will be notified if this is the case when you save."/>
                </div>
                <div className="rightCol2">
                    <div className="myTextContainer colItem">
                        <Typography variant="h5" className="rightColHeader">
                        Changelog:
                        </Typography>
                        <ChangeLogEntry release="1.4.0 07/25/2020" description='Added saving the puzzle'/>
                        <ChangeLogEntry release="1.3.1 07/23/2020" description='Added change background color button'/>
                        <ChangeLogEntry release="1.3.0 06/19/2020" description='Added confetti and "Congratulations!'/>
                        <ChangeLogEntry release="1.2.3 06/19/2020" description="Puzzle pieces can't fully leave canvas. r & c inputted by user"/>
                        <ChangeLogEntry release="1.2.2 06/19/2020" description="Bug fix: inward knobs no longer occasionally overlap"/>
                        <ChangeLogEntry release="1.2.1 06/19/2020" description="Multiple possible knob shapes"/>
                        <ChangeLogEntry release="1.2.0 06/18/2020" description="Switched the way knobs are added. Now knobs have random position. Also got rid of more white lines."/>
                        <ChangeLogEntry release="1.1.1 06/17/2020" description="Pieces can know be picked up by their knobs and not by places where they have holes.
Got rid of the white band on the bottom of the puzzle (now crop image to be divisible by r and c)"/>
                        <ChangeLogEntry release="1.1.0 06/17/2020" description="Pieces are now &quot;puzzle piece&quot; shaped (rectangles with knobs going in and out that match up when the pieces click together)."/>
                        <ChangeLogEntry release="1.0.3 06/17/2020" description="Canvas size based on window"/>
                        <ChangeLogEntry release="1.0.2 06/17/2020" description="Puzzle pieces start in the center and scatter"/>
                        <ChangeLogEntry release="1.0.1 06/17/2020" description="Image automatically resized to keep proportions, but not have height greater than 80% of canvas height or width greater than 80% of canvas width."/>
                        <ChangeLogEntry release="1.0.0 06/17/2020" description="Image split into r*c movable pieces that &quot;click&quot; together. When you have finished the puzzle, celebratory text displays on the screen."/>
                        <ChangeLogEntry release="0.1.0 06/16/2020" description="Uploaded image gets split into r*c draggable, rectangular pieces."/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Puzzle;