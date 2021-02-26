import React from 'react'
import Die from '../components/Die/Die'

const DiePage: React.FC<{}> = ()  => {
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Die color="red" />
    </div>
}

export default DiePage;