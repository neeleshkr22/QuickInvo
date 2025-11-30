import { useInvoice } from "@/context/invoice-context";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ContactDetails() {
  const { invoice, updateInvoice } = useInvoice();

  return (
    <Card className="bg-neutral-900 text-white border border-neutral-800">
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium">From (Your Details)</h3>
          <div>
            <Label htmlFor="fromName" className="mb-2 block">Name</Label>
            <Input
              id="fromName"
              value={invoice.fromName}
              onChange={(e) => updateInvoice({ fromName: e.target.value })}
              placeholder="Your name or company"
              className="mb-2"
            />
          </div>
          <div>
            <Label htmlFor="fromEmail" className="mb-2 block">Email</Label>
            <Input
              id="fromEmail"
              value={invoice.fromEmail}
              onChange={(e) => updateInvoice({ fromEmail: e.target.value })}
              placeholder="your@email.com"
              type="email"
              className="mb-2"
            />
          </div>
          {/* Freelancer payment info */}
          <div>
            <Label htmlFor="bankName" className="mb-2 block">Bank Name</Label>
            <Input
              id="bankName"
              value={invoice.bankName || ""}
              onChange={e => updateInvoice({ bankName: e.target.value })}
              placeholder="Your bank name"
              className="mb-2"
            />
          </div>
          <div>
            <Label htmlFor="bankAccount" className="mb-2 block">Bank Account</Label>
            <Input
              id="bankAccount"
              value={invoice.bankAccount || ""}
              onChange={e => updateInvoice({ bankAccount: e.target.value })}
              placeholder="Account number or IBAN"
              className="mb-2"
            />
          </div>
          <div>
            <Label htmlFor="paymentTerms" className="mb-2 block">Payment Terms</Label>
            <Input
              id="paymentTerms"
              value={invoice.paymentTerms || ""}
              onChange={e => updateInvoice({ paymentTerms: e.target.value })}
              placeholder="e.g. Net 15, Net 30"
              className="mb-2"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">To (Client Details)</h3>
          <div>
            <Label htmlFor="toName" className="mb-2 block">Name</Label>
            <Input
              id="toName"
              value={invoice.toName}
              onChange={(e) => updateInvoice({ toName: e.target.value })}
              placeholder="Client name or company"
              className="mb-2"
            />
          </div>
          <div>
            <Label htmlFor="toEmail" className="mb-2 block">Email</Label>
            <Input
              value={invoice.toEmail}
              onChange={(e) => updateInvoice({ toEmail: e.target.value })}
              id="toEmail"
              placeholder="client@email.com"
              type="email"
              className="mb-2"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}