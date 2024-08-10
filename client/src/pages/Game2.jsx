import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function Game2() {
  const questions = [
    {
      questionText: "What is the primary goal of disaster preparedness?",
      answerOptions: [
        {
          answerText: "To increase panic before a disaster strikes",
          isCorrect: false,
        },
        {
          answerText: "To prevent all disasters from occurring",
          isCorrect: false,
        },
        {
          answerText:
            "To minimize the impact of disasters through planning and training",
          isCorrect: true,
        },
        {
          answerText: "To ensure financial profit from disasters",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Which type of disaster is classified as a natural disaster?",
      answerOptions: [
        { answerText: "Terrorist attacks", isCorrect: false },
        { answerText: "Industrial accidents", isCorrect: false },
        { answerText: "Earthquakes", isCorrect: true },
        { answerText: "Chemical spills", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the purpose of an emergency operations center (EOC)?",
      answerOptions: [
        { answerText: "To sell emergency supplies", isCorrect: false },
        {
          answerText: "To coordinate and manage disaster response efforts",
          isCorrect: true,
        },
        { answerText: "To house evacuees during a disaster", isCorrect: false },
        {
          answerText: "To conduct post-disaster recovery only",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'What does the term "evacuation route" refer to?',
      answerOptions: [
        {
          answerText:
            "A path used to escape from a dangerous area during a disaster",
          isCorrect: true,
        },
        {
          answerText: "A location where people gather during festivals",
          isCorrect: false,
        },
        {
          answerText: "A method for transporting goods during a disaster",
          isCorrect: false,
        },
        { answerText: "A type of emergency vehicle", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is an example of a man-made disaster?",
      answerOptions: [
        { answerText: "Hurricane", isCorrect: false },
        { answerText: "Flood", isCorrect: false },
        { answerText: "Nuclear meltdown", isCorrect: true },
        { answerText: "Earthquake", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the most effective way to protect yourself during an earthquake?",
      answerOptions: [
        { answerText: "Run outside immediately", isCorrect: false },
        { answerText: "Stand near a window", isCorrect: false },
        { answerText: "Drop, Cover, and Hold On", isCorrect: true },
        { answerText: "Hide under a tree", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which organization typically leads disaster response efforts in the United States?",
      answerOptions: [
        { answerText: "The United Nations", isCorrect: false },
        {
          answerText: "The Centers for Disease Control and Prevention (CDC)",
          isCorrect: false,
        },
        {
          answerText: "The Federal Emergency Management Agency (FEMA)",
          isCorrect: true,
        },
        { answerText: "The American Red Cross", isCorrect: false },
      ],
    },
    {
      questionText: "What should you do if you receive a flood warning?",
      answerOptions: [
        { answerText: "Move to higher ground immediately", isCorrect: true },
        {
          answerText:
            "Wait until the floodwaters reach your home before acting",
          isCorrect: false,
        },
        { answerText: "Try to drive through floodwaters", isCorrect: false },
        { answerText: "Ignore the warning", isCorrect: false },
      ],
    },
    {
      questionText: "What is the best practice for storing emergency supplies?",
      answerOptions: [
        {
          answerText: "Keep supplies in a locked cabinet, out of reach",
          isCorrect: false,
        },
        {
          answerText:
            "Store supplies in an easily accessible location known to all family members",
          isCorrect: true,
        },
        {
          answerText: "Only buy supplies during an emergency",
          isCorrect: false,
        },
        {
          answerText: "Store supplies in a place where you might forget them",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What is a common effect of prolonged drought?",
      answerOptions: [
        { answerText: "Flooding", isCorrect: false },
        { answerText: "Landslides", isCorrect: false },
        { answerText: "Water scarcity", isCorrect: true },
        { answerText: "Increased humidity", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handlePlayAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {showScore ? (
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              You scored {score} out of {questions.length}
            </div>
            <Button onClick={handlePlayAgain}>Play Again</Button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="text-xl font-semibold mb-4">
                {questions[currentQuestion].questionText}
              </div>
              <div className="flex flex-col gap-5">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <Button
                      variant="outline"
                      key={index}
                      onClick={() =>
                        handleAnswerButtonClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </Button>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Game2;
