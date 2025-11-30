import React, { useRef } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useInvoice } from "@/context/invoice-context"

export default function BasicDetails() {
    const { invoice, updateInvoice } = useInvoice();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                updateInvoice({ logoUrl: ev.target?.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Card className="bg-neutral-900 text-white border border-neutral-800">
            <CardHeader>
                <CardTitle>Invoice Details</CardTitle>
            </CardHeader>
            <CardContent className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                    <Label htmlFor="invoiceNumber">Invoice Number</Label>
                    <Input
                        id="invoiceNumber"
                        placeholder="Enter invoice number"
                        value={invoice.invoiceNumber}
                        onChange={e => updateInvoice({ invoiceNumber: e.target.value })}
                    />
                </div>
                <div className='flex flex-col'>
                    <Label htmlFor="invoiceDate">Invoice Date</Label>
                    <Input
                        className='w-35'
                        id="invoiceDate"
                        type="date"
                        value={invoice.date}
                        onChange={e => updateInvoice({ date: e.target.value })}
                    />
                </div>
                {/* Logo Upload */}
                <div className="flex flex-col gap-2 mt-2">
                    <Label htmlFor="logoUpload">Logo</Label>
                    <Input
                        id="logoUpload"
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleLogoChange}
                    />
                    {invoice.logoUrl && (
                        <div className="mt-2">
                            <img
                                src={invoice.logoUrl}
                                alt="Logo Preview"
                                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded border"
                            />
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
