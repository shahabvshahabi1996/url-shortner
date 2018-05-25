$(document).ready(function(e){
    $('#submit').click(function(e){
        $('.header').hide();
        $('.loader').show();
        $('small').empty().hide();
        $('.link-place').empty();
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
                    }
                    if(data.status == 200) {
                        $('.link-place').append(data.data.hashLink);
                    }
                    $('.header').show();
                    $('.loader').hide();
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
        
       
    })
})