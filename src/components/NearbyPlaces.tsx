import React from 'react';
import type { Translations } from '../i18n/translations';

interface NearbyPlacesProps {
 t: Translations;
}

export const NearbyPlaces: React.FC<NearbyPlacesProps> = ({ t }) => {
 return (
 <section id="nearby"className="section"style={{ backgroundColor: 'var(--bg-offset)' }}>
 <div className="container">
 <h2 className="section-title">{t.nearbyTitle}</h2>
 <p className="section-subtitle">{t.nearbySubtitle}</p>

 <div className="nearby-grid">
 {(t.nearbyList || []).map((item, idx) => {

 return (
 <div key={idx} className="nearby-card">
 <div>
 <div className="nearby-card-header">

 <span className="nearby-badge">{item.distance}</span>
 </div>
 <h3 className="nearby-item-title">{item.title}</h3>
 <p className="nearby-item-desc">{item.desc}</p>
 </div>
 </div>
 );
 })}
 </div>

 {/* Embedded Interactive Map Card */}
 <div className="interactive-map-card">
 <div className="map-info-header">
 <div>
 <h3>{t.mapHeading || '️ แผนที่ตั้ง แอทสมุทรสาคร สาขาสวนส้ม'}</h3>
 <p>{t.mapSubheading || t.addressVal || 'ท่าทราย อำเภอเมืองสมุทรสาคร อำเภอเมือง จังหวัดสมุทรสาคร'}</p>
 </div>
 <a
 href="https://maps.app.goo.gl/8NCtUCz332wmwEuz9"
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-primary btn-gps"
 >
 {t.openGoogleMapsBtn || 'นำทางด้วย Google Maps'}
 </a>
 </div>

 <div className="map-iframe-wrapper">
 <iframe
 title="Location Map"
 src="https://maps.google.com/maps?q=แอทสมุทรสาคร+สาขาสวนส้ม&z=16&output=embed"
 width="100%"
 height="380"
 style={{ border: 0, borderRadius: '12px' }}
 allowFullScreen={false}
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 ></iframe>
 </div>
 </div>
 </div>
 </section>
 );
};
