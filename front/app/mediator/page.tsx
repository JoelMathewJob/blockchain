
"use client"; // Important for components that use hooks or browser APIs

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AgreementsTab from '@/components/AgreementsTab'; // Import your tab components
import PaymentsTab from '@/components/PaymentsTab';
import DisputesTab from '@/components/DisputesTab';
import DocumentsTab from '@/components/DocumentsTab';
import { CardDescription } from '@/components/ui/card';

const Page = () => {
    const [isConnected, setIsConnected] = useState(false);

    const connectWallet = async () => {
        setIsConnected(true);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Mediator Dashboard</h1>
                    <CardDescription>Manage your blockchain-secured rental agreements</CardDescription>
                </div>
                <Button
                    onClick={connectWallet}
                    className={isConnected ? 'bg-green-600' : 'bg-blue-600'}
                >
                    {isConnected ? 'Connected to MetaMask' : 'Connect MetaMask'}
                </Button>
            </div>
            <Tabs defaultValue="agreements" className="mb-8">
                <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="agreements">Agreements</TabsTrigger>
                    <TabsTrigger value="payments">Payments</TabsTrigger>
                    <TabsTrigger value="disputes">Disputes</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="agreements">
                    <AgreementsTab /> {/* Use the AgreementsTab component */}
                </TabsContent>
                <TabsContent value="payments">
                    <PaymentsTab /> {/* Use the PaymentsTab component */}
                </TabsContent>
                <TabsContent value="disputes">
                    <DisputesTab /> {/* Use the DisputesTab component */}
                </TabsContent>
                <TabsContent value="documents">
                    <DocumentsTab /> {/* Use the DocumentsTab component */}
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Page;