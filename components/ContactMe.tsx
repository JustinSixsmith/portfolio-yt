'use client';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((formData) => {
    window.location.href = `mailto:justinsixsmith@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} ${formData.email}`;
  });

  return (
    <div className="scale-[60%] md:scale-100 h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[5px] md:tracking-[10px] md:text-sm text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl font-semibold text-center">
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&apos;s Talk
          </span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
            <p className="text-xl">360-241-2953</p>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
            <p className="text-xl">justinsixsmith@gmail.com</p>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
            <p className="text-xl">San Antonio, TX</p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-1 w-fit mx-auto"
        >
          <div className="flex space-x-1">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-2 px-5 rounded-md text-black font-bold text-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
