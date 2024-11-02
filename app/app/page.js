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
            <label className="label">Theme:</label>
            <select
            className="select select-bordered"
            value={theme}
            onChange={handleThemeChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="cupcake">Cupcake</option>
              <option value="bumblebee">Bumblebee</option>
              <option value="emerald">Emerald</option>
              <option value="corporate">Corporate</option>
              <option value="synthwave">Synthwave</option>
              <option value="retro">Retro</option>
              <option value="cyberpunk">Cyberpunk</option>
              <option value="valentine">Valentine</option>
              <option value="halloween">Halloween</option>
              <option value="garden">Garden</option>
              <option value="forest">Forest</option>
              <option value="aqua">Aqua</option>
              <option value="lofi">Lofi</option>
              <option value="pastel">Pastel</option>
              <option value="fantasy">Fantasy</option>
              <option value="wireframe">Wireframe</option>
              <option value="black">Black</option>
              <option value="luxury">Luxury</option>
              <option value="dracula">Dracula</option>
            </select>
        </div>
        <div className="flex space-x-2">
          {isLoggedIn ? (
            <button className="btn btn-warning" onClick={handleLogout}>
              handleLogout
            </button>
          ) : (
            <button className="btn btn-accent" onClick={toggleModal}>
              Signup/Login
            </button>
          )}
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl mt-10">
        <div className="card-body animate-fade-in">
          <h2 className="card-title text-center">Roots, Prefixes, and Suffixes</h2>
          {isLoading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : quiz ? (
            <div>
              <p className="mb-4 font-bold text-lg text-center">{quiz.question}</p>
              <div className="form-control space-y-2">
                {quiz.answers.map((answer, index) => (
                    <label
                        key={index}
                        className={`label cursor-pointer rounded-lg p-3 transition-all duration-300 ${
                            isAnswered
                                ? answer === quiz.correct_answer
                                    ? "bg-green-100 text-green-700" 
                                    : selectedAnswer === answer
                                    ? "bg-red-100 text-red-700"  
                                    : "bg-base-200"
                                : selectedAnswer === answer
                                ? "bg-blue-200 text-blue-700"   
                                : "bg-base-200 hover:bg-base-300"
                        }`}
                    >
                        <input
                            type="radio"
                            name="quiz"
                            className="radio radio-primary hidden"
                            checked={selectedAnswer === answer}
                            onChange={() => handleAnswerSelection(answer)}
                            disabled={isAnswered}
                        />
                        <span className="label-text ml-2">{answer}</span>
                    </label>
                ))}
            </div>
              <button
                className="btn btn-accent mt-4 w-full"
                onClick={handleSubmit}
                disabled={isAnswered}
              >
                Submit
              </button>
              {result && (
                <div className="mt-4 text-lg font-bold text-center animate-fade-in">
                  <p
                    className={
                      result === "Correct!" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {result}
                  </p>
                  {isAnswered && (
                    <button
                      className="btn btn-primary mt-4 w-full"
                      onClick={handleNextQuestion}
                    >
                      Next Question
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <p>Failed to load quiz. Please try again later.</p>
          )}
        </div>
      </div>
    </div>
  )
}

