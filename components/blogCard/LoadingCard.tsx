import React from 'react';

const LoadingCard: React.FC = () => {
  return (
    <div
      className='blog-card tw-animate-pulse col-sm-12 col-lg-4'
      style={{ cursor: 'pointer' }}
    >
      <div className='card'>
        <div className='card-img-top tw-bg-slate-400 tw-h-[316px] tw-w-[390px] tw-object-cover tw-object-center' />
        <div className='tw-w-full' style={{ padding: '1rem' }}>
          <div className='blog-type-container'>
            <p className='card-type tw-w-20 tw-h-6 tw-bg-slate-400'></p>
            <div className='blog-date-container tw-w-20 tw-h-6 tw-bg-slate-400'>
              <div
                style={{
                  height: '18px',
                  width: '18px',
                  marginTop: '4px'
                }}
              />
              <p className='card-date tw-w-8'></p>
            </div>
          </div>
          <h2
            className='tw-bg-slate-400'
            style={{ fontWeight: 600, height: '60px' }}
          />
          <div
            style={{
              height: '192px',
              marginBottom: '8px',
              textAlign: 'left'
            }}
          >
            {Array.from(Array(Math.floor(Math.random() * 5) + 1)).map(
              (_any, i) => (
                <p key={i} className='tw-w-full tw-h-4 tw-bg-slate-400' />
              )
            )}
          </div>
          <div className='blog-author-container'>
            <div className='tw-w-10 tw-h-10 tw-bg-slate-400 tw-rounded-full' />
            <p className='tw-ml-2 tw-w-32 tw-h-5 tw-bg-slate-400'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
