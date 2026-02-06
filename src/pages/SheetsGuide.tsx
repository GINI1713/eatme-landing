import { Link } from 'react-router-dom'

function SheetsGuide() {
  const appsScriptCode = `function doPost(e) {
  try {
    // 받은 데이터 파싱
    var data = JSON.parse(e.postData.contents);

    // 스프레드시트 열기 (현재 스프레드시트)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 첫 번째 행이 비어있으면 헤더 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        '날짜/시간',
        '회원 이름',
        '음식명',
        '칼로리',
        '탄수화물(g)',
        '단백질(g)',
        '지방(g)',
        '기분',
        '메모',
        '사진 URL'
      ]);
    }

    // 새 행 추가
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('ko-KR'),
      data.memberName || '',
      data.foodName || '',
      data.calories || '',
      data.carbs || '',
      data.protein || '',
      data.fat || '',
      data.mood || '',
      data.memo || '',
      data.imageUrl || ''
    ]);

    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 에러 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`

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
              <span>📊</span> PRO 모드 전용 기능
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Google Sheets 연동 설정 가이드
            </h1>
            <p className="text-gray-600 text-lg">
              회원의 식단 데이터를 스프레드시트에 자동으로 축적하세요
            </p>
          </div>

          {/* 예상 소요 시간 */}
          <div className="bg-green-50 rounded-xl p-4 mb-4 flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="font-semibold text-green-900">예상 소요 시간: 약 15분</p>
              <p className="text-green-700 text-sm">코드를 복사-붙여넣기만 하면 됩니다. 프로그래밍 지식이 필요 없어요!</p>
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
              <p className="text-gray-600 text-sm mb-4">회원이 식사를 기록하면 스프레드시트에 자동으로 행이 추가됩니다:</p>
              {/* 스프레드시트 미리보기 */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="border border-green-700 px-2 py-1">날짜/시간</th>
                      <th className="border border-green-700 px-2 py-1">회원</th>
                      <th className="border border-green-700 px-2 py-1">음식명</th>
                      <th className="border border-green-700 px-2 py-1">칼로리</th>
                      <th className="border border-green-700 px-2 py-1">탄수화물</th>
                      <th className="border border-green-700 px-2 py-1">단백질</th>
                      <th className="border border-green-700 px-2 py-1">지방</th>
                      <th className="border border-green-700 px-2 py-1">기분</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-2 py-1">2026.02.06 12:30</td>
                      <td className="border border-gray-300 px-2 py-1">김철수</td>
                      <td className="border border-gray-300 px-2 py-1">닭가슴살 샐러드</td>
                      <td className="border border-gray-300 px-2 py-1">350</td>
                      <td className="border border-gray-300 px-2 py-1">15</td>
                      <td className="border border-gray-300 px-2 py-1">40</td>
                      <td className="border border-gray-300 px-2 py-1">12</td>
                      <td className="border border-gray-300 px-2 py-1">😊</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-2 py-1">2026.02.06 19:00</td>
                      <td className="border border-gray-300 px-2 py-1">이영희</td>
                      <td className="border border-gray-300 px-2 py-1">비빔밥</td>
                      <td className="border border-gray-300 px-2 py-1">550</td>
                      <td className="border border-gray-300 px-2 py-1">70</td>
                      <td className="border border-gray-300 px-2 py-1">18</td>
                      <td className="border border-gray-300 px-2 py-1">15</td>
                      <td className="border border-gray-300 px-2 py-1">😌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-3">💡 축적된 데이터로 차트 생성, 피벗 테이블 분석, 다른 시스템 연계 등이 가능합니다</p>
            </div>
          </div>

          {/* Step by Step */}
          <div className="space-y-12">
            {/* Step 1 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  새 Google 스프레드시트 만들기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">1-1. Google Sheets 열기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">sheets.google.com</a>에 접속하세요.
                    Google 계정으로 로그인이 필요합니다.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-2. 새 스프레드시트 만들기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <strong>"새 스프레드시트 시작하기"</strong>에서 <strong>"빈 문서"</strong>를 클릭하세요.
                  </p>
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <p className="text-sm">새 스프레드시트 만들기</p>
                      <p className="text-xs text-gray-400 mt-1">guide-images/sheets-step1-2.png</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1-3. 스프레드시트 이름 변경</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    왼쪽 상단의 "제목 없는 스프레드시트"를 클릭하여 이름을 변경하세요.
                    예: <strong>"EatMe 식단 기록"</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Apps Script 열기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">2-1. 확장 프로그램 메뉴 열기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    상단 메뉴에서 <strong>확장 프로그램</strong> → <strong>Apps Script</strong>를 클릭하세요.
                  </p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <p className="text-sm">확장 프로그램 → Apps Script 메뉴</p>
                      <p className="text-xs text-gray-400 mt-1">guide-images/sheets-step2-1.png</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2-2. Apps Script 편집기 확인</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    새 탭에서 Apps Script 편집기가 열립니다. 기본으로 <code className="bg-gray-100 px-1 rounded">function myFunction()</code>이 있을 거예요.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  코드 복사하여 붙여넣기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">3-1. 기존 코드 전체 삭제</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    편집기에 있는 기존 코드를 <strong>모두 선택(Ctrl+A 또는 Cmd+A)</strong>하고 삭제하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3-2. 아래 코드 복사하기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    아래 코드 박스의 <strong>"복사"</strong> 버튼을 누르거나, 코드를 직접 선택하여 복사하세요.
                  </p>
                  <div className="relative">
                    <button
                      onClick={() => navigator.clipboard.writeText(appsScriptCode)}
                      className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded"
                    >
                      복사
                    </button>
                    <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-xs overflow-x-auto max-h-96">
                      <code>{appsScriptCode}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3-3. 코드 붙여넣기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Apps Script 편집기에 복사한 코드를 <strong>붙여넣기(Ctrl+V 또는 Cmd+V)</strong>하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3-4. 저장하기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <strong>Ctrl+S (또는 Cmd+S)</strong>를 눌러 저장하거나, 상단의 💾 저장 아이콘을 클릭하세요.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  웹 앱으로 배포하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">4-1. "배포" 버튼 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    오른쪽 상단의 <strong>"배포"</strong> 버튼 → <strong>"새 배포"</strong>를 클릭하세요.
                  </p>
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <p className="text-sm">배포 → 새 배포 메뉴</p>
                      <p className="text-xs text-gray-400 mt-1">guide-images/sheets-step4-1.png</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4-2. 배포 유형 선택</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    "유형 선택" 옆의 ⚙️ 톱니바퀴를 클릭하고 <strong>"웹 앱"</strong>을 선택하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4-3. 배포 설정</h3>
                  <ul className="text-gray-600 text-sm space-y-2 mb-3">
                    <li>• <strong>설명:</strong> "EatMe 식단 연동" (원하는 설명)</li>
                    <li>• <strong>다음 사용자 인증 정보로 실행:</strong> <span className="text-red-600 font-semibold">나</span> (본인 계정)</li>
                    <li>• <strong>액세스 권한이 있는 사용자:</strong> <span className="text-red-600 font-semibold">모든 사용자</span></li>
                  </ul>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      ⚠️ <strong>중요:</strong> "액세스 권한이 있는 사용자"를 반드시 <strong>"모든 사용자"</strong>로 설정해야 EatMe에서 데이터를 보낼 수 있습니다!
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4-4. "배포" 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    설정 완료 후 <strong>"배포"</strong> 버튼을 클릭하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4-5. 권한 승인 (처음 한 번만)</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    "액세스 승인 필요" 팝업이 나타나면 <strong>"액세스 승인"</strong>을 클릭하세요.
                  </p>
                  <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside mb-3">
                    <li>Google 계정 선택</li>
                    <li>"고급" 클릭</li>
                    <li>"[프로젝트명](으)로 이동(안전하지 않음)" 클릭</li>
                    <li>"허용" 클릭</li>
                  </ol>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      💡 "안전하지 않음"이라고 나오는 건 구글의 검증을 받지 않은 앱이기 때문이에요.
                      본인이 직접 만든 스크립트이므로 안전합니다!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 5 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  웹 앱 URL 복사하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">5-1. URL 확인</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    배포가 완료되면 <strong>"웹 앱 URL"</strong>이 표시됩니다.
                  </p>
                  <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    https://script.google.com/macros/s/AKfycb.../exec
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">5-2. "복사" 클릭</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    URL 옆의 <strong>"복사"</strong> 버튼을 클릭하여 URL을 복사하세요.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 6 */}
            <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  EatMe Coach 앱에서 연결하기
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">6-1. EatMe 앱 열기</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <a href="https://eatme.co.kr" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">eatme.co.kr</a>에 접속하여 로그인하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">6-2. 설정 → 자동화 연동</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    프로필 아이콘 → 설정 → <strong>"자동화 연동"</strong> 섹션으로 이동하세요.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">6-3. Google Sheets URL 입력</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Google Sheets 연동 입력란에 복사한 <strong>웹 앱 URL</strong>을 붙여넣고 <strong>"연결하기"</strong>를 누르세요.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    🎉 <strong>완료!</strong> 이제 연결된 회원이 식사를 기록하면 스프레드시트에 자동으로 저장됩니다.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 활용 팁 */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-4 text-blue-900">💡 데이터 활용 팁</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">📈 차트 만들기</p>
                <p className="text-gray-600">삽입 → 차트 로 회원별/날짜별 칼로리 추이를 시각화하세요</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">📊 피벗 테이블</p>
                <p className="text-gray-600">데이터 → 피벗 테이블 로 회원별 요약 통계를 만드세요</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">🔗 다른 시스템 연계</p>
                <p className="text-gray-600">Zapier, Make 등으로 다른 서비스와 연결 가능</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">📱 모바일 확인</p>
                <p className="text-gray-600">Google Sheets 앱으로 어디서든 실시간 확인</p>
              </div>
            </div>
          </div>

          {/* 문제 해결 */}
          <div className="mt-8 bg-red-50 rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-4 text-red-900">🔧 문제가 발생했나요?</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-red-800">Q. 데이터가 저장되지 않아요</p>
                <p className="text-red-700">→ "액세스 권한이 있는 사용자"가 "모든 사용자"로 설정되어 있는지 확인하세요.</p>
              </div>
              <div>
                <p className="font-semibold text-red-800">Q. "권한 필요" 오류가 나와요</p>
                <p className="text-red-700">→ Step 4-5의 권한 승인 과정을 다시 진행해주세요.</p>
              </div>
              <div>
                <p className="font-semibold text-red-800">Q. URL이 작동하지 않아요</p>
                <p className="text-red-700">→ 배포 후 URL이 "https://script.google.com/macros/s/..."로 시작하는지 확인하세요. 편집기 URL과는 다릅니다.</p>
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
              <Link to="/guide/slack" className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full transition-colors">
                <span>💬</span> Slack 연동 가이드
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

export default SheetsGuide
