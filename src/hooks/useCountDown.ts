import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import { ActionsProps, TimerProps, UseCountdownProps } from "./interfaces";

const useCountDown: UseCountdownProps = (
  timeToCount = 60 * 1000,
  interval = 1000,
) => {
  const [timeLeft, setTimeLeft] = useState<number>(timeToCount);
  const timer = useRef<TimerProps>({} as TimerProps);

  const run = (ts: number) => {
    if (!timer.current.started) {
      timer.current.started = ts;
      timer.current.lastInterval = ts;
    }

    const localInterval: number = Math.min(
      interval,
      timer.current.timeLeft || Infinity,
    );
    if (ts - timer.current.lastInterval >= localInterval) {
      timer.current.lastInterval += localInterval;
      setTimeLeft((timeLeft) => {
        timer.current.timeLeft = timeLeft - localInterval;
        return timer.current.timeLeft;
      });
    }

    if (ts - timer.current.started < timer.current.timeToCount) {
      timer.current.requestId = window.requestAnimationFrame(run);
    } else {
      timer.current = {
        timeLeft: 0,
        started: null,
        lastInterval: null,
        timeToCount: 0,
        requestId: 0,
      };
      setTimeLeft(0);
    }
  };

  // set new timer with out running
  const time = useCallback((ttc: number) => {
    window.cancelAnimationFrame(timer.current.requestId);

    const newTimeToCount: number = ttc !== undefined ? ttc : timeToCount;
    timer.current.started = null;
    timer.current.lastInterval = null;
    timer.current.timeToCount = newTimeToCount;
    timer.current.requestId = 0;

    setTimeLeft(newTimeToCount);
  }, []);

  const start = useCallback((ttc?: number) => {
    window.cancelAnimationFrame(timer.current.requestId);

    const newTimeToCount: number = ttc !== undefined ? ttc : timeToCount;
    timer.current.started = null;
    timer.current.lastInterval = null;
    timer.current.timeToCount = newTimeToCount;
    timer.current.requestId = window.requestAnimationFrame(run);

    setTimeLeft(newTimeToCount);
  }, []);

  const pause = useCallback(() => {
    window.cancelAnimationFrame(timer.current.requestId);
    timer.current.started = null;
    timer.current.lastInterval = null;
    timer.current.timeToCount = timer.current.timeLeft;
  }, []);

  const resume = useCallback(() => {
    if (!timer.current.started && timer.current.timeLeft > 0) {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current.requestId = window.requestAnimationFrame(run);
    }
  }, []);

  const reset = useCallback((ttc: number) => {
    const newTimeToCount: number = ttc !== undefined ? ttc : timeToCount;

    if (timer.current.timeLeft) {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current = {
        timeLeft: 0,
        started: null,
        lastInterval: null,
        timeToCount: newTimeToCount,
        requestId: 0,
      };
      setTimeLeft(newTimeToCount);
    }
  }, []);

  const actions = useMemo<ActionsProps>(
    () => ({ time, start, pause, resume, reset }),
    [time, start, pause, resume, reset],
  );

  useEffect(() => {
    return () => window.cancelAnimationFrame(timer.current.requestId);
  }, []);

  return [timeLeft, actions];
};

export default useCountDown;
