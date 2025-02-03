import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { lawColleges } from "../../../content/LawCollegeData";

const CollegeInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const college = location.state?.college;

  if (!college) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-gray-700">College not found!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="py-12 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => navigate("/courses/LAW")}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        ← Back to List
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-3xl font-semibold text-gray-800">{college.name}</h3>

        <p className="text-lg text-gray-600 mt-2">{college.description}</p>

        {college.admissionProcess && (
          <>
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              Admission Process:
            </h4>
            <p className="text-gray-600">{college.admissionProcess}</p>
          </>
        )}

        {college.eligibility && college.eligibility.length > 0 && (
          <>
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              Eligibility Criteria:
            </h4>
            <ul className="list-disc list-inside text-gray-600">
              {college.eligibility.map((criteria, idx) => (
                <li key={idx}>{criteria}</li>
              ))}
            </ul>
          </>
        )}

        {college.totalIntake && (
          <>
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              Total Intake:
            </h4>
            <p className="text-gray-600">{college.totalIntake} students</p>
          </>
        )}

        {college.categorySeats && college.categorySeats.length > 0 && (
          <>
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              Seats Distribution:
            </h4>
            <ul className="list-disc list-inside text-gray-600">
              {college.categorySeats.map((seat, idx) => {
                if (seat.seats) {
                  return (
                    <li key={idx}>
                      {seat.category}: {seat.seats} seats
                    </li>
                  );
                } else if (
                  seat.seatsForAllIndia ||
                  seat.seatsForWestBengal ||
                  seat.totalSeats
                ) {
                  return (
                    <li key={idx}>
                      <strong>{seat.category}</strong> –{" "}
                      {seat.seatsForAllIndia && (
                        <>All India: {seat.seatsForAllIndia}; </>
                      )}
                      {seat.seatsForWestBengal && (
                        <>West Bengal: {seat.seatsForWestBengal}; </>
                      )}
                      {seat.totalSeats && <>Total Seats: {seat.totalSeats}; </>}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </>
        )}

        {college.additionalReservation && (
          <>
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              Additional Reservation:
            </h4>
            <p className="text-gray-600">{college.additionalReservation}</p>
          </>
        )}

        {college.courseStructure && (
          <>
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              Course Structure:
            </h4>
            <p className="text-gray-600">{college.courseStructure}</p>
          </>
        )}

        {college.feeStructure && (
          <>
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              Fee Structure:
            </h4>
            <p className="text-gray-600">{college.feeStructure}</p>
          </>
        )}

        {college.placement && (
          <>
            <h4 className="text-xl font-semibold text-gray-800 mt-4">
              Placement & Average Package:
            </h4>
            <p className="text-gray-600">{college.placement}</p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default CollegeInfo;
