import { Link } from 'react-router-dom'

function SlackGuide() {
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
              <span>💬</span> PRO 모드 전용 기능
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Slack 연동 설정 가이드
            </h1>
            <p className="text-gray-600 text-lg">
              회원의 식단 기록을 Slack 채널로 실시간 알림받으세요
            </p>
          </div>

          {/* 예상 소요 시간 */}
          <div className="bg-purple-50 rounded-xl p-4 mb-4 flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="font-semibold text-purple-900">예상 소요 시간: 약 5분</p>
              <p className="text-purple-700 text-sm">Slack 워크스페이스만 있으면 됩니다</p>
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
              <p className="text-gray-600 text-sm mb-4">회원이 식사 사진을 올리면, Slack에 실시간으로 알림이 옵니다:</p>
              {/* Slack 메시지 미리보기 */}
              <div className="bg-[#1a1d21] rounded-lg p-4 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    E
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">EatMe Coach</span>
                      <span className="text-gray-400 text-xs">앱 오후 12:30</span>
                    </div>
                    <div className="bg-[#222529] rounded-lg p-3 border-l-4 border-amber-500">
                      <p className="font-semibold text-sm mb-2">🍽️ 새 식단 기록</p>
                      <p className="text-gray-300 text-sm"><strong>회원:</strong> 김철수</p>
                      <p className="text-gray-300 text-sm"><strong>음식:</strong> 닭가슴살 샐러드</p>
                      <p className="text-gray-300 text-sm"><strong>칼로리:</strong> 약 350kcal</p>
                      <p className="text-gray-300 text-sm"><strong>기분:</strong> 😊 좋음</p>
                      <div className="mt-2 bg-gray-700 rounded h-32 flex items-center justify-center text-gray-400 text-xs">
                        [음식 사진 썸네일]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step by Step */}
          <div className="space-y-12">
            {/* Step 1 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Slack 채널에 Webhook 추가하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <p className="text-green-800 text-sm">
                    ✨ <strong>가장 간단한 방법!</strong> Slack 앱을 직접 만들 필요 없이, Slack에서 제공하는 Incoming Webhooks를 바로 사용합니다.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-1. Slack 워크스페이스 열기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    데스크탑 Slack 앱 또는 <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">slack.com</a>에서 워크스페이스에 로그인하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-2. 알림받을 채널 선택</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    식단 알림을 받을 채널로 이동하세요. 새 채널을 만들어도 됩니다. (예: <strong>#식단관리</strong>)
                  </p>
                  <img
                    src={import.meta.env.BASE_URL + "guide-images/slack-step1-2.png"}
                    alt="채널 선택"
                    className="rounded-lg border border-gray-200 w-full"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-3. 채널 설정 열기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    채널 이름을 클릭 → 상단 탭에서 <strong>"통합"</strong> (또는 "Integrations") 클릭
                  </p>
                  <img
                    src={import.meta.env.BASE_URL + "guide-images/slack-step1-3.png"}
                    alt="채널 설정 - 통합 탭"
                    className="rounded-lg border border-gray-200 w-full"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-4. "앱 추가" 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <strong>"앱 추가"</strong> (Add an App) 버튼을 클릭하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-5. "Incoming WebHooks" 검색 및 추가</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    검색창에 <strong>"Incoming WebHooks"</strong>를 입력하고, 해당 앱을 <strong>"추가"</strong>하세요.
                  </p>
                  <img
                    src={import.meta.env.BASE_URL + "guide-images/slack-step1-5.png"}
                    alt="Incoming WebHooks 검색"
                    className="rounded-lg border border-gray-200 w-full mb-3"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      💡 <strong>참고:</strong> "Incoming WebHooks"는 Slack에서 공식 제공하는 앱입니다. 별도 설치 없이 바로 사용 가능해요!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Webhook URL 생성하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">2-1. Slack 앱 디렉토리 페이지 열림</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Incoming WebHooks 앱을 추가하면 Slack 앱 디렉토리 페이지가 열립니다.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-2. "Add to Slack" 또는 "Slack에 추가" 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <strong>"Add to Slack"</strong> 버튼을 클릭하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-3. 채널 선택</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    알림을 받을 채널을 드롭다운에서 선택하고 <strong>"Add Incoming WebHooks integration"</strong>을 클릭하세요.
                  </p>
                  <img
                    src={import.meta.env.BASE_URL + "guide-images/slack-step2-3.png"}
                    alt="채널 선택 드롭다운"
                    className="rounded-lg border border-gray-200 w-full"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-4. Webhook URL 확인</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    설정 페이지에서 <strong>"Webhook URL"</strong>을 찾으세요. 아래와 같은 형식입니다:
                  </p>
                  <img
                    src={import.meta.env.BASE_URL + "guide-images/slack-step2-4.png"}
                    alt="Webhook URL 위치"
                    className="rounded-lg border border-gray-200 w-full mb-3"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXX
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Webhook URL 복사하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">3-1. Webhook URL 확인</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    설정 페이지에서 <strong>"Webhook URL"</strong>을 찾아서 복사하세요.
                  </p>
                  <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXX
                  </div>
                </div>

                <div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      ⚠️ <strong>중요:</strong> 이 URL은 비밀번호처럼 취급하세요! 이 URL을 아는 사람은 누구나 채널에 메시지를 보낼 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  EatMe Coach 앱에서 연결하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">4-1. EatMe 앱 열기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <a href="https://eatme.co.kr" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">eatme.co.kr</a>에 접속하여 로그인하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4-2. 설정 → 코치 연동 설정</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    프로필 아이콘 → 설정 → <strong>"코치 연동 설정"</strong> 섹션으로 이동하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4-3. Slack Webhook URL 입력</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Slack 연동 입력란에 복사한 <strong>Webhook URL</strong>을 붙여넣고 <strong>"저장"</strong>을 누르세요.
                  </p>
                  <img
                    src={import.meta.env.BASE_URL + "guide-images/slack-step4-3.png"}
                    alt="Slack URL 입력"
                    className="rounded-lg border border-gray-200 w-full"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    🎉 <strong>완료!</strong> 이제 연결된 회원이 식사를 기록하면 Slack 채널에 알림이 옵니다.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 알림 내용 */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-4">📋 Slack 알림에 포함되는 정보</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 회원 이름 (닉네임)</li>
                  <li>✓ 기록 시간</li>
                  <li>✓ 음식명</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 추정 칼로리</li>
                  <li>✓ 기분 이모지</li>
                  <li>✓ 앱 바로가기 링크</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 문제 해결 */}
          <div className="mt-8 bg-red-50 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-4 text-red-900">🔧 문제가 발생했나요?</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-red-800">Q. 알림이 오지 않아요</p>
                <p className="text-red-700">→ Webhook URL이 올바른지 확인하세요. "https://hooks.slack.com/services/"로 시작해야 합니다.</p>
              </div>
              <div>
                <p className="font-semibold text-red-800">Q. 채널에 메시지가 안 보여요</p>
                <p className="text-red-700">→ Webhook을 추가할 때 선택한 채널이 맞는지 확인하세요.</p>
              </div>
            </div>
          </div>

          {/* 다른 가이드 */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">다른 서비스도 연동해보세요</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/guide/notion" className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full transition-colors">
                <span>📝</span> Notion 연동 가이드
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

export default SlackGuide
