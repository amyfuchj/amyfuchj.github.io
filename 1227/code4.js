gdjs.conversationCode = {};
gdjs.conversationCode.localVariables = [];
gdjs.conversationCode.GDNewTiledSpriteObjects1= [];
gdjs.conversationCode.GDNewTiledSpriteObjects2= [];
gdjs.conversationCode.GDNewSpriteObjects1= [];
gdjs.conversationCode.GDNewSpriteObjects2= [];
gdjs.conversationCode.GDNewSprite2Objects1= [];
gdjs.conversationCode.GDNewSprite2Objects2= [];
gdjs.conversationCode.GDNewTextObjects1= [];
gdjs.conversationCode.GDNewTextObjects2= [];
gdjs.conversationCode.GDNewText2Objects1= [];
gdjs.conversationCode.GDNewText2Objects2= [];
gdjs.conversationCode.GDNewText3Objects1= [];
gdjs.conversationCode.GDNewText3Objects2= [];
gdjs.conversationCode.GDNewText4Objects1= [];
gdjs.conversationCode.GDNewText4Objects2= [];
gdjs.conversationCode.GDMedievalButtonBeigeObjects1= [];
gdjs.conversationCode.GDMedievalButtonBeigeObjects2= [];
gdjs.conversationCode.GDMedievalButtonBeige2Objects1= [];
gdjs.conversationCode.GDMedievalButtonBeige2Objects2= [];
gdjs.conversationCode.GDMedievalButtonBeige3Objects1= [];
gdjs.conversationCode.GDMedievalButtonBeige3Objects2= [];


gdjs.conversationCode.mapOfGDgdjs_9546conversationCode_9546GDMedievalButtonBeige2Objects1Objects = Hashtable.newFrom({"MedievalButtonBeige2": gdjs.conversationCode.GDMedievalButtonBeige2Objects1});
gdjs.conversationCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige3"), gdjs.conversationCode.GDMedievalButtonBeige3Objects1);
{for(var i = 0, len = gdjs.conversationCode.GDMedievalButtonBeige3Objects1.length ;i < len;++i) {
    gdjs.conversationCode.GDMedievalButtonBeige3Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.conversationCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.conversationCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.conversationCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.conversationCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.conversationCode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.conversationCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.conversationCode.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.conversationCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.conversationCode.GDNewSpriteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "yisell_sound_2007_11_17_20_24_434745.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.conversationCode.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.conversationCode.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.conversationCode.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.conversationCode.GDMedievalButtonBeigeObjects1[k] = gdjs.conversationCode.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.conversationCode.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.conversationCode.GDMedievalButtonBeigeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.conversationCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.conversationCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.conversationCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.conversationCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.conversationCode.GDNewText4Objects1);
gdjs.conversationCode.GDMedievalButtonBeige2Objects1.length = 0;

{for(var i = 0, len = gdjs.conversationCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.conversationCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.conversationCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.conversationCode.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.conversationCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.conversationCode.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.conversationCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.conversationCode.GDNewText4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.conversationCode.GDMedievalButtonBeigeObjects1.length ;i < len;++i) {
    gdjs.conversationCode.GDMedievalButtonBeigeObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.conversationCode.mapOfGDgdjs_9546conversationCode_9546GDMedievalButtonBeige2Objects1Objects, 447, 489, "");
}{for(var i = 0, len = gdjs.conversationCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.conversationCode.GDNewSpriteObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige2"), gdjs.conversationCode.GDMedievalButtonBeige2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.conversationCode.GDMedievalButtonBeige2Objects1.length;i<l;++i) {
    if ( gdjs.conversationCode.GDMedievalButtonBeige2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.conversationCode.GDMedievalButtonBeige2Objects1[k] = gdjs.conversationCode.GDMedievalButtonBeige2Objects1[i];
        ++k;
    }
}
gdjs.conversationCode.GDMedievalButtonBeige2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "教學");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige3"), gdjs.conversationCode.GDMedievalButtonBeige3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.conversationCode.GDMedievalButtonBeige3Objects1.length;i<l;++i) {
    if ( gdjs.conversationCode.GDMedievalButtonBeige3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.conversationCode.GDMedievalButtonBeige3Objects1[k] = gdjs.conversationCode.GDMedievalButtonBeige3Objects1[i];
        ++k;
    }
}
gdjs.conversationCode.GDMedievalButtonBeige3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.conversationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.conversationCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.conversationCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.conversationCode.GDNewSpriteObjects1.length = 0;
gdjs.conversationCode.GDNewSpriteObjects2.length = 0;
gdjs.conversationCode.GDNewSprite2Objects1.length = 0;
gdjs.conversationCode.GDNewSprite2Objects2.length = 0;
gdjs.conversationCode.GDNewTextObjects1.length = 0;
gdjs.conversationCode.GDNewTextObjects2.length = 0;
gdjs.conversationCode.GDNewText2Objects1.length = 0;
gdjs.conversationCode.GDNewText2Objects2.length = 0;
gdjs.conversationCode.GDNewText3Objects1.length = 0;
gdjs.conversationCode.GDNewText3Objects2.length = 0;
gdjs.conversationCode.GDNewText4Objects1.length = 0;
gdjs.conversationCode.GDNewText4Objects2.length = 0;
gdjs.conversationCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.conversationCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.conversationCode.GDMedievalButtonBeige2Objects1.length = 0;
gdjs.conversationCode.GDMedievalButtonBeige2Objects2.length = 0;
gdjs.conversationCode.GDMedievalButtonBeige3Objects1.length = 0;
gdjs.conversationCode.GDMedievalButtonBeige3Objects2.length = 0;

gdjs.conversationCode.eventsList0(runtimeScene);
gdjs.conversationCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.conversationCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.conversationCode.GDNewSpriteObjects1.length = 0;
gdjs.conversationCode.GDNewSpriteObjects2.length = 0;
gdjs.conversationCode.GDNewSprite2Objects1.length = 0;
gdjs.conversationCode.GDNewSprite2Objects2.length = 0;
gdjs.conversationCode.GDNewTextObjects1.length = 0;
gdjs.conversationCode.GDNewTextObjects2.length = 0;
gdjs.conversationCode.GDNewText2Objects1.length = 0;
gdjs.conversationCode.GDNewText2Objects2.length = 0;
gdjs.conversationCode.GDNewText3Objects1.length = 0;
gdjs.conversationCode.GDNewText3Objects2.length = 0;
gdjs.conversationCode.GDNewText4Objects1.length = 0;
gdjs.conversationCode.GDNewText4Objects2.length = 0;
gdjs.conversationCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.conversationCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.conversationCode.GDMedievalButtonBeige2Objects1.length = 0;
gdjs.conversationCode.GDMedievalButtonBeige2Objects2.length = 0;
gdjs.conversationCode.GDMedievalButtonBeige3Objects1.length = 0;
gdjs.conversationCode.GDMedievalButtonBeige3Objects2.length = 0;


return;

}

gdjs['conversationCode'] = gdjs.conversationCode;
