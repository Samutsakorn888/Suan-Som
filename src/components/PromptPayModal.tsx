import React, { useState } from 'react';
import type { Language, Translations } from '../i18n/translations';

interface PromptPayModalProps {
 isOpen: boolean;
 onClose: () => void;
 t: Translations;
 language?: Language;
 lineId: string;
}

export const PromptPayModal: React.FC<PromptPayModalProps> = ({ isOpen, onClose, t, lineId }) => {
 const [copied, setCopied] = useState(false);

 if (!isOpen) return null;

 const bankAccount = (t as any).bankAccountVal || '707-2-49085-6';

 const handleCopyAccount = async () => {
 try {
 await navigator.clipboard.writeText(bankAccount);
 setCopied(true);
 setTimeout(() => setCopied(false), 2500);
 } catch (err) {
 console.error('Failed to copy account number:', err);
 }
 };

 return (
 <div className="modal-overlay"onClick={onClose}>
 <div className="modal-content promptpay-modal-content"onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
 <button className="modal-back-btn"onClick={onClose} title="ย้อนกลับ"style={{ color: '#c56024', position: 'absolute', top: '24px', left: '24px' }}>
 ← ย้อนกลับ
 </button>
 <div className="modal-header">
 <h3 style={{ marginLeft: '100px' }}>{t.promptPayTitle || 'ช่องทางการชำระเงิน & เงินมัดจำประกันห้อง'}</h3>
 <button className="modal-close-btn"onClick={onClose}></button>
 </div>

 <div className="modal-body promptpay-modal-body">
 <div className="bank-card-container">
 <div className="bank-logo-header">
 <img src="/images/kbank_logo.png" alt="Bank Logo" style={{ width: "120px", height: "auto", objectFit: "contain" }} />
 <div>
 <h4 className="bank-name">{t.bankName || 'ธนาคารกสิกรไทย (Kasikornbank)'}</h4>
 <p className="bank-note">{t.bankNote || 'บริการชำระเงินโอนผ่านบัญชีธนาคาร (ไม่รับเงินสด)'}</p>
 </div>
 </div>

 <div className="account-details-box">
 <span className="acc-label">{t.bankAccLabel || 'เลขที่บัญชี:'}</span>
 <div className="acc-num-row">
 <strong className="acc-num">{bankAccount}</strong>
 <button className="btn btn-copy-acc"onClick={handleCopyAccount}>
 {copied ? (t.bankCopiedBtn || ' คัดลอกแล้ว!') : (t.bankCopyBtn || 'คัดลอกเลขบัญชี')}
 </button>
 </div>
 <p className="acc-name">{t.bankAccNameLabel || 'ชื่อบัญชี:'} <strong>{t.bankAccNameVal || 'นายกำธร เตชะเกษมสุข'}</strong></p>
 </div>

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', marginBottom: '10px' }}>
    <img src="/images/promptpay_qr_new.png" alt="PromptPay QR Code" style={{ width: '200px', height: '200px', objectFit: 'contain', border: '2px solid #e8bc9f', borderRadius: '12px', padding: '8px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }} />
    <span style={{ fontSize: '0.95rem', color: '#c56024', marginTop: '12px', fontWeight: 'bold' }}>สแกน QR Code เพื่อโอนเงิน</span>
    <a href="/images/promptpay_qr_new.png" download="promptpay_qr.png" style={{ 
      marginTop: '12px', 
      padding: '8px 16px', 
      fontSize: '0.9rem', 
      borderRadius: '8px', 
      display: 'flex', 
      alignItems: 'center', 
      gap: '8px', 
      textDecoration: 'none',
      backgroundColor: '#fbece3',
      color: '#c56024',
      fontWeight: 'bold',
      border: '1px solid #e8bc9f',
      cursor: 'pointer'
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      ดาวน์โหลดคิวอาร์โค้ด
    </a>
  </div>

  <div className="deposit-info-banner">
 <div className="info-icon"></div>
 <div className="info-text">
 <strong>{t.bankDailyNoticeTitle || 'การชำระเงินห้องพักรายวัน:'}</strong>
 <p>{t.bankDailyNoticeDesc || 'ค่าห้องพัก + ค่ามัดจำประกันห้อง 500 บาท/ห้อง (ได้รับเงินคืนเต็มจำนวนทางโอนเงินหลังย้ายออกไม่เกิน 12:00 น.)'}</p>
 </div>
 </div>

 <div className="slip-steps">
 <h5>{t.bankStepsTitle || 'ขั้นตอนหลังชำระเงิน:'}</h5>
 <ol className="steps-ol">
 <li>{t.bankStep1 || 'ถ่ายรูป/เซฟสลิปโอนเงิน'}</li>
 <li>{t.bankStep2 || 'ถ่ายภาพบัตรประชาชนและแจ้งเลขห้องพัก'}</li>
 <li>{t.bankStep3?.replace('{lineId}', lineId) || `ส่งสลิปแจ้งยืนยันทาง LINE ID: ${lineId}`}</li>
 </ol>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
};
