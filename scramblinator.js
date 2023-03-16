//doesnt work inff opera safari for some reason, though does in ie 8. eh?
window.onload = function () {
	var eContDiv = document.getElementById("cont");
	
	//if we ever provide alternate languages, this is where we will put the switch
	var eLanguageOptionsDiv = document.createElement("div");
		//blank for now
	eContDiv.appendChild(eLanguageOptionsDiv);
	eContDiv.className = "maindiv";
	
	//contains the title and explanation of the page
	var eHeaderDiv = document.createElement("div");
		var ePageTitleH1 = document.createElement("h1");
			ePageTitleH1.innerHTML = "Sentence Scrambler";
		var ePageExplainerP = document.createElement("p");
			ePageExplainerP.innerHTML = "Enter the sentences you want to scramble, each on its own line within the box below. The default options are shown below that box; clicking 'Change options' will, astoundingly, allow you to alter some of these options. They should be fairly self-explanatory, and if they are not, just try them out for yourself; you can't break anything.";
	eHeaderDiv.appendChild(ePageTitleH1);
	eHeaderDiv.appendChild(ePageExplainerP);
	eContDiv.appendChild(eHeaderDiv);
	
	//where all the fun happens
	var eScramblerDiv = document.createElement("div");
		//contains the inbox
		var eInboxDiv = document.createElement("div");
			var eInboxText = document.createElement("textarea");
				eInboxText.setAttribute("id", "inbox");
		eInboxDiv.appendChild(eInboxText);
		eScramblerDiv.appendChild(eInboxDiv);
		
		//contains the status bar, telling us what the current options are
		var eStatusDiv = document.createElement("div");
			eStatusDiv.setAttribute("id", "status");
			var eStatusCodeNumb = document.createElement("code");
				eStatusCodeNumb.innerHTML = "";
				eStatusCodeNumb.setAttribute("id", "statusnumb");
			var eStatusCodeLW = document.createElement("code");
				eStatusCodeLW.innerHTML = "S";
				eStatusCodeLW.setAttribute("id", "statuswl");
			var eStatusCodePunc = document.createElement("code");
				eStatusCodePunc.innerHTML = "";
				eStatusCodePunc.setAttribute("id", "statuspunc");
			var eStatusCodeSep = document.createElement("code");
				eStatusCodeSep.innerHTML = "";
				eStatusCodeSep.setAttribute("id", "statussep");
		eStatusDiv.appendChild(eStatusCodeNumb);
		eStatusDiv.appendChild(eStatusCodeLW);
		eStatusDiv.appendChild(eStatusCodePunc);
		eStatusDiv.appendChild(eStatusCodeSep);
		eScramblerDiv.appendChild(eStatusDiv);
		
		
		//normally hidden, contains the options as a big list of radios and checkboxes
		var eOptionsDiv = document.createElement("div");
			eOptionsDiv.style.display = "none";
			eOptionsDiv.setAttribute("id", "optsdiv");
			
			//first the separators section
			var eSepLbl = document.createElement("label");
				eSepLbl.innerHTML = "Use separator:";
			try {
				var eSlashChk = document.createElement("<input checked='checked'>");
			}
			catch (err) {
				var eSlashChk = document.createElement("input");
			}
				eSlashChk.setAttribute("type", "checkbox");
				eSlashChk.setAttribute("id", "slash");
				eSlashChk.setAttribute("name", "separator");
				eSlashChk.checked = true;
			var eSlashLbl = document.createElement("label");
				eSlashLbl.innerHTML = "slash ( / )";
				eSlashLbl.htmlFor = "slash";
			var eBarChk = document.createElement("input");
				eBarChk.setAttribute("type", "checkbox");
				eBarChk.setAttribute("id", "bar");
				eBarChk.setAttribute("name", "separator");
			var eBarLbl = document.createElement("label");
				eBarLbl.innerHTML = "bar ( | )";
				eBarLbl.htmlFor = "bar";
			var eDashChk = document.createElement("input");
				eDashChk.setAttribute("type", "checkbox");
				eDashChk.setAttribute("id", "dash");
				eDashChk.setAttribute("name", "separator");
			var eDashLbl = document.createElement("label");
				eDashLbl.innerHTML = "dash ( - )";
				eDashLbl.htmlFor = "dash";
			var eDotChk = document.createElement("input");
				eDotChk.setAttribute("type", "checkbox");
				eDotChk.setAttribute("id", "dot");
				eDotChk.setAttribute("name", "separator");
			var eDotLbl = document.createElement("label");
				eDotLbl.innerHTML = "dot ( . )";
				eDotLbl.htmlFor = "dot";
			var eOtherChk = document.createElement("input");
				eOtherChk.setAttribute("type", "checkbox");
				eOtherChk.setAttribute("id", "other");
				eOtherChk.setAttribute("name", "separator");
			var eOtherLbl = document.createElement("label");
				eOtherLbl.innerHTML = "other:";
				eOtherLbl.htmlFor = "other";
			var eOtherTB = document.createElement("input");
				eOtherTB.setAttribute("type", "text");
				eOtherTB.className = "smalltb";
				eOtherTB.setAttribute("id", "othertb");
				eOtherTB.onclick = function () {
					document.getElementById("other").onclick();
				};
			
			eOptionsDiv.appendChild(eSepLbl);
			eOptionsDiv.appendChild(eSlashChk);
			eOptionsDiv.appendChild(eSlashLbl);
			eOptionsDiv.appendChild(eBarChk);
			eOptionsDiv.appendChild(eBarLbl);
			eOptionsDiv.appendChild(eDashChk);
			eOptionsDiv.appendChild(eDashLbl);
			eOptionsDiv.appendChild(eDotChk);
			eOptionsDiv.appendChild(eDotLbl);
			eOptionsDiv.appendChild(eOtherChk);
			eOptionsDiv.appendChild(eOtherLbl);
			eOptionsDiv.appendChild(eOtherTB);
			
			enRadiate([eSlashChk, eBarChk, eDashChk, eDotChk, eOtherChk]);
			
			//next the words/letters section
			try {
				var eWordsRad = document.createElement("<input checked='checked' type='radio' id='words' name='wordsorletters'>");
			}
			catch (err) {
				var eWordsRad = document.createElement("input");
				eWordsRad.setAttribute("type", "radio");
				eWordsRad.setAttribute("id", "words");
				eWordsRad.setAttribute("name", "wordsorletters");
				eWordsRad.checked = true;
			}
				eWordsRad.onclick = function () {
					updateOptions(document.getElementById("optsdiv"));
				};
			var eWordsLbl = document.createElement("label");
				eWordsLbl.innerHTML = "scramble only words";
				eWordsLbl.htmlFor = "words";
			
			//next the words/letters section
			try {
				var eLettersRad = document.createElement("<input type='radio' id='letters' name='wordsorletters'>");
			}
			catch (err) {
				var eLettersRad = document.createElement("input");
				eLettersRad.setAttribute("type", "radio");
				eLettersRad.setAttribute("id", "letters");
				eLettersRad.setAttribute("name", "wordsorletters");
			}
				eLettersRad.onclick = function () {
					updateOptions(document.getElementById("optsdiv"));
				};
			var eLettersLbl = document.createElement("label");
				eLettersLbl.innerHTML = "scramble only letters";
				eLettersLbl.htmlFor = "letters";
			//next the words/letters section
			try {
				var eBothRad = document.createElement("<input type='radio' id='both' name='wordsorletters'>");
			}
			catch (err) {
				var eBothRad = document.createElement("input");
				eBothRad.setAttribute("type", "radio");
				eBothRad.setAttribute("id", "both");
				eBothRad.setAttribute("name", "wordsorletters");
			}
				eBothRad.onclick = function () {
					updateOptions(document.getElementById("optsdiv"));
				};
			var eBothLbl = document.createElement("label");
				eBothLbl.innerHTML = "scramble both words and letters";
				eBothLbl.htmlFor = "both";
			
			eOptionsDiv.appendChild(document.createElement("hr"));
			eOptionsDiv.appendChild(eWordsRad);
			eOptionsDiv.appendChild(eWordsLbl);
			eOptionsDiv.appendChild(eLettersRad);
			eOptionsDiv.appendChild(eLettersLbl);			
			eOptionsDiv.appendChild(eBothRad);
			eOptionsDiv.appendChild(eBothLbl);			
			
			
			//next the punctuation section
			try {
				var ePuncRad = document.createElement("<input checked='checked' type='radio' id='punc' name='puncorno'>");
			}
			catch (err) {
				var ePuncRad = document.createElement("input");
				ePuncRad.setAttribute("type", "radio");
				ePuncRad.setAttribute("id", "punc");
				ePuncRad.setAttribute("name", "puncorno");
				ePuncRad.checked = true;
			}
				ePuncRad.onclick = function () {
					updateOptions(document.getElementById("optsdiv"));
				};
			var ePuncLbl = document.createElement("label");
				ePuncLbl.innerHTML = "Preserve punctuation";
				ePuncLbl.htmlFor = "punc";
			//next the punctuation section
			try {
				var eNoPuncRad = document.createElement("<input type='radio' id='nopunc' name='puncorno'>");
			}
			catch (err) {
				var eNoPuncRad = document.createElement("input");
				eNoPuncRad.setAttribute("type", "radio");
				eNoPuncRad.setAttribute("id", "nopunc");
				eNoPuncRad.setAttribute("name", "puncorno");
			}
				eNoPuncRad.onclick = function () {
					updateOptions(document.getElementById("optsdiv"));
				};
			var eNoPuncLbl = document.createElement("label");
				eNoPuncLbl.innerHTML = "Remove punctuation";
				eNoPuncLbl.htmlFor = "nopunc";
			
			eOptionsDiv.appendChild(document.createElement("hr"));
			eOptionsDiv.appendChild(ePuncRad);
			eOptionsDiv.appendChild(ePuncLbl);
			eOptionsDiv.appendChild(eNoPuncRad);
			eOptionsDiv.appendChild(eNoPuncLbl);
			
			
			//and finally the numbers section
			var eNumbsChk = document.createElement("input");
				eNumbsChk.setAttribute("type", "checkbox");
				eNumbsChk.setAttribute("id", "numbs");
				eNumbsChk.onclick = function () {
					updateOptions(document.getElementById("optsdiv"));
				};
			var eNumbsLbl = document.createElement("label");
				eNumbsLbl.innerHTML = "Number each scrambled sentence";
				eNumbsLbl.htmlFor = "numbs";
			
			eOptionsDiv.appendChild(document.createElement("hr"));
			eOptionsDiv.appendChild(eNumbsChk);
			eOptionsDiv.appendChild(eNumbsLbl);
			
			
			
			//onclick stuff to make sure only one or none can be selected at any one time.
			//if the otherbox is selected focus the tb, and if the tb is clicked on select the other checkbox
		eScramblerDiv.appendChild(eOptionsDiv);
		
		
		//contains the Show options link to make the options div appear, and the button to activate the scramblinator
		var eControlsDiv = document.createElement("div");
			var eGoBtn = document.createElement("input");
				eGoBtn.setAttribute("type", "button");
				eGoBtn.setAttribute("id", "gobtn");
				eGoBtn.className = "gobtn";
				eGoBtn.value = "Scramblinatorize";
				eGoBtn.onclick = function () {
					scramblinatorize(eInboxText.value, updateOptions(eOptionsDiv), eOutboxDiv);
				};
			var eOptionsA = document.createElement("a");
				eOptionsA.innerHTML = "Change options";
				eOptionsA.href = "#";
				eOptionsA.onclick = function () {
					var optsdiv = document.getElementById("optsdiv");
						optsdiv.style.display = (optsdiv.style.display == "none") ? "block" : "none";
						this.innerHTML = (this.innerHTML == "Change options") ? "Hide options" : "Change options";
					return false;
				};
			eControlsDiv.appendChild(eOptionsA);
			eControlsDiv.appendChild(document.createElement("br"));
			eControlsDiv.appendChild(eGoBtn);
		
		eScramblerDiv.appendChild(eControlsDiv);
		
		//hidden at first, appears when filled with scramblinated sentences
		var eOutboxDiv = document.createElement("div");
			eOutboxDiv.className = "outboxdiv";
			eOutboxDiv.style.display = "none";
			eOutboxDiv.setAttribute("id", "outbox");
		eScramblerDiv.appendChild(eOutboxDiv);
	
	eContDiv.appendChild(eScramblerDiv);	
	
	
	var eFooterDiv = document.createElement("div");
	eContDiv.appendChild(eFooterDiv);	
	
	//now that the options div is there we can check its values and fill the status box
	updateOptions(eOptionsDiv);
	
	eInboxText.focus();
	
}

