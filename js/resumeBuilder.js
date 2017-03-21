


var work = {
	"jobs": [{
		"employer": "Shanghai Irisian Technology Co. , Ltd",
		"title": "Intern",
		"location": "Shanghai",
		"dates": "Sep. 2014 - Dec. 2014",
		"description": "<li>Object Detection in images. E.g., Bridge detection in remote-sensing images using MATLAB</li>"
	}, {
		"employer": "Shanghai University of Electric Power",
		"title": "lab assistant",
		"location": "Shanghai",
		"dates": "Aug. 2011 - Dec. 2011",
		"description": "<li>Help repair computers in all of the labs</li>"
	}]
};

var projects = {
	"projects": [{
		"title": "A Movie Recommendation System based on Collaborative Filtering",
		"dates": "Oct. 2015- Dec. 2015",
		"description": "<li>Collected datasets from MovieLens and used PCA to reduce dimensions</li>\
						<li>Applied both k-means and GMM to cluster the movies and compared the results</li>\
						<li>Adopted Pearson Correlation Similarity Measure to decide similar users and got the rating predictions</li>\
						<li>Achieved a mean squared error score of 0.966</li>",
		"images": []
	}, {
		"title": "A fully functional blog - a website that allows any page to be edited",
		"dates": "Nov.2015- Jan. 2016",
		"description": "<li>Used Google App Engine to handle forms and input</li>\
						<li>Implemented a login system for the blog</li>\
						<li>Google App Engine Datastore was introduced to store info such as user posts and accounts</li>\
						<li>Generated data in the format JSON that other computers can access through an API</li>\
						<li>Implemented caching to help reduce database load</li>",
		"images": []
	},{
		"title": "Motion Planning for Computer Games",
		"dates": "Sep.2015 - Nov. 2015",
		"description": "<li>Used DFS to create a maze as a simulation environment the agent did not know anything about</li>\
						<li>Adopted A* algorithm to find the current best path and made the agent move towards the path</li>\
						<li>Repeatedly applied A* to find a new path when detecting obstacles in the way until the agent reached the goal</li>",
		"images": []
	},{
		"title": "Grand Slam Predictor",
		"dates": "Apr.2015 - May. 2015",
		"description": "<li>A Bagging scheme which used Logistic Regressions was applied to train the model using Historical data</li>\
						<li>Used Naive Bayes as well as Decision Trees to compare the outcome with the bagging scheme</li>\
						<li>Adopted a tournament tree and predicted the outcome at every node</li>",
		"images": []
}]};

var bio = {
	"name": "YgL",
	"role": "student",
	"welcomeMessage": "hello, world!",
	"contacts": {
		"mobil": "123",
		"email": "123@123.com",
		"location": ["Shijiazhuang", "North Carolina", "Beijing", "New York"]
	},
	"skills": ["Web Development", "Algorithm", "big data", "games", "image processing", "teaching"]
};


var education = {
	"schools": [{
		"name": "Rutgers University",
		"location": "New Jersy",
		"degree":"Master of Science",
		"major": "Computer Science",
		"dates":"Jan. 2015 – current",
		"url":"http://www.rutgers.edu",
		"online courses":[{"title":"mcu", "school":"shanghai school", "dates":"200608", "url":"123.com"}, {"title":"mcu2", "school":"mcu2 school", "dates":"2012", "url":"456.com"}]
	}, {
		"name": "Shanghai University of Electric Power, Shanghai",
		"location": "Shanghai",
		"degree":"Bachelor of Science",
		"major": "Electrical & Info Eng.",
		"dates":"Sep. 2009 – May. 2013",
		"url":"http://www.shiep.edu.cn",
		"online courses":[{"title":"rice", "school":"rice school", "dates":"2012", "url":"456.com"}, {"title":"rice2", "school":"rice2 school", "dates":"2012", "url":"456.com"}]
	}]

}


$("#header").prepend(HTMLheaderRole.replace("%data%", "Programmer")); 
$("#header").prepend(HTMLheaderName.replace("%data%", "Yaguang Liu"));
$("#topContacts").append(HTMLmobile.replace("%data%", "7325192876"));
$("#topContacts").append(HTMLemail.replace("%data%", "yl901@Rutgers.edu")); 
$("#topContacts").append(HTMLlocation.replace("%data%", "New Jersy"));
$("#topContacts").append(HTMLgithub.replace("%data%", "http://finalproject-1182.appspot.com/blog"));
$("#header").append(HTMLbioPic.replace("%data%", "images/zf.png"));




function displayWork(){
	if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer+formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription );
}

//$("#main").append(internationalizeButton);

}

function inName(names){
	var idx = names.indexOf(" ");
	var first = names.slice(0, idx+1);
	var last = names.slice(idx+1).toUpperCase();
	return  first + last;
}

projects.display = function(){
	$("#projects").append(HTMLprojectStart);
	for(project in projects.projects){
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
		
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		//var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
		//$(".project-entry:last").append(formattedImage);
		if(projects.projects[project].images.length > 0){
			for(img in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
				
		}
		
	}
}
education.display = function(){
	
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName+formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		//var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
		//$(".project-entry:last").append(formattedImage);
		
		
	}
}
projects.display();
education.display();
displayWork();
$('#mapDiv').append(googleMap);