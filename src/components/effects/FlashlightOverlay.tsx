import { useEffect, useRef } from "react";

export function FlashlightOverlay() {
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = overlayRef.current;
        if (!el) return;

        el.style.setProperty("--flashlight-x", "50%");
        el.style.setProperty("--flashlight-y", "50%");

        const handleMove = (event: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            el.style.setProperty("--flashlight-x", `${x}px`);
            el.style.setProperty("--flashlight-y", `${y}px`);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div
            ref={overlayRef}
            className="flashlight-overlay"
            aria-hidden="true"
        />
    );
}
