$(document).ready(function(e){
    $('#submit').click(function(e){
        $('.header').hide();
        $('.loader').show();
        $('small').empty().hide();
        $('.link-place').empty();
        $('.result').hide();
        var link = $('.form-use').val();
        if(link.length > 0) {
            $.ajax({
                type: "POST",
                url: 'http://localhost:8081/url/short/it',
                data: {
                    link : link
                },
                success: function(data){
                    console.log(data)
                    if(data.status == 400) {
                        $('small').show(); 
                        $('small').append( '* ' + data.message); 
                        $('.header').show();
                        $('.loader').hide();
                    }
                    if(data.status == 200) {
                        $('.result').show();
                        $('.link-place').append(data.data.hashLink);
                        $('.header').hide();
                        $('.loader').hide();
                    }
                    
                },
                dataType: 'json'
            });
            e.preventDefault();
        }
        else {
            $('small').show(); 
            $('small').append('plz enter something first!');
            $('.header').show();
            $('.loader').hide(); 
        }
    });

    $('#copy').click(function(e){
        var $temp = $("<input>");
        $("body").append($temp);
        $('.copy-info').show();
        $temp.val($('.link-place').text()).select();
        document.execCommand('copy');
        $temp.hide();
        setTimeout(function(){
            $('.copy-info').hide();
        },2000);
    })

})