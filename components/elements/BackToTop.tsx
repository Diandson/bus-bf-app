
export default function BackToTop({ scroll }: { scroll: boolean }) {

    return (
        <>
            {scroll && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 p-3 text-lg bg-green-600 hover:bg-green-600 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group z-50"
                >
                    <svg
                        className="w-8 h-8 animate-bounce group-hover:animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}
        </>
    )
}
