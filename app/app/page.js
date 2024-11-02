"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

export default function Home() {
  const [quiz, setQuiz] = useState(null);
  const [theme, setTheme] = useState("light");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  reutrn (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center" data-theme={theme}>
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 right-0 flex justify-center mt-4">
          <motion.div
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {showSuccessMessage}
          </motion.div>
          </div>
      )}

      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-base-100 shadow-md">
        <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-lg" />

        </div>
      </div>
    </div>
  )
}

