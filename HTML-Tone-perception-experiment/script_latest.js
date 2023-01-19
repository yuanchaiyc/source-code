/*javascript number starts from 0*/
/*curTrial is the trial number*/
      var audioElement = new Audio("dissertation_sound/exp1/practice/19A/vowel_long_after_window_r1.wav");

var audioFiles = [
"dissertation_sound/exp1/practice/19A/vowel_long_after_window_r1.wav",
"dissertation_sound/exp1/practice/19A/vowel_long_after_window_r2.wav",
"dissertation_sound/exp1/practice/19A/vowel_long_after_window_r3.wav",
"dissertation_sound/exp1/practice/19A/vowel_long_after_window_r4.wav"];


function preloadAudio(url) {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = url;
}

var loaded = 0;
function loadedAudio() {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    loaded++;
    if (loaded == audioFiles.length){
    	// all have loaded
    	console.log("All audios are preloaded");
    }
}




for (var i in audioFiles) {
    preloadAudio(audioFiles[i]);
}





      var curTrial = 0;
      var curTimeStart = 0;
      var curTimeEnd = 0;
      var responseTime = 0;
/*trialnum is the number shown on the top of the div*/
      var trialnum = 1;
/*trialnumII is the number shown on the top of the div of expII*/
      var trialnumII = 1;
/*totalnum is the number of total trials within one block*/
      var totalnum = 1;
/*starnum is the number that the star is blank*/
      var starnum = 1;
/*starid is the id of the star that is chosen to be blank*/      
      var starid = "";
/*scaleList save the confidence rating*/ 
      var scaleList = [];
/*radioselectedList save the value of the radio button selected in the identification task*/
      var radioselectedList = [];
/*wordselecteList save the character of the radio button for word identification*/
      var wordselectedList = [];
/*optionList save the options shown on the screen with the order that is displayed on the screen*/
      var optionList = [];
/*wordList is the randomized words element in the trialList list*/
      var wordList = [];

/*csvFile is the csv that will be saved at the end of the experiment*/
      var csvFile = [["trial_num", "radio_value", "word_selected", "tone_selected","scale_value", "word_list", "sound", "stimuli_length", "stimuli_tone", "stimuli_gl", "neu_between", "answer", "trial_sequence", "response_time"]];
/*wordListString stores the string version of the options displayed on the screen*/
      var wordListString = "";

/*practiceList store the practice trial for exp1*/
      var practiceList = [{words: [{character:"铁", tone: 5}, {character:"体", tone: 42},{character: "替", tone: 35},{character:"踢", tone: 5},{character:"读", tone: 2}, {character:"听", tone: 44}, {character:"退", tone: 35}],
                        path: "dissertation_sound/exp1/practice/19A/vowel_long_after_window_r1.wav", length: "long", tone: "r1", gl: "modal", answer: "NA",
                        seq: 1, neu: "NA"}, 
            /*           {words: [{character:"铁", tone: 5}, {character:"体", tone: 42},{character: "替", tone: 35},{character:"踢", tone: 5},{character:"读", tone: 2}, {character:"听", tone: 44}, {character:"退", tone: 35}],
                        path: "dissertation_sound/exp1/practice/19A/vowel_long_after_window_r2.wav", length: "long", tone: "r2", gl: "modal", answer: "NA",
                        seq: 2, neu: "NA"},
                         {words: [{character:"铁", tone: 5}, {character:"体", tone: 42},{character: "替", tone: 35},{character:"踢", tone: 5},{character:"读", tone: 2}, {character:"听", tone: 44}, {character:"退", tone: 35}],
                        path: "dissertation_sound/exp1/practice/19A/vowel_long_after_window_r3.wav", length: "long", tone: "r3", gl: "modal", answer: "NA",
                        seq: 3, neu: "NA"},
                         {words: [{character:"铁", tone: 5}, {character:"体", tone: 42},{character: "替", tone: 35},{character:"踢", tone: 5},{character:"读", tone: 2}, {character:"听", tone: 44}, {character:"退", tone: 35}],
                        path: "dissertation_sound/exp1/practice/19A/vowel_long_after_window_r4.wav", length: "long", tone: "r4", gl: "modal", answer: "NA",
                        seq: 4, neu: "NA"},
                         {words: [{character:"铁", tone: 5}, {character:"体", tone: 42},{character: "替", tone: 35},{character:"踢", tone: 5},{character:"读", tone: 2}, {character:"听", tone: 44}, {character:"退", tone: 35}],
                        path: "dissertation_sound/exp1/practice/19A/vowel_long_after_window_r5.wav", length: "long", tone: "r5", gl: "modal", answer: "NA",
                        seq: 5, neu: "NA"},
                         {words: [{character:"修", tone: 44}, {character:"右", tone: 23},{character: "救", tone: 35},{character:"肉", tone: 2},{character:"挑", tone: 44}, {character:"手", tone: 42}, {character:"树", tone: 35}],
                        path: "dissertation_sound/exp1/practice/153A/vowel_long_after_window_r1.wav", length: "long", tone: "r1", gl: "modal", answer: "NA",
                        seq: 6, neu: "NA"},
                         {words: [{character:"修", tone: 44}, {character:"右", tone: 23},{character: "救", tone: 35},{character:"肉", tone: 2},{character:"挑", tone: 44}, {character:"手", tone: 42}, {character:"树", tone: 35}],
                        path: "dissertation_sound/exp1/practice/153A/vowel_long_after_window_r2.wav", length: "long", tone: "r2", gl: "modal", answer: "NA",
                        seq: 7, neu: "NA"},
                         {words: [{character:"修", tone: 44}, {character:"右", tone: 23},{character: "救", tone: 35},{character:"肉", tone: 2},{character:"挑", tone: 44}, {character:"手", tone: 42}, {character:"树", tone: 35}],
                        path: "dissertation_sound/exp1/practice/153A/vowel_long_after_window_r3.wav", length: "long", tone: "r3", gl: "modal", answer: "NA",
                        seq: 8, neu: "NA"},
                         {words: [{character:"修", tone: 44}, {character:"右", tone: 23},{character: "救", tone: 35},{character:"肉", tone: 2},{character:"挑", tone: 44}, {character:"手", tone: 42}, {character:"树", tone: 35}],
                        path: "dissertation_sound/exp1/practice/153A/vowel_long_after_window_r4.wav", length: "long", tone: "r4", gl: "modal", answer: "NA",
                        seq: 9, neu: "NA"},
                         {words: [{character:"修", tone: 44}, {character:"右", tone: 23},{character: "救", tone: 35},{character:"肉", tone: 2},{character:"挑", tone: 44}, {character:"手", tone: 42}, {character:"树", tone: 35}],
                        path: "dissertation_sound/exp1/practice/153A/vowel_long_after_window_r5.wav", length: "long", tone: "r5", gl: "modal", answer: "NA",
                        seq: 10, neu: "NA"}*/]

