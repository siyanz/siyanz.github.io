// var dataArray = [5, 11, 18];

var svg = d3.select(".exploration").append("svg").attr("height","850px").attr("width","100%");

	// svg.append("g")
	// 	.append("circle")
	// 	.attr("cx", 650)
	// 	.attr("cy", 400)
	// 	.attr("r", 400)
	// 	.attr("fill", "#2A2A2A");

	svg.append("text")
		.append("tspan")
		.attr("x", 165)
		.attr("y", 120)
		.attr("fill", "#5A5A5A")
		.attr("style", "font-family: Raleway")
		.text("In some methods")
		.append("tspan")
		.attr("x", 282)
		.attr("y", 120)
		.attr("fill", "#00BDD6")
		.text("users participate in the exploration")
		.append("tspan")
		.attr("x", 505)
		.attr("y", 120)
		.attr("fill", "#5A5A5A")
		.text(", some")
		.append("tspan")
		.attr("x", 165)
		.attr("y", 142)
		.attr("fill", "#5A5A5A")
		.text("methods")
		.append("tspan")
		.attr("x", 227)
		.attr("y", 142)
		.attr("fill", "#E5CE00")
		.text("rely on observing users")
		.append("tspan")
		.attr("x", 379)
		.attr("y", 142)
		.attr("fill", "#5A5A5A")
		.text(", some")
		.append("tspan")
		.attr("x", 426)
		.attr("y", 142)
		.attr("fill", "#41DB98")
		.text("rely on user input")
		.append("tspan")
		.attr("x", 539)
		.attr("y", 142)
		.attr("fill", "#5A5A5A")
		.text(". Some")
		.append("tspan")
		.attr("x", 165)
		.attr("y", 164)
		.attr("fill", "#5A5A5A")
		.text("other methods are")
		.append("tspan")
		.attr("x", 288)
		.attr("y", 164)
		.attr("fill", "#A3A2FF")
		.text("design processes")
		.append("tspan")
		.attr("x", 405)
		.attr("y", 164)
		.attr("fill", "#5A5A5A")
		.text("that designers employ.");



// ------------------------------ participatory ------------------------------------

	var participatory = svg.append("g").attr("class","participatory");
	
	var businessOrigami = participatory.append("g").attr("class","inner").attr("id","businessOrigami");
	businessOrigami.append("circle")
		.attr("cx", 290)
		.attr("cy", 250)
		.attr("r", 40)
		.attr("fill","#B8FFFF");
	businessOrigami.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",245)
		.text("Business")
		.append("tspan")
		.attr("x",290)
		.attr("y",260)
		.text("Origami");

	var whatsOnYourRadar = participatory.append("g").attr("class","inner").attr("id","whatsOnYourRadar");
	whatsOnYourRadar.append("circle")
		.attr("cx", 200)
		.attr("cy", 250)
		.attr("r", 40)
		.attr("fill","#B8FFFF");
	whatsOnYourRadar.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",245)
		.text("What's on")
		.append("tspan")
		.attr("x",200)
		.attr("y",260)
		.text("your radar");



// ------------------------------ observation ------------------------------------

	var observation = svg.append("g").attr("class","observation");
	
	var contextualInquiry = observation.append("g").attr("class","inner").attr("id","contextualInquiry");
	contextualInquiry.append("circle")
		.attr("cx", 200)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#FFFFB6");
	contextualInquiry.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",345)
		.text("Contextual")
		.append("tspan")
		.attr("x",200)
		.attr("y",360)
		.text("Inquiry");

	var taskAnalysis = observation.append("g").attr("class","inner").attr("id","taskAnalysis");
	taskAnalysis.append("circle")
		.attr("cx", 290)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#FFFFB6");
	taskAnalysis.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",345)
		.text("Task")
		.append("tspan")
		.attr("x",290)
		.attr("y",360)
		.text("Analysis");

	var artifactAnalysis = observation.append("g").attr("class","inner").attr("id","artifactAnalysis");
	artifactAnalysis.append("circle")
		.attr("cx", 380)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#FFFFB6");
	artifactAnalysis.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",345)
		.text("Artifact")
		.append("tspan")
		.attr("x",380)
		.attr("y",360)
		.text("Analysis");

	var behaviorMapping = observation.append("g").attr("class","inner").attr("id","behaviorMapping");
	behaviorMapping.append("circle")
		.attr("cx", 470)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#FFFFB6");
	behaviorMapping.append("text")
		.append("tspan")
		.attr("x",470)
		.attr("y",345)
		.text("Behavior")
		.append("tspan")
		.attr("x",470)
		.attr("y",360)
		.text("Mapping");

	var competitiveTesting = observation.append("g").attr("class","inner").attr("id","competitiveTesting");
	competitiveTesting.append("circle")
		.attr("cx", 560)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#FFFFB6");
	competitiveTesting.append("text")
		.append("tspan")
		.attr("x",560)
		.attr("y",345)
		.text("Competitive")
		.append("tspan")
		.attr("x",560)
		.attr("y",360)
		.text("Testing");

	var ethnography = observation.append("g").attr("class","inner").attr("id","ethnography");
	ethnography.append("circle")
		.attr("cx", 200)
		.attr("cy", 435)
		.attr("r", 40)
		.attr("fill","#FFFFB6");
	ethnography.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",430)
		.text("Ethno-")
		.append("tspan")
		.attr("x",200)
		.attr("y",445)
		.text("graphy");

	var flyonthewall = observation.append("g").attr("class","inner").attr("id","flyonthewall");
	flyonthewall.append("circle")
		.attr("cx", 290)
		.attr("cy", 435)
		.attr("r", 40)
		.attr("fill","#FFFFB6");
	flyonthewall.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",430)
		.text("Fly-on-the")
		.append("tspan")
		.attr("x",290)
		.attr("y",445)
		.text("Wall");

	var aeiou = observation.append("g").attr("class","inner").attr("id","aeiou");
	aeiou.append("circle")
		.attr("cx", 380)
		.attr("cy", 435)
		.attr("r", 40)
		.attr("fill","#FFFFB6");
	aeiou.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",435)
		.text("A.E.I.O.U.");




