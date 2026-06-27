import { LangCode } from "@/lib/types";

// UI 핵심 텍스트 다국어 사전.
// ko/en/zh/vi/ja는 직접 번역, mn/th/ru는 영어로 fallback.
export interface UIText {
  // 공통
  appTagline: string;
  safetyNotice: string;
  // 온보딩
  onboardWelcome: string;
  labelWeek: string;
  labelRegion: string;
  labelLanguage: string;
  labelInsurance: string;
  insuranceYes: string;
  insuranceNo: string;
  labelMulticultural: string;
  multiYes: string;
  multiNo: string;
  start: string;
  cancel: string;
  privacyNote: string;
  // 탭
  tabHome: string;
  tabTerms: string;
  tabCards: string;
  tabInst: string;
  tabChat: string;
  // 홈
  greeting: string;
  weekLabel: (w: number) => string;
  editProfile: string;
  badgeMulticultural: string;
  badgeInsurance: (v: string) => string;
  checklistTitle: string;
  checklistSubtitle: (w: number, label: string) => string;
  checklistConfirm: (done: number, total: number) => string;
  checklistDisclaimer: string;
  actionHospitalCard: string;
  actionHospitalDesc: string;
  actionHealthScript: string;
  actionHealthDesc: string;
  // 쉬운 설명
  termsTitle: string;
  termsSubtitle: string;
  searchPlaceholder: string;
  askAt: (target: string) => string;
  targetHospital: string;
  targetHealthCenter: string;
  noResult: string;
  // 질문 카드
  cardsTitle: string;
  cardsSubtitle: string;
  hospitalCardTitle: string;
  hospitalCardSubtitle: string;
  hospitalCardBtn: string;
  hospitalCardBadge: string;
  healthScriptTitle: string;
  healthScriptSubtitle: string;
  healthScriptBtn: string;
  healthScriptBadge: string;
  regenerate: string;
  copy: string;
  copied: string;
  copiedToast: string;
  // 기관 찾기
  instTitle: string;
  instSubtitle: (region: string) => string;
  demoNotice: string;
  hoursNotice: string;
  interpretNotice: string;
  filterAll: string;
  // 챗봇
  chatTitle: string;
  chatSubtitle: string;
  chatGreeting: (w: number, region: string) => string;
  chatPlaceholder: string;
}

