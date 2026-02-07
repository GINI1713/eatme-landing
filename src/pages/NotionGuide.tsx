import { Link } from 'react-router-dom'

function NotionGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🍽️</span>
            <span className="font-bold text-xl">EatMe Coach</span>
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>📝</span> PRO 모드 전용 기능
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notion 연동 설정 가이드
            </h1>
            <p className="text-gray-600 text-lg">
              회원의 식단 기록을 Notion 데이터베이스에 자동으로 저장하세요
            </p>
          </div>

          {/* 예상 소요 시간 */}
          <div className="bg-blue-50 rounded-xl p-4 mb-4 flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="font-semibold text-blue-900">예상 소요 시간: 약 10분</p>
              <p className="text-blue-700 text-sm">Notion 계정이 있다면 바로 시작할 수 있어요</p>
            </div>
          </div>

          {/* 데스크탑 권장 팁 */}
          <div className="bg-gray-100 rounded-xl p-4 mb-8 flex items-center gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <p className="font-semibold text-gray-900">데스크탑(PC/Mac)에서 설정하세요!</p>
              <p className="text-gray-600 text-sm">모바일보다 데스크탑 버전에서 설정하는 게 훨씬 편합니다</p>
            </div>
          </div>

          {/* 완성 후 모습 */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12">
            <h2 className="font-bold text-lg mb-4">✨ 완성 후 이렇게 됩니다</h2>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-gray-600 text-sm mb-4">회원이 식사 사진을 업로드하면, Notion에 자동으로 기록됩니다:</p>
              <img src="/eatme-landing/guide-images/notion-result.png" alt="Notion 데이터베이스 예시" className="rounded-lg w-full" />
            </div>
          </div>

          {/* Step by Step */}
          <div className="space-y-12">
            {/* Step 1 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-amber-500 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-amber-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Notion 워크스페이스에 새 데이터베이스 만들기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">1-1. Notion 열기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">notion.so</a>에 접속해서 로그인하세요.
                    계정이 없다면 무료로 만들 수 있어요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-2. 새 페이지 만들기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    왼쪽 사이드바 하단의 <strong>"+ 새 페이지"</strong> 버튼을 클릭하세요.
                  </p>
                  <img src="/eatme-landing/guide-images/notion-step1-2.png" alt="새 페이지 만들기 버튼" className="rounded-lg w-full border border-gray-200" />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-3. "데이터베이스 - 전체 페이지" 선택</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    페이지 타입 선택 화면에서 <strong>"데이터베이스 - 전체 페이지"</strong>를 선택하세요.
                    (테이블, 보드, 갤러리 중 원하는 형태로 선택 가능)
                  </p>
                  <img src="/eatme-landing/guide-images/notion-step1-3.png" alt="데이터베이스 타입 선택" className="rounded-lg w-full border border-gray-200" />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-4. 데이터베이스 이름 입력</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    데이터베이스 이름을 입력하세요. 예: <strong>"회원 식단 기록"</strong> 또는 <strong>"EatMe 식단 로그"</strong>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-5. 데이터베이스 속성(컬럼) 추가하기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    아래 속성들을 데이터베이스에 추가하세요. <strong>속성 이름을 정확히</strong> 입력해야 합니다!
                  </p>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left font-medium">속성 이름</th>
                          <th className="px-3 py-2 text-left font-medium">타입</th>
                          <th className="px-3 py-2 text-left font-medium">필수</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="px-3 py-2 font-mono text-amber-600">제목</td>
                          <td className="px-3 py-2">Title (기본값)</td>
                          <td className="px-3 py-2">✅ 필수</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-mono text-amber-600">닉네임</td>
                          <td className="px-3 py-2">Text</td>
                          <td className="px-3 py-2">권장</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-mono text-amber-600">촬영 일시</td>
                          <td className="px-3 py-2">Text</td>
                          <td className="px-3 py-2">권장</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-mono text-amber-600">식사 구분</td>
                          <td className="px-3 py-2">Select</td>
                          <td className="px-3 py-2">권장</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-mono text-amber-600">코멘트</td>
                          <td className="px-3 py-2">Text</td>
                          <td className="px-3 py-2">선택</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-mono text-amber-600">사진</td>
                          <td className="px-3 py-2">Files & media</td>
                          <td className="px-3 py-2">권장</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ⚠️ <strong>주의:</strong> 속성 이름이 다르면 데이터가 저장되지 않습니다! 위 표의 이름을 <strong>정확히</strong> 복사해서 사용하세요. <strong>띄어쓰기</strong>도 정확히 맞춰야 합니다! (예: "촬영 일시" ⭕ / "촬영일시" ❌)
                  </p>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-amber-500 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-amber-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Notion Integration (연결 앱) 만들기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">2-1. Notion 개발자 페이지 접속</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <a href="https://www.notion.so/my-integrations" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">www.notion.so/my-integrations</a>에 접속하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-2. "새 API 통합 만들기" 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <strong>"+ 새 API 통합 만들기"</strong> (또는 "+ New integration") 버튼을 클릭하세요.
                  </p>
                  <img src="/eatme-landing/guide-images/notion-step2-2.png" alt="새 통합 만들기 버튼" className="rounded-lg w-full border border-gray-200" />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-3. Integration 정보 입력</h3>
                  <ul className="text-gray-600 text-sm space-y-2 mb-3">
                    <li>• <strong>이름:</strong> "EatMe Coach" (원하는 이름)</li>
                    <li>• <strong>연결된 워크스페이스:</strong> 본인 워크스페이스 선택</li>
                    <li>• <strong>유형:</strong> <span className="text-amber-600 font-semibold">내부 / Internal / Private</span> ← 반드시 이걸로!</li>
                  </ul>
                  <div className="bg-amber-50 rounded-lg p-3 mb-3">
                    <p className="text-amber-800 text-xs">
                      💡 "내부/Internal/Private"는 본인 워크스페이스 전용입니다. "공개/Public"은 선택하지 마세요!
                    </p>
                  </div>
                  <img src="/eatme-landing/guide-images/notion-step2-3.png" alt="Integration 정보 입력" className="rounded-lg w-full border border-gray-200" />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-4. API 키 복사하기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    생성이 완료되면 <strong>"Internal Integration Secret"</strong>이 표시됩니다.
                    <strong>"복사"</strong> 버튼을 눌러 이 키를 복사하세요.
                  </p>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      ⚠️ <strong>중요:</strong> 이 API 키는 비밀번호처럼 안전하게 보관하세요. 다른 사람과 공유하지 마세요!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-amber-500 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-amber-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  데이터베이스에 Integration 연결하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">3-1. 아까 만든 데이터베이스로 이동</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Step 1에서 만든 "회원 식단 기록" 데이터베이스 페이지를 엽니다.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3-2. 오른쪽 상단 "..." 메뉴 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    페이지 오른쪽 상단의 <strong>"⋯" (더보기)</strong> 버튼을 클릭하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3-3. "연결 추가" 선택</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    메뉴에서 <strong>"+ 연결 추가"</strong> (또는 "+ Add connections")를 클릭하고,
                    방금 만든 <strong>"EatMe Coach"</strong> Integration을 선택하세요.
                  </p>
                  <img src="/eatme-landing/guide-images/notion-step3-3.png" alt="연결 추가 메뉴" className="rounded-lg w-full border border-gray-200" />
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    ✅ 이제 EatMe Coach가 이 데이터베이스에 접근할 수 있습니다!
                  </p>
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-amber-500 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-amber-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  데이터베이스 ID 복사하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">4-1. 데이터베이스 페이지 URL 확인</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    데이터베이스 페이지를 열고 브라우저 주소창을 확인하세요. URL이 다음과 같은 형태입니다:
                  </p>
                  <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    https://www.notion.so/yourworkspace/<span className="text-yellow-400 font-bold">abc123def456...</span>?v=...
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4-2. 데이터베이스 ID 복사</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    URL에서 <strong>노란색으로 표시된 부분</strong>이 데이터베이스 ID입니다.
                    <strong>물음표(?) 앞까지</strong>의 32자리 문자열을 복사하세요.
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      💡 <strong>팁:</strong> 대시(-)가 포함되어 있어도 괜찮습니다. EatMe가 자동으로 처리합니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 5 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-amber-500 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-amber-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  EatMe Coach 앱에서 연결하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">5-1. EatMe 앱 열기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <a href="https://eatme.co.kr" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">eatme.co.kr</a>에 접속하여 로그인하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">5-2. 설정 페이지 이동</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    오른쪽 상단의 <strong>프로필 아이콘</strong>을 탭하여 설정 페이지로 이동하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">5-3. "자동화 연동" 섹션 찾기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    설정 페이지에서 스크롤하여 <strong>"자동화 연동"</strong> 섹션을 찾으세요.
                  </p>
                  <img src="/eatme-landing/guide-images/notion-step5-3.png" alt="자동화 연동 섹션" className="rounded-lg w-full border border-gray-200" />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">5-4. Notion 연동 정보 입력</h3>
                  <ul className="text-gray-600 text-sm space-y-2 mb-3">
                    <li>• <strong>Notion API 키:</strong> Step 2에서 복사한 Integration Secret</li>
                    <li>• <strong>데이터베이스 ID:</strong> Step 4에서 복사한 ID</li>
                  </ul>
                  <p className="text-gray-600 text-sm">
                    입력 후 <strong>"연결하기"</strong> 버튼을 누르세요.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    🎉 <strong>완료!</strong> 이제 연결된 회원이 식사를 기록하면 자동으로 Notion에 저장됩니다.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 전송되는 데이터 */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-4">📋 Notion에 저장되는 데이터</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">기본 정보</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 회원 이름 (닉네임)</li>
                  <li>• 기록 날짜/시간</li>
                  <li>• 식사 타입 (아침/점심/저녁/간식)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">AI 분석 결과</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 음식명</li>
                  <li>• 추정 칼로리</li>
                  <li>• 탄수화물/단백질/지방</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">추가 정보</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 기분 이모지</li>
                  <li>• 사용자 메모</li>
                  <li>• AI 피드백 요약</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">미디어</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 음식 사진 URL</li>
                  <li>• 원본 게시물 링크</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 문제 해결 */}
          <div className="mt-8 bg-red-50 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-4 text-red-900">🔧 문제가 발생했나요?</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-red-800">Q. "연결 실패" 오류가 발생해요</p>
                <p className="text-red-700">→ API 키와 데이터베이스 ID가 올바른지 다시 확인해주세요. 공백이 포함되지 않았는지도 확인하세요.</p>
              </div>
              <div>
                <p className="font-semibold text-red-800">Q. 데이터가 저장되지 않아요</p>
                <p className="text-red-700">→ Step 3에서 데이터베이스에 Integration 연결을 완료했는지 확인해주세요.</p>
              </div>
              <div>
                <p className="font-semibold text-red-800">Q. 계속 문제가 있어요</p>
                <p className="text-red-700">→ <a href="mailto:gini@yulimkm.com" className="underline">gini@yulimkm.com</a>로 문의해주세요.</p>
              </div>
            </div>
          </div>

          {/* 다른 가이드 */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">다른 서비스도 연동해보세요</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/guide/slack" className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full transition-colors">
                <span>💬</span> Slack 연동 가이드
              </Link>
              <Link to="/guide/sheets" className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full transition-colors">
                <span>📊</span> Google Sheets 연동 가이드
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-100 text-center text-gray-500 text-sm">
        <p>© 2026 EatMe Coach. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default NotionGuide
