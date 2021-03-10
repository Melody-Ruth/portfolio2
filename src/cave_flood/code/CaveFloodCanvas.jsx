import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import p5 from "p5";
import singleLowRes from "../graphics/currently_using/crystal_low_res.png";
import groupLowRes from "../graphics/currently_using/crystal_group2_low_res.png";
import groupLowResWater from "../graphics/currently_using/crystal_group_water_low_res.png";
import singleLowResWater from "../graphics/currently_using/crystal_water_low_res.png";
import darkness1Img from "../graphics/currently_using/darkness1.png";
import darkness2Img from "../graphics/currently_using/darkness2.png";
import waterDarknessImg from "../graphics/currently_using/water_darkness.png";
import mapCoverImg from "../graphics/currently_using/map_cover.png";
import menuImg from "../graphics/currently_using/menu.png";
import helpImg from "../graphics/currently_using/help.png";
import mapImg from "../graphics/currently_using/map_low_res.png";
import greyMapImg from "../graphics/currently_using/map_greyedout_low_res.png";
import settingsImg from "../graphics/currently_using/settings_transparent2.png";
import settingsHoverImg from "../graphics/currently_using/settings_opaque2.png";

class CaveFloodCanvas extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (p) => {
      var ellipse=function(){return p.ellipse.apply(p,arguments);},rect=function(){return p.rect.apply(p,arguments);},arc=function(){return p.arc.apply(p,arguments);},fill=function(){return p.fill.apply(p,arguments);},quad=function(){return p.quad.apply(p,arguments);}
        ,stroke=function(){return p.stroke.apply(p,arguments);},strokeWeight=function(){return p.strokeWeight.apply(p,arguments);},noStroke=function(){return p.noStroke();},translate=function(){return p.translate.apply(p,arguments);},line=function(){return p.line.apply(p,arguments);}
        ,triangle=function(){return p.triangle.apply(p,arguments);},pushMatrix=function(){return p.push.apply(p,arguments);},popMatrix=function(){return p.pop.apply(p,arguments);},rotate=function(){return p.rotate.apply(p,arguments);},noFill=function(){return p.noFill.apply(p,arguments);},vertex=function(){return p.vertex.apply(p,arguments);}
        ,point=function(){return p.point.apply(p,arguments);},color=function(){return p.color.apply(p,arguments);},random=function(){return p.random.apply(p,arguments);},background=function(){return p.background.apply(p,arguments);},text=function(){return p.text.apply(p,arguments);},textSize=function(){return p.textSize.apply(p,arguments);}
        ,beginShape=function(){return p.beginShape.apply(p,arguments);},endShape=function(){return p.endShape.apply(p,arguments);},floor=function(){return p.floor.apply(p,arguments);},sq=function(){return p.sq.apply(p,arguments);},sqrt=function(){return p.sqrt.apply(p,arguments);},angleMode=function(){return p.angleMode.apply(p,arguments);}
        ,sin=function(){return p.sin.apply(p,arguments);},cos=function(){return p.cos.apply(p,arguments);},tan=function(){return p.tan.apply(p,arguments);},asin=function(){return p.asin.apply(p,arguments);},acos=function(){return p.acos.apply(p,arguments);},atan=function(){return p.atan.apply(p,arguments);}
        ,ceil=function(){return p.ceil.apply(p,arguments);},createImage=function(){return p.createImage.apply(p,arguments);},loadImage=function(){return p.loadImage.apply(p,arguments);},push=function(){return p.push.apply(p,arguments);},pop=function(){return p.pop.apply(p,arguments);}
        ,abs=function(){return p.abs.apply(p,arguments);},image=function(){return p.image.apply(p,arguments);},getItem=function(){return p.getItem.apply(p,arguments);},storeItem=function(){return p.storeItem.apply(p,arguments);},minute=function(){return p.minute.apply(p,arguments);},second=function(){return p.second.apply(p,arguments);}
        ,startSec=function(){return p.startSec.apply(p,arguments);},scale=function(){return p.scale.apply(p,arguments);},cursor=function(){return p.cursor.apply(p,arguments);};
      var DEGREES = p.DEGREES;
      var mouseX = p.mouseX;
      var mouseY = p.mouseY;
      var pmouseX = p.mouseX;
      var pmouseY = p.mouseY;
      var mouseIsPressed = p.mouseIsPressed;
      var RIGHT_ARROW = p.RIGHT_ARROW;
      var LEFT_ARROW = p.LEFT_ARROW;
      var UP_ARROW = p.UP_ARROW;
      var DOWN_ARROW = p.DOWN_ARROW;
      var keyCode = p.keyCode;
      var width = p.width;
      var height = p.height;
      var HAND = p.HAND;
      var ARROW = p.ARROW;

      //Images (have to declare outside so scope will be global
      var crystal, testing, smiley, crystalGroup, crystalGroupWater, crystalWater,help,mapCover,menu,mapImage,greyMap;
      var numCrystals = 3;//Have to decide early so we know how many crystal images to load. Later each crystal will be assigned a crystal image to manipulate with the waterlevel.
      var crystalImages = [];//water crystal group images. One for each crystal group
      var singleCrystalImages = [];//water single crystal images. One for each crystal

      var rotateImage = function(img,theta) {//img: The image to be rotated. theta: How many degrees to rotate by
        var theta = -theta;//I messed the code up so it rotate by -theta not theta, so I correct it here
        angleMode(DEGREES);
        var img2;//The new, rotated image. What gets returned.
        
        //In order to make sure the new image is big enough, we make it (sqrt(2) * (the biggest side of the original image) ) on both sides.
        //The square root of 2 is because when you rotate parts of the image can end up outside the original boundaries.
        if (img.width > img.height) {
          img2 = createImage(floor(img.width*sqrt(2)),floor(img.width*sqrt(2)));
        } else {
          img2 = createImage(floor(img.height*sqrt(2)),floor(img.height*sqrt(2)));
        }
        //Making variables for the img2's dimensions in an attempt to speed up loading time.
        var halfHeight = img2.height/2;
        var halfWidth = img2.width/2;
        var fullHeight = img2.height;
        var fullWidth = img2.width;
        //Variables we will use when rotating each pixel
        var phi,r,totalAngle,newX,newY,oldColor;
        var oldX,oldY;
        img2.loadPixels();
        img.loadPixels();
        //One strip in the middle gets missed. We correct it here.
        for (var i = 0; i < fullWidth; i++) {
          var j = floor(halfHeight);
          phi = 0;
          r = i - halfWidth;
          if (i < halfWidth) {
            phi = 180;
            r = halfWidth-i;
          }
          totalAngle = phi - theta;
          oldX = r*cos(totalAngle)+img.width/2;
          oldY = -r*sin(totalAngle)+img.height/2;
          if (oldX > 0 && oldX < img.width && oldY > 0 && oldY < img.height) {
            oldColor = img.get(oldX,oldY);
            img2.set(i,j,color(oldColor));
          }
        }
        //Quadrant II
        /*For each pixel in quadrant II of the new image, find the equivalent pixel in the old image and set the new image's pixel to be the same color as the old image's.
        * Step 1: Find the angle phi in the right triangle created by the center of the image and the current pixel.
        * Step 2: Find the hypotenuse r of this triangle.
        * Step 3: Correct phi based on what quadrant we're in to be the angle from 0.
        * Step 4: The angle in the old image will be the angle in the new image - how much we're rotating by.
        * Step 5: New triangle using the same radius but different angle. This gives us the equivalent pixel position in the old image.
        * Step 6: If this is a legitimate pixel, get its color and use it to set the pixel in our new image.
        * (Other quadrants work similarly)
        */
        for (var i = 0; i < halfWidth; i++) {
          for (var j = 0; j < halfHeight; j++) {
            phi = atan((halfHeight-j)/(halfWidth-i));
            r = (halfHeight-j)/sin(phi);
            phi = 180-phi;
            totalAngle = phi-theta;
            oldX = r*cos(totalAngle)+img.width/2;
            oldY = -r*sin(totalAngle)+img.height/2;
            if (oldX > 0 && oldX < img.width && oldY > 0 && oldY < img.height) {
              oldColor = img.get(oldX,oldY);
              img2.set(i,j,color(oldColor));
            }
          }
        }
        //Quadrant I
        for (var i = halfWidth; i < fullWidth; i++) {
          for (var j = 0; j < halfHeight; j++) {
            phi = atan((halfHeight-j)/(i-halfWidth));
            r = (halfHeight-j)/sin(phi);
            totalAngle = phi-theta;
            oldX = r*cos(totalAngle)+img.width/2;
            oldY = -r*sin(totalAngle)+img.height/2;
            if (oldX > 0 && oldX < img.width && oldY > 0 && oldY < img.height) {
              oldColor = img.get(oldX,oldY);
              img2.set(i,j,color(oldColor));
            }
          }
        }
        //Quadrant IV
        for (var i = ceil(halfWidth); i < fullWidth; i++) {
          for (var j = ceil(halfHeight); j < fullHeight; j++) {
            phi = atan((j-halfHeight)/(i-halfWidth));
            r = (j-halfHeight)/sin(phi);
            phi = -phi;
            totalAngle = phi-theta;
            oldX = r*cos(totalAngle)+img.width/2;
            oldY = -r*sin(totalAngle)+img.height/2;
            if (oldX > 0 && oldX < img.width && oldY > 0 && oldY < img.height) {
              oldColor = img.get(oldX,oldY);
              img2.set(i,j,color(oldColor));
            }
          }
        }
        //Quadrant III
        for (var i = 0; i < halfWidth; i++) {
          for (var j = ceil(halfHeight); j < fullHeight; j++) {
            phi = atan((j-halfHeight)/(halfWidth-i));
            r = (j-halfHeight)/sin(phi);
            phi += 180;
            totalAngle = phi-theta;
            oldX = r*cos(totalAngle)+img.width/2;
            oldY = -r*sin(totalAngle)+img.height/2;
            if (oldX > 0 && oldX < img.width && oldY > 0 && oldY < img.height) {
              oldColor = img.get(oldX,oldY);
              img2.set(i,j,color(oldColor));
            }
          }
        }
        img.updatePixels();
        img2.updatePixels();
        return img2;
      };

      var cutOut = function(img,cutX,cutY,cutWidth,cutHeight) {
        img.loadPixels();
        for (var i = cutX; i < cutX+cutWidth; i++) {
          for (var j = cutY; j < cutY+cutHeight; j++) {
            img.pixels[4*(j*img.width+i)+3] = 0;
          }
        }
        img.updatePixels();
      };

      var darkness, darkness2, waterDarkness;
      var settings,settingsHover;

      p.preload = () => {

        crystal = loadImage(singleLowRes);
        crystalGroup = loadImage(groupLowRes);
        crystalGroupWater = loadImage(groupLowResWater);
        crystalWater = loadImage(singleLowResWater);
        darkness = loadImage(darkness1Img);
        darkness2 = loadImage(darkness2Img);
        waterDarkness = loadImage(waterDarknessImg);
        mapCover = loadImage(mapCoverImg);
        menu = loadImage(menuImg);
        help = loadImage(helpImg);
        mapImage = loadImage(mapImg);
        greyMap = loadImage(greyMapImg);
        settings = loadImage(settingsImg);
        settingsHover = loadImage(settingsHoverImg);
        
        //Load the water crystal group images. They each need to load their own so that manipulating one won't affect the others.
        for (var i = 0; i < 30; i++) {
          crystalImages[i] = loadImage(groupLowResWater);
        }
        //Load the water crystal images. They each need to load their own so that manipulating one won't affect the others.
        for (var i = 0; i < 30; i++) {
          singleCrystalImages[i] = loadImage(singleLowResWater);
        }
        
      }

      var groupWidth = 150;
      var groupHeight = 149;
      var singleWidth = 150;
      var singleHeight =  149;



      //Whenever a new key is presssed, keyCode changes, so I can't tell whether other keys are still being pressed. To make up for that,
      //I made my own variables for the arrow keys which are true when they are pressed and become false when they are released.
      var rightPressed = false;
      var leftPressed = false;
      var upPressed = false;
      var downPressed = false;
      var mouseIsClicked = false;

      p.mouseReleased = function() {
        mouseIsClicked = true;
      };

