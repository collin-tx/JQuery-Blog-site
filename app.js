$('#flashMessage').hide();

$('#previewButton').click(function(){
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();
  
    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').text(content);
  
    $('#flashMessage')
    .fadeIn(1000)
    .delay(2500)
    .slideUp();
});
