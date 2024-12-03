$().ready(function() {
    $("#commentForm").validate({
        rules:{
            name:{
                required:true,
                minlength:2
            },
            email:{
                required:true,
                email:true
            },
            url: {
                required:true,
                url:true
            },
            comment:"required"

        },
        messages:{
            name: {
                required: "<br> Proszę podaj swoje imię ",
                minlength:"<br>Podaj co najmniej 2 litery"

            },
            email: {
                required: "<br>Podaj proszę email",
                email:" Nieprawidłowy adres email"
            },
            url:{ 
                required:"<br>Podaj adres strony",
                url:"<br>Nieprawidłowy URL"
            },
            comment: "<br>Napisz swój komentarz"

        }
    })
});