const en: UIText = {
  appTagline: "It's okay if Korean is unfamiliar. Tell us a few things and we'll guide you.",
  safetyNotice:
    "MOM-LINK AI does not provide medical diagnosis or prescriptions. Please confirm your health status and tests with your doctor. For emergencies such as sudden bleeding, severe abdominal pain, or difficulty breathing, call 119 or go to the nearest emergency room immediately.",
  onboardWelcome: "It's okay if Korean is unfamiliar.\nTell us a few things and we'll guide you with what you need now.",
  labelWeek: "Weeks pregnant",
  labelRegion: "Region",
  labelLanguage: "Language",
  labelInsurance: "Health insurance",
  insuranceYes: "Yes",
  insuranceNo: "No",
  labelMulticultural: "Multicultural family",
  multiYes: "Yes",
  multiNo: "No",
  start: "Get started",
  cancel: "Cancel",
  privacyNote: "Your information is saved only on this device and used only to help guide you.",
  tabHome: "Home",
  tabTerms: "Easy terms",
  tabCards: "Cards",
  tabInst: "Find help",
  tabChat: "AI chat",
  greeting: "Glad you're here, we're with you 🌷",
  weekLabel: (w) => `${w} weeks pregnant`,
  editProfile: "Edit info",
  badgeMulticultural: "Multicultural",
  badgeInsurance: (v) => `Insurance: ${v}`,
  checklistTitle: "Today's pregnancy checklist",
  checklistSubtitle: (w, label) => `Things to check at ${w} weeks · ${label}.`,
  checklistConfirm: (done, total) => `${done}/${total} done`,
  checklistDisclaimer:
    "💜 We don't make medical conclusions. Please confirm tests or medication with your doctor or hospital.",
  actionHospitalCard: "Hospital question card",
  actionHospitalDesc: "Show it at your visit",
  actionHealthScript: "Health center script",
  actionHealthDesc: "For registration & support",
  termsTitle: "Easy terms",
  termsSubtitle: "We explain difficult medical and administrative terms in simple words.",
  searchPlaceholder: "Search a term",
  askAt: (target) => `Ask at the ${target} like this`,
  targetHospital: "hospital",
  targetHealthCenter: "health center",
  noResult: "No results. Try another word.",
  cardsTitle: "Question cards",
  cardsSubtitle: "Create sentences you can show at the hospital or health center.",
  hospitalCardTitle: "Hospital question card",
  hospitalCardSubtitle: "Show the screen at reception or your appointment.",
  hospitalCardBtn: "Create hospital card",
  hospitalCardBadge: "Show at hospital reception",
  healthScriptTitle: "Health center script",
  healthScriptSubtitle: "Read or show it when calling or visiting the health center.",
  healthScriptBtn: "Create health center script",
  healthScriptBadge: "Show at the health center",
  regenerate: "Create again",
  copy: "Copy",
  copied: "Copied",
  copiedToast: "Copied",
  instTitle: "Find help",
  instSubtitle: (region) => `Places that can help you in ${region}.`,
  demoNotice: "Demo data · may differ from real contacts",
  hoursNotice: "Check hours & supported languages before visiting",
  interpretNotice: "Before calling, also check if interpretation support is available.",
  filterAll: "All",
  chatTitle: "AI chat",
  chatSubtitle: "We explain in simple words. We do not diagnose or prescribe.",
  chatGreeting: (w, region) =>
    `Hello 🌷 This is MOM-LINK AI.\nWe'll help based on ${w} weeks pregnant in ${region}. Ask anything you're curious about.`,
  chatPlaceholder: "Type your question",
};

