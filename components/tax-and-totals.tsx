import { useInvoice } from "@/context/invoice-context";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function TaxAndTotals() {
  const { invoice, updateInvoice } = useInvoice();
  return (
    <div className="bg-neutral-900 text-white p-3 sm:p-6 rounded-lg shadow-md mb-6 border border-neutral-800">
      <h2 className="text-xl font-semibold mb-4">Tax & Totals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
        <div>
          <Label htmlFor="taxRate">Tax Rate (%)</Label>
          <Input
            id="taxRate"
            type="number"
            value={invoice.taxRate}
            onChange={e => updateInvoice({ taxRate: Number(e.target.value) })}
            className="bg-neutral-800 text-white border border-neutral-700"
          />
        </div>
        <div className="flex flex-col items-end">
          <div className="mb-2">Subtotal: <span className="font-semibold">${invoice.subtotal.toFixed(2)}</span></div>
          <div className="mb-2">Tax ({invoice.taxRate}%): <span className="font-semibold">${invoice.taxAmount.toFixed(2)}</span></div>
          <div className="text-2xl font-bold">Total: <span className="text-green-400">${invoice.total.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
}
// ...existing code...