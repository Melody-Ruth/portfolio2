import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import p5 from "p5";

class ArtStudioCanvas extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (p) => {
  
        p.setup = () => {
            p.angleMode(p.DEGREES);
            p.createCanvas(500,500);
            p.noStroke();
        }

        var CLOSE = p.CLOSE;//For p.beginShape/p.endShape
        var arc = function(x,y,w,h,start,stop) {
            p.arc(x,y,w,h,start,stop);
        };
        var color = function(r,g,b) {
            return p.color(r,g,b);
        };
        var push = function() {
            p.push();
        };
        var pop = function() {
            p.pop();
        };
        var rotate = function(degrees) {
            p.rotate(degrees);
        };
        var translate = function(xShift,yShift) {
            p.translate(xShift,yShift);
        };
        var random = function(low,high){
            return Math.random()*(high-low)+low;
        };
        var floor = function(number){
            return Math.floor(number);
        };
        var ceil = function(number){
            return Math.ceil(number);
        };
        var sq = function(number){
            return p.sq(number);
        };
        var sqrt = function(number){
            return p.sqrt(number);
        };
        var round = function(value) {
            return Math.round(value);
        };
        var sin = function(degrees) {
            return Math.sin(degrees);
        };
        var cos = function(degrees) {
            return Math.cos(degrees);
        };
        var textFont = function(font,size) {
            p.textFont(font,size);
        };
        var CENTER = p.CENTER;
        var button = function(x, y, w, h, color) {
            var Button = {//defines a new object: Button
            };
            Button.pressed = false;
            Button.x = x;
            Button.y = y;
            Button.w = w;
            Button.h = h;
            Button.color = color;
            Button.mousedOver = false;
            Button.drawIt = function() {
                if (!this.color) {
                    p.fill(139, 135, 255);
                    p.stroke(68, 0, 255);
                    p.strokeWeight(5);
                    p.rect(this.x, this.y, this.w, this.h, 20);
                    p.noStroke();
                } else {
                    p.fill(this.color);
                    p.rect(this.x, this.y, this.w, this.h, 10);
                }
            };
            Button.checkIfPressed = function() {
                if (mouseIsClicked && p.mouseX > this.x && p.mouseX < this.x + this.w && p.mouseY > this.y && p.mouseY < this.y + this.h) {
                    this.pressed = true;
                    this.mousedOver = true;
                } else if (p.mouseX > this.x && p.mouseX < this.x + this.w && p.mouseY > this.y && p.mouseY < this.y + this.h) {
                    this.mousedOver = true;
                    this.pressed = false;
                } else {
                    this.mousedOver = false;
                    this.pressed = false;
                }
            };
            return Button;
        };
        var HAND = p.HAND;
        var mouseX = p.mouseX;
        var mouseY = p.mouseY;
        var pmouseX = p.pmouseX;
        var pmouseY = p.pmouseY;
        var ARROW = p.ARROW;
        var mouseIsClicked = false;
        p.mouseReleased = function() {
            mouseIsClicked = true;
            mouseIsPressed = false;
        };
        var mouseIsPressed = false;
        p.mousePressed= function() {
            mouseIsPressed = true;
        };
        var keyIsReleased = false;
        p.keyReleased = function() {//When a key is released, make keyIsReleased true
            keyIsReleased = true;
            keyIsPressed = false;
        };
        var keyIsPressed = false;
        p.keyPressed = function(){
            keyIsPressed = true;
        };
        var keyCode = p.keyCode;
        var UP = p.UP;
        var DOWN = p.DOWN;
        var RIGHT = p.RIGHT;
        var LEFT = p.LEFT;
        //Interaction Guide:
        /*p.mouseReleased is called right after the mouse is released
        * p.mousePressed is called right after the mouse button is pushed down
        * Similarly,
        * p.keyReleased is called right after a key is released
        * p.keyPressed is called right after a key is pushed down
        * 
        * My Variables:
        * mouseIsClicked is true right after the mouse is released and false otherwise
        * mouseIsPressed is true the entire the mouse button is down
        * keyIsReleased is true right after a key is released and false otherwise
        * keyIsPressed is true the entire a key is down
        * 
        * Use p.key for letter keys and keyCode for arrow keys. When using p.key, compare it to the ascii code number of the key in question.
        * Make sure you use == instead of === in that case.
        */
        
        
        /*

        Ideas for Future Updates:
        *   pencil
        *   eraser
        *   mixing paint
        *   save paintings in a gallery
        *   colored pencils
        *   partialy transparent paint

        If you have an idea, comment in the tips and thanks!

        */

        /*
        Version History:

        1.2 Pencil and eraser
        *   a pencil
        *   right click to use the eraser side of the pencil

        1.1 A way to "paintbucket"
        *   right click to cover the whole canvas
        *   paintbrush on top of undo button

        1.0 Released!
        *   paintbrushes
        *   palatte
        *   canvas
        *   painting
        *   undo

        */
        var selectedPaintbrush = 0;
        var selectedColor = color(199, 46, 46);
        var paintingXs = [];
        var paintingYs = [];
        var paintingX2s = [];
        var paintingY2s = [];
        var paintingSs = [];
        var paintingCs = [];
        var paintingTs = [];
        var paintingLetGoPoints = [];
        var startingOut = 1;
        var developer = false;
        var erasing = false;
        var cp = false;//currently painting
        var startIndex = 0;
        
