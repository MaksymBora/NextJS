'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ show, children, onClose }: ModalProps) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog open={show} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto">
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