const ko: UIText = {
  appTagline: "한국어가 익숙하지 않아도 괜찮아요. 몇 가지만 알려주시면 안내해드릴게요.",
  safetyNotice:
    "MOM-LINK AI는 의료 진단이나 처방을 제공하지 않습니다. 건강 상태와 검사 여부는 반드시 담당 의료진에게 확인해주세요. 갑작스러운 출혈, 심한 복통, 호흡곤란 등 응급 증상이 있으면 즉시 119 또는 가까운 응급실에 문의하세요.",
  onboardWelcome: "한국어가 익숙하지 않아도 괜찮아요.\n몇 가지만 알려주시면 지금 필요한 정보를 안내해드릴게요.",
  labelWeek: "임신 주수",
  labelRegion: "거주 지역",
  labelLanguage: "사용하는 언어",
  labelInsurance: "건강보험 여부",
  insuranceYes: "있음",
  insuranceNo: "없음",
  labelMulticultural: "다문화가족 여부",
  multiYes: "해당",
  multiNo: "비해당",
  start: "시작하기",
  cancel: "취소",
  privacyNote: "입력한 정보는 이 기기에만 저장되며, 안내를 돕기 위해서만 사용돼요.",
  tabHome: "홈",
  tabTerms: "쉬운 설명",
  tabCards: "질문 카드",
  tabInst: "기관 찾기",
  tabChat: "AI 상담",
  greeting: "반가워요, 함께할게요 🌷",
  weekLabel: (w) => `임신 ${w}주차`,
  editProfile: "내 정보 수정",
  badgeMulticultural: "다문화가족",
  badgeInsurance: (v) => `건강보험 ${v}`,
  checklistTitle: "오늘의 임신 체크리스트",
  checklistSubtitle: (w, label) => `현재 ${w}주차 · ${label}에 확인하면 좋은 항목이에요.`,
  checklistConfirm: (done, total) => `${done}/${total} 확인`,
  checklistDisclaimer:
    "💜 검사나 복용 여부는 단정하지 않아요. 정확한 판단은 담당 의사 또는 병원에 확인해주세요.",
  actionHospitalCard: "병원 질문 카드",
  actionHospitalDesc: "진료 때 보여주세요",
  actionHealthScript: "보건소 문의 문장",
  actionHealthDesc: "등록·지원 문의",
  termsTitle: "쉬운 설명",
  termsSubtitle: "어려운 의료·행정 용어를 쉬운 말로 풀어드려요.",
  searchPlaceholder: "용어를 검색해보세요 (예: 철분제)",
  askAt: (target) => `${target}에 이렇게 물어보세요`,
  targetHospital: "병원",
  targetHealthCenter: "보건소",
  noResult: "검색 결과가 없어요. 다른 단어로 찾아보세요.",
  cardsTitle: "질문 카드",
  cardsSubtitle: "병원과 보건소에서 그대로 보여줄 수 있는 문장을 만들어요.",
  hospitalCardTitle: "병원 방문 질문 카드",
  hospitalCardSubtitle: "병원 접수·진료 때 화면을 보여주세요.",
  hospitalCardBtn: "병원 질문 카드 만들기",
  hospitalCardBadge: "병원 접수 시 보여주세요",
  healthScriptTitle: "보건소 문의 문장",
  healthScriptSubtitle: "보건소에 전화하거나 방문할 때 읽거나 보여주세요.",
  healthScriptBtn: "보건소 문의 문장 만들기",
  healthScriptBadge: "보건소에 보여주세요",
  regenerate: "다시 만들기",
  copy: "복사하기",
  copied: "복사됨",
  copiedToast: "복사되었습니다",
  instTitle: "기관 찾기",
  instSubtitle: (region) => `${region}에서 도움받을 수 있는 기관이에요.`,
  demoNotice: "데모용 정보입니다 · 실제 연락처와 다를 수 있어요",
  hoursNotice: "방문 전 운영시간·지원 언어 확인",
  interpretNotice: "전화 전, 통역 지원이 가능한지 함께 확인하면 좋아요.",
  filterAll: "전체",
  chatTitle: "AI 상담",
  chatSubtitle: "쉬운 말로 안내해드려요. 진단·처방은 하지 않아요.",
  chatGreeting: (w, region) =>
    `안녕하세요 🌷 MOM-LINK AI예요.\n임신 ${w}주차, ${region}에 맞춰 도와드릴게요. 궁금한 점을 편하게 물어봐 주세요.`,
  chatPlaceholder: "궁금한 점을 입력해보세요",
};

