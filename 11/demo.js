window.onload = function () {

    var r = new X.renderer3D();
    r.init();

    var volume = new X.volume()
    volume.file = 'vol.nrrd'
    volume.labelmap.file = 'seg.nrrg';
    volume.labelmap.colortable.file = 'genericanatomy.txt'

    r.add(volume);

    r.onShowtime = function () {
        var gui = new dat.GUI();
        // the following configures the gui for interacting with the X.volume
        var volumegui = gui.addFolder('Volume');
        // now we can configure controllers which..
        // .. switch between slicing and volume rendering
        var vrController = volumegui.add(volume, 'volumeRendering');
        // .. configure the volume rendering opacity
        var opacityController = volumegui.add(volume, 'opacity', 0, 1).listen();
        // .. and the threshold in the min..max range
        var lowerThresholdController = volumegui.add(volume, 'lowerThreshold',
            volume.min, volume.max);
        var upperThresholdController = volumegui.add(volume, 'upperThreshold',
            volume.min, volume.max);
        // the indexX,Y,Z are the currently displayed slice indices in the range
        // 0..dimensions-1
        var sliceXController = volumegui.add(volume, 'indexX', 0, volume.range[0] - 1);
        var sliceYController = volumegui.add(volume, 'indexY', 0, volume.range[1] - 1);
        var sliceZController = volumegui.add(volume, 'indexZ', 0, volume.range[2] - 1);
        volumegui.open();
        var labelmapgui = gui.addFolder('Label Map');
        var labelMapVisibleController = labelmapgui.add(volume.labelmap, 'visible');
        var labelMapOpacityController = labelmapgui.add(volume.labelmap, 'opacity',
            0, 1);
        labelmapgui.open();
    }

    r.camera.position = [120, 80, 160]
    r.render()

};
