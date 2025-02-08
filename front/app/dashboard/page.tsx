// "use client"

// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { 
//   AlertCircle, 
//   ChevronRight, 
//   Plus, 
//   DollarSign, 
//   Flag,
//   Upload,
//   Calendar,
//   CheckCircle,
//   XCircle
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// // Mock data for demonstration
// const mockAgreements = [
//   {
//     id: '0x123...abc',
//     propertyAddress: '123 Blockchain Street',
//     landlordAddress: '0xabc...789',
//     tenantAddress: '0xdef...456',
//     rentAmount: '0.5',
//     deposit: '1.0',
//     startDate: '2025-01-01',
//     endDate: '2025-12-31',
//     status: 'active',
//     nextPaymentDue: '2025-03-01',
//     disputes: [],
//     documents: ['Lease Agreement', 'Property Inspection Report']
//   },
//   {
//     id: '0x456...def',
//     propertyAddress: '456 Crypto Avenue',
//     landlordAddress: '0xabc...789',
//     tenantAddress: '0xdef...456',
//     rentAmount: '0.8',
//     deposit: '1.6',
//     startDate: '2025-02-01',
//     endDate: '2026-01-31',
//     status: 'pending',
//     nextPaymentDue: '2025-03-01',
//     disputes: [{ title: 'Maintenance Issue', status: 'open' }],
//     documents: ['Lease Agreement']
//   }
// ];

// const Dashboard = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [activeTab, setActiveTab] = useState('agreements');
//   const [agreements, setAgreements] = useState(mockAgreements);
//   const [showNewAgreementDialog, setShowNewAgreementDialog] = useState(false);

//   // Placeholder functions for blockchain interactions
//   const connectWallet = async () => {
//     setIsConnected(true);
//   };

//   const createAgreement = async (formData) => {
//     // Placeholder for contract interaction
//     console.log('Creating agreement:', formData);
//     setShowNewAgreementDialog(false);
//   };

//   const signAgreement = async (agreementId) => {
//     alert('Please confirm the transaction in MetaMask');
//   };

//   const makePayment = async (agreementId) => {
//     alert('Please confirm rent payment in MetaMask');
//   };

//   const raiseDispute = async (agreementId) => {
//     alert('Please confirm dispute submission in MetaMask');
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Header with Wallet Connection */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold">Rental Agreement Dashboard</h1>
//           <CardDescription>Manage your blockchain-secured rental agreements</CardDescription>
//         </div>
//         <Button
//           onClick={connectWallet}
//           className={isConnected ? 'bg-green-600' : 'bg-blue-600'}
//         >
//           {isConnected ? 'Connected to MetaMask' : 'Connect MetaMask'}
//         </Button>
//       </div>

//       {/* Main Navigation Tabs */}
//       <Tabs defaultValue="agreements" className="mb-8">
//         <TabsList className="grid grid-cols-4 w-full">
//           <TabsTrigger value="agreements">Agreements</TabsTrigger>
//           <TabsTrigger value="payments">Payments</TabsTrigger>
//           <TabsTrigger value="disputes">Disputes</TabsTrigger>
//           <TabsTrigger value="documents">Documents</TabsTrigger>
//         </TabsList>

//         <TabsContent value="agreements">
//           {/* Create New Agreement Button */}
//           <Dialog open={showNewAgreementDialog} onOpenChange={setShowNewAgreementDialog}>
//             <DialogTrigger asChild>
//               <Button className="mb-6 bg-green-600">
//                 <Plus className="h-4 w-4 mr-2" />
//                 Create New Agreement
//               </Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Create New Rental Agreement</DialogTitle>
//                 <DialogDescription>
//                   Enter the details for your new rental agreement
//                 </DialogDescription>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <Input placeholder="Property Address" />
//                 <Input placeholder="Tenant ETH Address" />
//                 <Input type="number" placeholder="Rent Amount (ETH)" />
//                 <Input type="number" placeholder="Deposit Amount (ETH)" />
//                 <div className="grid grid-cols-2 gap-4">
//                   <Input type="date" placeholder="Start Date" />
//                   <Input type="date" placeholder="End Date" />
//                 </div>
//                 <Button onClick={() => createAgreement({})}>
//                   Create Agreement
//                 </Button>
//               </div>
//             </DialogContent>
//           </Dialog>

