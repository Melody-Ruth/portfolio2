import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import p5 from "p5";
import tinyCrystal from "../graphics/currently_using/tiny_crystal.png";

class TestCanvas extends React.Component {
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


        /*
        for (var qrz1 = 0; qrz1 < img.width; qrz1++) {
          for (var qrz2 = 0; qrz2 < img.height; qrz2++) {
            //console.log(qrz2 * img.width + qrz1, img.pixels.length);
            if (4*(qrz2 * img.width + qrz1) > img.pixels.length) {
              console.log("WHat????");
            }
            img2.pixels[4 * (qrz2 * img.width + qrz1)] = img.pixels[4 * (qrz2 * img.width + qrz1)];
          }
          
        }
        img2.updatePixels();
        return img2;*/
        /*for (var i = 0; i < fullWidth; i++) {
          for (var j = 0; j < fullHeight; j++) {
            img2.set(i,j,color(255,0,0,150));
          }
        }
        img2.updatePixels();
        return img2;*/


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
        }/*
        for (var i = 3; i < img2.pixels.length; i+=4) {
          img2.pixels[i] = 255;
        }*/
        //img.updatePixels();
        img2.updatePixels();
        console.log("Rotated!");
        return img2;
      };

      var testImg;

      p.preload = () => {
        testImg = loadImage(tinyCrystal);
      }

      var prepImgs = function() {
        //console.log("Prepping!");
        //crystalImages[0] = rotateImage(crystalGroupWater,-110);
        img2 = createImage(testImg.width,testImg.height);
        img2.loadPixels();
        for (var i = 0; i < img2.pixels.length; i++) {
            img2.pixels[i] = 0;
        }
        img2.updatePixels();
      };

      p.setup = () => {
        p.createCanvas(600,600);
        noFill();
        noStroke();
        background(2, 130, 194); //pick a color
        //All rotated crystals need their images replaced. Must be in setup, since createImage is used in rotateImage and createImage is a setup thing.
        prepImgs();
      };

      var timer = 0;
      var oldReds = [];
      var img2;
      p.draw = () => {
        background(200,200,200);
        image(img2,50,100,60,60);
        if (timer === 100) {
            /*testImg.loadPixels();
            for (var i = 0; i < testImg.pixels.length; i+=4) {
                testImg.pixels[i+3] = 150;
            }
            testImg.updatePixels();
            testImg.loadPixels();
            console.log(testImg.get(15,15));*/
        } else if (timer === 200) {
            testImg.loadPixels();
            for (var i = 0; i < testImg.pixels.length; i+=4) {
                /*oldReds.push(testImg.pixels[i]);
                oldReds.push(testImg.pixels[i+1]);
                oldReds.push(testImg.pixels[i+2]);
                oldReds.push(testImg.pixels[i+3]);*/
                testImg.pixels[i] = 207;
                testImg.pixels[i+1] = 3;
                testImg.pixels[i+2] = 3;
                testImg.pixels[i+3] = 20;
            }
            testImg.updatePixels();
            //console.log(oldReds);
            /*testImg.loadPixels();
            for (var i = 0; i < testImg.pixels.length; i++) {
                //console.log(oldReds[i/4],testImg.pixels[i]);
                testImg.pixels[i] = oldReds[i];
            }
            testImg.updatePixels();*/
            testImg.loadPixels();
            console.log(testImg.get(15,15));
        } else if (timer === 300) {
            /*testImg.loadPixels();
            for (var i = 0; i < testImg.pixels.length; i+=4) {
                testImg.pixels[i+3] = 1;
            }
            testImg.updatePixels();
            testImg.loadPixels();
            console.log(testImg.get(15,15));*/
            testImg.loadPixels();
            img2.loadPixels();
            for (var i = 0; i < img2.pixels.length; i++) {
                img2.pixels[i] = testImg.pixels[i];
            }
            img2.updatePixels();
        } else if (timer === 400) {
            testImg.loadPixels();
            for (var i = 0; i < testImg.pixels.length; i+=4) {
                testImg.pixels[i+3] = 255;
            }
            testImg.updatePixels();
        }
        timer++;
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

  export default TestCanvas;
  