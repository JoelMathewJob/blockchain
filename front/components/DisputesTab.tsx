"use client";
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DisputesTab = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Active Disputes</CardTitle>
                <CardDescription>Manage and resolve property disputes</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-gray-500">No active disputes</p>
            </CardContent>
        </Card>
    );
};

export default DisputesTab;