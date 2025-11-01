 "use client"
import React from "react"
import RequiredRole from "@/components/RequiredRole"
import UploadForm from "@/components/UploadForm"

const OwnerDashboardPage = () => {
    return (
        <RequiredRole role="owner">
            <div style={{padding: 20}}>
                <h1>Owner Dashboard</h1>
                <p>Manage Event, Parties, Fees, Offers, Photos, Video</p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
                    <UploadForm collectionName="events"/>
                      <UploadForm collectionName="bar"/>
                        <UploadForm collectionName="nightcrew"/>
                          <UploadForm collectionName="music"/>
                            <UploadForm collectionName="parties"/>
                              <UploadForm collectionName="photos"/>
                                <UploadForm collectionName="fees"/>
                                  <UploadForm collectionName="videos  "/>
                </div>
            </div>
        </RequiredRole> 
    )
} 
export default OwnerDashboardPage;