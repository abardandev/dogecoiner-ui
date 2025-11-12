import { ChartItem } from "./ChartItem";
import { PortfolioItem } from "./PortfolioItem";
import { Transaction } from "./Transaction";

export class PortfolioData {
  data:PortfolioItem[] = [];

  constructor(
    transactions: Transaction[],
    lineData: ChartItem[]) {

    let portfolio = this.buildPortfolio(transactions);

    // merge the portfolio data with kline data
    let last = portfolio[0];
    let subSet = lineData.filter(o => o.time >= last.time);

    let next = null;
    for (let pIdx = 0; pIdx < portfolio.length; pIdx++) {

      // push portfolio items to final data set
      const item = portfolio[pIdx];
      this.data.push({
        amount: item.amount,
        price: item.price,
        value: item.value,
        time: item.time
      });

      // set the next portfolio item if it exists 
      // so we can find data between transactions dates
      const nextPIdx = pIdx + 1;
      next = (nextPIdx < portfolio.length) ? portfolio[nextPIdx] : null;

      // get all history prices between the current and next transaction
      const sub = subSet.filter(o => o.time >= item.time
        && (next == null
          || (next != null
            && o.time <= next.time)));

      // push historical data as portfolio data
      for (let sIdx = 0; sIdx < sub.length; sIdx++) {
        const hItem = sub[sIdx];
        this.data.push({
          amount: item.amount,
          price: hItem.value,
          value: item.amount * hItem.value,
          time: hItem.time
        });
      }
    }
  }

  /* converts transactions to running tallies as portfolio data points */
  buildPortfolio(transactions: Transaction[]): PortfolioItem[] {
    let portfolio: PortfolioItem[] = [];
    let last = new PortfolioItem();

    for (let i in transactions) {
      let item = transactions[i];
      portfolio.push({
        amount: last.amount + item.amount,
        price: item.price,
        value: last.value + (item.amount * item.price),
        time: item.date
      });

      last = portfolio[i];
    }

    return portfolio;
  }
}
