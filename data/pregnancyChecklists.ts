import { ChecklistGroup, LangCode } from "@/lib/types";

const RANGES = [
  { min: 1, max: 12 },
  { min: 13, max: 20 },
  { min: 21, max: 28 },
  { min: 29, max: 36 },
  { min: 37, max: 40 },
];

const LABELS: Record<LangCode, string[]> = {
  ko: ["초기 (1~12주)", "중기 (13~20주)", "중후기 (21~28주)", "후기 (29~36주)", "막달 (37~40주)"],
  en: ["Early (1–12 wks)", "Mid (13–20 wks)", "Late-mid (21–28 wks)", "Late (29–36 wks)", "Final (37–40 wks)"],
  zh: ["初期 (1~12周)", "中期 (13~20周)", "中后期 (21~28周)", "后期 (29~36周)", "临产期 (37~40周)"],
  vi: ["Đầu (1–12 tuần)", "Giữa (13–20 tuần)", "Giữa-cuối (21–28 tuần)", "Cuối (29–36 tuần)", "Sắp sinh (37–40 tuần)"],
  ja: ["初期 (1~12週)", "中期 (13~20週)", "中後期 (21~28週)", "後期 (29~36週)", "臨月 (37~40週)"],
  mn: ["Early (1–12 wks)", "Mid (13–20 wks)", "Late-mid (21–28 wks)", "Late (29–36 wks)", "Final (37–40 wks)"],
  th: ["Early (1–12 wks)", "Mid (13–20 wks)", "Late-mid (21–28 wks)", "Late (29–36 wks)", "Final (37–40 wks)"],
  ru: ["Early (1–12 wks)", "Mid (13–20 wks)", "Late-mid (21–28 wks)", "Late (29–36 wks)", "Final (37–40 wks)"],
};

