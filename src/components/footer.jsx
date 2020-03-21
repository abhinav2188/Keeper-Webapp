import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
export default function Footer(){
    return(
        <footer className="flex justify-center w-full mt-12 mb-8">
            <p className="text-gray-500"><CopyrightIcon />{new Date().getFullYear()}, Abhinav Rastogi</p>
        </footer>
    );
}