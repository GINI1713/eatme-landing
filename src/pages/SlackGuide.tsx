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
                  Slack 앱 생성하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">1-1. Slack API 페이지 접속</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <a href="https://api.slack.com/apps" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">api.slack.com/apps</a>에 접속하세요.
                    Slack 계정으로 로그인이 필요합니다.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-2. "Create New App" 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    오른쪽 상단의 <strong>"Create New App"</strong> 버튼을 클릭하세요.
                  </p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <p className="text-sm">Create New App 버튼 위치</p>
                      <p className="text-xs text-gray-400 mt-1">guide-images/slack-step1-2.png</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-3. "From scratch" 선택</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    팝업에서 <strong>"From scratch"</strong>를 선택하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-4. 앱 정보 입력</h3>
                  <ul className="text-gray-600 text-sm space-y-2 mb-3">
                    <li>• <strong>App Name:</strong> "EatMe Coach" (원하는 이름)</li>
                    <li>• <strong>Workspace:</strong> 알림을 받을 워크스페이스 선택</li>
                  </ul>
                  <p className="text-gray-600 text-sm">
                    입력 후 <strong>"Create App"</strong> 버튼을 누르세요.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Incoming Webhook 활성화하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">2-1. 왼쪽 메뉴에서 "Incoming Webhooks" 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    앱 설정 페이지 왼쪽 사이드바에서 <strong>"Incoming Webhooks"</strong>를 찾아 클릭하세요.
                  </p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <p className="text-sm">Incoming Webhooks 메뉴 위치</p>
                      <p className="text-xs text-gray-400 mt-1">guide-images/slack-step2-1.png</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-2. Webhook 활성화</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    상단의 <strong>"Activate Incoming Webhooks"</strong> 토글을 <strong>ON</strong>으로 변경하세요.
                  </p>
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <p className="text-sm">토글 ON 상태</p>
                      <p className="text-xs text-gray-400 mt-1">guide-images/slack-step2-2.png</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-3. "Add New Webhook to Workspace" 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    페이지 하단으로 스크롤하여 <strong>"Add New Webhook to Workspace"</strong> 버튼을 클릭하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-4. 알림받을 채널 선택</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    식단 알림을 받을 채널을 선택하세요. 예: <strong>#식단관리</strong> 또는 <strong>#회원-식단</strong>
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      💡 <strong>팁:</strong> 새 채널을 만들어서 식단 알림 전용으로 사용하면 정리가 편해요!
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-5. "허용" (Allow) 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    권한 요청 화면에서 <strong>"허용"</strong> 버튼을 누르세요.
                  </p>
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
                    채널 선택 후 페이지로 돌아오면, <strong>"Webhook URLs for Your Workspace"</strong> 섹션에
                    새 URL이 추가되어 있습니다.
                  </p>
                  <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXX
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3-2. "Copy" 버튼으로 URL 복사</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    URL 오른쪽의 <strong>"Copy"</strong> 버튼을 클릭하여 복사하세요.
                  </p>
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
                  <h3 className="font-semibold mb-2">4-2. 설정 → 자동화 연동</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    프로필 아이콘 → 설정 → <strong>"자동화 연동"</strong> 섹션으로 이동하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4-3. Slack Webhook URL 입력</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Slack 연동 입력란에 복사한 <strong>Webhook URL</strong>을 붙여넣고 <strong>"연결하기"</strong>를 누르세요.
                  </p>
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