/*trialList store the words displayed, the path of the sound files, and the sequence of the trials*/
      var trialList = [
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                        path: "dissertation_sound/exp1/test/vowel_long_after_window_2.wav", length: "long", tone: 2, gl: "modal",answer: "NA",
                        seq: 1, neu: "NA"}, 
            /*           {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}], 
                        path: "dissertation_sound/exp1/test/vowel_long_after_window_2_gl.wav", length: "long", tone: 2, gl: "gl",answer: "NA",
                        seq: 2, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                        path: "dissertation_sound/exp1/test/vowel_long_after_window_5.wav", length: "long", tone: 5, gl: "modal", answer: "NA",
                        seq: 3, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_long_after_window_5_gl.wav", length: "long", tone: 5, gl: "gl", answer: "NA",
                         seq: 4, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_long_after_window_11.wav", length: "long", tone: 11, gl: "modal", answer: "NA",
                         seq: 5, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_long_after_window_11_gl.wav", length: "long", tone: 11, gl: "gl", answer: "NA",
                         seq: 6, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_long_after_window_42.wav", length: "long", tone: 42, gl: "modal", answer: "NA",
                         seq: 7, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_long_after_window_42_gl.wav", length: "long", tone: 42, gl: "gl", answer: "NA",
                         seq: 8, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_long_after_window_44.wav", length: "long", tone: 44, gl: "modal", answer: "NA",
                         seq: 9, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_long_after_window_44_gl.wav", length: "long", tone: 44, gl: "gl", answer: "NA",
                         seq: 10, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_short_after_window_2.wav", length: "short", tone: 2, gl: "modal", answer: "NA",
                         seq: 11, neu: "NA"}, 
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}], 
                        path: "dissertation_sound/exp1/test/vowel_short_after_window_2_gl.wav", length: "short", tone: 2, gl: "gl", answer: "NA",
                        seq: 12, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                        path: "dissertation_sound/exp1/test/vowel_short_after_window_5.wav", length: "short", tone: 5, gl: "modal", answer: "NA",
                        seq: 13, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_short_after_window_5_gl.wav", length: "short", tone: 5, gl: "gl", answer: "NA",
                         seq: 14, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_short_after_window_11.wav", length: "short", tone: 11, gl: "modal", answer: "NA",
                         seq: 15, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_short_after_window_11_gl.wav", length: "short", tone: 11, gl: "gl", answer: "NA",
                         seq: 16, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_short_after_window_42.wav", length: "short", tone: 42, gl: "modal", answer: "NA",
                         seq: 17, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_short_after_window_42_gl.wav", length: "short", tone: 42, gl: "gl", answer: "NA",
                         seq: 18, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_short_after_window_44.wav", length: "short", tone: 44, gl: "modal", answer: "NA",
                         seq: 19, neu: "NA"},
                       {words: [{character:"诗", tone: 44}, {character:"死", tone: 42}, {character: "四", tone: 35}, {character:"寺", tone: 23}, {character: "时", tone: 11}, {character: "湿", tone: 5}, {character: "实", tone: 2}],
                         path: "dissertation_sound/exp1/test/vowel_short_after_window_44_gl.wav", length: "short", tone: 44, gl: "gl", answer: "NA",
                         seq: 20, neu: "NA"}, 
                       {words: [{character:"价",tone:35},{character:"爬",tone:11},{character:"答",tone:5},{character:"大",tone:23},{character:"瓦",tone:23},{character:"法",tone:5},{character:"辣",tone:2}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_long_after_window_r1.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 21, neu: "NA"},        
                       {words: [{character:"价",tone:35},{character:"蜡",tone:2},{character:"白",tone:2},{character:"打",tone:42},{character:"茶",tone:11},{character:"活",tone:2},{character:"虾",tone:11}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_long_after_window_r2.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 22, neu: "NA"},        
                       {words: [{character:"价",tone:35},{character:"爬",tone:11},{character:"答",tone:5},{character:"大",tone:23},{character:"瓦",tone:23},{character:"法",tone:5},{character:"辣",tone:2}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_long_after_window_r3.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 23, neu: "NA"},        
                       {words: [{character:"假",tone:42},{character:"甲",tone:5},{character:"家",tone:44},{character:"价",tone:35},{character:"顾",tone:35},{character:"救",tone:35},{character:"鸡",tone:44}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_long_after_window_r4.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 24, neu: "NA"},        
                       {words: [{character:"价",tone:35},{character:"顾",tone:35},{character:"救",tone:35},{character:"旧",tone:23},{character:"厚",tone:23},{character:"过",tone:35},{character:"救",tone:35}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_long_after_window_r5.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 25, neu: "NA"},        
                       {words: [{character:"价",tone:35},{character:"顾",tone:35},{character:"救",tone:35},{character:"旧",tone:23},{character:"厚",tone:23},{character:"过",tone:35},{character:"救",tone:35}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_short_after_window_r1.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 26, neu: "NA"},        
                       {words: [{character:"假",tone:42},{character:"甲",tone:5},{character:"家",tone:44},{character:"价",tone:35},{character:"顾",tone:35},{character:"救",tone:35},{character:"鸡",tone:44}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_short_after_window_r2.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 27, neu: "NA"},        
                       {words: [{character:"价",tone:35},{character:"顾",tone:35},{character:"救",tone:35},{character:"旧",tone:23},{character:"厚",tone:23},{character:"过",tone:35},{character:"救",tone:35}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_short_after_window_r3.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 28, neu: "NA"},        
                       {words: [{character:"假",tone:42},{character:"甲",tone:5},{character:"家",tone:44},{character:"价",tone:35},{character:"顾",tone:35},{character:"救",tone:35},{character:"鸡",tone:44}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_short_after_window_r4.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 29, neu: "NA"},        
                       {words: [{character:"假",tone:42},{character:"割",tone:5},{character:"加",tone:44},{character:"价",tone:35},{character:"国",tone:5},{character:"旧",tone:23},{character:"街",tone:44}],
                         path: "dissertation_sound/exp1/filler/26A/vowel_short_after_window_r5.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 30, neu: "NA"},        
        
        
        
                        {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"题",tone:11},{character:"底",tone:42},{character:"低",tone:44},{character:"赌",tone:42},{character:"途",tone:11}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_long_after_window_r1.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 31, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"爱",tone:35},{character:"意",tone:35},{character:"怪",tone:35},{character:"跪",tone:23},{character:"坏",tone:35},{character:"退",tone:35}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_long_after_window_r2.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 32, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"题",tone:11},{character:"底",tone:42},{character:"低",tone:44},{character:"赌",tone:42},{character:"途",tone:11}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_long_after_window_r3.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 33, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"笔",tone:5},{character:"挤",tone:42},{character:"急",tone:5},{character:"踢",tone:5},{character:"一",tone:5}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_long_after_window_r4.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 34, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"路",tone:23},{character:"大",tone:23},{character:"电",tone:23},{character:"多",tone:44},{character:"替",tone:35}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_long_after_window_r5.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 35, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"路",tone:23},{character:"大",tone:23},{character:"电",tone:23},{character:"多",tone:44},{character:"替",tone:35}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_short_after_window_r1.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 36, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"路",tone:23},{character:"大",tone:23},{character:"电",tone:23},{character:"多",tone:44},{character:"替",tone:35}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_short_after_window_r2.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 37, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"扶",tone:23},{character:"旧",tone:23},{character:"路",tone:23},{character:"瓦",tone:23},{character:"老",tone:23}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_short_after_window_r3.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 38, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"路",tone:23},{character:"大",tone:23},{character:"电",tone:23},{character:"多",tone:44},{character:"替",tone:35}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_short_after_window_r4.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 39, neu: "NA"},        
                       {words: [{character:"地",tone:23},{character:"直",tone:2},{character:"笔",tone:5},{character:"挤",tone:42},{character:"急",tone:5},{character:"踢",tone:5},{character:"一",tone:5}],
                         path: "dissertation_sound/exp1/filler/37A/vowel_short_after_window_r5.wav", length: "long", tone: 35, gl: "modal", answer: "NA",
                         seq: 40, neu: "NA"}*/
      ];





      var practiceListII = [
        {words: [{character: "歌谱", tone: 44}, {character: "局长", tone: 2}],
                        path: "dissertation_sound/exp2/practice/19B_05_F.wav", answer: "歌谱",
                        seq: 1, length: "NA", gl: "NA", tone: 44, neu: "44_2"}, 
 /*       {words: [{character: "歌谱", tone: 44}, {character: "局长", tone: 2}],
                        path: "dissertation_sound/exp2/practice/19B_09_F.wav", answer: "歌谱",
                        seq: 2, length: "NA", gl: "NA", tone: 44, neu: "44_2"}, 
        
        {words: [{character: "歌谱", tone: 44}, {character: "局长", tone: 2}],
                        path: "dissertation_sound/exp2/practice/20A_09_F.wav", answer: "局长",
                        seq: 3, length: "NA", gl: "NA", tone: 2, neu: "44_2"}, 
        {words: [{character: "歌谱", tone: 44}, {character: "局长", tone: 2}],
                        path: "dissertation_sound/exp2/practice/20B_03_F.wav", answer: "局长",
                        seq: 4, length: "NA", gl: "NA", tone: 2, neu: "44_2"}, 
        {words: [{character: "歌谱", tone: 44}, {character: "局长", tone: 2}],
                        path: "dissertation_sound/exp2/practice/20B_05_F.wav", answer: "局长",
                        seq: 5, length: "NA", gl: "NA", tone: 2, neu: "44_2"}, 

        
        {words: [{character: "甲板", tone: 5}, {character: "假钱", tone: 42}],
                        path: "dissertation_sound/exp2/practice/54A_01_F.wav", answer: "甲板",
                        seq: 6, length: "NA", gl: "NA", tone: 5, neu: "5_42"}, 
        {words: [{character: "甲板", tone: 5}, {character: "假钱", tone: 42}],
                        path: "dissertation_sound/exp2/practice/55A_03_F.wav", answer: "假钱",
                        seq: 7, length: "NA", gl: "NA", tone: 42, neu: "5_42"}, 
        {words: [{character: "甲板", tone: 5}, {character: "假钱", tone: 42}],
                        path: "dissertation_sound/exp2/practice/55B_01_F.wav", answer: "假钱",
                        seq: 8, length: "NA", gl: "NA", tone: 42, neu: "5_42"},         */
      ];
      
      
      
      
      
      var trialListII_spk1 = [
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/01_F/3A.wav", answer: "路上",
                        seq: 1, tone:23, length: "NA", gl: "NA", neu: "23_44"}, 
           /*            {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/01_F/3A-flipped.wav", answer: "路上",
                        seq: 2, tone:23, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/01_F/3B.wav", answer: "路上",
                        seq: 3, tone:23, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/01_F/3B-flipped.wav", answer: "路上",
                        seq: 4, tone:23, length: "NA", gl: "NA", neu: "23_44"},

                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/01_F/4A.wav", answer: "多谢",
                        seq: 5, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/01_F/4A-flipped.wav", answer: "多谢",
                        seq: 6, tone: 44, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/01_F/4B.wav", answer: "多谢",
                        seq: 7, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/01_F/4B-flipped.wav", answer: "多谢",
                        seq: 8, tone: 44, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character: "路口", tone: 23}, {character: "刀口", tone: 44}],
                        path: "dissertation_sound/exp2/test/01_F/7A.wav", answer: "路口",
                        seq: 9, tone:23, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/01_F/7A-flipped.wav", answer: "路口",
                        seq: 10, tone:23, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}],
                        path: "dissertation_sound/exp2/test/01_F/7B.wav", answer: "路口",
                        seq: 11, tone:23, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/01_F/7B-flipped.wav", answer: "路口",
                        seq: 12, tone:23, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character: "路口", tone: 23}, {character: "刀口", tone: 44}],
                        path: "dissertation_sound/exp2/test/01_F/8A.wav", answer: "刀口",
                        seq: 13, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/01_F/8A-flipped.wav", answer: "刀口",
                        seq: 14, tone: 44, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}],
                        path: "dissertation_sound/exp2/test/01_F/8B.wav", answer: "刀口",
                        seq: 15, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/01_F/8B-flipped.wav", answer: "刀口",
                        seq: 16, tone: 44, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/01_F/25A.wav", answer: "杂技",
                        seq: 17, tone:2, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/01_F/25A-flipped.wav", answer: "杂技",
                        seq: 18, tone:2, length: "NA", gl: "NA", neu: "2_44"},
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/01_F/25B.wav", answer: "杂技",
                        seq: 19, tone:2, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/01_F/25B-flipped.wav", answer: "杂技",
                        seq: 20, tone:2, length: "NA", gl: "NA", neu: "2_44"},
        
                        {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/01_F/26A.wav", answer: "查岗",
                        seq: 21, tone:44, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/01_F/26A-flipped.wav", answer: "查岗",
                        seq: 22, tone:44, length: "NA", gl: "NA", neu: "2_44"},
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/01_F/26B.wav", answer: "查岗",
                        seq: 23, tone:44, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/01_F/26B-flipped.wav", answer: "查岗",
                        seq: 24, tone:44, length: "NA", gl: "NA", neu: "2_44"},
       
                        {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/35A.wav", answer: "替补",
                        seq: 25, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/35A-flipped.wav", answer: "替补",
                        seq: 26, tone:35, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/35B.wav", answer: "替补",
                        seq: 27, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/35B-flipped.wav", answer: "替补",
                        seq: 28, tone:35, length: "NA", gl: "NA", neu: "5_35"},

                        {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/36A.wav", answer: "铁板",
                        seq: 29, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/36A-flipped.wav", answer: "铁板",
                        seq: 30, tone:5, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/36B.wav", answer: "铁板",
                        seq: 31, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/36B-flipped.wav", answer: "铁板",
                        seq: 32, tone:5, length: "NA", gl: "NA", neu: "5_35"},

        
                        {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/38A.wav", answer: "死罪",
                        seq: 33, tone:42, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/38A-flipped.wav", answer: "死罪",
                        seq: 34, tone:42, length: "NA", gl: "NA", neu: "5_42"},
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/38B.wav", answer: "死罪",
                        seq: 35, tone:42, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/38B-flipped.wav", answer: "死罪",
                        seq: 36, tone:42, length: "NA", gl: "NA", neu: "5_42"},
        
                        {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/40A.wav", answer: "湿地",
                        seq: 37, tone:5, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/40A-flipped.wav", answer: "湿地",
                        seq: 38, tone:5, length: "NA", gl: "NA", neu: "5_42"},
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/40B.wav", answer: "湿地",
                        seq: 39, tone:5, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/40B-flipped.wav", answer: "湿地",
                        seq: 40, tone:5, length: "NA", gl: "NA", neu: "5_42"},

                        {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/42A.wav", answer: "试纸",
                        seq: 41, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/42A-flipped.wav", answer: "试纸",
                        seq: 42, tone:35, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/42B.wav", answer: "试纸",
                        seq: 43, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/42B-flipped.wav", answer: "试纸",
                        seq: 44, tone:35, length: "NA", gl: "NA", neu: "5_35"},
        
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/43B.wav", answer: "湿疹",
                        seq: 45, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/43B-flipped.wav", answer: "湿疹",
                        seq: 46, tone:5, length: "NA", gl: "NA", neu: "5_35"},

                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/01_F/48A.wav", answer: "假设",
                        seq: 47, tone:42, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/01_F/48A-flipped.wav", answer: "假设",
                        seq: 48, tone:42, length: "NA", gl: "NA", neu: "35_42"},
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/01_F/48B.wav", answer: "假设",
                        seq: 49, tone:42, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/01_F/48B-flipped.wav", answer: "假设",
                        seq: 50, tone:42, length: "NA", gl: "NA", neu: "35_42"},

                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/01_F/49A.wav", answer: "价格",
                        seq: 51, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/01_F/49A-flipped.wav", answer: "价格",
                        seq: 52, tone:35, length: "NA", gl: "NA", neu: "35_42"},
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/01_F/49B.wav", answer: "价格",
                        seq: 53, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/01_F/49B-flipped.wav", answer: "价格",
                        seq: 54, tone:35, length: "NA", gl: "NA", neu: "35_42"},
        
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/01_F/50A.wav", answer: "替身",
                        seq: 55, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}], 
                        path: "dissertation_sound/exp2/test/01_F/50A-flipped.wav", answer: "替身",
                        seq: 56, tone:35, length: "NA", gl: "NA", neu: "35_42"},
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/01_F/50B.wav", answer: "替身",
                        seq: 57, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/01_F/50B-flipped.wav", answer: "替身",
                        seq: 58, tone:35, length: "NA", gl: "NA", neu: "35_42"},
 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/01_F/51A.wav", answer: "体操",
                        seq: 59, tone:42, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}], 
                        path: "dissertation_sound/exp2/test/01_F/51A-flipped.wav", answer: "体操",
                        seq: 60, tone:42, length: "NA", gl: "NA", neu: "35_42"},
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/01_F/51B.wav", answer: "体操",
                        seq: 61, tone:42, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/01_F/51B-flipped.wav", answer: "体操",
                        seq: 62, tone:42, length: "NA", gl: "NA", neu: "35_42"},
        
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/62A.wav", answer: "四季",
                        seq: 63, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/62A-flipped.wav", answer: "四季",
                        seq: 64, tone:35, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/62B.wav", answer: "四季",
                        seq: 65, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/62B-flipped.wav", answer: "四季",
                        seq: 66, tone:35, length: "NA", gl: "NA", neu: "5_35"},

                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/63A.wav", answer: "湿气",
                        seq: 67, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}], 
                        path: "dissertation_sound/exp2/test/01_F/63A-flipped.wav", answer: "湿气",
                        seq: 68, tone:5, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/63B.wav", answer: "湿气",
                        seq: 69, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/01_F/63B-flipped.wav", answer: "湿气",
                        seq: 70, tone:5, length: "NA", gl: "NA", neu: "5_35"},*/
        
                      ];



      var trialListII_spk2 = [

                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/03_F/4A.wav", answer: "多谢",
                        seq: 1, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
               /*         {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/03_F/4A-flipped.wav", answer: "多谢",
                        seq: 2, tone: 44, length: "NA", gl: "NA", neu: "23_44"},
                      {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/03_F/4B.wav", answer: "多谢",
                        seq: 3, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/03_F/4B-flipped.wav", answer: "多谢",
                        seq: 4, tone: 44, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character: "路口", tone: 23}, {character: "刀口", tone: 44}],
                        path: "dissertation_sound/exp2/test/03_F/7A.wav", answer: "路口",
                        seq: 5, tone: 23, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/03_F/7A-flipped.wav", answer: "路口",
                        seq: 6, tone: 23, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}],
                        path: "dissertation_sound/exp2/test/03_F/7B.wav", answer: "路口",
                        seq: 7, tone: 23, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/03_F/7B-flipped.wav", answer: "路口",
                        seq: 8, tone: 23, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character: "路口", tone: 23}, {character: "刀口", tone: 44}],
                        path: "dissertation_sound/exp2/test/03_F/8A.wav", answer: "刀口",
                        seq: 9, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/03_F/8A-flipped.wav", answer: "刀口",
                        seq: 10, tone: 44, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}],
                        path: "dissertation_sound/exp2/test/03_F/8B.wav", answer: "刀口",
                        seq: 11, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/03_F/8B-flipped.wav", answer: "刀口",
                        seq: 12, tone: 44, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/03_F/25A.wav", answer: "杂技",
                        seq: 13, tone:2, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/03_F/25A-flipped.wav", answer: "杂技",
                        seq: 14, tone:2, length: "NA", gl: "NA", neu: "2_44"},
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/03_F/25B.wav", answer: "杂技",
                        seq: 15, tone:2, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/03_F/25B-flipped.wav", answer: "杂技",
                        seq: 16, tone:2, length: "NA", gl: "NA", neu: "2_44"},
        
                        {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/03_F/26A.wav", answer: "查岗",
                        seq: 17, tone:44, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/03_F/26A-flipped.wav", answer: "查岗",
                        seq: 18, tone:44, length: "NA", gl: "NA", neu: "2_44"},
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/03_F/26B.wav", answer: "查岗",
                        seq: 19, tone:44, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/03_F/26B-flipped.wav", answer: "查岗",
                        seq: 20, tone:44, length: "NA", gl: "NA", neu: "2_44"},
       
                        {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/35A.wav", answer: "替补",
                        seq: 21, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/35A-flipped.wav", answer: "替补",
                        seq: 22, tone:35, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/35B.wav", answer: "替补",
                        seq: 23, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/35B-flipped.wav", answer: "替补",
                        seq: 24, tone:35, length: "NA", gl: "NA", neu: "5_35"},

                        {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/36A.wav", answer: "铁板",
                        seq: 25, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/36A-flipped.wav", answer: "铁板",
                        seq: 26, tone:5, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/36B.wav", answer: "铁板",
                        seq: 27, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/36B-flipped.wav", answer: "铁板",
                        seq: 28, tone:5, length: "NA", gl: "NA", neu: "5_35"},

        
                        {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/38A.wav", answer: "死罪",
                        seq: 29, tone:42, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/38A-flipped.wav", answer: "死罪",
                        seq: 30, tone:42, length: "NA", gl: "NA", neu: "5_42"},
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/38B.wav", answer: "死罪",
                        seq: 31, tone:42, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/38B-flipped.wav", answer: "死罪",
                        seq: 32, tone:42, length: "NA", gl: "NA", neu: "5_42"},
        
                        {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/40A.wav", answer: "湿地",
                        seq: 33, tone:5, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/40A-flipped.wav", answer: "湿地",
                        seq: 34, tone:5, length: "NA", gl: "NA", neu: "5_42"},
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/40B.wav", answer: "湿地",
                        seq: 35, tone:5, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/40B-flipped.wav", answer: "湿地",
                        seq: 36, tone:5, length: "NA", gl: "NA", neu: "5_42"},

                        {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/42A.wav", answer: "试纸",
                        seq: 37, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/42A-flipped.wav", answer: "试纸",
                        seq: 38, tone:35, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/42B.wav", answer: "试纸",
                        seq: 39, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/42B-flipped.wav", answer: "试纸",
                        seq: 40, tone:35, length: "NA", gl: "NA", neu: "5_35"},
        
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/43A.wav", answer: "湿疹",
                        seq: 41, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/43A-flipped.wav", answer: "湿疹",
                        seq: 42, tone:5, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/43B.wav", answer: "湿疹",
                        seq: 43, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/43B-flipped.wav", answer: "湿疹",
                        seq: 44, tone:5, length: "NA", gl: "NA", neu: "5_35"},

                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/03_F/48A.wav", answer: "假设",
                        seq: 45, tone:42, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/03_F/48A-flipped.wav", answer: "假设",
                        seq: 46, tone:42, length: "NA", gl: "NA", neu: "35_42"},

                        
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/03_F/49A.wav", answer: "价格",
                        seq: 47, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/03_F/49A-flipped.wav", answer: "价格",
                        seq: 48, tone:35, length: "NA", gl: "NA", neu: "35_42"},
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/03_F/49B.wav", answer: "价格",
                        seq: 49, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/03_F/49B-flipped.wav", answer: "价格",
                        seq: 50, tone:35, length: "NA", gl: "NA", neu: "35_42"},
        
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/03_F/50A.wav", answer: "替身",
                        seq: 51, length: "NA", gl: "NA", tone:35, neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}], 
                        path: "dissertation_sound/exp2/test/03_F/50A-flipped.wav", answer: "替身",
                        seq: 52, length: "NA", gl: "NA", tone:35, neu: "35_42"},

        
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/03_F/51A.wav", answer: "体操",
                        seq: 53, length: "NA", gl: "NA", tone:42, neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}], 
                        path: "dissertation_sound/exp2/test/03_F/51A-flipped.wav", answer: "体操",
                        seq: 54, length: "NA", gl: "NA", tone:42, neu: "35_42"},
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/03_F/51B.wav", answer: "体操",
                        seq: 55, length: "NA", gl: "NA", tone:42, neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/03_F/51B-flipped.wav", answer: "体操",
                        seq: 56, length: "NA", gl: "NA", tone:42, neu: "35_42"},
        

                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/63A.wav", answer: "湿气",
                        seq: 57, length: "NA", gl: "NA", tone:5, neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}], 
                        path: "dissertation_sound/exp2/test/03_F/63A-flipped.wav", answer: "湿气",
                        seq: 58, length: "NA", gl: "NA", tone:5, neu: "5_35"},
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/63B.wav", answer: "湿气",
                        seq: 59, length: "NA", gl: "NA", tone:5, neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/03_F/63B-flipped.wav", answer: "湿气",
                        seq: 60, length: "NA", gl: "NA", tone:5, neu: "5_35"},
        */
                      ];


      var trialListII_spk3 = [
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/05_F/3A.wav", answer: "路上",
                        seq: 1, tone: 23, length: "NA", gl: "NA", neu: "23_44"}, 
          /*             {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/05_F/3A-flipped.wav", answer: "路上",
                        seq: 2, length: "NA", gl: "NA", tone: 23, neu: "23_44"},
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/05_F/3B.wav", answer: "路上",
                        seq: 3, length: "NA", gl: "NA", tone: 23, neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/05_F/3B-flipped.wav", answer: "路上",
                        seq: 4, length: "NA", gl: "NA", tone: 23, neu: "23_44"},

                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/05_F/4B.wav", answer: "多谢",
                        seq: 5, length: "NA", gl: "NA", tone: 44, neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/05_F/4B-flipped.wav", answer: "多谢",
                        seq: 6, length: "NA", gl: "NA", tone: 44, neu: "23_44"},

        
                       {words: [{character: "路口", tone: 23}, {character: "刀口", tone: 44}],
                        path: "dissertation_sound/exp2/test/05_F/7A.wav", answer: "路口",
                        seq: 7, length: "NA", gl: "NA", tone: 23, neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/05_F/7A-flipped.wav", answer: "路口",
                        seq: 8, length: "NA", gl: "NA", tone: 23, neu: "23_44"},
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}],
                        path: "dissertation_sound/exp2/test/05_F/7B.wav", answer: "路口",
                        seq: 9, length: "NA", gl: "NA", tone: 23, neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/05_F/7B-flipped.wav", answer: "路口",
                        seq: 10, length: "NA", gl: "NA", tone: 23, neu: "23_44"},

        
                       {words: [{character: "路口", tone: 23}, {character: "刀口", tone: 44}],
                        path: "dissertation_sound/exp2/test/05_F/8A.wav", answer: "刀口",
                        seq: 11, length: "NA", gl: "NA", tone: 44, neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/05_F/8A-flipped.wav", answer: "刀口",
                        seq: 12, length: "NA", gl: "NA", tone: 44, neu: "23_44"},
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}],
                        path: "dissertation_sound/exp2/test/05_F/8B.wav", answer: "刀口",
                        seq: 13, length: "NA", gl: "NA", tone: 44, neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/05_F/8B-flipped.wav", answer: "刀口",
                        seq: 14, length: "NA", gl: "NA", tone: 44, neu: "23_44"},

        
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/05_F/25A.wav", answer: "杂技",
                        seq: 15, length: "NA", gl: "NA", tone:2, neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/05_F/25A-flipped.wav", answer: "杂技",
                        seq: 16, length: "NA", gl: "NA", tone:2, neu: "2_44"},
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/05_F/25B.wav", answer: "杂技",
                        seq: 17, length: "NA", gl: "NA", tone:2, neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/05_F/25B-flipped.wav", answer: "杂技",
                        seq: 18, length: "NA", gl: "NA", tone:2, neu: "2_44"},
        
                        {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/05_F/26A.wav", answer: "查岗",
                        seq: 19, length: "NA", gl: "NA", tone:44, neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/05_F/26A-flipped.wav", answer: "查岗",
                        seq: 20, length: "NA", gl: "NA", tone:44, neu: "2_44"},
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/05_F/26B.wav", answer: "查岗",
                        seq: 21, length: "NA", gl: "NA", tone:44, neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/05_F/26B-flipped.wav", answer: "查岗",
                        seq: 22, length: "NA", gl: "NA", tone:44, neu: "2_44"},
       

                        {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/36A.wav", answer: "铁板",
                        seq: 23, length: "NA", gl: "NA", tone:5, neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/36A-flipped.wav", answer: "铁板",
                        seq: 24, length: "NA", gl: "NA", tone:5, neu: "5_35"},
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/36B.wav", answer: "铁板",
                        seq: 25, length: "NA", gl: "NA", tone:5, neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/36B-flipped.wav", answer: "铁板",
                        seq: 26, length: "NA", gl: "NA", tone:5, neu: "5_35"},

        
                        {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/38A.wav", answer: "死罪",
                        seq: 27, length: "NA", gl: "NA", tone:42, neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/38A-flipped.wav", answer: "死罪",
                        seq: 28, length: "NA", gl: "NA", tone:42, neu: "5_42"},
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/38B.wav", answer: "死罪",
                        seq: 29, length: "NA", gl: "NA", tone:42, neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/38B-flipped.wav", answer: "死罪",
                        seq: 30, length: "NA", gl: "NA", tone:42, neu: "5_42"},
        
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/40B.wav", answer: "湿地",
                        seq: 31, length: "NA", gl: "NA", tone:5, neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/40B-flipped.wav", answer: "湿地",
                        seq: 32, length: "NA", gl: "NA", tone:5, neu: "5_42"},

                        {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/42A.wav", answer: "试纸",
                        seq: 33, length: "NA", gl: "NA", tone:35, neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/42A-flipped.wav", answer: "试纸",
                        seq: 34, length: "NA", gl: "NA", tone:35, neu: "5_35"},
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/42B.wav", answer: "试纸",
                        seq: 35, length: "NA", gl: "NA", tone:35, neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/42B-flipped.wav", answer: "试纸",
                        seq: 36, length: "NA", gl: "NA", tone:35, neu: "5_35"},
        
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/43A.wav", answer: "湿疹",
                        seq: 37, length: "NA", gl: "NA", tone:5, neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/43A-flipped.wav", answer: "湿疹",
                        seq: 38, length: "NA", gl: "NA", tone:5, neu: "5_35"},        
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/43B.wav", answer: "湿疹",
                        seq: 39, length: "NA", gl: "NA", tone:5, neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/43B-flipped.wav", answer: "湿疹",
                        seq: 40, length: "NA", gl: "NA", tone:5, neu: "5_35"},

                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/05_F/48A.wav", answer: "假设",
                        seq: 41, length: "NA", gl: "NA", tone:42, neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/05_F/48A-flipped.wav", answer: "假设",
                        seq: 42, length: "NA", gl: "NA", tone:42, neu: "35_42"},
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/05_F/48B.wav", answer: "假设",
                        seq: 43, length: "NA", gl: "NA", tone:42, neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/05_F/48B-flipped.wav", answer: "假设",
                        seq: 44, length: "NA", gl: "NA", tone:42, neu: "35_42"},

                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/05_F/49A.wav", answer: "价格",
                        seq: 45, length: "NA", gl: "NA", tone:35, neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/05_F/49A-flipped.wav", answer: "价格",
                        seq: 46, length: "NA", gl: "NA", tone:35, neu: "35_42"},
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/05_F/49B.wav", answer: "价格",
                        seq: 47, length: "NA", gl: "NA", tone:35, neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/05_F/49B-flipped.wav", answer: "价格",
                        seq: 48, length: "NA", gl: "NA", tone:35, neu: "35_42"},
        
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/05_F/50A.wav", answer: "替身",
                        seq: 49, length: "NA", gl: "NA", tone:35, neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}], 
                        path: "dissertation_sound/exp2/test/05_F/50A-flipped.wav", answer: "替身",
                        seq: 50, length: "NA", gl: "NA", tone:35, neu: "35_42"},
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/05_F/50B.wav", answer: "替身",
                        seq: 51, length: "NA", gl: "NA", tone:35, neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/05_F/50B-flipped.wav", answer: "替身",
                        seq: 52, length: "NA", gl: "NA", tone:35, neu: "35_42"},
 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/05_F/51A.wav", answer: "体操",
                        seq: 53, length: "NA", gl: "NA", tone:42, neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}], 
                        path: "dissertation_sound/exp2/test/05_F/51A-flipped.wav", answer: "体操",
                        seq: 54, length: "NA", gl: "NA", tone:42, neu: "35_42"},
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/05_F/51B.wav", answer: "体操",
                        seq: 55, length: "NA", gl: "NA", tone:42, neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/05_F/51B-flipped.wav", answer: "体操",
                        seq: 56, length: "NA", gl: "NA", tone:42, neu: "35_42"},
        
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/62A.wav", answer: "四季",
                        seq: 57, length: "NA", gl: "NA", tone:35, neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/62A-flipped.wav", answer: "四季",
                        seq: 58, length: "NA", gl: "NA", tone:35, neu: "5_35"},
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/62B.wav", answer: "四季",
                        seq: 59, length: "NA", gl: "NA", tone:35, neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/62B-flipped.wav", answer: "四季",
                        seq: 60, length: "NA", gl: "NA", tone:35, neu: "5_35"},

                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/63A.wav", answer: "湿气",
                        seq: 61, length: "NA", gl: "NA", tone:5, neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}], 
                        path: "dissertation_sound/exp2/test/05_F/63A-flipped.wav", answer: "湿气",
                        seq: 62, length: "NA", gl: "NA", tone:5, neu: "5_35"},
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/63B.wav", answer: "湿气",
                        seq: 63, length: "NA", gl: "NA", tone:5, neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/05_F/63B-flipped.wav", answer: "湿气",
                        seq: 64, length: "NA", gl: "NA", tone:5, neu: "5_35"},
        
           */           ];



      var trialListII_spk4 = [
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/09_F/3A.wav", answer: "路上",
                        seq: 1, tone: 23, length: "NA", gl: "NA", neu: "23_44"}, 
            /*           {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/09_F/3A-flipped.wav", answer: "路上",
                        seq: 2, tone: 23, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/09_F/3B.wav", answer: "路上",
                        seq: 3, tone: 23, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/09_F/3B-flipped.wav", answer: "路上",
                        seq: 4, tone: 23, length: "NA", gl: "NA", neu: "23_44"},

                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/09_F/4A.wav", answer: "多谢",
                        seq: 5, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/09_F/4A-flipped.wav", answer: "多谢",
                        seq: 6, tone: 44, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}],
                        path: "dissertation_sound/exp2/test/09_F/4B.wav", answer: "多谢",
                        seq: 7, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character: "路上", tone: 23}, {character: "多谢", tone: 44}], 
                        path: "dissertation_sound/exp2/test/09_F/4B-flipped.wav", answer: "多谢",
                        seq: 8, tone: 44, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character: "路口", tone: 23}, {character: "刀口", tone: 44}],
                        path: "dissertation_sound/exp2/test/09_F/7A.wav", answer: "路口",
                        seq: 9, tone: 23, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/09_F/7A-flipped.wav", answer: "路口",
                        seq: 10, tone: 23, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}],
                        path: "dissertation_sound/exp2/test/09_F/7B.wav", answer: "路口",
                        seq: 11, tone: 23, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/09_F/7B-flipped.wav", answer: "路口",
                        seq: 12, tone: 23, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character: "路口", tone: 23}, {character: "刀口", tone: 44}],
                        path: "dissertation_sound/exp2/test/09_F/8A.wav", answer: "刀口",
                        seq: 13, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/09_F/8A-flipped.wav", answer: "刀口",
                        seq: 14, tone: 44, length: "NA", gl: "NA", neu: "23_44"},
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}],
                        path: "dissertation_sound/exp2/test/09_F/8B.wav", answer: "刀口",
                        seq: 15, tone: 44, length: "NA", gl: "NA", neu: "23_44"}, 
                       {words: [{character:"路口", tone:23}, {character:"刀口", tone:44}], 
                        path: "dissertation_sound/exp2/test/09_F/8B-flipped.wav", answer: "刀口",
                        seq: 16, tone: 44, length: "NA", gl: "NA", neu: "23_44"},

        
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/09_F/25A.wav", answer: "杂技",
                        seq: 17, tone:2, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/09_F/25A-flipped.wav", answer: "杂技",
                        seq: 18, tone:2, length: "NA", gl: "NA", neu: "2_44"},
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/09_F/25B.wav", answer: "杂技",
                        seq: 19, tone:2, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/09_F/25B-flipped.wav", answer: "杂技",
                        seq: 20, tone:2, length: "NA", gl: "NA", neu: "2_44"},
        
                        {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/09_F/26A.wav", answer: "查岗",
                        seq: 21, tone:44, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/09_F/26A-flipped.wav", answer: "查岗",
                        seq: 22, tone:44, length: "NA", gl: "NA", neu: "2_44"},
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}],
                        path: "dissertation_sound/exp2/test/09_F/26B.wav", answer: "查岗",
                        seq: 23, tone:44, length: "NA", gl: "NA", neu: "2_44"}, 
                       {words: [{character:"杂技", tone:2}, {character:"查岗", tone:44}], 
                        path: "dissertation_sound/exp2/test/09_F/26B-flipped.wav", answer: "查岗",
                        seq: 24, tone:44, length: "NA", gl: "NA", neu: "2_44"},
       
                        {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/35A.wav", answer: "替补",
                        seq: 25, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/35A-flipped.wav", answer: "替补",
                        seq: 26, tone:35, length: "NA", gl: "NA", neu: "5_35"},

        
                        {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/36A.wav", answer: "铁板",
                        seq: 27, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/36A-flipped.wav", answer: "铁板",
                        seq: 28, tone:5, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/36B.wav", answer: "铁板",
                        seq: 29, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"替补", tone:35}, {character:"铁板", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/36B-flipped.wav", answer: "铁板",
                        seq: 30, tone:5, length: "NA", gl: "NA", neu: "5_35"},

        
                        {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/38A.wav", answer: "死罪",
                        seq: 31, tone:42, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/38A-flipped.wav", answer: "死罪",
                        seq: 32, tone:42, length: "NA", gl: "NA", neu: "5_42"},
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/38B.wav", answer: "死罪",
                        seq: 33, tone:42, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/38B-flipped.wav", answer: "死罪",
                        seq: 34, tone:42, length: "NA", gl: "NA", neu: "5_42"},
        
                        {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/40A.wav", answer: "湿地",
                        seq: 35, tone:5, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/40A-flipped.wav", answer: "湿地",
                        seq: 36, tone:5, length: "NA", gl: "NA", neu: "5_42"},
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/40B.wav", answer: "湿地",
                        seq: 37, tone:5, length: "NA", gl: "NA", neu: "5_42"}, 
                       {words: [{character:"死罪", tone:42}, {character:"湿地", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/40B-flipped.wav", answer: "湿地",
                        seq: 38, tone:5, length: "NA", gl: "NA", neu: "5_42"},

                        {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/42A.wav", answer: "试纸",
                        seq: 39, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/42A-flipped.wav", answer: "试纸",
                        seq: 40, tone:35, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/42B.wav", answer: "试纸",
                        seq: 41, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/42B-flipped.wav", answer: "试纸",
                        seq: 42, tone:35, length: "NA", gl: "NA", neu: "5_35"},
        
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/43A.wav", answer: "湿疹",
                        seq: 43, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/43A-flipped.wav", answer: "湿疹",
                        seq: 44, tone:5, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/43B.wav", answer: "湿疹",
                        seq: 45, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"试纸", tone:35}, {character:"湿疹", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/43B-flipped.wav", answer: "湿疹",
                        seq: 46, tone:5, length: "NA", gl: "NA", neu: "5_35"},

                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/09_F/48A.wav", answer: "假设",
                        seq: 47, tone:42, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/09_F/48A-flipped.wav", answer: "假设",
                        seq: 48, tone:42, length: "NA", gl: "NA", neu: "35_42"},
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/09_F/48B.wav", answer: "假设",
                        seq: 49, tone:42, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/09_F/48B-flipped.wav", answer: "假设",
                        seq: 50, tone:42, length: "NA", gl: "NA", neu: "35_42"},

                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/09_F/49A.wav", answer: "价格",
                        seq: 51, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/09_F/49A-flipped.wav", answer: "价格",
                        seq: 52, tone:35, length: "NA", gl: "NA", neu: "35_42"},
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}],
                        path: "dissertation_sound/exp2/test/09_F/49B.wav", answer: "价格",
                        seq: 53, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"假设", tone:42}, {character:"价格", tone:35}], 
                        path: "dissertation_sound/exp2/test/09_F/49B-flipped.wav", answer: "价格",
                        seq: 54, tone:35, length: "NA", gl: "NA", neu: "35_42"},
        
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/09_F/50A.wav", answer: "替身",
                        seq: 55, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}], 
                        path: "dissertation_sound/exp2/test/09_F/50A-flipped.wav", answer: "替身",
                        seq: 56, tone:35, length: "NA", gl: "NA", neu: "35_42"},
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/09_F/50B.wav", answer: "替身",
                        seq: 57, tone:35, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/09_F/50B-flipped.wav", answer: "替身",
                        seq: 58, tone:35, ength: "NA", gl: "NA", neu: "35_42"},
 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/09_F/51B.wav", answer: "体操",
                        seq: 59, tone:42, length: "NA", gl: "NA", neu: "35_42"}, 
                       {words: [{character:"替身", tone:35}, {character:"体操", tone:42}],
                        path: "dissertation_sound/exp2/test/09_F/51B-flipped.wav", answer: "体操",
                        seq: 60, tone:42, length: "NA", gl: "NA", neu: "35_42"},
        
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/62A.wav", answer: "四季",
                        seq: 61, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/62A-flipped.wav", answer: "四季",
                        seq: 62, tone:35, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/62B.wav", answer: "四季",
                        seq: 63, tone:35, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/62B-flipped.wav", answer: "四季",
                        seq: 64, tone:35, length: "NA", gl: "NA", neu: "5_35"},

                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/63A.wav", answer: "湿气",
                        seq: 65, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}], 
                        path: "dissertation_sound/exp2/test/09_F/63A-flipped.wav", answer: "湿气",
                        seq: 66, tone:5, length: "NA", gl: "NA", neu: "5_35"},
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/63B.wav", answer: "湿气",
                        seq: 67, tone:5, length: "NA", gl: "NA", neu: "5_35"}, 
                       {words: [{character:"四季", tone:35}, {character:"湿气", tone:5}],
                        path: "dissertation_sound/exp2/test/09_F/63B-flipped.wav", answer: "湿气",
                        seq: 68, tone:5, length: "NA", gl: "NA", neu: "5_35"},
        */
                      ];











         