// ------------------------------ selfReported ------------------------------------

	var selfReported = svg.append("g").attr("class","selfReported");
	
	var culturalProbes = selfReported.append("g").attr("class","inner").attr("id","culturalProbes");
	culturalProbes.append("circle")
		.attr("cx", 200)
		.attr("cy", 535)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	culturalProbes.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",530)
		.text("Cultural")
		.append("tspan")
		.attr("x",200)
		.attr("y",545)
		.text("Probes");
	
	var interviews = selfReported.append("g").attr("class","inner").attr("id","interviews");
	interviews.append("circle")
		.attr("cx", 290)
		.attr("cy", 535)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	interviews.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",535)
		.text("Interviews");
	
	var focusGroups = selfReported.append("g").attr("class","inner").attr("id","focusGroups");
	focusGroups.append("circle")
		.attr("cx", 380)
		.attr("cy", 535)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	focusGroups.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",530)
		.text("Focus")
		.append("tspan")
		.attr("x",380)
		.attr("y",545)
		.text("Groups");
	
	var photoStudies = selfReported.append("g").attr("class","inner").attr("id","photoStudies");
	photoStudies.append("circle")
		.attr("cx", 470)
		.attr("cy", 535)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	photoStudies.append("text")
		.append("tspan")
		.attr("x",470)
		.attr("y",530)
		.text("Photo")
		.append("tspan")
		.attr("x",470)
		.attr("y",545)
		.text("Studies");
	
	var lovebreakup = selfReported.append("g").attr("class","inner").attr("id","lovebreakup");
	lovebreakup.append("circle")
		.attr("cx", 560)
		.attr("cy", 535)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	lovebreakup.append("text")
		.append("tspan")
		.attr("x",560)
		.attr("y",525)
		.text("Love-letter")
		.append("tspan")
		.attr("x",560)
		.attr("y",540)
		.text("Breakup-")
		.append("tspan")
		.attr("x",560)
		.attr("y",555)
		.text("letter");
	
	var diaryStudies = selfReported.append("g").attr("class","inner").attr("id","diaryStudies");
	diaryStudies.append("circle")
		.attr("cx", 200)
		.attr("cy", 620)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	diaryStudies.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",615)
		.text("Diary")
		.append("tspan")
		.attr("x",200)
		.attr("y",630)
		.text("Studies");
	
	var storytelling = selfReported.append("g").attr("class","inner").attr("id","storytelling");
	storytelling.append("circle")
		.attr("cx", 290)
		.attr("cy", 620)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	storytelling.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",615)
		.text("Directed")
		.append("tspan")
		.attr("x",290)
		.attr("y",630)
		.text("Storytelling");
	
	var surveys = selfReported.append("g").attr("class","inner").attr("id","surveys");
	surveys.append("circle")
		.attr("cx", 380)
		.attr("cy", 620)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	surveys.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",620)
		.text("Surveys");
	
	var pictureCards = selfReported.append("g").attr("class","inner").attr("id","pictureCards");
	pictureCards.append("circle")
		.attr("cx", 470)
		.attr("cy", 620)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	pictureCards.append("text")
		.append("tspan")
		.attr("x",470)
		.attr("y",615)
		.text("Picture")
		.append("tspan")
		.attr("x",470)
		.attr("y",630)
		.text("Cards");
	



// ------------------------------ designProcess ------------------------------------

	var designProcess = svg.append("g").attr("class","designProcess");
	
	var secondaryResearch = designProcess.append("g").attr("class","inner").attr("id","secondaryResearch");
	secondaryResearch.append("circle")
		.attr("cx", 290)
		.attr("cy", 720)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	secondaryResearch.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",715)
		.text("Secondary")
		.append("tspan")
		.attr("x",290)
		.attr("y",730)
		.text("Research");

	var journeyMap = designProcess.append("g").attr("class","inner").attr("id","journeyMap");
	journeyMap.append("circle")
		.attr("cx", 200)
		.attr("cy", 720)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	journeyMap.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",715)
		.text("Journey")
		.append("tspan")
		.attr("x",200)
		.attr("y",730)
		.text("Maps");

	var moodBoards = designProcess.append("g").attr("class","inner").attr("id","moodBoards");
	moodBoards.append("circle")
		.attr("cx", 380)
		.attr("cy", 720)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	moodBoards.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",715)
		.text("Mood")
		.append("tspan")
		.attr("x",380)
		.attr("y",730)
		.text("Boards");

	var rolePlaying = designProcess.append("g").attr("class","inner").attr("id","rolePlaying");
	rolePlaying.append("circle")
		.attr("cx", 470)
		.attr("cy", 720)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	rolePlaying.append("text")
		.append("tspan")
		.attr("x",470)
		.attr("y",715)
		.text("Role")
		.append("tspan")
		.attr("x",470)
		.attr("y",730)
		.text("Playing");

	var stakeholderMaps = designProcess.append("g").attr("class","inner").attr("id","stakeholderMaps");
	stakeholderMaps.append("circle")
		.attr("cx", 560)
		.attr("cy", 720)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	stakeholderMaps.append("text")
		.append("tspan")
		.attr("x",560)
		.attr("y",715)
		.text("Stakeholder")
		.append("tspan")
		.attr("x",560)
		.attr("y",730)
		.text("Maps");

	







// ---------------------------------------- show DESCRIPTIONS on hover ------------------------------------


d3.select("#storytelling").on("click",show_storytelling);
// .on("mouseleave",remove_storytelling);

function show_storytelling(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Directed Storytelling<br></p><p class='description'>This method allows designers to easily gather rich stories of lived experiences from participants, using thoughtful prompts and guiding and framing questions in conversations. This is a shorthand means of collecting compelling stories from participants when time or other factors prevent direct observation or longer forms of research inquiry.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sessions start with a prompt by the researcher to the storyteller such as “Tell me a story about the last time you…”  and guidance from the researcher continues throughout the session, to keep the storyteller comfortable in flowing narrative.</p><p class='supportingPhoto'><img src='images/storytelling.jpg'></p>");
}




d3.select("#businessOrigami").on("click",show_businessOrigami);
// .on("mouseleave",remove_businessOrigami);

function show_businessOrigami(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Business Origami<br></p><p class='description'>This method enables teams to paper-prototype the interaction and value exchange among people, artifacts, and environments in a multichannel system.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The aim is to make a physical representation of the current system design that reveals how the different touch points realistically play out over time. This method works best early in the design process, and should include a multidisciplinary mix of four to six participants.</p><p class='supportingPhoto'><img src='images/business.jpg'></p>");
}




d3.select("#whatsOnYourRadar").on("click",show_whatsOnYourRadar);
// .on("mouseleave",remove_whatsOnYourRadar);

