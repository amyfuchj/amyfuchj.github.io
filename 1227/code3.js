gdjs.Game_32WinCode = {};
gdjs.Game_32WinCode.localVariables = [];
gdjs.Game_32WinCode.GDWinObjects1= [];
gdjs.Game_32WinCode.GDWinObjects2= [];
gdjs.Game_32WinCode.GDTextObjects1= [];
gdjs.Game_32WinCode.GDTextObjects2= [];
gdjs.Game_32WinCode.GDScoreIconObjects1= [];
gdjs.Game_32WinCode.GDScoreIconObjects2= [];
gdjs.Game_32WinCode.GDScoreObjects1= [];
gdjs.Game_32WinCode.GDScoreObjects2= [];
gdjs.Game_32WinCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32WinCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_32WinCode.GDNewSpriteObjects1= [];
gdjs.Game_32WinCode.GDNewSpriteObjects2= [];
gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1= [];
gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects2= [];
gdjs.Game_32WinCode.GDNewSprite2Objects1= [];
gdjs.Game_32WinCode.GDNewSprite2Objects2= [];


gdjs.Game_32WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Game_32WinCode.mapOfGDgdjs_9546Game_959532WinCode_9546GDWinObjects1Objects = Hashtable.newFrom({"Win": gdjs.Game_32WinCode.GDWinObjects1});
gdjs.Game_32WinCode.mapOfGDgdjs_9546Game_959532WinCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Game_32WinCode.GDNewSpriteObjects1});
gdjs.Game_32WinCode.mapOfGDgdjs_9546Game_959532WinCode_9546GDMedievalButtonBeigeObjects1Objects = Hashtable.newFrom({"MedievalButtonBeige": gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1});
gdjs.Game_32WinCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32WinCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32WinCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.Game_32WinCode.GDWinObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "yisell_sound_2014042815100491321_88366.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Game_32WinCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32WinCode.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Game_32WinCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Game_32WinCode.GDNewSpriteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32WinCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.Game_32WinCode.GDWinObjects1[i].addForceTowardPosition(500, 380, 80, 1);
}
}{for(var i = 0, len = gdjs.Game_32WinCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.Game_32WinCode.GDWinObjects1[i].getBehavior("Tween").addObjectScaleTween3(gdjs.evtTools.common.toString((gdjs.Game_32WinCode.GDWinObjects1[i].getBehavior("Scale").getScale())), 1 / 10, "linear", 15, false, false);
}
}
{ //Subevents
gdjs.Game_32WinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32WinCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.Game_32WinCode.GDWinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32WinCode.mapOfGDgdjs_9546Game_959532WinCode_9546GDWinObjects1Objects, gdjs.Game_32WinCode.mapOfGDgdjs_9546Game_959532WinCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32WinCode.GDWinObjects1 */
gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32WinCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.Game_32WinCode.GDWinObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32WinCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.Game_32WinCode.GDWinObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32WinCode.mapOfGDgdjs_9546Game_959532WinCode_9546GDMedievalButtonBeigeObjects1Objects, 399, 413, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1[k] = gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "開頭", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


};

gdjs.Game_32WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32WinCode.GDWinObjects1.length = 0;
gdjs.Game_32WinCode.GDWinObjects2.length = 0;
gdjs.Game_32WinCode.GDTextObjects1.length = 0;
gdjs.Game_32WinCode.GDTextObjects2.length = 0;
gdjs.Game_32WinCode.GDScoreIconObjects1.length = 0;
gdjs.Game_32WinCode.GDScoreIconObjects2.length = 0;
gdjs.Game_32WinCode.GDScoreObjects1.length = 0;
gdjs.Game_32WinCode.GDScoreObjects2.length = 0;
gdjs.Game_32WinCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32WinCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32WinCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32WinCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.Game_32WinCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32WinCode.GDNewSprite2Objects2.length = 0;

gdjs.Game_32WinCode.eventsList1(runtimeScene);
gdjs.Game_32WinCode.GDWinObjects1.length = 0;
gdjs.Game_32WinCode.GDWinObjects2.length = 0;
gdjs.Game_32WinCode.GDTextObjects1.length = 0;
gdjs.Game_32WinCode.GDTextObjects2.length = 0;
gdjs.Game_32WinCode.GDScoreIconObjects1.length = 0;
gdjs.Game_32WinCode.GDScoreIconObjects2.length = 0;
gdjs.Game_32WinCode.GDScoreObjects1.length = 0;
gdjs.Game_32WinCode.GDScoreObjects2.length = 0;
gdjs.Game_32WinCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32WinCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32WinCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32WinCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.Game_32WinCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.Game_32WinCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32WinCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['Game_32WinCode'] = gdjs.Game_32WinCode;
