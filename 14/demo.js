window.onload = function () {

    var r = new X.renderer3D()
    r.init()
    obj = new X.object()
    obj.points = new X.triplets(648000)
    obj.normals = new X.triplets(648000)
    obj.colors = new X.triplets(648000)

    obj.type = 'POINTS'

    for (var x=0; x<60; x++) {
        for (var y=0; y<60; y++) {
            for (var z=0; z<60; z++) {
                obj.points.add(x,y,z)
                obj.normals.add(1,1,1)
                obj.colors.add(x,y,z)
            }
        }
    }

    r.add(obj)

    r.camera.position = [-400, -400, -500]

    r.render()

};
