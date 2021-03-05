import p5 from "p5";

//Doesn't do what it's supposed to

var remove=function(){return p5.remove.apply(p5,arguments);},setup=function(){return p5.setup.apply(p5,arguments);},draw=function(){return p5.draw.apply(p5,arguments);},cursor=function(){return p5.cursor.apply(p5,arguments);},frameRate=function(){return p5.frameRate.apply(p5,arguments);},getFrameRate=function(){return p5.getFrameRate.apply(p5,arguments);},setFrameRate=function(){return p5.setFrameRate.apply(p5,arguments);},noCursor=function(){return p5.noCursor.apply(p5,arguments);},fullscreen=function(){return p5.fullscreen.apply(p5,arguments);},pixelDensity=function(){return p5.pixelDensity.apply(p5,arguments);},displayDensity=function(){return p5.displayDensity.apply(p5,arguments);},getURL=function(){return p5.getURL.apply(p5,arguments);},getURLPath=function(){return p5.getURLPath.apply(p5,arguments);},getURLParams=function(){return p5.getURLParams.apply(p5,arguments);},pushStyle=function(){return p5.pushStyle.apply(p5,arguments);},popStyle=function(){return p5.popStyle.apply(p5,arguments);},popMatrix=function(){return p5.popMatrix.apply(p5,arguments);},pushMatrix=function(){return p5.pushMatrix.apply(p5,arguments);},registerPromisePreload=function(){return p5.registerPromisePreload.apply(p5,arguments);},camera=function(){return p5.camera.apply(p5,arguments);},perspective=function(){return p5.perspective.apply(p5,arguments);},ortho=function(){return p5.ortho.apply(p5,arguments);},frustum=function(){return p5.frustum.apply(p5,arguments);},createCamera=function(){return p5.createCamera.apply(p5,arguments);},setCamera=function(){return p5.setCamera.apply(p5,arguments);},setAttributes=function(){return p5.setAttributes.apply(p5,arguments);},createCanvas=function(){return p5.createCanvas.apply(p5,arguments);},resizeCanvas=function(){return p5.resizeCanvas.apply(p5,arguments);},noCanvas=function(){return p5.noCanvas.apply(p5,arguments);},createGraphics=function(){return p5.createGraphics.apply(p5,arguments);},blendMode=function(){return p5.blendMode.apply(p5,arguments);},noLoop=function(){return p5.noLoop.apply(p5,arguments);},loop=function(){return p5.loop.apply(p5,arguments);},isLooping=function(){return p5.isLooping.apply(p5,arguments);},push=function(){return p5.push.apply(p5,arguments);},pop=function(){return p5.pop.apply(p5,arguments);},redraw=function(){return p5.redraw.apply(p5,arguments);},applyMatrix=function(){return p5.applyMatrix.apply(p5,arguments);},resetMatrix=function(){return p5.resetMatrix.apply(p5,arguments);},rotate=function(){return p5.rotate.apply(p5,arguments);},rotateX=function(){return p5.rotateX.apply(p5,arguments);},rotateY=function(){return p5.rotateY.apply(p5,arguments);},rotateZ=function(){return p5.rotateZ.apply(p5,arguments);},scale=function(){return p5.scale.apply(p5,arguments);},shearX=function(){return p5.shearX.apply(p5,arguments);},shearY=function(){return p5.shearY.apply(p5,arguments);},translate=function(){return p5.translate.apply(p5,arguments);},arc=function(){return p5.arc.apply(p5,arguments);},ellipse=function(){return p5.ellipse.apply(p5,arguments);},circle=function(){return p5.circle.apply(p5,arguments);},line=function(){return p5.line.apply(p5,arguments);},point=function(){return p5.point.apply(p5,arguments);},quad=function(){return p5.quad.apply(p5,arguments);},rect=function(){return p5.rect.apply(p5,arguments);},square=function(){return p5.square.apply(p5,arguments);},triangle=function(){return p5.triangle.apply(p5,arguments);},ellipseMode=function(){return p5.ellipseMode.apply(p5,arguments);},noSmooth=function(){return p5.noSmooth.apply(p5,arguments);},rectMode=function(){return p5.rectMode.apply(p5,arguments);},smooth=function(){return p5.smooth.apply(p5,arguments);},strokeCap=function(){return p5.strokeCap.apply(p5,arguments);},strokeJoin=function(){return p5.strokeJoin.apply(p5,arguments);},strokeWeight=function(){return p5.strokeWeight.apply(p5,arguments);},bezier=function(){return p5.bezier.apply(p5,arguments);},bezierDetail=function(){return p5.bezierDetail.apply(p5,arguments);},bezierPoint=function(){return p5.bezierPoint.apply(p5,arguments);},bezierTangent=function(){return p5.bezierTangent.apply(p5,arguments);},curve=function(){return p5.curve.apply(p5,arguments);},curveDetail=function(){return p5.curveDetail.apply(p5,arguments);},curveTightness=function(){return p5.curveTightness.apply(p5,arguments);},curvePoint=function(){return p5.curvePoint.apply(p5,arguments);},curveTangent=function(){return p5.curveTangent.apply(p5,arguments);},beginContour=function(){return p5.beginContour.apply(p5,arguments);},beginShape=function(){return p5.beginShape.apply(p5,arguments);},bezierVertex=function(){return p5.bezierVertex.apply(p5,arguments);},curveVertex=function(){return p5.curveVertex.apply(p5,arguments);},endContour=function(){return p5.endContour.apply(p5,arguments);},endShape=function(){return p5.endShape.apply(p5,arguments);},quadraticVertex=function(){return p5.quadraticVertex.apply(p5,arguments);},vertex=function(){return p5.vertex.apply(p5,arguments);},textOutput=function(){return p5.textOutput.apply(p5,arguments);},gridOutput=function(){return p5.gridOutput.apply(p5,arguments);},alpha=function(){return p5.alpha.apply(p5,arguments);},blue=function(){return p5.blue.apply(p5,arguments);},brightness=function(){return p5.brightness.apply(p5,arguments);},color=function(){return p5.color.apply(p5,arguments);},green=function(){return p5.green.apply(p5,arguments);},hue=function(){return p5.hue.apply(p5,arguments);},lerpColor=function(){return p5.lerpColor.apply(p5,arguments);},lightness=function(){return p5.lightness.apply(p5,arguments);},red=function(){return p5.red.apply(p5,arguments);},saturation=function(){return p5.saturation.apply(p5,arguments);},background=function(){return p5.background.apply(p5,arguments);},clear=function(){return p5.clear.apply(p5,arguments);},colorMode=function(){return p5.colorMode.apply(p5,arguments);},fill=function(){return p5.fill.apply(p5,arguments);},noFill=function(){return p5.noFill.apply(p5,arguments);},noStroke=function(){return p5.noStroke.apply(p5,arguments);},stroke=function(){return p5.stroke.apply(p5,arguments);},erase=function(){return p5.erase.apply(p5,arguments);},noErase=function(){return p5.noErase.apply(p5,arguments);},createStringDict=function(){return p5.createStringDict.apply(p5,arguments);},createNumberDict=function(){return p5.createNumberDict.apply(p5,arguments);},storeItem=function(){return p5.storeItem.apply(p5,arguments);},getItem=function(){return p5.getItem.apply(p5,arguments);},clearStorage=function(){return p5.clearStorage.apply(p5,arguments);},removeItem=function(){return p5.removeItem.apply(p5,arguments);},select=function(){return p5.select.apply(p5,arguments);},selectAll=function(){return p5.selectAll.apply(p5,arguments);},removeElements=function(){return p5.removeElements.apply(p5,arguments);},createDiv=function(){return p5.createDiv.apply(p5,arguments);},createP=function(){return p5.createP.apply(p5,arguments);},createSpan=function(){return p5.createSpan.apply(p5,arguments);},createImg=function(){return p5.createImg.apply(p5,arguments);},createA=function(){return p5.createA.apply(p5,arguments);},createSlider=function(){return p5.createSlider.apply(p5,arguments);},createButton=function(){return p5.createButton.apply(p5,arguments);},createCheckbox=function(){return p5.createCheckbox.apply(p5,arguments);},createSelect=function(){return p5.createSelect.apply(p5,arguments);},createRadio=function(){return p5.createRadio.apply(p5,arguments);},createColorPicker=function(){return p5.createColorPicker.apply(p5,arguments);},createInput=function(){return p5.createInput.apply(p5,arguments);},createFileInput=function(){return p5.createFileInput.apply(p5,arguments);},createVideo=function(){return p5.createVideo.apply(p5,arguments);},createAudio=function(){return p5.createAudio.apply(p5,arguments);},createCapture=function(){return p5.createCapture.apply(p5,arguments);},createElement=function(){return p5.createElement.apply(p5,arguments);},describe=function(){return p5.describe.apply(p5,arguments);},describeElement=function(){return p5.describeElement.apply(p5,arguments);},setMoveThreshold=function(){return p5.setMoveThreshold.apply(p5,arguments);},setShakeThreshold=function(){return p5.setShakeThreshold.apply(p5,arguments);},keyIsDown=function(){return p5.keyIsDown.apply(p5,arguments);},requestPointerLock=function(){return p5.requestPointerLock.apply(p5,arguments);},exitPointerLock=function(){return p5.exitPointerLock.apply(p5,arguments);},createImage=function(){return p5.createImage.apply(p5,arguments);},saveCanvas=function(){return p5.saveCanvas.apply(p5,arguments);},saveGif=function(){return p5.saveGif.apply(p5,arguments);},saveFrames=function(){return p5.saveFrames.apply(p5,arguments);},loadImage=function(){return p5.loadImage.apply(p5,arguments);},image=function(){return p5.image.apply(p5,arguments);},tint=function(){return p5.tint.apply(p5,arguments);},noTint=function(){return p5.noTint.apply(p5,arguments);},imageMode=function(){return p5.imageMode.apply(p5,arguments);},blend=function(){return p5.blend.apply(p5,arguments);},copy=function(){return p5.copy.apply(p5,arguments);},filter=function(){return p5.filter.apply(p5,arguments);},get=function(){return p5.get.apply(p5,arguments);},loadPixels=function(){return p5.loadPixels.apply(p5,arguments);},set=function(){return p5.set.apply(p5,arguments);},updatePixels=function(){return p5.updatePixels.apply(p5,arguments);},loadJSON=function(){return p5.loadJSON.apply(p5,arguments);},loadStrings=function(){return p5.loadStrings.apply(p5,arguments);},loadTable=function(){return p5.loadTable.apply(p5,arguments);},loadXML=function(){return p5.loadXML.apply(p5,arguments);},loadBytes=function(){return p5.loadBytes.apply(p5,arguments);},httpGet=function(){return p5.httpGet.apply(p5,arguments);},httpPost=function(){return p5.httpPost.apply(p5,arguments);},httpDo=function(){return p5.httpDo.apply(p5,arguments);},createWriter=function(){return p5.createWriter.apply(p5,arguments);},save=function(){return p5.save.apply(p5,arguments);},saveJSON=function(){return p5.saveJSON.apply(p5,arguments);},saveJSONObject=function(){return p5.saveJSONObject.apply(p5,arguments);},saveJSONArray=function(){return p5.saveJSONArray.apply(p5,arguments);},saveStrings=function(){return p5.saveStrings.apply(p5,arguments);},saveTable=function(){return p5.saveTable.apply(p5,arguments);},writeFile=function(){return p5.writeFile.apply(p5,arguments);},downloadFile=function(){return p5.downloadFile.apply(p5,arguments);},abs=function(){return p5.abs.apply(p5,arguments);},ceil=function(){return p5.ceil.apply(p5,arguments);},constrain=function(){return p5.constrain.apply(p5,arguments);},dist=function(){return p5.dist.apply(p5,arguments);},exp=function(){return p5.exp.apply(p5,arguments);},floor=function(){return p5.floor.apply(p5,arguments);},lerp=function(){return p5.lerp.apply(p5,arguments);},log=function(){return p5.log.apply(p5,arguments);},mag=function(){return p5.mag.apply(p5,arguments);},map=function(){return p5.map.apply(p5,arguments);},max=function(){return p5.max.apply(p5,arguments);},min=function(){return p5.min.apply(p5,arguments);},norm=function(){return p5.norm.apply(p5,arguments);},pow=function(){return p5.pow.apply(p5,arguments);},round=function(){return p5.round.apply(p5,arguments);},sq=function(){return p5.sq.apply(p5,arguments);},sqrt=function(){return p5.sqrt.apply(p5,arguments);},fract=function(){return p5.fract.apply(p5,arguments);},createVector=function(){return p5.createVector.apply(p5,arguments);},noise=function(){return p5.noise.apply(p5,arguments);},noiseDetail=function(){return p5.noiseDetail.apply(p5,arguments);},noiseSeed=function(){return p5.noiseSeed.apply(p5,arguments);},randomSeed=function(){return p5.randomSeed.apply(p5,arguments);},random=function(){return p5.random.apply(p5,arguments);},randomGaussian=function(){return p5.randomGaussian.apply(p5,arguments);},acos=function(){return p5.acos.apply(p5,arguments);},asin=function(){return p5.asin.apply(p5,arguments);},atan=function(){return p5.atan.apply(p5,arguments);},atan2=function(){return p5.atan2.apply(p5,arguments);},cos=function(){return p5.cos.apply(p5,arguments);},sin=function(){return p5.sin.apply(p5,arguments);},tan=function(){return p5.tan.apply(p5,arguments);},degrees=function(){return p5.degrees.apply(p5,arguments);},radians=function(){return p5.radians.apply(p5,arguments);},angleMode=function(){return p5.angleMode.apply(p5,arguments);},textAlign=function(){return p5.textAlign.apply(p5,arguments);},textLeading=function(){return p5.textLeading.apply(p5,arguments);},textSize=function(){return p5.textSize.apply(p5,arguments);},textStyle=function(){return p5.textStyle.apply(p5,arguments);},textWidth=function(){return p5.textWidth.apply(p5,arguments);},textAscent=function(){return p5.textAscent.apply(p5,arguments);},textDescent=function(){return p5.textDescent.apply(p5,arguments);},loadFont=function(){return p5.loadFont.apply(p5,arguments);},text=function(){return p5.text.apply(p5,arguments);},textFont=function(){return p5.textFont.apply(p5,arguments);},append=function(){return p5.append.apply(p5,arguments);},arrayCopy=function(){return p5.arrayCopy.apply(p5,arguments);},concat=function(){return p5.concat.apply(p5,arguments);},reverse=function(){return p5.reverse.apply(p5,arguments);},shorten=function(){return p5.shorten.apply(p5,arguments);},shuffle=function(){return p5.shuffle.apply(p5,arguments);},sort=function(){return p5.sort.apply(p5,arguments);},splice=function(){return p5.splice.apply(p5,arguments);},subset=function(){return p5.subset.apply(p5,arguments);},float=function(){return p5.float.apply(p5,arguments);},int=function(){return p5.int.apply(p5,arguments);},str=function(){return p5.str.apply(p5,arguments);},boolean=function(){return p5.boolean.apply(p5,arguments);},byte=function(){return p5.byte.apply(p5,arguments);},char=function(){return p5.char.apply(p5,arguments);},unchar=function(){return p5.unchar.apply(p5,arguments);},hex=function(){return p5.hex.apply(p5,arguments);},unhex=function(){return p5.unhex.apply(p5,arguments);},join=function(){return p5.join.apply(p5,arguments);},match=function(){return p5.match.apply(p5,arguments);},matchAll=function(){return p5.matchAll.apply(p5,arguments);},nf=function(){return p5.nf.apply(p5,arguments);},nfc=function(){return p5.nfc.apply(p5,arguments);},nfp=function(){return p5.nfp.apply(p5,arguments);},nfs=function(){return p5.nfs.apply(p5,arguments);},split=function(){return p5.split.apply(p5,arguments);},splitTokens=function(){return p5.splitTokens.apply(p5,arguments);},trim=function(){return p5.trim.apply(p5,arguments);},day=function(){return p5.day.apply(p5,arguments);},hour=function(){return p5.hour.apply(p5,arguments);},minute=function(){return p5.minute.apply(p5,arguments);},millis=function(){return p5.millis.apply(p5,arguments);},month=function(){return p5.month.apply(p5,arguments);},second=function(){return p5.second.apply(p5,arguments);},year=function(){return p5.year.apply(p5,arguments);},plane=function(){return p5.plane.apply(p5,arguments);},box=function(){return p5.box.apply(p5,arguments);},sphere=function(){return p5.sphere.apply(p5,arguments);},cylinder=function(){return p5.cylinder.apply(p5,arguments);},cone=function(){return p5.cone.apply(p5,arguments);},ellipsoid=function(){return p5.ellipsoid.apply(p5,arguments);},torus=function(){return p5.torus.apply(p5,arguments);},orbitControl=function(){return p5.orbitControl.apply(p5,arguments);},debugMode=function(){return p5.debugMode.apply(p5,arguments);},noDebugMode=function(){return p5.noDebugMode.apply(p5,arguments);},ambientLight=function(){return p5.ambientLight.apply(p5,arguments);},specularColor=function(){return p5.specularColor.apply(p5,arguments);},directionalLight=function(){return p5.directionalLight.apply(p5,arguments);},pointLight=function(){return p5.pointLight.apply(p5,arguments);},lights=function(){return p5.lights.apply(p5,arguments);},lightFalloff=function(){return p5.lightFalloff.apply(p5,arguments);},spotLight=function(){return p5.spotLight.apply(p5,arguments);},noLights=function(){return p5.noLights.apply(p5,arguments);},loadModel=function(){return p5.loadModel.apply(p5,arguments);},model=function(){return p5.model.apply(p5,arguments);},loadShader=function(){return p5.loadShader.apply(p5,arguments);},createShader=function(){return p5.createShader.apply(p5,arguments);},shader=function(){return p5.shader.apply(p5,arguments);},resetShader=function(){return p5.resetShader.apply(p5,arguments);},normalMaterial=function(){return p5.normalMaterial.apply(p5,arguments);},texture=function(){return p5.texture.apply(p5,arguments);},textureMode=function(){return p5.textureMode.apply(p5,arguments);},textureWrap=function(){return p5.textureWrap.apply(p5,arguments);},ambientMaterial=function(){return p5.ambientMaterial.apply(p5,arguments);},emissiveMaterial=function(){return p5.emissiveMaterial.apply(p5,arguments);},specularMaterial=function(){return p5.specularMaterial.apply(p5,arguments);},shininess=function(){return p5.shininess.apply(p5,arguments);},easierthanremovingcomma=function(){};

