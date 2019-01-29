window.onload = function () {


    var r0 = new X.renderer3D();
    r0.container = 'r0';
    r0.init();
    // r0.camera.position = [0, 0, 0];
    // r0.camera.up = [0, 1, 0]
    
    // 创建并初始化3D 渲染器
    var r1 = new X.renderer3D();
    r1.container = 'r1';
    r1.init();
    r1.camera.position = [0, 0, -100];
    r1.camera.up = [0, 1, 0]


    var r2 = new X.renderer3D();
    r2.container = 'r2';
    r2.init();
    r2.camera.position = [100, 0, 0];
    r2.camera.up = [0, 1, 0]

    var r3 = new X.renderer3D();
    r3.container = 'r3';
    r3.init();
    r3.camera.position = [0, 100, 0];
    r3.camera.up = [0, 1, 0]

    var mesh = new X.mesh();
    mesh.file = 'avf.vtk';

    r1.add(mesh);
    r1.onShowtime = function() {
        r2.add(mesh)
        r3.add(mesh)

        r0.add(mesh)

        r2.render()
        r3.render()
        r0.render()
    }

    r1.render();

}