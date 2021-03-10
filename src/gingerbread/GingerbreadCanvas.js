import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import p5 from "p5";
import { remove, setup, draw, cursor, frameRate, getFrameRate, setFrameRate, noCursor, fullscreen, pixelDensity, displayDensity, getURL, getURLPath, getURLParams, pushStyle, popStyle, popMatrix, pushMatrix, registerPromisePreload, camera, perspective, ortho, frustum, createCamera, setCamera, setAttributes, createCanvas, resizeCanvas, noCanvas, createGraphics, blendMode, noLoop, loop, isLooping, push, pop, redraw, applyMatrix, resetMatrix, rotate, rotateX, rotateY, rotateZ, scale, shearX, shearY, translate, arc, ellipse, circle, line, point, quad, rect, square, triangle, ellipseMode, noSmooth, rectMode, smooth, strokeCap, strokeJoin, strokeWeight, bezier, bezierDetail, bezierPoint, bezierTangent, curve, curveDetail, curveTightness, curvePoint, curveTangent, beginContour, beginShape, bezierVertex, curveVertex, endContour, endShape, quadraticVertex, vertex, textOutput, gridOutput, alpha, blue, brightness, color, green, hue, lerpColor, lightness, red, saturation, background, clear, colorMode, fill, noFill, noStroke, stroke, erase, noErase, createStringDict, createNumberDict, storeItem, getItem, clearStorage, removeItem, select, selectAll, removeElements, createDiv, createP, createSpan, createImg, createA, createSlider, createButton, createCheckbox, createSelect, createRadio, createColorPicker, createInput, createFileInput, createVideo, createAudio, createCapture, createElement, describe, describeElement, setMoveThreshold, setShakeThreshold, keyIsDown, requestPointerLock, exitPointerLock, createImage, saveCanvas, saveGif, saveFrames, loadImage, image, tint, noTint, imageMode, blend, copy, filter, get, loadPixels, set, updatePixels, loadJSON, loadStrings, loadTable, loadXML, loadBytes, httpGet, httpPost, httpDo, createWriter, save, saveJSON, saveJSONObject, saveJSONArray, saveStrings, saveTable, writeFile, downloadFile, abs, ceil, constrain, dist, exp, floor, lerp, log, mag, map, max, min, norm, pow, round, sq, sqrt, fract, createVector, noise, noiseDetail, noiseSeed, randomSeed, random, randomGaussian, acos, asin, atan, atan2, cos, sin, tan, degrees, radians, angleMode, textAlign, textLeading, textSize, textStyle, textWidth, textAscent, textDescent, loadFont, text, textFont, append, arrayCopy, concat, reverse, shorten, shuffle, sort, splice, subset, float, int, str, boolean, byte, char, unchar, hex, unhex, join, match, matchAll, nf, nfc, nfp, nfs, split, splitTokens, trim, day, hour, minute, millis, month, second, year, plane, box, sphere, cylinder, cone, ellipsoid, torus, orbitControl, debugMode, noDebugMode, ambientLight, specularColor, directionalLight, pointLight, lights, lightFalloff, spotLight, noLights, loadModel, model, loadShader, createShader, shader, resetShader, normalMaterial, texture, textureMode, textureWrap, ambientMaterial, emissiveMaterial, specularMaterial, shininess, easierthanremovingcomma} from "../resources/renamed_p5_library.js";

class GingerbreadCanvas extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (p) => {
        let myRed;
        let myOrange;
        let myYellow;
        let myGreen;
        let myBlue;
        let myPurple;
        let myPink;
        let myWhite;

        let selectedColor;
        let selectedCandy;

        //gingerbread colors
        let lightBrown;
        let darkBrown;

        
        //let fill = function(){return p.fill.apply(p,arguments);};
  
       p.setup = () => {

        p.angleMode(p.DEGREES);
        p.createCanvas(400,400);
        p.noFill();
        p.noStroke();
        p.background(2, 130, 194); //pick a color
        
        myRed = p.color(240,36,36);
        myOrange = p.color(255, 132, 0);
        myYellow = p.color(255, 234, 0);
        myGreen = p.color(0, 163, 24);
        myBlue = p.color(36, 160, 255);
        myPurple = p.color(200, 82, 255);
        myPink = p.color(255, 143, 178);
        myWhite = p.color(250, 248, 240);
    
        selectedColor = myRed;
        selectedCandy = "gumdrop";
    
        //gingerbread colors
        lightBrown = p.color(171, 106, 44);
        darkBrown = p.color(135, 75, 19);
       }

       
        //gumdrop arrays
        let gumdropX = [];
        let gumdropY = [];
        let gumdropC = [];

        //peppermint arrays
        let peppermintX = [];
        let peppermintY = [];
        let peppermintC = [];

