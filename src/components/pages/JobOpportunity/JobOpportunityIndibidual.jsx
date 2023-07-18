import { Link, useParams } from "react-router-dom";
import natureImg from "../../../assets/job-opportunity/natureImg.jpg";
import { useState, useEffect } from "react";

const JobOpportunityIndibidual = () => {
  const jobId = useParams();

  const [indibidualJob, setIndibidualJob] = useState({});

  useEffect(() => {
    fetch("/public/indibidualJob.json")
      .then((res) => res.json())
      .then((data) => {
        const singleJob = data.find((job) => (job.id = jobId));
        setIndibidualJob(singleJob);
      });
  }, [jobId]);


  return (
    <div className="md:mt-[80px] mt-[70px] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="my-[32px] lg:my-[60px]">
        <h1 className="text-left-[35px] font-[700] text-center">Job Opportunity</h1>
      </div>
      <div>
        <ul className="md:flex justify-between grid grid-cols-2 border-b-2 border-black font-bold">
          <li className="text-red-600 ml-1">
            <Link>All</Link>
          </li>
          <li>
            <Link>Remote</Link>
          </li>
          <li>
            <Link>Development</Link>
          </li>
          <li>
            <Link>Project Manager</Link>
          </li>
          <li>
            <Link>Design</Link>
          </li>
          <li className="mr-1">
            <Link>Product Designer</Link>
          </li>
        </ul>
      </div>
      <div className="my-[32px] lg:my-[60px] bg-[#ed1b2405] rounded-lg">
        <div className="p-12 md:flex items-center">
          <img className="w-[150px] h-[150px] rounded-full mr-12" src={natureImg} alt="jobIMG" />
          <div className="mt-5 w-full">
            <h4 className="mb-1 font-bold">{indibidualJob?.headline}</h4>
            <div className="font-semibold">
              <p>{indibidualJob.address}</p>
              <p className="mb-1">{indibidualJob.address2}</p>
              <p>{indibidualJob.vacancy}</p>
              <div className="border-b-[1px] border-[#ed1b24] w-full mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[32px] lg:my-[60px] md:flex justify-between items-center">
        <div className="py-2 w-[320px] h-[400px] lg:w-[500px] lg:h-[536px] overflow-y-scroll ">
          <div>
            <h4 className="font-bold mb-4">Job Description</h4>
            <p className="ml-5 mb-3"> − {indibidualJob.description}</p>
            <p className="ml-5"> − {indibidualJob.description}</p>
          </div>

          <div className="mt-5">
            <h4 className="font-bold mb-4">Job Responsibility</h4>
            <p className="ml-5 mb-3"> − {indibidualJob.Job_Responsibility}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Job_Responsibility}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Job_Responsibility}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Job_Responsibility}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Job_Responsibility}</p>
          </div>

          <div className="mt-5">
            <h4 className="font-bold mb-4">Additional Requiremets</h4>
            <p className="ml-5 mb-3"> − {indibidualJob.Additional_Requirement}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Additional_Requirement}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Additional_Requirement}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Additional_Requirement}</p>
          </div>

          <div className="mt-5">
            <h4 className="font-bold mb-4"> Employee Status</h4>
            <p className="ml-5 mb-3"> {indibidualJob.Employee_Status}</p>
          </div>

          <div className="mt-5">
            <h4 className="font-bold mb-4">Educational Requiremets</h4>
            <p className="ml-5 mb-3"> − {indibidualJob.Educational_Requirements}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Educational_Requirements}</p>
          </div>

          <div className="mt-5">
            <h4 className="font-bold mb-4"> Experiences</h4>
            <p className="ml-5 mb-3"> {indibidualJob.Experience}</p>
          </div>

          <div className="mt-5">
            <h4 className="font-bold mb-4"> Job Location</h4>
            <p className="ml-5 mb-3"> {indibidualJob.Job_Location}</p>
          </div>

          <div className="mt-5">
            <h4 className="font-bold mb-4">Other Benifits</h4>
            <p className="ml-5 mb-3"> − {indibidualJob.Others_Benifit}</p>
            <p className="ml-5 mb-3"> − {indibidualJob.Others_Benifit}</p>
          </div>
        </div>
        <div className="bg-white py-2 w-[320px] h-[500px] lg:w-[500px] lg:h-[536px] ">
          <h3 className="font-bold text-center my-3">Summary of this job</h3>
          <div className="border-b-[2px] border-[#ed1b24] w-56 lg:w-96 mx-auto"></div>
          <div className="p-10">
            <p className="font-semibold mb-3">Published on: {indibidualJob.published_date} </p>
            <p className="font-semibold mb-3">Vacancy: {indibidualJob.vacancy} </p>
            <p className="font-semibold mb-3">Employee Status: {indibidualJob.Employee_Status} </p>
            <p className="font-semibold mb-3">Experience: {indibidualJob.Experience}</p>
            <p className="font-semibold mb-3">Job Location: {indibidualJob.Job_Location}</p>
            <p className="font-semibold mb-3">Salary: {indibidualJob.salary}</p>
            <p className="font-semibold mb-3">Application Deadline: {indibidualJob.Application_Deadline}</p>
          </div>
          <div className="text-center">
            <button className="btn text-white bg-[#ed1b24] px-12 py-2 lg:mt-5 rounded">Apply</button>
          </div>
        </div>
      </div>
      <div>
        <div className="my-[32px] lg:my-[60px] text-center">
          <h3 className="font-bold text-center my-3">Job Apply Requirement</h3>
          <p className=" mb-3"> − {indibidualJob.Job_Apply_Requirement}</p>
          <p className=" mb-3"> − {indibidualJob.Job_Apply_Requirement}</p>
          <p className=" mb-3"> − {indibidualJob.Job_Apply_Requirement}</p>
          <p className=" mb-3"> − {indibidualJob.Job_Apply_Requirement}</p>
          <div>
            <button className="btn btn-effect text-white bg-[#ed1b24] px-12 py-2 mt-5 rounded">Apply</button>
          </div>
          <p className="my-2">or</p>
          <p className="mb-2">Send your CV to career@museam.com </p>
          <p className="mb-2">Application deadline: 30 jun 2023 </p>
        </div>
        <div className="mt-5 md:w-3/4 mx-auto">
          <h4 className="font-bold text-center my-5">Company Information</h4>
          <p className="ml-5 mb-3">Company Name: Ai Career Expert </p>
          <p className="ml-5 mb-3">Address: {indibidualJob.address}</p>
          <p className="ml-5 mb-3">
            Business: A software development Company organised and incorporated in 2016 under the Companies Act of
            Bangladesh, currently offering specialised Apps globally through the iOS App Store and the Google Play
            Store.
          </p>
        </div>
      </div>
      <div className="my-[32px] lg:my-[60px] text-center border-b-2 border-red-600 w-40 mx-auto">
        <p className="font-bold text-red-600">
          Job Source <br /> Ai Career Expert
        </p>
      </div>
    </div>
  );
};

export default JobOpportunityIndibidual;
