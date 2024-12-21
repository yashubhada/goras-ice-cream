import React from 'react';
import AnimationVideo from '../images/loading-animation1.mp4';

const Loading: React.FC = () => {
    return (
        <div className="h-screen w-full bg-white">
            <div className="flex items-center justify-center h-full">
                <div>
                    <video
                        src={AnimationVideo}
                        autoPlay
                        loop
                        muted
                        className="w-[200px] md:w-[400px]"
                    ></video>
                    <h1 className="text-center text-xl font-bold tracking-[10px] mt-5">LOADING...</h1>

                </div>
            </div>
        </div>
    );
}

export default Loading;
