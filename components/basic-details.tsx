import React from 'react'
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

export default function BasicDetails() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Invoice Details</CardTitle>
            </CardHeader>
            <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <Label htmlFor="invoiceNumber">Invoice Number</Label>
                    <Input id="invoiceNumber" placeholder="Enter invoice number" />
                </div>
                <div className='flex flex-col'>
                    <Label htmlFor="invoiceDate">Invoice Date</Label>
                    <Input className='w-35' id="invoiceDate" type="date" />
                </div>

            </CardContent>
           
        </Card>
    )
}
