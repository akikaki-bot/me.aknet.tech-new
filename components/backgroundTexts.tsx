"use client"


export function BackgroundTexts() {

    return (
        <>
            {
                Array.from({ length: 250 }).map((_, i) =>
                    <span
                        key={i}
                        className="animate-random-to-white"
                        style={{
                            opacity: `${Math.random() * 0.6 + 0.2}`,
                            animationDelay: `${i * 0.0075}s`,
                        }}
                    >
                        {
                            ((i + 1) == 1 || (i + 1) % 5 == 0) ? "あ" :
                                ((i + 1) % 2 == 0 || (i + 1) % 4 == 0) ? "き" :
                                    "か"
                        }
                    </span>
                )
            }
        </>
    )
}