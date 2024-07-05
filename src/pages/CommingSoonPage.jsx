import Links from "./Links";

const CommingSoonPage = () => {

    return (
        <>
            <div className="h-[90vh] md:h-[80vh] flex flex-col justify-center items-center bg-gray-200">
                <h1 className="text-5xl text-center font-bold text-black mb-4">🚀 Coming Soon 🚀</h1>
                <p className="text-lg text-center text-black">Stay tuned for exciting updates!</p>
                <Links />
            </div>
        </>
    );
};

export default CommingSoonPage;