/*Shuffle the practiceList in the beginning to randomize the order*/      
      var practiceListRandom = jsPsych.randomization.repeat(practiceList, 1);
/*Shuffle the trialList in the beginning to randomize the order*/
      var trialListRandom_repeatI = jsPsych.randomization.repeat(trialList, 1);
      var trialListRandom_repeatII = jsPsych.randomization.repeat(trialList, 1);
      var trialListRandom_repeatIII = jsPsych.randomization.repeat(trialList, 1);
      var practiceListRandomII = jsPsych.randomization.repeat(practiceListII, 1);
      var trialListRandomII_spk1 = jsPsych.randomization.repeat(trialListII_spk1, 1);
      var trialListRandomII_spk2 = jsPsych.randomization.repeat(trialListII_spk2, 1);
      var trialListRandomII_spk3 = jsPsych.randomization.repeat(trialListII_spk3, 1);
      var trialListRandomII_spk4 = jsPsych.randomization.repeat(trialListII_spk4, 1);
                       

      var trialListRandom = practiceListRandom.concat(trialListRandom_repeatI, trialListRandom_repeatII, trialListRandom_repeatIII, practiceListRandomII, trialListRandomII_spk1, trialListRandomII_spk2, trialListRandomII_spk3, trialListRandomII_spk4);

      var practiceLength = practiceListRandom.length;
      var partILength = practiceListRandom.length + trialListRandom_repeatI.length;
      var partIILength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length;
      var partIIILength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length;
      var expIIPracticeLength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length;
      var expIISpk1Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length;
      var expIISpk2Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length + trialListRandomII_spk2.length;
      var expIISpk3Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length + trialListRandomII_spk2.length + trialListRandomII_spk3.length;
      var expIISpk4Length = trialListRandom.length;
          
