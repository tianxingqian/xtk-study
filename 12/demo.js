window.onload = function () {

    var r = new X.renderer3D();
    r.init();

    var mesh = new X.mesh();
    mesh.color = [0.5, 0.5, 0.5]
    mesh.file = 'lefthemisphere.smoothwm'
    mesh.scalars.file = 'lh.smoothwm.C.crv'
    mesh.scalars.minColor = [0,0,1]
    mesh.scalars.maxColor = [1,1,1]

    r.add(mesh)

    r.render()

    var gui = null;
    var curvatureTypes = ['C (mm&#x207b;&sup2;)', 'k&#x2081; (mm&#x207b;&sup1;)', 'H (mm&#x207b;&sup1;)']
    var curvatureFiles = ['lh.smoothwm.C.crv', 'lh.smoothwm.K1.crv', 'lh.smoothwm.H.crv'];

    var _loader = {
        Type : 'C (mm&#x207b;&sup2;)'
    }

    r.onShowtime = function() {
        if (gui) {
            gui.desdroy()
            gui = null
        }

        gui = new dat.GUI()
        var meshgui = gui.addFolder('Mesh')
        var meshColorController = meshgui.addColor(mesh, 'color');
        meshgui.open();

        var curvgui = gui.addFolder('Curvature');
        // a combobox for the different curvature types
        var typeController = curvgui.add(_loader, 'Type', curvatureTypes);
        // the min and max color which define the linear gradient mapping
        var minColorController = curvgui.addColor(mesh.scalars, 'minColor');
        var maxColorController = curvgui.addColor(mesh.scalars, 'maxColor');
        // controllers to threshold the scalars
        var minThresholdController = curvgui.add(mesh.scalars, 'lowerThreshold',
            mesh.scalars.min, mesh.scalars.max);
        var maxThresholdController = curvgui.add(mesh.scalars, 'upperThreshold',
            mesh.scalars.min, mesh.scalars.max);
        curvgui.open();

        typeController.onChange(function (val) {
            var oldMinColor = mesh.scalars.minColor;
            var oldMaxColor = mesh.scalars.maxColor;

            mesh.scalars.file = curvatureFiles[_index];
            mesh.modified()

            mesh.scalars.minColor = oldMinColor;
            mesh.scalars.maxColor = oldMaxColor;

        })

    }



};
