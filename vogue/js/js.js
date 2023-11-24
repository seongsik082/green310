//제이쿼리설정

$(function(){
    // fa-bars를 클릭했을때, nav에 on이라는 클래스를 더하고
    // section에 on이라는 클래스를 더한다.
    
    $('.fa-bars').click(function(){
        var i = 0;
        if(i==0){
        $('nav').addClass('on');
        $('section').addClass('on');
            i++;
        }

        else if(i==1){
            i--;
            $('nav').removeClass('on');
            $('section').removeClass('on');
            }
        
        $(this).fadeOut('slow');
    });


//nav li를 클릭했을때, 순서를 찾아서 변수로 바꾸어라.
//section>div의 순번에 맞게 클래스 on 값을 더해라.


$('nav li').click(function(){
    $('nav li').removeClass('on');
    var ai = $(this).index();
    $('nav').removeClass('on')
    $('section').removeClass('on')

    $('section>div').removeClass('on');
    $('section>div').eq(ai).addClass('on');

    $('nav li').eq(ai).addClass('on');

    
    $('.fa-bars').fadeIn('fast')

})

})