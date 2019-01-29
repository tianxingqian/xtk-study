window.onload = function () {

    // 创建并初始化3D 渲染器
    var r = new X.renderer3D();
    r.init();

    r.camera.position = [0, 0, 150];

    var fibers = new X.fibers();
    fibers.file = 'cctracks.trk';

    fibers.caption = 'The Corpus Callosum:<br>connecting the two hemispheres<br>of the human brain.';

    r.add(fibers)

    r.render();

}