//takes the contents of the inbox, the options object from updateOptions, and the output div
function scramblinatorize(toscramble, opts, destination) {
	destination.innerHTML = "";
	
	//get the sentences, return if none
	if (toscramble == "") return;
	
	var aSentences = toscramble.split(/(\r\n|[\r\n])/g);
	if (aSentences.length < 1) return;
	
	var aNewSentences = [];
	
	for (var i = 0, k = 1; i < aSentences.length; i++) {
		if (/^\s*$/g.test(aSentences[i]) == true) aNewSentences.push("#~#");
		else {
			var newsentence = "";
				if (opts.numbers == true) {
					newsentence += k + ". ";
					k++;
				}
				newsentence += aSentences[i].scramble(opts.argstring).replace(/(\s|&nbsp;)/g, opts.separator);
			aNewSentences.push(newsentence);
		}
	}
	for (var i = 0; i < aNewSentences.length; i++) {
		if (aNewSentences[i] == "#~#") destination.appendChild(document.createElement("br"));
		else {
			destination.innerHTML += aNewSentences[i];
			destination.appendChild(document.createElement("br"));
		}
	}
	destination.style.display = "block";
}

//takes the options div and returns an object with the currently selected options, as well as updating the statusdiv handed to it
//called every time an option is clicked upon, reflects the change in the statusdiv. return value is only used when it is called as an argument to scramblinatorize
function updateOptions(optionsdiv) {
	var seps = "";
	var wl = "";
	var punc = "";
	var numbs = "";
	
	//access them all using their ids. makes most sense but not very encapsulatory, since they are documentwide accessible this way; still we should hand the optionsdiv and do optionsdiv.getElementById. or use tagMe actually.
	var aSepsIDs = ["slash", "bar", "dash", "dot", "other"];
	var aWLIDs = ["words", "letters", "both"];
	var aPuncIDs = ["punc", "nopunc"];
	
	//get the currently-checked options first, leaving the values as null if none are checked
	var currentSep = null;
	for (var i = 0; i < aSepsIDs.length; i++) {
		if (document.getElementById(aSepsIDs[i]).checked == true) {
			currentSep = aSepsIDs[i];
			break;
		}
	}
	
	var currentWL = null;
	for (var i = 0; i < aWLIDs.length; i++) {
		if (document.getElementById(aWLIDs[i]).checked == true) {
			currentWL = aWLIDs[i];
			break;
		}
	}
	
	var currentPunc = null;
	for (var i = 0; i < aPuncIDs.length; i++) {
		if (document.getElementById(aPuncIDs[i]).checked == true) {
			currentPunc = aPuncIDs[i];
			break;
		}
	}
	
	var oSeps = {
		slash : " / ",
		bar : " | ",
		dash : " - ",
		dot : " . "
	};
	
	//display the status according to what is checked
	if (!currentSep) document.getElementById("statussep").innerHTML = "Using no separator";
	else document.getElementById("statussep").innerHTML = "Using (" + ((currentSep == "other") ? document.getElementById("othertb").value.replace(/(\s|&nbsp;)/g, "&nbsp;") : oSeps[currentSep]) + ") as separator";
	document.getElementById("statuspunc").innerHTML = ((currentPunc == "punc") ? "Preserving " : "Removing ") + " punctuation";
	document.getElementById("statuswl").innerHTML = "Scrambling " + ((currentWL == "both") ? "words and letters" : currentWL + " only");
	document.getElementById("statusnumb").innerHTML = ((document.getElementById("numbs").checked == true) ? "Adding numbers" : "Not adding numbers");
	
	
	return {
		argstring : ((currentWL == "both") ? "words+letters" : currentWL) + ((currentPunc == "nopunc") ? "-nopunc" : ""),
		//rather complex triple conditional statement, which basically says: if the user only wants to scramble letters, we have no need to put separators in, so we hand a whitespace (so that whitespaces are replaced with whitespaces). if the current separator is null, i.e. none of the boxes are selected, we do the same. if there is a property in oSeps then we use that. otherwise we use the value of the textbox, whatever it may be.
		separator : ((currentWL == "letters") ? " " : ((!currentSep) ? " " : ((oSeps[currentSep]) ? oSeps[currentSep] : document.getElementById("othertb").value.replace(/(\s|&nbsp;)/g, "&nbsp;")))),
		numbers : ((document.getElementById("numbs").checked == true) ? true : false)
	};
};


