"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Import Card components
import { ScrollArea } from "@/components/ui/scroll-area" // Import ScrollArea
import {
    BellIcon,
    ThumbsUpIcon,
    ThumbsDownIcon,
    ChevronDownIcon,
} from 'lucide-react';

// Sample dispute data (replace with your actual data fetching)
const sampleDisputes = [
    {
        id: 1,
        raisedBy: 'tenant123',
        raisedAgainst: 'landlord456',
        time: '2024-07-26 10:00 AM',
        reason: 'Leaky roof',
        details: 'The roof has been leaking for a week, and the landlord has not responded to my requests for repair.',
        status: 'pending', // Add a status field
        votes: { accept: 0, reject: 0 }, // Add votes
    },
    {
        id: 2,
        raisedBy: 'landlord789',
        raisedAgainst: 'tenant012',
        time: '2024-07-25 02:30 PM',
        reason: 'Unpaid rent',
        details: 'Tenant has not paid rent for two months.',
        status: 'pending',
        votes: { accept: 0, reject: 0 },
    },
    // ... more disputes
];

const Page = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [disputes, setDisputes] = useState(sampleDisputes); // Initialize with sample data
    const [selectedDispute, setSelectedDispute] = useState(null); // State for expanded dispute details

    const connectWallet = async () => {
        setIsConnected(true);
    };

    const handleVote = (disputeId, voteType) => {
        setDisputes(prevDisputes =>
            prevDisputes.map(dispute =>
                dispute.id === disputeId
                    ? {
                        ...dispute,
                        votes: {
                            ...dispute.votes,
                            [voteType]: dispute.votes[voteType] + 1,
                        },
                    }
                    : dispute
            )
        );
    };

    const handleDisputeClick = (dispute) => {
        setSelectedDispute(dispute);
    };

    const closeDisputeDetails = () => {
        setSelectedDispute(null);
    };


    const DisputesTab = () => (
        <ScrollArea className="h-[500px] rounded-md border">
            {disputes.map(dispute => (
                <Card key={dispute.id} className="mb-4 p-4 cursor-pointer hover:bg-gray-100" onClick={() => handleDisputeClick(dispute)}>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-medium">{dispute.reason}</h3>
                            <p className="text-sm text-gray-500">
                                By {dispute.raisedBy} against {dispute.raisedAgainst}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button size="icon" onClick={() => handleVote(dispute.id, 'accept')}>
                                <ThumbsUpIcon className="h-4 w-4" />
                            </Button>
                            <span>{dispute.votes.accept}</span>
                            <Button size="icon" onClick={() => handleVote(dispute.id, 'reject')}>
                                <ThumbsDownIcon className="h-4 w-4" />
                            </Button>
                            <span>{dispute.votes.reject}</span>
                        </div>
                    </div>
                </Card>
            ))}
        </ScrollArea>
    );

    const DisputeDetailsModal = ({ dispute, onClose }) => (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <Card className="p-6 bg-white rounded-lg w-full md:w-2/3">
                <CardHeader>
                    <CardTitle className="text-xl font-medium">Dispute Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <p><strong>Reason:</strong> {dispute.reason}</p>
                    <p><strong>Raised By:</strong> {dispute.raisedBy}</p>
                    <p><strong>Raised Against:</strong> {dispute.raisedAgainst}</p>
                    <p><strong>Time:</strong> {dispute.time}</p>
                    <p><strong>Details:</strong> {dispute.details}</p>
                    {/* ... other details */}
                    <div className="mt-4 flex justify-end">
                        <Button onClick={onClose}>Close</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );


    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* ... (Header and Connect Wallet - same as before) */}

            <Tabs defaultValue="agreements" className="mb-8">
                {/* ... (TabsList - same as before) */}

                <TabsContent value="disputes">
                    <DisputesTab />
                </TabsContent>

                {/* ... other tabs */}
            </Tabs>

            {/* Conditionally render the modal */}
            {selectedDispute && (
                <DisputeDetailsModal dispute={selectedDispute} onClose={closeDisputeDetails} />
            )}
        </div>
    );
};

export default Page;