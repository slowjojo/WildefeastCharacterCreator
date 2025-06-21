export class Character {
  public id: string;
  public createdAt: number;

  constructor(
    public name: string = "",
    public tool: string = "",
    public specialty: string = ""
  ) {
    this.id = `char-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    this.createdAt = Date.now();
  }
}
