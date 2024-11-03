import React, { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import {
    useDragControls,
    useMotionvalue,
    useAnimate,
    motion,
} from "framer-motion";
import Cookies from "js-cookie";
import { FaCheckCircle, FaTimesCircle, FaStar } from "react-icons/fa";

export const DragCloseDrawerExample = () => {
    const [open, setOpen] = useState(false);
    const [userStats, setUserStats] = useState({
        correctWords: [],
        wrongWords: {},
        points: 0,
        masterWords: [],
    });
    const userEmail = Cookies.get("userEmail");

    const fetchCorrectWords = async () => {
        try {
            const response = await fetch(`https://rootified-backend-52fb8.ondigitalocean.app/correctWords?email=${userEmail}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${Cookies.get('token')}`
                }
            }); 
        }