        var savedColors = [color(255,255,255),color(255,255,255),color(255,255,255),color(255,255,255)];
        var freeSlots = [1,1,1,1];//1=free, 0=taken
        var currentR = p.red(selectedColor);
        //currentR = p.p.red(selectedColor);
        var currentG = p.green(selectedColor);
        var currentB = p.blue(selectedColor);
        var rSlider = currentR*0.6667+115;
        var gSlider = currentG*0.6667+115;
        var bSlider = currentB*0.6667+115;
        var sliding = false;
        var saved = false;
        var savedColorOpen = false;
        var colorPickerOpen = false;
        var transparency = 255;

        var myFont = "MV Boli";
        
        var drawSave = function(x,y,s,bc) {
            push();
            p.translate(x,y);
            //p.fill(193, 200, 212);
            p.fill(215, 215, 215);
            p.rect(0,0,84*s,100*s,10*s);
            //p.fill(216, 223, 235);
            p.fill(229,229,229);
            //p.stroke(140, 150, 168);
            p.stroke(143,143,143);
            p.strokeWeight(4*s);
            p.rect(26*s,-4*s,32*s,26*s,6*s);
            p.line(50*s,6*s,50*s,14*s);
            p.rect(16*s,52*s,51*s,54*s,8*s);
            p.line(24*s,63*s,60*s,63*s);
            p.line(24*s,74*s,60*s,74*s);
            p.line(24*s,87*s,60*s,87*s);
            p.noStroke();
            p.fill(bc);
            p.triangle(65*s,0,84*s,19*s,84*s,0*s);
            p.rect(0,-8*s,84*s,8*s);
            p.rect(0,100*s,84*s,12*s);
            pop();
        };
        
        var drawTrash = function(x,y,s) {
            push();
            p.translate(x,y);
            p.fill(70,70,70);
            p.quad(0,0,80*s,0,70*s,90*s,10*s,90*s);
            p.arc(40*s,0,95*s,40*s,180,360);
            p.stroke(70,70,70);
            p.noFill();
            p.strokeWeight(5*s);
            p.ellipse(40*s,-20*s,17*s,12*s);
            p.stroke(30,30,30);
            p.line(12*s,10*s,18*s,70*s);
            p.line(68*s,10*s,62*s,70*s);
            p.line(28*s,10*s,32*s,71*s);
            p.line(52*s,10*s,48*s,71*s);
            p.noStroke();
            pop();
        };
        
        var drawPaintTube = function(x,y,s) {
            push();
            p.translate(x,y);
            p.fill(235,235,235);
            p.quad(0,0,70*s,0,100*s,200*s,-30*s,200*s);
            p.rect(-30*s,200*s,130*s,20*s);
            p.ellipse(35*s,0,70*s,25*s);
            p.fill(20,20,20);
            p.rect(20*s,-20*s,30*s,9*s);
            p.rect(10*s,-32*s,50*s,14*s);
            p.fill(80,40,255);
            p.quad(-5*s,30*s,75*s,30*s,84*s,90*s,-14*s,90*s);
            pop();
        }
        
