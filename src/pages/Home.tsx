import { Link } from 'react-router-dom'

function HomePage() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍽️</span>
            <span className="font-bold text-xl">EatMe Coach</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('features')} className="text-gray-600 hover:text-gray-900">주요 기능</button>
            <button onClick={() => scrollTo('use-cases')} className="text-gray-600 hover:text-gray-900">사용 사례</button>
            <button onClick={() => scrollTo('how-to-use')} className="text-gray-600 hover:text-gray-900">사용법</button>
            <button onClick={() => scrollTo('pricing')} className="text-gray-600 hover:text-gray-900">요금제</button>
            <button onClick={() => scrollTo('faq')} className="text-gray-600 hover:text-gray-900">FAQ</button>
          </div>
          <a
            href="https://eatme.co.kr"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            시작하기
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            사진 한 장으로 시작하는<br />
            <span className="text-amber-500">AI 맞춤 식단 관리</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            AI가 분석하고, 건강 앱과 연동하고, 코치가 함께하는<br />
            올인원 식단 케어 플랫폼
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="https://apps.apple.com/app/eatme-coach/id6742801490" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-7 py-3.5 rounded-xl text-base font-medium transition-colors">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none opacity-80">Download on the</div>
                <div className="text-lg leading-tight font-semibold">App Store</div>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=kr.co.eatme.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-7 py-3.5 rounded-xl text-base font-medium transition-colors">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none opacity-80">GET IT ON</div>
                <div className="text-lg leading-tight font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          <p className="text-sm text-gray-400 mb-16">웹에서도 사용 가능: <a href="https://eatme.co.kr" className="text-amber-500 underline">eatme.co.kr</a></p>

          {/* Hero Image Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">Y</div>
                  <div>
                    <p className="font-semibold text-sm">Dr. Y</p>
                    <p className="text-xs text-gray-500">AI 영양 코치</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">Y</div>
                    <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-2 text-sm">
                      오늘 점심 잘 드셨네요 🥗 Apple Health 데이터를 보니<br/>오전에 5,200보 걸으셨더라고요. 단백질을 보충하면 좋겠어요.
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-amber-500 text-white rounded-2xl rounded-br-md px-4 py-2 text-sm">
                      저녁에 뭘 먹으면 좋을까요?
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">Y</div>
                    <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-2 text-sm">
                      활동량 대비 단백질이 부족해요.<br/>닭가슴살 샐러드나 두부 스테이크는 어떠세요? 💪
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✨ 이런 것들이 가능해요
            </h2>
            <p className="text-gray-600 text-lg">사진 한 장에서 시작해 건강 전체를 관리하세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* AI 분석 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="text-lg font-bold mb-2">AI 식단 분석</h3>
              <p className="text-gray-600 text-sm">음식 사진을 찍으면 Google Gemini AI가 자동으로 영양소, 칼로리, 건강 점수를 분석합니다. 포장 식품은 라벨도 읽어요.</p>
            </div>

            {/* 건강 연동 */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-bold mb-2">건강 앱 연동</h3>
              <p className="text-gray-600 text-sm">Apple Health, Google Fit과 자동 연동. 걸음수, 심박수, 수면, 혈당, 체중 데이터를 식단 분석에 함께 활용합니다.</p>
            </div>

            {/* AI 챗봇 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-bold mb-2">Dr. Y AI 코치</h3>
              <p className="text-gray-600 text-sm">24시간 대화할 수 있는 AI 영양 코치. 내 식단과 건강 데이터를 기반으로 맞춤 조언을 드려요.</p>
            </div>

            {/* 리포트 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold mb-2">일일·주간·월간 리포트</h3>
              <p className="text-gray-600 text-sm">AI가 매일, 매주, 매월 식습관 패턴을 분석하고 개선점을 알려줘요. 건강 데이터와 함께 종합 리포트를 생성합니다.</p>
            </div>

            {/* 업적 시스템 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold mb-2">업적 & 도전</h3>
              <p className="text-gray-600 text-sm">연속 기록, 건강 식단 챌린지 등 다양한 업적을 달성하며 동기 부여를 받으세요. 재미있게 건강을 관리해요.</p>
            </div>

            {/* 코치 연결 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold mb-2">코치 & 가족 연결</h3>
              <p className="text-gray-600 text-sm">트레이너, 가족, 의료진과 연결해 식단을 함께 관리하세요. 실시간 알림과 코칭 피드백을 주고받을 수 있어요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎯 이런 분들이 쓰고 있어요
            </h2>
            <p className="text-gray-600 text-lg">각자의 방식으로, 각자의 목표를 위해</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-2">헬스 트레이너 & 다이어트 코치</h3>
              <p className="text-amber-600 font-medium mb-4">"회원 30명 식단을 일일이 카톡으로 받던 시절은 끝"</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  회원이 사진 찍으면 → 코치에게 실시간 푸시 알림
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  AI가 1차 분석 → 코치는 코멘트만 달면 끝
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  회원별 주간 리포트 자동 생성
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  MCP/API 연동으로 AI가 회원 데이터 직접 분석
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold mb-2">멀리 사는 자녀 걱정되는 부모님</h3>
              <p className="text-amber-600 font-medium mb-4">"우리 아들 서울 가서 뭘 먹고 사는지..."</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  자녀가 밥 먹을 때 사진만 찍으면
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  부모님 앱에 실시간 푸시 알림
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  AI가 "요즘 야식이 좀 많아요" 알려줌
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  직접 잔소리 안 해도 됨 😌
                </li>
              </ul>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">환자의 식단·건강 데이터가 필요한 의료진</h3>
              <p className="text-amber-600 font-medium mb-4">"진료와 진료 사이, 환자가 뭘 먹고 어떻게 지내는지 알고 싶었어요"</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  환자가 매 끼니 사진 기록 → 의료진에게 자동 공유
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  혈당·심박수·수면·체중 등 건강 데이터와 식단을 종합 분석
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  다음 진료 때 실제 데이터 기반 상담 가능
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  CSV 내보내기 / Google Sheets 연동으로 기록 관리
                </li>
              </ul>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold mb-2">혼자 다이어트하는 직장인</h3>
              <p className="text-amber-600 font-medium mb-4">"매번 작심삼일... 누가 좀 봐주면 좋겠다"</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  사진 찍으면 AI가 바로 피드백
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  Apple Health/Google Fit 연동으로 운동량도 함께 분석
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  업적 시스템으로 꾸준한 동기 부여
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  Dr. Y 챗봇이 24시간 응원 & 맞춤 조언
                </li>
              </ul>
            </div>

            {/* Use Case 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-bold mb-2">어린이집 / 유치원 급식 관리</h3>
              <p className="text-amber-600 font-medium mb-4">"우리 아이 급식 뭐 먹었는지 사진으로 보고 싶어요"</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  선생님이 급식 사진 한 장 → 학부모 전체 공유
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  AI가 영양 밸런스 체크
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  알러지 식품 감지 알림
                </li>
              </ul>
            </div>

            {/* Use Case 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">요양원 / 실버케어</h3>
              <p className="text-amber-600 font-medium mb-4">"어르신들 식사량 체크가 중요한데..."</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  요양보호사가 식사 사진 기록
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  가족에게 자동 공유
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  식사량 변화 추이 모니터링
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📱 이렇게 사용해요
            </h2>
            <p className="text-gray-600 text-lg">앱 설치 후 3분이면 시작할 수 있어요</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">앱 설치</h3>
              <p className="text-gray-600 text-sm">App Store 또는 Google Play에서 "이트미 코치"를 다운로드하세요</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">간편 회원가입</h3>
              <p className="text-gray-600 text-sm">Apple, 카카오, 구글 중 편한 방법으로 3초 만에 시작</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">사진 찍기</h3>
              <p className="text-gray-600 text-sm">음식 사진을 찍으면 AI가 자동 분석! 건강 앱 연동도 가능</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">연결하기</h3>
              <p className="text-gray-600 text-sm">코치/가족과 커넥트로 연결하면 식단 공유 시작 (선택)</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">🔗 코치 연결 방법</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-amber-600">코치인 경우</h4>
                <ol className="text-gray-600 space-y-2 text-sm">
                  <li>1. 커넥트 탭에서 초대 코드를 생성하세요</li>
                  <li>2. 링크를 회원에게 공유하면 끝!</li>
                  <li>3. 회원이 링크를 통해 가입하면 자동 연결</li>
                  <li>4. 또는 닉네임/이메일로 직접 검색해서 요청 보내기</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-amber-600">회원인 경우</h4>
                <ol className="text-gray-600 space-y-2 text-sm">
                  <li>1. 코치에게 받은 초대 링크 클릭</li>
                  <li>2. 앱 설치 후 회원가입하면 자동 연결!</li>
                  <li>3. 또는 코치의 연결 요청 알림을 수락</li>
                </ol>
              </div>
            </div>
          </div>

          {/* 건강 앱 연동 */}
          <div className="mt-8 bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-2 text-center">❤️ 건강 앱 연동</h3>
            <p className="text-gray-500 text-sm text-center mb-8">Apple Health · Google Fit 데이터를 식단 분석에 활용하세요</p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🩸</div>
                <h4 className="font-semibold text-sm mb-1">혈당 추적</h4>
                <p className="text-gray-500 text-xs">식후 혈당 변화를 식단과 함께 분석</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">😴</div>
                <h4 className="font-semibold text-sm mb-1">수면 분석</h4>
                <p className="text-gray-500 text-xs">수면 패턴이 식습관에 미치는 영향 파악</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🏃</div>
                <h4 className="font-semibold text-sm mb-1">활동량 연동</h4>
                <p className="text-gray-500 text-xs">걸음수, 활동 칼로리, 심박수 데이터 통합</p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600">
                📱 설정 → 건강 앱 연동에서 한 번만 연결하면, AI가 건강 데이터를 종합해서 분석해요
              </p>
            </div>
          </div>

          {/* 자동화 연동 가이드 */}
          <div className="mt-8 bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-2 text-center">⚡ PRO 모드: 자동화 연동</h3>
            <p className="text-gray-500 text-sm text-center mb-8">회원이 식사 사진을 올리면, 코치의 외부 서비스로 자동 전송됩니다</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Notion */}
              <Link to="/guide/notion" className="block bg-gray-50 rounded-xl p-5 hover:bg-amber-50 hover:border-amber-200 border-2 border-transparent transition-all group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📝</span>
                  <h4 className="font-bold">Notion</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">식단 기록을 Notion DB에 자동 저장</p>
                <div className="flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                  <span>가이드 보기</span>
                  <span>→</span>
                </div>
              </Link>

              {/* Slack */}
              <Link to="/guide/slack" className="block bg-gray-50 rounded-xl p-5 hover:bg-amber-50 hover:border-amber-200 border-2 border-transparent transition-all group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">💬</span>
                  <h4 className="font-bold">Slack</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">식사 기록이 Slack 채널에 실시간 알림</p>
                <div className="flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                  <span>가이드 보기</span>
                  <span>→</span>
                </div>
              </Link>

              {/* Google Sheets */}
              <Link to="/guide/sheets" className="block bg-gray-50 rounded-xl p-5 hover:bg-amber-50 hover:border-amber-200 border-2 border-transparent transition-all group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📊</span>
                  <h4 className="font-bold">Google Sheets</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">스프레드시트에 데이터 축적 → 차트/분석</p>
                <div className="flex items-center gap-1 text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                  <span>가이드 보기</span>
                  <span>→</span>
                </div>
              </Link>

              {/* MCP / API */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-5 border-2 border-purple-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🤖</span>
                  <h4 className="font-bold">MCP · API 연동</h4>
                  <span className="text-[10px] bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-full font-semibold">NEW</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Claude/Notion AI에서 데이터 분석하거나, 개인 API 키로 코치 대시보드에서 직접 분석</p>
                <p className="text-purple-600 font-medium text-sm">앱 내 가이드 제공</p>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 rounded-xl p-4 text-center">
              <p className="text-sm text-amber-800">
                💡 <strong>작동 원리:</strong> 연결된 회원이 식사를 기록하면 → 코치의 외부 서비스로 자동 전송 → 별도 작업 없이 데이터 축적
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💰 요금제
            </h2>
            <p className="text-gray-600 text-lg">무료로 시작하고, 필요할 때 업그레이드</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan - 일반 모드 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🛡️</span>
                <h3 className="text-2xl font-bold">일반 모드</h3>
              </div>
              <p className="text-amber-500 font-semibold mb-4">개인 사용자에게 충분해요 ✨</p>
              <div className="text-4xl font-bold mb-4">₩0<span className="text-lg font-normal text-gray-500">/월</span></div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                AI 식단 분석, 건강 앱 연동, 리포트 등 핵심 기능을 무료로 이용하세요. 코치에게 식단을 공유받는 건 무제한, 내가 다른 사람을 관리하는 건 5명까지.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> AI 식단 분석 (하루 10개)
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Apple Health / Google Fit 연동
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Dr. Y AI 채팅 코치
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> 일일/주간/월간 리포트
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> 업적 & 도전 시스템
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> 코치에게 내 식단 공유 (무제한)
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <div>
                    <span>다른 사람 식단 관리 <span className="text-amber-600 font-medium">5명까지</span></span>
                    <p className="text-xs text-gray-400 mt-0.5">예: 자녀, 부모님, 친구 등 가족/지인 케어</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <span>✗</span> Notion/Slack/Sheets/MCP/API 연동
                </li>
              </ul>
              <a href="https://eatme.co.kr" className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-full font-medium transition-colors">
                무료로 시작하기
              </a>
            </div>

            {/* PRO Plan - PRO 모드 */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm">🎁 무료 체험</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">👑</span>
                <h3 className="text-2xl font-bold">PRO 모드</h3>
              </div>
              <p className="text-amber-100 mb-4">코치, 트레이너, 영양사를 위한 전문 도구</p>
              <div className="mb-4">
                <div className="text-4xl font-bold">무료 체험</div>
                <p className="text-amber-100 text-sm mt-1">전문가 인증 시 1개월 무료 제공</p>
              </div>
              <p className="text-amber-50 text-sm mb-4 leading-relaxed">
                다수의 회원을 체계적으로 관리하는 전문가를 위한 도구입니다. 외부 서비스 자동 연동, MCP AI 분석, 데이터 관리 기능을 제공합니다.
              </p>
              <div className="bg-white/20 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold mb-1">📝 이용 방법</p>
                <ol className="text-xs text-amber-50 space-y-1">
                  <li>1. 전문가 인증 신청 → 승인 시 <strong>1개월 무료 체험</strong></li>
                  <li>2. 체험 종료 후 <strong>7일 내</strong> 후기 작성 → <strong>6개월 연장</strong></li>
                  <li className="text-amber-200">※ 이후 월 구독으로 계속 이용 가능</li>
                </ol>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span>✓</span> 일반 모드 기능 전부 포함
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span>✓</span> 무제한 회원 관리 및 1:1 케어
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span>✓</span> Notion · Slack · Google Sheets 자동 연동
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span>✓</span> MCP · API 연동 (Claude/Notion AI 분석, 대시보드 직접 분석)
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span>✓</span> 회원별 코칭 코멘트 & 데이터 관리
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span>✓</span> 초대 코드로 간편한 회원 연결
                </li>
              </ul>
              <a href="https://eatme.co.kr/pro" className="block text-center bg-white hover:bg-gray-100 text-amber-600 py-3 rounded-full font-medium transition-colors">
                무료 체험 신청하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ❓ 자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q. 사진은 어디에 저장되나요?</h3>
              <p className="text-gray-600">안전한 클라우드 서버에 저장되며, 본인과 연결된 코치만 볼 수 있어요. 제3자에게 공유되지 않습니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q. Apple Health / Google Fit 데이터는 안전한가요?</h3>
              <p className="text-gray-600">건강 데이터는 기기에서 직접 읽어 서버에 안전하게 저장됩니다. 본인과 연결된 코치만 접근 가능하며, 식단 분석 품질 향상에만 사용됩니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q. 코치 연결은 어떻게 하나요?</h3>
              <p className="text-gray-600">코치가 초대 코드 링크를 공유하면, 회원이 링크를 통해 가입 시 자동 연결됩니다. 또는 닉네임/이메일로 검색해 요청을 보낼 수도 있어요.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q. 중간에 연결을 끊을 수 있나요?</h3>
              <p className="text-gray-600">네, 언제든 설정 또는 커넥트 탭에서 연결을 해제할 수 있어요. 해제 후에는 코치가 더 이상 식단을 볼 수 없습니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q. AI 분석은 정확한가요?</h3>
              <p className="text-gray-600">Google Gemini AI를 사용해 높은 정확도로 음식을 인식하고 영양 정보를 분석합니다. 포장 식품은 라벨을 읽어 더 정확하게 분석해요.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q. 해외에서도 사용할 수 있나요?</h3>
              <p className="text-gray-600">네, 전 세계 어디서든 사용 가능합니다. 한국 음식뿐만 아니라 다양한 국가의 음식도 분석할 수 있어요.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q. 내 데이터를 내보낼 수 있나요?</h3>
              <p className="text-gray-600">네, 설정에서 CSV 파일로 모든 식단 기록, 건강 데이터, AI 분석 결과를 기간별로 내보낼 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-amber-100 mb-10">
            사진 한 장으로 시작하는 AI 맞춤 식단 관리
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/app/eatme-coach/id6742801490" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-7 py-3.5 rounded-xl text-base font-medium hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=kr.co.eatme.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-7 py-3.5 rounded-xl text-base font-medium hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
            <a href="https://eatme.co.kr" className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-7 py-3.5 rounded-xl text-base font-medium transition-colors">
              🌐 웹에서 시작하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              <span className="font-bold text-white text-xl">EatMe Coach</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://eatme.co.kr/privacy" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="https://eatme.co.kr/terms" className="hover:text-white transition-colors">이용약관</a>
              <a href="mailto:gini@yulimkm.com" className="hover:text-white transition-colors">문의하기</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © 2026 EatMe Coach. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
