import React from 'react'

import { useState } from "react";
import { Card, CardContent } from "@/components/UI/card";
import { Button } from "@/components/UI/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/UI/table";

const farmersData = [
  { id: 1, name: "Rajesh Kumar", status: "Pending" },
  { id: 2, name: "Sita Devi", status: "Approved" },
  { id: 3, name: "John Doe", status: "Pending" },
  { id: 4, name: "Ane de Armas", status: "Approved" },
  { id: 5, name: "Vin Disel", status: "Pending" },
];

const Admin = () => {
    const [farmers, setFarmers] = useState(farmersData);

    const handleStatusChange = (id, newStatus) => {
      setFarmers(farmers.map(f => (f.id === id ? { ...f, status: newStatus } : f)));
    };
  
    return (
      <div className="flex bg-green-500 w-full h-screen">
        {/* Sidebar */}
        {/* <Slide /> */}
  
        {/* Main Content */}
        <div className="p-6 w-full">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
  
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Manage Farmers</h2>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {farmers.map(farmer => (
                    <TableRow key={farmer.id}>
                      <TableCell>{farmer.name}</TableCell>
                      <TableCell>{farmer.status}</TableCell>
                      <TableCell>
                        {farmer.status === "Pending" && (
                          <>
                            <Button
                              onClick={() => handleStatusChange(farmer.id, "Approved")}
                              className="mr-2 cursor-pointer"
                            >
                              Approve
                            </Button>
                            <Button
                              onClick={() => handleStatusChange(farmer.id, "Rejected")}
                              variant="destructive"
                              className="cursor-pointer"
                            >
                              Reject
                            </Button>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}

export default Admin