        var drawColorPicker = function(x,y,s) {
            push();
            p.translate(x,y);
            p.fill(255,255,255);
            p.stroke(190,190,190);
            p.strokeWeight(3*s);
            p.rect(0,0,320*s,160*s);
            p.noStroke();
            
            //Preview
            p.fill(currentR,currentG,currentB);
            p.rect(10*s,10*s,90*s,125*s);
            p.fill(100,100,100);
            p.textSize(15*s);
            p.text("Current Color", 9.5*s,152*s);
            
            //Sliders
            p.stroke(190,190,190);
            p.strokeWeight(3*s);
            //r slider
            p.line(115*s,12*s,115*s,30*s);
            p.line(285*s,12*s,285*s,30*s);
            p.line(115*s,21*s,285*s,21*s);
            //g slider
            p.line(115*s,47*s,115*s,65*s);
            p.line(285*s,47*s,285*s,65*s);
            p.line(115*s,56*s,285*s,56*s);
            //b slider
            p.line(115*s,82*s,115*s,100*s);
            p.line(285*s,82*s,285*s,100*s);
            p.line(115*s,91*s,285*s,91*s);
            p.noStroke();
            
            
            p.fill(100,100,100);
            //r slider (cont)
            p.rect((rSlider-4)*s,11*s,8*s,20*s);
            //g slider (cont)
            p.rect((gSlider-4)*s,46*s,8*s,20*s);
            //b slider (cont)
            p.rect((bSlider-4)*s,81*s,8*s,20*s);
            //slider interaction
            if (sliding && startingOut === 6) {
                startingOut++;
            }
            if (mouseIsPressed && !sliding && p.mouseX > (rSlider-4)*s+x && p.mouseX < (rSlider+4)*s+x && p.mouseY > 11*s+y && p.mouseY < 31*s+y) {
                sliding = "r";
                savedColorOpen = false;
            }
            if (sliding === "r") {
                if (p.mouseX > 115*s+x && p.mouseX < 285*s+x && p.mouseY > y && p.mouseY < 47*s+y) {
                    //println("Sliding red!")
                    rSlider = (p.mouseX-x)/s;
                    currentR = rSlider*1.5-172.5;
                } else {
                    sliding = false;
                }
            }
            if (mouseIsPressed && !sliding && p.mouseX > (gSlider-4)*s+x && p.mouseX < (gSlider+4)*s+x && p.mouseY > 46*s+y && p.mouseY < 66*s+y) {
                sliding = "g";
                savedColorOpen = false;
            }
            if (sliding === "g") {
                if (p.mouseX > 115*s+x && p.mouseX < 285*s+x && p.mouseY > 30*s+y && p.mouseY < 82*s+y) {
                    //println("Sliding green!")
                    gSlider = (p.mouseX-x)/s;
                    currentG = gSlider*1.5-172.5;
                } else {
                    sliding = false;
                }
            }
            if (mouseIsPressed && !sliding && p.mouseX > (bSlider-4)*s+x && p.mouseX < (bSlider+4)*s+x && p.mouseY > 81*s+y && p.mouseY < 101*s+y) {
                sliding = "b";
                savedColorOpen = false;
            }
            if (sliding === "b") {
                if (p.mouseX > 115*s+x && p.mouseX < 285*s+x && p.mouseY > 65*s+y && p.mouseY < 110*s+y) {
                    //println("Sliding blue!")
                    bSlider = (p.mouseX-x)/s;
                    currentB = bSlider*1.5-172.5;
                } else {
                    sliding = false;
                }
            }
            if (mouseIsClicked) {
                sliding = false;
            }
            p.fill(190,190,190);
            p.textSize(17*s);
            p.text("r",293*s,26*s);
            p.text("g",293*s,60*s);
            p.text("b",293*s,97*s);
            
            //Saved Colors
            p.stroke(190,190,190);
            p.strokeWeight(3*s);
            for (var i = 0; i < savedColors.length; i++) {
                p.fill(savedColors[i]);
                p.rect((115+35*i)*s,116*s,28*s,28*s);
                if (mouseIsPressed && p.mouseX > (115+35*i)*s+x && p.mouseX < (143+35*i)*s+x && p.mouseY > 116*s+y && p.mouseY < 144*s+y) {
                    savedColorOpen = i;
                    currentR = p.red(savedColors[i]);
                    currentG = p.green(savedColors[i]);
                    currentB = p.blue(savedColors[i]);
                    rSlider = currentR*0.6667+115;
                    gSlider = currentG*0.6667+115;
                    bSlider = currentB*0.6667+115;
                }
            }
            p.noStroke();
            //save
            drawSave(256*s,115*s,0.3*s,color(255,255,255));
            if (mouseIsClicked && p.mouseX > 252*s+x && p.mouseX < 283*s+x && p.mouseY > 115*s+y && p.mouseY < 148*s+y) {
                saved = false;
                var i = 0;
                while(!saved && i < freeSlots.length) {
                    if (freeSlots[i] === 1) {
                        saved = true;
                        freeSlots[i] = 0;
                        savedColors[i] = color(currentR,currentG,currentB);
                        if (startingOut === 7) {
                            startingOut++;
                        }
                    }
                    i++;
                }
            }
            //trash
            drawTrash(290*s,120*s,0.3*s);
            if (mouseIsClicked && savedColorOpen !== false && p.mouseX > 287*s+x && p.mouseX < 320*s+x && p.mouseY > 110*s+y && p.mouseY < 144*s+y) {
                savedColors[savedColorOpen] = color(255,255,255);
                freeSlots[savedColorOpen] = 1;
                savedColorOpen = false;
                if (startingOut === 8) {
                    startingOut++;
                }
            }
            //x button
            p.fill(240,20,20);
            p.rect(304*s,-2*s,18*s,18*s);
            p.stroke(150,10,10);
            p.strokeWeight(2*s);
            p.line(308*s,2*s,318*s,12*s);
            p.line(308*s,12*s,318*s,2*s);
            p.noStroke();
            if (mouseIsClicked && p.mouseX > 304*s+x && p.mouseX < 322*s+x && p.mouseY > -2*s+y && p.mouseY < 16*s+y) {
                selectedColor = color(currentR,currentG,currentB);
                selectedPaintbrush = 0;
                colorPickerOpen = false;
            }
            pop();
        };
        

        var drawPaintbrush1 = function(x, y, s) {
            p.fill(71, 134, 237);
            p.quad((x - 20) * s, y * s, (x + 20) * s, y * s, (x + 16) * s, (y + 235) * s, (x - 14) * s, (y + 235) * s);
            p.fill(168, 168, 168);
            p.rect((x - 20) * s, (y - 55) * s, 40 * s, 55 * s);
            p.fill(184, 119, 55);
            p.quad((x - 20) * s, (y - 55) * s, (x - 22) * s, (y - 95) * s, (x + 22) * s, (y - 95) * s, (x + 20) * s, (y - 55) * s); 
            if (selectedPaintbrush === 1) {
                p.fill(selectedColor,transparency);
                p.quad((x - 20) * s, (y - 80) * s, (x - 22) * s, (y - 95) * s, (x + 22) * s, (y - 95) * s, (x + 20) * s, (y - 80) * s);
            }
        };

        var drawPaintbrush2 = function(x, y, s) {
            p.fill(71, 134, 237);
            p.quad((x - 13) * s, y * s, (x + 13) * s, y * s, (x + 7) * s, (y + 235) * s, (x - 7) * s, (y + 235) * s);
            p.fill(168, 168, 168);
            p.rect((x - 13) * s, (y - 55) * s, 26 * s, 55 * s);
            p.fill(184, 119, 55);
            p.quad((x - 13) * s, (y - 55) * s, (x - 16) * s, (y - 85) * s, (x + 16) * s, (y - 85) * s, (x + 13) * s, (y - 55) * s);
            if (selectedPaintbrush === 2) {
                p.fill(selectedColor,transparency);
                p.quad((x - 14) * s, (y - 75) * s, (x - 16) * s, (y - 85) * s, (x + 16) * s, (y - 85) * s, (x + 14) * s, (y - 75) * s);
            }
        };

