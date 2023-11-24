$(function(){
    //섹션의 사이즈 변경(화면의 크기에 맞게)
    var h = $(window).height();
    $('section').height(h);

    $(window).resize(function(){
        var wh = $(this).height();
        $('section').height(wh);
    })
    //.gnb li를 클릭했을때 on값을 더해라 그리고 그만큼 화면을 이동해라.
    $('.gnb li').click(function(){
        var i = $(this).index()
        console.log(i)
        var wh = $('section').height();

        $('.gnb li').removeClass('on')
        $('.gnb li').eq(i).addClass('on')
        
        $('html,body').animate({'scrollTop': wh*i},1400,'easeOutBounce')
    })



    // 마우스를 스크롤했을때 위치 변경
    $('section').mousewheel(function(event,delta){
        event.preventDefault();

        if(delta>0){ 
            var prev = $(this).prev().offset().top    //나의 이전요소 위치값을 가져와 대입해라
            $('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce')
        }
        if(delta<0){ 
            var next = $(this).next().offset().top    //나의 이전요소 위치값을 가져와 대입해라
            $('html,body').stop().animate({'scrollTop': next},1400,'easeOutBounce')
        }

    })


    // 스크롤 했을때 텍스트 색깔 변경
    $(window).scroll(function(){
        



    })
    



})