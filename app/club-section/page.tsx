import React from 'react';
import { Navigation } from "@/components/navigation"
import ClubDetails from '@/components/ClubDetails';

export default function ClubSection() {
    return (
        <>
        <Navigation/>
        <div>
            <ClubDetails/>
        </div>
        </>
    )
}