function show_whatsOnYourRadar(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>What's on your Radar<br></p><p class='description'>This is an exercise in which participants plot items according to personal significance.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This methods provides a template where participants can organize items within a given scope based on how important or relevant they consider them to be. So whether you're dealing with concrete items or abstract concepts, the diagram is a useful way for people to assign rank.</p><p class='supportingPhoto'><img src='images/radar.jpg'></p>");
}




d3.select("#contextualInquiry").on("click",show_contextualInquiry);
// .on("mouseleave",remove_contextualInquiry);

function show_contextualInquiry(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Contextual Inquiry<br></p><p class='description'>This is an immersive, contextual method of observing and interviewing that reveals underlying and invisible work structure.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Researchers observe work where it happens. Spending time where work takes place is a precondition to understanding users’ tacit knowledge, and contextual inquiry provides a framework that places the researcher on-site as a participant in the inquiry, and begins the process of exposing underlying work structure.</p><p class='supportingPhoto'><img src='images/contextinquiry.jpg'></p>");
}




d3.select("#artifactAnalysis").on("click",show_artifactAnalysis);
// .on("mouseleave",remove_artifactAnalysis);

function show_artifactAnalysis(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Artifact Analysis<br></p><p class='description'>What do objects have to say about people and their culture, time, and place? Researchers attempt to understand the substance of the object and what it says through its material, aesthetic, and interactive qualities.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Analysis should gain insights from location of objects, including public or private, where they are stored, displayed, or carried, if they are part of a larger whole or system, and if they are owned, shared, or communal or corporate property.</p><p class='supportingPhoto'><img src='images/artifacts.jpg'></p>");
}




d3.select("#behaviorMapping").on("click",show_behaviorMapping);
// .on("mouseleave",remove_behaviorMapping);

function show_behaviorMapping(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Behavior Mapping<br></p><p class='description'>Behavioral maps are used to document readily observable characteristics, movements, and activities, including approximate ages and genders, whether people are alone or with others, what they are doing, time spent at fixed locations or in transit, and the details of environmental context.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Annotated maps, plans, video or time-lapse photography are some of the tools that help in documenting location-based observations of human activity.</p><p class='supportingPhoto'><img src='images/behavior.jpg'></p>");
}




d3.select("#competitiveTesting").on("click",show_competitiveTesting);
// .on("mouseleave",remove_competitiveTesting);

function show_competitiveTesting(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Competitive Testing<br></p><p class='description'>In this process, research is conducted to evaluate the usability and learnability of your competitors’ products. It is important to not only test features of your competitor products that are similar to yours, but it’s equally important to isolate and test the features of the competitive product that are different from yours.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When recruiting participants for such tests, it is good practice to not reveal your company name to participants, to avoid introducing bias. During the event, be mindful that even the subtlest body language—a flinch, a smirk, a nod—can influence a participant’s reactions and alter their behavior.</p><p class='supportingPhoto'><img src='images/Comptesting.jpg'></p>");
}




d3.select("#ethnography").on("click",show_ethnography);
// .on("mouseleave",remove_ethnography);

function show_ethnography(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Ethnography<br></p><p class='description'>This is the study of people in their natural settings; a descriptive account of social life and culture in a defined social system. Experience sampling methods as diary and photo studies, cultural probes, contextual inquiry, and various forms of observation, could be employed by designers as they immersive and 'sample' real experiences of participants.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The ethnographer enters the field with an open mind, not an empty head. Before asking the first question in the field, the ethnographer begins with a problem, a theory or model, a research design, specific collection techniques and tools for analysis.</p><p class='supportingPhoto'><img src='images/ethnography.jpg'></p>");
}




d3.select("#flyonthewall").on("click",show_flyonthewall);
// .on("mouseleave",remove_flyonthewall);

function show_flyonthewall(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Fly-on-the-Wall Observation<br></p><p class='description'>This method allows researchers to unobtrusively gather information by looking and listening without direct interference with the people or behaviors being observed. While it is posited to minimize potential bias or behavioral influences from engagement with users, it reduces the ability to probe further into motivations behind participant behaviors.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This might be appropriate when you are observing public places and activities, or any time if you believe that people may edit their speech and actions if observations are intrusive.</p><p class='supportingPhoto'><img src='images/fly.jpg'></p>");
}




d3.select("#taskAnalysis").on("click",show_taskAnalysis);
// .on("mouseleave",remove_taskAnalysis);

function show_taskAnalysis(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Task Analysis<br></p><p class='description'>This method tries to understand the constituent elements of a user’s work flow, including actions, interactions, system responses in an environmental context, used to achieve goals. A task analysis grid lays out the task, scenario, influencers, pain-points and system functionalities.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task analysis is similar to contextual inquiry, because they both observation and interviews. However, contextual inquiry focusses on general aspects of user behavior, decision making and interactions within the wider context, and task analysis concentrates solely on the task at hand.</p><p class='supportingPhoto'><img src='images/taskanalysis.jpg'></p>");
}




d3.select("#aeiou").on("click",show_aeiou);
// .on("mouseleave",remove_aeiou);

function show_aeiou(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>AEIOU<br></p><p class='description'>AEIOU meaning Activities, Environments, Interactions, Objects and Users, is a framework that can be applied in any ethnographic or observational method, guiding familiar collection techniques including notes, photos, and interviews. AEIOU can be used to develop a worksheet for categorizing or coding observational notes as they occur, or as a set of broad categories under which several more specific subcategories or codes can be created.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Individual worksheets for AEIOU, help document research, and can be converged onto a large team worksheet for synthesis and design ideation.</p><p class='supportingPhoto'><img src='images/aeiou.jpg'></p>");
}




d3.select("#focusGroups").on("click",show_focusGroups);
// .on("mouseleave",remove_focusGroups);

function show_focusGroups(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Focus Groups<br></p><p class='description'>Focus groups are a qualitative method often used by market researchers to gauge the opinions, feelings, and attitudes from a group of carefully recruited participants about a product, service, marketing campaign, or a brand. Participants are encouraged to share experiences, stories, memories, perceptions, wants/needs, and fantasies.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guided by a skilled moderator, Focus groups can provide deep insight into themes, patterns, and trends.</p><p class='supportingPhoto'><img src='images/focusgroups.png'></p>");
}




d3.select("#culturalProbes").on("click",show_culturalProbes);
// .on("mouseleave",remove_culturalProbes);

