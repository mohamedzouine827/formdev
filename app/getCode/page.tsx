import React from 'react';
import { useFormContext } from '@/app/context'; 

export default function Page() {
    const { memoizedItems } = useFormContext(); // Use the context to access memoized items

    return (
        <div>
            <h1>Selected Components</h1>
            <ul>
                {memoizedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