        var drawPaintbrush3 = function(x, y, s) {
            p.fill(71, 134, 237);
            p.quad((x - 10) * s, y * s, (x + 10) * s, y * s, (x + 4) * s, (y + 235) * s, (x - 6) * s, (y + 235) * s);
            p.fill(168, 168, 168);
            p.rect((x - 10) * s, (y - 55) * s, 20 * s, 55 * s);
            p.fill(184, 119, 55);
            p.quad((x - 10) * s, (y - 55) * s, (x - 11) * s, (y - 75) * s, (x + 11) * s, (y - 75) * s, (x + 10) * s, (y - 55) * s);
            if (selectedPaintbrush === 3) {
                p.fill(selectedColor,transparency);
                p.quad((x - 10) * s, (y - 70) * s, (x - 11) * s, (y - 75) * s, (x + 11) * s, (y - 75) * s, (x + 10) * s, (y - 70) * s);
            }
        };

        var drawPaintbrush4 = function(x, y, s) {
            p.fill(71, 134, 237);
            p.quad((x - 8) * s, y * s, (x + 8) * s, y * s, (x + 4) * s, (y + 235) * s, (x - 4) * s, (y + 235) * s);
            p.fill(168, 168, 168);
            p.rect((x - 8) * s, (y - 55) * s, 16 * s, 55 * s);
            p.fill(184, 119, 55);
            p.quad((x - 8) * s, (y - 55) * s, (x - 7) * s, (y - 75) * s, (x + 7) * s, (y - 75) * s, (x + 8) * s, (y - 55) * s);
            if (selectedPaintbrush === 4) {
                p.fill(selectedColor,transparency);
                p.quad((x - 8) * s, (y - 70) * s, (x - 7) * s, (y - 75) * s, (x + 7) * s, (y - 75) * s, (x + 8) * s, (y - 70) * s);
            }
        };

        var drawPaintbrush5 = function(x, y, s) {
            p.fill(71, 134, 237);
            p.quad((x - 6) * s, y * s, (x + 6) * s, y * s, (x + 3) * s, (y + 235) * s, (x - 3) * s, (y + 235) * s);
            p.fill(168, 168, 168);
            p.rect((x - 6) * s, (y - 55) * s, 12 * s, 55 * s);
            p.fill(184, 119, 55);
            p.quad((x - 6) * s, (y - 55) * s, (x - 4) * s, (y - 75) * s, (x + 4) * s, (y - 75) * s, (x + 6) * s, (y - 55) * s);
            if (selectedPaintbrush === 5) {
                p.fill(selectedColor,transparency);
                p.quad((x - 5) * s, (y - 70) * s, (x - 4) * s, (y - 75) * s, (x + 4) * s, (y - 75) * s, (x + 5) * s, (y - 70) * s);
            }
        };

        var drawPencil = function(x, y, s) {
            p.fill(227, 211, 174);
            p.triangle((x - 15) * s, (y + 52) * s, x * s, y * s, (x + 15) * s, (y + 52) * s); 
            p.fill(89, 89, 89);
            p.triangle((x - 5) * s, (y + 18) * s, x * s, y * s, (x + 5) * s, (y + 18) * s); 
            p.fill(255, 225, 0);
            p.rect((x - 15) * s, (y + 50) * s, 30 * s, 212 * s);
            p.triangle((x - 15) * s, (y + 51) * s, (x - 7) * s, (y + 42) * s, (x + 6) * s, (y + 51) * s);
            p.triangle((x - 2) * s, (y + 51) * s, (x + 8) * s, (y + 42) * s, (x + 11) * s, (y + 51) * s);
            p.fill(186, 186, 186);
            p.rect((x - 15) * s, (y + 261) * s, 30 * s, 25 * s);
            p.fill(255, 171, 171);
            p.rect((x - 15) *s, (y + 286) * s, 30 * s, 30 * s);
        };
  
