export class Planet {

  constructor(
    private readonly size: number
  ) {}

  public getSize(): number {
    return this.size;
  }
}