const zh: UIText = {
  appTagline: "韩语不熟悉也没关系。告诉我们几项信息，我们来为您指引。",
  safetyNotice:
    "MOM-LINK AI 不提供医疗诊断或处方。健康状况和检查请务必向主治医生确认。如出现突然出血、剧烈腹痛、呼吸困难等紧急症状，请立即拨打119或前往最近的急诊室。",
  onboardWelcome: "韩语不熟悉也没关系。\n告诉我们几项信息，我们会为您提供现在需要的信息。",
  labelWeek: "怀孕周数",
  labelRegion: "居住地区",
  labelLanguage: "使用语言",
  labelInsurance: "是否有医保",
  insuranceYes: "有",
  insuranceNo: "无",
  labelMulticultural: "是否多元文化家庭",
  multiYes: "是",
  multiNo: "否",
  start: "开始",
  cancel: "取消",
  privacyNote: "您输入的信息仅保存在本设备上，仅用于帮助指引。",
  tabHome: "首页",
  tabTerms: "简单说明",
  tabCards: "问题卡",
  tabInst: "查找机构",
  tabChat: "AI咨询",
  greeting: "很高兴见到您，我们陪着您 🌷",
  weekLabel: (w) => `怀孕${w}周`,
  editProfile: "修改信息",
  badgeMulticultural: "多元文化家庭",
  badgeInsurance: (v) => `医保：${v}`,
  checklistTitle: "今日孕期清单",
  checklistSubtitle: (w, label) => `当前${w}周 · ${label}建议确认的事项。`,
  checklistConfirm: (done, total) => `已确认 ${done}/${total}`,
  checklistDisclaimer:
    "💜 我们不做医疗判断。检查或用药请向主治医生或医院确认。",
  actionHospitalCard: "医院提问卡",
  actionHospitalDesc: "就诊时出示",
  actionHealthScript: "卫生站咨询语句",
  actionHealthDesc: "登记·支援咨询",
  termsTitle: "简单说明",
  termsSubtitle: "用简单的话解释难懂的医疗和行政术语。",
  searchPlaceholder: "搜索术语",
  askAt: (target) => `可以这样向${target}询问`,
  targetHospital: "医院",
  targetHealthCenter: "卫生站",
  noResult: "没有搜索结果。请换个词试试。",
  cardsTitle: "问题卡",
  cardsSubtitle: "生成可在医院和卫生站直接出示的语句。",
  hospitalCardTitle: "医院就诊提问卡",
  hospitalCardSubtitle: "在挂号或就诊时出示此屏幕。",
  hospitalCardBtn: "生成医院提问卡",
  hospitalCardBadge: "挂号时请出示",
  healthScriptTitle: "卫生站咨询语句",
  healthScriptSubtitle: "致电或前往卫生站时阅读或出示。",
  healthScriptBtn: "生成卫生站咨询语句",
  healthScriptBadge: "请向卫生站出示",
  regenerate: "重新生成",
  copy: "复制",
  copied: "已复制",
  copiedToast: "已复制",
  instTitle: "查找机构",
  instSubtitle: (region) => `${region}可以帮助您的机构。`,
  demoNotice: "演示数据 · 可能与实际联系方式不同",
  hoursNotice: "前往前请确认营业时间和支持语言",
  interpretNotice: "致电前，建议一并确认是否提供翻译支援。",
  filterAll: "全部",
  chatTitle: "AI咨询",
  chatSubtitle: "用简单的话为您说明。不进行诊断或处方。",
  chatGreeting: (w, region) =>
    `您好 🌷 这里是 MOM-LINK AI。\n我们会根据怀孕${w}周、居住在${region}为您提供帮助。有任何疑问请随时询问。`,
  chatPlaceholder: "请输入您的问题",
};

