window.onload = function () {

    var _webGLFriendly = true;
    try{
        threeD = new X.renderer3D()
        threeD.container = '3d'
        threeD.init()
    } catch (e) {
        _webGLFriendly = false
    }

    var sliceX = new X.renderer2D()
    sliceX.container = 'sliceX'
    sliceX.orientation = 'X'
    sliceX.init()

    var sliceY = new X.renderer2D()
    sliceY.container = 'sliceY'
    sliceY.orientation = 'Y'
    sliceY.init()

    var sliceZ = new X.renderer2D()
    sliceZ.container = 'sliceZ'
    sliceZ.orientation = 'Z'
    sliceZ.init()

    var volume = new X.volume();
    volume.file = 'vol.nrrd'
    volume.labelmap.file='seg.nrrd'
    volume.labelmap.colortable.file = 'genericanatomy.txt'

    sliceX.add(volume)
    sliceX.render()
    sliceX.onShowtime = function(){
        sliceY.add(volume)
        sliceY.render()
        sliceZ.add(volume)
        sliceZ.render()
        if (_webGLFriendly) {
            threeD.add(volume)
            threeD.render()
        }

        var gui = new dat.GUI();

        // the following configures the gui for interacting with the X.volume
        var volumegui = gui.addFolder('Volume');
        // now we can configure controllers which..
        // .. switch between slicing and volume rendering
        var vrController = volumegui.add(volume, 'volumeRendering');
        // .. configure the volume rendering opacity
        var opacityController = volumegui.add(volume, 'opacity', 0, 1);
        // .. and the threshold in the min..max range
        var lowerThresholdController = volumegui.add(volume, 'lowerThreshold',
            volume.min, volume.max);
        var upperThresholdController = volumegui.add(volume, 'upperThreshold',
            volume.min, volume.max);
        var lowerWindowController = volumegui.add(volume, 'windowLow', volume.min,
            volume.max);
        var upperWindowController = volumegui.add(volume, 'windowHigh', volume.min,
            volume.max);
        // the indexX,Y,Z are the currently displayed slice indices in the range
        // 0..dimensions-1
        var sliceXController = volumegui.add(volume, 'indexX', 0,
            volume.range[0] - 1);
        var sliceYController = volumegui.add(volume, 'indexY', 0,
            volume.range[1] - 1);
        var sliceZController = volumegui.add(volume, 'indexZ', 0,
            volume.range[2] - 1);
        volumegui.open();
    }


};
