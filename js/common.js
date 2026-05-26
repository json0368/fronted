/* ========================================
   守心智护 - 公共 JS & 模拟数据
   ======================================== */

// 模拟数据
const MOCK = {
  // 照护者信息
  caregiver: {
    name: '张秀兰',
    age: 62,
    relation: '配偶',
    phone: '138****6789',
    startDate: '2024-03-15',
    avatar: '张'
  },

  // 患者信息
  patient: {
    name: '李建国',
    age: 68,
    diagnosis: '阿尔茨海默病中期',
    diagnoseDate: '2024-01-20',
    stage: '中期',
    avatar: '李'
  },

  // 风险等级
  riskLevels: [
    { level: 'green', label: '常态健康', desc: '照护状态稳定' },
    { level: 'yellow', label: '压力上升', desc: '需关注照护者状态' },
    { level: 'orange', label: '临界高压', desc: '建议介入支持' },
    { level: 'red', label: '急性高危', desc: '需立即处理' }
  ],

  // 当前风险状态
  currentRisk: {
    level: 'yellow',
    score: 62,
    trend: 'up',
    trendDesc: '较上周上升 8%',
    lastUpdate: '2026-05-24 09:30'
  },

  // 7天风险趋势
  riskTrend: [
    { date: '05-18', score: 45, level: 'green' },
    { date: '05-19', score: 48, level: 'green' },
    { date: '05-20', score: 52, level: 'yellow' },
    { date: '05-21', score: 55, level: 'yellow' },
    { date: '05-22', score: 58, level: 'yellow' },
    { date: '05-23', score: 60, level: 'yellow' },
    { date: '05-24', score: 62, level: 'yellow' }
  ],

  // 对话记录
  conversations: [
    {
      id: 1,
      time: '2026-05-24 08:15',
      type: 'care_event',
      userMsg: '今天早上他又不肯吃药了，把药片扔到地上，我怎么说他都不听',
      systemMsg: '张阿姨，我理解这种情况让您很着急。关于拒药，我需要了解几个情况：\n\n1. 他今天的情绪整体怎么样？有没有比平时更烦躁？\n2. 是所有药都不肯吃，还是某一种？\n3. 最近有没有换过药物？\n\n一般来说，阿尔茨海默病患者拒药可能与药物副作用、吞咽困难或对药物的恐惧有关。您可以尝试把药片碾碎混在他喜欢的食物中，或者用果汁送服。如果持续拒药，建议联系主治医生调整用药方案。',
      riskTriggered: false
    },
    {
      id: 2,
      time: '2026-05-24 02:30',
      type: 'night_wandering',
      userMsg: '他又起来在客厅走来走去，开了好多灯，我被吵醒了',
      systemMsg: '夜间游走是阿尔茨海默病中期常见的行为症状。请您先确认：\n\n1. 他现在是否安全？周围有没有可能绊倒的物品？\n2. 这种情况最近一周出现了几次？\n\n建议您先温和地引导他回到床上，不要强行拉扯。可以在卧室安装小夜灯，减少他的不安感。如果每周出现3次以上，建议咨询医生是否需要调整晚间用药。',
      riskTriggered: true
    },
    {
      id: 3,
      time: '2026-05-23 16:45',
      type: 'emotional',
      userMsg: '我真的快撑不住了，每天24小时都要看着他，我自己连觉都睡不好，感觉活着没什么意思',
      systemMsg: '张阿姨，我能感受到您现在非常疲惫和无助。您愿意说出来，这本身就是一种勇气。\n\n首先我想告诉您：您所经历的这些感受，在阿尔茨海默病照护者中非常普遍，您不是一个人在承受。\n\n我注意到您最近一周的夜间求助次数增加了，这说明您的压力在积累。我建议您：\n\n1. 今天给自己安排至少30分钟的休息时间\n2. 联系子女或亲友，商量一下轮流照护的可能\n3. 拨打照护者支持热线：400-xxx-xxxx\n\n您的健康同样重要。只有您好了，他才能被照顾好。',
      riskTriggered: true,
      riskLevel: 'orange'
    }
  ],

  // 照护事件记录
  careEvents: [
    { time: '05-24 08:15', type: '拒药', severity: 'medium', status: '已处理' },
    { time: '05-24 02:30', type: '夜间游走', severity: 'medium', status: '已记录' },
    { time: '05-23 16:45', type: '情绪崩溃', severity: 'high', status: '已介入' },
    { time: '05-23 12:00', type: '拒食', severity: 'low', status: '已缓解' },
    { time: '05-22 22:10', type: '夜间游走', severity: 'medium', status: '已记录' },
    { time: '05-22 15:30', type: '幻觉妄想', severity: 'high', status: '已处理' }
  ],

  // 家庭成员
  familyMembers: [
    { name: '李明', relation: '儿子', phone: '139****1234', lastContact: '2026-05-23' },
    { name: '王芳', relation: '女儿', phone: '136****5678', lastContact: '2026-05-22' }
  ],

  // 周报数据
  weeklyReport: {
    period: '2026年5月18日 - 5月24日',
    riskChange: '黄色（压力上升）',
    topIssues: ['夜间游走 (4次)', '拒药 (3次)', '情绪波动 (2次)'],
    nightRequests: 6,
    suggestions: [
      '建议安排家庭成员轮流照护',
      '联系社区卫生服务中心咨询日间照护服务',
      '关注照护者睡眠质量'
    ]
  },

  // 机构端 - 护工列表
  caregivers: [
    { id: 1, name: '张秀兰', dept: 'A区', patients: 3, risk: 'yellow', score: 62, shift: '白班' },
    { id: 2, name: '刘桂花', dept: 'B区', patients: 4, risk: 'orange', score: 78, shift: '白班' },
    { id: 3, name: '王淑芬', dept: 'A区', patients: 2, risk: 'green', score: 35, shift: '夜班' },
    { id: 4, name: '陈美玲', dept: 'C区', patients: 5, risk: 'red', score: 89, shift: '白班' },
    { id: 5, name: '赵玉华', dept: 'B区', patients: 3, risk: 'green', score: 28, shift: '夜班' },
    { id: 6, name: '孙丽萍', dept: 'A区', patients: 4, risk: 'yellow', score: 55, shift: '白班' }
  ],

  // 机构端 - 预警记录
  alerts: [
    {
      id: 1,
      caregiver: '陈美玲',
      level: 'red',
      type: '严重疲惫伴崩溃信号',
      time: '2026-05-24 09:15',
      evidence: ['连续3天夜间求助', '语音情绪检测到崩溃特征', '交互频率骤增'],
      status: '待处理'
    },
    {
      id: 2,
      caregiver: '刘桂花',
      level: 'orange',
      type: '持续高压状态',
      time: '2026-05-24 08:30',
      evidence: ['7天风险分数持续上升', '照护攻击行为患者频率增加'],
      status: '跟进中'
    },
    {
      id: 3,
      caregiver: '张秀兰',
      level: 'yellow',
      type: '压力上升趋势',
      time: '2026-05-23 16:50',
      evidence: ['夜间求助增加', '情绪类关键词频率上升'],
      status: '已关闭'
    }
  ],

  // 培训课程
  courses: [
    { id: 1, title: '阿尔茨海默病基础知识', category: 'AD专业知识', progress: 100, type: '图文' },
    { id: 2, title: '行为精神症状应对指南', category: 'AD专业知识', progress: 75, type: '视频' },
    { id: 3, title: '照护者情绪管理与减压', category: '心理健康', progress: 50, type: '图文' },
    { id: 4, title: '正念冥想入门课程', category: '心理健康', progress: 0, type: '视频' },
    { id: 5, title: '紧急情况处理流程', category: 'AD专业知识', progress: 90, type: '图文' }
  ]
};

// 工具函数
function getRiskColor(level) {
  const map = { green: '#4CAF50', yellow: '#FF9800', orange: '#FF5722', red: '#F44336' };
  return map[level] || '#999';
}

function getRiskLabel(level) {
  const map = { green: '常态健康', yellow: '压力上升', orange: '临界高压', red: '急性高危' };
  return map[level] || '未知';
}

function formatTime(timeStr) {
  return timeStr;
}

function createRiskBadge(level) {
  return `<span class="risk-badge risk-badge--${level}">${getRiskLabel(level)}</span>`;
}

function createAvatar(name, size) {
  const cls = size === 'lg' ? 'avatar avatar--lg' : 'avatar';
  return `<div class="${cls}">${name.charAt(0)}</div>`;
}

// Global Custom Toast Notification
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
  } else if (type === 'warning') {
    iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`;
  } else {
    iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 11h-2V7h2v6zm0 4h-2v-2h2v2z"/></svg>`;
  }

  toast.innerHTML = `
    <div class="toast-icon">
      ${iconSvg}
    </div>
    <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  // Automatically remove toast after animation ends
  setTimeout(() => {
    toast.remove();
    if (container.children.length === 0) {
      container.remove();
    }
  }, 2500);
}
