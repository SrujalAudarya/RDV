import React from 'react';

export default function ShowroomGallery() {
  const displays = [
    {
      title: 'Compostable Tableware Display',
      desc: 'Full tactile range of unbleached bagasse plates, compartment thalis, and bowls on display.',
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=70'
    },
    {
      title: 'Commercial Takeaway Containers',
      desc: 'Sealable 123mm bowls, rectangular meal boxes, and Asian wok boxes for hot food delivery.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=70'
    },
    {
      title: 'Kiln-Fired Terracotta Kulhads',
      desc: 'Authentic river clay kulhads in 100ml and 150ml sizes, packaged in sturdy 100-pc petis.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=70'
    }
  ];

  return (
    <section className="showroom-section" id="showroom">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Physical Display Center</span>
          <h2 className="section-title">Visit Our Nagpur Showroom & Warehouse</h2>
          <p className="section-subtitle">
            Experience product rigidity, finish, and capacity in person at our showroom in Dev Nagar, Khamla, Nagpur.
          </p>
        </div>

        <div className="showroom-grid">
          {displays.map((item, index) => (
            <div key={index} className="showroom-photo-card">
              <img src={item.image} alt={item.title} className="showroom-photo" loading="lazy" />
              <div className="showroom-card-body">
                <h3 className="showroom-card-title">{item.title}</h3>
                <p className="showroom-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
