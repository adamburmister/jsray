/* Fake a Flog.* namespace */
if(typeof(Flog) == 'undefined') var Flog = {};
if(typeof(Flog.RayTracer) == 'undefined') Flog.RayTracer = {};
if(typeof(Flog.RayTracer.Shape) == 'undefined') Flog.RayTracer.Shape = {};

Flog.RayTracer.Shape.Cube = Class.create();

Flog.RayTracer.Shape.Cube.prototype = {
    initialize : function(pos, material, v1, v2) {
        this.position = pos;
        this.material = material;
        
        /* Haven't done it yet - feel free to */
    },
    
    intersect: function(ray){
        var info = new Flog.RayTracer.IntersectionInfo();
        info.shape = this;
        
        return info;
    },
        
    toString : function () {
        return 'Box [position=' + this.position + ']';  
    }
}