import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import type { InvoiceItem as InvoiceItemType } from "../types/invoice";
import { useInvoice } from "@/context/invoice-context";

interface InvoiceItemProps {
  item: InvoiceItemType;
  index: number;
  canRemove: boolean;
}

export default function InvoiceItem({
  item,
  index,
  canRemove,
}: InvoiceItemProps) {
  const { removeItem, updateItem } = useInvoice();

  const handleQuantityChange = (value: string) => {
    // Allow empty string temporarily, but convert to number for calculations
    if (value === "") {
      updateItem(index, "quantity", "");
    } else {
      const numValue = Number.parseInt(value);
      if (!isNaN(numValue) && numValue >= 0) {
        updateItem(index, "quantity", numValue);
      }
    }
  };

  const handleQuantityBlur = () => {
    // If empty on blur, set to 1
    if (item.quantity === "" || item.quantity === 0) {
      updateItem(index, "quantity", 1);
    }
  };

  const handleRateChange = (value: string) => {
    // Allow empty string temporarily, but convert to number for calculations
    if (value === "") {
      updateItem(index, "rate", "");
    } else {
      const numValue = Number.parseFloat(value);
      if (!isNaN(numValue) && numValue >= 0) {
        updateItem(index, "rate", numValue);
      }
    }
  };

  const handleRateBlur = () => {
    // If empty on blur, set to 0
    if (item.rate === "") {
      updateItem(index, "rate", 0);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-3 sm:p-4 border rounded-lg bg-neutral-900 text-white border-neutral-800">
      <div className="sm:col-span-5 col-span-1">
        <Label className="mb-2 block">Description</Label>
        <Input
          placeholder="Item description"
          value={item.description}
          onChange={(e) => updateItem(index, "description", e.target.value)}
          className="bg-neutral-800 text-white border border-neutral-700 mb-2"
        />
      </div>
      <div className="sm:col-span-2 col-span-1">
        <Label className="mb-2 block">Quantity</Label>
        <Input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
          onBlur={handleQuantityBlur}
          className="bg-neutral-800 text-white border border-neutral-700 mb-2"
        />
      </div>
      <div className="sm:col-span-2 col-span-1">
        <Label className="mb-2 block">Rate ($)</Label>
        <Input
          type="number"
          min="0"
          step="0.01"
          value={item.rate}
          onChange={(e) => handleRateChange(e.target.value)}
          onBlur={handleRateBlur}
          className="bg-neutral-800 text-white border border-neutral-700 mb-2"
        />
      </div>
      <div className="sm:col-span-2 col-span-1">
        <Label className="mb-2 block">Amount</Label>
        <div className="h-10 px-3 py-2 bg-neutral-800 text-white border border-neutral-700 rounded-md flex items-center mb-2">
          ${typeof item.amount === "number" ? item.amount.toFixed(2) : "0.00"}
        </div>
      </div>
      <div className="sm:col-span-1 col-span-1 flex items-center justify-center mt-2 sm:mt-0">
        <Button
          variant="outline"
          size="icon"
          onClick={() => removeItem(index)}
          disabled={!canRemove}
          className="border-neutral-700 bg-red-600 hover:bg-red-700 text-white"
        >
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}