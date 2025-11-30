import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import InvoiceItem from "./invoice-item";
import { useInvoice } from "@/context/invoice-context";

export default function ItemsList() {
  const { invoice, addItem, removeItem, updateItem } = useInvoice();

  return (
    <div className="bg-neutral-900 text-white p-3 sm:p-6 rounded-lg shadow-md mb-6 border border-neutral-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Invoice Items</h2>
        <Button onClick={addItem} className="bg-neutral-800 text-white border border-neutral-700">
          + Add Item
        </Button>
      </div>
      {invoice.items.map((item, idx) => (
        <InvoiceItem
          key={item.id}
          item={item}
          index={idx}
          canRemove={invoice.items.length > 1}
        />
      ))}
    </div>
  );
}