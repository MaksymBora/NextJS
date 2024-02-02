'use client';

import React, { useState } from 'react';
import Button from './button';
// import CompanyFormModal from './company-form-modal';
import CompanyForm from './company-form';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      >
        <CompanyForm onSubmit={console.log} />
      </CompanyFormModal>
    </>
  );
}
