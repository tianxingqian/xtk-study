window.onload = function () {

    var r = new X.renderer3D();
    r.init()

    var f = new X.fibers();
    f.file = 'streamline.trk'

    var lh = new X.mesh()
    lh.file = 'lh.smoothwm';
    lh.color = [0.7, 0.2, 0.2]
    lh.opacity = 0.6

    var rh = new X.mesh();
    rh.file = 'rh.smoothwm'
    rh.color = [0, 0.7, 0]
    rh.opacity = 0.6;

    r.add(f);
    r.add(lh)
    r.add(rh)

    r.onShowtime = function () {
        r.resetBoundingBox();
    }

    r.camera.position = [0, 0, 200];
    r.render()

    var gui = new dat.GUI()
    var trackgui = gui.addFolder('Fiber Tracks')
    trackVisibleController = trackgui.add(f, 'visible')
    trackgui.open()

    var lhgui = gui.addFolder('Left Hemisphere');
    lhgui.add(lh, 'visible')
    lhgui.add(lh, 'opacity', 0, 1)
    lhgui.addColor(lh, 'color')
    lhgui.open()

    var rhgui = gui.addFolder("Rigth Hemisphere");
    rhgui.add(rh, 'visible')
    rhgui.add(rh, 'opacity', 0, 1);
    rhgui.addColor(rh, 'color')
    rhgui.open();

}