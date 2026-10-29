import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/abuneYosefData';

interface InteractiveQuizProps {
  language: 'am' | 'en';
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({ language }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const isAm = language === 'am';
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isAnswered = selectedAnswers[currentQuestion.id] !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <section id="quiz" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-800 font-sans font-semibold mb-2 flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isAm ? 'የዕውቀት መፈተሻ' : 'Interactive Heritage Quiz'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            {isAm ? 'ስለ አቡነ ዮሴፍና ላስታ ምን ያህል ያውቃሉ?' : 'Test Your Knowledge: Mount Abune Yosef'}
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm">
            {isAm
              ? 'ስለ ተራራው ታሪክ፣ ቅዱሳን ቅርሶችና ብርቅዬ እንስሳት የቀረቡ ጥያቄዎችን ይመልሱ።'
              : 'Assess your insights on the mountain’s elevation, cave basilicas, endangered fauna, and monastic roots.'}
          </p>
        </div>

        {/* Quiz Body */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-2xs">
          {!showResults ? (
            <div>
              {/* Question Progress Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                  {isAm
                    ? `ጥያቄ ${currentQuestionIndex + 1} ከ ${QUIZ_QUESTIONS.length}`
                    : `Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}`}
                </span>
                <span className="text-xs font-mono tabular-nums text-amber-900 font-semibold">
                  {Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900 mb-6 leading-snug">
                {isAm ? currentQuestion.questionAm : currentQuestion.questionEn}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {(isAm ? currentQuestion.optionsAm : currentQuestion.optionsEn).map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;
                  let buttonStyle = 'bg-white border-stone-200 text-stone-800 hover:border-amber-700/60 hover:bg-stone-50';

                  if (isAnswered) {
                    if (isCorrect) {
                      buttonStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium';
                    } else if (isSelected) {
                      buttonStyle = 'bg-red-50 border-red-300 text-red-950 font-medium';
                    } else {
                      buttonStyle = 'bg-white/50 border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${buttonStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswered && isCorrect && (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-red-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Controls */}
              {isAnswered && (
                <div className="mt-6 pt-6 border-t border-stone-200 space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700">
                    <span className="font-bold text-stone-900 block mb-1">
                      {isAm ? 'ማብራሪያ፦' : 'Historical Insight:'}
                    </span>
                    {isAm ? currentQuestion.explanationAm : currentQuestion.explanationEn}
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      {currentQuestionIndex < QUIZ_QUESTIONS.length - 1
                        ? isAm
                          ? 'ቀጣይ ጥያቄ →'
                          : 'Next Question →'
                        : isAm
                          ? 'ውጤቱን ይመልከቱ'
                          : 'See Results'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-900">
                <Award className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold font-serif text-stone-900">
                {isAm ? 'የፈተናው ውጤት' : 'Quiz Completed'}
              </h3>

              <div className="text-4xl font-mono tabular-nums font-bold text-amber-900">
                {score} / {QUIZ_QUESTIONS.length}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                {score === QUIZ_QUESTIONS.length
                  ? isAm
                    ? 'ድንቅ ነው! ስለ አቡነ ዮሴፍ ተራራ እና የላስታ ጥንታዊ ታሪክ ጥልቅ እውቀት አሎት።'
                    : 'Flawless score! You possess an exceptional grasp of Mount Abune Yosef’s history and biodiversity.'
                  : score >= 3
                    ? isAm
                      ? 'በጣም ጥሩ! አብዛኛዎቹን ዋና ዋና ነጥቦች በትክክል ተረድተዋል።'
                      : 'Great job! You answered the primary questions accurately.'
                    : isAm
                      ? 'ጥሩ ሙከራ! ስለ አቡነ ዮሴፍ ገዳማትና የዱር እንስሳት በገጹ ላይ ያሉትን ክፍሎች ዳግም በመመልከት የበለጠ ማወቅ ይችላሉ።'
                      : 'Good effort! Re-explore the heritage and ecology sections to master Lasta’s sacred lore.'}
              </p>

              <div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isAm ? 'እንደገና ይሞክሩ' : 'Retake Quiz'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
