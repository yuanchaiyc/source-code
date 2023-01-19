/*import csv files*/


var word_list = [{"word":"xti","spanish":"un momento","english":"a moment","path":"image/1.jpg","transcription":"ʂtì","tone":"L","vowel":"i","phonation":"M","trial":"test"},
{"word":"ga'","spanish":"cesta","english":"basket","path":"image/2.jpg","transcription":"gáʔ","tone":"H","vowel":"a","phonation":"C","trial":"test"},
{"word":"nchha'","spanish":"es diferente","english":"be different","path":"image/3.jpg","transcription":"ndʒâʔ","tone":"F","vowel":"a","phonation":"C","trial":"test"},
{"word":"cha'","spanish":"casuela","english":"clay pan","path":"image/4.jpg","transcription":"tʂàʔ","tone":"L","vowel":"a","phonation":"C","trial":"test"},
{"word":"xha'","spanish":"ropa","english":"clothes","path":"image/5.jpg","transcription":"ʐáʔ","tone":"H","vowel":"a","phonation":"C","trial":"test"},
{"word":"kwa","spanish":"masa de harina","english":"corn flour dough","path":"image/6.jpg","transcription":"kwâ","tone":"F","vowel":"a","phonation":"M","trial":"test"},
{"word":"za'a","spanish":"maíz","english":"corn still growing","path":"image/7.jpg","transcription":"zà̰","tone":"L","vowel":"a","phonation":"R","trial":"test"},
{"word":"be","spanish":"agrietado","english":"cracked","path":"image/8.jpg","transcription":"bè","tone":"L","vowel":"e","phonation":"M","trial":"test"},
{"word":"chha","spanish":"día","english":"day","path":"image/9.jpg","transcription":"ʒà","tone":"L","vowel":"a","phonation":"M","trial":"test"},
{"word":"xche'","spanish":"cena","english":"dinner","path":"image/10.jpg","transcription":"ʂtʂêʔ","tone":"L","vowel":"e","phonation":"C","trial":"test"},
{"word":"yo","spanish":"tierra","english":"dirt","path":"image/11.jpg","transcription":"jô","tone":"F","vowel":"o","phonation":"M","trial":"test"},
{"word":"we'e","spanish":"emborracharse","english":"get drunk","path":"image/12.jpg","transcription":"wḛ̌","tone":"R","vowel":"e","phonation":"R","trial":"test"},
{"word":"yi'","spanish":"fuego","english":"fire","path":"image/13.jpg","transcription":"îʔ","tone":"H","vowel":"i","phonation":"C","trial":"test"},
{"word":"cha'a","spanish":"yendo","english":"going","path":"image/14.jpg","transcription":"ʂá̰","tone":"H","vowel":"a","phonation":"R","trial":"test"},
{"word":"ba","spanish":"tumba","english":"grave","path":"image/15.jpg","transcription":"bǎ","tone":"H","vowel":"a","phonation":"M","trial":"test"},
{"word":"chhi","spanish":"esta sentado","english":"he is sitting","path":"image/16.jpg","transcription":"ʒḭ̌","tone":"H","vowel":"i","phonation":"R","trial":"test"},
{"word":"zi'i","spanish":"pesado","english":"heavy","path":"image/17.jpg","transcription":"zḭ́","tone":"H","vowel":"i","phonation":"R","trial":"test"},
{"word":"ni","spanish":"aquí","english":"here","path":"image/18.jpg","transcription":"nǐ","tone":"R","vowel":"i","phonation":"M","trial":"test"},
{"word":"xe'","spanish":"su (formal) padre","english":"his her father formal","path":"image/19.jpg","transcription":"ʂéʔ","tone":"H","vowel":"e","phonation":"C","trial":"test"},
{"word":"xne'e","spanish":"su (formal) madre","english":"his her mother formal","path":"image/20.jpg","transcription":"ʂnːâ̰","tone":"R","vowel":"e","phonation":"R","trial":"test"},
{"word":"la","spanish":"caliente","english":"hot","path":"image/21.jpg","transcription":"lːá","tone":"H","vowel":"a","phonation":"M","trial":"test"},
{"word":"yo","spanish":"casa","english":"house","path":"image/22.jpg","transcription":"jô̰","tone":"F","vowel":"o","phonation":"R","trial":"test"},
{"word":"da'","spanish":"lo","english":"it","path":"image/23.jpg","transcription":"dàʔ","tone":"L","vowel":"a","phonation":"C","trial":"test"},
{"word":"ka'","spanish":"como eso","english":"like that","path":"image/24.jpg","transcription":"kàʔ","tone":"F","vowel":"a","phonation":"C","trial":"test"},
{"word":"yo'o","spanish":"cal","english":"limestone","path":"image/25.jpg","transcription":"jǒ̰","tone":"R","vowel":"o","phonation":"R","trial":"test"},
{"word":"ya'a","spanish":"montaña","english":"mountain","path":"image/26.jpg","transcription":"jà̰","tone":"L","vowel":"a","phonation":"R","trial":"test"},
{"word":"xna'a","spanish":"mi madre","english":"my mother","path":"image/27.jpg","transcription":"ʂnːâ̰","tone":"F","vowel":"a","phonation":"R","trial":"test"},
{"word":"lba'a","spanish":"cuello","english":"neck","path":"image/28.jpg","transcription":"lbáʔa","tone":"L","vowel":"a","phonation":"R","trial":"test"},
{"word":"ga","spanish":"nueve","english":"nine","path":"image/29.jpg","transcription":"gǎ","tone":"R","vowel":"a","phonation":"M","trial":"test"},
{"word":"go'o","spanish":"no","english":"no","path":"image/30.jpg","transcription":"gòʔó","tone":"R","vowel":"o","phonation":"R","trial":"test"},
{"word":"lo","spanish":"en","english":"on","path":"image/31.jpg","transcription":"lò","tone":"L","vowel":"o","phonation":"M","trial":"test"},
{"word":"to","spanish":"uno","english":"one","path":"image/32.jpg","transcription":"tò","tone":"L","vowel":"o","phonation":"M","trial":"test"},
{"word":"wi","spanish":"naranja","english":"orange","path":"image/33.jpg","transcription":"wí","tone":"H","vowel":"i","phonation":"M","trial":"test"},
{"word":"zi'","spanish":"dolor","english":"pain","path":"image/34.jpg","transcription":"zìʔ","tone":"H","vowel":"i","phonation":"C","trial":"test"},
{"word":"da'a","spanish":"petate","english":"petate","path":"image/35.jpg","transcription":"dà̰","tone":"L","vowel":"a","phonation":"R","trial":"test"},
{"word":"wa","spanish":"maduro","english":"ripe","path":"image/36.jpg","transcription":"wâ","tone":"F","vowel":"a","phonation":"M","trial":"test"},
{"word":"do","spanish":"soga","english":"rope","path":"image/37.jpg","transcription":"dǒ","tone":"R","vowel":"o","phonation":"M","trial":"test"},
{"word":"li","spanish":"recto","english":"straight","path":"image/38.jpg","transcription":"lːí","tone":"R","vowel":"i","phonation":"M","trial":"test"},
{"word":"ba","spanish":"verano","english":"summer","path":"image/39.jpg","transcription":"bá","tone":"R","vowel":"a","phonation":"M","trial":"test"},
{"word":"chi","spanish":"diez","english":"ten","path":"image/40.jpg","transcription":"tʂí","tone":"R","vowel":"i","phonation":"M","trial":"test"},
{"word":"na","spanish":"allá","english":"there","path":"image/41.jpg","transcription":"nà","tone":"L","vowel":"a","phonation":"M","trial":"test"},
{"word":"ba' zilhe","spanish":"esta mañana","english":"in this morning","path":"image/42.jpg","transcription":"bàʔ","tone":"L","vowel":"a","phonation":"C","trial":"test"},
{"word":"chi'i","spanish":"voz","english":"voice","path":"image/43.jpg","transcription":"tʂḭ̌","tone":"H","vowel":"i","phonation":"R","trial":"test"},
{"word":"no","spanish":"quién","english":"who","path":"image/44.jpg","transcription":"nǒ","tone":"R","vowel":"o","phonation":"M","trial":"test"},
{"word":"be'","spanish":"viento","english":"wind","path":"image/45.jpg","transcription":"bèʔ","tone":"L","vowel":"e","phonation":"C","trial":"test"},
{"word":"we'","spanish":"herida","english":"wound","path":"image/46.jpg","transcription":"wéʔ","tone":"H","vowel":"e","phonation":"C","trial":"test"},
{"word":"xno'o","spanish":"tu madre","english":"your mother","path":"image/47.jpg","transcription":"ʂnò̰","tone":"L","vowel":"o","phonation":"R","trial":"test"},
{"word":"xa'","spanish":"mi padre","english":"my father","path":"image/48.jpg","transcription":"ʂáʔ","tone":"H","vowel":"a","phonation":"C","trial":"test"},
{"word":"xo'","spanish":"tu padre","english":"your father","path":"image/49.jpg","transcription":"ʂóʔ","tone":"H","vowel":"o","phonation":"C","trial":"test"},
{"word":"xna","spanish":"rojo","english":"red","path":"image/50.jpg","transcription":"ʂnà","tone":"L","vowel":"a","phonation":"M","trial":"test"}]