export { remove, setup, draw, cursor, frameRate, getFrameRate, setFrameRate, noCursor, fullscreen, pixelDensity, displayDensity, getURL, getURLPath, getURLParams, pushStyle, popStyle, popMatrix, pushMatrix, registerPromisePreload, camera, perspective, ortho, frustum, createCamera, setCamera, setAttributes, createCanvas, resizeCanvas, noCanvas, createGraphics, blendMode, noLoop, loop, isLooping, push, pop, redraw, applyMatrix, resetMatrix, rotate, rotateX, rotateY, rotateZ, scale, shearX, shearY, translate, arc, ellipse, circle, line, point, quad, rect, square, triangle, ellipseMode, noSmooth, rectMode, smooth, strokeCap, strokeJoin, strokeWeight, bezier, bezierDetail, bezierPoint, bezierTangent, curve, curveDetail, curveTightness, curvePoint, curveTangent, beginContour, beginShape, bezierVertex, curveVertex, endContour, endShape, quadraticVertex, vertex, textOutput, gridOutput, alpha, blue, brightness, color, green, hue, lerpColor, lightness, red, saturation, background, clear, colorMode, fill, noFill, noStroke, stroke, erase, noErase, createStringDict, createNumberDict, storeItem, getItem, clearStorage, removeItem, select, selectAll, removeElements, createDiv, createP, createSpan, createImg, createA, createSlider, createButton, createCheckbox, createSelect, createRadio, createColorPicker, createInput, createFileInput, createVideo, createAudio, createCapture, createElement, describe, describeElement, setMoveThreshold, setShakeThreshold, keyIsDown, requestPointerLock, exitPointerLock, createImage, saveCanvas, saveGif, saveFrames, loadImage, image, tint, noTint, imageMode, blend, copy, filter, get, loadPixels, set, updatePixels, loadJSON, loadStrings, loadTable, loadXML, loadBytes, httpGet, httpPost, httpDo, createWriter, save, saveJSON, saveJSONObject, saveJSONArray, saveStrings, saveTable, writeFile, downloadFile, abs, ceil, constrain, dist, exp, floor, lerp, log, mag, map, max, min, norm, pow, round, sq, sqrt, fract, createVector, noise, noiseDetail, noiseSeed, randomSeed, random, randomGaussian, acos, asin, atan, atan2, cos, sin, tan, degrees, radians, angleMode, textAlign, textLeading, textSize, textStyle, textWidth, textAscent, textDescent, loadFont, text, textFont, append, arrayCopy, concat, reverse, shorten, shuffle, sort, splice, subset, float, int, str, boolean, byte, char, unchar, hex, unhex, join, match, matchAll, nf, nfc, nfp, nfs, split, splitTokens, trim, day, hour, minute, millis, month, second, year, plane, box, sphere, cylinder, cone, ellipsoid, torus, orbitControl, debugMode, noDebugMode, ambientLight, specularColor, directionalLight, pointLight, lights, lightFalloff, spotLight, noLights, loadModel, model, loadShader, createShader, shader, resetShader, normalMaterial, texture, textureMode, textureWrap, ambientMaterial, emissiveMaterial, specularMaterial, shininess, easierthanremovingcomma};