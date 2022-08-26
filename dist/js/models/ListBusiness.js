export class ListBusiness {
    constructor() {
        this.listBusiness = [];
    }
    add(business) {
        this.listBusiness.push(business);
    }
    list() {
        return this.listBusiness;
    }
}
