import { Business } from "./Business.js";

export class ListBusiness {
  private listBusiness: Array<Business> = []

  public add(business: Business): void{
    this.listBusiness.push(business)
  }

  public list(): ReadonlyArray<Business>{
    return this.listBusiness
  }
}