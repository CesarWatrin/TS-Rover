export class Planet {
  private size: number;

  constructor(size: number = 10) {
    this.size = size;
  }

  setSize(size: number): void {
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }
}
