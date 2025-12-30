// used to store running portfolio totals
export class PortfolioItem {
  constructor(
    public amount: number = 0,
    public price: number = 0,
    public paid: number = 0,
    public value: number = 0,
    public time: string = null) { }
}
