import React from 'react'
import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './qrCodeScanner.module.css'

export default function QrCodeScanner() {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue)
    };

    return (
        <div className={s.container}>
            <Scanner onScan={scanHandler}
                allowMultiple
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={{
                    container: { width: 300 }
                }} />
            <p className={s.result}>{scanned}</p>
        </div>
    )
}