      p.keyPressed = function() {
        if (keyCode === RIGHT_ARROW) {
          rightPressed = true;
        }
        if (keyCode === LEFT_ARROW) {
          leftPressed = true;
        }
        if (keyCode === UP_ARROW) {
          upPressed = true;
        }
        if (keyCode === DOWN_ARROW) {
          downPressed = true;
        }
      };

      var keyIsReleased;
      p.keyReleased = function() {
        keyIsReleased = true;
        if (keyCode === RIGHT_ARROW) {
          rightPressed = false;
        }
        if (keyCode === LEFT_ARROW) {
          leftPressed = false;
        }
        if (keyCode === UP_ARROW) {
          upPressed = false;
        }
        if (keyCode === DOWN_ARROW) {
          downPressed = false;
        }
      };

      var startMin;
      var starSec;
      var endMin, endSec, totalMin, totalSec;
      var timer = 0;//Keeps track of how many times the draw function has been executed. I use it to do image stuff on the first time through.
      var g = 0.1633;//Pull of gravity. I flip it when the ball is in water to simulate buoyancy overpowering gravity.
      var ballStartPos = [60,90];//Where the ball starts the game
      //Should start 60,3790
      var waterLevel = 7000;//Starting water level
      var waterColor = [155, 151, 230];
      //var groundWaterColor = [89,169,194];
      var groundWaterColor = [20, 81, 130];
      //Adjust what part of the game is shown on screen based on the ball starting position.
      //No matter what its starting position, it shows up on the screen as 370 pixels to the left and 430 pixels down at the start.
      var xTranslate = 370-ballStartPos[0];
      var yTranslate = 430-ballStartPos[1];
      var xTranslateShifter = 0;//Current rate at which the part of the game shown is moving left
      var yTranslateShifter = 0;//Current rate at which the part of the game shown is moving up
      var mapsLeft = 3;

