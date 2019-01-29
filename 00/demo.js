window.onload = function () {

    var r = new X.renderer3D();
    r.init();

    cube = new X.cube();
    cube.lengthX = cube.lengY = cube.lengZ = 20;

    cube.center = [0,0,0];

    cube.color = [1,1,1]
    r.add(cube);
    r.render();
}