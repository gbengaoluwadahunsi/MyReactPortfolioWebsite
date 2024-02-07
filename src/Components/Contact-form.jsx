
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';




const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});


const ContactForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (

    <div className="bg-slate-200">
      <form className="text-customBlue lg:w-2/4 mx-auto h-custom grid grid-rows-4 px-8 py-10 text-center" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className="font-extrabold text-3xl lg:text-4xl">Connect with me</h2>
          <h4 className="text-lg lg:text-xl pt-4 mx-auto font-semibold">Reach out to me, It will be delightful to hear from you.</h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label className="text-xl font-semibold place-self-start " htmlFor="name">Your Name</label>
            <Controller
              name="name"
              control={control}
              defaultValue="Enter your full Name"
              render={({ field }) => <input {...field} className="p-2 mt-2  text-xs border border-slate-300 rounded focus:outline-none focus:border-customBlue" />}
            />
            {errors.name && <span className="text-red-900">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-xl font-semibold place-self-start" htmlFor="email">Email Address</label>
            <Controller
              name="email"
              control={control}
              defaultValue="Enter your Email address"
              render={({ field }) => <input {...field} className="p-2 mt-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-customBlue" />}
            />
            {errors.email && <span className="text-red-900">{errors.email.message}</span>}
          </div>
        </div>

        <div className=" text-sm mt-10 lg:mt-4 flex flex-col">
          <label className="text-xl font-semibold place-self-start" htmlFor="message">Your Message</label>
          <Controller
            name="message"
            control={control}
            defaultValue="Leave a message for me and I will reply you as soon as I can, thank you!"
            render={({ field }) => <textarea {...field} className="p-2 text-xs mt-2 border border-gray-300 rounded focus:outline-none focus:border-customBlue h-32" />}
          />
          {errors.message && <span className="text-red-900">{errors.message.message}</span>}
        </div>


        <button className="h-10 md:w-30 text-xl font-bold py-1 rounded-lg px-6 mx-auto mt-10 bg-customBlue text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-customBlue hover:border-4 hover:border-slate-950" type="submit">Submit</button>

      </form>
    </div>


  );
};

export default ContactForm;