//           {/* Agreements List */}
//           <div className="space-y-6">
//             {agreements.map((agreement) => (
//               <Card key={agreement.id} className="w-full">
//                 <CardHeader>
//                   <div className="flex justify-between items-center">
//                     <CardTitle className="text-lg">
//                       {agreement.propertyAddress}
//                     </CardTitle>
//                     <span className={`px-3 py-1 rounded-full text-sm ${
//                       agreement.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {agreement.status}
//                     </span>
//                   </div>
//                   <CardDescription>
//                     Contract ID: {agreement.id}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {/* Agreement Details */}
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                     <div>
//                       <p className="text-sm text-gray-500">Rent Amount</p>
//                       <p className="font-medium">{agreement.rentAmount} ETH</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Security Deposit</p>
//                       <p className="font-medium">{agreement.deposit} ETH</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Start Date</p>
//                       <p className="font-medium">{agreement.startDate}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">End Date</p>
//                       <p className="font-medium">{agreement.endDate}</p>
//                     </div>
//                   </div>

//                   {/* Status Alerts */}
//                   <Alert className="mb-6">
//                     <AlertCircle className="h-4 w-4" />
//                     <AlertTitle>Next Payment Due</AlertTitle>
//                     <AlertDescription>
//                       {agreement.nextPaymentDue}
//                     </AlertDescription>
//                   </Alert>

//                   {/* Documents Section */}
//                   <div className="mb-6">
//                     <h3 className="text-sm font-medium mb-2">Documents</h3>
//                     <div className="flex gap-2">
//                       {agreement.documents.map((doc, index) => (
//                         <Button key={index} variant="outline" size="sm">
//                           <Upload className="h-4 w-4 mr-2" />
//                           {doc}
//                         </Button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex flex-wrap gap-4">
//                     <Button
//                       onClick={() => signAgreement(agreement.id)}
//                       className="bg-blue-600"
//                     >
//                       <CheckCircle className="h-4 w-4 mr-2" />
//                       Sign Agreement
//                     </Button>
//                     <Button
//                       onClick={() => makePayment(agreement.id)}
//                       className="bg-green-600"
//                     >
//                       <DollarSign className="h-4 w-4 mr-2" />
//                       Make Payment
//                     </Button>
//                     <Button
//                       onClick={() => raiseDispute(agreement.id)}
//                       variant="outline"
//                       className="border-red-200 text-red-600"
//                     >
//                       <Flag className="h-4 w-4 mr-2" />
//                       Raise Dispute
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="payments">
//           <Card>
//             <CardHeader>
//               <CardTitle>Payment History</CardTitle>
//               <CardDescription>View and manage your rental payments</CardDescription>
//             </CardHeader>
//             <CardContent>
//               {/* Payment history table would go here */}
//               <p className="text-gray-500">Payment history coming soon...</p>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="disputes">
//           <Card>
//             <CardHeader>
//               <CardTitle>Active Disputes</CardTitle>
//               <CardDescription>Manage and resolve property disputes</CardDescription>
//             </CardHeader>
//             <CardContent>
//               {/* Disputes list would go here */}
//               <p className="text-gray-500">No active disputes</p>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="documents">
//           <Card>
//             <CardHeader>
//               <CardTitle>Document Storage</CardTitle>
//               <CardDescription>Access and manage your rental documents</CardDescription>
//             </CardHeader>
//             <CardContent>
//               {/* Document management interface would go here */}
//               <p className="text-gray-500">Document management coming soon...</p>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Dashboard;

"use client"; // Important for components that use hooks or browser APIs

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AgreementsTab from '@/components/AgreementsTab'; // Import your tab components
import PaymentsTab from '@/components/PaymentsTab';
import DisputesTab from '@/components/DisputesTab';
import DocumentsTab from '@/components/DocumentsTab';
import { CardDescription } from '@/components/ui/card';

const DashboardPage = () => {
    const [isConnected, setIsConnected] = useState(false);

    const connectWallet = async () => {
        setIsConnected(true);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Rental Agreement Dashboard</h1>
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

export default DashboardPage;