"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertCircle, Plus, DollarSign, Flag, Upload, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Agreement {
    id: string;
    propertyAddress: string;
    landlordAddress: string;
    tenantAddress: string;
    rentAmount: string;
    deposit: string;
    startDate: string;
    endDate: string;
    status: string;
    nextPaymentDue: string | null;
    disputes: { title: string; status: string }[];
    documents: string[];
}

const AgreementsTab = () => {
    const [agreements, setAgreements] = useState<Agreement[]>([]);
    const [showNewAgreementDialog, setShowNewAgreementDialog] = useState(false);

    useEffect(() => {
        const storedAgreements = localStorage.getItem('agreements');
        if (storedAgreements) {
            setAgreements(JSON.parse(storedAgreements));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('agreements', JSON.stringify(agreements));
    }, [agreements]);

    const createAgreement = async (formData: any) => {
        const newAgreement: Agreement = {
            id: `0x${Math.random().toString(36).substring(2, 15)}`,
            propertyAddress: formData.propertyAddress,
            landlordAddress: formData.landlordAddress,
            tenantAddress: formData.tenantAddress,
            rentAmount: formData.rentAmount,
            deposit: formData.deposit,
            startDate: formData.startDate,
            endDate: formData.endDate,
            status: 'pending',
            nextPaymentDue: formData.nextPaymentDue || null,
            disputes: [],
            documents: [],
        };

        setAgreements([...agreements, newAgreement]);
        setShowNewAgreementDialog(false);
    };

    const signAgreement = async (agreementId: string) => {
        setAgreements(
            agreements.map((agreement) =>
                agreement.id === agreementId ? { ...agreement, status: 'active' } : agreement
            )
        );
        alert('Please confirm the transaction in MetaMask');
    };

    const makePayment = async (agreementId: string) => {
        alert('Please confirm rent payment in MetaMask');
    };

    const raiseDispute = async (agreementId: string) => {
        alert('Please confirm dispute submission in MetaMask');
    };

    return (
        <div>
            <Dialog open={showNewAgreementDialog} onOpenChange={setShowNewAgreementDialog}>
                <DialogTrigger asChild>
                    <Button className="mb-6 bg-green-600">
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Agreement
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Rental Agreement</DialogTitle>
                        <DialogDescription>Enter the details for your new rental agreement</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Input placeholder="Property Address" id="propertyAddress" />
                        <Input placeholder="Landlord ETH Address" id="landlordAddress" />
                        <Input placeholder="Tenant ETH Address" id="tenantAddress" />
                        <Input type="number" placeholder="Rent Amount (ETH)" id="rentAmount" />
                        <Input type="number" placeholder="Deposit Amount (ETH)" id="deposit" />
                        <Input type="date" placeholder="Start Date" id="startDate" />
                        <Input type="date" placeholder="End Date" id="endDate" />
                        <Input type="date" placeholder="Next Payment Due" id="nextPaymentDue" />
                        <Button onClick={() => {
                            const formData = {
                                propertyAddress: document.getElementById('propertyAddress')?.value,
                                landlordAddress: document.getElementById('landlordAddress')?.value,
                                tenantAddress: document.getElementById('tenantAddress')?.value,
                                rentAmount: document.getElementById('rentAmount')?.value,
                                deposit: document.getElementById('deposit')?.value,
                                startDate: document.getElementById('startDate')?.value,
                                endDate: document.getElementById('endDate')?.value,
                                nextPaymentDue: document.getElementById('nextPaymentDue')?.value,
                            };
                            createAgreement(formData);
                        }}>
                            Create Agreement
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <div className="space-y-6">
                {agreements.map((agreement) => (
                    <Card key={agreement.id} className="w-full">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-lg">{agreement.propertyAddress}</CardTitle>
                                <span className={`px-3 py-1 rounded-full text-sm ${
                                    agreement.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {agreement.status}
                                </span>
                            </div>
                            <CardDescription>Contract ID: {agreement.id}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div><p className="text-sm text-gray-500">Rent Amount</p><p className="font-medium">{agreement.rentAmount} ETH</p></div>
                                <div><p className="text-sm text-gray-500">Security Deposit</p><p className="font-medium">{agreement.deposit} ETH</p></div>
                                <div><p className="text-sm text-gray-500">Start Date</p><p className="font-medium">{agreement.startDate}</p></div>
                                <div><p className="text-sm text-gray-500">End Date</p><p className="font-medium">{agreement.endDate}</p></div>
                                <div><p className="text-sm text-gray-500">Next Payment</p><p className="font-medium">{agreement.nextPaymentDue || "N/A"}</p></div>
                            </div>

                            <Alert className="mb-6">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Next Payment Due</AlertTitle>
                                <AlertDescription>{agreement.nextPaymentDue || "N/A"}</AlertDescription>
                            </Alert>

                            <div className="mb-6">
                                <h3 className="text-sm font-medium mb-2">Documents</h3>
                                <div className="flex gap-2">
                                    {agreement.documents.map((doc, index) => (
                                        <Button key={index} variant="outline" size="sm">
                                            <Upload className="h-4 w-4 mr-2" />
                                            {doc}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button onClick={() => signAgreement(agreement.id)} className="bg-blue-600">
                                    <CheckCircle className="h-4 w-4 mr-2" /> Sign Agreement
                                </Button>
                                <Button onClick={() => makePayment(agreement.id)} className="bg-green-600">
                                    <DollarSign className="h-4 w-4 mr-2" /> Make Payment
                                </Button>
                                <Button onClick={() => raiseDispute(agreement.id)} variant="outline" className="border-red-200 text-red-600">
                                    <Flag className="h-4 w-4 mr-2" /> Raise Dispute
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AgreementsTab;