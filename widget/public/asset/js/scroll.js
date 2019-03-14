const scroll = {
  startPos: {},
  endPos: {},
  handleEvent(event) {
    const self = this; // this指events对象
    if (event.type == 'touchstart') {
      self.start(event);
    } else if (event.type == 'touchmove') {
      self.move(event);
    } else if (event.type == 'touchend') {
      self.end(event);
    }
  },
  start() {
    const touch = event.targetTouches[0];
    startPos = { y: touch.pageY };
    this.slider.addEventListener('touchmove', this, false);
    this.slider.addEventListener('touchend', this, false);
  },
  move() {
    const touch = event.targetTouches[0];
    endPos = { y: touch.pageY - startPos.y };
  },
  end() {
    this.slider.removeEventListener('touchmove', this, false);
    this.slider.removeEventListener('touchend', this, false);
  }
};