const vi: UIText = {
  appTagline: "Không quen tiếng Hàn cũng không sao. Cho chúng tôi biết vài thông tin để hướng dẫn bạn.",
  safetyNotice:
    "MOM-LINK AI không cung cấp chẩn đoán hay kê đơn y tế. Vui lòng xác nhận tình trạng sức khỏe và xét nghiệm với bác sĩ của bạn. Khi có triệu chứng khẩn cấp như chảy máu đột ngột, đau bụng dữ dội, khó thở, hãy gọi 119 hoặc đến phòng cấp cứu gần nhất ngay.",
  onboardWelcome: "Không quen tiếng Hàn cũng không sao.\nCho chúng tôi biết vài thông tin để hướng dẫn điều bạn cần ngay bây giờ.",
  labelWeek: "Số tuần thai",
  labelRegion: "Khu vực sinh sống",
  labelLanguage: "Ngôn ngữ sử dụng",
  labelInsurance: "Bảo hiểm y tế",
  insuranceYes: "Có",
  insuranceNo: "Không",
  labelMulticultural: "Gia đình đa văn hóa",
  multiYes: "Có",
  multiNo: "Không",
  start: "Bắt đầu",
  cancel: "Hủy",
  privacyNote: "Thông tin của bạn chỉ được lưu trên thiết bị này và chỉ dùng để hỗ trợ hướng dẫn.",
  tabHome: "Trang chủ",
  tabTerms: "Giải thích",
  tabCards: "Thẻ câu hỏi",
  tabInst: "Tìm hỗ trợ",
  tabChat: "Tư vấn AI",
  greeting: "Rất vui được đồng hành cùng bạn 🌷",
  weekLabel: (w) => `Thai ${w} tuần`,
  editProfile: "Sửa thông tin",
  badgeMulticultural: "Gia đình đa văn hóa",
  badgeInsurance: (v) => `Bảo hiểm: ${v}`,
  checklistTitle: "Danh sách kiểm tra thai kỳ hôm nay",
  checklistSubtitle: (w, label) => `Tuần ${w} · những điều nên kiểm tra ở ${label}.`,
  checklistConfirm: (done, total) => `Đã xong ${done}/${total}`,
  checklistDisclaimer:
    "💜 Chúng tôi không đưa ra kết luận y tế. Hãy xác nhận xét nghiệm hoặc thuốc với bác sĩ hoặc bệnh viện.",
  actionHospitalCard: "Thẻ câu hỏi bệnh viện",
  actionHospitalDesc: "Cho xem khi khám",
  actionHealthScript: "Câu hỏi trung tâm y tế",
  actionHealthDesc: "Đăng ký · hỗ trợ",
  termsTitle: "Giải thích dễ hiểu",
  termsSubtitle: "Chúng tôi giải thích các thuật ngữ y tế và hành chính khó bằng lời đơn giản.",
  searchPlaceholder: "Tìm một thuật ngữ",
  askAt: (target) => `Hãy hỏi tại ${target} như thế này`,
  targetHospital: "bệnh viện",
  targetHealthCenter: "trung tâm y tế",
  noResult: "Không có kết quả. Hãy thử từ khác.",
  cardsTitle: "Thẻ câu hỏi",
  cardsSubtitle: "Tạo các câu bạn có thể cho xem tại bệnh viện hoặc trung tâm y tế.",
  hospitalCardTitle: "Thẻ câu hỏi khi khám bệnh",
  hospitalCardSubtitle: "Cho xem màn hình khi đăng ký hoặc khám.",
  hospitalCardBtn: "Tạo thẻ câu hỏi bệnh viện",
  hospitalCardBadge: "Cho xem khi đăng ký tại bệnh viện",
  healthScriptTitle: "Câu hỏi trung tâm y tế",
  healthScriptSubtitle: "Đọc hoặc cho xem khi gọi điện hoặc đến trung tâm y tế.",
  healthScriptBtn: "Tạo câu hỏi trung tâm y tế",
  healthScriptBadge: "Cho xem tại trung tâm y tế",
  regenerate: "Tạo lại",
  copy: "Sao chép",
  copied: "Đã chép",
  copiedToast: "Đã sao chép",
  instTitle: "Tìm hỗ trợ",
  instSubtitle: (region) => `Các nơi có thể giúp bạn ở ${region}.`,
  demoNotice: "Dữ liệu demo · có thể khác với liên hệ thực tế",
  hoursNotice: "Kiểm tra giờ làm việc & ngôn ngữ hỗ trợ trước khi đến",
  interpretNotice: "Trước khi gọi, hãy kiểm tra xem có hỗ trợ phiên dịch không.",
  filterAll: "Tất cả",
  chatTitle: "Tư vấn AI",
  chatSubtitle: "Chúng tôi giải thích bằng lời đơn giản. Không chẩn đoán hay kê đơn.",
  chatGreeting: (w, region) =>
    `Xin chào 🌷 Đây là MOM-LINK AI.\nChúng tôi sẽ hỗ trợ theo thai ${w} tuần, khu vực ${region}. Hãy hỏi bất cứ điều gì bạn thắc mắc.`,
  chatPlaceholder: "Nhập câu hỏi của bạn",
};

