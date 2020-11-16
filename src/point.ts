class Point {
  x: number
  y: number

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  getX():number {
    return this.x
  }
  setX(x):void {
    this.x = x
  }

  getY():number {
    return this.y
  }
  setY(y):void {
    this.y = y
  }

  toString():void {
    console.log("(" + this.x + ", " + this.y + ")")
  }
}

var point = new Point(1,2);
point.toString();
