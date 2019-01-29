window.onload = function () {

    // 创建并初始化3D 渲染器
    var r = new X.renderer3D();
    r.init();

    var skull = new X.mesh();

    skull.file = 'skull.vtk'
    // skull.magicmode = true;
    skull.caption = 'The magic Porsche!'
    skull.opacity = 0.7
    r.add(skull);

    r.camera.position = [0, 400, 0];


    r.onRender = function () {
        // rotate the skull around the Z axis
        // since we moved the camera, it is Z not X
        skull.transform.rotateZ(1);

        // we could also rotate the camera instead which is better in case
        // we have a lot of objects and want to rotate them all:
        //
        // r.camera.rotate([1,0]);
    }

    r.render();

}