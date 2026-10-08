import React from 'react';
import type { Translations } from '../i18n/translations';

interface SecuritySystemProps {
  t: Translations;
}

export const SecuritySystem: React.FC<SecuritySystemProps> = ({ t }) => {
  if (!t.securityList) return null;

  return (
    <section id="security" className="section" style={{ backgroundColor: 'var(--bg-default)' }}>
      <div className="container">
        <h2 className="section-title">{t.securityTitle}</h2>
        <p className="section-subtitle">{t.securitySubtitle}</p>

        <div className="nearby-grid">
          {t.securityList.map((item, idx) => (
            <div key={idx} className="nearby-card">
              <div>
                <div className="nearby-card-header">
                  <span className="nearby-badge">{item.badge}</span>
                </div>
                <h3 className="nearby-item-title">{item.title}</h3>
                <p className="nearby-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