        p.draw = () => {
            keyCode = p.keyCode;
            mouseX = p.mouseX;
            mouseY = p.mouseY;
            pmouseX = p.pmouseX;
            pmouseY = p.pmouseY;
            
            //Put code here
            p.background(255, 200, 176);
            p.noStroke();
            //table
            p.fill(199, 138, 77);
            p.quad(0, 255, 500, 280, 500, 500, 0, 500);
            //canvas
            p.fill(247, 247, 247);
            p.quad(210, 60, 220, 50, 455, 70, 445, 80);
            p.fill(207, 207, 207);
            p.quad(455, 70, 445, 80, 435, 375, 445, 365);
            p.fill(240, 240, 240);
            p.quad(210, 60, 445, 80, 435, 375, 200, 345);
            //cup
            p.fill(34, 104, 179);
            p.ellipse(95, 199, 130, 70);
            //paintbrushes
            if (selectedPaintbrush !== 1) {
                drawPaintbrush1(82, 297, 0.7);
            }	    
            if (selectedPaintbrush !== 2) {
                drawPaintbrush2(122, 301, 0.7);
            }	    
            if (selectedPaintbrush !== 3) {
                drawPaintbrush3(153, 280, 0.7);
            }	    
            if (selectedPaintbrush !== 4) {
                drawPaintbrush4(181, 291, 0.7);
            }
            if (selectedPaintbrush !== 5) {
                drawPaintbrush5(203, 297, 0.7);
            }
            if (!colorPickerOpen) {
                if (mouseIsClicked && mouseX > 42 && mouseX < 70 && mouseY > 140 && mouseY < 220) {
                    selectedPaintbrush = 1;
                }
                if (mouseIsClicked && mouseX > 70 && mouseX < 97 && mouseY > 152 && mouseY < 220) {
                    selectedPaintbrush = 2;
                }
                if (mouseIsClicked && mouseX > 100 && mouseX < 115 && mouseY > 152 && mouseY < 220) {
                    selectedPaintbrush = 3;
                }
                if (mouseIsClicked && mouseX > 120 && mouseX < 130 && mouseY > 152 && mouseY < 220) {
                    selectedPaintbrush = 4;
                }
                if (mouseIsClicked && mouseX > 135 && mouseX < 145 && mouseY > 152 && mouseY < 220) {
                    selectedPaintbrush = 5;
                }
                if (mouseIsClicked && mouseX > 40 && mouseX < 160 && mouseY > 220 && mouseY < 390) {
                    selectedPaintbrush = 0;
                }
                if (mouseIsClicked && mouseX > 160 && mouseX < 350 && mouseY > 370 && mouseY < 395) {
                    selectedPaintbrush = 6;
                }
                if (mouseIsClicked && mouseY < -.628*mouseX + 510.95 && mouseY > -.292*mouseX + 447.75 && mouseY < 2.286*mouseX + 432.286 && mouseY > 2*mouseX + 214) {
                    colorPickerOpen = true;
                    currentR = p.red(selectedColor);
                    currentG = p.p.green(selectedColor);
                    currentB = p.blue(selectedColor);
                    rSlider = currentR*0.6667+115;
                    gSlider = currentG*0.6667+115;
                    bSlider = currentB*0.6667+115;
                    sliding = false;
                    saved = false;
                    savedColorOpen = false;
                    selectedPaintbrush = 0;
                }
                if (mouseIsClicked && sq(mouseX-218)/5625 + sq(mouseY-440)/1600 <= 1 && selectedPaintbrush < 6) {
                    transparency -= 51;
                    if (transparency < 0) {
                        transparency = 0;
                    }
                    //println("Watered down");
                }
                if (mouseIsClicked && mouseY > 460 && mouseY < 500 && mouseX < 250 && mouseY > -.667*mouseX + 553.33) {
                    transparency = 255;
                }
            }
            /*if (selectedPaintbrush !== 7 && developer) {
                push();
                rotate(-2);
                drawEraser(307, 701, 0.6);
                pop();
            }*/
            //more cup
            /*p.stroke(70, 150, 212);
            p.strokeWeight(30);
            p.noFill();
            p.arc(95, 204, 161, 70, 0, 180);
            p.noStroke();
            p.fill(70, 150, 212);
            p.quad(32, 240, 50, 400, 140, 400, 160, 240);
            p.fill(52, 135, 199);
            p.p.triangle(140, 400, 149, 315, 110, 400);
            p.fill(73, 157, 222);
            p.ellipse(62, 262, 22, 30);*/
            p.stroke(70, 150, 212);
            p.strokeWeight(30);
            p.noFill();
            p.arc(95, 204, 161, 70, 0, 180);
            p.noStroke();
            p.fill(70, 150, 212);
            p.quad(32, 240, 50, 400, 140, 400, 160, 240);
            p.arc(95,400,90,40,0,180);
            p.fill(52, 135, 199);
            p.triangle(140, 400, 154, 280, 95, 400);
            p.arc(95,400,90,40,0,103);
            p.fill(73, 157, 222);
            p.ellipse(62, 262, 22, 30);
            //wall
            p.fill(255, 200, 176);
            p.quad(160, 192, 202, 179, 175, 265, 157, 264);
            p.quad(0, 185, 27, 179, 34, 257, 0, 220);
            if (mouseIsClicked && mouseX > 312 && mouseX < 342 && mouseY > 464 && mouseY < 490 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(199, 46, 46);
            }
            if (mouseIsClicked && mouseX > 323 && mouseX < 353 && mouseY > 425 && mouseY < 451 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(240, 111, 19);
            }
            if (mouseIsClicked && mouseX > 365 && mouseX < 395 && mouseY > 406 && mouseY < 438 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(240, 207, 19);
            }
            if (mouseIsClicked && mouseX > 415 && mouseX < 435 && mouseY > 403 && mouseY < 435 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(64, 161, 11);
            }
            if (mouseIsClicked && mouseX > 456 && mouseX < 476 && mouseY > 416 && mouseY < 448 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(76, 121, 224);
            }
            if (mouseIsClicked && mouseX > 463 && mouseX < 483 && mouseY > 451 && mouseY < 483 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(156, 77, 240);
            }	   
            if (mouseIsClicked && mouseX > 428 && mouseX < 458 && mouseY > 468 && mouseY < 495 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(242, 123, 197);
            }	    
            if (mouseIsClicked && mouseX > 385 && mouseX < 415 && mouseY > 470 && mouseY < 496 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(125, 64, 21);
            }	    
            if (mouseIsClicked && mouseX > 406 && mouseX < 436 && mouseY > 438 && mouseY < 464 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(20, 20, 20);
            }	    
            if (mouseIsClicked && mouseX > 356 && mouseX < 386 && mouseY > 443 && mouseY < 469 && selectedPaintbrush < 6 && selectedPaintbrush) {
                selectedColor = color(255, 255, 255);
            }	
            if (startingOut === 1) {
                p.fill(0, 0, 0);
                p.textFont(myFont, 17);
                p.text("Click on the brushes\n   to use them", 13, 44);
                if (selectedPaintbrush && selectedPaintbrush < 6) {
                    startingOut++;
                }
            } else if (startingOut === 2) {
                p.fill(0, 0, 0);
                p.textFont(myFont, 17);
                p.text("Use the palette\nto change colors", 23, 84);//138, 450);
                if (selectedColor !== color(199, 46, 46)) {
                    startingOut++;
                }
            } else if (startingOut === 3) {
                p.fill(0, 0, 0);
                p.textFont(myFont, 17);
                p.text("Right click to paint \nthe entire canvas", 23, 84);//90, 433);
                if (mouseIsClicked && p.mouseButton === RIGHT) {
                    startingOut++;
                }
            } else if (startingOut === 4) {
                p.fill(0, 0, 0);
                p.textFont(myFont, 17);
                p.text("Click on the pencil \n  to pick it up. \nRight click to use \n   the eraser", 11,34);//90, 433);
                if (mouseIsClicked && p.mouseButton === RIGHT && selectedPaintbrush === 6) {
                    startingOut++;
                }
            } else if (startingOut === 5) {
                p.fill(0, 0, 0);
                p.textFont(myFont, 17);
                p.text("Click the tube of \npaint to get more \n     colors.", 23, 54);//0, 433);
                if (colorPickerOpen) {
                    startingOut++;
                }
            } else if (startingOut === 9) {
                p.fill(0, 0, 0);
                p.textFont(myFont, 13);
                p.text("Click the bowl of water\nto reduce the opacity \n    of the paint.\nClick the paper towel\nto reset to fully opaque.", 13, 22);//0, 433);
                if (transparency < 255) {
                    startingOut++;
                }
            }
            startIndex = 0;
            p.noFill();
            if (paintingXs.length > 0) {
                //console.log(paintingLetGoPoints);
                for (var i = 0; i < paintingLetGoPoints.length; i++) {
                    if (paintingXs[startIndex] !== "background") {
                        p.noFill();
                        p.stroke(p.red(paintingCs[startIndex]),p.green(paintingCs[startIndex]),p.blue(paintingCs[startIndex]),paintingTs[startIndex]);
                        p.strokeWeight(paintingSs[startIndex]);
                        p.beginShape();
                        p.curveVertex(paintingXs[startIndex],paintingYs[startIndex]);
                        for (var j = startIndex; j <= paintingLetGoPoints[i]; j++) {
                            p.curveVertex(paintingXs[j],paintingYs[j]);
                        }
                        p.curveVertex(paintingXs[paintingLetGoPoints[i]],paintingYs[paintingLetGoPoints[i]]);
                        p.endShape();
                        startIndex = paintingLetGoPoints[i]+1;
                    } else {
                        p.noStroke();
                        p.fill(p.red(paintingCs[startIndex]),p.green(paintingCs[startIndex]),p.blue(paintingCs[startIndex]),paintingTs[startIndex]);
                        p.quad(210, 60, 445, 80, 435, 375, 200, 345);
                        startIndex++;
                        p.noFill();
                    }
                }
                if (startIndex < paintingCs.length) {
                   // p.print(startIndex + ", " + paintingCs.length);
                    p.stroke(p.red(paintingCs[startIndex]),p.green(paintingCs[startIndex]),p.blue(paintingCs[startIndex]),paintingTs[startIndex]);
                    p.strokeWeight(paintingSs[startIndex]);
                    p.beginShape();
                    p.curveVertex(paintingXs[startIndex],paintingYs[startIndex]);
                    for (var i = startIndex; i < paintingXs.length; i++) {
                        p.curveVertex(paintingXs[i],paintingYs[i]);
                    }
                    p.curveVertex(paintingXs[paintingXs.length-1],paintingYs[paintingXs.length-1]);
                    p.endShape();
                }
                p.noStroke();
            }
            /*for (var i = 0; i < paintingXs.length; i++) {
                if (paintingXs[i] !== "background") {
                    p.stroke(paintingCs[i],paintingTs[i]);
                    p.strokeWeight(paintingSs[i]);
                    p.line(paintingX2s[i], paintingY2s[i], paintingXs[i], paintingYs[i]);
                    p.noStroke();
                } else {
                    p.fill(paintingCs[i],paintingTs[i]);
                    p.quad(210, 60, 445, 80, 435, 375, 200, 345);
                }
            }*/
            if (!colorPickerOpen && mouseIsPressed && mouseY < -29.5*mouseX + 13207.5 && mouseY > -28.5*mouseX + 6045 && mouseY > 0.0851*mouseX + 42.1 && mouseY < 0.128*mouseX + 319.468 && pmouseY < -29.5*pmouseX + 13207.5 && pmouseY > -28.5*pmouseX + 6045 && pmouseY > 0.0851*pmouseX + 42.1 && pmouseY < 0.128*pmouseX + 319.468 && p.mouseButton === RIGHT && selectedPaintbrush === 6) {
                erasing = true;
                //paintingX2s.push(mouseX);
                //paintingY2s.push(mouseY);
                paintingXs.push(pmouseX);
                paintingYs.push(pmouseY);
                paintingCs.push(color(240, 240, 240));
                p.print("hi1");
                paintingSs.push(21);
            }
            p.fill(199, 138, 77);
            p.quad(200,345,435,375,460,410,180,385);
            p.quad(180,385,200,345,204,266,180,265);
            p.quad(460,410,435,376,443,279,470,280);
            p.fill(255, 200, 176);
            p.quad(204,266,180,265,180,0,212,0);
            p.quad(210,59,455,79,455,0,210,0);
            p.quad(443,279,470,280,470,0,459,0);
            p.fill(255,0,0);
        //canvas
            p.fill(247, 247, 247);
            p.quad(210, 60, 220, 50, 455, 70, 445, 80);
            p.fill(207, 207, 207);
            p.quad(455, 70, 445, 80, 435, 375, 445, 365);
        //palette
            p.fill(230, 187, 138);
            p.ellipse(410, 469, 250, 150);
            p.fill(199, 46, 46);//red
            p.ellipse(327, 477, 30, 26);
            p.ellipse(309, 477, 12, 10);
            p.ellipse(339, 464, 14, 14);
            p.fill(240, 111, 19);//orange
            p.ellipse(338, 438, 30, 26);
            p.ellipse(322, 443, 12, 10);
            p.ellipse(339, 425, 14, 14);
            p.fill(240, 207, 19);//yellow
            p.ellipse(380, 419, 30, 26);
            p.ellipse(368, 428, 12, 10);
            p.ellipse(385, 409, 14, 14);
            p.fill(64, 161, 11);//green
            p.ellipse(430, 416, 30, 26);
            p.ellipse(425, 428, 12, 10);
            p.ellipse(441, 410, 14, 14);
            p.fill(76, 121, 224);//blue
            p.ellipse(471, 429, 30, 26);
            p.ellipse(464, 441, 12, 10);
            p.ellipse(462, 437, 14, 14);
            p.fill(156, 77, 240);//purple
            p.ellipse(478, 464, 30, 26);
            p.ellipse(488, 477, 12, 10);
            p.ellipse(489, 455, 14, 14);
            p.fill(242, 123, 197);//pink
            p.ellipse(443, 481, 30, 26);
            p.ellipse(457, 477, 12, 10);
            p.ellipse(445, 470, 14, 14);
            p.fill(125, 64, 21);//brown
            p.ellipse(400, 483, 30, 26);
            p.ellipse(386, 477, 12, 10);
            p.ellipse(385, 485, 14, 14);
            p.fill(20, 20, 20);//black
            p.ellipse(421, 451, 30, 26);
            p.ellipse(433, 458, 12, 10);
            p.ellipse(434, 447, 14, 14);
            p.fill(255, 255, 255);//white
            p.ellipse(371, 456, 30, 26);
            p.ellipse(357, 463, 12, 10);
            p.ellipse(381, 447, 14, 14);
            p.fill(255, 156, 194);
            p.stroke(255, 102, 161);
            p.strokeWeight(8);
            p.rect(415, 14, 70, 40, 5);
            p.fill(255, 102, 161);
            p.noStroke();
            p.textFont(myFont, 20);
            p.text("Undo", 428, 41);
            push();
            translate(90,420);
            rotate(65);
            drawPaintTube(0,0,0.4)
            pop();
            //paper towel
            p.fill(230,230,225);
            p.quad(80,500,250,500,250,460,140,460);
            //bowl of water
            p.fill(70, 150, 212);
            p.arc(218,425,140,120,0,180);
            p.fill(52, 135, 199);
            p.arc(218,425,140,120,0,103);
            p.fill(34, 104, 179);
            p.ellipse(218,425,140,50);
            p.fill(156, 196, 240);
            p.arc(218,425,140,50,15,165);
            p.ellipse(218,435,100,30);
            push();
            translate(266,435);
            rotate(20);
            p.ellipse(0,0,20,10);
            pop();
            push();
            translate(170,435);
            rotate(-20);
            p.ellipse(0,0,20,10);
            pop();
            if (colorPickerOpen) {
                p.fill(180,180,180,150);
                p.rect(0,0,500,500);
                p.cursor(ARROW);
                drawColorPicker(55,60,1.2);
                if (startingOut === 6) {
                    p.fill(0, 0, 0);
                    p.textFont(myFont, 17);
                    p.text("Use the sliders to control the red, green,\n      and blue values of the color.", 68, 354);//0, 433);
                } else if (startingOut === 7) {
                    p.fill(0, 0, 0);
                    p.textFont(myFont, 17);
                    p.text("   To save a color in one of the four slots,\n             press the save icon.\nClick on the boxes to retrieve your saved colors.", 48, 354);//0, 433);
                } else if (startingOut === 8) {
                    p.fill(0, 0, 0);
                    p.textFont(myFont, 17);
                    p.text("     If you run out of room for new colors,\n   you can delete a saved color by clicking on\n			      its box and then the trash icon.", 52, 354);//0, 433);
                }
            } else {
                if (selectedPaintbrush !== 6) {
                    push();
                    rotate(-83);
                    drawPencil(-640, 364, 0.55);
                    pop();
                }
                if (selectedPaintbrush === 1) {
                    push();
                    translate(mouseX, mouseY);
                    rotate(-95);
                    drawPaintbrush1(0, 90, 0.7);
                    pop();
                    p.cursor("none");
                } else if (selectedPaintbrush === 2) {
                    push();
                    translate(mouseX, mouseY);
                    rotate(-95);
                    drawPaintbrush2(0, 80, 0.7);
                    pop();
                    p.cursor("none");
                } else if (selectedPaintbrush === 3) {
                    push();
                    translate(mouseX, mouseY);
                    rotate(-95);
                    drawPaintbrush3(0, 70, 0.7);
                    pop();
                    p.cursor("none");
                } else if (selectedPaintbrush === 4) {
                    push();
                    translate(mouseX, mouseY);
                    rotate(-95);
                    drawPaintbrush4(0, 70, 0.7);
                    pop();
                    p.cursor("none");
                } else if (selectedPaintbrush === 5) {
                    push();
                    translate(mouseX, mouseY);
                    rotate(-95);
                    drawPaintbrush5(0, 70, 0.7);
                    pop();
                    p.cursor("none");
                } else if (selectedPaintbrush === 6) {
                    if (!erasing) {
                        push();
                        translate(mouseX, mouseY);
                        rotate(-83);
                        drawPencil(-4, -1, 0.6);
                        pop();
                        p.cursor("none");
                    } else {
                        push();
                        translate(mouseX, mouseY);
                        rotate(83);
                        drawPencil(4, -300, 0.6);
                        pop();
                        p.cursor("none");
                    }
                } else {
                    p.cursor(ARROW);
                }
                if (selectedPaintbrush && mouseIsPressed && mouseY < -29.5*mouseX + 13207.5 && mouseY > -28.5*mouseX + 6045 && mouseY > 0.0851*mouseX + 42.1 && mouseY < 0.128*mouseX + 319.468 && p.mouseButton === LEFT && pmouseY < -29.5*pmouseX + 13207.5 && pmouseY > -28.5*pmouseX + 6045 && pmouseY > 0.0851*pmouseX + 42.1 && pmouseY < 0.128*pmouseX + 319.468) {
                    cp = true;
                    //paintingX2s.push(mouseX);
                    //paintingY2s.push(mouseY);
                    paintingXs.push(pmouseX);
                    paintingYs.push(pmouseY);
                    if (selectedPaintbrush === 6) {
                        paintingCs.push(color(89, 89, 89));
                        p.print("hi2");
                    } else {
                        paintingCs.push(selectedColor);
                        p.print("hi3");
                        paintingTs.push(transparency);
                    }
                    if (selectedPaintbrush === 1) {
                        paintingSs.push(43);
                    } else if (selectedPaintbrush === 2) {
                        paintingSs.push(31);
                    } else if (selectedPaintbrush === 3) {
                        paintingSs.push(21);
                    } else if (selectedPaintbrush === 4) {
                        paintingSs.push(16);
                    } else if (selectedPaintbrush === 5) {
                        paintingSs.push(11);
                    } else if (selectedPaintbrush === 6) {
                        paintingSs.push(7);
                    } else {
                        paintingSs.push(0);
                    }
                } else if (selectedPaintbrush && mouseIsClicked && mouseY < -29.5*mouseX + 13207.5 && mouseY > -28.5*mouseX + 6045 && mouseY > 0.0851*mouseX + 42.1 && mouseY < 0.128*mouseX + 319.468 && pmouseY < -29.5*pmouseX + 13207.5 && pmouseY > -28.5*pmouseX + 6045 && pmouseY > 0.0851*pmouseX + 42.1 && pmouseY < 0.128*pmouseX + 319.468 && p.mouseButton === RIGHT && selectedPaintbrush < 6) {
                    paintingXs.push("background");
                    paintingYs.push("background");
                    //paintingX2s.push("background");
                    //paintingY2s.push("background");
                    paintingCs.push(selectedColor);
                    p.print("hi4");
                    paintingTs.push(transparency);
                    paintingSs.push(0);
                    cp = false;
                    paintingLetGoPoints.push(paintingXs.length - 2);
                }
                if (mouseY < -29.5*mouseX + 13207.5 && mouseY > -28.5*mouseX + 6045 && mouseY > 0.0851*mouseX + 42.1 && mouseY < 0.128*mouseX + 319.468 && pmouseY < -29.5*pmouseX + 13207.5 && pmouseY > -28.5*pmouseX + 6045 && pmouseY > 0.0851*pmouseX + 42.1 && pmouseY < 0.128*pmouseX + 319.468) {
                    if (mouseIsClicked) {
                        console.log("Just let go???");
                        console.log(paintingXs.length-1);
                        paintingLetGoPoints.push(paintingXs.length - 1);
                        console.log(paintingLetGoPoints);
                        cp = false;
                    }
                } else if (cp) {
                    paintingLetGoPoints.push(paintingXs.length - 1);
                    cp = false;
                }
                if (mouseIsClicked && mouseX > 415 && mouseX < 485 && mouseY > 14 && mouseY < 54) {
                    if (paintingLetGoPoints.length !== 1) {
                        paintingXs.splice(paintingLetGoPoints[paintingLetGoPoints.length - 2] + 1, paintingLetGoPoints[paintingLetGoPoints.length - 1] - paintingLetGoPoints[paintingLetGoPoints.length - 2]);
                        //paintingX2s.splice(paintingLetGoPoints[paintingLetGoPoints.length - 2] + 1, paintingLetGoPoints[paintingLetGoPoints.length - 1] - paintingLetGoPoints[paintingLetGoPoints.length - 2]);
                        paintingYs.splice(paintingLetGoPoints[paintingLetGoPoints.length - 2] + 1, paintingLetGoPoints[paintingLetGoPoints.length - 1] - paintingLetGoPoints[paintingLetGoPoints.length - 2]);
                        //paintingY2s.splice(paintingLetGoPoints[paintingLetGoPoints.length - 2] + 1, paintingLetGoPoints[paintingLetGoPoints.length - 1] - paintingLetGoPoints[paintingLetGoPoints.length - 2]);
                        paintingCs.splice(paintingLetGoPoints[paintingLetGoPoints.length - 2] + 1, paintingLetGoPoints[paintingLetGoPoints.length - 1] - paintingLetGoPoints[paintingLetGoPoints.length - 2]);
                        paintingTs.splice(paintingLetGoPoints[paintingLetGoPoints.length - 2] + 1, paintingLetGoPoints[paintingLetGoPoints.length - 1] - paintingLetGoPoints[paintingLetGoPoints.length - 2]);
                        paintingSs.splice(paintingLetGoPoints[paintingLetGoPoints.length - 2] + 1, paintingLetGoPoints[paintingLetGoPoints.length - 1] - paintingLetGoPoints[paintingLetGoPoints.length - 2]);
                    } else {
                        paintingXs.splice(0, paintingXs.length);
                        paintingYs.splice(0, paintingYs.length);
                        //paintingX2s.splice(0, paintingX2s.length);
                        //paintingY2s.splice(0, paintingY2s.length);
                        paintingCs.splice(0, paintingCs.length);
                        paintingTs.splice(0, paintingTs.length);
                        paintingSs.splice(0, paintingSs.length);
                    }
                    paintingLetGoPoints.splice(paintingLetGoPoints.length - 1, 1);
                }
            }
            erasing = false;
            
            keyIsReleased = false;
            mouseIsClicked = false;
            //println(mouseX+" "+mouseY);
	    };  
    }
  
    componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {
      return (
        <Paper ref={this.myRef} className="biggerCanvas"></Paper>
      )
    }
  }

  export default ArtStudioCanvas;
  