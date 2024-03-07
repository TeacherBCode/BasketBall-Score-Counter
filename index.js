let homeScore = 0;
let guestScore = 0;

let scoreLeader = ["🏀Home Leads✅", "☑️Guest Leads🏀","🏀Teams Draw🏀"]


//Home Score
$("#one_home").on("click", function () {
    homeScore++;
    $("#Score_home").text(homeScore);
    scoreHighlight();
});
$("#two_home").on("click", function () {
    homeScore += 2;
    $("#Score_home").text(homeScore);
    scoreHighlight();
});
$("#three_home").on("click", function () {
    homeScore += 3;
    $("#Score_home").text(homeScore);
    scoreHighlight();
});


//Guest Score
$("#one_guest").on("click", function () {
    guestScore++;
    $("#Score_guest").text(guestScore);
    scoreHighlight();
});
$("#two_guest").on("click", function () {
    guestScore += 2;
    $("#Score_guest").text(guestScore);
    scoreHighlight();
});
$("#three_guest").on("click", function () {
    guestScore += 3;
    $("#Score_guest").text(guestScore);
    scoreHighlight();
});

//restart Game
$("#restart").on("click",function(){
    homeScore = 0;
    guestScore = 0;
    $("#titleLead").text("BasketBall Score-Card: Start the Game🏀");
});

function scoreHighlight(){
    if (homeScore == guestScore) {
        $("#titleLead").text(scoreLeader[2]);
        $("#titleLead").removeClass("homeFont guestFont")
        $("#Score_home").addClass("highlight ");
        $("#Score_guest").addClass("highlight ");
    } else if (homeScore > guestScore) {
        $("#titleLead").text(scoreLeader[0]);
        $("#titleLead").addClass("homeFont");
        $("#titleLead").removeClass("guestFont");
        $("#Score_home").addClass("highlight ");
        $("#Score_guest").removeClass("highlight ");
    } else {
        $("#titleLead").text(scoreLeader[1]);
        $("#titleLead").addClass("guestFont");
        $("#titleLead").removeClass("homeFont");
        $("#Score_home").removeClass("highlight ");
        $("#Score_guest").addClass("highlight ");
    }
}