        //candy cane arrays
        let candycaneX = [];
        let candycaneY = [];
        let candycaneC = [];

        //icing arrays
        let icingX = [];
        let icingY = [];
        let icingX2 = [];
        let icingY2 = [];
        let icingC = [];

        let colorMenuX = -100;
        let colorMenuOut = false;
        let candyMenuX = 400;
        let candyMenuOut = false;

        let drawGumDrop = function(x, y, color) {
            p.fill(color);
            p.arc(x, y, 40, 60, 180, 360);
            p.ellipse(x, y, 40, 20);
            p.fill(255, 255, 255, 50);
            p.ellipse(x - 5, y - 19, 15, 8);
        };

        let drawPeppermint = function(x, y, color) {
            p.fill(color);
            p.ellipse(x, y, 42, 42);
            p.fill(255, 255, 255);
            p.arc(x, y, 43, 43, 0, 22.5);
            p.arc(x, y, 43, 43, 45, 67.5);
            p.arc(x, y, 43, 43, 90, 112.5);
            p.arc(x, y, 43, 43, 135, 157.5);
            p.arc(x, y, 43, 43, 180, 202.5);
            p.arc(x, y, 43, 43, 225, 247.5);
            p.arc(x, y, 43, 43, 270, 292.5);
            p.arc(x, y, 43, 43, 315, 335.5);
        };

        let drawCandyCane = function(x, y, color) {
            p.stroke(255, 255, 255);
            p.strokeWeight(14);
            p.line(x, y, x, y + 72);
            p.noStroke();
            p.fill(color);
            p.quad(x - 7, y + 15, x + 7, y + 1, x + 7, y + 13, x - 7, y + 27);
            p.quad(x - 7, y + 39, x + 7, y + 25, x + 7, y + 37, x - 7, y + 51);
            p.quad(x - 7, y + 63, x + 7, y + 49, x + 7, y + 61, x - 7, y + 75);
        };
  
