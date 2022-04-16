import {useRef, useEffect} from "react";

// onUpdate triggers when any state passed into stateArr updates.
export function useWatch(func, stateArr) {
    const isMounted = useRef(true);
    useEffect(()=> {
        isMounted.current?isMounted.current = false:func();
    }, stateArr)
}

// onUpdate - triggers on any state update in the component
export function useUpdate(func) {
    const isMounted = useRef(true);
    useEffect(()=> {
        isMounted.current?isMounted.current = false:func();
    });
}