      var ball = {};
      //ball.p = [370,430];//position
      ball.p = [ballStartPos[0],ballStartPos[1]];
      ball.v = [0,0];//velocity
      ball.m = 20;//"mass"
      ball.r = 18;//radius
      ball.e = 0.7;//elasticity (between 0 and 1). Determines what fraction of the perpendicular velocity the ball bounces off of something with.
      ball.e2 = 0.98;//parallel elasticity. Acts like friction. Determines what fraction of the parellel velocity the ball keeps when it bbounces off of something.
      ball.resting = false;//The ball is resting if it isn't falling (or isn't floating up if it's underwater)
      ball.restingBottom = false;//The ball is on something that would stop it from falling
      ball.restingTop = false;//The ball is on something that would stop it from floating up
      ball.inPassage = false;//Whether the ball is in one of the rectangular passages.
      //If this is true, we don't have it collide with the circular or capsule caverns. This keeps the ball from bouncing off the curve of a cavern
      //when it should be fall into a pasage.
      ball.a = [0,g];//acceleration
      ball.right = false;//Is the user making the ball go right?
      ball.left = false;//Is the user making the ball go left?
      ball.down = false;//Is the user making the ball go down? (Only in water)
      ball.rightForce = 0.05;//How much the right arrow key does
      ball.leftForce = 0.05;//How much the left arrow key does
      ball.score = 0;//How many points the player has earned
      ball.waterTheta = 0;//Used when drawing the ball partially submerged
      ball.fullySubmerged = false;
      ball.drawIt = function(ballAlpha) {//Only uses ballAlpha if fully in or out of water
        this.fullySubmerged = false;
        if (waterLevel > this.p[1]+this.r) {//If the water level is below the ball completely, just draw a normal ball.
          fill(192, 142, 236,ballAlpha);
          ellipse(this.p[0],this.p[1],this.r*2,this.r*2);
        } else if (waterLevel < this.p[1]-this.r) {//If the water level is above the ball completely, just draw a watery ball.
          this.fullySubmerged = true;
          //fill(155, 151, 230,ballAlpha);
          fill(waterColor[0],waterColor[1],waterColor[2],ballAlpha);
          ellipse(this.p[0],this.p[1],this.r*2,this.r*2);
        } else if (waterLevel < this.p[1]) {//If the water level is in the top half of the ball
          fill(192, 142, 236);
          ellipse(this.p[0],this.p[1],this.r*2,this.r*2);//Draw the normal ball
          this.waterTheta = acos((this.p[1]-waterLevel)/this.r);
          //fill(155, 151, 230);
          fill(waterColor[0],waterColor[1],waterColor[2]);
          //Draw an arc from one point where the water level meets the ball to the other point.
          //Draw the triangle from one point where the water level meets the ball to the other point to the center of the ball.
          //Together, this makes a circle with a sliced cap.
          //All of this is with the water ball color, since we are adding the watery part on top of the normal ball.
          arc(this.p[0],this.p[1],this.r*2,this.r*2,this.waterTheta-90,270-this.waterTheta);
          triangle(this.p[0],this.p[1],this.p[0]+this.r*sin(this.waterTheta),waterLevel,this.p[0]-this.r*sin(this.waterTheta),waterLevel);
        } else {//If the water level is in the bottom half of the ball
          fill(waterColor[0],waterColor[1],waterColor[2]);
          ellipse(this.p[0],this.p[1],this.r*2,this.r*2);//Draw the watery ball
          this.waterTheta = acos((waterLevel-this.p[1])/this.r);
          fill(192, 142, 236);
          //Now we draw the parts where ball should be normal. When you slice a small bit of a circle off the top, it's easier to draw the larger piece.
          //So, when the water level is in the lower half, we do what we do above but flipped.
          arc(this.p[0],this.p[1],this.r*2,this.r*2,90+this.waterTheta,450-this.waterTheta);
          triangle(this.p[0],this.p[1],this.p[0]+this.r*sin(this.waterTheta),waterLevel,this.p[0]-this.r*sin(this.waterTheta),waterLevel);
        }
      };
      ball.mapDrawIt = function() {
        fill(192,142,236);
        ellipse(this.p[0],this.p[1],this.r*2,this.r*2);
      };
      ball.inAirMove = function() {
        //If the ball is in the air, change a accordingly
        if (!this.resting) {
          //acceleration assignment
          this.a[1] = g;
          this.a[0] = 0;
          if (rightPressed) {
            this.a[0] = 4*this.rightForce;
            this.right = true;
          } else {
            this.right = false;
          }
          if (leftPressed) {
            this.a[0] = -4*this.leftForce;
            this.left = true;
          } else {
            this.left = false;
          }
          if (this.inWater && downPressed) {
            this.a[1] = 0.07;
            this.down = true;
          } else {
            this.down = false;
          }
        }
        //velocity += acceleration
        //Always a good idea
        this.v[0] += this.a[0];
        this.v[1] += this.a[1];
      };
      ball.move = function() {
        //Jump
        //(can only jump if resting, not if in the air.
        if (this.resting && !this.inWater && upPressed) {
          this.v[1] -= 5;
          this.resting = false;
          this.restingBottom = false;
        }
        //Move the ball's position.
        this.p[0] += this.v[0];
        this.p[1] += this.v[1];
      };

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
              stroke(255, 255, 255, 200);
              strokeWeight(this.h/10);
              if (this.hover) {
                  fill(255, 255, 255, 75);
              } else {
                  noFill();
              }
              rect(this.x, this.y, this.w, this.h, 10);
              noStroke();
              fill(255, 255, 255, 200);
              textSize(this.h/2);
              text(this.words, this.x+offset*w, this.y+55/80*h);
          };
          button.update = function() {
              this.pressed = false;
              this.hover = false;
              if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
                  this.hover = true;
                  onAButton = true;
                  if (mouseIsPressed) {
                      this.pressed = true;
                  }
              }
          };
          return button;
      };

      var newButtonCircle = function(x, y, r) {
          var button = {};
          button.x = x;
          button.y = y;
          button.r = r;
          button.hover = false;
          button.pressed = false;
          button.drawIt = function() {
              stroke(255, 255, 255, 200);
              strokeWeight(this.h/10);
              if (this.hover) {
                console.log("hi2");
                  fill(255, 255, 255, 75);
              } else {
                  noFill();
              }
              ellipse(this.x, this.y, this.r*2, this.r*2);
              noStroke();
          };
          button.update = function() {
              this.pressed = false;
              this.hover = false;
              if (sqrt(sq(mouseX-this.x)+sq(mouseY-this.y)) < this.r) {
                  console.log("hi1");
                  this.hover = true;
                  onAButton = true;
                  if (mouseIsPressed) {
                      this.pressed = true;
                  }
              }
          };
          return button;
      };

      var newButtonSliding = function(x, y, w, h) {
          var button = {};
          button.x = x;
          button.y = y;
          button.w = w;
          button.h = h;
          button.hover = false;
          button.pressed = false;
          button.on = false;
          button.drawIt = function() {
            if (this.on) {
              fill(86,183,107);
              rect(x,y,w,h);
              arc(x,y+h/2,h,h,90,270);
              arc(x+w,y+h/2,h,h,-90,90);
              fill(135, 255, 161);
              ellipse(x+w,y+h/2,h*7/6,h*7/6);
            } else {
              fill(132,132,132);
              rect(x,y,w,h);
              arc(x,y+h/2,h,h,90,270);
              arc(x+w,y+h/2,h,h,-90,90);
              fill(211,211,211);
              ellipse(x,y+h/2,h*7/6,h*7/6);
            }
          };
          button.update = function() {
              this.pressed = false;
              this.hover = false;
              if (mouseX > this.x-this.h/2 && mouseX < this.x + this.w+this.h/2 && mouseY > this.y && mouseY < this.y + this.h) {
                  this.hover = true;
                  onAButton = true;
                  if (mouseIsClicked) {
                      this.pressed = true;
                      this.on = !this.on;
                  }
              }
          };
          return button;
      };


      var onAButton = false;

      var play = newButton(130*1.5, 120*1.5, 140*1.5, 80*1.5, "Play",3/14);
      var how = newButton(130*1.5, 250*1.5, 140*1.5, 80*1.5, "How",3/14);
      var backHow = newButton(20*1.5, 320*1.5, 110*1.5, 60*1.5, "Back",3/14);
      var backMap = newButton(2, 0, 60, 44, "Back",1/7);
      var backSettings = newButton(20*1.5, 320*1.5, 110*1.5, 60*1.5, "Save",3/14);
      var toMap = newButton(505,10,85,68,"",0);
      var settingsButton = newButtonCircle(555,555,25);
      //var ranGenOn = newButton(50,250,220,100,"On",3/14);
      //var ranGenOff = newButton(380,250,220,100,"Off",3/14);
      var ranGen = newButtonSliding(530,85,47,23);

      var newCircleEnclosure = function(x,y,r) {
        var myCircle = {};
        myCircle.p = [x,y];
        myCircle.r = r;
        myCircle.theta = 0;
        myCircle.drawIt = function() {
          if (waterLevel > this.p[1]+this.r) {
            fill(71, 40, 24);
            ellipse(this.p[0],this.p[1],this.r*2,this.r*2);
          } else if (waterLevel < this.p[1]-this.r) {
            fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2]);
            ellipse(this.p[0],this.p[1],this.r*2,this.r*2);
          } else if (waterLevel < this.p[1]) {
            fill(71, 40, 24);
            ellipse(this.p[0],this.p[1],this.r*2,this.r*2);
            this.waterTheta = acos((this.p[1]-waterLevel)/this.r);
            fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2]);
            arc(this.p[0],this.p[1],this.r*2,this.r*2,this.waterTheta-90,270-this.waterTheta);
            triangle(this.p[0],this.p[1],this.p[0]+this.r*sin(this.waterTheta)+2,waterLevel,this.p[0]-this.r*sin(this.waterTheta)-2,waterLevel);
          } else {
            fill(71, 40, 24);
            ellipse(this.p[0],this.p[1],this.r*2,this.r*2);
            fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2]);
            ellipse(this.p[0],this.p[1],this.r*2,this.r*2);
            this.waterTheta = acos((waterLevel-this.p[1])/this.r);
            fill(71, 40, 24);
            arc(this.p[0],this.p[1],this.r*2,this.r*2,90+this.waterTheta,450-this.waterTheta);
            triangle(this.p[0],this.p[1],this.p[0]+this.r*sin(this.waterTheta)+2,waterLevel,this.p[0]-this.r*sin(this.waterTheta)-2,waterLevel);
          }
        };
        myCircle.collide = function() {
          this.on = false;
          this.theta = atan((ball.p[1]-this.p[1])/(ball.p[0]-this.p[0]));
          var m = -1/tan(this.theta);
          var b = ball.p[1]-ball.p[0]*m;
          if (sqrt(sq(ball.p[0]-this.p[0])+sq(ball.p[1]-this.p[1])) > this.r-ball.r && sqrt(sq(ball.p[0]-this.p[0])+sq(ball.p[1]-this.p[1])) < this.r-ball.r+20) {
            this.on = true;
          }
          if (sqrt(sq(ball.p[0]-this.p[0])+sq(ball.p[1]-this.p[1])) > this.r-ball.r && sqrt(sq(ball.p[0]-this.p[0])+sq(ball.p[1]-this.p[1])) < this.r-ball.r+20 && ball.p[1] > this.p[1]) {
            var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
            var wallTheta = atan(m);
            //Have to adjust because of the radius of the ball.
            ball.restingBottom = true;//The ball is on a ramp
            //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
            var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
            //The rest of the magnitude must come from the perpendicular component
            var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));//Negative because the ball is bouncing off, so the perpendicular is flipped.
            //Return to x y coordinates
            ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
            ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
            var aTotal = g*sin(wallTheta);
            if (ball.right) {
              aTotal += ball.rightForce*ball.m*cos(wallTheta);
            }
            if (ball.left) {
              aTotal -= ball.leftForce*ball.m*cos(wallTheta);
            }
            if (ball.down) {
              aTotal += 0.05*sin(wallTheta);
            }
            ball.a[0] = aTotal*unitRamp[0];
            ball.a[1] = aTotal*unitRamp[1];
          }
          if (sqrt(sq(ball.p[0]-this.p[0])+sq(ball.p[1]-this.p[1])) > this.r-ball.r && sqrt(sq(ball.p[0]-this.p[0])+sq(ball.p[1]-this.p[1])) < this.r-ball.r+20 && ball.p[1] < this.p[1]) {
            var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
            var wallTheta = atan(m);
            //Have to adjust because of the radius of the ball.
            ball.restingTop = true;//The ball is on a ramp
            //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
            var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
            //The rest of the magnitude must come from the perpendicular component
            var perpendicularVelocity = ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
            ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
            ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
            var aTotal = g*sin(wallTheta);
            if (ball.right) {
              aTotal += ball.rightForce*ball.m*cos(wallTheta);
            }
            if (ball.left) {
              aTotal -= ball.leftForce*ball.m*cos(wallTheta);
            }
            if (ball.down) {
              aTotal += 0.05*sin(wallTheta);
            }
            ball.a[0] = aTotal*unitRamp[0];
            ball.a[1] = aTotal*unitRamp[1];
          }
        };
        return myCircle;
      };

      var newReverseCircle = function(x,y,r) {
        var myCircle = {};
        myCircle.p = [x,y];
        myCircle.r = r;
        myCircle.theta = 0;
        myCircle.drawIt = function() {
          fill(99, 56, 35);
          ellipse(myCircle.p[0],myCircle.p[1],myCircle.r*2,myCircle.r*2);
        };
        myCircle.collide = function() {
          this.theta = atan((ball.p[1]-this.p[1])/(ball.p[0]-this.p[0]));
          var m = -1/tan(this.theta);
          var b = ball.p[1]-ball.p[0]*m;
          if (sqrt(sq(ball.p[0]-this.p[0])+sq(ball.p[1]-this.p[1])) < this.r+ball.r && ball.p[1] > this.p[1]) {
            var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
            var wallTheta = atan(m);
            //console.log("hi");
              //Have to adjust because of the radius of the ball.
              ball.restingTop = true;//The ball is on a ramp
              //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
              var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
              //The rest of the magnitude must come from the perpendicular component
              var perpendicularVelocity = ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
              ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
              ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
              var aTotal = g*sin(wallTheta);
              if (ball.right) {
                aTotal += ball.rightForce*ball.m*cos(wallTheta);
              }
              if (ball.left) {
                aTotal -= ball.leftForce*ball.m*cos(wallTheta);
              }
              if (ball.down) {
                aTotal += 0.05*sin(wallTheta);
              }
              ball.a[0] = aTotal*unitRamp[0];
              ball.a[1] = aTotal*unitRamp[1];
          }
          if (sqrt(sq(ball.p[0]-this.p[0])+sq(ball.p[1]-this.p[1])) < this.r+ball.r && ball.p[1] <= this.p[1]) {
            var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
            var wallTheta = atan(m);
              //Have to adjust because of the radius of the ball.
              ball.restingBottom = true;//The ball is on a ramp
              //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
              var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
              //The rest of the magnitude must come from the perpendicular component
              var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
              ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
              ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
              //ball.v[0] *= ball.e;
              //ball.v[1] *= ball.e;
              var aTotal = g*sin(wallTheta);
              if (ball.right) {
                aTotal += ball.rightForce*ball.m*cos(wallTheta);
              }
              if (ball.left) {
                aTotal -= ball.leftForce*ball.m*cos(wallTheta);
              }
              if (ball.down) {
                aTotal += 0.05*sin(wallTheta);
              }
              ball.a[0] = aTotal*unitRamp[0];
              ball.a[1] = aTotal*unitRamp[1];
          }
        };
        return myCircle;
      };

      var newCapsuleEnclosure = function(x,y,w,h) {
        var capsule = {};
        capsule.x = x;
        capsule.y = y;
        capsule.w = w;
        capsule.h = h;
        capsule.r = h/2;
        capsule.p1 = [x,y+capsule.r];
        capsule.p2 = [x+w,y+capsule.r];
        capsule.drawIt = function() {
          if (waterLevel > this.y+this.h) {//Water level below this enclosure
            fill(71, 40, 24);
            rect(this.x-1,this.y,this.w+2,this.h);
            arc(this.p1[0],this.p1[1],this.r*2,this.r*2,90,270);
            arc(this.p2[0],this.p2[1],this.r*2,this.r*2,-90,90);
          } else if (waterLevel < this.y) {//Water level above this enclosure (flooded)
            fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2]);
            rect(this.x-1,this.y,this.w+2,this.h);
            arc(this.p1[0],this.p1[1],this.r*2,this.r*2,90,270);
            arc(this.p2[0],this.p2[1],this.r*2,this.r*2,-90,90);
          } else if (waterLevel < this.p1[1]) {//Water level above the center of this enclosure
            fill(71, 40, 24);
            rect(this.x-1,this.y,this.w+2,this.h);
            arc(this.p1[0],this.p1[1],this.r*2,this.r*2,90,270);
            arc(this.p2[0],this.p2[1],this.r*2,this.r*2,-90,90);
            fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2]);
            rect(this.x-1,waterLevel,this.w+2,this.y+this.h-waterLevel);
            var waterTheta = acos((this.p1[1]-waterLevel)/this.r);
            arc(this.p1[0],this.p1[1],this.r*2,this.r*2,90,270-waterTheta);
            arc(this.p2[0],this.p2[1],this.r*2,this.r*2,-90+waterTheta,90);
            triangle(this.p1[0]+1,this.p1[1]+5,this.p1[0]+1,waterLevel,this.p1[0]-this.r*sin(waterTheta),waterLevel);
            triangle(this.p2[0]-1,this.p2[1]+5,this.p2[0]-1,waterLevel,this.p2[0]+this.r*sin(waterTheta),waterLevel);
          } else {//Water level below the center of this enclosure
            fill(71, 40, 24);
            rect(this.x-2,this.y,this.w+4,this.h);
            fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2]);
            rect(this.x-1,waterLevel,this.w+2,this.y+this.h-waterLevel);
            arc(this.p1[0],this.p1[1],this.r*2,this.r*2,90,270);
            arc(this.p2[0],this.p2[1],this.r*2,this.r*2,-90,90);
            var waterTheta = acos((waterLevel-this.p1[1])/this.r);
            fill(71, 40, 24);
            arc(this.p1[0]+1,this.p1[1],this.r*2+2,this.r*2+1,90+waterTheta,270);
            arc(this.p2[0]-1,this.p2[1],this.r*2+2,this.r*2+1,-90,90-waterTheta);
            triangle(this.p1[0]+1,this.p1[1]-5,this.p1[0]+1,waterLevel,this.p1[0]-this.r*sin(waterTheta),waterLevel);
            triangle(this.p2[0]-1,this.p2[1]-5,this.p2[0]-1,waterLevel,this.p2[0]+this.r*sin(waterTheta),waterLevel);
          }
        };
        capsule.collide = function() {
          if (ball.p[1]+ball.r >= this.y+this.h && ball.p[1]+ball.r <= this.y+this.h+20 && ball.p[0] > this.x && ball.p[0] < this.x+this.w) {//bouncing off floor
            this.m = 0;
            this.b = this.y+this.h;
            ball.restingBottom = true;
            var unitRamp = [1,0];
            var parallelVelocity = ball.e2*ball.v[0];
            var perpendicularVelocity = -ball.e*abs(ball.v[1]);
            ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
            ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
            //ball.v[0] *= ball.e2;
            //ball.v[1] *= ball.e;
            var theta = atan(this.m);
            var aTotal = g*sin(theta);
            if (ball.right) {
              aTotal += ball.rightForce*ball.m*cos(theta);
            }
            if (ball.left) {
              aTotal -= ball.leftForce*ball.m*cos(theta);
            }
            if (ball.down) {
              aTotal += 0.05*sin(theta);
            }
            ball.a[0] = aTotal*unitRamp[0];
            ball.a[1] = aTotal*unitRamp[1];
          } else if (ball.p[1]-ball.r <= this.y && ball.p[1]-ball.r >= this.y-20 && ball.p[0] > this.x && ball.p[0] < this.x+this.w) {//bouncing off the ceiling
            this.m = 0;
            ball.restingTop = true;
            var unitRamp = [1,0];
            var parallelVelocity = ball.e2*ball.v[0];
            var perpendicularVelocity = ball.e*abs(ball.v[1]);
            ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
            ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
            //ball.v[0] *= ball.e2;
            //ball.v[1] *= ball.e;
            var theta = atan(this.m);
            var aTotal = g*sin(theta);
            if (ball.right) {
              aTotal += ball.rightForce*ball.m*cos(theta);
            }
            if (ball.left) {
              aTotal -= ball.leftForce*ball.m*cos(theta);
            }
            if (ball.down) {
              aTotal += 0.05*sin(theta);
            }
            ball.a[0] = aTotal*unitRamp[0];
            ball.a[1] = aTotal*unitRamp[1];
            //console.log(aTotal);
          } else if (ball.p[0]-ball.r < this.x) {//Bouncing off circle 1
            //console.log("hello");
            this.theta = atan((ball.p[1]-this.p1[1])/(ball.p[0]-this.p1[0]));
            var m = -1/tan(this.theta);
            var b = ball.p[1]-ball.p[0]*m;
            if (sqrt(sq(ball.p[0]-this.p1[0])+sq(ball.p[1]-this.p1[1])) > this.r-ball.r && sqrt(sq(ball.p[0]-this.p1[0])+sq(ball.p[1]-this.p1[1])) <= this.r-ball.r+150 && ball.p[1] > this.p1[1]) {
              var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
              var wallTheta = atan(m);
                //Have to adjust because of the radius of the ball.
                ball.restingBottom = true;//The ball is on a ramp
                //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                //The rest of the magnitude must come from the perpendicular component
                var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                //ball.v[0] *= ball.e;
                //ball.v[1] *= ball.e;
                var aTotal = g*sin(wallTheta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(wallTheta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(wallTheta);
                }
                if (ball.down) {
                  aTotal += 0.05*sin(wallTheta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
            } else if (sqrt(sq(ball.p[0]-this.p1[0])+sq(ball.p[1]-this.p1[1])) > this.r-ball.r && sqrt(sq(ball.p[0]-this.p1[0])+sq(ball.p[1]-this.p1[1])) < this.r-ball.r+150 && ball.p[1] < this.p1[1]) {
              var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
              var wallTheta = atan(m);
                //Have to adjust because of the radius of the ball.
                ball.restingTop = true;//The ball is on a ramp
                //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                //The rest of the magnitude must come from the perpendicular component
                var perpendicularVelocity = ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                //ball.v[0] *= ball.e;
                //ball.v[1] *= ball.e;
                var aTotal = g*sin(wallTheta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(wallTheta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(wallTheta);
                }
                if (ball.down) {
                  aTotal += 0.05*sin(wallTheta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
            }
          } else if (ball.p[0]+ball.r > this.x+this.w) {//Bouncing off circle 2
            this.theta = atan((ball.p[1]-this.p2[1])/(ball.p[0]-this.p2[0]));
            var m = -1/tan(this.theta);
            var b = ball.p[1]-ball.p[0]*m;
            /*stroke(0);
            strokeWeight(2);
            line(0,b,width,width*m+b);
            noStroke();
            if (sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) > this.r-ball.r) {
              //println(sqrt(sq(ball.v[0])+sq(ball.v[1])));
            }*/
            if (sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) > this.r-ball.r && sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) < this.r-ball.r+150 && ball.p[1] > this.p2[1]) {
              //console.log("hello");
              var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
              var wallTheta = atan(m);
                //Have to adjust because of the radius of the ball.
                ball.restingBottom = true;//The ball is on a ramp
                //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                //The rest of the magnitude must come from the perpendicular component
                var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                //println(ball.v[1]);
                //ball.v[0] *= ball.e;
                //ball.v[1] *= ball.e;
                var aTotal = g*sin(wallTheta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(wallTheta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(wallTheta);
                }
                if (ball.down) {
                  aTotal += 0.05*sin(wallTheta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
            }
            if (sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) > this.r-ball.r && sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) < this.r-ball.r+150 && ball.p[1] <= this.p2[1]) {
              //console.log("hi");
              var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
              var wallTheta = atan(m);
                //Have to adjust because of the radius of the ball.
                ball.restingTop = true;//The ball is on a ramp
                //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                //The rest of the magnitude must come from the perpendicular component
                var perpendicularVelocity = ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                //ball.v[0] *= ball.e;
                //ball.v[1] *= ball.e;
                var aTotal = g*sin(wallTheta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(wallTheta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(wallTheta);
                }
                if (ball.down) {
                  aTotal += 0.05*sin(wallTheta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
            }
          }
        };
        return capsule;
      };

      var newReverseCapsule = function(x,y,w,h) {
        var capsule = {};
        capsule.x = x;
        capsule.y = y;
        capsule.w = w;
        capsule.h = h;
        capsule.r = h/2;
        capsule.p1 = [x,y+capsule.r];
        capsule.p2 = [x+w,y+capsule.r];
        capsule.drawIt = function() {
          fill(99, 56, 35);
          rect(this.x-1,this.y,this.w+2,this.h);
          arc(this.p1[0],this.p1[1],this.r*2,this.r*2,90,270);
          arc(this.p2[0],this.p2[1],this.r*2,this.r*2,-90,90);
        };
        capsule.collide = function() {
          /*if (sqrt(sq(ball.p[0]-this.p1[0])+sq(ball.p[1]-this.p1[1])) > this.r-ball.r+ball.r/2 && ball.p[0]-ball.r < this.x) {
            println("hi1");
            ball.p[0] -= this.p1[0];
            ball.p[1] -= this.p1[1];
            var currentR = sqrt(sq(ball.p[0])+sq(ball.p[1]));
            ball.p[0] *= (this.r-ball.r)/currentR;
            ball.p[1] *= (this.r-ball.r)/currentR;
            ball.p[0] += this.p1[0];
            ball.p[1] += this.p1[1];
          } else if (sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) > this.r-ball.r+ball.r/2 && ball.p[0]+ball.r > this.x+this.w) {
            println("hi2");
            ball.p[0] -= this.p2[0];
            ball.p[1] -= this.p2[1];
            var currentR = sqrt(sq(ball.p[0])+sq(ball.p[1]));
            ball.p[0] *= (this.r-ball.r)/currentR;
            ball.p[1] *= (this.r-ball.r)/currentR;
            ball.p[0] += this.p2[0];
            ball.p[1] += this.p2[1];
          } else if (ball.p[1]+ball.r >= this.y+this.h+ball.r/2 && ball.p[0] > this.x && ball.p[0] < this.x+this.w) {
            println("hi3");
            ball.p[1] = this.y+this.h-ball.r;
          } else if (ball.p[1]-ball.r <= this.y-ball.r/2 && ball.p[0] > this.x && ball.p[0] < this.x+this.w) {
            println("hi4");
            ball.p[1] = this.y+ball.r;
          }*/
          if (ball.p[1]-ball.r <= this.y+this.h && ball.p[1]-ball.r >= this.y+this.h/2 && ball.p[0] > this.x && ball.p[0] < this.x+this.w) {//bouncing off floor
            this.m = 0;
            this.b = this.y+this.h;
            ball.restingTop = true;
            var unitRamp = [1,0];
            var parallelVelocity = ball.e2*ball.v[0];
            var perpendicularVelocity = ball.e*abs(ball.v[1]);
            ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
            ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
            //ball.v[0] *= ball.e2;
            //ball.v[1] *= ball.e;
            var theta = atan(this.m);
            var aTotal = g*sin(theta);
            if (ball.right) {
              aTotal += ball.rightForce*ball.m*cos(theta);
            }
            if (ball.left) {
              aTotal -= ball.leftForce*ball.m*cos(theta);
            }
            if (ball.down) {
              aTotal += 0.05*sin(theta);
            }
            ball.a[0] = aTotal*unitRamp[0];
            ball.a[1] = aTotal*unitRamp[1];
          } else if (ball.p[1]+ball.r >= this.y && ball.p[1]+ball.r <= this.y+this.h/2 && ball.p[0] > this.x && ball.p[0] < this.x+this.w) {//bouncing off the ceiling
            this.m = 0;
            ball.restingBottom = true;
            var unitRamp = [1,0];
            var parallelVelocity = ball.e2*ball.v[0];
            var perpendicularVelocity = -ball.e*abs(ball.v[1]);
            ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
            ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
            //ball.v[0] *= ball.e2;
            //ball.v[1] *= ball.e;
            var theta = atan(this.m);
            var aTotal = g*sin(theta);
            if (ball.right) {
              aTotal += ball.rightForce*ball.m*cos(theta);
            }
            if (ball.left) {
              aTotal -= ball.leftForce*ball.m*cos(theta);
            }
            if (ball.down) {
              aTotal += 0.05*sin(theta);
            }
            ball.a[0] = aTotal*unitRamp[0];
            ball.a[1] = aTotal*unitRamp[1];
          } else if (ball.p[0]-ball.r < this.x) {//Bouncing off circle 1
            this.theta = atan((ball.p[1]-this.p1[1])/(ball.p[0]-this.p1[0]));
            var m = -1/tan(this.theta);
            var b = ball.p[1]-ball.p[0]*m;
            if (sqrt(sq(ball.p[0]-this.p1[0])+sq(ball.p[1]-this.p1[1])) <= this.r+ball.r && ball.p[1] > this.p1[1]) {
              var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
              var wallTheta = atan(m);
                //Have to adjust because of the radius of the ball.
                ball.restingTop = true;//The ball is on a ramp
                //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                //The rest of the magnitude must come from the perpendicular component
                var perpendicularVelocity = ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                //ball.v[0] *= ball.e;
                //ball.v[1] *= ball.e;
                var aTotal = g*sin(wallTheta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(wallTheta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(wallTheta);
                }
                if (ball.down) {
                  aTotal += 0.05*sin(wallTheta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
            } else if (sqrt(sq(ball.p[0]-this.p1[0])+sq(ball.p[1]-this.p1[1])) <= this.r+ball.r && ball.p[1] < this.p1[1]) {
              var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
              var wallTheta = atan(m);
                //Have to adjust because of the radius of the ball.
                ball.restingBottom = true;//The ball is on a ramp
                //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                //The rest of the magnitude must come from the perpendicular component
                var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                //ball.v[0] *= ball.e;
                //ball.v[1] *= ball.e;
                var aTotal = g*sin(wallTheta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(wallTheta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(wallTheta);
                }
                if (ball.down) {
                  aTotal += 0.05*sin(wallTheta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
            }
          } else if (ball.p[0]+ball.r > this.x+this.w) {//Bouncing off circle 2
            this.theta = atan((ball.p[1]-this.p2[1])/(ball.p[0]-this.p2[0]));
            var m = -1/tan(this.theta);
            var b = ball.p[1]-ball.p[0]*m;
            /*stroke(0);
            strokeWeight(2);
            line(0,b,width,width*m+b);
            noStroke();
            if (sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) > this.r-ball.r) {
              //println(sqrt(sq(ball.v[0])+sq(ball.v[1])));
            }*/
            if (sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) <= this.r+ball.r && ball.p[1] > this.p2[1]) {
              var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
              var wallTheta = atan(m);
                //Have to adjust because of the radius of the ball.
                ball.restingBottom = true;//The ball is on a ramp
                //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                //The rest of the magnitude must come from the perpendicular component
                var perpendicularVelocity = ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                //println(ball.v[1]);
                //ball.v[0] *= ball.e;
                //ball.v[1] *= ball.e;
                var aTotal = g*sin(wallTheta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(wallTheta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(wallTheta);
                }
                if (ball.down) {
                  aTotal += 0.05*sin(wallTheta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
            }
            if (sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) <= this.r+ball.r && ball.p[1] < this.p2[1]) {
              var unitRamp = [1/sqrt(1+sq(m)),m/sqrt(1+sq(m))];
              var wallTheta = atan(m);
                //Have to adjust because of the radius of the ball.
                ball.restingTop = true;//The ball is on a ramp
                //Dot product of the ball's velocity and a unit vector in the direction of the ramp i.e. How much is the ball going in a direction parallel to the ramp?
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                //The rest of the magnitude must come from the perpendicular component
                var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                //ball.v[0] *= ball.e;
                //ball.v[1] *= ball.e;
                var aTotal = g*sin(wallTheta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(wallTheta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(wallTheta);
                }
                if (ball.down) {
                  aTotal += 0.05*sin(wallTheta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
            }
            if (sqrt(sq(ball.p[0]-this.p2[0])+sq(ball.p[1]-this.p2[1])) > this.r-ball.r) {
              //println(" "+sqrt(sq(ball.v[0])+sq(ball.v[1])));
            }
          }
        };
        return capsule;
      };

      var newPassage = function(x,y,w,h,left,right,up,down,cutOuts) {
        var passage = {};
        passage.x = x;
        passage.y = y;
        passage.w = w;
        passage.h = h;
        passage.left = left;
        passage.right = right;
        passage.up = up;
        passage.down = down;
        passage.ballIn = false;
        passage.cutOuts = cutOuts;
        passage.shouldTestLeft = true;
        passage.shouldTestRight = true;
        passage.shouldTestUp = true;
        passage.shouldTestDown = true;
        passage.drawIt = function() {
          //fill(71, 40, 24);
          //rect(this.x,this.y,this.w,this.h);
          if (waterLevel > this.y + this.h) {
            fill(71, 40, 24);
            //stroke(0,0,0);
            strokeWeight(5);
            rect(this.x,this.y,this.w,this.h+1);
            noStroke();
          } else if (waterLevel < this.y) {
            fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2]);
            rect(this.x,this.y,this.w,this.h+1);
          } else {
            fill(71, 40, 24);
            rect(this.x,this.y,this.w,this.h);
            fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2]);
            rect(this.x,waterLevel,this.w,this.y+this.h-waterLevel+1);
          }
        };
        passage.collide = function() {
          //console.log(this.cutOuts);
          /*this.ballIn = false;
          var shouldTest = true;
          for (var j = 0; j < this.deferList.length; j++) {
            if (passages[deferList[j]].ballIn) {
              shouldTest = false;
            }
            if (passages[this.deferList[j]].testCollide) {
              shouldTest = false;
            }
          }*/
          //var myShouldTest = true;
          this.shouldTestRight = true;
          this.shouldTestLeft = true;
          this.shouldTestUp = true;
          this.shouldTestDown = true;
          for (var j = 0; j < this.cutOuts.length; j++) {
            if (this.cutOuts[j][0] === 'l') {
              if (ball.p[1]-ball.r > this.cutOuts[j][1] && ball.p[1]+ball.r < this.cutOuts[j][2]) {
                this.shouldTestLeft = false;
                //console.log("hi "+myShouldTest);
              }
            } else if (this.cutOuts[j][0] === 'r') {
              if (ball.p[0]+ball.r > this.x+this.w*3/4 && ball.p[0] < this.x+this.w+ball.r && ball.p[1]-ball.r > this.cutOuts[j][1] && ball.p[1]+ball.r < this.cutOuts[j][2]) {
                this.shouldTestRight = false;
                //console.log("hi "+myShouldTest);
              }
            } else if (this.cutOuts[j][0] === 'u') {
              if (ball.p[1] - ball.r < this.y+5 && ball.p[1]+ball.r > this.y-5 && ball.p[0]-ball.r > this.cutOuts[j][1] && ball.p[0]+ball.r < this.cutOuts[j][2]) {
                this.shouldTestUp = false;
                //console.log("hi "+myShouldTest);
              }
            } else if (this.cutOuts[j][0] === 'd') {
              if (ball.p[1] + ball.r > this.y+this.h-5 && ball.p[1]-ball.r < this.y+this.h+5 && ball.p[0]-ball.r > this.cutOuts[j][1] && ball.p[0]+ball.r < this.cutOuts[j][2]) {
                this.shouldTestDown = false;
                //console.log("hi "+myShouldTest);
              }
            }
          }
          if (ball.p[0] > this.x && ball.p[0] < this.x+this.w && ball.p[1]+ball.r > this.y && ball.p[1]-ball.r < this.y+this.h || ball.p[0]+ball.r > this.x && ball.p[0]-ball.r < this.x+this.w && ball.p[1] > this.y && ball.p[1] < this.y+this.h) {
            /*if (this.cutOuts.length === 1) {
              console.log("Uh, oh "+myShouldTest);
            }*/
            ball.inPassage = true;
            this.ballIn = true;
            if (this.shouldTestLeft && this.left && ball.p[0]-ball.r < this.x) {//Left side
              var unitRamp = [0,1];
              var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
              var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
              ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
              ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
              //ball.v[0] *= ball.e;
              //ball.v[1] *= ball.e;
              var theta = 90;
              var aTotal = g*sin(theta);
              if (ball.right) {
                aTotal += ball.rightForce*ball.m*cos(theta);
              }
              if (ball.left) {
                aTotal -= ball.leftForce*ball.m*cos(theta);
              }
              if (ball.down) {
                aTotal += 0.05*sin(theta);
              }
              ball.a[0] = aTotal*unitRamp[0];
              ball.a[1] = aTotal*unitRamp[1];
            }
            if (this.shouldTestRight && this.right && ball.p[0]+ball.r > this.x+this.w) {//Right side
              var unitRamp = [0,1];
              var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
              var perpendicularVelocity = ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
              ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
              ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
              //ball.v[0] *= ball.e;
              //ball.v[1] *= ball.e;
              var theta = 90;
              var aTotal = g*sin(theta);
              if (ball.right) {
                aTotal += ball.rightForce*ball.m*cos(theta);
              }
              if (ball.left) {
                aTotal -= ball.leftForce*ball.m*cos(theta);
              }
              if (ball.down) {
                aTotal += 0.05*sin(theta);
              }
              ball.a[0] = aTotal*unitRamp[0];
              ball.a[1] = aTotal*unitRamp[1];
            }
            if (this.shouldTestUp && this.up && ball.p[1]-ball.r < this.y) {//ceiling
              //console.log("hi");
              ball.restingTop = true;
              this.m = 0;
              this.b = this.y+this.h;
              var unitRamp = [1/sqrt(1+sq(this.m)),this.m/sqrt(1+sq(this.m))];
              var unitPer = [this.m/sqrt(1+sq(this.m)),-1/sqrt(1+sq(this.m))];
              var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
              var perpendicularVelocity = ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
              ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
              ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
              //ball.v[0] *= ball.e;
              //ball.v[1] *= ball.e;
              var theta = atan(this.m);
              var aTotal = g*sin(theta);
              //console.log(sin(theta)+" "+cos(theta));
              if (ball.right) {
                aTotal += ball.rightForce*ball.m*cos(theta);
              }
              if (ball.left) {
                aTotal -= ball.leftForce*ball.m*cos(theta);
              }
              if (ball.down) {
                aTotal += 0.05*sin(theta);
              }
              ball.a[0] = aTotal*unitRamp[0];
              ball.a[1] = aTotal*unitRamp[1];
            }
            if (this.shouldTestDown && this.down && ball.p[1]+ball.r > this.y+this.h) {//floor
              ball.restingBottom = true;
              this.m = 0;
              this.b = this.y+this.h;
              var unitRamp = [1/sqrt(1+sq(this.m)),this.m/sqrt(1+sq(this.m))];
              var unitPer = [this.m/sqrt(1+sq(this.m)),-1/sqrt(1+sq(this.m))];
              var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
              var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
              ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
              ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
              //ball.v[0] *= ball.e;
              //ball.v[1] *= ball.e;
              var theta = atan(this.m);
              var aTotal = g*sin(theta);
              if (ball.right) {
                aTotal += ball.rightForce*ball.m*cos(theta);
              }
              if (ball.left) {
                aTotal -= ball.leftForce*ball.m*cos(theta);
              }
              if (ball.down) {
                aTotal += 0.05*sin(theta);
              }
              ball.a[0] = aTotal*unitRamp[0];
              ball.a[1] = aTotal*unitRamp[1];
            }
          }
        };
        passage.testCollide = function() {
          if (ball.p[0] > this.x && ball.p[0] < this.x+this.w && ball.p[1]+ball.r > this.y && ball.p[1]-ball.r < this.y+this.h || ball.p[0]+ball.r > this.x && ball.p[0]-ball.r < this.x+this.w && ball.p[1] > this.y && ball.p[1] < this.y+this.h) {
            return true;
          }
          return false;
        };
        return passage;
      };

      //From old version
      var newOldCrystal = function(x,y,s,type,theta) {
        var crystalObject = {};
        crystalObject.p = [x,y];
        crystalObject.s = s;
        crystalObject.collected = false;
        crystalObject.type = type;
        crystalObject.theta = theta;
        crystalObject.r = s/2;
        crystalObject.drawIt = function() {
          if (!this.collected) {
            push();
            translate(this.p[0]+this.r,this.p[1]+this.r);
            rotate(this.theta);
            if (this.type === 1) {
              image(crystal,-this.r,-this.r,this.s,this.s);
            } else if (this.type === 2) {
              image(crystalGroup,-this.r,-this.r,this.s,this.s);
            }
            /*if (waterLevel < this.p[1]+this.s && waterLevel > this.p[1]) {
              fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2],150);
              rect(0,waterLevel-this.p[1],this.s,this.p[1]+this.s-waterLevel);
            } else if (waterLevel < this.p[1]+this.s) {
              fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2],150);
              //rect(0,0,this.s,this.s);
              image(crystalGroupWater,0,0,this.s,this.s);
              //crystalCluster.blend(testImage,0,0,width,height,0,0,width,height,ADD);
            }*/
            pop();
            if (waterLevel > this.p[1]+this.s) {
            } else if (waterLevel > this.p[1]+this.r) {
              fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2],150);
              var waterTheta = acos((waterLevel-(this.p[1]+this.r))/this.r);
              arc(this.p[0]+this.r,waterLevel,2*this.r*sin(waterTheta)+this.r/3,2*(this.p[1]+this.s-waterLevel)+this.r/5,0,180);
            } else if (waterLevel > this.p[1]) {
              fill(groundWaterColor[0],groundWaterColor[1],groundWaterColor[2],150);
              var waterTheta = acos(((this.p[1]+this.r)-waterLevel)/this.r);
              arc(this.p[0]+this.r,this.p[1]+this.r,this.s+this.r/3,this.s+this.r/3,0,180);
              rect(this.p[0]+this.r-(this.s+this.r/3)/2,waterLevel,this.s+this.r/3,this.p[1]+this.r-waterLevel);
            } else {
              push();
              translate(this.p[0]+this.r,this.p[1]+this.r);
              rotate(this.theta);
              if (this.type === 2){
                image(crystalGroupWater,-this.r,-this.r,this.s,this.s);
              } else if (this.type === 1) {
                image(crystalWater,-this.r,-this.r,this.s,this.s);
              }
              pop();
            }
          }
          
        };
        crystalObject.interact = function() {
          if (!this.collected && sqrt(sq(ball.p[0]-(this.p[0]+this.r))+sq(ball.p[1]-(this.p[1]+this.r))) < this.r) {
            this.collected = true;
            if (this.type === 1) {
              ball.score+=50;
            } else if (this.type === 2) {
              ball.score+=150;
            }
          }
        };
        return crystalObject;
      };

      var newCrystal = function(x,y,s,type,theta,index) {
        var crystalObject = {};
        crystalObject.p = [x,y];
        crystalObject.s = s;
        crystalObject.collected = false;
        crystalObject.type = type;
        crystalObject.theta = theta;
        crystalObject.r = s/2;
        crystalObject.index = index;
        /*image(crystalGroup,0,0,500,500);
        if (type === 2) {
          crystalGroup.loadPixels();
          for (var i = 0; i < crystalGroup.pixels.length; i+=4) {
            crystalGroup.pixels[i+3] = 0;
          }
          crystalGroup.updatePixels();
        }*/
        crystalObject.updateImage = function() {
          if (timer === 0) {
            if (this.type === 2) {
              crystalImages[this.index].loadPixels();
              for (var i = 0; i < crystalImages[this.index].pixels.length; i+=4) {
                crystalImages[this.index].pixels[i+3] = 0;
              }
              crystalImages[this.index].updatePixels();
            } else if (this.type === 1) {
              singleCrystalImages[this.index].loadPixels();
              for (var i = 0; i < singleCrystalImages[this.index].pixels.length; i+=4) {
                singleCrystalImages[this.index].pixels[i+3] = 0;
              }
              singleCrystalImages[this.index].updatePixels();
            }
          } else if (this.type === 2 && waterLevel < this.p[1] + this.s*sqrt(2) && waterLevel > this.p[1]){
            if (this.theta === 0) {
              crystalImages[this.index].loadPixels();
              var start = floor(groupWidth*(waterLevel-this.p[1])/this.s)*groupWidth*4;
              var end = (floor(groupWidth*(waterLevel-this.p[1])/this.s)+10)*groupWidth*4;
              var start2 = 0;
              var end2 = crystalImages[index].pixels.length;
              for (var i = start2; i < end2; i+=4) {
                if (i > start && i < end && !(crystalImages[this.index].pixels[i] === 0 && crystalImages[this.index].pixels[i+1] === 0 && crystalImages[this.index].pixels[i+2] === 0)) {
                  crystalImages[this.index].pixels[i+3] = 255;
                }
              }
              crystalImages[this.index].updatePixels();
              //console.log(this.p[0]);
            } else {
              //console.log(crystalImages[this.index].height);
              crystalImages[this.index].loadPixels();
              var start = floor((groupWidth*sqrt(2))*(waterLevel-this.p[1]+((sqrt(2)-1)*groupWidth/2)*this.s/groupWidth)/(this.s*sqrt(2)))*(groupWidth*sqrt(2))*4;
              var end = (floor((groupWidth*sqrt(2))*(waterLevel-this.p[1]+((sqrt(2)-1)*groupWidth/2)*this.s/groupWidth)/(this.s*sqrt(2)))+10)*(groupWidth*sqrt(2))*4;
              var start2 = 0;
              var end2 = crystalImages[index].pixels.length;
              for (var i = start2; i < end2; i+=4) {
                if (i > start && i < end && !(crystalImages[this.index].pixels[i] === 0 && crystalImages[this.index].pixels[i+1] === 0 && crystalImages[this.index].pixels[i+2] === 0)) {
                  crystalImages[this.index].pixels[i+3] = 255;
                }
              }
              crystalImages[this.index].updatePixels();
              stroke(0,0,0);
              strokeWeight(4);
              //line(this.p[0]-72,this.p[1]-72,this.p[0]-72+496,this.p[1]-72);
              //console.log(this.p[0]);
              noStroke();
            }
            //console.log(frameRate());
          } else if (this.type === 1 && waterLevel < this.p[1] + this.s*sqrt(2) && waterLevel > this.p[1]){
            if (this.theta === 0) {
              singleCrystalImages[this.index].loadPixels();
              var start = floor(groupWidth*(waterLevel-this.p[1])/this.s)*groupWidth*4;
              var end = (floor(groupWidth*(waterLevel-this.p[1])/this.s)+10)*groupWidth*4;
              var start2 = 0;
              var end2 = singleCrystalImages[index].pixels.length;
              for (var i = start2; i < end2; i+=4) {
                if (i > start && i < end && !(singleCrystalImages[this.index].pixels[i] === 0 && singleCrystalImages[this.index].pixels[i+1] === 0 && singleCrystalImages[this.index].pixels[i+2] === 0)) {
                  singleCrystalImages[this.index].pixels[i+3] = 255;
                }
              }
              singleCrystalImages[this.index].updatePixels();
              //console.log(this.p[0]);
            } else {
              //console.log(singleCrystalImages[this.index].height);
              singleCrystalImages[this.index].loadPixels();
              var start = floor((groupWidth*sqrt(2))*(waterLevel-this.p[1]+((sqrt(2)-1)*groupWidth/2)*this.s/groupWidth)/(this.s*sqrt(2)))*(groupWidth*sqrt(2))*4;
              var end = (floor((groupWidth*sqrt(2))*(waterLevel-this.p[1]+((sqrt(2)-1)*groupWidth/2)*this.s/groupWidth)/(this.s*sqrt(2)))+10)*(groupWidth*sqrt(2))*4;
              var start2 = 0;
              var end2 = singleCrystalImages[index].pixels.length;
              for (var i = start2; i < end2; i+=4) {
                if (i > start && i < end && !(singleCrystalImages[this.index].pixels[i] === 0 && singleCrystalImages[this.index].pixels[i+1] === 0 && singleCrystalImages[this.index].pixels[i+2] === 0)) {
                  singleCrystalImages[this.index].pixels[i+3] = 255;
                }
              }
              singleCrystalImages[this.index].updatePixels();
              stroke(0,0,0);
              strokeWeight(4);
              //line(this.p[0]-72,this.p[1]-72,this.p[0]-72+496,this.p[1]-72);
              //console.log(this.p[0]);
              noStroke();
            }
            //console.log(frameRate());
          }
        };
        crystalObject.drawIt = function() {
          if (!this.collected) {
            push();
            translate(this.p[0]+this.r,this.p[1]+this.r);
            rotate(this.theta);
            if (this.type === 1) {
              image(crystal,-this.r,-this.r,this.s,this.s);
            } else if (this.type === 2) {
              image(crystalGroup,-this.r,-this.r,this.s,this.s);
            }
            rotate(-this.theta);
            if (this.type === 2) {
              //console.log(crystalImages[this.index]);
              if (this.theta === 0) {
                image(crystalImages[this.index],-this.r,-this.r,this.s,this.s);
              } else {
                image(crystalImages[this.index],-this.r*sqrt(2),-this.r*sqrt(2),this.s*sqrt(2),this.s*sqrt(2));
              }
            }
            if (this.type === 1) {
              //console.log(crystalImages[this.index]);
              if (this.theta === 0) {
                image(singleCrystalImages[this.index],-this.r,-this.r,this.s,this.s);
              } else {
                image(singleCrystalImages[this.index],-this.r*sqrt(2),-this.r*sqrt(2),this.s*sqrt(2),this.s*sqrt(2));
              }
            }
            pop();
          }
        };
        crystalObject.mapDrawIt = function() {
          if (!this.collected) {
            push();
            translate(this.p[0]+this.r,this.p[1]+this.r);
            rotate(this.theta);
            fill(139,79,191)
            ellipse(-this.r+this.s/2,-this.r+this.s/2,this.s,this.s);
            pop();
          }
        }
        crystalObject.interact = function() {
          if (!this.collected && sqrt(sq(ball.p[0]-(this.p[0]+this.r))+sq(ball.p[1]-(this.p[1]+this.r))) < this.r) {
            this.collected = true;
            if (this.type === 1) {
              ball.score+=50;
            } else if (this.type === 2) {
              ball.score+=150;
            }
          }
        };
        return crystalObject;
      };

      var testCircle = newCircleEnclosure(300,300,200);

      var testCircle2 = newReverseCircle(300,300,80);

      var testCapsule = newCapsuleEnclosure(250,100,500,400);

      var testCapsule2 = newReverseCapsule(300,200,400,200);

      var testPassage = newPassage(493,250,400,100,false,false,true,true);

      var myCrystal = newCrystal(500,290,70,2);

      var enclosures = [];
      var reverses = [];
      var passages = [];
      var crystals = [];
      var grid = new Array(120).fill(0).map(() => new Array(84).fill(0));
      var randomVar;
      var randomVar2;
      var randomVar3;
      var overlapGuess = 10;
      var circleR = 150;
      var pathWidth = 100;
      var nextCrystal = 0;
      var nextSingle = 0;
      var nextGroup = 0;
      var numCrystals;
      var crystalOffset = 2;
      var openings = [];
      //console.log(grid[90][20]);

      var xToIndex = function(x) {
        return floor((x+3000)/50);
      };

      var indexToX = function(index) {
        return index*50-3000;
      };

      var yToIndex = function(y) {
        return floor(y/50);
      };

      var indexToY = function(index) {
        return index*50;
      };

      var checkGrid = function(startX,startY,width,height) {
        //Returns true if this rectanglular region is empty, false if there's anything in it
        if (startY < 0 || startY+height > 4200 || startX < -3000 || startX+width > 3000) {
          return false;
        }
        startX = xToIndex(startX);
        startY = yToIndex(startY);
        width = floor(width/50);
        height = floor(height/50);
        for (var i = startX; i < startX+width; i++) {
          for (var j = startY; j < startY+height; j++) {
            if (grid[i][j] === 1) {
              return false;
            }
          }
        }
        return true;
      };

      var checkGridIndex = function(startX,startY,width,height) {
        //console.log(startX+", "+startY+", "+width+", "+height);
        //Returns true if this rectanglular region is empty, false if there's anything in it
        if (startY < 0 || startY+height >= 84 || startX < 0 || startX+width >= 120) {
          return false;
        }
        for (var i = startX; i < startX+width; i++) {
          for (var j = startY; j < startY+height; j++) {
            //console.log(i+", "+j);
            if (grid[i][j] === 1) {
              return false;
            }
          }
        }
        return true;
      };

      var setGrid = function(startX,startY,width,height) {
        //Sets this rectanglular region to full
        var tempX = xToIndex(startX);
        var tempY = yToIndex(startY);
        var tempWidth = floor(width/50);
        var tempHeight = floor(height/50);
        //console.log(tempWidth);
        for (var i = tempX; i < tempX+tempWidth; i++) {
          for (var j = tempY; j < tempY+tempHeight; j++) {
            //console.log(i+", "+j);
            grid[i][j] = 1;
          }
        }
        return true;
      };

      var generatePassage = function(x,y,w,h,left,right,up,down,cameFrom) {
        passages.push(newPassage(x,y,w,h,left,right,up,down,[]));
        numCrystals = floor(random(0,3.3));
        if (w > h) {//horizontal passage
          for (var i = 0; i < numCrystals; i++) {
            randomVar = random(45,75);//size
            randomVar2 = random(x+20,x+w-90);//x position
            randomVar3 = random(0,1);//floor or ceiling
            if (randomVar3 > 0.5) {//on the floor
              if (random(0,1) > 0.5 && nextGroup < 30) {//group
                crystals[nextCrystal] = newCrystal(randomVar2,y+h-randomVar+crystalOffset,randomVar,2,0,nextGroup);
                nextGroup++;
                nextCrystal++;
              } else if (nextSingle < 30) {//single
                crystals[nextCrystal] = newCrystal(randomVar2,y+h-randomVar+crystalOffset,randomVar,1,0,nextSingle);
                nextSingle++;
                nextCrystal++;
              }
            } else {//on the ceiling
              if (random(0,1) > 0.5 && nextGroup < 30) {//group
                crystals[nextCrystal] = newCrystal(randomVar2,y-crystalOffset,randomVar,2,180,nextGroup);
                crystalImages[nextGroup] = rotateImage(crystalGroupWater,180);
                nextGroup++;
                nextCrystal++;
              } else if (nextSingle < 30) {//single
                crystals[nextCrystal] = newCrystal(randomVar2,y-crystalOffset,randomVar,1,180,nextSingle);
                singleCrystalImages[nextSingle] = rotateImage(crystalWater,180);
                nextSingle++;
                nextCrystal++;
              }
            }
          }
        } else {//vertical passage
          for (var i = 0; i < numCrystals; i++) {
            randomVar = random(40,80);//size
            randomVar2 = random(y+20,y+h-90);//x position
            randomVar3 = random(0,1);//floor or ceiling
            if (randomVar3 > 0.5) {//on the right
              if (random(0,1) > 0.5 && nextGroup < 30) {//group
                crystals[nextCrystal] = newCrystal(x+w-randomVar+crystalOffset,randomVar2,randomVar,2,-90,nextGroup);
                crystalImages[nextGroup] = rotateImage(crystalGroupWater,-90);
                nextGroup++;
                nextCrystal++;
              } else if (nextSingle < 30) {//single
                crystals[nextCrystal] = newCrystal(x+w-randomVar+crystalOffset,randomVar2,randomVar,1,-90,nextSingle);
                singleCrystalImages[nextSingle] = rotateImage(crystalWater,-90);
                nextSingle++;
                nextCrystal++;
              }
            } else {//on the left
              if (random(0,1) > 0.5 && nextGroup < 30) {//group
                crystals[nextCrystal] = newCrystal(x-crystalOffset,randomVar2,randomVar,2,90,nextGroup);
                crystalImages[nextGroup] = rotateImage(crystalGroupWater,90);
                nextGroup++;
                nextCrystal++;
              } else if (nextSingle < 30) {//single
                crystals[nextCrystal] = newCrystal(x-crystalOffset,randomVar2,randomVar,1,90,nextSingle);
                singleCrystalImages[nextSingle] = rotateImage(crystalWater,90);
                nextSingle++;
                nextCrystal++;
              }
            }
          }
        }
        setGrid(x,y,w,h);
        randomVar = random(0,1);
        randomVar = 0.5;
        if (cameFrom === "left") {
          if (randomVar < 0.25) {
            //capsule will go here
          } else {
            //if (checkGrid(x+w-overlapGuess,y+pathWidth/2-circleR,circleR*2,circleR*2)) {
            if (checkGridIndex(xToIndex(x+w-overlapGuess)+1,yToIndex(y+pathWidth/2-circleR)-1,circleR*2/50+1,circleR*2/50+2)) {
              generateCircle(x+w-overlapGuess+circleR,y+pathWidth/2,"left");
            } else {
              passages[passages.length-1].right = true;
            }
          }
        } else if (cameFrom === "right") {
          if (randomVar < 0.25) {
            //capsule will go here
          } else {
            //if (checkGrid(x+overlapGuess-2*circleR,y+pathWidth/2-circleR,circleR*2,circleR*2)) {
            if (checkGridIndex(xToIndex(x+overlapGuess-2*circleR)-2,yToIndex(y+pathWidth/2)-1,circleR*2/50+1,circleR*2/50+2)) {
              generateCircle(x+overlapGuess-circleR,y+pathWidth/2,"right");
            } else {
              passages[passages.length-1].left = true;
            }
          }
        } else if (cameFrom == "above") {
          if (randomVar < 0.25) {
            //capsule will go here
          } else {
            //console.log(xToIndex(x+pathWidth/2-circleR)+","+(yToIndex(y+h-overlapGuess)+1)+","+floor(circleR*2/50)+","+floor(circleR*2/50));
            if (checkGridIndex(xToIndex(x+pathWidth/2-circleR)-1,yToIndex(y+h-overlapGuess)+1,floor(circleR*2/50)+2,floor(circleR*2/50)+1)) {
            //if (checkGrid(x+pathWidth/2-circleR,y+h-overlapGuess,circleR*2,circleR*2)) {	
              generateCircle(x+pathWidth/2,y+h-overlapGuess+circleR,"above");
            } else {
              passages[passages.length-1].down = true;
            }
          }
        } else if (cameFrom === "below") {
          if (randomVar < 0.25) {
            //capsule will go here
          } else {
            //console.log(x+pathWidth/2-circleR);
            //console.log(xToIndex(x+pathWidth/2-circleR)+", "+(yToIndex(y+overlapGuess-2*circleR)-1)+", "+(circleR*2/50)+", "+(circleR*2/50));
            if (checkGridIndex(xToIndex(x+pathWidth/2-circleR)-1,yToIndex(y+overlapGuess-2*circleR)-2,circleR*2/50+2,circleR*2/50+1)) {
            //if (checkGrid(x+pathWidth/2-circleR,y+overlapGuess-2*circleR,circleR*2,circleR*2)) {
              //console.log("hi");
              generateCircle(x+pathWidth/2,y+overlapGuess-circleR,"below");
            } else if (y !== 0){
              passages[passages.length-1].up = true;
            }
          }
        }
      };

      var generateCircle = function(x,y,cameFrom) {
        enclosures.push(newCircleEnclosure(x,y,circleR));
        if (random(0,1) > 0.2) {
          reverses.push(newReverseCircle(x,y,floor(circleR/150)*50));
        }
        setGrid(x-circleR,y-circleR,2*circleR,2*circleR);
        //left
        if (random(0,1) > 0.25+y*0.0002 && cameFrom !== "left") {
          var i = xToIndex(x-circleR)-1;
          var yLevel = yToIndex(y-pathWidth/2);
          //console.log(grid[i][yLevel]);
          while (i > 0 && i < 120 && i > xToIndex(x-circleR)-15 && grid[i][yLevel] === 0 && grid[i][yLevel+1] === 0) {
            i--;
          }
          if (i < xToIndex(x-circleR)-3) {
            i = floor(i,random(xToIndex(x-circleR)-3));
            generatePassage(indexToX(i+2)-overlapGuess,y-pathWidth/2,x-circleR-indexToX(i+2)+2*overlapGuess,pathWidth,false,false,true,true,"right");
          }
        }
        //right
        if (random(0,1) > 0.25+y*0.0002 && cameFrom !== "right") {
          var i = xToIndex(x+circleR)+1;
          var yLevel = yToIndex(y-pathWidth/2);
          //console.log(grid[i][yLevel]);
          while (i > 0 && i < 120 && i < xToIndex(x+circleR)+15 && grid[i][yLevel] === 0 && grid[i][yLevel+1] === 0) {
            i++;
          }
          if (i > xToIndex(x+circleR)+3) {
            i = ceil(random(xToIndex(x+circleR)+3,i));
            generatePassage(x+circleR-overlapGuess,y-pathWidth/2,indexToX(i-2)-(x+circleR)+2*overlapGuess,pathWidth,false,false,true,true,"left");
          }
        }
        //below
        if (random(0,1) > 0.2+y*0.0002 && cameFrom !== "below") {
          var i = yToIndex(y+circleR)+1;
          var xLevel = xToIndex(x-pathWidth/2);
          //console.log(grid[i][yLevel]);
          while (i > 0 && i < 84 && i < yToIndex(y+circleR)+10 && grid[xLevel][i] === 0 && grid[xLevel+1][i] === 0) {
            i++;
          }
          if (i > yToIndex(y+circleR)+3) {
            i = ceil(random(yToIndex(y+circleR)+3,i));
            //console.log((x-pathWidth/2)+","+(y+circleR-overlapGuess)+","+pathWidth+","+(indexToY(i-1)-(y+circleR)+2*overlapGuess));
            generatePassage(x-pathWidth/2,y+circleR-overlapGuess,pathWidth,indexToY(i-2)-(y+circleR)+2*overlapGuess,true,true,false,false,"above");
          }
        }
        //above
        if (random(0,1) > 0.3+y*0.0002 && cameFrom !== "above") {
          var i = yToIndex(y-circleR)-1;
          var xLevel = xToIndex(x-pathWidth/2);
          //console.log(grid[i][yLevel]);
          while (i > 0 && i < 84 && i > yToIndex(y-circleR)-10 && grid[xLevel][i] === 0 && grid[xLevel+1][i] === 0) {
            i--;
          }
          if (i < yToIndex(y-circleR)-3) {
            if (i == 0) {
              generatePassage(x-pathWidth/2,0,pathWidth,y-circleR+overlapGuess,true,true,false,false,"below");
              openings.push([x-pathWidth/2,x+pathWidth/2]);
            } else {
              i = floor(i,random(yToIndex(y-circleR)-3));
              //console.log((x-pathWidth/2)+","+(y+circleR-overlapGuess)+","+pathWidth+","+(indexToY(i-1)-(y+circleR)+2*overlapGuess));
              //generatePassage(x-pathWidth/2,y+circleR-overlapGuess,pathWidth,indexToY(i-1)-(y+circleR)+2*overlapGuess,true,true,false,false,"above");
              generatePassage(x-pathWidth/2,indexToY(i+2)-overlapGuess,pathWidth,y-circleR-indexToY(i+2)+2*overlapGuess,true,true,false,false,"below");
            }
          }
        }
      };

      
      var randomGen;
  
      p.setup = () => {
          p.createCanvas(600,600);
          noFill();
          noStroke();
          background(2, 130, 194); //pick a color
          randomGen = getItem("randomGen");
          if (randomGen == null) {
            randomGen = false;
          }
          ranGen.on = randomGen;
          
          if (randomGen) {
            openings.push([0,pathWidth]);
            generatePassage(0,0,pathWidth,400,true,true,false,false,"above");
          } else {
            //All rotated crystals need their images replaced. Must be in setup, since createImage is used in rotateImage and createImage is a setup thing.
            crystalImages[0] = rotateImage(crystalGroupWater,-110);
            crystalImages[1] = rotateImage(crystalGroupWater,-30);
            crystalImages[2] = rotateImage(crystalGroupWater,112);
            crystalImages[3] = rotateImage(crystalGroupWater,180);
            crystalImages[6] = rotateImage(crystalGroupWater,50);
            crystalImages[7] = rotateImage(crystalGroupWater,172);
            crystalImages[8] = rotateImage(crystalGroupWater,-10);
            crystalImages[9] = rotateImage(crystalGroupWater,-90);
            crystalImages[10] = rotateImage(crystalGroupWater,90);
            crystalImages[11] = rotateImage(crystalGroupWater,-90);
            crystalImages[13] = rotateImage(crystalGroupWater,40);
            crystalImages[14] = rotateImage(crystalGroupWater,-25);
            crystalImages[15] = rotateImage(crystalGroupWater,-150);
            crystalImages[16] = rotateImage(crystalGroupWater,-100);
            crystalImages[17] = rotateImage(crystalGroupWater,-20);
            crystalImages[18] = rotateImage(crystalGroupWater,-90);
            crystalImages[19] = rotateImage(crystalGroupWater,28);
            crystalImages[20] = rotateImage(crystalGroupWater,-150);
            crystalImages[22] = rotateImage(crystalGroupWater,-90);
            
            singleCrystalImages[1] = rotateImage(crystalWater,30);
            singleCrystalImages[4] = rotateImage(crystalWater,-180);
            singleCrystalImages[6] = rotateImage(crystalWater,180);
            singleCrystalImages[8] = rotateImage(crystalWater,-70);
            
            enclosures = [newCircleEnclosure(75,510+100,230),newCircleEnclosure(75,1530+100,230),newCircleEnclosure(75,2630+100,230),
              newCapsuleEnclosure(-500,3430+100,1000,450),newCircleEnclosure(-1600,3655+100,130),newCapsuleEnclosure(-2000,2030+100,800,600),
              newCircleEnclosure(-2460,1050+100,180),newCircleEnclosure(-2460,3390+100,180),newCircleEnclosure(1685,3655+100,200),
              newCapsuleEnclosure(1095,2207+100,1180,590),newCircleEnclosure(480,2502+100,150),newCapsuleEnclosure(405,2950+100,900,370),
              newCapsuleEnclosure(1050,1156+100,1270,662),newCircleEnclosure(1685,750+100,150),newCircleEnclosure(1685,250+100,150),
              newCircleEnclosure(500,750+100,150),newCircleEnclosure(500,250+100,150)];
            reverses = [newReverseCircle(75,510+100,100),newReverseCircle(75,1530+100,100),newReverseCircle(75,2630+100,100),
              newReverseCapsule(-250,3542+100,500,225),newReverseCapsule(-1825,2205+100,450,250),newReverseCircle(-2460,1050+100,80),
              newReverseCircle(1685,3655+100,100),newReverseCapsule(1360,2402+100,650,200),newReverseCapsule(1368,1322+100,634,332),
              newReverseCircle(1685,750+100,60),newReverseCircle(1685,250+100,60),newReverseCircle(500,750+100,60),
              newReverseCircle(500,250+100,60)];
            passages = [newPassage(0,-100+100,150,400,true,true,false,false,[]),newPassage(0,720+100,150,600,true,true,false,false,[]),
              newPassage(0,1740+100,150,680,true,true,false,false,[['l', 2280+100, 2380+100]]),newPassage(0,2840+100,150,600,true,true,false,false,[['l',3100+100,3250+100]]),
              newPassage(-1500,3580+100,790,150,false,false,true,true,[]),newPassage(-1650,2600+100,100,960,true,true,false,false,[['r',3100+100,3250+100]]),
              newPassage(-1550,3100+100,1550,150,false,false,true,true,[]),newPassage(-920,2280+100,920,100,false,false,true,true,[]),
              newPassage(-1650,1000+100,100,1030,true,true,true,false,[['l',1000+100,1100+100]]),newPassage(-2300,1000+100,650,100,false,false,true,true,[]),
              newPassage(-2510,1220+100,100,2000,true,true,false,false,[]),newPassage(711,3580+100,790,150,false,false,true,true,[]),
              newPassage(1610,2785+100,150,685,true,true,false,false,[]),newPassage(610,2427+100,200,150,false,false,true,true,[]),
              newPassage(405,2632+100,150,320,true,true,false,false,[]),newPassage(1105,2780+100,150,170,true,true,false,false,[]),
              newPassage(1610,1818+100,150,406,true,true,false,false,[]),newPassage(1610,879+100,150,276,true,true,false,false,[]),
              newPassage(1610,380+100,150,240,true,true,false,false,[]),newPassage(1610,-100+100,150,220,true,true,false,false,[]),
              newPassage(1815,675+100,936,150,false,false,true,true,[]),newPassage(2751,675+100,150,4000,true,true,true,true,[['l',675+100,825+100]]),
              newPassage(630,675+100,925,150,false,false,true,true,[]),newPassage(425,-100+100,150,220,true,true,false,false,[]),
              newPassage(425,380+100,150,240,true,true,false,false,[])];
            crystals = [newCrystal(230,400+100,60,2,-110,0),newCrystal(-30,1390+100,70,2,-30,1),newCrystal(160,1550+100,50,2,112,2),
              newCrystal(123,2000+100,70,1,0,0),newCrystal(120,2500+100,50,1,30,1),newCrystal(50,2730+100,55,2,180,3),
              newCrystal(440,3800+100,80,2,0,4),newCrystal(-200,3485+100,60,2,0,5),newCrystal(-1590,3700+100,80,1,0,2),
              newCrystal(-1000,3180+100,70,1,0,3),newCrystal(-2225,2475+100,80,2,50,6),newCrystal(-2550,875+100,65,2,172,7),newCrystal(-2400,1160+100,50,2,-10,8),
              newCrystal(-2470,1760+100,60,2,-90,9),newCrystal(-2510,2260+100,50,2,90,10),newCrystal(-2465,2760+100,55,2,-90,11),
              newCrystal(-2490,3490+100,80,2,0,12),newCrystal(-2580,3490+100,50,2,40,13),newCrystal(-2400,3480+100,60,2,-25,14),
              newCrystal(-2445,3215+100,70,2,-150,15),newCrystal(-2615,3245+100,70,1,-180,4),newCrystal(-2340,3310+100,55,2,-100,16),
              newCrystal(1735,3790+100,48,2,-20,17),newCrystal(1695,3090+100,70,2,-90,18),newCrystal(980,2712+100,75,2,28,19),
              newCrystal(2255,2720+100,80,1,0,5),newCrystal(2325,2215+100,60,2,-150,20),newCrystal(350,2375+100,70,1,180,6),
              newCrystal(800,3262+100,60,2,0,21),newCrystal(580,790+100,65,1,0,7),newCrystal(520,500+100,60,2,-90,22),newCrystal(1755,250+100,70,1,-70,8)];
          
            openings = [[0,150],[425,425+150],[1610,1610+150]];
          }

          var state = "menu";
          var inAnOpening = false;

          var game = function() {
            angleMode(DEGREES);
            if (timer === 0) {
              startMin = minute();
              startSec = second();
            }
            cutOut(mapCover,floor((-xTranslate+3000)/10),floor((-yTranslate)/10),60,60);
            //Put code here
            push();
            translate(xTranslate,yTranslate);
            background(130, 214, 237);
            fill(99, 56, 35);
            rect(-6000,0,20000,20000);
            fill(91, 201, 94);
            rect(-6000,-10,20000,10);
            fill(130, 214, 237);
            for (var i = 0; i < openings.length; i++) {
              rect(openings[i][0],-10,openings[i][1]-openings[i][0],11);
            }
            //rect(0,-10,pathWidth,11);
            //rect(1610,0,150,11);
            //rect(425,0,150,11);
            for (var i = 0; i < enclosures.length; i++) {
              enclosures[i].drawIt();
            }
            for (var i = 0; i < passages.length; i++) {
              passages[i].drawIt();
            }
            for (var i = 0; i < reverses.length; i++) {
              reverses[i].drawIt();
            }
            for (var i = 0; i < crystals.length; i++) {
              crystals[i].updateImage();
            }
            ball.drawIt(255);
            if (yTranslate > -500) {
              image(darkness2,-xTranslate,-100,1200,1500);
            } else if (ball.fullySubmerged) {
              image(waterDarkness, -xTranslate,-yTranslate,600,600);
            } else {
              image(darkness,ball.p[0]-600,ball.p[1]-600,1200,1200);
            }
            for (var i = 0; i < crystals.length; i++) {
              crystals[i].drawIt();
            }
            ball.drawIt(15);
            
            /*fill(130,214,237);
            rect(-5000,-1000,20000,900);
            fill(91, 201, 94);
            rect(-5000,-110,20000,10);
            fill(130, 214, 237);
            rect(250,-111,100,11);*/
            
            
            //Lighting
            /**var lightRadius = 100;
            var leftX = ball.p[0]-lightRadius;
            var upperY = ball.p[1]-lightRadius;
            var rightX = ball.p[0]+lightRadius;
            var lowerY = ball.p[1]+lightRadius;
            
            fill(0,0,0,150);
            rect(0,0,10000,upperY);
            rect(0,upperY,leftX,10000);
            rect(rightX,upperY,10000,lightRadius*2);
            rect(leftX,lowerY,10000,10000);
            
            //stroke(0,0,0,150);
            //strokeWeight(1);
            for (var i = 0; i < lightRadius; i++) {
              for (var j = 0; j < lightRadius; j++) {
                if (sqrt(sq(i-lightRadius)+sq(j-lightRadius)) > lightRadius) {
                  point(i+leftX,j+upperY);
                  point(rightX-i,j+upperY);
                  point(rightX-i,lowerY-j);
                  point(i+leftX,lowerY-j);
                  rect(i+leftX,j+upperY,1,1);
                  rect(rightX-i,j+upperY,1,1);
                  rect(rightX-i,lowerY-j,1,1);
                  rect(i+leftX,lowerY-j,1,1);
                }
              }
            }
            noStroke();**/
            
            if (ball.p[1] + ball.r/2 > waterLevel && ball.p[1] > -100) {
              ball.inWater = true;
              g = -0.1633;
            } else {
              ball.inWater = false;
              g = 0.1633;
              ball.rightForce = 0.05;
              ball.leftForce = 0.05;
            }
            
            ball.inAirMove();
            
            ball.resting = false;
            ball.restingBottom = false;
            ball.restingTop = false;
            ball.inPassage = false;
            for (var i = 0; i < passages.length; i++) {
              passages[i].collide();
            }
            inAnOpening = false;
            for (var i = 0; i < openings.length; i++) {
              if (ball.p[0] > openings[i][0]+20 && ball.p[0] < openings[i][1]-20) {
                inAnOpening = true;
              }
            }
            if (!ball.inPassage) {
              for (var i = 0; i < enclosures.length; i++) {
                enclosures[i].collide();
              }
              for (var i = 0; i < reverses.length; i++) {
                reverses[i].collide();
              }
              if (ball.p[1]+ball.r >= -10 && ball.p[1]+ball.r < 30 && !inAnOpening) {//bouncing off floor
                ball.restingBottom = true;
                this.m = 0;
                this.b = -100;
                var unitRamp = [1/sqrt(1+sq(this.m)),this.m/sqrt(1+sq(this.m))];
                var unitPer = [this.m/sqrt(1+sq(this.m)),-1/sqrt(1+sq(this.m))];
                var parallelVelocity = ball.e2*(ball.v[0] * unitRamp[0] + ball.v[1] * unitRamp[1]);
                var perpendicularVelocity = -ball.e*sqrt(sq(ball.v[0])+sq(ball.v[1])-sq(parallelVelocity));
                ball.v[0] = parallelVelocity*unitRamp[0] - perpendicularVelocity*unitRamp[1];
                ball.v[1] = parallelVelocity*unitRamp[1] + perpendicularVelocity*unitRamp[0];
                var theta = atan(this.m);
                var aTotal = 0.1633*sin(theta);
                if (ball.right) {
                  aTotal += ball.rightForce*ball.m*cos(theta);
                }
                if (ball.left) {
                  aTotal -= ball.leftForce*ball.m*cos(theta);
                }
                ball.a[0] = aTotal*unitRamp[0];
                ball.a[1] = aTotal*unitRamp[1];
              }
            }
            if (!ball.inWater && ball.restingBottom) {
              ball.resting = true;
            }
            if (ball.inWater && ball.restingTop) {
              ball.resting = true;
            }
            ball.move();
            
            for (var i = 0; i < crystals.length; i++) {
              crystals[i].interact();
            }
            
            xTranslate += xTranslateShifter;
            yTranslate += yTranslateShifter;
            if (ball.p[0] > width-50-xTranslate) {
              xTranslateShifter = -abs(ceil(ball.v[0]));
            } else if (ball.p[0] < 50-xTranslate) {
              xTranslateShifter = abs(floor(ball.v[0]));
            } else if (xTranslateShifter > 0) {
              xTranslateShifter *= 0.5;
            } else if (xTranslateShifter < 0) {
              xTranslateShifter *= 0.5;
            }
            
            if (ball.p[1] > height-50-yTranslate) {
              yTranslateShifter = -abs(ceil(ball.v[1]));
            } else if (ball.p[1] < 50-yTranslate) {
              yTranslateShifter = abs(floor(ball.v[1]));
            } else if (yTranslateShifter > 0) {
              yTranslateShifter *= 0.7;
            } else if (yTranslateShifter < 0) {
              yTranslateShifter *= 0.7;
            }

            pop();
            
            if (waterLevel > 0) {
              waterLevel --;
            }
            //console.log(ball.p[1]);
            
            timer++;
            
            //console.log(ball.p[1]);
              
            fill(255);
            textSize(20);
            text('Score: '+ball.score,270,550);
            //console.log("Still playing");
            
            if (ball.p[1] < -20) {
              //console.log("Done!");
              //noLoop();
              state = "over";
              timer = 0;
              endMin = minute();
              endSec = second();
              totalMin = (endMin - startMin + 60) % 60;
              totalSec = (endSec - startSec + 60) % 60;
              if (endSec < startSec) {
                totalMin--;
              }
              //Doesn't work around midnight
            }
            
            if (mapsLeft > 0) {
              toMap.update();
              image(mapImage,510,15,75,58);
              fill(255,255,255);
              textSize(25);
              text("x"+mapsLeft,557,75);
              if (toMap.pressed) {
                state = "map";
                mapsLeft--;
              }
            } else {
              image(greyMap,510,15,75,58);
            }

            keyIsReleased = false;
            if (timer % 10 === 0) {
              //console.log(sqrt(sq(ball.v[0])+sq(ball.v[1])));
            }
            //mouseIsClicked = false;
          };

          var gameOver = function() {
            //fill(255,255,255,1);
            fill(255,255,255,timer/2);
            rect(0,0,width,height);
            fill(3, 219, 252);
            textSize(20);
            text("Score: "+ball.score,270,320);
            text("Time: "+totalMin+" minutes and "+totalSec+" seconds",150,350);
            timer++;
          };

          var drawMap = function() {
            background(0,0,0);
            fill(214, 200, 178);
            rect(0,44,600,512);
            push();
            scale(0.1);
            //translate(2850,540);
            translate(2850,440);
            for (var i = 0; i < enclosures.length; i++) {
              enclosures[i].drawIt();
            }
            for (var i = 0; i < passages.length; i++) {
              passages[i].drawIt();
            }
            for (var i = 0; i < reverses.length; i++) {
              reverses[i].drawIt();
            }
            for (var i = 0; i < crystals.length; i++) {
              crystals[i].drawIt();
            }
            ball.mapDrawIt();
            pop();
            backMap.drawIt();
            backMap.update();
            image(mapCover,0,44,600,512);
            if (backMap.pressed) {
              state = "play";
            }
          };

          var drawMenu = function() {
            image(menu,0,0,600,600);
            play.update();
              how.update();
              play.drawIt();
              how.drawIt();
              settingsButton.update();
              if (settingsButton.hover) {
                image(settingsHover,530,530,50,50);
              } else {
                image(settings,530,530,50,50);
              }
              if (play.pressed) {
                state = "play";
              }
              if (how.pressed) {
                state = "how";
              }
              if (settingsButton.pressed) {
                state = "settings";
              }
          };

          var drawClump = function(x, y) {
              fill(82, 35, 12);
              ellipse(336+x, 251+y, 102, 41);
              ellipse(346+x, 264+y, 73, 37);
              fill(112, 42, 14);
              ellipse(335+x, 245+y, 40, 30);
              triangle(315+x, 245+y, 355+x, 245+y, 335+x, 123+y);
              fill(115, 59, 31);
              ellipse(361+x, 258+y, 60, 40);
              triangle(331+x, 258+y, 391+x, 258+y, 361+x, 176+y);
              drawMushroom(326+x, 240+y, 1);
              drawMushroom(346+x, 259+y, 0.7);
          };

          var drawMushroom = function(x, y, s) {
              fill(135, 255, 161);
              rect(x, y, 15*s, 25*s, 5);
              arc(x+7.5*s, y + 5*s, 30*s, 30*s, 180, 360);
          };

          var drawHow = function() {
              background(51, 22, 7);
              /*push();
              scale(1.5);
              fill(15, 92, 140);
              rect(0, 352, 400, 145);
              drawClump(0, 109);*/
              image(help,0,0,600,600);
              fill(135, 255, 161);
              textSize(32);
              text("Move with the arrow keys. When in water, use the down arrow key to stop yourself from floating. Find crystals for extra points. While you're submerged in water, your torch is extinguished. Use the map to check where you are. It will fill in as you explore the caves.", 31, 32, 500, 500);
              
              backHow.drawIt();
              backHow.update();
              
              if (backHow.pressed) {
                  state = "menu";
              }
          };

          var drawSettings = function() {
            image(help,0,0,600,600);
              fill(135, 255, 161);
              textSize(32);
              text("Settings",240,45);
              textSize(18);
              //text("Reload for changes to take effect",200,450);
              fill(255,255,255);
              textSize(25);
              text("Randomly generated map",50,100);
              
              backSettings.drawIt();
              backSettings.update();
              
              ranGen.drawIt();
              ranGen.update();
              if (ranGen.pressed) {
                //TODO: figure cookies
              //if (typeof okayedCookie == 'undefined' || okayedCookie != "true") {
                //alert("Please accept the use of cookies to use this feature.");
                //ranGen.on = !ranGen.on;
              //} else {
                randomGen = !randomGen;
                  storeItem("randomGen",randomGen);
              //}
              }
              
              if (backSettings.pressed) {
                window.location.reload(); 
              }
          };

          p.draw = () => {
            pmouseX = p.pmouseX;
            pmouseY = p.pmouseY;
            mouseX = p.mouseX;
            mouseY = p.mouseY;
            mouseIsPressed = p.mouseIsPressed;
            keyCode = p.keyCode;
            if (state === "menu") {
              drawMenu();
            } else if (state === "how") {
              drawHow();
            } else if (state === "play") {
              game();
            } else if (state === "over") {
              gameOver();
            } else if (state === "map") {
              drawMap();
            } else if (state === "settings") {
              drawSettings();
            }
            if (onAButton) {
              cursor(HAND);
            } else {
              cursor(ARROW);
            }
            fill(0,0,0);
            textSize(30);
            //text(randomGen,50,50);
            onAButton = false;
            mouseIsClicked = false;
            console.log(mouseX,mouseY);
          }
      }
    }
  
    componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {
      return (
        <Paper ref={this.myRef} className="canvas600"></Paper>
      )
    }
  }

  export default CaveFloodCanvas;
  