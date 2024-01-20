import React from 'react';
import { useCountdown } from './hooks/useCountdown';

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if(days + hours + minutes + seconds <= 0) {
        return <h1>EXPIRED</h1>
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <DateTimeDisplay value={days} type ={'Days'} />
<p></p>
            <DateTimeDisplay value={hours} type ={'Hours'} />
<p></p>
            <DateTimeDisplay value={minutes} type ={'Minutes'} />
<p></p>
            <DateTimeDisplay value={seconds} type ={'Seconds'} />
<p></p>
        </div>
    )
}

const DateTimeDisplay = ({value, type}) => {
    return (
        <div className='countdown'>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    )
}

export default CountdownTimer