const ITEMS: Record<LangCode, string[][]> = {
  ko: [
    ["산부인과에서 초기 임신을 확인해요.", "산전검사에 대해 상담할 수 있어요.", "엽산 복용은 담당 의사에게 확인해보세요.", "가까운 보건소에 임산부 등록을 문의해보세요.", "병원 방문 시 통역 지원이 가능한지 물어보세요."],
    ["이 시기에는 중기 검사에 대해 병원에서 상담할 수 있어요.", "복용 중인 영양제는 담당 의사에게 확인해보세요.", "태아 상태 확인 일정을 병원에서 안내받을 수 있어요.", "출산할 병원 정보를 미리 알아보면 좋아요.", "보건소 임산부 지원 항목을 문의해보세요."],
    ["임신성 당뇨 검사 시기를 병원에 물어보세요.", "철분제 복용 여부는 담당 의사에게 확인해보세요.", "분만할 병원을 결정할 준비를 시작해보세요.", "다음 진료 일정을 미리 확인해두면 좋아요.", "주의해야 할 증상이 있는지 병원에 물어보세요."],
    ["막달 검사 일정을 병원에서 안내받을 수 있어요.", "출산 가방을 미리 준비해두면 좋아요.", "응급 상황 연락처를 정리해두세요.", "병원까지 가는 방법을 미리 확인해두면 안심돼요.", "보호자와 연락 방법을 정해두세요."],
    ["분만 징후에 대해 병원에서 미리 안내받으세요.", "병원으로 이동하는 계획을 세워두면 좋아요.", "보호자 연락망을 다시 한 번 확인하세요.", "출산 가방과 서류를 가까운 곳에 두세요.", "궁금한 점은 다음 진료 때 병원에 물어보세요."],
  ],
  en: [
    ["Confirm early pregnancy at an OB-GYN clinic.", "You can ask about prenatal tests.", "Check folic acid intake with your doctor.", "Ask your local health center about pregnancy registration.", "Ask if interpretation support is available at the hospital."],
    ["You can discuss mid-pregnancy tests at the hospital.", "Check any supplements you take with your doctor.", "The hospital can guide you on fetal check-up schedules.", "It helps to look into your delivery hospital in advance.", "Ask the health center about pregnancy support programs."],
    ["Ask the hospital about the timing of the gestational diabetes test.", "Check iron supplement use with your doctor.", "Start preparing to decide on your delivery hospital.", "It helps to check your next appointment in advance.", "Ask the hospital if there are symptoms to watch for."],
    ["The hospital can guide you on late-term test schedules.", "It helps to pack your delivery bag in advance.", "Organize your emergency contact numbers.", "Knowing the route to the hospital in advance brings peace of mind.", "Decide how to reach your guardian."],
    ["Ask the hospital in advance about signs of labor.", "It helps to plan how you'll get to the hospital.", "Double-check your guardian contact list.", "Keep your delivery bag and documents nearby.", "Ask the hospital at your next visit about any questions."],
  ],
  zh: [
    ["在妇产科确认早期妊娠。", "可以咨询产前检查。", "叶酸的服用请向主治医生确认。", "向附近的卫生站咨询孕妇登记。", "就诊时询问是否提供翻译支援。"],
    ["这个时期可以在医院咨询中期检查。", "正在服用的营养品请向主治医生确认。", "可在医院了解胎儿状态检查的日程。", "提前了解分娩医院的信息会更好。", "向卫生站咨询孕妇支援项目。"],
    ["向医院询问妊娠糖尿病检查的时间。", "是否服用铁剂请向主治医生确认。", "开始准备决定分娩医院。", "提前确认下次就诊日程会更好。", "向医院询问是否有需要注意的症状。"],
    ["可在医院了解临产期检查的日程。", "提前准备好待产包会更好。", "整理好紧急联系电话。", "提前确认去医院的路线会更安心。", "确定与监护人的联系方式。"],
    ["请提前向医院了解分娩征兆。", "提前规划好去医院的方式会更好。", "再次确认监护人联系网络。", "把待产包和证件放在身边。", "有疑问可在下次就诊时向医院询问。"],
  ],
  vi: [
    ["Xác nhận mang thai sớm tại phòng khám sản phụ khoa.", "Bạn có thể hỏi về các xét nghiệm tiền sản.", "Hỏi bác sĩ về việc uống axit folic.", "Hỏi trung tâm y tế địa phương về đăng ký thai sản.", "Hỏi xem bệnh viện có hỗ trợ phiên dịch không."],
    ["Giai đoạn này bạn có thể hỏi bệnh viện về xét nghiệm giữa thai kỳ.", "Hỏi bác sĩ về các thực phẩm bổ sung bạn đang dùng.", "Bệnh viện có thể hướng dẫn lịch kiểm tra tình trạng thai nhi.", "Nên tìm hiểu trước về bệnh viện nơi bạn sẽ sinh.", "Hỏi trung tâm y tế về các chương trình hỗ trợ thai sản."],
    ["Hỏi bệnh viện về thời điểm xét nghiệm tiểu đường thai kỳ.", "Hỏi bác sĩ về việc dùng viên sắt.", "Bắt đầu chuẩn bị quyết định bệnh viện sinh.", "Nên kiểm tra trước lịch khám tiếp theo.", "Hỏi bệnh viện xem có triệu chứng cần lưu ý không."],
    ["Bệnh viện có thể hướng dẫn lịch xét nghiệm cuối thai kỳ.", "Nên chuẩn bị sẵn túi đồ đi sinh.", "Sắp xếp các số điện thoại liên hệ khẩn cấp.", "Biết trước đường đến bệnh viện sẽ giúp bạn yên tâm.", "Quyết định cách liên lạc với người thân."],
    ["Hỏi trước bệnh viện về dấu hiệu chuyển dạ.", "Nên lên kế hoạch cách đến bệnh viện.", "Kiểm tra lại danh sách liên hệ người thân.", "Để túi đồ đi sinh và giấy tờ ở gần.", "Hỏi bệnh viện về thắc mắc trong lần khám tới."],
  ],
  ja: [
    ["産婦人科で初期妊娠を確認します。", "妊婦健診について相談できます。", "葉酸の服用は担当医に確認してみましょう。", "近くの保健所に妊婦登録を問い合わせてみましょう。", "受診時に通訳支援が可能か聞いてみましょう。"],
    ["この時期は中期の検査について病院で相談できます。", "服用中のサプリは担当医に確認してみましょう。", "胎児の状態確認の予定を病院で案内してもらえます。", "出産する病院の情報を前もって調べるとよいです。", "保健所の妊婦支援項目を問い合わせてみましょう。"],
    ["妊娠糖尿病検査の時期を病院に聞いてみましょう。", "鉄剤の服用については担当医に確認してみましょう。", "分娩する病院を決める準備を始めましょう。", "次の診察予定を前もって確認しておくとよいです。", "注意すべき症状があるか病院に聞いてみましょう。"],
    ["臨月の検査予定を病院で案内してもらえます。", "出産バッグを前もって準備しておくとよいです。", "緊急連絡先を整理しておきましょう。", "病院までの行き方を前もって確認すると安心です。", "保護者との連絡方法を決めておきましょう。"],
    ["分娩の兆候について病院で前もって案内を受けましょう。", "病院へ移動する計画を立てておくとよいです。", "保護者の連絡網をもう一度確認しましょう。", "出産バッグと書類を近くに置いておきましょう。", "気になることは次の診察時に病院に聞いてみましょう。"],
  ],
  mn: [],
  th: [],
  ru: [],
};
ITEMS.mn = ITEMS.en;
ITEMS.th = ITEMS.en;
ITEMS.ru = ITEMS.en;

export function getChecklists(lang: LangCode): ChecklistGroup[] {
  const labels = LABELS[lang] || LABELS.ko;
  const items = ITEMS[lang] || ITEMS.ko;
  return RANGES.map((r, i) => ({
    min: r.min,
    max: r.max,
    label: labels[i],
    items: items[i],
  }));
}

export function getChecklist(week: number, lang: LangCode = "ko"): ChecklistGroup {
  const list = getChecklists(lang);
  return list.find((c) => week >= c.min && week <= c.max) || list[0];
}