/*Predownload all audio; need to double check the code      
      var isAllDownloaded = false;
      $(window).on("load", function() {
        isAllDownloaded = true;
         console.log("all audios downloaded");
      });*/



/*beginning of the function*/

      
      /* This gets called when they click the button 
        on the instructions page */
      function StartExperiment() {
        $("#instructions").hide();
        $("#startExperimentButton").unbind("click");
        ShowTrial();
      }
      
      function HideFixation() {
        $("#fixation").hide()
      }
      
      
      function ShowTrial() {
        $("#EndExperimentIPartIButton").unbind("click");
        $("#EndExperimentIPartIIButton").unbind("click");
        $("#EndPracticeButton").unbind("click");
        $("#EndExperimentIIPartIButton").unbind("click");
        $("#EndExperimentIIPartIIButton").unbind("click");
        $("#EndExperimentIIPartIIIButton").unbind("click");
        $("#EndPracticeIButton").unbind("click");

        $("#doneExperimentIPartI").hide();
        $("#doneExperimentIPartII").hide();
        $("#donePracticeI").hide();
        $("#doneExperimentIIPartI").hide();
        $("#doneExperimentIIPartII").hide();
        $("#doneExperimentIIPartIII").hide();
        $("#donePracticeII").hide();
        
        
        $("#fixation").show();
        setTimeout(HideFixation, 500);
        setTimeout(Runs500msAfterFixation, 500);
      }

      function Runs500msAfterFixation() {
        /* This runs 500ms after ShowTrial is called */
        /*set sound attribute, specify which sound will be played*/
        $("#sound").attr(
          "src",
          trialListRandom[curTrial].path
        );
        
        /*randomize the options displayed on the screen for every trial*/
        wordList = jsPsych.randomization.repeat(trialListRandom[curTrial].words,1);
    
        
        /*save the options in the order displayed into a string and push it to the csv file*/
        var characterList = [];
        for (let i = 0; i < wordList.length; i++) {
  characterList.push(wordList[i].character);
}
        wordListString = characterList.join('-');
        
        optionList.push(wordList);
        
        /*Play the sound when the page is loaded*/
        
        var playPromise = document.getElementById("sound").play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
            })
            .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
          });
        }
        
        /*replay the sound on click*/
        $('#play').on('click', function () {
          $('#sound')[0].play();
        });
    
        $('#playII').on('click', function () {
          $('#sound')[0].play();
        });
         
        curTimeStart = new Date();
        if (wordList.length == 7) {
        $("#trialnum").text("第"+trialnum+"/"+totalnum+"题");
        /* show the trialDiv */
        $("#trialDiv").show();
        $("#trialnumdiv").show();
        $("#scale").show();

        curTrialTimeStarted = new Date();



        
        
        /*Assign value to the radio buttons for the identification task*/
        $('label[for=word1]').html(wordList[0].character);
        $('label[for=word2]').html(wordList[1].character);
        $('label[for=word3]').html(wordList[2].character);
        $('label[for=word4]').html(wordList[3].character);
        $('label[for=word5]').html(wordList[4].character);
        $('label[for=word6]').html(wordList[5].character);
        $('label[for=word7]').html(wordList[6].character);
        /* Set up key listener; when press submit button, proceed to CheckSelect function*/
        $("#submit").on("click", CheckSelect);
        }
        
        else {
        $("#trialnumII").text("第"+trialnumII+"/"+totalnum+"题");
        /* show the trialDiv */
        $("#trialDivII").show();
        $("#trialnumdivII").show();
        $("#scaleII").show();

        curTrialTimeStarted = new Date();

        /* Set up key listener; when press submit button, proceed to CheckSelect function*/
        $("#submit").on("click", CheckSelect);
        
        $('label[for=word1II]').html(wordList[0].character);
        $('label[for=word2II]').html(wordList[1].character);
      
        $("#submitII").on("click", CheckSelect);  
        }
        
        /*update trialnumber*/

        
      }
      
      

      /*check if the word and the scale are both selected*/
      function CheckSelect() {
        if (wordList.length == 7){
                  if ($('input[name=ExpI]:checked').val() == undefined & $('input[name=confident]:checked').val() == undefined) {
          alert("请选择您听到的字和您认为选得对不对")
        }
        else if ($('input[name=ExpI]:checked').val() != undefined & $('input[name=confident]:checked').val() == undefined) {
          alert("请选择您认为选得对不对")} 
        else if ($('input[name=ExpI]:checked').val() == undefined & $('input[name=confident]:checked').val() != undefined) {
          alert("请选择您听到的字")} 
        else{
            curTimeEnd = new Date();
            responseTime = curTimeEnd - curTimeStart

/*push the trial number, radio value, word value, and scale value to the csv file*/          
            var radioselectedValue = $('input[name=ExpI]:checked').val();
            radioselectedList.push(radioselectedValue);
            var wordselectedValue = wordList[parseInt($('input[name=ExpI]:checked').val())-1].character;
            var toneselectedValue = wordList[parseInt($('input[name=ExpI]:checked').val())-1].tone;          

          
            wordselectedList.push(wordselectedValue);
            var scaleValue = $('input[name=confident]:checked').val();
            scaleList.push(scaleValue);
          /*stimuli_length get the length of the stimuli*/
            var stimuli_length = trialListRandom[curTrial].length;
          /*stimuli_tone get the tone of the stimuli*/
            var stimuli_tone = trialListRandom[curTrial].tone;
          /*stimuli_gl get the tone of the stimuli*/
            var stimuli_gl = trialListRandom[curTrial].gl;
            var neu_between = trialListRandom[curTrial].neu;
            var stimuli_answer = trialListRandom[curTrial].answer;
            var curresultList = [curTrial, radioselectedValue, wordselectedValue, toneselectedValue, scaleValue, wordListString, trialListRandom[curTrial].path, stimuli_length, stimuli_tone, stimuli_gl, neu_between, stimuli_answer, trialListRandom[curTrial].seq, responseTime]
            csvFile.push(curresultList)
          
          
            DoneWithScale();
            

        }}
          else {
            if ($('input[name=ExpII]:checked').val() == undefined & $('input[name=confidentII]:checked').val() == undefined) {
          alert("请选择您听到的词和您认为选得对不对")
        }
        else if ($('input[name=ExpII]:checked').val() != undefined & $('input[name=confidentII]:checked').val() == undefined) {
          alert("请选择您认为选得对不对")} 
        else if ($('input[name=ExpII]:checked').val() == undefined & $('input[name=confidentII]:checked').val() != undefined) {
          alert("请选择您听到的词")} 
        else{
            
/*push the trial number, radio value, word value, and scale value to the csv file*/
            curTimeEnd = new Date();
            responseTime = curTimeEnd - curTimeStart          
            var radioselectedValue = $('input[name=ExpII]:checked').val();
            radioselectedList.push(radioselectedValue);
            var wordselectedValue = wordList[parseInt($('input[name=ExpII]:checked').val())-1].character;
            var toneselectedValue = wordList[parseInt($('input[name=ExpII]:checked').val())-1].tone;          
          
          
          
            wordselectedList.push(wordselectedValue);
            var scaleValue = $('input[name=confidentII]:checked').val();
            scaleList.push(scaleValue);
          /*stimuli_length get the length of the stimuli*/
            var stimuli_length = trialListRandom[curTrial].length;
          /*stimuli_tone get the tone of the stimuli*/
            var stimuli_tone = trialListRandom[curTrial].tone;
          /*stimuli_gl get the tone of the stimuli*/
            var stimuli_gl = trialListRandom[curTrial].gl;
            var neu_between = trialListRandom[curTrial].neu;
            var stimuli_answer = trialListRandom[curTrial].answer;

          
          
          var curresultList = [curTrial, radioselectedValue, wordselectedValue, toneselectedValue, scaleValue, wordListString, trialListRandom[curTrial].path, stimuli_length, stimuli_tone, stimuli_gl, neu_between, stimuli_answer, trialListRandom[curTrial].seq, responseTime]
            csvFile.push(curresultList)
          
          
            DoneWithScale();
            

            
          }
        }
        
        
        
        

      }
      

