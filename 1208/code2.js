gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDDeathObjects1= [];
gdjs.Game_32OverCode.GDDeathObjects2= [];
gdjs.Game_32OverCode.GDTextObjects1= [];
gdjs.Game_32OverCode.GDTextObjects2= [];
gdjs.Game_32OverCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "fail.wav", false, 100, 1);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDDeathObjects1.length = 0;
gdjs.Game_32OverCode.GDDeathObjects2.length = 0;
gdjs.Game_32OverCode.GDTextObjects1.length = 0;
gdjs.Game_32OverCode.GDTextObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDDeathObjects1.length = 0;
gdjs.Game_32OverCode.GDDeathObjects2.length = 0;
gdjs.Game_32OverCode.GDTextObjects1.length = 0;
gdjs.Game_32OverCode.GDTextObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
