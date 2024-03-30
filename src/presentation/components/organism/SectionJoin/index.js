import JoinCardItem from 'presentation/components/molecule/JoinCardItem';
import React from 'react';

const SectionJoin = () => {
  const dataJoin = [
    {
      subtitle: "Employees",
      img: "https://cdn-site.gojek.com/uploads/employees_fef08f1b0f.svg",
      description: "Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.",
      btn: "Join as Employe",
      to: "#"
    },
    {
      subtitle: "Driver Partners",
      img: "https://cdn-site.gojek.com/uploads/driver_partner_166faab31a.svg",
      description: "We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.",
      btn: "Join as a driver partner",
      to: "#"
    },
    {
      subtitle: "Merchants",
      img: "https://cdn-site.gojek.com/uploads/merchant_partner_57c8629626.svg",
      description: "We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.",
      btn: "Join as merchant",
      to: "#"
    }
  ];

  return (
    <div className='join'>
      <div className='container'>
        <h2 className='join__title'>Join The Raid</h2>
        <div className='join__card'>
          <div className='join__card__list'>
            {dataJoin.map((val, idx) => (
              <JoinCardItem key={`join-card-${idx}`} subtitle={val.subtitle} img={val.img} description={val.description} btn={val.btn} to={val.to} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionJoin;
