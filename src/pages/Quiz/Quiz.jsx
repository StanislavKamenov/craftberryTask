import React, { useState, useMemo, useCallback } from 'react';
import questions from '../../utils/questions';
import { useNavigate } from 'react-router';
import './Quiz.css';

const Quiz = () => {
    const navigate = useNavigate();

    const allQuestions = useMemo(() => questions(), []);
    const totalStages = 5;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const answeredQuestions = useMemo(
        () => Object.keys(selectedAnswers).length,
        [selectedAnswers]
    );

    const progressStage = useMemo(
        () => Math.ceil((answeredQuestions / allQuestions.length) * totalStages),
        [answeredQuestions, allQuestions.length, totalStages]
    );

    const currentQuestion = allQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === allQuestions.length - 1;
    const lastQuestionText = isLastQuestion ? 'Discover your results' : 'Next Question';

    const handleNext = useCallback(() => {
        if (isLastQuestion) {
            navigate('/results');
        } else {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    }, [isLastQuestion, navigate]);

    const handleBack = useCallback(() => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }, []);

    const handleOptionChange = useCallback(
        (event) => {
            const Option = event.target.value;
            setSelectedAnswers((prev) => ({
                ...prev,
                [currentQuestionIndex]: Option,
            }));
        },
        [currentQuestionIndex]
    );

    return (
        <div>
            <div className='questionsHolder' key={currentQuestionIndex}>
                <h2>{currentQuestion.question}</h2>
                <div className='allQuestions'>
                    {currentQuestion.options.map(({ Option, text }) => (
                        <label
                            key={`${Option}-${currentQuestionIndex}`}
                            className={selectedAnswers[currentQuestionIndex] === Option ? 'active' : ''}
                        >
                            <input
                                type="radio"
                                name={`question-${currentQuestionIndex}`}
                                value={Option}
                                checked={selectedAnswers[currentQuestionIndex] === Option}
                                onChange={handleOptionChange}
                            />
                            <span style={{ marginRight: '8px' }}>{Option}.</span>
                            <span>{text}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className='buttons'>
                <button
                    className='backQuestion'
                    onClick={handleBack}
                    disabled={currentQuestionIndex === 0}
                >
                    Back
                </button>
                <button
                    className='nextQuestion'
                    onClick={handleNext}
                    disabled={!selectedAnswers[currentQuestionIndex]}
                >
                    {lastQuestionText}
                </button>
            </div>

            <div className="progress-circle-holder">
                <svg className="progress-circle" width="100" height="100" viewBox="0 0 100 100">
                    <circle
                        className="progress-background"
                        cx="50" cy="50" r="45"
                        fill="white"
                        stroke="#AADDF3"
                        strokeWidth="6"
                    />
                    <circle
                        className="progress"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="blue"
                        strokeWidth="10"
                        strokeDasharray="282"
                        strokeDashoffset={(1 - progressStage / totalStages) * 282}
                    />
                    <text
                        id="progress-text"
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="20"
                        fill="#000000"
                    >
                        {progressStage}/{totalStages}
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default Quiz;
