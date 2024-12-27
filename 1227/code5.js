gdjs._25945_23416Code = {};
gdjs._25945_23416Code.localVariables = [];
gdjs._25945_23416Code.GDNewSpriteObjects1= [];
gdjs._25945_23416Code.GDNewSpriteObjects2= [];
gdjs._25945_23416Code.GDCoinObjects1= [];
gdjs._25945_23416Code.GDCoinObjects2= [];
gdjs._25945_23416Code.GDNewTextObjects1= [];
gdjs._25945_23416Code.GDNewTextObjects2= [];
gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1= [];
gdjs._25945_23416Code.GDMedievalButtonBeigeObjects2= [];
gdjs._25945_23416Code.GDNewText2Objects1= [];
gdjs._25945_23416Code.GDNewText2Objects2= [];
gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1= [];
gdjs._25945_23416Code.GDMedievalButtonBeige2Objects2= [];


gdjs._25945_23416Code.mapOfGDgdjs_9546_959525945_959523416Code_9546GDMedievalButtonBeige2Objects1Objects = Hashtable.newFrom({"MedievalButtonBeige2": gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1});
gdjs._25945_23416Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._25945_23416Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._25945_23416Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._25945_23416Code.GDNewText2Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Intro Theme.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1[k] = gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._25945_23416Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._25945_23416Code.GDNewText2Objects1);
gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1.length = 0;

{for(var i = 0, len = gdjs._25945_23416Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._25945_23416Code.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._25945_23416Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._25945_23416Code.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1.length ;i < len;++i) {
    gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._25945_23416Code.mapOfGDgdjs_9546_959525945_959523416Code_9546GDMedievalButtonBeige2Objects1Objects, 566, 499, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige2"), gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1.length;i<l;++i) {
    if ( gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1[k] = gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1[i];
        ++k;
    }
}
gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs._25945_23416Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._25945_23416Code.GDNewSpriteObjects1.length = 0;
gdjs._25945_23416Code.GDNewSpriteObjects2.length = 0;
gdjs._25945_23416Code.GDCoinObjects1.length = 0;
gdjs._25945_23416Code.GDCoinObjects2.length = 0;
gdjs._25945_23416Code.GDNewTextObjects1.length = 0;
gdjs._25945_23416Code.GDNewTextObjects2.length = 0;
gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1.length = 0;
gdjs._25945_23416Code.GDMedievalButtonBeigeObjects2.length = 0;
gdjs._25945_23416Code.GDNewText2Objects1.length = 0;
gdjs._25945_23416Code.GDNewText2Objects2.length = 0;
gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1.length = 0;
gdjs._25945_23416Code.GDMedievalButtonBeige2Objects2.length = 0;

gdjs._25945_23416Code.eventsList0(runtimeScene);
gdjs._25945_23416Code.GDNewSpriteObjects1.length = 0;
gdjs._25945_23416Code.GDNewSpriteObjects2.length = 0;
gdjs._25945_23416Code.GDCoinObjects1.length = 0;
gdjs._25945_23416Code.GDCoinObjects2.length = 0;
gdjs._25945_23416Code.GDNewTextObjects1.length = 0;
gdjs._25945_23416Code.GDNewTextObjects2.length = 0;
gdjs._25945_23416Code.GDMedievalButtonBeigeObjects1.length = 0;
gdjs._25945_23416Code.GDMedievalButtonBeigeObjects2.length = 0;
gdjs._25945_23416Code.GDNewText2Objects1.length = 0;
gdjs._25945_23416Code.GDNewText2Objects2.length = 0;
gdjs._25945_23416Code.GDMedievalButtonBeige2Objects1.length = 0;
gdjs._25945_23416Code.GDMedievalButtonBeige2Objects2.length = 0;


return;

}

gdjs['_25945_23416Code'] = gdjs._25945_23416Code;
