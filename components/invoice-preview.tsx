// "use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useInvoice } from "@/context/invoice-context";
import { formatDate } from "@/utils/formatters";
import { generatePDF } from "@/utils/pdf-generator";
// import { useState } from "react";

interface InvoicePreviewProps {
  onBack: () => void;
}

export default function InvoicePreview({ onBack }: InvoicePreviewProps) {
  const { invoice } = useInvoice();
  // const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleDownloadPDF = () => {
    generatePDF(invoice);
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-2 sm:p-4 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold font-mono">Invoice Preview</h1>
          <div className="space-x-2">
            <Button variant="outline" onClick={onBack}>
              Back to Edit
            </Button>
            <Button onClick={handleDownloadPDF}>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* {pdfUrl && (
          <div className="mt-4 border rounded-lg overflow-hidden">
            <iframe src={pdfUrl} width="100%" height="600px" />
          </div>
        )} */}

        <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-blue-950 to-neutral-800 shadow-lg text-white p-4 sm:p-10">
            {/* Logo Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-blue-400">
                  {invoice.logoUrl ? (
                    <img
                      src={invoice.logoUrl}
                      alt="Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-blue-400 font-bold text-xl">LOGO</span>
                  )}
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold tracking-tight text-blue-700 mb-1">INVOICE</h2>
                  <p className="text-gray-500 text-lg font-mono">#{invoice.invoiceNumber}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-md text-gray-600 font-semibold">
                  Date: {formatDate(invoice.date)}
                </p>
              </div>
            </div>

            {/* Freelancer Details */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">From (Freelancer):</h3>
                <p className="font-bold text-lg">{invoice.fromName}</p>
                <p className="text-gray-600">{invoice.fromEmail}</p>
                {/* Freelancer extra info placeholder */}
                <div className="mt-2 text-sm text-gray-500">
                  {/* TODO: Add bank info, payment terms, etc. from invoice context */}
                  <p>Bank: {invoice.bankName || "Your Bank"}</p>
                  <p>Account: {invoice.bankAccount || "XXXX-XXXX"}</p>
                  <p>Payment Terms: {invoice.paymentTerms || "Net 15"}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">To (Client):</h3>
                <p className="font-bold text-lg">{invoice.toName}</p>
                <p className="text-gray-600">{invoice.toEmail}</p>
              </div>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto rounded-lg shadow mb-8">
              <table className="w-full text-sm sm:text-md min-w-[500px]">
                <thead>
                  <tr className="bg-blue-100 text-blue-700">
                    <th className="text-left py-3 px-2">Description</th>
                    <th className="text-center py-3 px-2">Qty</th>
                    <th className="text-right py-3 px-2">Rate</th>
                    <th className="text-right py-3 px-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-blue-50">
                      <td className="py-2 px-2">{item.description}</td>
                      <td className="py-2 px-2 text-center">{item.quantity}</td>
                      <td className="py-2 px-2 text-right">
                        $
                        {typeof item.rate === "number"
                          ? item.rate.toFixed(2)
                          : "0.00"}
                      </td>
                      <td className="py-2 px-2 text-right">
                        $
                        {typeof item.amount === "number"
                          ? item.amount.toFixed(2)
                          : "0.00"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end">
              <div className="w-72 space-y-3 bg-blue-50 rounded-lg p-4 shadow">
                <div className="flex justify-between text-blue-700">
                  <span>Subtotal:</span>
                  <span>${invoice.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-blue-700">
                  <span>
                    Tax (
                    {typeof invoice.taxRate === "number" ? invoice.taxRate : 0}
                    %):
                  </span>
                  <span>${invoice.taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t pt-3 text-blue-900">
                  <span>Total:</span>
                  <span>${invoice.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Footer for freelancer branding */}
            <div className="mt-10 text-center text-gray-500 text-sm italic">
              <span>Thank you for your business!</span>
              <br />
              <span>For questions, contact: {invoice.fromEmail}</span>
            </div>
          {/* ...existing code... */}
        </div>
      </div>
    </div>
  );
}