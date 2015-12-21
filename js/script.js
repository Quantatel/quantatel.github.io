$(document).ready(function(){
		//twitter
		$("#twitter").getTwitter({
			userName: "lorem_ipsum_dol",
			numTweets: 1,
			loaderText: "Loading tweets...",
			slideIn: true,
			slideDuration: 750,
			showHeading: true,
			headingText: "Latest Tweets",
			showProfileLink: true,
			showTimestamp: true
		});
		//carousel
		$(".carousel").jCarouselLite({
			  btnNext: ".next",
			  btnPrev: ".prev"
		 });
	});