const ja: UIText = {
  appTagline: "韓国語が不慣れでも大丈夫です。いくつか教えていただければご案内します。",
  safetyNotice:
    "MOM-LINK AIは医療診断や処方を提供しません。健康状態や検査については必ず担当の医師にご確認ください。突然の出血、激しい腹痛、呼吸困難などの緊急症状がある場合は、すぐに119または最寄りの救急室にご連絡ください。",
  onboardWelcome: "韓国語が不慣れでも大丈夫です。\nいくつか教えていただければ、今必要な情報をご案内します。",
  labelWeek: "妊娠週数",
  labelRegion: "居住地域",
  labelLanguage: "使用する言語",
  labelInsurance: "健康保険の有無",
  insuranceYes: "あり",
  insuranceNo: "なし",
  labelMulticultural: "多文化家族かどうか",
  multiYes: "該当",
  multiNo: "非該当",
  start: "はじめる",
  cancel: "キャンセル",
  privacyNote: "入力した情報はこの端末にのみ保存され、案内のためだけに使用されます。",
  tabHome: "ホーム",
  tabTerms: "やさしい説明",
  tabCards: "質問カード",
  tabInst: "機関を探す",
  tabChat: "AI相談",
  greeting: "ようこそ、一緒に進めましょう 🌷",
  weekLabel: (w) => `妊娠${w}週`,
  editProfile: "情報を編集",
  badgeMulticultural: "多文化家族",
  badgeInsurance: (v) => `健康保険 ${v}`,
  checklistTitle: "今日の妊娠チェックリスト",
  checklistSubtitle: (w, label) => `現在${w}週 · ${label}に確認するとよい項目です。`,
  checklistConfirm: (done, total) => `${done}/${total} 確認`,
  checklistDisclaimer:
    "💜 医療的な断定はしません。検査や服用については担当の医師または病院にご確認ください。",
  actionHospitalCard: "病院の質問カード",
  actionHospitalDesc: "受診時に見せてください",
  actionHealthScript: "保健所への問い合わせ文",
  actionHealthDesc: "登録・支援の問い合わせ",
  termsTitle: "やさしい説明",
  termsSubtitle: "難しい医療・行政用語をやさしい言葉で説明します。",
  searchPlaceholder: "用語を検索",
  askAt: (target) => `${target}でこのように聞いてみましょう`,
  targetHospital: "病院",
  targetHealthCenter: "保健所",
  noResult: "検索結果がありません。別の言葉でお試しください。",
  cardsTitle: "質問カード",
  cardsSubtitle: "病院や保健所でそのまま見せられる文を作ります。",
  hospitalCardTitle: "病院受診の質問カード",
  hospitalCardSubtitle: "受付や受診の際に画面を見せてください。",
  hospitalCardBtn: "病院の質問カードを作る",
  hospitalCardBadge: "病院の受付で見せてください",
  healthScriptTitle: "保健所への問い合わせ文",
  healthScriptSubtitle: "保健所に電話または訪問する際に読むか見せてください。",
  healthScriptBtn: "保健所への問い合わせ文を作る",
  healthScriptBadge: "保健所で見せてください",
  regenerate: "もう一度作る",
  copy: "コピー",
  copied: "コピー済み",
  copiedToast: "コピーしました",
  instTitle: "機関を探す",
  instSubtitle: (region) => `${region}で支援を受けられる機関です。`,
  demoNotice: "デモ用情報 · 実際の連絡先と異なる場合があります",
  hoursNotice: "訪問前に営業時間・対応言語をご確認ください",
  interpretNotice: "電話前に、通訳支援が可能か併せてご確認ください。",
  filterAll: "すべて",
  chatTitle: "AI相談",
  chatSubtitle: "やさしい言葉でご案内します。診断・処方は行いません。",
  chatGreeting: (w, region) =>
    `こんにちは 🌷 MOM-LINK AIです。\n妊娠${w}週、${region}に合わせてお手伝いします。気になることをお気軽にお尋ねください。`,
  chatPlaceholder: "気になることを入力してください",
};

// mn/th/ru는 영어로 fallback (향후 직접 번역 채워 넣기)
export const UI_TEXT: Record<LangCode, UIText> = {
  ko, en, zh, vi, ja,
  mn: en,
  th: en,
  ru: en,
};

export function t(lang: LangCode): UIText {
  return UI_TEXT[lang] || ko;
}
