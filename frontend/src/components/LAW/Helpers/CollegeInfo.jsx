import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
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
        className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded shadow-md 
                   hover:scale-105 transition-transform duration-300"
      >
        ← Back to List
      </button>

      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 shadow-xl rounded-lg p-8">
        <h3 className="text-4xl font-bold text-gray-800">{college.name}</h3>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          {college.description}
        </p>

        {/* Admission Process */}
        {college.admissionProcess && (
          <section className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Admission Process:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {college.admissionProcess}
            </p>
          </section>
        )}

        {/* Eligibility Criteria */}
        {college.eligibility && college.eligibility.length > 0 && (
          <section className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Eligibility Criteria:
            </h4>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {college.eligibility.map((criteria, idx) => (
                <li key={idx}>{criteria}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Total Intake */}
        {college.totalIntake && (
          <section className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Total Intake:
            </h4>
            <p className="text-gray-700">{college.totalIntake} students</p>
          </section>
        )}

        {/* Seats Distribution */}
        {college.categorySeats && college.categorySeats.length > 0 && (
          <section className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Seats Distribution:
            </h4>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {college.categorySeats.map((seat, idx) => (
                <li key={idx}>
                  {seat.category}:{" "}
                  {seat.seatsForAllIndia &&
                    `All India: ${seat.seatsForAllIndia}`}
                  {seat.seatsForWestBengal &&
                    ` West Bengal: ${seat.seatsForWestBengal}`}
                  {seat.totalSeats && ` Total Seats: ${seat.totalSeats}`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Additional Reservation */}
        {college.additionalReservation && (
          <section className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Additional Reservation:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {college.additionalReservation}
            </p>
          </section>
        )}

        {/* Course Structure */}
        {college.courseStructure && (
          <section className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Course Structure:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {college.courseStructure}
            </p>
          </section>
        )}

        {/* Fee Structure */}
        {college.feeStructure && (
          <section className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Fee Structure:
            </h4>
            <p className="text-gray-700">{college.feeStructure}</p>
          </section>
        )}

        {/* Placement */}
        {college.placement && (
          <section className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Placement & Average Package:
            </h4>
            <p className="text-gray-700">{college.placement}</p>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default CollegeInfo;
