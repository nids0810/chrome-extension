"use strict";

(function() {
    // Block Element Action
    var blockElementsAction = function (element) {
        element.style.background='none';
        element.style.backgroundImage='none';
        element.style.backgroundColor='#f9f9f9';
        element.style.fontFamily = 'sans-serif';
        element.style.color = '#333';
        element.style.border = 'none';
    };
    // Heading Action
    var headingAction = function(element) {
        element.style.background='none';
        element.style.fontFamily = 'sans-serif';
        element.style.color = '#333';
    }
    // Anchor Action
    var anchorAction = function(element) {
        element.style.background='none';
        element.style.backgroundColor='#f9f9f9';
        element.style.fontFamily = 'sans-serif';
        element.style.fontWeight = 'bold';
        element.style.textDecoration = 'underline';
        element.style.color = '#333';
        element.style.border = 'none';
    }
    
    // Images Action
    var imgAction = function(element) {
        element.style.display = 'none';
    }
    
    // Frame Action
    var frameAction = function(element) {
        element.style.display = 'none';
    }
    
    // Program Action
    var programAction = function(element) {
        element.style.display = 'none';
    }
    
    var blocks = document.querySelectorAll('body,div,table,tr,td,header,footer,section,aside,p,ul,li,span,main,article,details,dialog,summary,data,cite,pre,code,form');
    for (var i=0; i<blocks.length; i++) {
        blockElementsAction(blocks[i]);
    }
    
    var anchors = document.querySelectorAll('a,link,nav');
    for (var i=0; i<anchors.length; i++) {
        anchorAction(anchors[i]);
    }
    
    var media = document.querySelectorAll('img,source,picture,svg,map,area,canvas,figure,figcaption,audio,source,track,video,textarea,i');
    for (var i=0; i<media.length; i++) {
        imgAction(media[i]);
    }
    
    var heads = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
    for (var i=0; i<heads.length; i++) {
        headingAction(heads[i]);
    }
    
    var frames = document.querySelectorAll('frame,frameset,noframes,iframe');
    for (var i=0; i<frames.length; i++) {
        frameAction(frames[i]);
    }
    
    var programs = document.querySelectorAll('script,noscript,applet,embed,object,param');
    for (var i=0; i<programs.length; i++) {
        programAction(programs[i]);
    }
})();