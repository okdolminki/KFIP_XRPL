const steps = [
  {
    title: 'Transaction Created',
    badge: 'Created',
    desc: '구매자와 판매자가 거래 금액, 조건, 납품 기준을 등록한 상태입니다.',
    html: `
      <div class="step-box">
        <h3>1. 거래 생성</h3>
        <div class="mock-row"><span class="mock-label">판매자</span><strong>Korea Export SMB</strong></div>
        <div class="mock-row"><span class="mock-label">구매자</span><strong>SEA Distributor</strong></div>
        <div class="mock-row"><span class="mock-label">금액</span><strong>12,500 RLUSD</strong></div>
        <div class="mock-row"><span class="mock-label">납품 조건</span><strong>검수 완료 후 정산</strong></div>
      </div>`
  },
  {
    title: 'Funds Deposited to Escrow',
    badge: 'Escrow',
    desc: '구매자가 대금을 예치해 거래 상대방 리스크를 줄이는 단계입니다.',
    html: `
      <div class="step-box">
        <h3>2. 에스크로 예치</h3>
        <div class="mock-row"><span class="mock-label">예치 상태</span><strong class="accent">Deposited</strong></div>
        <div class="mock-row"><span class="mock-label">네트워크</span><strong>XRPL Testnet</strong></div>
        <div class="mock-row"><span class="mock-label">지갑 주소</span><strong>rs1txDg154xT...</strong></div>
        <div class="mock-row"><span class="mock-label">목적</span><strong>조건부 정산 대기</strong></div>
      </div>`
  },
  {
    title: 'Delivery Verified',
    badge: 'Verified',
    desc: '납품 또는 검수 완료가 확인되어 정산 가능 상태가 되었습니다.',
    html: `
      <div class="step-box">
        <h3>3. 납품 확인</h3>
        <div class="mock-row"><span class="mock-label">검수 상태</span><strong class="accent">Approved</strong></div>
        <div class="mock-row"><span class="mock-label">증빙</span><strong>Invoice / Delivery Check</strong></div>
        <div class="mock-row"><span class="mock-label">다음 단계</span><strong>정산 실행</strong></div>
      </div>`
  },
  {
    title: 'Settlement Complete',
    badge: 'Completed',
    desc: '조건 충족 후 정산이 완료되고 거래 이력을 추적할 수 있습니다.',
    html: `
      <div class="step-box">
        <h3>4. 정산 완료</h3>
        <div class="mock-row"><span class="mock-label">정산 상태</span><strong class="accent">Complete</strong></div>
        <div class="mock-row"><span class="mock-label">거래 추적</span><strong>Explorer 확인 가능</strong></div>
        <div class="mock-row"><span class="mock-label">효과</span><strong>더 빠르고 투명한 정산</strong></div>
      </div>`
  }
];

const stepContent = document.getElementById('step-content');
const statusTitle = document.getElementById('status-title');
const statusDesc = document.getElementById('status-desc');
const statusBadge = document.getElementById('status-badge');
const buttons = document.querySelectorAll('.step-btn');

function renderStep(index) {
  const step = steps[index];
  stepContent.innerHTML = step.html;
  statusTitle.textContent = step.title;
  statusDesc.textContent = step.desc;
  statusBadge.textContent = step.badge;
  buttons.forEach((btn, i) => btn.classList.toggle('active', i === index));
}

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => renderStep(index));
});

renderStep(0);
