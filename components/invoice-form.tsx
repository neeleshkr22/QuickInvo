import BasicDetails from "./basic-details";
import Items from "./items";
import ContactDetails from  "./contact-details";
import TaxAndTotals from "./tax-and-totals";

export default function InvoiceForm() {
  return (
    <div className="bg-neutral-900 text-white p-3 sm:p-6 rounded-lg shadow-md border border-neutral-800">
      <h2 className="text-xl font-semibold mb-4">Create Invoice</h2>
      <BasicDetails />
      <ContactDetails />
      <Items />
      <TaxAndTotals />
    </div>
  );
}