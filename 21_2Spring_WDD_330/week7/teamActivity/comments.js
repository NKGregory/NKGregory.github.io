function addComment(){
    var aNewComment = document.getElementById("new-comment-input").value;
    var hikeName = "hike";
    var aComment = {
        "name" : hikeName,
        "date" : new Date(),
        "content" : aNewComment
    }
    var allComment = null;
    var storedCommentString = localStorage["all_Comment"];
    if(storedCommentString == null){
        allComment = [];
    }else{
        allComment = JSON.parse(storedCommentString);
    }
    allComment.push(aComment);
    var allCommentString = JSON.stringify(allComment);
    localStorage["all_Comment"] = allCommentString;
    showAllComment();

    document.getElementById("new-comment-input").value = null;
}

function showAllComment(){
    var storedCommentString = localStorage["all_Comment"];
    if(storedCommentString != null){
        var allComment = JSON.parse(storedCommentString);
        var commentDisplayer = document.getElementById("all_comment_display");
        commentDisplayer.innerHTML = null;

        for (var i = 0; i < allComment.length; i++){
            var aComment = allComment[i];
            
            commentDisplayer.innerHTML += "<p>" + aComment["content"] + "</p>";
        }
    }
}