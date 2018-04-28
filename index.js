$('body').css('background-color','peru')

setTimeout(function(){
    $('body').css('background-color','white')
},2000)


$.ajax({
  url: 'https://restcountries.eu/rest/v2/name/united',
  method: 'GET',
  success: function (response){
    console.log(response)
  },
});