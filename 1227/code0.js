gdjs._38283_38957Code = {};
gdjs._38283_38957Code.localVariables = [];
gdjs._38283_38957Code.GDNewTiledSpriteObjects1= [];
gdjs._38283_38957Code.GDNewTiledSpriteObjects2= [];
gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1= [];
gdjs._38283_38957Code.GDMedievalButtonBeigeObjects2= [];
gdjs._38283_38957Code.GDNewSpriteObjects1= [];
gdjs._38283_38957Code.GDNewSpriteObjects2= [];


gdjs._38283_38957Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1[k] = gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "conversation", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._38283_38957Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._38283_38957Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_38957Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("1111 (1)");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "yisell_sound_201403232254142562_88366.mp3", true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("0");
}}

}


};

gdjs._38283_38957Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._38283_38957Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._38283_38957Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1.length = 0;
gdjs._38283_38957Code.GDMedievalButtonBeigeObjects2.length = 0;
gdjs._38283_38957Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_38957Code.GDNewSpriteObjects2.length = 0;

gdjs._38283_38957Code.eventsList0(runtimeScene);
gdjs._38283_38957Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._38283_38957Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._38283_38957Code.GDMedievalButtonBeigeObjects1.length = 0;
gdjs._38283_38957Code.GDMedievalButtonBeigeObjects2.length = 0;
gdjs._38283_38957Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_38957Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['_38283_38957Code'] = gdjs._38283_38957Code;
