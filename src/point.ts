class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  getX(): number {
    return this.x
  }
  setX(x: number): void {
    this.x = x
  }

  getY(): number {
    return this.y
  }
  setY(y: number): void {
    this.y = y
  }

  toString(): void {
    console.log("(" + this.x + ", " + this.y + ")")
  }
}

var point: Point = new Point(1,2);
point.toString();
