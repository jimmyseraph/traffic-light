import React from 'react';

interface LightProps {
    color: string,
    on: boolean,
    twinkle: boolean,
    twinkleDuration: number,
    twinkleInterval: number,
    duration: number,
    callback: () => void,
}

function Light(props: LightProps) {

    const OFF_COLOR = 'black';

    const [color, setColor] = React.useState(props.color);

    React.useEffect(() => {
        let timerId: NodeJS.Timeout|null = null;
        if(props.on) {
            setColor(props.color);
            const twMax = props.twinkleDuration / props.twinkleInterval;
            let tw_count = 0;;
            timerId = setTimeout(() => {
                if(props.twinkle) {
                    timerId = setInterval(() => {
                        if(tw_count >= twMax) {
                            props.callback();
                            clearInterval(timerId as NodeJS.Timeout);
                            setColor(OFF_COLOR);
                            return;
                        }
                        if(tw_count % 2) {
                            setColor(props.color);
                        } else {
                            setColor(OFF_COLOR);
                        }
                        tw_count++;
                    }, props.twinkleInterval);
                } else {
                    props.callback();
                }
            }, props.duration);
        } else {
            if(timerId !== null) {
                clearTimeout(timerId);
            }
            setColor(OFF_COLOR);
        } // eslint-disable-next-line
    }, [props.on]); 

    return <div className={`light color-${color}`}></div>;
}

export default Light;