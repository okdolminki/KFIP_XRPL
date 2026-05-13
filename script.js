const stepData = {
  1: {
    label: "✅ 에이전트 제출 완료",
    detail: `agent_id: demo-agent-001
name: "XRPL Data Analyst Agent"
service: on-chain analysis
provider wallet: rs1txDg154xTwvubiZbxNgNBV42JnHFaaS
status: PENDING_REVIEW`
  },
  2: {
    label: "✅ 관리자 승인 + DID / Credential 증거 등록 완료",
    detail: `admin_review: APPROVED
DIDSet tx: B3F2A1...testnet (recorded-evidence)
CredentialCreate tx: 4D7E8C...testnet (recorded-evidence)
CredentialAccept tx: 9A1F3D...testnet (recorded-evidence)
network: XRPL Testnet
status: TRUST_GATE_PASSED`
  },
  3: {
    label: "✅ 마켓플레이스 노출 확인",
    detail: `[eligible] demo-agent-001  → 마켓플레이스 노출됨
[excluded] pending-agent   → LISTING_PENDING_REVIEW
[excluded] no-did-agent    → MISSING_DID_EVIDENCE
[excluded] cred-only-agent → CREDENTIAL_NOT_ACCEPTED
GET /api/marketplace/agents → 200 OK (1 eligible agent)`
  },
  4: {
    label: "✅ 사용 · 결제 · 평판 기록 완료",
    detail: `POST /api/marketplace/agents/demo-agent-001/services/s1/use
→ Trust Gate: PASSED
→ 402 Payment Challenge 생성
x402 XRPL testnet payment tx: 7C2E1A...testnet
POST .../settle → settlement proof 저장
POST .../feedback → ReputationSignal 기록
paid_use_reputation: +1 (paid call 기반)`
  }
};

function runStep(n) {
  const statusEl = document.getElementById('s' + n);
  const resultEl = document.getElementById('r' + n);
  const stepEl = document.getElementById('step' + n);
  const btn = stepEl.querySelector('button');

  statusEl.textContent = '처리 중...';
  statusEl.className = 'step-status running';
  stepEl.classList.add('active');
  btn.disabled = true;

  setTimeout(function() {
    const data = stepData[n];
    statusEl.textContent = '완료';
    statusEl.className = 'step-status done';
    stepEl.classList.remove('active');
    stepEl.classList.add('done');
    resultEl.innerHTML = '<strong>' + data.label + '</strong><pre style="margin-top:8px;font-size:0.8rem;color:#86efac;white-space:pre-wrap">' + data.detail + '</pre>';
    resultEl.classList.add('show');

    if (n < 4) {
      const next = document.getElementById('step' + (n + 1));
      next.querySelector('button').disabled = false;
    }
  }, 1200);
}