// src/components/SobreMim/SobreMim.jsx

import React from 'react';
import { cvData } from '../../Data/cvData';
import SobreMimItem from './SobreMimItem';

function SobreMim() {
  const { sobreMim } = cvData;

  return <SobreMimItem {...sobreMim} />;
}

export default SobreMim;