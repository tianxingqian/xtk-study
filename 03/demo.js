window.onload = function () {

    // 创建并初始化3D 渲染器
    var r = new X.renderer3D();
    r.init();

    for (var z=0; z < 20; z++) {
        for (var x=0; x<50; x++) {
            for (var y=0; y<5; y++) {
                var c = new X.cube();
                c.center = [x*3, y * 3, z * 3];
                c.lengthX = c.lengthY = c.lengthZ = 2;
                c.color = [150 % x, 1, 150 % z];
                r.add(c)
            }

        }
    }
    r.render();

    r.onRender = function () {
        r.camera.rotate([1, 0])
    }

}