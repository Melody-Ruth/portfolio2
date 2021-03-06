import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import p5 from "p5";

class StarToursCanvas2 extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (p) => {
        p.setup = () => {
            p.angleMode(p.DEGREES);
            p.createCanvas(400,400);
            p.noStroke()
        }

        var remove=function(){return p.remove.apply(p,arguments);},setup=function(){return p.setup.apply(p,arguments);},cursor=function(){return p.cursor.apply(p,arguments);},frameRate=function(){return p.frameRate.apply(p,arguments);},getFrameRate=function(){return p.getFrameRate.apply(p,arguments);},setFrameRate=function(){return p.setFrameRate.apply(p,arguments);},noCursor=function(){return p.noCursor.apply(p,arguments);},fullscreen=function(){return p.fullscreen.apply(p,arguments);},pixelDensity=function(){return p.pixelDensity.apply(p,arguments);},displayDensity=function(){return p.displayDensity.apply(p,arguments);},getURL=function(){return p.getURL.apply(p,arguments);},getURLPath=function(){return p.getURLPath.apply(p,arguments);},getURLParams=function(){return p.getURLParams.apply(p,arguments);},pushStyle=function(){return p.pushStyle.apply(p,arguments);},popStyle=function(){return p.popStyle.apply(p,arguments);},pop=function(){return p.pop.apply(p,arguments);},push=function(){return p.push.apply(p,arguments);},registerPromisePreload=function(){return p.registerPromisePreload.apply(p,arguments);},camera=function(){return p.camera.apply(p,arguments);},perspective=function(){return p.perspective.apply(p,arguments);},ortho=function(){return p.ortho.apply(p,arguments);},frustum=function(){return p.frustum.apply(p,arguments);},createCamera=function(){return p.createCamera.apply(p,arguments);},setCamera=function(){return p.setCamera.apply(p,arguments);},setAttributes=function(){return p.setAttributes.apply(p,arguments);},createCanvas=function(){return p.createCanvas.apply(p,arguments);},resizeCanvas=function(){return p.resizeCanvas.apply(p,arguments);},noCanvas=function(){return p.noCanvas.apply(p,arguments);},createGraphics=function(){return p.createGraphics.apply(p,arguments);},blendMode=function(){return p.blendMode.apply(p,arguments);},noLoop=function(){return p.noLoop.apply(p,arguments);},loop=function(){return p.loop.apply(p,arguments);},isLooping=function(){return p.isLooping.apply(p,arguments);},push=function(){return p.push.apply(p,arguments);},pop=function(){return p.pop.apply(p,arguments);},redraw=function(){return p.redraw.apply(p,arguments);},applyMatrix=function(){return p.applyMatrix.apply(p,arguments);},resetMatrix=function(){return p.resetMatrix.apply(p,arguments);},rotate=function(){return p.rotate.apply(p,arguments);},rotateX=function(){return p.rotateX.apply(p,arguments);},rotateY=function(){return p.rotateY.apply(p,arguments);},rotateZ=function(){return p.rotateZ.apply(p,arguments);},scale=function(){return p.scale.apply(p,arguments);},shearX=function(){return p.shearX.apply(p,arguments);},shearY=function(){return p.shearY.apply(p,arguments);},translate=function(){return p.translate.apply(p,arguments);},arc=function(){return p.arc.apply(p,arguments);},ellipse=function(){return p.ellipse.apply(p,arguments);},circle=function(){return p.circle.apply(p,arguments);},line=function(){return p.line.apply(p,arguments);},point=function(){return p.point.apply(p,arguments);},quad=function(){return p.quad.apply(p,arguments);},rect=function(){return p.rect.apply(p,arguments);},square=function(){return p.square.apply(p,arguments);},triangle=function(){return p.triangle.apply(p,arguments);},ellipseMode=function(){return p.ellipseMode.apply(p,arguments);},noSmooth=function(){return p.noSmooth.apply(p,arguments);},rectMode=function(){return p.rectMode.apply(p,arguments);},smooth=function(){return p.smooth.apply(p,arguments);},strokeCap=function(){return p.strokeCap.apply(p,arguments);},strokeJoin=function(){return p.strokeJoin.apply(p,arguments);},strokeWeight=function(){return p.strokeWeight.apply(p,arguments);},bezier=function(){return p.bezier.apply(p,arguments);},bezierDetail=function(){return p.bezierDetail.apply(p,arguments);},bezierPoint=function(){return p.bezierPoint.apply(p,arguments);},bezierTangent=function(){return p.bezierTangent.apply(p,arguments);},curve=function(){return p.curve.apply(p,arguments);},curveDetail=function(){return p.curveDetail.apply(p,arguments);},curveTightness=function(){return p.curveTightness.apply(p,arguments);},curvePoint=function(){return p.curvePoint.apply(p,arguments);},curveTangent=function(){return p.curveTangent.apply(p,arguments);},beginContour=function(){return p.beginContour.apply(p,arguments);},beginShape=function(){return p.beginShape.apply(p,arguments);},bezierVertex=function(){return p.bezierVertex.apply(p,arguments);},curveVertex=function(){return p.curveVertex.apply(p,arguments);},endContour=function(){return p.endContour.apply(p,arguments);},endShape=function(){return p.endShape.apply(p,arguments);},quadraticVertex=function(){return p.quadraticVertex.apply(p,arguments);},vertex=function(){return p.vertex.apply(p,arguments);},textOutput=function(){return p.textOutput.apply(p,arguments);},gridOutput=function(){return p.gridOutput.apply(p,arguments);},alpha=function(){return p.alpha.apply(p,arguments);},blue=function(){return p.blue.apply(p,arguments);},brightness=function(){return p.brightness.apply(p,arguments);},color=function(){return p.color.apply(p,arguments);},green=function(){return p.green.apply(p,arguments);},hue=function(){return p.hue.apply(p,arguments);},lerpColor=function(){return p.lerpColor.apply(p,arguments);},lightness=function(){return p.lightness.apply(p,arguments);},red=function(){return p.red.apply(p,arguments);},saturation=function(){return p.saturation.apply(p,arguments);},background=function(){return p.background.apply(p,arguments);},clear=function(){return p.clear.apply(p,arguments);},colorMode=function(){return p.colorMode.apply(p,arguments);},fill=function(){return p.fill.apply(p,arguments);},noFill=function(){return p.noFill.apply(p,arguments);},noStroke=function(){return p.noStroke.apply(p,arguments);},stroke=function(){return p.stroke.apply(p,arguments);},erase=function(){return p.erase.apply(p,arguments);},noErase=function(){return p.noErase.apply(p,arguments);},createStringDict=function(){return p.createStringDict.apply(p,arguments);},createNumberDict=function(){return p.createNumberDict.apply(p,arguments);},storeItem=function(){return p.storeItem.apply(p,arguments);},getItem=function(){return p.getItem.apply(p,arguments);},clearStorage=function(){return p.clearStorage.apply(p,arguments);},removeItem=function(){return p.removeItem.apply(p,arguments);},select=function(){return p.select.apply(p,arguments);},selectAll=function(){return p.selectAll.apply(p,arguments);},removeElements=function(){return p.removeElements.apply(p,arguments);},createDiv=function(){return p.createDiv.apply(p,arguments);},createP=function(){return p.createP.apply(p,arguments);},createSpan=function(){return p.createSpan.apply(p,arguments);},createImg=function(){return p.createImg.apply(p,arguments);},createA=function(){return p.createA.apply(p,arguments);},createSlider=function(){return p.createSlider.apply(p,arguments);},createButton=function(){return p.createButton.apply(p,arguments);},createCheckbox=function(){return p.createCheckbox.apply(p,arguments);},createSelect=function(){return p.createSelect.apply(p,arguments);},createRadio=function(){return p.createRadio.apply(p,arguments);},createColorPicker=function(){return p.createColorPicker.apply(p,arguments);},createInput=function(){return p.createInput.apply(p,arguments);},createFileInput=function(){return p.createFileInput.apply(p,arguments);},createVideo=function(){return p.createVideo.apply(p,arguments);},createAudio=function(){return p.createAudio.apply(p,arguments);},createCapture=function(){return p.createCapture.apply(p,arguments);},createElement=function(){return p.createElement.apply(p,arguments);},describe=function(){return p.describe.apply(p,arguments);},describeElement=function(){return p.describeElement.apply(p,arguments);},setMoveThreshold=function(){return p.setMoveThreshold.apply(p,arguments);},setShakeThreshold=function(){return p.setShakeThreshold.apply(p,arguments);},keyIsDown=function(){return p.keyIsDown.apply(p,arguments);},requestPointerLock=function(){return p.requestPointerLock.apply(p,arguments);},exitPointerLock=function(){return p.exitPointerLock.apply(p,arguments);},createImage=function(){return p.createImage.apply(p,arguments);},saveCanvas=function(){return p.saveCanvas.apply(p,arguments);},saveGif=function(){return p.saveGif.apply(p,arguments);},saveFrames=function(){return p.saveFrames.apply(p,arguments);},loadImage=function(){return p.loadImage.apply(p,arguments);},image=function(){return p.image.apply(p,arguments);},tint=function(){return p.tint.apply(p,arguments);},noTint=function(){return p.noTint.apply(p,arguments);},imageMode=function(){return p.imageMode.apply(p,arguments);},blend=function(){return p.blend.apply(p,arguments);},copy=function(){return p.copy.apply(p,arguments);},filter=function(){return p.filter.apply(p,arguments);},get=function(){return p.get.apply(p,arguments);},loadPixels=function(){return p.loadPixels.apply(p,arguments);},set=function(){return p.set.apply(p,arguments);},updatePixels=function(){return p.updatePixels.apply(p,arguments);},loadJSON=function(){return p.loadJSON.apply(p,arguments);},loadStrings=function(){return p.loadStrings.apply(p,arguments);},loadTable=function(){return p.loadTable.apply(p,arguments);},loadXML=function(){return p.loadXML.apply(p,arguments);},loadBytes=function(){return p.loadBytes.apply(p,arguments);},httpGet=function(){return p.httpGet.apply(p,arguments);},httpPost=function(){return p.httpPost.apply(p,arguments);},httpDo=function(){return p.httpDo.apply(p,arguments);},createWriter=function(){return p.createWriter.apply(p,arguments);},save=function(){return p.save.apply(p,arguments);},saveJSON=function(){return p.saveJSON.apply(p,arguments);},saveJSONObject=function(){return p.saveJSONObject.apply(p,arguments);},saveJSONArray=function(){return p.saveJSONArray.apply(p,arguments);},saveStrings=function(){return p.saveStrings.apply(p,arguments);},saveTable=function(){return p.saveTable.apply(p,arguments);},writeFile=function(){return p.writeFile.apply(p,arguments);},downloadFile=function(){return p.downloadFile.apply(p,arguments);},abs=function(){return p.abs.apply(p,arguments);},ceil=function(){return p.ceil.apply(p,arguments);},constrain=function(){return p.constrain.apply(p,arguments);},dist=function(){return p.dist.apply(p,arguments);},exp=function(){return p.exp.apply(p,arguments);},floor=function(){return p.floor.apply(p,arguments);},lerp=function(){return p.lerp.apply(p,arguments);},log=function(){return p.log.apply(p,arguments);},mag=function(){return p.mag.apply(p,arguments);},map=function(){return p.map.apply(p,arguments);},max=function(){return p.max.apply(p,arguments);},min=function(){return p.min.apply(p,arguments);},norm=function(){return p.norm.apply(p,arguments);},pow=function(){return p.pow.apply(p,arguments);},round=function(){return p.round.apply(p,arguments);},sq=function(){return p.sq.apply(p,arguments);},sqrt=function(){return p.sqrt.apply(p,arguments);},fract=function(){return p.fract.apply(p,arguments);},createVector=function(){return p.createVector.apply(p,arguments);},noise=function(){return p.noise.apply(p,arguments);},noiseDetail=function(){return p.noiseDetail.apply(p,arguments);},noiseSeed=function(){return p.noiseSeed.apply(p,arguments);},randomSeed=function(){return p.randomSeed.apply(p,arguments);},random=function(){return p.random.apply(p,arguments);},randomGaussian=function(){return p.randomGaussian.apply(p,arguments);},acos=function(){return p.acos.apply(p,arguments);},asin=function(){return p.asin.apply(p,arguments);},atan=function(){return p.atan.apply(p,arguments);},atan2=function(){return p.atan2.apply(p,arguments);},cos=function(){return p.cos.apply(p,arguments);},sin=function(){return p.sin.apply(p,arguments);},tan=function(){return p.tan.apply(p,arguments);},degrees=function(){return p.degrees.apply(p,arguments);},radians=function(){return p.radians.apply(p,arguments);},angleMode=function(){return p.angleMode.apply(p,arguments);},textAlign=function(){return p.textAlign.apply(p,arguments);},textLeading=function(){return p.textLeading.apply(p,arguments);},textSize=function(){return p.textSize.apply(p,arguments);},textStyle=function(){return p.textStyle.apply(p,arguments);},textWidth=function(){return p.textWidth.apply(p,arguments);},textAscent=function(){return p.textAscent.apply(p,arguments);},textDescent=function(){return p.textDescent.apply(p,arguments);},loadFont=function(){return p.loadFont.apply(p,arguments);},text=function(){return p.text.apply(p,arguments);},textFont=function(){return p.textFont.apply(p,arguments);},append=function(){return p.append.apply(p,arguments);},arrayCopy=function(){return p.arrayCopy.apply(p,arguments);},concat=function(){return p.concat.apply(p,arguments);},reverse=function(){return p.reverse.apply(p,arguments);},shorten=function(){return p.shorten.apply(p,arguments);},shuffle=function(){return p.shuffle.apply(p,arguments);},sort=function(){return p.sort.apply(p,arguments);},splice=function(){return p.splice.apply(p,arguments);},subset=function(){return p.subset.apply(p,arguments);},float=function(){return p.float.apply(p,arguments);},int=function(){return p.int.apply(p,arguments);},str=function(){return p.str.apply(p,arguments);},boolean=function(){return p.boolean.apply(p,arguments);},byte=function(){return p.byte.apply(p,arguments);},char=function(){return p.char.apply(p,arguments);},unchar=function(){return p.unchar.apply(p,arguments);},hex=function(){return p.hex.apply(p,arguments);},unhex=function(){return p.unhex.apply(p,arguments);},join=function(){return p.join.apply(p,arguments);},match=function(){return p.match.apply(p,arguments);},matchAll=function(){return p.matchAll.apply(p,arguments);},nf=function(){return p.nf.apply(p,arguments);},nfc=function(){return p.nfc.apply(p,arguments);},nfp=function(){return p.nfp.apply(p,arguments);},nfs=function(){return p.nfs.apply(p,arguments);},split=function(){return p.split.apply(p,arguments);},splitTokens=function(){return p.splitTokens.apply(p,arguments);},trim=function(){return p.trim.apply(p,arguments);},day=function(){return p.day.apply(p,arguments);},hour=function(){return p.hour.apply(p,arguments);},minute=function(){return p.minute.apply(p,arguments);},millis=function(){return p.millis.apply(p,arguments);},month=function(){return p.month.apply(p,arguments);},second=function(){return p.second.apply(p,arguments);},year=function(){return p.year.apply(p,arguments);},plane=function(){return p.plane.apply(p,arguments);},box=function(){return p.box.apply(p,arguments);},sphere=function(){return p.sphere.apply(p,arguments);},cylinder=function(){return p.cylinder.apply(p,arguments);},cone=function(){return p.cone.apply(p,arguments);},ellipsoid=function(){return p.ellipsoid.apply(p,arguments);},torus=function(){return p.torus.apply(p,arguments);},orbitControl=function(){return p.orbitControl.apply(p,arguments);},debugMode=function(){return p.debugMode.apply(p,arguments);},noDebugMode=function(){return p.noDebugMode.apply(p,arguments);},ambientLight=function(){return p.ambientLight.apply(p,arguments);},specularColor=function(){return p.specularColor.apply(p,arguments);},directionalLight=function(){return p.directionalLight.apply(p,arguments);},pointLight=function(){return p.pointLight.apply(p,arguments);},lights=function(){return p.lights.apply(p,arguments);},lightFalloff=function(){return p.lightFalloff.apply(p,arguments);},spotLight=function(){return p.spotLight.apply(p,arguments);},noLights=function(){return p.noLights.apply(p,arguments);},loadModel=function(){return p.loadModel.apply(p,arguments);},model=function(){return p.model.apply(p,arguments);},loadShader=function(){return p.loadShader.apply(p,arguments);},createShader=function(){return p.createShader.apply(p,arguments);},shader=function(){return p.shader.apply(p,arguments);},resetShader=function(){return p.resetShader.apply(p,arguments);},normalMaterial=function(){return p.normalMaterial.apply(p,arguments);},texture=function(){return p.texture.apply(p,arguments);},textureMode=function(){return p.textureMode.apply(p,arguments);},textureWrap=function(){return p.textureWrap.apply(p,arguments);},ambientMaterial=function(){return p.ambientMaterial.apply(p,arguments);},emissiveMaterial=function(){return p.emissiveMaterial.apply(p,arguments);},specularMaterial=function(){return p.specularMaterial.apply(p,arguments);},shininess=function(){return p.shininess.apply(p,arguments);},easierthanremovingcomma;
  

