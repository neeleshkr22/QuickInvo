import BasicDetails from "./basic-details";
import Items from "./items";
import ContactDetails from  "./contact-details";
import TaxAndTotals from "./tax-and-totals";

export default function InvoiceForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Invoice</h2>
      <BasicDetails />
      <ContactDetails />
      <Items />
      <TaxAndTotals />
    </div>
  );
}