var le Menu = $('#menu');
var leButton = $('#unfold')

leBouton.click(function(evt)    
            {
    leMenu.toggleClass('open');
    evt.preventDefault();
});