        var keyCode = p.keyCode;
        var mouseButton = p.mouseButton;
        var UP = p.UP;
        var DOWN = p.DOWN;
        var RIGHT = p.RIGHT;
        var LEFT = p.LEFT;
        var HAND = p.HAND;
	    var ARROW = p.ARROW;
        var mouseX;
        var mouseY;
        var pmouseX;
        var pmouseY;
        var onAButton;
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
                    fill(139, 135, 255);
                    stroke(68, 0, 255);
                    strokeWeight(5);
                    rect(this.x, this.y, this.w, this.h, 20);
                    noStroke();
                } else {
                    fill(this.color);
                    rect(this.x, this.y, this.w, this.h, 10);
                }
            };
            Button.checkIfPressed = function() {
                if (mouseIsClicked && mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
                    this.pressed = true;
                    this.mousedOver = true;
                } else if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
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
        var mouseButton = p.mouseButton;
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
        
        
        var width = p.width;//canvas width
        var height = p.height;//canvas height

        var scene = 0;
        var timer = 0;
        //0 = menu, 1 = stopped, 2 = lightspeed, 3 = planet 1, 4 = projection, 5 = lightspeed, 6 = planet 2
        var stopped = floor(random(0,2));// 0 = darth vadar, 1 = kylo ren
        var transmission = floor(random(0,1));//0=yoda
        var planet1 = floor(random(0,3));//0=Tatooine,1=Kashyyyk,2=Jakku
        var planet2 = floor(random(0,2));//0=Naboo,1=Death Star

        var myCompare = function(a,b) {
            return a[0]-b[0];
        };
        
        var eyeX = 200;
        var eyeY = 200;
        var eyeZ = 0;
        var zw = 240;
        noStroke();

        var stars = [];
        var rocks = [];
        var seaweed = [];
        var trees = [];
        var fish1 = [];
        var fish2 = [];
        var boxes = [];
        var opponent = {};
        var deathStar = {};
        var falcon = {};
        var numStars = 175;
        var s0vadar;
        var s1vadar;
        var xMove = 0;
        var yMove = 0;
        var zMove = 0;
        var theta = 0;
        var thetaMove = 0;

        var xyz2xy = function(x, y, z) {
            return [(zw-eyeZ)*(x-eyeX)/(2*(z-eyeZ)) + eyeX, 400 - ((zw-eyeZ)*(y-eyeY)/(2*(z-eyeZ)) + eyeY)];
        };

        var w2w = function(w, z) {
            return w * (zw-eyeZ)/(z-eyeZ);
        };

        var drawEarth = function(x, y, s) {
            fill(186, 153, 112);
            push();
            translate(x-79*s,y+16*s);
            quad(50 * s, 0, 70 * s, -100 * s, 110 * s, -100 * s, 170 * s, 0);
            fill(120, 84, 40);
            quad(0, 0, 30 * s, -80 * s, 100 * s, -70 * s, 170 * s, 0);
            fill(102, 76, 45);
            quad(0, -5* s, 170* s, 0, 116 * s, 30 * s, 35 * s, 30 * s);
            fill(222, 199, 169);
            quad(35 * s, 30 * s, 50 * s, -30 * s, 91 * s, -30 * s, 116 * s, 30 * s);
            pop();
        };

        var drawEarth2 = function(x, y, s, theta) {
            fill(110, 66, 12);
            push();
            translate(x-79*s,y+16*s);
            rotate(theta);
            quad(50 * s, 0, 70 * s, -100 * s, 110 * s, -100 * s, 170 * s, 0);
            fill(71, 42, 6);
            quad(0, 0, 30 * s, -80 * s, 100 * s, -70 * s, 170 * s, 0);
            fill(38, 22, 3);
            quad(0, -5* s, 170* s, 0, 116 * s, 30 * s, 35 * s, 30 * s);
            fill(133, 73, 0);
            quad(35 * s, 30 * s, 50 * s, -30 * s, 91 * s, -30 * s, 116 * s, 30 * s);
            pop();
            stroke(255, 0, 0);
            strokeWeight(5);
            //point(x,y);
            noStroke();
        };

        var drawEarth3 = function(x, y, s) {
            fill(173, 137, 113);
            push();
            translate(x-79*s,y+16*s);
            quad(50 * s, 0, 70 * s, -100 * s, 110 * s, -100 * s, 170 * s, 0);
            fill(135, 107, 88);
            quad(0, 0, 30 * s, -80 * s, 100 * s, -70 * s, 170 * s, 0);
            fill(97, 71, 54);
            quad(0, -5* s, 170* s, 0, 116 * s, 30 * s, 35 * s, 30 * s);
            fill(207, 172, 149);
            quad(35 * s, 30 * s, 50 * s, -30 * s, 91 * s, -30 * s, 116 * s, 30 * s);
            pop();
            stroke(255, 0, 0);
            strokeWeight(5);
            //point(x,y);
            noStroke();
        };

        var drawVadar = function(x,y,s) {
            noStroke();
            push();
            translate(x, y);
            fill(0, 0, 0);
            arc(0,198*s,220*s,430*s,181,360);
            fill(20, 20, 20);
            rect(-40*s,0,80*s,100*s,10*s);//body
            rect(-40*s,88*s,35*s,110*s,10*s);//right leg
            rect(5*s,88*s,35*s,110*s,10*s);//left leg
            quad(-35*s,0,35*s,0,20*s,-15*s,-20*s,-15*s);//shoulders
            //key pad
            fill(0, 0, 0);
            rect(-15*s,25*s,30*s,30*s);
            fill(255, 0, 0);
            rect(7*s,29*s,5*s,10*s);
            fill(0, 34, 255);
            rect(-8*s,29*s,8*s,5*s);
            fill(110, 110, 110);
            rect(-8*s,42*s,8*s,5*s);
            //belt
            fill(0, 0, 0);
            rect(-40*s,70*s,80*s,20*s);
            //head
            fill(20, 20, 20);
            quad(20*s,-15*s,-20*s,-15*s, -30*s,-30*s,30*s,-30*s);
            arc(0,-30*s,60*s,82*s,180,360);
            fill(31, 31, 31);
            rect(-52*s,-6*s,30*s,110*s,10*s);//right arm
            rect(22*s,-6*s,30*s,110*s,10*s);//left arm
            //stripes
            stroke(161, 161, 161);
            strokeWeight(5*s);
            line(0,-8*s,0,18*s);
            line(10*s,-6*s,10*s,13*s);
            line(-10*s,-6*s,-10*s,13*s);
            line(18*s,-4*s,18*s,10*s);
            line(-18*s,-4*s,-18*s,10*s);
            noStroke();
            fill(255, 0, 0);
            //ellipse(40,0,10,10);
            pop();
        };

        var drawKyloRen = function(x,y,s) {
            noStroke();
            push();
            translate(x, y);
            fill(0, 0, 0);
            arc(0,198*s,160*s,430*s,181,360);
            fill(20, 20, 20);
            rect(-40*s,0,80*s,100*s,10*s);//body
            rect(-40*s,88*s,35*s,110*s,10*s);//right leg
            rect(5*s,88*s,35*s,110*s,10*s);//left leg
            //belt
            fill(0, 0, 0);
            rect(-40*s,70*s,80*s,20*s);
            
            fill(31, 31, 31);
            rect(-52*s,-6*s,30*s,110*s,10*s);//right arm
            rect(22*s,-6*s,30*s,110*s,10*s);//left arm
            
            fill(36, 36, 36);
            //quad(-35*s,0,35*s,0,20*s,-15*s,-20*s,-15*s);//shoulder
            ellipse(0,-4*s,70*s,30*s);
            //head
            fill(20, 20, 20);
            quad(20*s,-15*s,-20*s,-15*s, -30*s,-30*s,30*s,-30*s);
            arc(0,-30*s,60*s,82*s,180,360);
            //stripes
            stroke(145, 145, 145);
            strokeWeight(3*s);
            noFill();
            rect(-18*s,-55*s,36*s,20*s,5*s);
            rect(-13*s,-51*s,26*s,12*s,5*s);
            noStroke();
            fill(0, 0, 0);
            //fill(255, 0, 0);
            quad(-6*s,-42*s,6*s,-42*s,9*s,-27*s,-9*s,-27*s);
            rect(-9*s,-27*s,18*s,5*s);
            //light saber
            fill(255,0,0,100);
            rect(-44*s,98*s,12*s,110*s,5*s);
            rect(-58*s,99*s,45*s,12*s,5*s);
            pop();
        };

        var drawYoda = function(x,y,s) {
            push();
            translate(x,y);
            fill(81, 109, 143);
            rect(-20*s,-20*s,40*s,70*s);
            ellipse(0,-20*s,40*s,10*s);
            fill(73, 93, 115);
            rect(-20*s,10*s,40*s,8*s);
            fill(102, 132, 166);
            quad(-20*s,-22*s,-10*s,-24*s,-10*s,55*s,-32*s,55*s);
            quad(20*s,-22*s,10*s,-24*s,10*s,55*s,32*s,55*s);
            stroke(198, 209, 209);
            strokeWeight(10);
            line(27*s,6*s,27*s,54*s);
            noStroke();
            fill(147, 201, 174);
            ellipse(-6*s,2*s,10*s,10*s);
            ellipse(28*s,6*s,10*s,10*s);
            fill(116, 146, 181);
            push();
            rotate(-58);
            rect(-21*s,-31*s,30*s,13*s,6*s);
            pop();
            push();
            rotate(10);
            rect(9*s,-26*s,25*s,13*s,6*s);
            pop();
            quad(-20*s,-3*s,-7*s,-3*s,-9*s,15*s,-30*s,6*s);
            quad(28*s,-9*s,37*s,-18*s,40*s,10*s,23*s,3*s);
            fill(147, 201, 174);
            ellipse(0,-35*s,28*s,30*s);
            push();
            rotate(-18);
            arc(29*s,-34*s,15*s,10*s,0,180);
            pop();
            push();
            rotate(18);
            arc(-29*s,-34*s,15*s,10*s,0,180);
            pop();
            pop();
            stroke(255, 0, 0);
            strokeWeight(5);
            //point(x,y);
            noStroke();
        };

        var drawSeaWeed = function(x,y,s) {//x and y at the bottom
            push();
            translate(x+2*s,y-46*s);
            stroke(81, 148, 13);
            noFill();
            strokeWeight(5*s);
            arc(0,0,20*s,40*s,123,253);
            arc(-3*s,-39*s,20*s,40*s,-44,83);
            arc(-12*s,36*s,20*s,50*s,-44,19);
            noStroke();
            pop();
            stroke(255, 0, 0);
            strokeWeight(5);
            //point(x,y);
            noStroke();
        };

        var drawFish1 = function(x,y,s,fishColor) {
            push();
            translate(x,y);
            fill(fishColor);
            ellipse(0,0,50*s,20*s);
            triangle(20*s,0,45*s,-6*s,45*s,6*s);
            stroke(255, 255, 255);
            strokeWeight(6.5*s);
            point(-12*s,-4*s);
            strokeWeight(5*s);
            stroke(0, 0, 0);
            point(-12*s,-4*s);
            noStroke();
            pop();
        };//x and y in the middle of body

        var drawFish12 = function(x,y,s,fishColor) {
            push();
            translate(x,y);
            fill(fishColor);
            ellipse(0,0,50*s,20*s);
            triangle(-20*s,0,-45*s,-6*s,-45*s,6*s);
            stroke(255, 255, 255);
            strokeWeight(6.5*s);
            point(12*s,-4*s);
            strokeWeight(5*s);
            stroke(0, 0, 0);
            point(12*s,-4*s);
            noStroke();
            pop();
        };//x and y in the middle of body

        var drawFish2 = function(x,y,s) {//x and y at middle of upper jaw
            push();
            translate(x,y);
            push();
            fill(166, 74, 8);
            rotate(-74);
            arc(0,0,50*s,70*s,-180,0);
            noFill();
            stroke(166, 74, 8);
            strokeWeight(5*s);
            arc(32*s,4*s,40*s,45*s,-133,35);
            noStroke();
            fill(166, 74, 8);
            pop();
            push();
            rotate(-6);
            arc(4*s,14*s,40*s,25*s,0,180);
            pop();
            quad(-20*s,-20*s,-32*s,5*s,-47*s,-11*s,-44*s,-19*s);
            fill(199, 255, 254,100);
            quad(-47*s,-11*s,-44*s,-19*s,-52*s,-32*s,-60*s,-7*s);
            stroke(255, 255, 255);
            strokeWeight(9*s);
            point(-7*s,-17*s);
            strokeWeight(7*s);
            stroke(0, 0, 0);
            point(-7*s,-17*s);
            noStroke();
            fill(255, 255, 255);
            triangle(1*s,14*s,5*s,13.5*s,2*s,3*s);
            triangle(9*s,13*s,15*s,12.4*s,11*s,-1*s);
            triangle(16*s,12*s,25*s,11.1*s,19*s,-1*s);
            triangle(7*s,-24*s,10*s,-13*s,5*s,-18*s);
            triangle(4*s,-15*s,7*s,-9*s,3*s,-10*s);
            triangle(2*s,-7*s,5*s,-3*s,0*s,-1*s);
            fill(255, 220, 94,100);
            ellipse(30*s,-41*s,20*s,20*s);
            ellipse(30*s,-41*s,12*s,12*s);
            ellipse(30*s,-41*s,6*s,6*s);
            pop();
        };

        var drawFish22 = function(x,y,s) {//x and y at middle of upper jaw
            push();
            translate(x,y);
            push();
            fill(166, 74, 8);
            rotate(74);
            arc(0,0,50*s,70*s,-180,0);
            noFill();
            stroke(166, 74, 8);
            strokeWeight(5*s);
            arc(-32*s,4*s,40*s,45*s,146,303);
            noStroke();
            fill(166, 74, 8);
            pop();
            push();
            rotate(6);
            arc(-4*s,14*s,40*s,25*s,0,180);
            pop();
            quad(20*s,-20*s,32*s,5*s,47*s,-11*s,44*s,-19*s);
            fill(199, 255, 254,100);
            quad(47*s,-11*s,44*s,-19*s,52*s,-32*s,60*s,-7*s);
            stroke(255, 255, 255);
            strokeWeight(9*s);
            point(7*s,-17*s);
            strokeWeight(7*s);
            stroke(0, 0, 0);
            point(7*s,-17*s);
            noStroke();
            fill(255, 255, 255);
            triangle(-1*s,14*s,-5*s,13.5*s,-2*s,3*s);
            triangle(-9*s,13*s,-15*s,12.4*s,-11*s,-1*s);
            triangle(-16*s,12*s,-25*s,11.1*s,-19*s,-1*s);
            triangle(-7*s,-24*s,-10*s,-13*s,-5*s,-18*s);
            triangle(-4*s,-15*s,-7*s,-9*s,-3*s,-10*s);
            triangle(-2*s,-7*s,-5*s,-3*s,0*s,-1*s);
            fill(255, 220, 94,100);
            ellipse(-30*s,-41*s,20*s,20*s);
            ellipse(-30*s,-41*s,12*s,12*s);
            ellipse(-30*s,-41*s,6*s,6*s);
            pop();
        };

        var drawTree = function(x,y,s) {
            push();
            translate(x,y);
            fill(36, 122, 17);
            ellipse(-25*s,-164*s,80*s,25*s);
            fill(55, 140, 36);
            ellipse(-4*s,-188*s,75*s,45*s);
            fill(52, 133, 33);
            ellipse(8*s,-176*s,80*s,25*s);
            fill(41, 110, 25);
            ellipse(12*s,-160*s,90*s,20*s);
            fill(133, 85, 43);
            quad(-20*s,0,20*s,0,10*s,-130*s,-10*s,-130*s);
            quad(9*s,-130*s,-10*s,-130*s,-43*s,-170*s,-35*s,-170*s);
            quad(-9*s,-130*s,10*s,-130*s,36*s,-160*s,23*s,-160*s);
            quad(9*s,-130*s,-10*s,-130*s,-12*s,-198*s,-3*s,-204*s);
            fill(65, 145, 45);
            ellipse(-32*s,-174*s,40*s,20*s);
            ellipse(10*s,-183*s,40*s,20*s);
            pop();
        };

        var drawTreeWookee = function(x,y,s) {
            push();
            translate(x,y);
            fill(36, 122, 17);
            ellipse(-25*s,-164*s,80*s,25*s);
            fill(55, 140, 36);
            ellipse(-4*s,-188*s,75*s,45*s);
            fill(52, 133, 33);
            ellipse(8*s,-176*s,80*s,25*s);
            fill(41, 110, 25);
            ellipse(12*s,-160*s,90*s,20*s);
            fill(133, 85, 43);
            quad(-20*s,0,20*s,0,10*s,-130*s,-10*s,-130*s);
            quad(9*s,-130*s,-10*s,-130*s,-43*s,-170*s,-35*s,-170*s);
            quad(-9*s,-130*s,10*s,-130*s,36*s,-160*s,23*s,-160*s);
            quad(9*s,-130*s,-10*s,-130*s,-12*s,-198*s,-3*s,-204*s);
            fill(65, 145, 45);
            ellipse(-32*s,-174*s,40*s,20*s);
            ellipse(10*s,-183*s,40*s,20*s);
            fill(107, 68, 34);
            ellipse(0,-90*s,90*s,25*s);
            fill(133, 85, 43);
            quad(-12*s,-90*s,12*s,-90*s,10*s,-130*s,-10*s,-130*s);
            fill(122, 76, 39);
            rect(22*s,-119*s,15*s,20*s,5*s);
            rect(22*s,-104*s,6*s,18*s,2*s);
            rect(31*s,-104*s,6*s,18*s,2*s);
            rect(19*s,-120*s,6*s,18*s,2*s);
            rect(32*s,-120*s,9*s,6*s,2*s);
            rect(37*s,-127*s,6*s,12*s,2*s);
            ellipse(29*s,-117*s,15*s,30*s);
            ellipse(40*s,-127*s,8*s,8*s);
            pop();
        };

        var drawPodRacer = function(x,y1,y2,s) {
            stroke(234, 94, 255,100);
            strokeWeight(10*s);
            line(x+155*s,y1,x-155*s,y2);
            noStroke();
            fill(166, 166, 166);
            ellipse(x+155*s,y1,100*s,100*s);
            ellipse(x-155*s,y2,100*s,100*s);
            fill(255, 189, 97,100);
            ellipse(x+155*s,y1,80*s,80*s);
            ellipse(x+155*s,y1,50*s,50*s);
            ellipse(x-155*s,y2,80*s,80*s);
            ellipse(x-155*s,y2,50*s,50*s);
        };

        var drawDeathStar = function(x,y,s) {
            push();
            translate(x,y);
            fill(96, 97, 99);
            ellipse(0,0,200*s,200*s);
            fill(77, 77, 79);
            arc(0,0,200*s,200*s,80,260);
            push();
            rotate(-100);
            arc(1*s,-2*s,200*s,60*s,0,180);
            pop();
            stroke(102, 103, 105);
            noFill();
            strokeWeight(8*s);
            arc(0,0,200*s,80*s,15,164);
            stroke(77, 77, 79,150);
            arc(0,0,200*s,80*s,73,164);
            noStroke();
            fill(102, 103, 105);
            ellipse(30*s,-34*s,65*s,68*s);
            fill(77, 77, 79);
            arc(30*s,-34*s,65*s,68*s,-58,18);
            fill(108, 110, 112);
            ellipse(30*s,-34*s,25*s,26*s);
            pop();
        };

        var drawFalcon = function(x,y,s) {
            push();
            translate(x,y);
            fill(207, 207, 207);
            quad(-72*s, 29*s, 86*s, 63*s, 101*s, 57*s, 16*s, 22*s);
            quad(121*s, 44*s,133*s, 40*s,55*s, -19*s,11*s, -8*s);
            fill(173, 173, 173);
            quad(-19*s, 46*s, 86*s, 74*s, 86*s, 63*s, -21*s, 26*s);
            quad(86*s, 74*s, 86*s, 63*s,101*s, 57*s,100*s, 69*s);
            quad(121*s, 43*s,121*s, 53*s,51*s, 24*s,56*s, 10*s);
            quad(121*s, 43*s,121*s,53*s,133*s,51*s,133*s,40*s);
            push();
            rotate(10);
            fill(191, 191, 191);
            ellipse(0,0,200*s,90*s);
            pop();
            fill(181, 181, 181);
            quad(-37*s,-26*s,-32*s,-22*s,-49*s,22*s,-65*s,12*s);
            fill(199, 199, 199);
            quad(-37*s,-26*s,-65*s,12*s,-86*s,12*s,-49*s,-33*s);
            push();
            fill(199, 199, 199);
            quad(-44*s,-35*s,-3*s,-35*s,99*s,33*s,87*s,42*s);
            rotate(-4);
            ellipse(-25*s,-35*s,50*s,20*s);
            pop();
            beginShape();
            //fill(255, 0, 0);
            vertex(-81*s,18*s);
            vertex(-56*s,50*s);
            vertex(-33*s,55*s);
            vertex(-20*s,38*s);
            vertex(-33*s,17*s);
            vertex(-58*s,5*s);
            //poly(-80*s,-30*s,-70*s,-40*s,-55*s,-42*s,-45*s,-36*s,-40*s,-75*s,-25*s);
            endShape();
            ellipse(-70*s,13*s,25*s,25*s);
            fill(191, 191, 191);
            ellipse(-29*s,44*s,22*s,22*s);
            //beginShape(); vertex(269*s, 270*s); vertex(171, 229); vertex(116, 133); vertex(173, 82); vertex(276, 139); vertex(315, 225); endShape(CLOSE); 
            pop();
        };

        var newDeathStar = function(x,y,z) {
            var ds = {};
            ds.x = x;
            ds.y = y;
            ds.z = z;
            ds.findPosition = function() {
                this.screenX = xyz2xy(this.x,this.y,this.z)[0];
                this.screenY = xyz2xy(this.x,this.y,this.z)[0];
                this.screenW = w2w(1,this.z);
            };
            ds.drawIt = function() {
                drawDeathStar(this.screenX,this.screenY,this.screenW);
            };
            ds.moveIt = function() {
                this.z--;
            };
            return ds;
        };

        var newSeaweed = function(x,y,z) {
            var seaweed = {};
            seaweed.y = y;
            seaweed.x = x;
            seaweed.z = z;
            seaweed.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(2, this.z);
            };
            seaweed.drawIt = function() {
                drawSeaWeed(this.screenX, this.screenY, this.screenW);
            };
            seaweed.moveIt = function() {
                this.z--;
            };
            return seaweed;
        };

        var newFish1 = function(x,y,z) {
            var fish = {};
            fish.y = y;
            fish.x = x;
            fish.z = z;
            fish.xStep = 0;
            fish.myColor = color(random(0,255),random(0,255),random(0,255));
            fish.turnTime = floor(random(50,70));
            //fish.myColor = color(255, 0, 0);
            fish.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(1.5, this.z);
            };
            fish.drawIt = function() {
                if (this.xStep > 0) {
                    drawFish12(this.screenX,this.screenY,this.screenW,this.myColor);
                } else {
                    drawFish1(this.screenX,this.screenY,this.screenW,this.myColor);
                }
            };
            fish.moveIt = function() {
                this.z--;
                if (timer === 1 || timer % this.turnTime === 0) {
                    this.xStep = random(-5,5);
                }
                this.x += this.xStep;
            };
            return fish;
        };

        var newFalcon = function(x,y,z) {
            var falcon = {};
            falcon.y = y;
            falcon.x = x;
            falcon.z = z;
            falcon.xStep = 0;
            falcon.yStep = 0;
            falcon.turnTime = floor(random(50,70));
            //fish.myColor = color(255, 0, 0);
            falcon.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(1, this.z);
            };
            falcon.drawIt = function() {
                drawFalcon(this.screenX,this.screenY,this.screenW);
            };
            falcon.moveIt = function() {
                this.z--;
                if (timer === 1 || timer % this.turnTime === 0) {
                    this.xStep = random(-5,5);
                    this.yStep = random(-5,5);
                }
                this.x += this.xStep;
                this.y += this.yStep;
            };
            return falcon;
        };

        var newFish2 = function(x,y,z) {
            var fish = {};
            fish.y = y;
            fish.x = x;
            fish.z = z;
            fish.xStep = 0;
            fish.turnTime = floor(random(50,70));
            fish.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(1.5, this.z);
            };
            fish.drawIt = function() {
                if (this.xStep > 0) {
                    drawFish2(this.screenX,this.screenY,this.screenW);
                } else {
                    drawFish22(this.screenX,this.screenY,this.screenW);
                }
            };
            fish.moveIt = function() {
                this.z--;
                if (timer === 1 || timer % this.turnTime === 0) {
                    this.xStep = random(-5,5);
                }
                this.x += this.xStep;
            };
            return fish;
        };

        var newRock = function(x,y,z,type) {
            var rock = {};
            rock.x = x;
            rock.y = y;
            rock.z = z;
            rock.size = random(0.15,0.45);
            if (type === 1) {
                rock.size = random(0.4,0.8);
            }
            if (type === 2) {
                rock.size = random(0.15,0.38);
            }
            rock.type = type;
            rock.xStep = 0;
            rock.yStep = 0;
            rock.time = floor(random(60,85));
            rock.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(this.size, this.z);
            };
            rock.drawIt = function(theta) {
                if (this.type === 0) {
                    drawEarth(this.screenX, this.screenY, this.screenW);
                } else if (this.type === 1) {
                    drawEarth2(this.screenX, this.screenY, this.screenW,theta);
                } else if (this.type === 2) {
                    drawEarth3(this.screenX, this.screenY, this.screenW);
                }
            };
            rock.moveIt = function() {
                if (this.type === 0 || this.type === 2) {
                    this.z--;
                } else {
                    this.z--;
                    if (timer === 1 || timer % this.time === 0) {
                        this.yStep = random(-2,2);
                        this.xStep = random(-2,2);
                    }
                    this.y += this.yStep;
                    this.x += this.xStep;
                }
            };
            return rock;
        };

        var newTree = function(x,y,z) {
            var tree = {};
            tree.x = x;
            tree.y = y;
            tree.z = z;
            tree.wookee = floor(random(0,7));
            tree.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(1, this.z);
            };
            tree.drawIt = function() {
                if (this.wookee === 0) {
                    drawTreeWookee(this.screenX, this.screenY, this.screenW);
                } else {
                    drawTree(this.screenX, this.screenY, this.screenW);
                }
            };
            tree.moveIt = function() {
                this.z--;
            };
            return tree;
        };

        var newStar = function(x,y,z) {
            var star = {};
            star.x = x;
            star.y = y;
            star.z = z;
            star.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(4, this.z);
            };
            star.drawIt = function() {
                fill(255, 255, 255);
                ellipse(this.screenX, this.screenY, this.screenW, this.screenW);
            };
            star.moveIt = function() {
                this.z--;
            };
            return star;
        };

        var newVadar = function(x,y,z) {
            var vadar = {};
            vadar.x = x;
            vadar.y = y;
            vadar.z = z;
            vadar.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(0.75, this.z);
            };
            vadar.drawIt = function() {
                drawVadar(this.screenX, this.screenY, this.screenW);
            };
            vadar.moveIt = function() {
                if (this.z > 200) {
                    this.z--;
                }
            };
            return vadar;
        };

        var newKylo = function(x,y,z) {
            var kylo = {};
            kylo.x = x;
            kylo.y = y;
            kylo.z = z;
            kylo.findPosition = function() {
                this.screenX = xyz2xy(this.x, this.y, this.z)[0];
                this.screenY = xyz2xy(this.x, this.y, this.z)[1];
                this.screenW = w2w(0.75, this.z);
            };
            kylo.drawIt = function() {
                drawKyloRen(this.screenX, this.screenY, this.screenW);
            };
            kylo.moveIt = function() {
                if (this.z > 200) {
                    this.z--;
                }
            };
            return kylo;
        };

        var newBox = function(x,y,z,w,l,h,reversedLighting,r,g,b,r2,g2,b2,r3,g3,b3) {//uper forward left corner (least x,least z, most y) (w is x side length, h is y side length, h is z side length)
            var box = {};
            box.reversedLighting = reversedLighting;//top is brightest or bottom is brightest
            box.mainColor = [r,g,b];
            box.darkColor = [r2,g2,b2];
            box.lightColor = [r3,g3,b3];
            //box.mainColor = [255, 0, 0];
            //box.darkColor = [99, 0, 0];
            //box.lightColor = [255, 138, 138];
            box.pos = [[x,y+h,z],[x+w,y+h,z],[x+w,y+h,z+l],[x,y+h,z+l],[x,y,z],[x+w,y,z],[x+w,y,z+l],[x,y,z+l]];
            box.screenPos = [[x,y+h,z],[x+w,y+h,z],[x+w,y+h,z+l],[x,y+h,z+l],[x,y,z],[x+w,y,z],[x+w,y,z+l],[x,y,z+l]];//just for starters; never actually is this
            box.distances = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]];
            box.xStep = 0;
            box.yStep = 0;
            box.zStep = 0;
            //[[],[],[],[],[],[],[],[]];
            box.findPos = function() {
                for (var i = 0; i < this.pos.length; i++) {
                    this.screenPos[i][0] = xyz2xy(this.pos[i][0],this.pos[i][1],this.pos[i][2])[0];
                    this.screenPos[i][1] = xyz2xy(this.pos[i][1],this.pos[i][1],this.pos[i][2])[1];
                }
            };
            box.drawIt = function(testing) {//if testing=true, only outlines
                if (testing) {
                    stroke(0, 0, 0);
                    noFill();
                    quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                    quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1]);//side 2
                    quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1]);//side 3
                    quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[6][0],this.screenPos[6][1]);//side 4
                    quad(this.screenPos[4][0],this.screenPos[4][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1],this.screenPos[7][0],this.screenPos[7][1]);//side 5
                    quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[4][0],this.screenPos[4][1]);//side 6
                    noStroke();
                } else if ( this.pos[0][2] < 20) {
                    
                } else {
                    this.distances = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]];
                    for (var i = 0; i < 8; i++) {
                        this.distances[i][0] = sqrt(sq(this.pos[i][0]-eyeX)+sq(this.pos[i][1]-eyeY)+sq(this.pos[i][2]-eyeZ));
                    }
                    
                    //debug(this.distances[1][0]);
                    this.distances.sort(myCompare);
                    //debug(this.distances[0][0]+" "+this.distances[0][1]+" "+this.distances[1][0]+" "+this.distances[1][1]+" "+this.distances[2][0]+" "+this.distances[2][1]+" "+this.distances[3][0]+" "+this.distances[3][1]+" "+this.distances[4][0]+" "+this.distances[4][1]+" "+this.distances[5][0]+" "+this.distances[5][1]+" "+this.distances[6][0]+" "+this.distances[6][1]+" "+this.distances[7][0]+" "+this.distances[7][1]);
                    //debug(this.distances[1][0] + " " + this.distances[1][1]);
                    //debug();
                    //text(this.distances[0][1]
                    
                    //stroke(this.darkColor[0],this.darkColor[1],this.darkColor[2]);
                    strokeWeight(w2w(3,this.pos[0][2]));
                    if (this.reversedLighting) {
                        fill(this.darkColor[0],this.darkColor[1],this.darkColor[2]);
                    } else {
                        fill(this.lightColor[0],this.lightColor[1],this.lightColor[2]);        
                    }
                    if (this.distances[0][1] === 0) {
                        if (this.screenPos[0][0]<this.screenPos[3][0]) {
                            //background(255, 0, 0);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1]);//side 2
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                        } else {
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1]);//side 2
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[4][0],this.screenPos[4][1]);//side 6
                        }
                    } else if (this.distances[0][1] === 1) {
                        if (this.screenPos[1][0]>this.screenPos[2][0]) {
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1]);//side 2
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                        } else {
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1]);//side 2
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                            quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1]);//side 3
                        }
                    } else if (this.distances[0][1] === 2) {
                        if (this.distances[1][0] !== this.distances[0][0]) {
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1]);//side 2
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[6][0],this.screenPos[6][1]);//side 4
                            quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1]);//side 3
                        }
                    } else if (this.distances[0][1] === 3) {
                        if (this.distances[1][0] !== this.distances[0][0]) {
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1]);//side 2
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[6][0],this.screenPos[6][1]);//side 4
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[4][0],this.screenPos[4][1]);//side 6
                        }
                    }
                    if (!this.reversedLighting) {
                        fill(this.darkColor[0],this.darkColor[1],this.darkColor[2]);
                    } else {
                        fill(this.lightColor[0],this.lightColor[1],this.lightColor[2]);        
                    }
                    if (this.distances[0][1] === 4) {
                        if (this.screenPos[0][0]<this.screenPos[3][0]) {
                            quad(this.screenPos[4][0],this.screenPos[4][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1],this.screenPos[7][0],this.screenPos[7][1]);//side 5
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                        } else {
                            quad(this.screenPos[4][0],this.screenPos[4][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1],this.screenPos[7][0],this.screenPos[7][1]);//side 5
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[4][0],this.screenPos[4][1]);//side 6
                        }
                    } else if (this.distances[0][1] === 5) {
                        if (this.screenPos[1][0]>this.screenPos[2][0]) {
                            quad(this.screenPos[4][0],this.screenPos[4][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1],this.screenPos[7][0],this.screenPos[7][1]);//side 5
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                        } else {
                            quad(this.screenPos[4][0],this.screenPos[4][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1],this.screenPos[7][0],this.screenPos[7][1]);//side 5
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[4][0],this.screenPos[4][1]);//side 1
                            quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1]);//side 3
                        }
                    } else if (this.distances[0][1] === 6) {
                        if (this.distances[1][0] !== this.distances[0][0]) {
                            quad(this.screenPos[4][0],this.screenPos[4][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1],this.screenPos[7][0],this.screenPos[7][1]);//side 5
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[6][0],this.screenPos[6][1]);//side 4
                            quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[1][0],this.screenPos[1][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1]);//side 3
                        }
                    } else if (this.distances[0][1] === 7) {
                        if (this.distances[1][0] !== this.distances[0][0]) {
                            quad(this.screenPos[4][0],this.screenPos[4][1],this.screenPos[5][0],this.screenPos[5][1],this.screenPos[6][0],this.screenPos[6][1],this.screenPos[7][0],this.screenPos[7][1]);//side 5
                            fill(this.mainColor[0],this.mainColor[1],this.mainColor[2]);
                            quad(this.screenPos[2][0],this.screenPos[2][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[6][0],this.screenPos[6][1]);//side 4
                            quad(this.screenPos[0][0],this.screenPos[0][1],this.screenPos[3][0],this.screenPos[3][1],this.screenPos[7][0],this.screenPos[7][1],this.screenPos[4][0],this.screenPos[4][1]);//side 6
                        }
                    } 
                    //println(this.distances);
                    noStroke();
                }
            };
            box.moveIt = function() {
                for (var i = 0; i < 8; i++) {
                    this.pos[i][2]-=2;
                }
            };
            return box;
        };

        p.mouseClicked = function() {
            mouseIsClicked = true;
            //scene++;
        };

        var drawLightspeed = function() {
            if (timer === 0) {
                background(0, 0, 0);
                eyeX = 200;
                eyeY = 200;
                eyeZ = 0;
                numStars = 175;
                zw = 240;
                stars = [];
                for (var i = 0; i < numStars; i++) {
                    stars.push(newStar(random(-200, 600), random(-200,600), random(200,600)));
                }
            }
            for (var i = 0; i < numStars; i++) {
                stars[i].findPosition();
                stars[i].drawIt();
                stars[i].moveIt();
            }
            timer++;
            if (timer > 120) {
                timer = 0;
                scene++;
            }
        };

        var drawMenu = function() {
            background(0, 0, 0);
            fill(255, 215,0);
            textSize(45);
            text("Star Tours", 88,100);
            textSize(35);
            text("Start", 160,220);
            if (mouseIsClicked && mouseX > 150 && mouseX < 250 && mouseY > 190 && mouseY < 230) {
                scene++;
            }
        };

        var draws0 = function() {
            background(10, 32, 74);
            if (timer === 0) {
                stars = [];
                numStars = 1000;
                eyeX = 200;
                eyeY = 200;
                eyeZ = -1;
                zw = 240;
                for (var i = 0; i < numStars; i++) {
                    stars.push(newStar(random(-5000, 9000), random(-5000,11000), random(700,3000)));
                }
                s0vadar = newVadar(200,300,400);
            }
            for (var i = 0; i < numStars; i++) {
                stars[i].findPosition();
                stars[i].drawIt();
            }
            if (timer % 30 === 0) {
                xMove = random(-1.5,1.5);
                yMove = random(-1.2,0.5);
                zMove = random(-1.5,0);
                if (eyeZ < -150) {
                    zMove = random(0,1.5);
                }
            }
            eyeX += xMove;
            eyeY += yMove;
            eyeZ += zMove;
            fill(13, 13, 13);
            //rect(75,eyeY,250,400-eyeY);
            //quad(75,eyeY,75,400,0,400,0,229);
            //quad(325,eyeY,325,400,400,400,400,229);
            //quad(75,eyeY,325,eyeY,810,400,-409,400);
            quad(xyz2xy(-400,0,600)[0],xyz2xy(-400,0,600)[1],xyz2xy(800,0,600)[0],xyz2xy(800,0,600)[1],xyz2xy(800,0,0)[0],xyz2xy(800,0,0)[1],xyz2xy(-400,0,0)[0],xyz2xy(-400,0,0)[1]);
            stroke(255, 0, 0);
            strokeWeight(25);
            //point(xyz2xy(400,0,160)[0],xyz2xy(400,0,160)[1]);
            stroke(13, 13, 13);
            strokeWeight(10);
            //line(80,eyeY,160, 50);
            line(xyz2xy(-400,0,600)[0],xyz2xy(-400,0,600)[1],xyz2xy(-200,800,600)[0],xyz2xy(-200,800,600)[1]);
            line(xyz2xy(800,0,600)[0],xyz2xy(800,0,600)[1],xyz2xy(600,800,600)[0],xyz2xy(600,800,600)[1]);
            line(xyz2xy(-200,800,600)[0],xyz2xy(-200,800,600)[1],xyz2xy(600,800,600)[0],xyz2xy(600,800,600)[1]);
            line(xyz2xy(-200,800,600)[0],xyz2xy(-200,800,600)[1],xyz2xy(-400,1600,600)[0],xyz2xy(-400,1600,600)[1]);
            line(xyz2xy(600,800,600)[0],xyz2xy(600,800,600)[1],xyz2xy(800,1600,600)[0],xyz2xy(800,1600,600)[1]);
            //line(320,eyeY,240, 50);
            //line(160, 50, 240, 50);
            //line(160, 50,110,0);
            //line(240, 50,290,0);
            noStroke();
            s0vadar.findPosition();
            s0vadar.drawIt();
            s0vadar.moveIt();
            timer++;
            if (mouseIsClicked || s0vadar.z <= 200) {
                timer = 0;
                scene++;
            }
            fill(255, 0, 0);
            textSize(30);
            //ext(eyeZ,50,50);
        };

        var draws1 = function() {
            background(10, 32, 74);
            if (timer === 0) {
                stars = [];
                numStars = 1000;
                eyeX = 200;
                eyeY = 200;
                eyeZ = -1;
                zw = 240;
                for (var i = 0; i < numStars; i++) {
                    stars.push(newStar(random(-5000, 9000), random(-5000,11000), random(700,3000)));
                }
                s1vadar = newKylo(200,300,400);
            }
            for (var i = 0; i < numStars; i++) {
                stars[i].findPosition();
                stars[i].drawIt();
            }
            if (timer % 30 === 0) {
                xMove = random(-1.5,1.5);
                yMove = random(-1.2,0.5);
                zMove = random(-1.5,0);
                if (eyeZ < -150) {
                    zMove = random(0,1.5);
                }
            }
            eyeX += xMove;
            eyeY += yMove;
            eyeZ += zMove;
            fill(13, 13, 13);
            //rect(75,eyeY,250,400-eyeY);
            //quad(75,eyeY,75,400,0,400,0,229);
            //quad(325,eyeY,325,400,400,400,400,229);
            //quad(75,eyeY,325,eyeY,810,400,-409,400);
            quad(xyz2xy(-400,0,600)[0],xyz2xy(-400,0,600)[1],xyz2xy(800,0,600)[0],xyz2xy(800,0,600)[1],xyz2xy(800,0,0)[0],xyz2xy(800,0,0)[1],xyz2xy(-400,0,0)[0],xyz2xy(-400,0,0)[1]);
            stroke(255, 0, 0);
            strokeWeight(25);
            //point(xyz2xy(400,0,160)[0],xyz2xy(400,0,160)[1]);
            stroke(13, 13, 13);
            strokeWeight(10);
            //line(80,eyeY,160, 50);
            line(xyz2xy(-400,0,600)[0],xyz2xy(-400,0,600)[1],xyz2xy(-200,800,600)[0],xyz2xy(-200,800,600)[1]);
            line(xyz2xy(800,0,600)[0],xyz2xy(800,0,600)[1],xyz2xy(600,800,600)[0],xyz2xy(600,800,600)[1]);
            line(xyz2xy(-200,800,600)[0],xyz2xy(-200,800,600)[1],xyz2xy(600,800,600)[0],xyz2xy(600,800,600)[1]);
            line(xyz2xy(-200,800,600)[0],xyz2xy(-200,800,600)[1],xyz2xy(-400,1600,600)[0],xyz2xy(-400,1600,600)[1]);
            line(xyz2xy(600,800,600)[0],xyz2xy(600,800,600)[1],xyz2xy(800,1600,600)[0],xyz2xy(800,1600,600)[1]);
            //line(320,eyeY,240, 50);
            //line(160, 50, 240, 50);
            //line(160, 50,110,0);
            //line(240, 50,290,0);
            noStroke();
            s1vadar.findPosition();
            s1vadar.drawIt();
            s1vadar.moveIt();
            timer++;
            if (mouseIsClicked || s1vadar.z <= 200) {
                timer = 0;
                scene++;
            }
            fill(255, 0, 0);
            textSize(30);
            //ext(eyeZ,50,50);
        };

        var drawp10 = function() {
            if (timer === 0) {
                stars = [];
                numStars = 1000;
                eyeX = 200;
                eyeY = 200;
                eyeZ = -1;
                zw = 240;
                for (var i = 0; i < numStars; i++) {
                    stars.push(newStar(random(-3000, 7000), random(-3000,7000), random(700,3000)));
                }
            } else if (timer < 100) {
                background(0, 0, 0);
                for (var i = 0; i < numStars; i++) {
                    stars[i].findPosition();
                    stars[i].drawIt();
                }
                fill(191, 133, 101);
                ellipse(200,200,150,150);
                fill(125, 79, 85);
                ellipse(223,168,60,50);
                ellipse(201,178,30,50);
                ellipse(188,183,20,30);
                ellipse(246,194,50,50);
                ellipse(172,232,50,40);
                ellipse(196,253,50,40);
                ellipse(172,215,20,20);
                ellipse(163,157,30,40);
            } else if (timer === 100) {
                for (var i = 15; i > 0; i--) {
                    rocks.push(newRock(random(350,750),0,133*i+random(-20,20),0));
                }
                for (var i = 15; i > 0; i--) {
                    rocks.push(newRock(random(-350,50),0,133*i+random(-20,20)+50,0));
                }
                eyeY = 150;
                
                opponent.x = random(-150,150);
                opponent.y1 = random(100,400);
                opponent.y2 = random(opponent.y1-50,opponent.y1+50);
                opponent.z = 300;
                opponent.xStep = 0;
                opponent.yStep1 = 0;
                opponent.yStep2 = 0;
                opponent.zStep = 0;
                opponent.drawIt = function() {
                    drawPodRacer(this.screenX,this.screenY1,this.screenY2,this.screenW);
                };
                opponent.findPosition = function() {
                    this.screenX = xyz2xy(this.x,this.y1,this.z)[0];
                    this.screenY1 = xyz2xy(this.x,this.y1,this.z)[1];
                    this.screenY2 = xyz2xy(this.x,this.y2,this.z)[1];
                    this.screenW = w2w(0.5,this.z);
                };
                opponent.moveIt = function() {
                    if (timer % 50 === 0) {
                        this.xStep = random(-1,1);
                        this.yStep1 = random(-1,1);
                        this.yStep2 = random(-1,1);
                        this.zStep = random(-2,1.5);
                    }
                    this.x += this.xStep;
                    this.y1 += this.yStep1;
                    this.y2 += this.yStep2;
                    this.z += this.zStep;
                };
                //rocks.push(newRock(200,0,1000));
            } else {
                if (timer % 20 === 0) {
                    yMove = random(-1,1);
                }
                eyeY += yMove;
                background(153, 205, 222);
                fill(222, 199, 169);
                rect(0,400-eyeY,400,400);
                fill(186, 153, 112);
                quad(200,400-eyeY,200,400-eyeY,300,400,100,400);
                for (var i = 0; i < rocks.length; i++) {
                    rocks[i].findPosition();
                    rocks[i].drawIt();
                    rocks[i].moveIt();
                    if (rocks[i].z < 50) {
                        rocks.splice(i,1);
                    }
                }
                opponent.findPosition();
                if (opponent.z > 50) {
                    opponent.drawIt();
                    opponent.moveIt();
                } else {
                    fill(0, 0, 0);
                    textSize(20);
                    text("You won the pod race!",96,200);
                }
                stroke(234, 94, 255,100);
                strokeWeight(10);
                line(355,100,45,100);
                noStroke();
                fill(166, 166, 166);
                ellipse(355,100,100,100);
                ellipse(45,100,100,100);
                fill(255, 189, 97,100);
                ellipse(355,100,80,80);
                ellipse(355,100,50,50);
                ellipse(45,100,80,80);
                ellipse(45,100,50,50);
            }
            if (timer > 1000 || mouseIsClicked) {
                timer = 0;
                scene++;
            }
            timer++;
        };

        var drawp11 = function() {
            if (timer === 0) {
                stars = [];
                numStars = 1000;
                eyeX = 200;
                eyeY = 200;
                eyeZ = -1;
                zw = 240;
                for (var i = 0; i < numStars; i++) {
                    stars.push(newStar(random(-3000, 7000), random(-3000,7000), random(700,3000)));
                }
            } else if (timer < 100) {
                background(0, 0, 0);
                for (var i = 0; i < numStars; i++) {
                    stars[i].findPosition();
                    stars[i].drawIt();
                }
                fill(48, 156, 93);
                ellipse(200,200,150,150);
                fill(105, 158, 66);
                ellipse(223,168,60,50);
                ellipse(201,178,30,50);
                ellipse(188,183,20,30);
                ellipse(246,194,50,50);
                ellipse(172,232,50,40);
                ellipse(196,253,50,40);
                ellipse(172,215,20,20);
                ellipse(163,157,30,40);
            } else if (timer === 100) {
                for (var i = 16; i > 0; i--) {
                    trees.push(newTree(random(350,550),0,150*i+random(-20,20)));
                }
                for (var i = 16; i > 0; i--) {
                    trees.push(newTree(random(-150,50),0,150*i+random(-20,20)+50));
                }
                eyeY = 150;
                //rocks.push(newRock(200,0,1000));
            } else {
                if (timer % 20 === 0) {
                    yMove = random(-1,1);
                    xMove = random(-1,1);
                }
                eyeY += yMove;
                eyeX += xMove;
                background(70, 192, 214);
                fill(89, 56, 16);
                rect(0,400-eyeY,400,400);
                for (var i = 0; i < trees.length; i++) {
                    trees[i].findPosition();
                    trees[i].drawIt();
                    trees[i].moveIt();
                    if (trees[i].z < 50) {
                        trees.splice(i,1);
                    }
                }
            }
            if (timer > 1000 || mouseIsClicked) {
                timer = 0;
                scene++;
            }
            timer++;
        };

        var drawp12 = function() {
            if (timer === 0) {
                eyeX = 200;
                eyeY = 200;
                eyeZ = -1;
                thetaMove = 0;
                zw = 240;
                falcon = newFalcon(200,400,800);
                for (var i = 25; i > 0; i--) {
                    //rocks.push(newRock(random(-450,850),random(-450,850),40*i+random(-20,20),1));
                    rocks.push(newRock(random(-650,650),20,40*i+random(-20,20),2));
                }
                for (var i = 10; i > 0; i--) {
                    //rocks.push(newRock(random(-450,850),random(-450,850),40*i+random(-20,20),1));
                    boxes.push(newBox(random(-450,450),0,250*i+random(-20,20)+300,250,180,100,false,135, 116, 91,135, 116, 91,222, 191, 151));
                    boxes.push(newBox(random(-750,750),600,250*i+random(-20,20)+300,350,280,100,true,135, 116, 91,135, 116, 91,222, 191, 151));
                    fill(133, 112, 84);
                    fill(222, 191, 151);
                    fill(135, 116, 91);
                }
                stars = [];
                numStars = 1000;
                for (var i = 0; i < numStars; i++) {
                    stars.push(newStar(random(-3000, 7000), random(-3000,7000), random(700,3000)));
                }
            } else if (timer < 100) {
                background(0, 0, 0);
                for (var i = 0; i < numStars; i++) {
                    stars[i].findPosition();
                    stars[i].drawIt();
                }
                fill(163, 124, 96);
                ellipse(200,200,150,150);
                fill(173, 131, 102);
                ellipse(223,168,60,50);
                ellipse(201,178,30,50);
                ellipse(188,183,20,30);
                ellipse(246,194,50,50);
                ellipse(172,232,50,40);
                ellipse(196,253,50,40);
                ellipse(172,215,20,20);
                ellipse(163,157,30,40);
            } else if (timer < 700) {
                if (timer % 20 === 0) {
                    yMove = random(-1,1);
                }
                eyeY += yMove;
                background(153, 205, 222);
                fill(161, 126, 102);
                rect(0,400-eyeY,400,400);
                fill(186, 153, 112);
                //quad(200,400-eyeY,200,400-eyeY,300,400,100,400);
                for (var i = 0; i < rocks.length; i++) {
                    rocks[i].findPosition();
                    rocks[i].drawIt();
                    rocks[i].moveIt();
                    if (rocks[i].z < 50) {
                        rocks.splice(i,1);
                    }
                }
                falcon.findPosition();
                falcon.drawIt();
                falcon.moveIt();
            } else {
                background(92, 73, 56);
                fill(189, 163, 127);
                rect(0,xyz2xy(0,-60,3000)[1],400,400);
                rect(0,0,400,xyz2xy(0,1000,3000)[1]);
                for (var i = 0; i < boxes.length; i++) {
                    boxes[i].findPos();
                    boxes[i].drawIt(false);
                    boxes[i].moveIt();
                    if (boxes[i].pos[0][2] < 20) {
                        boxes.splice(i,1);
                    }
                }
            }
            timer++;
            if (timer > 1500 || mouseIsClicked) {
                timer = 0;
                scene++;
            }
        };

        var drawt0 = function() {
            background(0, 0, 0);
            fill(120, 183, 222,175);
            quad(256,252,148,270,179,146,211,146);
            quad(232,252,170,270,190,146,199,146);
            drawYoda(200,270,1.5);
            fill(255, 255, 255);
            textSize(20);
            text("Yoda, I am. On your ship, one loyal to our \ncause, you carry. Mmm. Deliver them, you\nmust, or all will be lost. To your R2 unit,\ncoordinates I will send.\n            May the Force be with you.",15,30);
            timer++;
            if (mouseIsClicked || timer > 600) {
                timer = 0;
                scene++;
            }
        };

        var drawp20 = function() {
            if (timer === 0) {
                stars = [];
                numStars = 1000;
                eyeX = 200;
                eyeY = 200;
                eyeZ = -1;
                zw = 240;
                for (var i = 0; i < numStars; i++) {
                    stars.push(newStar(random(-3000, 7000), random(-3000,7000), random(700,3000)));
                }
            } else if (timer < 100) {
                background(0, 0, 0);
                for (var i = 0; i < numStars; i++) {
                    stars[i].findPosition();
                    stars[i].drawIt();
                }
                fill(43, 131, 179);
                ellipse(200,200,150,150);
                fill(30, 112, 19);
                ellipse(223,168,60,50);
                ellipse(201,178,30,50);
                ellipse(188,183,20,30);
                ellipse(246,194,50,50);
                ellipse(172,232,50,40);
                ellipse(196,253,50,40);
                ellipse(172,215,20,20);
                ellipse(163,157,30,40);
            } else if (timer === 100) {
                eyeY = 100;
                for (var i = 12; i > 0; i--) {
                    seaweed.push(newSeaweed(random(350,750),0,300*i+random(-40,40)));
                }
                for (var i = 12; i > 0; i--) {
                    seaweed.push(newSeaweed(random(-350,50),0,300*i+random(-40,40)+50));
                }
                for (var i = 10; i > 0; i--) {
                    fish1.push(newFish1(random(-350,750),random(50,1200),300*i+random(-40,40)));
                }
                for (var i = 6; i > 0; i--) {
                    fish2.push(newFish2(random(-350,750),random(50,1200),400*i+random(-40,40)));
                }
            } else {
                fill(13, 24, 122);
                rect(0,0,400,400-eyeY);
                if (timer % 20 === 0) {
                    yMove = random(-1,1);
                }
                eyeY += yMove;
                fill(222, 199, 169);
                rect(0,400-eyeY,400,400);
                for (var i = 0; i < seaweed.length; i++) {
                    seaweed[i].findPosition();
                    seaweed[i].drawIt();
                    seaweed[i].moveIt();
                    if (seaweed[i].z < 50) {
                        seaweed.splice(i,1);
                    }
                }
                for (var i = 0; i < fish1.length; i++) {
                    fish1[i].findPosition();
                    fish1[i].drawIt();
                    fish1[i].moveIt();
                    if (fish1[i].z < 50) {
                        fish1.splice(i,1);
                    }
                }
                for (var i = 0; i < fish2.length; i++) {
                    fish2[i].findPosition();
                    fish2[i].drawIt();
                    fish2[i].moveIt();
                    if (fish2[i].z < 50) {
                        fish2.splice(i,1);
                    }
                }
                fill(13, 24, 122,100);
                rect(0,0,400,400);
            }
            timer++;
            if (timer > 1000 || mouseIsClicked) {
                timer = 0;
                scene++;
            }
        };

        var testBox = newBox(305, 136, 88, 70, 100, 130, false, 130, 130, 130,64, 64, 64,201, 201, 201);

        var drawp21 = function() {
            if (timer === 0) {
                eyeX = 200;
                eyeY = 200;
                eyeZ = -1;
                thetaMove = 0;
                zw = 240;
                boxes = [];
                rocks = [];
                for (var i = 20; i > 0; i--) {
                    //rocks.push(newRock(random(-450,850),random(-450,850),40*i+random(-20,20),1));
                    rocks.push(newRock(random(-450,450),random(-450,450),40*i+random(-20,20),1));
                }
                for (var i = 10; i > 0; i--) {
                    //rocks.push(newRock(random(-450,850),random(-450,850),40*i+random(-20,20),1));
                    boxes.push(newBox(random(-450,450),0,250*i+random(-20,20)+300,250,180,100,false,87, 87, 92,32, 32, 33,130, 130, 133));
                    boxes.push(newBox(random(-750,750),600,250*i+random(-20,20)+300,350,280,100,true,87, 87, 92,32, 32, 33,130, 130, 133));
                    fill(87, 87, 92);
                    fill(32, 32, 33);
                    fill(130, 130, 133);
                }
                deathStar = newDeathStar(0,0,800);
            } else if (deathStar.z > 50) {
                background(0, 0, 0);
                if (timer % 30 === 0) {
                    thetaMove = random(-2,2);
                }
                theta += thetaMove;
                //debug(theta);
                push();
                eyeX = 0;
                eyeY = 0;
                translate(200,200);
                rotate(theta);
                deathStar.findPosition();
                deathStar.drawIt();
                deathStar.moveIt();
                pop();
                eyeX = 200;
                eyeY = 200;
                for (var i = 0; i < rocks.length; i++) {
                    rocks[i].findPosition();
                    rocks[i].drawIt(theta);
                    rocks[i].moveIt();
                    if (rocks[i].z < 50) {
                        rocks.splice(i,1);
                    }
                }
            } else {
                background(0, 0, 0);
                fill(57, 58, 59);
                rect(0,xyz2xy(0,-60,3000)[1],400,200);
                rect(0,0,400,xyz2xy(0,1000,3000)[1]);
                for (var i = 0; i < boxes.length; i++) {
                    boxes[i].findPos();
                    boxes[i].drawIt(false);
                    boxes[i].moveIt();
                    if (boxes[i].pos[0][2] < 20) {
                        boxes.splice(i,1);
                    }
                }
            }
            timer++;
            if (timer > 1500 || mouseIsClicked) {
                timer = 0;
                scene++;
            }
        };

        p.draw = () => {
            keyCode = p.keyCode;
            mouseButton = p.mouseButton;
            pmouseX = p.pmouseX;
            pmouseY = p.pmouseY;
            mouseX = p.mouseX;
            mouseY = p.mouseY;
            
            //Put code here
            if (scene === 2 || scene === 5) {
                drawLightspeed();
            } else if (scene === 0) {
                drawMenu();
            } else if (scene === 1) {
                if (stopped === 0) {
                    draws0();
                } else if (stopped === 1) {
                    draws1();
                }
            } else if (scene === 3) {
                if (planet1 === 0) {
                    drawp10();
                } else if (planet1 === 1) {
                    drawp11();
                } else if (planet1 === 2) {
                    drawp12();
                }
            } else if (scene === 4) {
                if (transmission === 0) {
                    drawt0();
                }
            } else if (scene === 6) {
                if (planet2 === 0) {
                    drawp20();
                }
                if (planet2 === 1) {
                    drawp21();
                }
            } else {
                background(0, 0, 0);
                fill(255, 255, 255);
                textSize(25);
                text("Thank you for flying Star Tours!\n                Buh-bye!",29,50);
            }
            
            keyIsReleased = false;
            mouseIsClicked = false;
        }
          
    }
  
    componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {
      return (
        <Paper ref={this.myRef} className="normalCanvas"></Paper>
      )
    }
  }

  export default StarToursCanvas2;
  