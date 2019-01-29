window.onload = function () {

    // 创建并初始化3D 渲染器
    var r = new X.renderer3D();
    r.init();

    //创建CSG primitivers
    var cube = new X.cube();
    cube.color = [1, 0, 0];
    cube.caption = 'a cube';

    var sphere = new X.sphere();
    sphere.radius = 13;
    sphere.color = [0, 1, 0];
    sphere.caption = 'a sphere';

    var cylinder1 = new X.cylinder();
    cylinder1.start = [-10, 0, 0];
    cylinder1.end = [10, 0, 0];
    cylinder1.radius = 7;
    cylinder1.color = [0, 0, 1];
    cylinder1.caption = 'cylinder 1';

    var cylinder2 = new X.cylinder();
    cylinder2.start = [0, 10, 0];
    cylinder2.end = [0, -10, 0];
    cylinder2.radius = 7;
    cylinder2.color = [0, 0, 1];
    cylinder2.caption = 'cylinder 2';

    var cylinder3 = new X.cylinder();
    cylinder3.start = [0, 0, -10];
    cylinder3.end = [0, 0, 10];
    cylinder3.radius = 7;
    cylinder3.color = [0, 0, 1];
    cylinder3.caption = 'cylinder 3';

    // move some stuff around to display it all
    // we want the original shapes to be in one row
    cube.transform.translateX(-30);
    cylinder1.transform.translateX(30)
    cylinder2.transform.translateX(30)
    cylinder3.transform.translateX(30)

    r.add(cube)
    r.add(sphere);
    r.add(cylinder1)
    r.add(cylinder2)
    r.add(cylinder3)

    var funstuff = sphere.intersect(cube).subtract(cylinder1).subtract(cylinder2).subtract(cylinder3);

    // var funstuff = cube.intersect(sphere).subtract(cylinder1.union(cylinder2).union(cylinder3));
    funstuff.caption = 'the three from above bool ed together';
    funstuff.transform.translateZ(-30)
    r.add(funstuff);

    r.render();

}