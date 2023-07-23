
import img from '../../assets/michal-biernat-h0xEUQXzU38-unsplash.jpg'
const Contact = () => {
    return (
        <div className=' mt-10'>
   
        <p className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
            Contact Us
          </p>
          <h1 className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></h1>
    
       
       <div 
          className={`xl:mt-12 flex md:flex-row flex-col-reverse gap-5 justify-evenly overflow-hidden`}
        >
         
            {/* img */}
            <div className="text-center md:mt-16 mt-1  md:w-1/4">
           <img src={img} alt='contact' className='w-[600px]'></img>
          </div>
        {/* form */}
          <div
            
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-1/2'
          >
           
    
            <form
             
              className='mt-12 flex flex-col gap-8 text-black'
            >
             <div className="flex flex-row justify-between gap-3">
             <label className='flex flex-col w-full'>
                <span className='text-black font-medium mb-4'>Name</span>
                <input
                  type='text'
                  name='name'
                 required
                  placeholder="*Name"
                  className='bg-tertiary py-4 px-6  text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col w-full'>
                <span className='text-black font-medium mb-4'>Email</span>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder="*Email"
                  className='bg-tertiary py-4 px-6  text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
             </div>
              <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'>Subject</span>
                <input
                  type='text'
                  name='subject'
                  required
                  placeholder="*Subject"
                  className='bg-tertiary py-4 px-6  text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
            
              <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'>Your Message</span>
                <textarea
                  rows={7}
                  name='message'
                 required
                  placeholder='*Message'
                  className='bg-tertiary py-4 px-6  text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
    
              <button className="btn hover:-hue-rotate-90  text-black btn-primary bg-gradient-to-r via-purple-300 from-cyan-500 to to-purple-800">Send Message </button>
            </form>
          </div>
        </div>
       
       
       </div>
    );
};

export default Contact;