/*
var word_list = [{"word":"xti","spanish":"un momento","english":"a moment","path":"image/1.jpg","transcription":"ʂtì","tone":"L","vowel":"i","phonation":"M","trial":"test"},
{"word":"ga'","spanish":"cesta","english":"basket","path":"image/2.jpg","transcription":"gáʔ","tone":"H","vowel":"a","phonation":"C","trial":"test"}]
*/

var practice_list = [{"word":"yag","spanish":"árbol","english":"tree","path":"image/p1.jpg","transcription":"jà̰g","tone":"L","vowel":"a","phonation":"R","trial":"practice"},
{"word":"lawa","spanish":"ojo","english":"eye","path":"image/p2.jpg","transcription":"lǎwàʔ","tone":"L","vowel":"a","phonation":"C","trial":"practice"},
{"word":"chhit","spanish":"huevo","english":"egg","path":"image/p3.jpg","transcription":"ʒît","tone":"F","vowel":"i","phonation":"M","trial":"practice"},
{"word":"beko'","spanish":"perro","english":"dog","path":"image/p4.jpg","transcription":"bêkòʔ","tone":"L","vowel":"o","phonation":"C","trial":"practice"},
{"word":"beza'","spanish":"zorro","english":"fox","path":"image/p5.jpg","transcription":"bèzáʔ","tone":"H","vowel":"a","phonation":"C","trial":"practice"}]

