import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Modal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="row mt-8">
              <div className="col-md-6 offset-md-3">
                <Dialog.Panel className="w-full h-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* Close Button */}
                  <div className="row mb-3">
                    <div className="col w-25 d-flex justify-content-end">
                      <button onClick={closeModal} className="modal-button">
                        <img width={"25px"} src="close.png" alt="close" />
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="modal-main col-md-8">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        <img
                          className="p-1"
                          width={"20%"}
                          src="https://cms.tpg.com/wp-content/uploads/2023/03/8990-Holdings.png"
                          alt="8990 Holdings, Inc. logo"
                        />
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          8990 Holdings, Inc., is a housing developer in the
                          Philippines.
                        </p>
                      </div>
                    </div>
                    <div className="modal-sidebar border-start col-md-4 ps-5">
                      <dl className="mt-5">
                        <dt>Platforms</dt>
                        <dd>Capital</dd>
                        <dt>Mandate</dt>
                        <dd>Sell-Side</dd>
                        <dt>Geography</dt>
                        <dd>Asia</dd>
                      </dl>
                    </div>
                  </div>
                  <div className="d-flex gap-5 justify-content-center mt-6">
                    <button type="button" className="modal-button">
                      <img
                        src="left-arrow.png"
                        width={"30px"}
                        alt="left arrow"
                      />
                    </button>
                    <button
                      type="button"
                      className="modal-button"
                    >
                      <img
                        src="arrow-right.png"
                        width={"30px"}
                        alt="left arrow"
                      />
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
