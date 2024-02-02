'use client';

import { Form, Formik } from 'formik';
import LogoUploader from './logo-uploader';
import InputField from './input-field';

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField
              id="status"
              label="Status"
              placeholder="Status"
              name="status"
            />
            <InputField
              id="country"
              label="Country"
              placeholder="Country"
              name="country"
            />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField id="name" label="Name" placeholder="Name" name="name" />
            <InputField
              id="category"
              label="Category"
              placeholder="Category"
              name="category"
            />
            <InputField
              id="date"
              label="Joined date"
              placeholder="date"
              name="date"
            />
            <InputField
              id="description"
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
}
