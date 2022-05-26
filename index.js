var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const date = document.getElementById("date");
const start_time = document.getElementById("start_time");
const end_time = document.getElementById("end_time");

const startdate = document.getElementById("date_start");
const enddate = document.getElementById("date_end");
const date_utter_info = document.getElementById("date_utter");

const starttime1 = document.getElementById("start_time_1");
const starttime2 = document.getElementById("start_time_2");
const start_time_utter = document.getElementById("start_time_utter");

const endtime1 = document.getElementById("end_time_1");
const endtime2 = document.getElementById("end_time_2");
const end_time_utter = document.getElementById("end_time_utter");

let date_text = "";
let start_timetext = "";
let end_timetext = "";

date_utter_info.addEventListener("click", (e) => {
  e.preventDefault();
  playSpeech(date.value);
});
start_time_utter.addEventListener("click", (e) => {
  e.preventDefault();
  playSpeech1(start_time.value);
});
end_time_utter.addEventListener("click", (e) => {
  e.preventDefault();
  playSpeech2(end_time.value);
});

const speechSynthesis = window.speechSynthesis;
const speechSynthesis1 = window.speechSynthesis;
const speechSynthesis2 = window.speechSynthesis;

const utterance = new SpeechSynthesisUtterance();

function playSpeech(text) {
  utterance.text = text;
  speechSynthesis.speak(utterance);
}

//Date

const speech_date = new SpeechRecognition();
speech_date.continuous = true;
speech_date.lang = "en-US";

startdate.addEventListener("click", handleStartRecognition);
enddate.addEventListener("click", handleStopRecognition);

function handleStartRecognition(e) {
  e.preventDefault();
  date_text = "";
  date.value = "";
  speech_date.start();
}
speech_date.onresult = (ele) => {
  const result = ele.results.length;
  const transcript = ele.results[result - 1][0].trascript;
  date_text += transcript;
  date.value = date_text;
};
function handleStopRecognition(e) {
  e.preventDefault();
  speech_date.stop();
}

//Start Time

function playSpeech1(text) {
  utterance.text = text;
  speechSynthesis1.speak(utterance);
}

const speech_start_date = new SpeechRecognition();
speech_start_date.continuous = true;
speech_start_date.lang = "en-US";

starttime1.addEventListener("click", handleStartRecognition1);
starttime2.addEventListener("click", handleStopRecognition1);

function handleStartRecognition1(e) {
  e.preventDefault();
  start_timetext = "";
  start_time.value = "";
  speech_start_date.start();
}

speech_start_date.onresult = (ele) => {
  const result = ele.results.length;
  const transcript = ele.results[result - 1][0].transcript;
  start_timetext += transcript;
  start_time.value = start_timetext;
};

function handleStopRecognition1(e) {
  e.preventDefault();
  recognition.stop();
}

//End time

function playSpeech2(text) {
  utterance.text = text;
  speechSynthesis2.speak(utterance);
}

const speech_end_date = new SpeechRecognition();
speech_end_date.continuous = true;
speech_end_date.lang = "en-US";

endtime1.addEventListener("click", handleStartRecognition2);
endtime2.addEventListener("click", handleStopRecognition2);

function handleStartRecognition2(e) {
  e.preventDefault();
  end_timetext = "";
  end_time.value = "";
  speech_end_date.start();
}
speech_end_date.onresult = (ele) => {
  const result = ele.results.length;
  const transcript = ele.results[result - 1][0].transcript;
  end_timetext += transcript;
  end_time.value = end_timetext;
};

function handleStopRecognition2(e) {
  e.preventDefault();
  speech_end_date.stop();
}

// function speak() {
// 	if (synth.speaking) {
// 		console.error("speechSynthesis.speaking");
// 		return;
// 	}
// 	if (inputTxt.value !== "") {
// 		var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
// 		utterThis.onend = function (event) {
// 			console.log("SpeechSynthesisUtterance.onend");
// 		};
// 		utterThis.onerror = function (event) {
// 			console.error("SpeechSynthesisUtterance.onerror");
// 		};
// 		var selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
// 		for (i = 0; i < voices.length; i++) {
// 			if (voices[i].name === selectedOption) {
// 				utterThis.voice = voices[i];
// 				break;
// 			}
// 		}
// 		synth.speak(utterThis);
// 	}
// }

// function synthVoice(text) {
// 	const synth = window.speechSynthesis;
// 	const utterance = new SpeechSynthesisUtterance();
// 	utterance.text = text;
// 	synth.speak(utterance);
// }

// speechSynthesis.on("bot reply", function (replyText) {
// 	synthVoice(replyText);

// 	if (replyText == "") replyText = "(No answer...)";
// 	outputBot.textContent = replyText;
// });