function show_culturalProbes(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Cultural Probes<br></p><p class='description'>Cultural probes are provocative instruments given to participants to inspire new forms of self-understanding and communication about their lives, environments, thoughts, and interactions.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Studies have generally used postcards, maps, journals, cameras, recording devices, and various pieces of text and imagery to help people consider personal context and circumstance. They serve to begin a conversation about possibilities that might exist by design, in tandem with other informative research methods such as observations, site visits, interviews, and secondary sources.</p><p class='supportingPhoto'><img src='images/culture.jpg'></p>");
}




d3.select("#interviews").on("click",show_interviews);
// .on("mouseleave",remove_interviews);

function show_interviews(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Interviews<br></p><p class='description'>A fundamental research method for direct contact with participants, Interviews help collect firsthand personal accounts of experience, opinions, attitudes, and perceptions. Interviews are often one component of a research strategy utilizing complementary methods such as questionnaires or observations, to verify and humanize data collected using other means.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There can be different types of interviews. Stakeholder interviews focus on information from specific roles or people who may have a vested interest in the particular inquiry. Key informant interviews concentrate on people who have specialized or expert knowledge to contribute. Interviews may also be conducted individually, with couples, or with strategic groups. Paired or group interviews are efficient and often provide more natural conversation, with participants reminding or challenging each other about details and history. However, the researcher must also be aware of the undue influence that one person can have over another, and find ways to moderate the risk of dominated interviews or conversations.</p>");
}




d3.select("#surveys").on("click",show_surveys);
// .on("mouseleave",remove_surveys);

function show_surveys(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Surveys<br></p><p class='description'>Surveys are a common method for collecting information from people, typically from large samples of respondents.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are various types of survey questions: <br>Closed—forced choice structured with limited response options, <br>Open—broad to encourage discussions, <br>General—focused on big picture, <br>Specific—focused on details of a situation, <br>Factual—responses that can be verified by observation, <br>Hypothetical—asks to speculate about behaviors or actions, <br>Judgmental—asks participant for his or her opinion, <br>Comparative—asks for a judgment on two or more alternatives, <br>Neutral—no value words used, remains objective, <br>Request for suggestions—invites to give new ideas, opinions, <br>Request for questions—invites participant to suggest questions.</p><p class='supportingPhoto'><img src='images/surveys.jpg'></p>");
}




d3.select("#diaryStudies").on("click",show_diaryStudies);
// .on("mouseleave",remove_diaryStudies);

function show_diaryStudies(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Diary Studies<br></p><p class='description'>This method is ideal for collecting information from participants across time, sampling their thoughts, feelings, or behaviors at key moments throughout a day, week, or month.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While traditionally diary studies have been completed with paper and pen, technology affords novel forms of entries such as digital photos, video, and audio that may be recorded on digital devices, and sent via email or uploaded on provided sites. digital diaries can also be completed as an integrated component of online or device interactions, with entry forms imbedded directly within software interfaces.</p><p class='supportingPhoto'><img src='images/diary.jpg'></p>");
}




d3.select("#photoStudies").on("click",show_photoStudies);
// .on("mouseleave",remove_photoStudies);

function show_photoStudies(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Photo Studies<br></p><p class='description'>Photo studies invite the participant to photo-document aspects of his or her life and interactions, providing the designer with visual, self-reported insights into user behaviors and priorities.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Like many creative methods, participants are more likely to enthusiastically engage in requests to complete a photo study of their personal lives than they are to traditional means of behavior survey. Furthermore, photo studies provide visual collateral for designers to work with, and particularly when contextualized with journals or other written material, can lead to unique discoveries about users, their behaviors, and priorities.</p><p class='supportingPhoto'><img src='images/photostudies.jpg'></p>");
}




d3.select("#pictureCards").on("click",show_pictureCards);
// .on("mouseleave",remove_pictureCards);

function show_pictureCards(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Picture Cards<br></p><p class='description'>Picture cards are an artifact-based interview method, providing an anchor around which participant conversations can take place. People are generally put at ease when interviews are facilitated through concrete, visual reference points.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The participants can be asked to tell stories of experience, prompted with questions by the researcher under themes such as time of use, location, relationships, life events, mental states, and other resources associated with the product or service. The cards can be used for sorting and 'sketching' future scenarios, laid out as a story unfolds.</p><p class='supportingPhoto'><img src='images/picturecards.jpg'></p>");
}




d3.select("#lovebreakup").on("click",show_lovebreakup);
// .on("mouseleave",remove_lovebreakup);

function show_lovebreakup(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Love letter, Break-up letter<br></p><p class='description'>A personal letter written to a product often reveals profound insights about what people value and expect from the objects in their everyday lives.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The love letter gets at the heart of what people feel during those magical moments of connection with a product. Descriptions of what elicits delight, infatuation, and loyalty are common themes. The Breakup letter alternatively provides insight about how, when, and where a relationship with a product turned sour, and can be used to gain insight into why people abandon a brand or a product. People will share information about what new product they are now happy with, and what the new product has that the abandoned product does not.</p><p class='supportingPhoto'><img src='images/loveletter.jpg'></p>");
}




d3.select("#moodBoards").on("click",show_moodBoards);
// .on("mouseleave",remove_moodBoards);

function show_moodBoards(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Mood Boards<br></p><p class='description'>A collage of collected pictures, illustrations, or brand imagery can be used to visually communicate an essential description of targeted aesthetics, style, audience, context, or other aspects of design intent.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an internal tool, image boards can serve as a tangible focus for the designer, a visual reminder of the aesthetic context or audience for inspiring their design efforts. Externally, image boards are powerful tools for effectively communicating design intent to clients, visually clarifying an aesthetic direction or targeted audience.</p><p class='supportingPhoto'><img src='images/imageboard.jpg'></p>");
}




d3.select("#secondaryResearch").on("click",show_secondaryResearch);
// .on("mouseleave",remove_secondaryResearch);

function show_secondaryResearch(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Secondary Research<br></p><p class='description'>Secondary research consists of information collected and synthesized from existing data, rather than original material sourced through primary research with participants.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is traditionally summarized in systematic reviews, or literature reviews, with full citations of sources. Designers usually summarize their findings into visual stories for shared viewing, sorting, synthesis, and the crafting of narratives. Blogs have become common repositories for collecting secondary research, facilitating the organization of text, visual references, and source links, in a format convenient for sharing.</p><p class='supportingPhoto'><img src='images/secondary.png'></p>");
}




d3.select("#stakeholderMaps").on("click",show_stakeholderMaps);
// .on("mouseleave",remove_stakeholderMaps);

