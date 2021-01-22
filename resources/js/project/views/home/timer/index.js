import React, { useEffect, useRef, useState } from "react";

const EventTimer = ({ event, eventCheck }) => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date(
            event ? event.startdate : null
        ).getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };
    useEffect(() => {
        !eventCheck ? startTimer() : null;
        return () => {
            clearInterval(interval.current);
        };
    });
    return (
        <section className="timer-container mt-0">
            <section className="timer mt-0">
                {!eventCheck ? (
                    <div className="text-left mt-0">
                        <strong className="font-weight-bold">
                            {event ? event.eventName : null}
                        </strong>
                        <p className="text-muted">
                            <span className="font-weight-bold">Venue: </span>
                            {event ? event.venue : null}
                        </p>
                        <br />
                        <i className="font-12 float-left font-italic">
                            Start Date: {event ? event.startdate : null}
                        </i>
                        <i className="font-12 float-right font-italic">
                            End Date: {event ? event.endate : null}
                        </i>
                    </div>
                ) : (
                    <div className="text-left mt-0">
                        <strong className="font-weight-bold">
                            No Incoming Event
                        </strong>
                    </div>
                )}
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p>
                            <small className="custom-color">Days</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p>
                            <small className="custom-color">Hours</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p>
                            <small className="custom-color">Minutes</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p>
                            <small className="custom-color">Seconds</small>
                        </p>
                    </section>
                </div>
            </section>
        </section>
    );
};
export default EventTimer;
