import React, { useState } from 'react';

interface RoomDetailsModalProps {
  room: any | null;
  onClose: () => void;
  onImageClick: (img: string) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, onClose }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!room) return null;

  const handleClose = () => {
    setActiveImgIndex(0);
    onClose();
  };

  const roomImages = room.images && room.images.length > 0
    ? room.images
    : (room.image ? [room.image] : []);
  
  const safeIndex = activeImgIndex < roomImages.length ? activeImgIndex : 0;

  return (
    <div 
      className="lightbox-overlay no-print" 
      style={{ 
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
        backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 99999, display: 'flex', 
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
      }} 
      onClick={handleClose}
    >
      <button 
        style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '3rem', background: 'none', border: 'none', cursor: 'pointer', zIndex: 20 }} 
        onClick={handleClose}
      >
        ×
      </button>
      
      {roomImages.length > 1 && (
        <button 
          type="button" 
          style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', fontSize: '3rem', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', transition: 'background 0.2s', zIndex: 20 }} 
          onClick={(e) => { e.stopPropagation(); setActiveImgIndex(prev => (prev === 0 ? roomImages.length - 1 : prev - 1)); }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        >
          ‹
        </button>
      )}

      {roomImages.length > 0 && (
        <img 
          src={roomImages[safeIndex]} 
          style={{ maxWidth: '100vw', maxHeight: '100vh', objectFit: 'contain' }} 
          onClick={(e) => e.stopPropagation()} 
        />
      )}
      
      {roomImages.length > 1 && (
        <button 
          type="button" 
          style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', fontSize: '3rem', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', transition: 'background 0.2s', zIndex: 20 }} 
          onClick={(e) => { e.stopPropagation(); setActiveImgIndex(prev => (prev === roomImages.length - 1 ? 0 : prev + 1)); }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        >
          ›
        </button>
      )}
      
      {/* Information Overlay at the bottom */}
      <div 
        style={{ 
          position: 'absolute', bottom: 0, left: 0, right: 0, 
          background: 'linear-gradient(transparent, rgba(0,0,0,0.9))', 
          padding: '60px 20px 30px', color: 'white', 
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center'
        }} 
        onClick={e => e.stopPropagation()}
      >
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.8rem', color: 'white' }}>{room.data?.name || room.name}</h3>
        
        {/* Thumbnails */}
        {roomImages.length > 1 && (
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
            {roomImages.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                onClick={() => setActiveImgIndex(idx)}
                style={{
                  width: '60px', height: '40px', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer',
                  border: safeIndex === idx ? '2px solid #c56024' : '2px solid transparent',
                  opacity: safeIndex === idx ? 1 : 0.6
                }}
              />
            ))}
          </div>
        )}

        <p style={{ margin: '0 0 10px 0', maxWidth: '600px', fontSize: '1rem', opacity: 0.9 }}>{room.data?.desc || room.desc}</p>
        <p style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#fbd38d', fontWeight: 'bold' }}>
          ราคา: ฿{room.data?.price || room.price} {(room.isMonthly || room.room_type === 'monthly' || room.availableRoomsList !== undefined) ? '/ เดือน' : '/ คืน'}
          <span style={{ margin: '0 10px', color: 'white', opacity: 0.5 }}>|</span>
          มัดจำ: ฿{room.data?.deposit || room.deposit || '500'}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '800px' }}>
          {(room.data?.features || room.features || []).map((f: string, i: number) => (
            <span key={i} style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.85rem' }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
