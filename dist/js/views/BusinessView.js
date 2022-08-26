import { View } from "./View.js";
export class BusinessView extends View {
    template(listBusiness) {
        return `
    <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th>DATE</th>
        <th>AMOUNT</th>
        <th>PRICE</th>
      </tr>
    </thead>
    <tbody>
      ${listBusiness.list().map(business => {
            return `
          <tr>
            <td>${this.dateFormat(business.date)}</td>
            <td>${business.amount}</td>
            <td>${business.price}</td>
          </tr>
        `;
        }).join('')}
    </tbody>
  </table>
    `;
    }
    dateFormat(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