       p.draw = () => {
        p.background(207, 245, 255);
        p.noStroke();
        
        //house
        // roof front
        p.fill(lightBrown);
        p.triangle(200, 28, 350, 150, 50, 150);
        // roof sides
        p.stroke(darkBrown);
        p.strokeWeight(20);
        p.line(200, 28, 350, 150);
        p.line(200, 28, 50, 150);
        p.noStroke();
        // front wall
        p.fill(lightBrown);
        p.rect(60, 150, 280, 207, 10);
        // front door
        p.fill(darkBrown);
        p.rect(159, 241, 78, 117, 10);
        // ground
        p.fill(255, 255, 255);
        p.rect(0, 355, p.width, 100);
        
        for (let i=0;i<icingX.length;i++) {
            p.stroke(icingC[i]);
            p.strokeWeight(12);
            p.line(icingX2[i], icingY2[i], icingX[i], icingY[i]);
            p.noStroke();
        }
        
        for (let i=0;i<candycaneX.length;i++) {
            drawCandyCane(candycaneX[i], candycaneY[i], candycaneC[i]);
        }
        
        for (let i=0;i<gumdropX.length;i++) {
            drawGumDrop(gumdropX[i], gumdropY[i], gumdropC[i]);
        }
        
        for (let i=0;i<peppermintX.length;i++) {
            drawPeppermint(peppermintX[i], peppermintY[i], peppermintC[i]);
        }
        
        //color menu
        p.fill(255, 255, 255, 200);
        p.rect(colorMenuX, 0, 100, 355);
        p.rect(colorMenuX + 100, 0, 50, 50);
        p.fill(myOrange);
        p.rect(colorMenuX + 104, 6, 30, 25);
        p.fill(myYellow);
        p.rect(colorMenuX + 119, 20, 25, 25);
        p.fill(myRed);
        p.ellipse(colorMenuX + 30, 25, 40, 40);
        p.fill(myOrange);
        p.ellipse(colorMenuX + 70, 65, 40, 40);
        p.fill(myYellow);
        p.ellipse(colorMenuX + 30, 105, 40, 40);
        p.fill(myGreen);
        p.ellipse(colorMenuX + 70, 145, 40, 40);
        p.fill(myBlue);
        p.ellipse(colorMenuX + 30, 185, 40, 40);
        p.fill(myPurple);
        p.ellipse(colorMenuX + 70, 225, 40, 40);
        p.fill(myPink);
        p.ellipse(colorMenuX + 30, 265, 40, 40);
        p.fill(myWhite);
        p.ellipse(colorMenuX + 70, 305, 40, 40);
        
        //candy type menu
        p.fill(255, 255, 255, 200);
        p.rect(candyMenuX, 0, 100, 355);
        p.rect(candyMenuX - 50, 0, 50, 50);
        drawGumDrop(candyMenuX - 24, 35, myPink);
        p.stroke(myRed);
        p.strokeWeight(12);
        p.noFill();
        p.arc(candyMenuX + 35, 25, 30, 15, 180, 360);
        p.arc(candyMenuX + 65, 24, 30, 15, 0, 180);
        p.noStroke();
        drawGumDrop(candyMenuX + 50, 100, myRed);
        drawPeppermint(candyMenuX + 50, 170, myRed);
        drawCandyCane(candyMenuX + 50, 220, myRed);
        
        if (p.mouseX < 50 && p.mouseY < 50) {
            colorMenuOut = true;
        }
        if (p.mouseX > 100) {
            colorMenuOut = false;
        }
        if (colorMenuOut && colorMenuX < 0) {
            colorMenuX ++;
        }
        if (!colorMenuOut && colorMenuX > -100) {
            colorMenuX --;
        }
        
        
        if (p.mouseX > 350 && p.mouseY < 50) {
            candyMenuOut = true;
        }
        if (p.mouseX < 300) {
            candyMenuOut = false;
        }
        if (candyMenuOut && candyMenuX > 300) {
            candyMenuX --;
        }
        if (!candyMenuOut && candyMenuX < 400) {
            candyMenuX ++;
        }
        
        if (p.mouseIsPressed && p.sqrt(p.sq(p.mouseX - colorMenuX - 30) + p.sq(p.mouseY - 25)) < 20) {
            selectedColor = myRed;
        } else if (p.mouseIsPressed && p.sqrt(p.sq(p.mouseX - colorMenuX - 70) + p.sq(p.mouseY - 65)) < 20) {
            selectedColor = myOrange;
        } else if (p.mouseIsPressed && p.sqrt(p.sq(p.mouseX - colorMenuX - 30) + p.sq(p.mouseY - 105)) < 20) {
            selectedColor = myYellow;
        } else if (p.mouseIsPressed && p.sqrt(p.sq(p.mouseX - colorMenuX - 70) + p.sq(p.mouseY - 145)) < 20) {
            selectedColor = myGreen;
        } else if (p.mouseIsPressed && p.sqrt(p.sq(p.mouseX - colorMenuX - 30) + p.sq(p.mouseY - 185)) < 20) {
            selectedColor = myBlue;
        } else if (p.mouseIsPressed && p.sqrt(p.sq(p.mouseX - colorMenuX - 70) + p.sq(p.mouseY - 225)) < 20) {
            selectedColor = myPurple;
        } else if (p.mouseIsPressed && p.sqrt(p.sq(p.mouseX - colorMenuX - 30) + p.sq(p.mouseY - 265)) < 20) {
            selectedColor = myPink;
        } else if (p.mouseIsPressed && p.sqrt(p.sq(p.mouseX - colorMenuX - 70) + p.sq(p.mouseY - 305)) < 20) {
            selectedColor = myWhite;
        } else if (p.mouseIsPressed && p.mouseX > candyMenuX && p.mouseY < 50) {
            selectedCandy = "icing";
        } else if (p.mouseIsPressed && p.mouseX > candyMenuX && p.mouseY < 125) {
            selectedCandy = "gumdrop";
        } else if (p.mouseIsPressed && p.mouseX > candyMenuX && p.mouseY < 215) {
            selectedCandy = "peppermint";
        } else if (p.mouseIsPressed && p.mouseX > candyMenuX && p.mouseY < 295) {
            selectedCandy = "candycane";
        } else if (p.mouseIsPressed && selectedCandy === "icing") {
            icingX.push(p.mouseX);
            icingY.push(p.mouseY);
            icingX2.push(p.mouseX);
            icingY2.push(p.mouseY);
            icingC.push(selectedColor);
        } else if (p.mouseIsPressed && selectedCandy === "gumdrop") {
            gumdropX.push(p.mouseX);
            gumdropY.push(p.mouseY);
            gumdropC.push(selectedColor);
        } else if (p.mouseIsPressed && selectedCandy === "peppermint") {
            peppermintX.push(p.mouseX);
            peppermintY.push(p.mouseY);
            peppermintC.push(selectedColor);
        } else if (p.mouseIsPressed && selectedCandy === "candycane") {
            candycaneX.push(p.mouseX);
            candycaneY.push(p.mouseY);
            candycaneC.push(selectedColor);
        }
        
        if (selectedCandy === "gumdrop") {
            drawGumDrop(p.mouseX, p.mouseY, selectedColor);
        }
        if (selectedCandy === "peppermint") {
            drawPeppermint(p.mouseX, p.mouseY, selectedColor);
        } 
        if (selectedCandy === "candycane") {
            drawCandyCane(p.mouseX, p.mouseY, selectedColor);
        }
       }
    }
  
    componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {
      return (
        <Paper ref={this.myRef} className="basicCanvas"></Paper>
      )
    }
  }

  export default GingerbreadCanvas;
  