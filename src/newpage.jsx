// import { useState } from 'react';


export default function NewPage({ msg }) {
    return (
        <div>
                <div className="min-w-full rounded overflow-hidden shadow-lg">
                    <img className="w-25" src="/vite.svg" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            {msg ? (<>
                            <div className="font-bold text-xl mb-2 font-serif">{msg.slug}</div>
                            <p className="font-bold text-md">
                                {msg.translations[0].description} 
                            </p>
                            </>) : 
                            (<>
                                <div className="font-bold text-xl mb-2 font-serif"> <div class="w-full inline-block h-4 rounded animate-pulse bg-gray-300"></div></div>
                                <h1 className="font-bold">
                                   <div class="w-full animate-pulse h-4 rounded bg-gray-300 mb-0.75"></div>
                                    <div class="w-full animate-pulse h-4 rounded bg-gray-300 mb-0.75"></div>
                                    <div class="w-3/4 animate-pulse h-4 rounded bg-gray-300 mb-0.5"></div>
                                </h1>
                             
                            </>)
                            }
                        </div>
                        {/* <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div> */}
                </div>
            
            <br />

        </div>
    );
}