function show_stakeholderMaps(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Stakeholder Maps<br></p><p class='description'>Stakeholder maps help to visually consolidate and communicate the key constituents of a design project, setting the stage for usercentered research and design development.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the design process begins, in the planning, scoping, and definition phase, it is particularly critical to identify who all the key constituents are that might have a stake in design outcomes. Stakeholder maps serve this purpose, as a visual reference point for the design team in planning for user research activities, and guiding appropriate communication with stakeholders throughout the project development process.</p><p class='supportingPhoto'><img src='images/stakeholder.jpg'></p>");
}




d3.select("#rolePlaying").on("click",show_rolePlaying);
// .on("mouseleave",remove_rolePlaying);

function show_rolePlaying(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Role Playing<br></p><p class='description'>Acting the role of the user in realistic scenarios can forge a deep sense of empathy and highlight challenges, presenting opportunities that can be met by design.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mock activities through role-playing are particularly useful when direct observation is not feasible or ethical, for example, for personally sensitive situations or where access to the users is restricted. However, wherever possible, role-playing should still be built upon realistic scenarios and user behaviors, either through collecting enough information to guide the exercise, or at least by comparison to real users and situations later, through other research means such as interviews, contextual observations, or secondary research.</p><p class='supportingPhoto'><img src='images/roleplaying.jpg'></p>");
}




d3.select("#journeyMap").on("click",show_journeyMap);
// .on("mouseleave",remove_journeyMap);

function show_journeyMap(d){
	$("#notice").remove();
	$(".explorationDescription .methodTitle").remove();
	$(".explorationDescription .description").remove();
	$(".explorationDescription .supportingPhoto").remove();
	$(".explorationDescription").append("<p class='methodTitle'><br>Journey Maps<br></p><p class='description'>A user journey map is a visualization of the experiences people have when interacting with a product or service, so that each moment can be individually evaluated and improved.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Solid user journey maps are usually created alongside, or immediately following, personas and scenarios documents. All three deliverables should be heavily informed by direct contact with the customers who use the product or service. Rich, qualitative data that is a result of primary research is the only way to be sure to craft deep, compelling narratives that reflect people’s actual needs, feelings, and perceptions that occur before, during, and after product interactions.</p><p class='supportingPhoto'><img src='images/journeymap.png'></p>");
}






// -------------------------------- D E S I G N  phase --------------------------------------
// --------------------------------    begins here     --------------------------------------


var svg2 = d3.select(".design").append("svg").attr("height","830px").attr("width","100%");



svg2.append("text")
		.append("tspan")
		.attr("x", 165)
		.attr("y", 120)
		.attr("fill", "#5A5A5A")
		.attr("style", "font-family: Raleway")
		.text("Most methods in the design phase are")
		.append("tspan")
		.attr("x", 415)
		.attr("y", 120)
		.attr("fill", "#A3A2FF")
		.text("design processes")
		.append("tspan")
		.attr("x", 529)
		.attr("y", 120)
		.attr("fill", "#5A5A5A")
		.text(", but in")
		.append("tspan")
		.attr("x", 165)
		.attr("y", 142)
		.attr("fill", "#5A5A5A")
		.text("some methods")
		.append("tspan")
		.attr("x", 266)
		.attr("y", 142)
		.attr("fill", "#00BDD6")
		.text("users participate in designing")
		.append("tspan")
		.attr("x", 456)
		.attr("y", 142)
		.attr("fill", "#5A5A5A")
		.text(", while some methods")
		.append("tspan")
		.attr("x", 165)
		.attr("y", 164)
		.attr("fill", "#41DB98")
		.text("rely on user input.");
		





