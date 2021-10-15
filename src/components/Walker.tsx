import walk from './walk.gif';
import walkStop from './walk-stop.jpg';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';

interface WalkProps {
    handleCheck: () => void,
}

function Walker(props: WalkProps){

    const [walking, setWalking] = React.useState(false);

    const handleGo = () => {
        if(!walking && props.handleCheck()) {
            setWalking(true);
            setTimeout(() => {
                setWalking(false);
            }, 5000);
        }
    };

    return (
        <>
        <img src={walking? walk : walkStop} alt="walk" style={{width: '80%'}} />
        <Button 
            type='primary' 
            icon={<CaretRightOutlined />} 
            size='large' 
            onClick={handleGo} 
            disabled={walking}
        >
            Go!
        </Button>
    
        </>
    )
}

export default Walker;