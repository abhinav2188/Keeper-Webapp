import React from 'react';

export default function Footer(){
    return(
        <footer className="absolute bottom-0 flex justify-center w-full">
            <p className="text-gray-500">Copyright {new Date().getFullYear()}</p>
        </footer>
    );
}