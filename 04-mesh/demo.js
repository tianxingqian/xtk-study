window.onload = function () {

    // 创建并初始化3D 渲染器
    var r = new X.renderer3D();
    r.init();

    var porsche = new X.mesh();

    porsche.file = 'porsche.stl'
    porsche.magicmode = true;
    porsche.caption = 'The magic Porsche!'

    r.add(porsche);

    r.render();

    r.onRender = function () {
        r.camera.rotate([1, 0])
    }

}