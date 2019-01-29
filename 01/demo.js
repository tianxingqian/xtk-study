window.onload = function () {

    // 创建并初始化3D 渲染器
    var r = new X.renderer3D();
    r.init();

    //创建立方体
    cube = new X.cube();

    //cube.lengthX = cube.lengY = cube.lengZ = 20;
    // cube.texture.file =  'http://x.babymri.org/?xtk.png'
    cube.texture.file =  'http://www.allcure.cn/static/img/pic_1.3e72443.jpg'

    r.add(cube);
    r.render();
    
    r.onRender = function () {
        cube.transform.rotateX(1);
        cube.transform.rotateY(1);
    }
    
}