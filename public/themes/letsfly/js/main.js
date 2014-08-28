$(function (){
    $('.popup').on( "click", function (event){
        var t=event.target||event.srcElement;
        if(t.className != "popup") return;
        hidePopup();
    });

    setTime();
    
    $('.timer').on('click',function (e){
        e.preventDefault();
    })

    $('.package').hover(function(){
        $(this).addClass('hover');
    },
    function(){
        $(this).removeClass('hover');
    }
    );

    $('.packages').hover(function(){
        $(this).children('.package').addClass('active');
    },
    function(){
        $(this).children('.package').removeClass('active');
    }
    );
});

/*form validation*/
var app = angular.module('plane',[]);

    app.controller('formController',function ($scope){
        $scope.user = {};
        $scope.invalidNumber="error";
        $scope.isPhoneInvalid = function(){
            return isNaN($.trim($scope.user.phone));
        }
        $scope.you = function(){
            alert('you');
        }
    });

/*timer setting*/
function setTime() {
    var date = new Date($("#date").text());
    var currentDate = new Date();
    var time = (date.getTime()-currentDate.getTime())/1000;
    if(time<85536000 && time > 0){
        $('.timer').each(function (index,elemet){
            $(elemet).FlipClock(time, {
                clockFace: 'DailyCounter',
                countdown: true
            });
        });
    }
    
}

/*showing and hiding popups*/
function showPopup (popup,check) {
    this.popup = popup || 0;
    this.check = check || 0;
    if (this.popup == 0){
        $('#popup').show();
    } else {
        // $('#popup1 .form-block').find('input[name="package"]').removeAttr('checked');
        $('#popup1 .form-block').find('input[name="package"]:nth-of-type(' + (this.check+1) +')').prop("checked", true);
        $('#popup1').show();
    }
    
}

function hidePopup () {
    $('.popup').hide();
}

