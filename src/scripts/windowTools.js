export default {

    mouseCanvas: function( DOMLocation, event, frame ) {
        return {
            x: event.clientX - DOMLocation.left + frame.x,
            y: event.clientY - DOMLocation.top + frame.y
        }
    },

    absoluteLocation: function( element ) {
        var y = 0, x = 0;
        do {
            y += element.offsetTop  || 0;
            x += element.offsetLeft || 0;
            element = element.offsetParent;
        } while(element);
    
        return {
            x: x,
            y: y
        };
    },

    random: function( li, ls ){
    
        li = li || 0;
        return Math.floor( Math.random() * ls) + li;
    
    }

}