var recycle_list = []

/*Global variable*/


var curTrial = 0;
var curTimeStart = 0;
var curTimeEnd = 0;
var responseTime = 0;
/*trialnum is the number shown on the top of the div*/
var trialnum = 1;
/*trialnumII is the number shown on the top of the div of expII*/
/*totalnum is the number of total trials within one block*/
var totalnum = 3*word_list.length;
var experiment = "isolation";
var curresultList = [];
var practice = "no";
var repetition = 1;
var display_text = "";
/*csvFile is the csv that will be saved at the end of the experiment*/
var csvFile = [["curTrialNum", "transcription","word", "spanish", "english", "tone", "phonation", "vowel","experimentNum", "trial", "repetitionNum"]];

/*preload all the images*/
var htmlStr = "";
for (var i = 1; i <= 4; i++) {
  htmlStr =
    htmlStr +
    "<img src='image/image" + i + ".jpeg'>";
}

$("#preload").html(htmlStr);




/*Shuffle the practiceList in the beginning to randomize the order*/      
var practiceListRandom2 = jsPsych.randomization.repeat(practice_list, 1);
var practiceListRandom3 = jsPsych.randomization.repeat(practice_list, 1);
var practiceListRandom4 = jsPsych.randomization.repeat(practice_list, 1);