/*unselect all the radio buttons*/
      function DoneWithScale() {
        $("#word1").prop("checked", false);
        $("#word2").prop("checked", false);
        $("#word3").prop("checked", false);
        $("#word4").prop("checked", false);
        $("#word5").prop("checked", false);
        $("#word6").prop("checked", false);
        $("#word7").prop("checked", false);

        $("#word1II").prop("checked", false);
        $("#word2II").prop("checked", false);
        
        
        $("#likertStart").prop("checked", false);
        $("#likert2").prop("checked", false);
        $("#likert3").prop("checked", false);
        $("#likert4").prop("checked", false);
        $("#likertEnd").prop("checked", false);

        $("#likertStartII").prop("checked", false);
        $("#likert2II").prop("checked", false);
        $("#likert3II").prop("checked", false);
        $("#likert4II").prop("checked", false);
        $("#likertEndII").prop("checked", false);

        
        
        $("#trialnumdiv").hide();
        $("#trialDiv").hide();
/*it is important to turn off the listener*/
        $('#submit').unbind('click');
        
        $("#trialnumdivII").hide();
        $("#trialDivII").hide();
/*it is important to turn off the listener*/
        $('#submitII').unbind('click');
        
        trialnum = trialnum + 1;
        trialnumII = trialnumII + 1;
        curTrial = curTrial + 1;

/*      var expIIPracticeLength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length;
      var expIISpk1Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length;
      var expIISpk2Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length + trialListRandomII_spk2.length;
      var expIISpk3Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length + trialListRandomII_spk2.length + trialListRandomII_spk3.length;
      var expIISpk4Length = trialListRandom.length;
*/        
        
        
        
        if (curTrial < practiceLength) {
          if (curTrial % 2 == 0) {
            ShowStar()
          }else{
            setTimeout(ShowTrial, 0);
          }
        } 
        
        
        
        else if (curTrial == practiceLength){
            trialnum = 1;
            totalnum = trialList.length;
            setTimeout(DoneWithPracticeI, 500);          
        } 
        
        else if ((curTrial > practiceLength) && (curTrial < (partILength))){
            setTimeout(ShowTrial,0);}   
        else if (curTrial == (partILength)){
            trialnum = 1;
            setTimeout(DoneWithExperimentIPartI, 500);          
        } 

        
          else if((curTrial > (partILength)) && (curTrial < partIILength)){
            setTimeout(ShowTrial, 0);
          }
          else if(curTrial == partIILength){
            trialnum = 1;
            totalnum = trialList.length;
            setTimeout(DoneWithExperimentIPartII, 500);
            
          }
          else if ((curTrial > partIILength) && (curTrial < partIIILength)){
            setTimeout(ShowTrial, 0);
          }
          else if (curTrial == partIIILength){
            trialnumII = 1;
            totalnum = practiceListII.length;
          setTimeout(DoneWithExperimentI, 500);
          }
          else if ((curTrial > partIIILength) && (curTrial < expIIPracticeLength)) {
            setTimeout(ShowTrial, 0);
          } else if (curTrial == expIIPracticeLength){
            trialnumII = 1;
            totalnum = trialListRandomII_spk1.length;
            setTimeout(DoneWithPracticeII, 500);
            
            
          } else if ((curTrial > expIIPracticeLength) && (curTrial < expIISpk1Length)) {
            setTimeout(ShowTrial, 0);
          } else if (curTrial == expIISpk1Length) {
            trialnumII = 1;
            totalnum = trialListRandomII_spk2.length;
            setTimeout(DoneWithExperimentIIPartI, 500);
            
          } else if ((curTrial > expIISpk1Length) && (curTrial < expIISpk2Length)) {
            setTimeout(ShowTrial, 0);
          } else if (curTrial == expIISpk2Length) {
            trialnumII = 1;
            totalnum = trialListRandomII_spk3.length;
            setTimeout(DoneWithExperimentIIPartII, 500);
          } else if ((curTrial > expIISpk2Length) && (curTrial < expIISpk3Length)) {
            setTimeout(ShowTrial, 0);
          } else if (curTrial == expIISpk3Length) {
            trialnumII = 1;
            totalnum = trialListRandomII_spk4.length;
            setTimeout(DoneWithExperimentIIPartIII, 500);
          } else if ((curTrial > expIISpk3Length) && (curTrial < expIISpk4Length)) {
            setTimeout(curTrial, 0);
          }
        else {
          trialnumII = 1;
          setTimeout(DoneWithExperimentII, 500);
        }
        }
      
      function HideStar() {
        $("#distraction").hide();
        ShowTrial();
        $(starid).unbind("click");
      }
      
      function DoneWithExperimentIPartI(){
        $("#doneExperimentIPartI").show();
        $("#EndExperimentIPartIButton").on("click", ShowTrial);

      }
      function DoneWithExperimentIPartII(){
        $("#doneExperimentIPartII").show();
        $("#EndExperimentIPartIIButton").on("click", ShowTrial);

      }

      function DoneWithPracticeI(){
        $("#donePracticeI").show();
        $("#EndPracticeButton").on("click", ShowTrial);

      }


      function DoneWithExperimentIIPartI(){
        $("#doneExperimentIIPartI").show();
        $("#EndExperimentIIPartIButton").on("click", ShowTrial);

      }
      function DoneWithExperimentIIPartII(){
        $("#doneExperimentIIPartII").show();
        $("#EndExperimentIIPartIIButton").on("click", ShowTrial);

      }
      function DoneWithExperimentIIPartIII(){
        $("#doneExperimentIIPartIII").show();
        $("#EndExperimentIIPartIIIButton").on("click", ShowTrial);

      }



      function DoneWithPracticeII(){
        $("#donePracticeII").show();
        $("#EndPracticeIIButton").on("click", ShowTrial);

      }





      
      function ShowStar() {
        starnum = Math.floor((Math.random() * 5) + 1);
        starid = "#star"+starnum;
        $(starid).text("\u2606");
        $("#distraction").show();
        $(starid).click(function(){
            $(starid).text("\u2605");
            setTimeout(HideStar, 500);
        })

      }
      
      
      
      function DoneWithExperimentI() {
        $("#doneExperimentI").show();
        $("#EndExperimentIButton").on("click", StartExperimentII);

      }
      


