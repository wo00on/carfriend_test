import React, { useState } from "react";

const QnaPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: "엔진오일은 언제 교체해야 하나요?", answer: "일반적으로 5,000~10,000km마다 교체하는 것이 좋습니다." },
    { id: 2, question: "타이어 공기압은 어떻게 체크하나요?", answer: "정비소에서 측정하거나, 가정용 공기압 측정기를 이용할 수 있습니다." },
    { id: 3, question: "배터리는 얼마나 자주 교체해야 하나요?", answer: "일반적으로 3~5년마다 교체하는 것이 좋으며, 시동이 약해지면 점검이 필요합니다." },
    { id: 4, question: "브레이크 패드는 언제 교체해야 하나요?", answer: "보통 40,000~50,000km마다 교체하며, 소음이 나거나 제동력이 약해지면 점검이 필요합니다." },
    { id: 5, question: "에어컨 필터 교체 주기는?", answer: "6개월~1년에 한 번 교체하는 것이 좋습니다." },
    { id: 6, question: "부동액 교체 주기는?", answer: "보통 2년~3년에 한 번 교체하며, 색이 변했거나 불순물이 많으면 교체해야 합니다." },
    { id: 7, question: "차량 소음이 심할 때 원인은?", answer: "엔진오일 부족, 베어링 문제, 배기 시스템 이상 등 다양한 원인이 있을 수 있어 정비소 방문이 필요합니다." },
    { id: 8, question: "와이퍼는 언제 교체해야 하나요?", answer: "보통 6개월~1년에 한 번 교체하며, 닦임 상태가 고르지 않거나 소음이 나면 교체해야 합니다." },
    { id: 9, question: "차량 시동이 걸리지 않을 때 해결 방법은?", answer: "배터리 방전, 연료 부족, 점화 플러그 문제일 수 있으므로 점검이 필요합니다." },
    { id: 10, question: "연비를 높이는 방법은?", answer: "타이어 공기압 유지, 경제적인 속도 유지, 불필요한 짐 제거, 정기적인 엔진 점검이 도움이 됩니다." },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleSelectQuestion = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim() === "") return;
    const newEntry = {
      id: questions.length + 1,
      question: newQuestion,
      answer: "답변 준비 중입니다.",
    };
    setQuestions([...questions, newEntry]);
    setNewQuestion("");
  };

  return (
    <div className="relative p-8 max-w-4xl mx-auto min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-blue-200">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <h1 className="relative text-3xl font-bold mb-6 text-center text-gray-800">Q&A</h1>
      <div className="relative flex flex-col gap-4 w-full">
        {questions.map((q) => (
          <div
            key={q.id}
            className="p-5 bg-white shadow-lg rounded-lg cursor-pointer transition hover:shadow-xl border border-gray-200 w-full max-w-2xl"
            onClick={() => handleSelectQuestion(q.id)}
          >
            <h3 className="font-bold text-lg text-gray-900">{q.question}</h3>
            {selectedQuestion === q.id && <p className="mt-2 text-gray-600">{q.answer}</p>}
          </div>
        ))}
      </div>
      <div className="relative mt-6 p-4 border rounded-lg bg-white shadow-md w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-2 text-gray-800">질문하기</h2>
        <input
          type="text"
          className="w-full p-2 border rounded-lg mb-2"
          placeholder="궁금한 점을 입력하세요."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button
          onClick={handleAddQuestion}
          className="w-full p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
        >
          질문 등록
        </button>
      </div>
    </div>
  );
};

export default QnaPage;