/*Shuffle the trialList in the beginning to randomize the order*/
var trialListRandom_repeat1_1 = jsPsych.randomization.repeat(word_list, 1);
var trialListRandom_repeat1_2 = jsPsych.randomization.repeat(word_list, 1);
var trialListRandom_repeat1_3 = jsPsych.randomization.repeat(word_list, 1);
var trialListRandom_repeat2_1 = jsPsych.randomization.repeat(word_list, 1);
var trialListRandom_repeat2_2 = jsPsych.randomization.repeat(word_list, 1);
var trialListRandom_repeat3_1 = jsPsych.randomization.repeat(word_list, 1);
var trialListRandom_repeat3_2 = jsPsych.randomization.repeat(word_list, 1);
var trialListRandom_repeat4_1 = jsPsych.randomization.repeat(word_list, 1);
var trialListRandom_repeat4_2 = jsPsych.randomization.repeat(word_list, 1);


var trialListRandom = trialListRandom_repeat1_1.concat(trialListRandom_repeat1_2, trialListRandom_repeat1_3, 
    practiceListRandom2, trialListRandom_repeat2_1, trialListRandom_repeat2_2,
    practiceListRandom3, trialListRandom_repeat3_1, trialListRandom_repeat3_2,
    practiceListRandom4, trialListRandom_repeat4_1, trialListRandom_repeat4_2);



var part1Length = trialListRandom_repeat1_1.length + trialListRandom_repeat1_2.length + trialListRandom_repeat1_3.length;
var part2practiceLength = part1Length + practiceListRandom2.length;
var part2Length = part2practiceLength + trialListRandom_repeat2_1.length + trialListRandom_repeat2_2.length;
var part3practiceLength = part2Length + practiceListRandom3.length;
var part3Length = part3practiceLength + trialListRandom_repeat3_1.length + trialListRandom_repeat3_2.length;
var part4practiceLength = part3Length + practiceListRandom4.length;
var part4Length = trialListRandom.length;

    


function CheckIdInput(){
    var input = document.getElementById('SubjectId');

   if(input.value.length == 0){
    alert("Please input the participant code")
   } else {
     StartHolder();
   }
    
  }

/* This gets called when they click the button on the instructions page */
function StartHolder(){
    $("#EndDebriefingButton").unbind("click");
    $("#DebriefingDiv").hide();
    $("#StartholderDiv").show();
    $("#StartholderButton").on("click", StartInstruction); 
  }
    

function StartInstruction(){
    $("#StartholderButton").unbind("click");
    $("#StartholderDiv").hide();
    $("#InstructionProduction1Div").show();
      

      
    $("#StartProduction1Button").on("click", StartExperiment);        
    }


function StartExperiment() {
        $("#InstructionProduction1Div").hide();
        $("#StartProduction1Button").unbind("click");
        ShowTrial();
      }


function HideFixation() {
        $("#fixation").hide()
      }
      
      