/*#########################Exp II################################*/
      var wordListII = [];      
      var wordListStringII = "";
      var curTrialII = 0;
      var curTrialIITimeStarted = 0;





      
      function StartExperimentII () {
        $("#doneExperimentI").hide();
        $("#instructions2").show();
        $("#startExperimentIIButton").on("click", HideInstructionII);
      }

      
      function HideInstructionII() {
        $("#instructions2").hide();
        ShowTrial();
      }
      
      
      
      function DoneWithExperimentII() {
        $("#debriefing").show();
        $('#doneWithDebriefing').on("click", DoneWithDebriefing);
      }

      
      function DoneWithDebriefing() {
        $("#debriefing").hide();
        $('#doneWithDebriefing').unbind("click");
        $("#done").show();

        

var subjectHead = ["id", "userAgent"];
var subjectInfo = [$("#subjectid").val(), navigator.userAgent]

csvFile.push([]);
csvFile.push(subjectHead);
csvFile.push(subjectInfo);

var filename = "YCSY" + $("#subjectid").val() + ".csv"        
        
        
let csvContent = "data:text/csv;charset=utf-8," 
    + csvFile.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", filename);
document.body.appendChild(link); // Required for FF

link.click();
        /* AJAX */
        /*$.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);*/
          
          var dataToServer = {
          id: "YCSY"+$("#subjectid").val(),
          experimenter: "YC",
          experimentName: "IdentificationTask",
          curData: JSON.stringify(csvContent),
          };

        
        $.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);
      }
      
      $("#startExperimentButton").on("click", StartExperiment);