// ------------------------------ participatory ------------------------------------

	var participatory2 = svg2.append("g").attr("class","participatory");
	
	var collage = participatory2.append("g").attr("class","inner").attr("id","collage");
	collage.append("circle")
		.attr("cx", 200)
		.attr("cy", 250)
		.attr("r", 40)
		.attr("fill","#B8FFFF");
	collage.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",250)
		.text("Collage");

	var creativeToolkit = participatory2.append("g").attr("class","inner").attr("id","creativeToolkit");
	creativeToolkit.append("circle")
		.attr("cx", 290)
		.attr("cy", 250)
		.attr("r", 40)
		.attr("fill","#B8FFFF");
	creativeToolkit.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",245)
		.text("Creative")
		.append("tspan")
		.attr("x",290)
		.attr("y",260)
		.text("Toolkits");

	var designCharette = participatory2.append("g").attr("class","inner").attr("id","designCharette");
	designCharette.append("circle")
		.attr("cx", 380)
		.attr("cy", 250)
		.attr("r", 40)
		.attr("fill","#B8FFFF");
	designCharette.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",245)
		.text("Design")
		.append("tspan")
		.attr("x",380)
		.attr("y",260)
		.text("Charette");



	// ------------------------------ selfReported ------------------------------------

	var selfReported2 = svg2.append("g").attr("class","selfReported");
	
	var cardSorting = selfReported2.append("g").attr("class","inner").attr("id","cardSorting");
	cardSorting.append("circle")
		.attr("cx", 200)
		.attr("cy", 620)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	cardSorting.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",615)
		.text("Card")
		.append("tspan")
		.attr("x",200)
		.attr("y",630)
		.text("Sorting");

	var speedDating = selfReported2.append("g").attr("class","inner").attr("id","speedDating");
	speedDating.append("circle")
		.attr("cx", 290)
		.attr("cy", 620)
		.attr("r", 40)
		.attr("fill","#B5FADD");
	speedDating.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",615)
		.text("Speed")
		.append("tspan")
		.attr("x",290)
		.attr("y",630)
		.text("Dating");



	// ---------------------------------- designProcess ------------------------------------

	var designProcess2 = svg2.append("g").attr("class","designProcess");
	
	var affinityDiagram = designProcess2.append("g").attr("class","inner").attr("id","affinityDiagram");
	affinityDiagram.append("circle")
		.attr("cx", 200)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	affinityDiagram.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",345)
		.text("Affinity")
		.append("tspan")
		.attr("x",200)
		.attr("y",360)
		.text("Diagramming");

	var storyBoards = designProcess2.append("g").attr("class","inner").attr("id","storyBoards");
	storyBoards.append("circle")
		.attr("cx", 290)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	storyBoards.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",345)
		.text("Story")
		.append("tspan")
		.attr("x",290)
		.attr("y",360)
		.text("Boards");

	var bodyStorming = designProcess2.append("g").attr("class","inner").attr("id","bodyStorming");
	bodyStorming.append("circle")
		.attr("cx", 380)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	bodyStorming.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",345)
		.text("Body")
		.append("tspan")
		.attr("x",380)
		.attr("y",360)
		.text("Storming");

	var scenarios = designProcess2.append("g").attr("class","inner").attr("id","scenarios");
	scenarios.append("circle")
		.attr("cx", 470)
		.attr("cy", 350)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	scenarios.append("text")
		.append("tspan")
		.attr("x",470)
		.attr("y",350)
		.text("Scenarios");

	var experiencePrototyping = designProcess2.append("g").attr("class","inner").attr("id","experiencePrototyping");
	experiencePrototyping.append("circle")
		.attr("cx", 560)
		.attr("cy", 350)  
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	experiencePrototyping.append("text")
		.append("tspan")
		.attr("x",560)
		.attr("y",345)
		.text("Experience")
		.append("tspan")
		.attr("x",560)
		.attr("y",360)
		.text("Prototyping");

	var personas = designProcess2.append("g").attr("class","inner").attr("id","personas");
	personas.append("circle")
		.attr("cx", 200)
		.attr("cy", 435)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	personas.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",435)
		.text("Personas");

	var statementStarters = designProcess2.append("g").attr("class","inner").attr("id","statementStarters");
	statementStarters.append("circle")
		.attr("cx", 290)
		.attr("cy", 435)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	statementStarters.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",430)
		.text("Statement")
		.append("tspan")
		.attr("x",290)
		.attr("y",445)
		.text("Starters");

	var conceptMapping = designProcess2.append("g").attr("class","inner").attr("id","conceptMapping");
	conceptMapping.append("circle")
		.attr("cx", 380)
		.attr("cy", 435)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	conceptMapping.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",430)
		.text("Concept")
		.append("tspan")
		.attr("x",380)
		.attr("y",445)
		.text("Mapping");

	var difficultyMatrix = designProcess2.append("g").attr("class","inner").attr("id","difficultyMatrix");
	difficultyMatrix.append("circle")
		.attr("cx", 470)
		.attr("cy", 435)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	difficultyMatrix.append("text")
		.append("tspan")
		.attr("x",470)
		.attr("y",430)
		.text("Difficulty")
		.append("tspan")
		.attr("x",470)
		.attr("y",445)
		.text("Matrix");

	var kjtechnique = designProcess2.append("g").attr("class","inner").attr("id","kjtechnique");
	kjtechnique.append("circle")
		.attr("cx", 560)
		.attr("cy", 435)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	kjtechnique.append("text")
		.append("tspan")
		.attr("x",560)
		.attr("y",430)
		.text("KJ")
		.append("tspan")
		.attr("x",560)
		.attr("y",445)
		.text("Technique");

	var creativeMatrix = designProcess2.append("g").attr("class","inner").attr("id","creativeMatrix");
	creativeMatrix.append("circle")
		.attr("cx", 200)
		.attr("cy", 520)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	creativeMatrix.append("text")
		.append("tspan")
		.attr("x",200)
		.attr("y",515)
		.text("Creative")
		.append("tspan")
		.attr("x",200)
		.attr("y",530)
		.text("Matrix");

	var parallelPrototyping = designProcess2.append("g").attr("class","inner").attr("id","parallelPrototyping");
	parallelPrototyping.append("circle")
		.attr("cx", 290)
		.attr("cy", 520)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	parallelPrototyping.append("text")
		.append("tspan")
		.attr("x",290)
		.attr("y",515)
		.text("Parallel")
		.append("tspan")
		.attr("x",290)
		.attr("y",530)
		.text("Prototyping");

	var roundRobin = designProcess2.append("g").attr("class","inner").attr("id","roundRobin");
	roundRobin.append("circle")
		.attr("cx", 380)
		.attr("cy", 520)
		.attr("r", 40)
		.attr("fill","#DDDDFF");
	roundRobin.append("text")
		.append("tspan")
		.attr("x",380)
		.attr("y",515)
		.text("Round")
		.append("tspan")
		.attr("x",380)
		.attr("y",530)
		.text("Robin");

	

	// ------------------------- MOUSE HOVER ------------------------------------

	// ---------------------when participatory are hovered ---------------------

	d3.selectAll(".participatory .inner")
		.on("mouseover", mouseoverParticipatory)
		.on("mouseout", mouseoutParticipatory);

	function mouseoverParticipatory(d) {
		d3.select(this)
		.select("circle")
		.attr("r",42)
		.attr("fill","cyan");
	}
	function mouseoutParticipatory(d) {
		d3.select(this)
		.select("circle")
		.attr("r",40)
		.attr("fill", "#B8FFFF");
	}



	// -----------------------when observation are hovered ---------------------

	d3.selectAll(".observation .inner")
		.on("mouseover", mouseoverObservation)
		.on("mouseout", mouseoutObservation);

	function mouseoverObservation(d) {
		d3.select(this)
		.select("circle")
		.attr("r",42)
		.attr("fill","yellow");
	}
	function mouseoutObservation(d) {
		d3.select(this)
		.select("circle")
		.attr("r",40)
		.attr("fill", "#FFFFB6");
	}



	// ------------------------when selfReported are hovered ---------------------

	d3.selectAll(".selfReported .inner")
		.on("mouseover", mouseoverselfReported)
		.on("mouseout", mouseoutselfReported);

	function mouseoverselfReported(d) {
		d3.select(this)
		.select("circle")
		.attr("r",42)
		.attr("fill","#4AF7AD");
	}
	function mouseoutselfReported(d) {
		d3.select(this)
		.select("circle")
		.attr("r",40)
		.attr("fill", "#B5FADD");
	}


	// -------------------------when expertEval are hovered ---------------------

	d3.selectAll(".expertEval .inner")
		.on("mouseover", mouseoverexpertEval)
		.on("mouseout", mouseoutexpertEval);

	function mouseoverexpertEval(d) {
		d3.select(this)
		.select("circle")
		.attr("r",42)
		.attr("fill","#FF7D9F");
	}
	function mouseoutexpertEval(d) {
		d3.select(this)
		.select("circle")
		.attr("r",40)
		.attr("fill", "#FFCBD9");
	}


	// -----------------------when designProcess are hovered ---------------------

	d3.selectAll(".designProcess .inner")
		.on("mouseover", mouseoverdesignProcess)
		.on("mouseout", mouseoutdesignProcess);

	function mouseoverdesignProcess(d) {
		d3.select(this)
		.select("circle")
		.attr("r",42)
		.attr("fill","#A3A2FF");
	}
	function mouseoutdesignProcess(d) {
		d3.select(this)
		.select("circle")
		.attr("r",40)
		.attr("fill", "#DDDDFF");
	}




