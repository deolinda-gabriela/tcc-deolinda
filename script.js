AFRAME.registerComponent('controlador1',{
    init: function() {
      this.toggle = false;
      this.vid = document.querySelector("#vid-desmascarando");
      this.vid.pause();
    },
    tick: function() {
      if (this.el.object3D.visible == true) {
        if(!this.toggle) {
          this.toggle =true;
          this.vid.play();
        }
      } else {
        this.toggle = false;
        this.vid.pause();
      }
    }
});

AFRAME.registerComponent('controlador2',{
    init: function() {
      this.toggle = false;
      this.vid = document.querySelector("#vid-greenwashing");
      this.vid.pause();
    },
    tick: function() {
      if (this.el.object3D.visible == true) {
        if(!this.toggle) {
          this.toggle =true;
          this.vid.play();
        }
      } else {
        this.toggle = false;
        this.vid.pause();
      }
    }
});

AFRAME.registerComponent('controlador3',{
    init: function() {
      this.toggle = false;
      this.vid = document.querySelector("#ad");
      this.vid.pause();
    },
    tick: function() {
      if (this.el.object3D.visible == true) {
        if(!this.toggle) {
          this.toggle =true;
          this.vid.play();
        }
      } else {
        this.toggle = false;
        this.vid.pause();
      }
    }
});