//turns a selection of checkboxes into radiobuttonlike things - only one or none of the group can be selected at once.
function enRadiate(aCheckboxes) {
	for (var i = 0; i < aCheckboxes.length; i++) {
		aCheckboxes[i].onclick = function () {
			//if the current one is checked now, and we just clicked it, we don't wanna recheck it after unchecking all the others. but if it was not checked and we clicked it, we do want to make sure it is checked, so recheck is set to true.
			var recheck = (this.checked == true) ? false : true;
			
			//special case for the last box, on whose textbox we wanna focus onclick
			var lastbox = (this.getAttribute("id") == "other") ? true : false;
			
			for (var j = 0; j < aCheckboxes.length; j++) {
				aCheckboxes[j].checked = false;
			}
			
			if (recheck) {
				this.checked = false;
			}
			else {
				this.checked = true;
				if (lastbox) document.getElementById("othertb").focus();
			}
			updateOptions(document.getElementById("optsdiv"));
		}
	}
}

Array.prototype.randomize = function () {
    var aRnd = new Array();
    var aOut = new Array();
    var rnd_chk = ".";
    var rnd_c = 0;
    var rnd_length = this.length;
    do {
        var rndnum = Math.floor(Math.random() * rnd_length);
        if (rnd_chk.indexOf("." + rndnum + ".") == -1) {
            rnd_chk += rndnum + ".";
            aRnd[rnd_c] = rndnum;
            rnd_c++;
        }
    } while (aRnd.length < rnd_length);
    for (rnd_i = 0; rnd_i < rnd_length; rnd_i++) {
        aOut[rnd_i] = this[aRnd[rnd_i]];
    }
    return aOut;
};

