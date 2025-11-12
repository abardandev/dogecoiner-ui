export class Transaction {
  constructor(
    public symbol: string,
    public transaction: string,
    public amount: number = 0,
    public price: number = 0,
    public date: string = null) { }
}
