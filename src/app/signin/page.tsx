import signInImage from '../assets/signIn.png'


export default function signInPage() {
  return (
    <section className="h-screen">
      <div className="">
        <div className="flex justify-evenly shadow-xl h-30 ">
          <h1 className="text-gray-900 text-3xl">
            naira<span className="text-orange-600">refill</span>
          </h1>
          <button className="bg-orange-600 text-white">Register</button>
          <button className="bg-white text-orange-600">Login</button>
        </div>

        <div className="flex flex-row justify-center items-center mt-20">
          <div>
            <h1 className='text-2xl'>We've Missed You</h1>
            <p className=''>
              Kindly signin and get first access to the very best, community and
              unlock more opportunities.
            </p>
            <label>Email:</label>
            <input type="email" className='border-2 border-gray-600 w-[100px}' />
                <br />
                <br />
            <label>Password:</label>
            <input type="password" className='border-2 border-gray-600' />
                <br />
                <br />
           <div>
           <button className='w-[300px] bg-orange-600'>Login</button>
            </div> 

            <div className='text-sm'>Forgot username or password</div>
            <div className='text-sm'>Don't have an account? <a href="" className='text-blue-600'>Sign Up</a></div>
          </div>

          <div>
            <img src={signInImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