// ------------------------------------ SHOW HOVER DESCRIPTIONS ----------------------------------
//----------------------------------------- in Design phase ---------------------------------------

	

	d3.select("#collage").on("click",show_collage);	// .on("mouseleave",remove_collage);

	function show_collage(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Collage<br></p><p class='description'>With traditional methods as questionnaires and interviews, people often find it challenging to articulate their innermost feelings, thoughts, and desires. Collage can help mitigate this challenge, by providing an opportunity for participants to project personal information onto visual artifacts, then use these as a tangible reference point for conversation.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Participants may be provided with a variety of collage materials and a blank paper canvas to create their collage, or it may have general frames or lines to suggest placing words and images. A common framework is to create time dimensions for instance, experiences past, today, and in an ideal future.</p><p class='supportingPhoto'><img src='images/collage.jpg'></p>");
	}
	



	d3.select("#creativeToolkit").on("click",show_creativeToolkit);	// .on("mouseleave",remove_creativeToolkit);

	function show_creativeToolkit(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Creative Toolkits<br></p><p class='description'>Creative toolkits are really a means of conveniently packaging the elements of any of several participatory, generative design methods.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The ingredients of creative toolkits are inspired by the nature of design inquiry. Interface toolkits can contain paper or card elements representing design features for flexible arrangement, for suggesting mock or ideal web or device interactions. Engaging users in creative expression helps them articulate feelings, desires, and emotions that might be otherwise difficult using traditional research methods.</p><p class='supportingPhoto'><img src='images/creativetoolkit.jpg'></p>");
	}
	



	d3.select("#designCharette").on("click",show_designCharette);	// .on("mouseleave",remove_designCharette);

	function show_designCharette(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Design Charette<br></p><p class='description'>This is a workshop-style technique where designers and non-designers including project stakeholders, engineers, and users participate and collaboratively build off of each other's ideas. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A creative space is provided where small groups of participants at separate tables, get 10 minutes to sketch. After 10 minutes, the moderator asks two people from the table to move to different tables, while the third person remains at the table. Each person brings forward the best ideas from each group. Such cross-pollination of ideas aims to inform superior design concepts.</p><p class='supportingPhoto'><img src='images/designchar.jpg'></p>");
	}
	



	d3.select("#affinityDiagram").on("click",show_affinityDiagram);	// .on("mouseleave",remove_affinityDiagram);

	function show_affinityDiagram(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Affinity Diagramming<br></p><p class='description'>Affinity diagramming helps designers capture research-backed insights, observations, concerns, or requirements on individual sticky notes, so that the design implication of each can be fully considered on its own. Notes are then clustered based on affinity, which form into research-based themes.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Two common research variations are: One for Contextual Inquiry where the collected data forms the notes and second for Usability Testing where observations made from the notes.</p><p class='supportingPhoto'><img src='images/affinity.jpg'></p>");
	}
	



	d3.select("#storyBoards").on("click",show_storyBoards);	// .on("mouseleave",remove_storyBoards);

	function show_storyBoards(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Story Boards<br></p><p class='description'>Storyboards provide a visual narrative that generates empathy and communicates the context in which a technology or form factor will be used.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simple, abstract drawings of stick figures are often times more effective at focusing on story but refine drawings so that they show enough context. Text usually supplements storyboards as word or thought balloons, captions, or background signs. Usually between three to six panels are used to communicate an idea. Each storyboard should be focused on one salient concept or idea.</p><p class='supportingPhoto'><img src='images/storyboard.jpg'></p>");
	}
	



	d3.select("#bodyStorming").on("click",show_bodyStorming);	// .on("mouseleave",remove_bodyStorming);

	function show_bodyStorming(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Body Storming<br></p><p class='description'>Bodystorming situates brainstorming in physical experience, combining role-playing and simulation to inspire new ideas and empathic, spontaneous prototyping.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Through bodystorming, designers immerse themselves in user situations through loosely configured or simulated contexts, moving through space and situations while paying close attention to decisions, interactive experiences, and emotional responses. Participants must encourage active design ideation, concept generation, and even testing of ideas in parallel.</p><p class='supportingPhoto'><img src='images/bodystorming.jpg'></p>");
	}
	



	d3.select("#scenarios").on("click",show_scenarios);	// .on("mouseleave",remove_scenarios);

	function show_scenarios(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Scenarios<br></p><p class='description'>A scenario is a narrative that explores the future use of a product from a user’s point of view, helping design teams reason about its place in a person’s day-to-day life.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Writing successful scenarios asks that we tap into our capacity for human empathy and to write stories about a superior, future state that ultimately delights people. Scenarios are a widely used strategic planning tool,2 and are a powerful method to align teams to a shared product vision and goal—whether it is a few months, or a few years, away.</p><p class='supportingPhoto'><img src='images/scenarios.jpg'></p>");
	}
	



	d3.select("#experiencePrototyping").on("click",show_experiencePrototyping);	// .on("mouseleave",remove_experiencePrototyping);

	function show_experiencePrototyping(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Experience Prototyping<br></p><p class='description'>Experience prototyping facilitates active participation in design through subjective engagement with a prototype system or service, product, or place. Similar to role-playing, simulation exercises, and bodystorming, lowfidelity prototypes or props are used to help create a realistic scenario of use and activate the felt experiences of designers or users<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The method is advantageous for its low cost, and for when situations prevent real-life experiences because of inherent risks and dangers or complicating logistics.</p><p class='supportingPhoto'><img src='images/expproto.jpg'></p>");
	}
	



	d3.select("#personas").on("click",show_personas);	// .on("mouseleave",remove_personas);

	function show_personas(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Personas<br></p><p class='description'>Personas consolidate archetypal descriptions of user behavior patterns into representative profiles, to humanize design focus, test scenarios, and aid design communication.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once there is enough information collected to describe several users, behavior patterns and themes emerge. Affinity diagramming or similar methods can be employed. The similarities across users can then be clustered to begin forming synthesized, aggregate archetypes.</p><p class='supportingPhoto'><img src='images/personas.png'></p>");
	}
	



	d3.select("#statementStarters").on("click",show_statementStarters);	// .on("mouseleave",remove_statementStarters);

	function show_statementStarters(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Statement Starters<br></p><p class='description'>This is the approach to phrase problem statements that invites broad explorations. Set of problems or opportunities are identified and are stated in the form of a a short phrase. Starters like How might we?, In what ways might we? or How to? are added.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Critical thinkers are adept at thinking the best statement starter for each problem, as they uncover what the focus of the exploration must be. Consider adding starters to research insights. Statement starters help design teams jump start discussions with the right problem. Voting is done to choose the right problem statement.</p><p class='supportingPhoto'><img src='images/statementstarters.jpg'></p>");
	}
	



	d3.select("#conceptMapping").on("click",show_conceptMapping);	// .on("mouseleave",remove_conceptMapping);

	function show_conceptMapping(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Concept Mapping<br></p><p class='description'>A concept map is a sense-making tool that connects a large number of ideas, objects, and events as they relate to a certain domain.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It consists of individual concepts (a well-understood idea, object, or event; usually a noun or noun cluster) connected by linking words (usually a verb). This forms meaningful statements, which deepens understanding of the domain. Articulating correct focus question is a key step, example “How do people share pictures” will lead to a concept map of a list of options, while “How do people want to share pictures” will lead to a more exploratory range of opportunities.</p><p class='supportingPhoto'><img src='images/conceptmap.jpg'></p>");
	}
	



	d3.select("#difficultyMatrix").on("click",show_difficultyMatrix);	// .on("mouseleave",remove_difficultyMatrix);

	function show_difficultyMatrix(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Difficulty Matrix<br></p><p class='description'>The importance or difficulty matrix is a quad chart for plotting items by relative importance (low to high on x-axis) and difficulty (low to high on y-axis). These items can be set of findings, ideas or concepts that design teams want to prioritize. This helps to work out the tension between the two opposing forces while deciding what ideas to pursue.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low H, low D are ideas that are easiest to realize, low I, high D are costly endeavours with little return, high I, high D are strategic as they give big returns with big investments and high I, low D are high value as they yield high impact at a low price.</p><p class='supportingPhoto'><img src='images/difficulty.jpg'></p>");
	}
	



	d3.select("#kjtechnique").on("click",show_kjtechnique);	// .on("mouseleave",remove_kjtechnique);

	function show_kjtechnique(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>KJ Technique<br></p><p class='description'>When the traditional meeting format fails to achieve group consensus, the KJ Technique can be used to help teams work through a problem space and prioritize what should be focused on first.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Everyone in the group is provided with blank sticky notes and markers, and then asked to write as many problems, insights, data, or opinions as they can think of—in silence. So, everyone is provided with an equal opportunity to express his or her points of view. Group pressure or eloquently arguing opinions doesn't work. This helps team reach consensus by giving the bigger picture of what everyone feels.</p><p class='supportingPhoto'><img src='images/kj.jpg'></p>");
	}
	



	d3.select("#creativeMatrix").on("click",show_creativeMatrix);	// .on("mouseleave",remove_creativeMatrix);

	function show_creativeMatrix(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Creative Matrix<br></p><p class='description'>A brainstorming format that can spark new ideas at the intersection of categories. While blue sky freedom seems desirable, it is often within constraints that novel ideas emerge. When a problem is too broad, or you're having trouble breaking away from conventional thinking, structure might help.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In a creative matrix grid, each cell represents the intersection of two categories, colums relating to people example, market segments and rows relating to enabling solutions example, technologies or environments. Such mash-up of categories helps brainstorm.</p><p class='supportingPhoto'><img src='images/creativematrix.jpg'></p>");
	}
	



	d3.select("#parallelPrototyping").on("click",show_parallelPrototyping);	// .on("mouseleave",remove_parallelPrototyping);

	function show_parallelPrototyping(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Parallel Prototyping<br></p><p class='description'>Designers quickly and independently create a range of low-fidelity prototypes, and then submit designs to testing by end users, or to heuristic evaluation by experts.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The intention of these evaluations is not to pick the “best” or “most preferred” design, rather to see how people react to individual elements of the design or how intended goals of the project can be accomplished through design. The best qualities can then inform a superior, optimized design.</p><p class='supportingPhoto'><img src='images/parallel.jpg'></p>");
	}
	



	d3.select("#roundRobin").on("click",show_roundRobin);	// .on("mouseleave",remove_roundRobin);

	function show_roundRobin(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Round Robin<br></p><p class='description'>An activity in which ideas evolve as they are passed from person to person.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Make a worksheet folded into four parts. Form teams with 4-5 people. Hand out worksheets, each with a design challenge written on it. Ask each person to write down an unconventional solution and pass the worksheet to the left. Now eacj person writes why the solution will fail and pass it to the left. Now everyone writes a way to resolve the critique. Wild ideas must be encouraged here as other members help tone them down.</p><p class='supportingPhoto'><img src='images/roundrobin.jpg'></p>");
	}
	

	

	d3.select("#cardSorting").on("click",show_cardSorting);	// .on("mouseleave",remove_cardSorting);

	function show_cardSorting(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Card Sorting<br></p><p class='description'>Card sorting is a powerful and flexible method that can help you understand how people group information, identify how they perceive and describe different groups of information, and generate a number of possible ideas for primary, secondary, and tertiary navigation categories. This can be used when there is a need to structure your information, as it can identify different schemas for organizing navigation and menus. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Participants typically sort 30 to 100 cards, with about 30 minutes for each multiple of 50 cards. Giving them blank cards to add their own items can lead to interesting insights.</p><p class='supportingPhoto'><img src='images/cardsort.jpg'></p>");
	}
	

	

	d3.select("#speedDating").on("click",show_speedDating);	// .on("mouseleave",remove_speedDating);

	function show_speedDating(d){
		$("#notice2").remove();
		$(".designDescription .methodTitle").remove();
		$(".designDescription .description").remove();
		$(".designDescription .supportingPhoto").remove();
		$(".designDescription").append("<p class='methodTitle'><br>Speed Dating<br></p><p class='description'>Inspired by the framework of its dating-scene namesake, here instead of people, researchers rapidly “speed date” design opportunities with potential users. The power of speed dating lies in exposing people to future design ideas via storyboards and simulated environments before any expensive technical prototypes are built.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is especially useful when exploring environments and social contexts that are not readily available.</p><p class='supportingPhoto'><img src='images/speeddating.jpg'></p>");
	}
	

	
	
	














