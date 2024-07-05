import Gallery from "../Gallery"
import Card from "../components/Crad"
import CodeBlocks from "../components/Home/CodeBlocks"
import Partners from "../components/Home/Partners"
import ReviewSlider from "../components/ReviewSlider"

const HomePage = () => {
    return (
        <div >
            {/* <Card /> */}
            {/* <Gallery/> */}
            <div className="bg-gray-200 p-8">

                <CodeBlocks
                    position={"lg:flex-row"}
                    
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock your
                            coding potential with our online
                            courses.
                        </div>
                    }
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={{
                        btnText: "Try it Yourself",
                        link: "/signup",
                        active: true,
                    }}
                    ctabtn2={{
                        btnText: "Learn More",
                        link: "/signup",
                        active: false,
                    }}
                    codeColor={"text-yellow-25"}
                    codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={""}
                />

                <hr className="my-8 bg-gray-400 h-0.5" />

                <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                            Start
                            coding in seconds
                        </div>
                    }
                    subheading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={{
                        btnText: "Continue Lesson",
                        link: "/signup",
                        active: true,
                    }}
                    ctabtn2={{
                        btnText: "Learn More",
                        link: "/signup",
                        active: false,
                    }}
                    codeColor={"text-white"}
                    codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                    backgroundGradient={<div className="codeblock2 absolute"></div>}
                />
                   <hr className="my-8 bg-gray-700 h-0.5" />
            </div>

            <ReviewSlider />
            <Partners/>
        </div>
    )
}

export default HomePage
