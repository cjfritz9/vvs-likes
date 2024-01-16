'use client'

import EngagementAndPopularity from '@/components/details_about_instagram_likes/engagement_popularity';
import Faq from '@/components/faq';
import HowVvsWorks from '@/components/how_vvs_works';
import { notFound } from 'next/navigation';
import React from 'react'

const FAQPage: React.FC = () => {
  return notFound();
  
  return (
    <div>
      <Faq />
      <EngagementAndPopularity />
      <HowVvsWorks />
    </div>
  );
}

export default FAQPage;