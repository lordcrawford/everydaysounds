// Author: Lord Crawford

var step1 = []
var step2 = []
var step3 = []
var step4 = []
var step5 = []
var step6 = []
var step7 = []
var step8 = []
var step9 = []
var step10 = []
var step11 = []
var step12 = []
var step13 = []
var step14 = []
var step15 = []
var step16 = []

var steps = [step1,step2,step3,step4,step5,step6,step7,step8,step9,step10,step11,step12,step13,step14,step15,step16]
var count = -1

$(document).ready(function(){

	$(".step").click(function(){
		if($(this).attr("data-on") == "false"){
			$(this).toggleClass('step_clicked')
			$(this).toggleClass('step_hover')
			$(this).attr("data-on","true");
		}
		else{
			$(this).toggleClass('step_hover')
			$(this).toggleClass('step_clicked')
			$(this).attr("data-on","false");
		}
	})

	$("#play").click(function(){
		$("#stop").attr("stop_on","false");
		$("#pause").attr("pause_on","false");
		playFull();
	})

	$("#pause").click(function(){
		if($(this).attr("pause_on") == "false"){
			$(this).attr("pause_on","true");
		}
		else{
			$(this).attr("pause_on","false");
		}
	})

	$("#stop").click(function(){
		if($(this).attr("stop_on") == "false"){
			$(this).attr("stop_on","true");
		}
		else{
			$(this).attr("stop_on","false");
		}
	})

	$("#reset").click(function(){
		window.location.reload();
	})

	$("#help_button").click(function(){
		if($("#help_popup").attr("showing") == "true"){
			$("#help_popup").hide();
			$("#help_popup").attr("showing","false");
		}
		else{
			$("#help_popup").show();
			$("#help_popup").attr("showing","true");
		}
	})

	$("#help_exit").click(function(){
			$("#help_popup").hide();
	})



	var input_files = document.getElementsByClassName("file_input");

	for (var i = 0, len = input_files.length; i < len; i++) {
		input_files[i].addEventListener("change", loadAudioFile, false);
	}
})

function playEach() {

	gatherSteps();

	if($("#pause").attr("pause_on") == "true"){
		return;
	}

	var old_class_name = "step" + (count + 1);
	old_div_step_column = $("."+old_class_name);
	old_div_step_column.toggleClass("step_played");

	if(count != -1){
		for (var i = 0, len = steps[count].length; i < len; i++) {
			steps[count][i].pause();
			steps[count][i].load();
		}
	}
	else{
		for (var i = 0, len = steps[count+1].length; i < len; i++) {
			steps[count+1][i].pause();
			steps[count+1][i].load();
		}
	}

	if($("#stop").attr("stop_on") == "true"){
		count = -1;
		return;
	}

	if(count == 15){
		count = -1;
	}

	var class_name = "step" + (count + 2);
	div_step_column = $("."+class_name);
	div_step_column.toggleClass("step_played");

	for (var i = 0, len = steps[count+1].length; i < len; i++) {
		steps[count+1][i].play();
	}
	count++

	// initial tempo value is at 150 milliseconds
	setTimeout(playEach, $("#tempo_value").val());
}


function playFull() {
	gatherSteps();
	playEach();
}

function loadAudioFile() {
  var src = this.id.replace("input","src");
  var file = this.id.replace("input","file");

  $("#" +src).attr("src", URL.createObjectURL(this.files[0]));
  var audio = document.getElementById(file);
  audio.load();
}

function gatherSteps(){

	step1 = [];
	div_steps1 = document.querySelectorAll(".step1.step_clicked");
	for (const div of div_steps1){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step1.push(document.getElementById(audio_id));
	}

	step2 = [];
	div_steps2 = document.querySelectorAll(".step2.step_clicked");
	for (const div of div_steps2){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step2.push(document.getElementById(audio_id));
	}

	step3 = [];
	div_steps3 = document.querySelectorAll(".step3.step_clicked");
	for (const div of div_steps3){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step3.push(document.getElementById(audio_id));
	}

	step4 = [];
	div_steps4 = document.querySelectorAll(".step4.step_clicked");
	for (const div of div_steps4){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step4.push(document.getElementById(audio_id));
	}

	step5 = [];
	div_steps5 = document.querySelectorAll(".step5.step_clicked");
	for (const div of div_steps5){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step5.push(document.getElementById(audio_id));
	}

	step6 = [];
	div_steps6 = document.querySelectorAll(".step6.step_clicked");
	for (const div of div_steps6){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step6.push(document.getElementById(audio_id));
	}

	step7 = [];
	div_steps7 = document.querySelectorAll(".step7.step_clicked");
	for (const div of div_steps7){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step7.push(document.getElementById(audio_id));
	}

	step8 = [];
	div_steps8 = document.querySelectorAll(".step8.step_clicked");
	for (const div of div_steps8){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step8.push(document.getElementById(audio_id));
	}

	step9 = [];
	div_steps9 = document.querySelectorAll(".step9.step_clicked");
	for (const div of div_steps9){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step9.push(document.getElementById(audio_id));
	}

	step10 = [];
	div_steps10 = document.querySelectorAll(".step10.step_clicked");
	for (const div of div_steps10){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step10.push(document.getElementById(audio_id));
	}

	step11 = [];
	div_steps11 = document.querySelectorAll(".step11.step_clicked");
	for (const div of div_steps11){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step11.push(document.getElementById(audio_id));
	}

	step12 = [];
	div_steps12 = document.querySelectorAll(".step12.step_clicked");
	for (const div of div_steps12){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step12.push(document.getElementById(audio_id));
	}

	step13 = [];
	div_steps13 = document.querySelectorAll(".step13.step_clicked");
	for (const div of div_steps13){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step13.push(document.getElementById(audio_id));
	}

	step14 = [];
	div_steps14 = document.querySelectorAll(".step14.step_clicked");
	for (const div of div_steps14){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step14.push(document.getElementById(audio_id));
	}

	step15 = [];
	div_steps15 = document.querySelectorAll(".step15.step_clicked");
	for (const div of div_steps15){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step15.push(document.getElementById(audio_id));
	}

	step16 = [];
	div_steps16 = document.querySelectorAll(".step16.step_clicked");
	for (const div of div_steps16){
		var parent_id = div.parentElement.id;
		var audio_id = parent_id.replace("steps", "file")
		step16.push(document.getElementById(audio_id));
	}

	steps = [step1,step2,step3,step4,step5,step6,step7,step8,step9,step10,step11,step12,step13,step14,step15,step16];
}
