import { InvoiceData } from "@/types/invoice";
import { jsPDF } from "jspdf";

export const generatePDF = (invoice: InvoiceData) => {
  const doc = new jsPDF();
  let y = 20;

  // Logo
  if (invoice.logoUrl) {
    // Draw logo as image (resize to fit)
    try {
      doc.addImage(invoice.logoUrl, 'PNG', 20, y, 20, 20);
    } catch (e) {
      // If logo fails, ignore
    }
  }

  // Title and Invoice Number
  doc.setFontSize(24);
  doc.setTextColor(33, 97, 209); // blue
  doc.text("INVOICE", 45, y + 10);
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`#${invoice.invoiceNumber}`, 150, y + 10);

  // Date
  doc.text(`Date: ${new Date(invoice.date).toLocaleDateString()}`, 150, y + 20);
  y += 35;

  // Freelancer Details
  doc.setFontSize(14);
  doc.setTextColor(33, 97, 209);
  doc.text("From (Freelancer):", 20, y);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(invoice.fromName, 20, y + 7);
  doc.text(invoice.fromEmail, 20, y + 14);
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Bank: ${invoice.bankName || ""}`, 20, y + 21);
  doc.text(`Account: ${invoice.bankAccount || ""}`, 20, y + 26);
  doc.text(`Payment Terms: ${invoice.paymentTerms || ""}`, 20, y + 31);

  // Client Details
  doc.setFontSize(14);
  doc.setTextColor(33, 97, 209);
  doc.text("To (Client):", 120, y);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(invoice.toName, 120, y + 7);
  doc.text(invoice.toEmail, 120, y + 14);
  y += 40;

  // Items header
  doc.setFontSize(11);
  doc.setTextColor(33, 97, 209);
  doc.text("Description", 20, y);
  doc.text("Qty", 100, y);
  doc.text("Rate", 130, y);
  doc.text("Amount", 160, y);
  y += 5;
  doc.setDrawColor(33, 97, 209);
  doc.line(20, y, 190, y);
  y += 10;

  // Items
  doc.setTextColor(0, 0, 0);
  invoice.items.forEach((item) => {
    doc.text(item.description, 20, y);
    doc.text(item.quantity.toString(), 100, y);
    doc.text(`$${Number(item.rate).toFixed(2)}`, 130, y);
    doc.text(`$${item.amount.toFixed(2)}`, 160, y);
    y += 8;
  });

  y += 10;
  doc.setDrawColor(33, 97, 209);
  doc.line(130, y, 190, y);
  y += 10;

  // Totals
  doc.setFontSize(11);
  doc.setTextColor(33, 97, 209);
  doc.text("Subtotal:", 130, y);
  doc.setTextColor(0, 0, 0);
  doc.text(`$${invoice.subtotal.toFixed(2)}`, 160, y);
  y += 8;
  doc.setTextColor(33, 97, 209);
  doc.text(`Tax (${invoice.taxRate}%):`, 130, y);
  doc.setTextColor(0, 0, 0);
  doc.text(`$${invoice.taxAmount.toFixed(2)}`, 160, y);
  y += 8;
  doc.setFontSize(13);
  doc.setTextColor(33, 97, 209);
  doc.text("Total:", 130, y);
  doc.setTextColor(0, 0, 0);
  doc.text(`$${invoice.total.toFixed(2)}`, 160, y);

  // Footer
  y += 20;
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("Thank you for your business!", 20, y);
  doc.text(`For questions, contact: ${invoice.fromEmail}`, 20, y + 6);

  doc.save(`invoice-${invoice.invoiceNumber}.pdf`);
};