//requires the Array prototype Array.prototype.randomize() i.e. rnd(); if it is not found, scramble() returns null
String.prototype.scramble = function (sW_args) {
    var sW_output = "";
    var punctuation = /[\[\]{}()<>:`',.!?";/\-]+/g	//one or more occurrences of punctuation globally
    var puncspacesplit = /[\[\]{}()<>:`',.!?";/\-\s]+/g
    switch (sW_args) {
        case "words":
        //code to scramble words, splitting at the space. leaves punctuation as is, attached to words.
        var sW_split = this.split(" ");
        sW_split = sW_split.randomize();
        sW_output = sW_split.join(" ");
        break;
        
        case "words-nopunc":
        //code to scramble words, eliminating any punctuation found.
        var sW_temp = this.replace(punctuation, "");
        var sW_split = sW_temp.split(" ");
        sW_split = sW_split.randomize();
        sW_output = sW_split.join(" ");
        break;
        
        case "letters":
        //code to scramble the letters, including the punctuation, but keeping word order the same.
        var sW_aWord = this.split(" ");
        var sW_aWord_length = sW_aWord.length
        for (var sW_i = 0; sW_i < sW_aWord_length; sW_i++) {
            var sW_temp = sW_aWord[sW_i].split("");
            sW_aWord[sW_i] = sW_temp.randomize().join("");
        }
        sW_output = sW_aWord.join(" ");
        
        break;
        
        case "letters-preserve":
        //code to scramble the letters in each word, preserving the structure of the sentence (punctuation etc remains the same)
        //note this fubars if the first letter in the string is a space. so trim leftspace when you use it.
        var sW_aPunc = this.match(puncspacesplit);
        if (!sW_aPunc) var sW_aPunc = [""];
        sW_aPunc.push("");	//needed because punctuation will be one fewer than words
        var sW_aWord = this.split(puncspacesplit);
        var sW_aWord_length = sW_aWord.length
        for (var sW_i = 0; sW_i < sW_aWord_length; sW_i++) {
            var sW_temp = sW_aWord[sW_i].split("");
            sW_aWord[sW_i] = sW_temp.randomize().join("") + sW_aPunc[sW_i];
        }
        sW_output = sW_aWord.join("");
        
        break;
        
        case "letters-nopunc":
        //code to scramble the letters, removing the punctuation but keeping word order the same.
        var sW_aWord = this.replace(punctuation, "");
        sW_aWord = sW_aWord.split(" ");
        var sW_aWord_length = sW_aWord.length
        for (var sW_i = 0; sW_i < sW_aWord_length; sW_i++) {
            sW_temp = sW_aWord[sW_i].split("");
            sW_aWord[sW_i] = sW_temp.randomize().join("");
        }
        sW_output = sW_aWord.join(" ");
        
        break;
        
        case "words+letters":
        //code to scramble the letters, including the punctuation, and then scramble the words too.
        var sW_aWord = this.split(" ");
        sW_aWord = sW_aWord.randomize();
        var sW_aWord_length = sW_aWord.length
        for (var sW_i = 0; sW_i < sW_aWord_length; sW_i++) {
            var sW_temp = sW_aWord[sW_i].split("");
            sW_aWord[sW_i] = sW_temp.randomize().join("");
        }
        sW_output = sW_aWord.join(" ");
        
        
        break;
        
        case "words+letters-preserve":
        //code to scramble the letters, leaving the punctuation attached in the same position to each word, and then scramble the words too.
        //note this fubars if the first letter in the string is a space. so trim leftspace when you use it.
        var sW_tmpA = this + " ";
        var sW_aPunc = sW_tmpA.match(puncspacesplit);
        if (!sW_aPunc) var sW_aPunc = [""];
        sW_aPunc.push("");	//needed because punctuation will be one fewer than words
        var sW_aWord = this.split(puncspacesplit);
        var sW_aWord_length = sW_aWord.length
        for (var sW_i = 0; sW_i < sW_aWord_length; sW_i++) {
            var sW_temp = sW_aWord[sW_i].split("");
            sW_aWord[sW_i] = sW_temp.randomize().join("") + sW_aPunc[sW_i];
        }
        sW_aWord = sW_aWord.randomize();
        sW_output = sW_aWord.join("");
        
        break;
        
        case "words+letters-nopunc":
        //code to scramble the letters, removing the punctuation, and then scramble the words too.
        var sW_aWord = this.replace(punctuation, "");
        sW_aWord = sW_aWord.split(" ");
        sW_aWord = sW_aWord.randomize();
        var sW_aWord_length = sW_aWord.length
        for (var sW_i = 0; sW_i < sW_aWord_length; sW_i++) {
            sW_temp = sW_aWord[sW_i].split("");
            sW_aWord[sW_i] = sW_temp.randomize().join("");
        }
        sW_output = sW_aWord.join(" ");
        
        break;
        
        default:
        //code to scramble all characters in the string randomly
        sW_split = this.split("");
        sW_split = sW_split.randomize();
        sW_output = sW_split.join("");
        break;
    }
    return sW_output;
};



