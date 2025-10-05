"use client";
import { useEffect, useState } from "react";

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
    if (typeof window === "undefined") return false;
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [MOBILE_BREAKPOINT]);

    return isMobile;
}