function ShowTrial() {
        $("#EndProduction1Button").unbind("click");
        $("#EndProduction2Button").unbind("click");
        $("#EndProduction3Button").unbind("click");
        $("#EndProduction4Button").unbind("click");

        $("#EndProduction1Div").hide();
        $("#EndProduction2Div").hide();
        $("#EndProduction3Div").hide();
        $("#EndProduction4Div").hide();

        
        
        $("#fixation").show();
        setTimeout(HideFixation, 500);
        setTimeout(Runs500msAfterFixation, 500);
      }


      function Runs500msAfterFixation() {

        if (curTrial < part1Length) {
            experiment = "isolation";
            practice = "no";
            if (curTrial < trialListRandom_repeat1_1.length) {
                repetition = 1;
            } else if ((curTrial => trialListRandom_repeat1_1.length) && (curTrial < 2*trialListRandom_repeat1_1.length)) {
                repetition = 2;
            } else if ((curTrial => 2*trialListRandom_repeat1_1.length) && (curTrial < part1Length)){
                repetition = 3;
            }

            curresultList = [curTrial, 
                trialListRandom[curTrial].transcription, 
                trialListRandom[curTrial].word, 
                trialListRandom[curTrial].spanish,
                trialListRandom[curTrial].english,
                trialListRandom[curTrial].tone,
                trialListRandom[curTrial].phonation,
                trialListRandom[curTrial].vowel, 
                experiment, 
                trialListRandom[curTrial].trial, 
                repetition];
            csvFile.push(curresultList);

            $("#ProductionTrialNumDiv").text(trialnum+"/"+totalnum + " (" + curTrial + ")");
            $("#ProductionTrialDiv").show();
            display_text = trialListRandom[curTrial].word;
            display_text_spanish = trialListRandom[curTrial].spanish;
            $("#ProductionText").text(display_text);
            $("#ProductionTextSpanish").text(display_text_spanish);
            $("#ProductionTrialImage").attr("src",trialListRandom[curTrial].path);
            $("#ProductionTrialButton").on("click", CheckProgress);
            $("#ProductionRecycleButton").on("click", Recycle);




        } else if ((curTrial >= part1Length) && (curTrial < part2Length)){
            var experiment = "initial";
            if (curTrial < part2practiceLength) {
                repetition = 1;
                practice = "yes";
            } else if ((curTrial => part2practiceLength) && (curTrial < part2practiceLength + trialListRandom_repeat2_1.length)) {
                repetition = 1;
                practice = "no";
            } else if ((curTrial => part2practiceLength + trialListRandom_repeat2_1.length) && (curTrial < part2Length)){
                repetition = 2;
                practice = "no";
            } 

            curresultList = [curTrial, 
                trialListRandom[curTrial].transcription, 
                trialListRandom[curTrial].word, 
                trialListRandom[curTrial].spanish,
                trialListRandom[curTrial].english,
                trialListRandom[curTrial].tone,
                trialListRandom[curTrial].phonation,
                trialListRandom[curTrial].vowel, 
                experiment, 
                trialListRandom[curTrial].trial, 
                repetition];

            csvFile.push(curresultList);

            $("#ProductionTrialNumDiv").text(trialnum+"/"+totalnum + " (" + curTrial + ")");
            $("#ProductionTrialDiv").show();
            display_text = "«" + trialListRandom[curTrial].word + "»" + " nachho " +  "«" + trialListRandom[curTrial].spanish + "»" + " xtichhachho.";
            display_text_spanish = "";
            $("#ProductionTextSpanish").text(display_text_spanish);
            $("#ProductionText").text(display_text);
            $("#ProductionTrialImage").attr("src",trialListRandom[curTrial].path);
            $("#ProductionTrialButton").on("click", CheckProgress);
            $("#ProductionRecycleButton").on("click", Recycle);

        } else if((curTrial >= part2Length) && (curTrial < part3Length)){
            experiment = "medial";
            if (curTrial < part4practiceLength) {
                repetition = 1;
                practice = "yes";
            } else if ((curTrial => part4practiceLength) && (curTrial < part4practiceLength + trialListRandom_repeat4_1.length)) {
                repetition = 1;
                practice = "no";
            } else if ((curTrial => part4practiceLength + trialListRandom_repeat4_1.length) && (curTrial < part4Length)){
                repetition = 2;
                practice = "no";
            } 

            curresultList = [curTrial, 
                trialListRandom[curTrial].transcription, 
                trialListRandom[curTrial].word, 
                trialListRandom[curTrial].spanish,
                trialListRandom[curTrial].english,
                trialListRandom[curTrial].tone,
                trialListRandom[curTrial].phonation,
                trialListRandom[curTrial].vowel, 
                experiment, 
                trialListRandom[curTrial].trial, 
                repetition];

            csvFile.push(curresultList);
    
            if (curTrial < part3practiceLength) {
                repetition = 1;
                practice = "yes";
            } else if ((curTrial => part3practiceLength) && (curTrial < part3practiceLength + trialListRandom_repeat3_1.length)) {
                repetition = 1;
                practice = "no";
            } else if ((curTrial => part3practiceLength + trialListRandom_repeat3_1.length) && (curTrial < part3Length)){
                repetition = 2;
                practice = "no";
            } 

            curresultList = [curTrial, 
                trialListRandom[curTrial].transcription, 
                trialListRandom[curTrial].word, 
                trialListRandom[curTrial].spanish,
                trialListRandom[curTrial].english,
                trialListRandom[curTrial].tone,
                trialListRandom[curTrial].phonation,
                trialListRandom[curTrial].vowel, 
                experiment, 
                trialListRandom[curTrial].trial, 
                repetition];

            csvFile.push(curresultList);

            $("#ProductionTrialNumDiv").text(trialnum+"/"+totalnum + " (" + curTrial + ")");
            $("#ProductionTrialDiv").show();
            display_text = "Wsedla le nake nachho " + "«" + trialListRandom[curTrial].word + "»" + " dichha cheto.";
            display_text_spanish = "Déjame enseñarte a decir " + "«" + trialListRandom[curTrial].spanish +  "»" + " en nuestro idioma.";
            $("#ProductionTextSpanish").text(display_text_spanish);
            $("#ProductionText").text(display_text);
            $("#ProductionTrialImage").attr("src",trialListRandom[curTrial].path);
            $("#ProductionTrialButton").on("click", CheckProgress);
            $("#ProductionRecycleButton").on("click", Recycle);

        } else if ((curTrial >= part3Length) && (curTrial < part4Length)) {
            experiment = "final";
            if (curTrial < part4practiceLength) {
                repetition = 1;
                practice = "yes";
            } else if ((curTrial => part4practiceLength) && (curTrial < part4practiceLength + trialListRandom_repeat4_1.length)) {
                repetition = 1;
                practice = "no";
            } else if ((curTrial => part4practiceLength + trialListRandom_repeat4_1.length) && (curTrial < part4Length)){
                repetition = 2;
                practice = "no";
            }

            curresultList = [curTrial, 
                trialListRandom[curTrial].transcription, 
                trialListRandom[curTrial].word, 
                trialListRandom[curTrial].spanish,
                trialListRandom[curTrial].english,
                trialListRandom[curTrial].tone,
                trialListRandom[curTrial].phonation,
                trialListRandom[curTrial].vowel, 
                experiment, 
                trialListRandom[curTrial].trial, 
                repetition];

            csvFile.push(curresultList);

            $("#ProductionTrialNumDiv").text(trialnum+"/"+totalnum + " (" + curTrial + ")");
            $("#ProductionTrialDiv").show();
            display_text_spanish = "La siguiente palabra es " + "«" + trialListRandom[curTrial].spanish + "».";
            $("#ProductionTextSpanish").text(display_text_spanish);    
            display_text = "na nachho " + "«" + trialListRandom[curTrial].word + "».";
            $("#ProductionText").text(display_text);
            $("#ProductionTrialImage").attr("src",trialListRandom[curTrial].path);
            $("#ProductionTrialButton").on("click", CheckProgress);
            $("#ProductionRecycleButton").on("click", Recycle);

        } else if (curTrial => part4Length) {
            experiment = "repair";
            repetition = 1;
            practice = "no";


            curresultList = [curTrial, 
                trialListRandom[curTrial].transcription, 
                trialListRandom[curTrial].word, 
                trialListRandom[curTrial].spanish,
                trialListRandom[curTrial].english,
                trialListRandom[curTrial].tone,
                trialListRandom[curTrial].phonation,
                trialListRandom[curTrial].vowel, 
                experiment, 
                trialListRandom[curTrial].trial, 
                repetition];

            csvFile.push(curresultList);
            
            $("#ProductionTrialNumDiv").text(trialnum+"/"+totalnum + " (" + curTrial + ")");
            $("#ProductionTrialDiv").show();
            $("#ProductionText").text(trialListRandom[curTrial].word);
            $("#ProductionTrialImage").attr("src",trialListRandom[curTrial].path);
            $("#ProductionTrialButton").on("click", CheckProgress);
            $("#ProductionRecycleButton").on("click", Recycle);

        }

    }


        function CheckProgress() {
            $('#ProductionTrialButton').unbind('click');
            $('#ProductionRecycleButton').unbind('click');
            $("#ProductionTrialDiv").hide();

            trialnum = trialnum + 1;
            curTrial = curTrial + 1;
            if (curTrial < part1Length) {
                ShowTrial();
            } else if (curTrial == part1Length) {
                trialnum = 1;
                totalnum = practice_list.length + 2*word_list.length;
                DoneWithPart1();
            } else if ((curTrial > part1Length) && (curTrial < part2Length)) {
                ShowTrial();
            } else if (curTrial == part2Length) {
                trialnum = 1;
                totalnum = practice_list.length + 2*word_list.length;
                DoneWithPart2();
            } else if ((curTrial > part2Length) && (curTrial < part3Length)) {
                ShowTrial();
            } else if (curTrial == part3Length) {
                trialnum = 1;
                totalnum = practice_list.length + 2*word_list.length;
                DoneWithPart3();
            } else if ((curTrial > part3Length) && (curTrial < part4Length)) {
                ShowTrial();
            } else if (curTrial == part4Length) {
                trialnum = 1;
                totalnum = trialListRandom.length - part4Length;
                DoneWithPart4();
            } else if ((curTrial > part4Length) && (curTrial < trialListRandom.length)) {
                totalnum = trialListRandom.length - part4Length;
                ShowTrial();
            } else if (curTrial == trialListRandom.length) {
                DoneWithExperiment();
            }
    }

        function DoneWithPart1(){
            $("#EndProduction1Div").show();
            $("#EndProduction1Button").on("click", ShowTrial);
        }

 
        
        function DoneWithPart2(){
            $("#EndProduction2Div").show();
            $("#EndProduction2Button").on("click", ShowTrial);
        }

 
        function DoneWithPart3(){
            $("#EndProduction3Div").show();
            $("#EndProduction3Button").on("click", ShowTrial);

        }


        function DoneWithPart4(){

            if (part4Length == trialListRandom.length) {
                DoneWithExperiment();
            }
            else {
            $("#EndProduction4Div").show();
            $("#EndProduction4Button").on("click", ShowTrial);
        }
        }



        function Recycle(){
            $('#ProductionRecycleButton').unbind('click');
            addobject = trialListRandom[curTrial];
            addobject.word = display_text;
            trialListRandom.push(addobject);
        }



        function DoneWithExperiment(){
            $("#EndExperimentDiv").show();
            


/*save csv*/
var subjectHead = ["id", "userAgent"];
var subjectInfo = [$("#SubjectId").val(), navigator.userAgent]

csvFile.push([]);
csvFile.push(subjectHead);
csvFile.push(subjectInfo);

var filename = "YC" + $("#SubjectId").val() + ".csv"        
        
        
let csvContent = "data:text/csv;charset=utf-8," 
    + csvFile.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", filename);
document.body.appendChild(link); // Required for FF

link.click();

        }


/*start experiment*/

$("#EndDebriefingButton").on("click", CheckIdInput)


