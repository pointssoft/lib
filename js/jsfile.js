// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.bannar-left' );
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight /2;
//     if(contentPosition < screenPosition){
//         content.classList.add('bannar_left_active');
//     }else{
//         content.classList.remove('bannar_left_active')
//     }
// });
// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.bannar-image' );
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight /2;
//     if(contentPosition < screenPosition){
//         content.classList.add('active');
//     }else{
//         content.classList.remove('active')
//     }
// });
// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.aword_image' );
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight /1;
//     if(contentPosition < screenPosition){
//         content.classList.add('active');
//     }else{
//         content.classList.remove('active')
//     }
// });
// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.best_bannar' );
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight /1;
//     if(contentPosition < screenPosition){
//         content.classList.add('active');
//     }
// });
// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.bannar_tag' );
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight /1;
//     if(contentPosition < screenPosition){
//         content.classList.add('active');
//     }
// });
// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.bannar_wellcome' );
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight /1;
//     if(contentPosition < screenPosition){
//         content.classList.add('display');
//     }
// });
// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.image_section' );
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight /1;
//     if(contentPosition < screenPosition){
//         content.classList.add('image_section_active');
//     }
// });

$(document).ready(function() {
    $("#playbutton").click(function(){
        $("#playbuttonOne").addClass('active')
    });
    
    $('#all_page').click(function(){
        $('#all_page').addClass('active');
        $('#website').removeClass('active');
        $('#app_dave').removeClass('active');
        $('#digital_merket').removeClass('active');
        $('#Website').removeClass('active');
        $('#App_dave').removeClass('active');
        $('#Digital_merket').removeClass('active');
    })
    $('#website').click(function(){
        $('#website').addClass('active');
        $('#App_dave').addClass('active');
        $('#Digital_merket').addClass('active');
        $('#all_page').removeClass('active');
        $('#app_dave').removeClass('active');
        $('#digital_merket').removeClass('active');
        $('#Website').removeClass('active');
    })
    $('#app_dave').click(function(){
        $('#app_dave').addClass('active');
        $('#Website').addClass('active');
        $('#Digital_merket').addClass('active');
        $('#website').removeClass('active');
        $('#all_page').removeClass('active');
        $('#digital_merket').removeClass('active');
        $('#App_dave').removeClass('active');
    })
    $('#digital_merket').click(function(){
        $('#digital_merket').addClass('active');
        $('#Website').addClass('active');
        $('#App_dave').addClass('active');
        $('#all_page').removeClass('active');
        $('#app_dave').removeClass('active');
        $('#website').removeClass('active');
        $('#Digital_merket').removeClass('active');
    })
    
})
