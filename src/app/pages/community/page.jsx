import Header from "@/app/components/header";
import SendEmail from "@/app/components/sendemail";
// import React from "react";
import Image from "next/image";
import Footer from "@/app/components/footer";

const Community = () => {
  return (
    <div>
      <Header />
      <SendEmail />

      <section className="px-10 py-20">
        <h1 className="text-blue-700 text-3xl text-center font-bold py-2">
          What you will find in our community
        </h1>
        <div className="flex items-center space-x-16 p-10">
          <div className="flex flex-col space-y-2 w-1/2">
            <div>
              <p className="bg-blue-900  text-white p-1 flex items-center justify-center mt-2 h-7 w-9 rounded-full">
                01
              </p>
              <p className="text-black font-bold my-2">Discussion Forum</p>
              <p className="text-sm text-stone-500">
                We deliver, Engage in meaningful conversation about confidence
                skill building and overcoming fears
              </p>
            </div>
            <div>
              <p className="bg-blue-900  text-white p-1 flex items-center justify-center mt-2 h-7 w-9 rounded-full">
                02
              </p>
              <p className="text-black font-bold my-2">
                Live Webinars & Events
              </p>
              <p className="text-sm text-stone-500">
                Attend exclusive workshops, question and answer session with
                industry experts
              </p>
            </div>
            <div>
              <p className="bg-blue-900  text-white p-1 flex items-center justify-center mt-2 h-7 w-9 rounded-full">
                03
              </p>
              <p className="text-black font-bold my-2">Resources sharing</p>
              <p className="text-sm text-stone-500">
                Access curated tools, templates, and guides to boost your
                learning
              </p>
            </div>
            <div>
              <p className="bg-blue-900  text-white p-1 flex items-center justify-center mt-2 h-7 w-9 rounded-full">
                04
              </p>
              <p className="text-black font-bold my-2">Peer support group</p>
              <p className="text-sm text-stone-500">
                Join smaller focused groups that aligns with your interests and
                goals
              </p>
            </div>
          </div>
          <Image
            src="/assets/community.jpg"
            alt="Community Image"
            width={1500}
            height={1500}
            className="shadow-lg rounded-lg shadow-stone-500 w-1/2"
          />
        </div>
      </section>

      <section className="p-10 bg-stone-50">
        <h1 className="text-blue-700 text-3xl text-left font-bold py-2 mb-3">
          Need more HELP?
        </h1>
        <div className="flex items-start justify-between mt-8">
          <div>
            <h1 className="font-semibold pb-2">Account Management</h1>
            <ul className="text-stone-600 flex flex-col items-start space-y-2">
              <li>Create Account</li>
              <li>Edit Account</li>
              <li>Delete Account</li>
            </ul>
          </div>
          <div className="w-[0.05rem] h-40 bg-stone-300"></div>
          <div>
            <h1 className="font-semibold pb-2">Information and Training</h1>
            <ul className="text-stone-600 flex flex-col items-start space-y-2">
              <li>Onboarding</li>
              <li>Courses</li>
              <li>Handbook</li>
              <li>News</li>
            </ul>
          </div>
          <div className="w-[0.05rem] h-40 bg-stone-300"></div>
          <div>
            <h1 className="font-semibold  pb-2">Payment & Billing</h1>
            <ul className="text-stone-600 flex flex-col items-start space-y-2 leading-relaxed">
              <li>Payment details</li>
              <li>Refunds</li>
              <li>Subscription details</li>
            </ul>
          </div>
          <div className="w-[0.05rem] h-40 bg-stone-300"></div>
          <div>
            <h1 className="font-semibold pb-2"> Certificates</h1>
            <ul className="text-stone-600 flex flex-col items-start space-y-2 leading-relaxed">
              <li>Payment details</li>
              <li>Refunds</li>
              <li>Subscription details</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-start justify-between bg-blue-50 px-10 py-20 mx-auto">
        <div className="w-1/3">
          <p className="text-stone-400">Contact info</p>
          <h1 className="text-blue-700 text-3xl text-left font-bold py-2 mb-3">
            We are always happy to assist you
          </h1>
        </div>
        <div className="w-[14%]">
          <p>Email Address</p>
          <div className="bg-black w-10 h-[0.05rem]"></div>
          <p className="my-3">help@info.com</p>
          <p className="text-stone-500 text-sm">
            Assistance hours:Monday-Friday <br />
            6am to 8pm
          </p>
        </div>
        <div className="w-[14%]">
          <p>Number</p>
          <div className="bg-black w-10 h-[0.05rem]"></div>
          <p className="my-3">07030459697</p>
          <p className="text-stone-500 text-sm">
            Assistance hours:Monday-Friday <br />
            6am to 8pm
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Community;
